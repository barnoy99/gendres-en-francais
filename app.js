(function () {
  'use strict';

  // ─── CONSTANTS ─────────────────────────────────────────
  var STORAGE_KEY = 'genresFR_state';
  var VERSION = 2;
  var QUIZ_SIZE = 15;
  var LESSON_Q = 8;
  var RECENT_MAX = 60;
  var VERB_LESSON_Q = 5;

  // ─── MODULE STATE ──────────────────────────────────────
  var state;
  var currentLessonSuffix = null;
  var quiz = null;
  var advanceTimer = null;

  var currentVerbLesson = null;
  var vquiz = null;

  // ─── DOM ───────────────────────────────────────────────
  function $(id) { return document.getElementById(id); }

  // ─── PERSISTENCE ───────────────────────────────────────
  function defaults() {
    return {
      version: VERSION,
      scores: {},
      suffixQueue: [],
      queueIndex: 0,
      recentWords: [],
      totalSessions: 0,
      verbScores: {},
      verbConfusions: {},
      verbQueue: [],
      verbQueueIndex: 0,
      verbRecentSentences: [],
      verbSessions: 0,
      deletedVerbs: []
    };
  }

  function migrate(s) {
    if (!s || !s.version) return defaults();
    if (s.version === 1) {
      s.version = 2;
      s.verbScores = {};
      s.verbConfusions = {};
      s.verbQueue = [];
      s.verbQueueIndex = 0;
      s.verbRecentSentences = [];
      s.verbSessions = 0;
      s.deletedVerbs = [];
    }
    if (!s.deletedVerbs) s.deletedVerbs = [];
    return s;
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaults();
      var s = JSON.parse(raw);
      if (!s) return defaults();
      if (s.version !== VERSION) return migrate(s);
      return s;
    } catch (e) { return defaults(); }
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  // ─── UTILITIES ─────────────────────────────────────────
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function weightedPick(items, weights) {
    var sum = 0;
    for (var i = 0; i < weights.length; i++) sum += weights[i];
    var r = Math.random() * sum;
    for (var i = 0; i < items.length; i++) {
      r -= weights[i];
      if (r <= 0) return items[i];
    }
    return items[items.length - 1];
  }

  function sfx(id) {
    for (var i = 0; i < SUFFIXES.length; i++) {
      if (SUFFIXES[i].id === id) return SUFFIXES[i];
    }
    return null;
  }

  function isVerbDeleted(id) {
    return state.deletedVerbs && state.deletedVerbs.indexOf(id) >= 0;
  }

  function activeVerbs() {
    var result = [];
    for (var i = 0; i < VERBS.length; i++) {
      if (!isVerbDeleted(VERBS[i].id)) result.push(VERBS[i]);
    }
    return result;
  }

  function verbById(id) {
    for (var i = 0; i < VERBS.length; i++) {
      if (VERBS[i].id === id) return VERBS[i];
    }
    return null;
  }

  // ─── GENDER / ARTICLE HELPERS ──────────────────────────
  function isVowel(word) {
    if (H_ASPIRE.has(word)) return false;
    return /^[aeéèêëàâäiîïoôùûüyh]/i.test(word);
  }

  function artDef(g, nextWord) {
    if (isVowel(nextWord)) return "l'";
    return g === 'm' ? 'le' : 'la';
  }

  function artIndef(g) { return g === 'm' ? 'un' : 'une'; }

  function artDem(g, nextWord) {
    if (g === 'f') return 'cette';
    return isVowel(nextWord) ? 'cet' : 'ce';
  }

  function artPos(g, nextWord) {
    if (g === 'f' && isVowel(nextWord)) return 'mon';
    return g === 'm' ? 'mon' : 'ma';
  }

  function pronoun(g) { return g === 'm' ? 'Il' : 'Elle'; }
  function ppEnd(g) { return g === 'f' ? 'e' : ''; }

  function adjForm(a, g, word, pos) {
    if (pos === 'pre' && g === 'm' && a.mVowel && isVowel(word))
      return a.mVowel;
    return g === 'm' ? a.m : a.f;
  }

  // ─── ENGLISH HELPERS ────────────────────────────────────
  function aOrAn(nextWord) {
    return /^[aeiou]/i.test(nextWord) ? 'an' : 'a';
  }

  function genEnglish(word, tpl, adjective) {
    var nEn = NOUN_EN[word] || word;
    var adjEn = adjective.en || adjective.m;
    var s = tpl.enPattern;
    s = s.replace('{n}', nEn);
    s = s.replace('{adj}', adjEn);
    s = s.replace('{a}', aOrAn(adjEn));
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // ─── SENTENCE GENERATION (GENDER MODE) ────────────────
  function genPair(word, suffix, tpl, adjective) {
    var g = suffix.gender;
    var wrong = g === 'm' ? 'f' : 'm';

    function fill(gender) {
      var s = tpl.pattern;

      var adjText = null;
      if (tpl.adjPos === 'pre') {
        adjText = adjForm(adjective, gender, word, 'pre');
      }
      var next = adjText || word;

      s = s.replace('{da}', artDef(gender, next));
      s = s.replace('{ia}', artIndef(gender));
      s = s.replace('{dem}', artDem(gender, next));
      s = s.replace('{pos}', artPos(gender, next));
      s = s.replace('{n}', word);
      s = s.replace('{pro}', pronoun(gender));
      s = s.replace('{pp}', ppEnd(gender));

      if (adjText) {
        s = s.replace('{apr}', adjText);
      } else {
        s = s.replace('{ap}', adjForm(adjective, gender, word, 'post'));
      }

      s = s.replace(/'\s/g, "'");
      return s.charAt(0).toUpperCase() + s.slice(1);
    }

    return { correct: fill(g), incorrect: fill(wrong), english: genEnglish(word, tpl, adjective) };
  }

  // ─── SUFFIX SELECTION (weighted rotation) ──────────────
  function weak(id) {
    var s = state.scores[id];
    if (!s || s.total === 0) return 0.4;
    return 1 - s.correct / s.total;
  }

  function buildQueue() {
    var ids = [];
    for (var i = 0; i < SUFFIXES.length; i++) ids.push(SUFFIXES[i].id);
    ids.sort(function (a, b) { return weak(b) - weak(a); });

    var q = ids.slice();
    for (var i = 0; i < ids.length; i++) {
      var w = weak(ids[i]);
      if (w > 0.3) q.splice(1 + Math.floor(Math.random() * (q.length - 1)), 0, ids[i]);
      if (w > 0.5) q.splice(1 + Math.floor(Math.random() * (q.length - 1)), 0, ids[i]);
      if (w > 0.7) q.splice(1 + Math.floor(Math.random() * (q.length - 1)), 0, ids[i]);
    }
    return q;
  }

  function pickSuffix() {
    if (!state.suffixQueue.length || state.queueIndex >= state.suffixQueue.length) {
      state.suffixQueue = buildQueue();
      state.queueIndex = 0;
    }
    var id = state.suffixQueue[state.queueIndex];
    state.queueIndex++;
    save();
    return sfx(id);
  }

  // ─── QUIZ GENERATION (GENDER MODE) ────────────────────
  function makeQ(word, suffix) {
    var tpl = pick(TEMPLATES);
    var fullPool = tpl.adjPos === 'pre' ? ADJECTIVES_PRE : ADJECTIVES_POST;
    var compat = SUFFIX_ADJ[suffix.id];
    var compatList = compat ? (tpl.adjPos === 'pre' ? compat.pre : compat.post) : null;
    var pool = fullPool;
    if (compatList) {
      var filtered = [];
      for (var j = 0; j < fullPool.length; j++) {
        if (compatList.indexOf(fullPool[j].m) >= 0) filtered.push(fullPool[j]);
      }
      if (filtered.length) pool = filtered;
    }
    var a = pick(pool);
    var pair = genPair(word, suffix, tpl, a);
    var cPos = Math.random() < 0.5 ? 'a' : 'b';

    return {
      word: word,
      suffixId: suffix.id,
      suffix: suffix,
      correct: pair.correct,
      incorrect: pair.incorrect,
      english: pair.english,
      correctPos: cPos,
      textA: cPos === 'a' ? pair.correct : pair.incorrect,
      textB: cPos === 'b' ? pair.correct : pair.incorrect
    };
  }

  function genQuiz(lesson) {
    var avoid = {};
    for (var i = 0; i < state.recentWords.length; i++) avoid[state.recentWords[i]] = true;

    var questions = [];
    var used = [];

    var pool = [];
    for (var i = 0; i < lesson.words.length; i++) {
      if (!avoid[lesson.words[i]]) pool.push(lesson.words[i]);
    }
    if (pool.length < LESSON_Q) pool = lesson.words.slice();

    var lWords = shuffle(pool).slice(0, LESSON_Q);
    for (var i = 0; i < lWords.length; i++) {
      questions.push(makeQ(lWords[i], lesson));
      used.push(lWords[i]);
      avoid[lWords[i]] = true;
    }

    var others = [];
    var weights = [];
    for (var i = 0; i < SUFFIXES.length; i++) {
      if (SUFFIXES[i].id !== lesson.id) {
        others.push(SUFFIXES[i]);
        weights.push(0.1 + 0.9 * Math.pow(weak(SUFFIXES[i].id), 0.5));
      }
    }

    var remaining = QUIZ_SIZE - lWords.length;
    for (var i = 0; i < remaining; i++) {
      var s = weightedPick(others, weights);
      var wPool = [];
      for (var j = 0; j < s.words.length; j++) {
        if (!avoid[s.words[j]]) wPool.push(s.words[j]);
      }
      var w = wPool.length ? pick(wPool) : pick(s.words);
      questions.push(makeQ(w, s));
      used.push(w);
      avoid[w] = true;
    }

    state.recentWords = state.recentWords.concat(used).slice(-RECENT_MAX);
    save();
    return shuffle(questions);
  }

  // ─── SCREEN MANAGEMENT ────────────────────────────────
  function showScreen(id) {
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) screens[i].classList.remove('screen--active');
    $(id).classList.add('screen--active');
    window.scrollTo(0, 0);
  }

  // ─── HOME SCREEN ──────────────────────────────────────
  function showHome() {
    showScreen('screen-home');
  }

  // ─── RENDER: LESSON (GENDER) ──────────────────────────
  function renderLesson(s) {
    var badge = $('lesson-badge');
    badge.textContent = s.suffix;
    badge.className = 'suffix-badge gender-' + s.gender;

    var lbl = $('lesson-gender-label');
    lbl.textContent = s.gender === 'f' ? 'est féminine' : 'est masculin';
    lbl.className = 'lesson-gender-label gender-' + s.gender;

    $('lesson-rule').textContent = s.rule;
    $('lesson-explanation').textContent = s.explanation;

    var list = $('lesson-examples');
    list.innerHTML = '';
    var examples = shuffle(s.words).slice(0, 6);
    for (var i = 0; i < examples.length; i++) {
      var w = examples[i];
      var li = document.createElement('li');
      var art = artDef(s.gender, w);
      var span = document.createElement('span');
      span.className = 'article gender-' + s.gender;
      span.textContent = art;
      li.appendChild(span);
      li.appendChild(document.createTextNode(art.endsWith("'") ? w : ' ' + w));
      list.appendChild(li);
    }

    showScreen('screen-lesson');
  }

  // ─── RENDER: QUIZ QUESTION (GENDER) ───────────────────
  function renderQ() {
    var q = quiz.questions[quiz.index];
    var n = quiz.questions.length;

    $('quiz-counter').textContent = 'Question ' + (quiz.index + 1) + ' / ' + n;
    $('quiz-progress').style.width = (quiz.index / n * 100) + '%';
    $('quiz-text-a').textContent = q.textA;
    $('quiz-text-b').textContent = q.textB;

    var oa = $('quiz-option-a');
    var ob = $('quiz-option-b');
    oa.className = 'option-card'; oa.disabled = false;
    ob.className = 'option-card'; ob.disabled = false;

    $('quiz-feedback').classList.add('hidden');
    document.querySelector('.quiz-content').style.display = '';
  }

  // ─── FEEDBACK (GENDER) ────────────────────────────────
  function showFeedback(chosen) {
    var q = quiz.questions[quiz.index];
    var ok = chosen === q.correctPos;

    quiz.answers.push({ suffixId: q.suffixId, correct: ok, word: q.word });

    if (!state.scores[q.suffixId])
      state.scores[q.suffixId] = { correct: 0, total: 0 };
    state.scores[q.suffixId].total++;
    if (ok) state.scores[q.suffixId].correct++;
    save();

    var oa = $('quiz-option-a');
    var ob = $('quiz-option-b');
    oa.disabled = true; ob.disabled = true;
    oa.classList.add('disabled'); ob.classList.add('disabled');

    if (q.correctPos === 'a') {
      oa.classList.add('correct');
      if (!ok) ob.classList.add('incorrect');
    } else {
      ob.classList.add('correct');
      if (!ok) oa.classList.add('incorrect');
    }

    $('feedback-icon').textContent = ok ? '✓' : '✗';
    var lbl = $('feedback-label');
    lbl.textContent = ok ? 'Correct !' : 'Incorrect';
    lbl.className = 'feedback-label ' + (ok ? 'correct' : 'incorrect');
    $('feedback-correct-text').textContent = q.correct;

    var ruleSection = $('feedback-rule');
    if (ok) {
      ruleSection.classList.add('hidden');
    } else {
      ruleSection.classList.remove('hidden');
      $('feedback-rule-text').textContent = q.suffix.rule;

      var exList = $('feedback-examples');
      exList.innerHTML = '';
      var candidates = [];
      for (var i = 0; i < q.suffix.words.length; i++) {
        if (q.suffix.words[i] !== q.word) candidates.push(q.suffix.words[i]);
      }
      var exWords = shuffle(candidates).slice(0, 2);
      for (var i = 0; i < exWords.length; i++) {
        var li = document.createElement('li');
        var ar = artDef(q.suffix.gender, exWords[i]);
        li.textContent = (ar.endsWith("'") ? ar : ar + ' ') + exWords[i];
        exList.appendChild(li);
      }
    }

    $('feedback-translation').textContent = q.english;

    $('quiz-feedback').classList.remove('hidden');

    setTimeout(function () {
      $('quiz-feedback').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  }

  // ─── ADVANCE / FINISH (GENDER) ────────────────────────
  function advance() {
    if (advanceTimer) { clearTimeout(advanceTimer); advanceTimer = null; }

    quiz.index++;
    if (quiz.index >= quiz.questions.length) {
      $('quiz-progress').style.width = '100%';
      state.totalSessions++;
      save();
      setTimeout(renderResults, 350);
    } else {
      renderQ();
    }
  }

  // ─── RENDER: RESULTS (GENDER) ─────────────────────────
  function renderResults() {
    var total = quiz.answers.length;
    var correct = 0;
    for (var i = 0; i < quiz.answers.length; i++) {
      if (quiz.answers[i].correct) correct++;
    }
    var pct = Math.round(correct / total * 100);

    $('results-score').textContent = correct + ' / ' + total;
    $('results-progress').style.width = pct + '%';

    var progFill = $('results-progress');
    if (pct >= 80) progFill.style.background = 'var(--color-correct)';
    else if (pct >= 50) progFill.style.background = 'var(--color-accent)';
    else progFill.style.background = 'var(--color-incorrect)';

    $('results-percent').textContent = pct + '%';

    var stats = {};
    for (var i = 0; i < quiz.answers.length; i++) {
      var a = quiz.answers[i];
      if (!stats[a.suffixId]) stats[a.suffixId] = { c: 0, t: 0 };
      stats[a.suffixId].t++;
      if (a.correct) stats[a.suffixId].c++;
    }

    var container = $('results-suffixes');
    var oldRows = container.querySelectorAll('.suffix-row');
    for (var i = 0; i < oldRows.length; i++) oldRows[i].remove();

    var entries = [];
    for (var id in stats) entries.push([id, stats[id]]);
    entries.sort(function (a, b) { return (a[1].c / a[1].t) - (b[1].c / b[1].t); });

    var weakId = null, weakPct = 101;
    for (var i = 0; i < entries.length; i++) {
      var id = entries[i][0], st = entries[i][1];
      var s = sfx(id);
      var p = Math.round(st.c / st.t * 100);
      if (p < weakPct) { weakPct = p; weakId = id; }

      var row = document.createElement('div');
      row.className = 'suffix-row';
      row.innerHTML =
        '<span class="suffix-row__label" style="color:var(--color-' + s.gender + ')">' + s.suffix + '</span>' +
        '<div class="suffix-row__bar"><div class="suffix-row__fill gender-' + s.gender + '" style="width:' + p + '%"></div></div>' +
        '<span class="suffix-row__pct">' + p + '%</span>';
      container.appendChild(row);
    }

    if (weakId && weakPct < 100) {
      var ws = sfx(weakId);
      $('results-weakest').classList.remove('hidden');
      $('results-weakest-suffix').textContent = ws.suffix;
      $('results-weakest-rule').textContent = ws.rule;
    } else {
      $('results-weakest').classList.add('hidden');
    }

    var errors = [];
    for (var i = 0; i < quiz.questions.length; i++) {
      if (!quiz.answers[i].correct) errors.push(quiz.questions[i]);
    }

    var revBtn = $('btn-review-errors');
    var revBox = $('results-errors-review');

    if (errors.length) {
      revBtn.classList.remove('hidden');
      revBtn.textContent = 'Revoir les erreurs';
      revBox.innerHTML = '';
      revBox.classList.add('hidden');
      for (var i = 0; i < errors.length; i++) {
        var eq = errors[i];
        var div = document.createElement('div');
        div.className = 'error-review-item';
        div.innerHTML =
          '<p class="error-review-item__wrong">' + escHtml(eq.incorrect) + '</p>' +
          '<p class="error-review-item__right">' + escHtml(eq.correct) + '</p>' +
          '<p class="error-review-item__rule">' + escHtml(eq.suffix.rule) + '</p>';
        revBox.appendChild(div);
      }
    } else {
      revBtn.classList.add('hidden');
      revBox.classList.add('hidden');
    }

    showScreen('screen-results');
  }

  function showToast(msg) {
    var el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { el.classList.add('toast--visible'); }, 10);
    setTimeout(function () {
      el.classList.remove('toast--visible');
      setTimeout(function () { el.remove(); }, 300);
    }, 2000);
  }

  function escHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  // ─── PROGRESS OVERLAY ─────────────────────────────────
  function renderProgress() {
    var list = $('progress-list');
    list.innerHTML = '';

    for (var i = 0; i < SUFFIXES.length; i++) {
      var s = SUFFIXES[i];
      var sc = state.scores[s.id];
      var p = sc && sc.total ? Math.round(sc.correct / sc.total * 100) : 0;
      var hasData = sc && sc.total > 0;

      var row = document.createElement('div');
      row.className = 'suffix-row';
      row.innerHTML =
        '<span class="suffix-row__label" style="color:var(--color-' + s.gender + ')">' + s.suffix + '</span>' +
        '<div class="suffix-row__bar"><div class="suffix-row__fill gender-' + s.gender + '" style="width:' + p + '%"></div></div>' +
        '<span class="suffix-row__pct">' + (hasData ? p + '%' : '—') + '</span>';
      list.appendChild(row);
    }
    $('overlay-progress').classList.remove('hidden');
  }

  function renderVerbProgress() {
    var list = $('progress-list');
    list.innerHTML = '';
    var av = activeVerbs();

    for (var i = 0; i < av.length; i++) {
      var v = av[i];
      var sc = state.verbScores[v.id];
      var p = sc && sc.total ? Math.round(sc.correct / sc.total * 100) : 0;
      var hasData = sc && sc.total > 0;
      var cat = v.prep === 'à' ? 'a' : (v.prep === 'de' ? 'de' : 'none');
      var colorVar = '--color-prep-' + cat;

      var row = document.createElement('div');
      row.className = 'suffix-row';
      row.innerHTML =
        '<span class="suffix-row__label" style="color:var(' + colorVar + ')">' + v.verb + '</span>' +
        '<div class="suffix-row__bar"><div class="suffix-row__fill prep-' + cat + '" style="width:' + p + '%"></div></div>' +
        '<span class="suffix-row__pct">' + (hasData ? p + '%' : '—') + '</span>';
      list.appendChild(row);
    }
    $('overlay-progress').classList.remove('hidden');
  }

  // ─── FLOW CONTROL (GENDER) ────────────────────────────
  function newLesson() {
    currentLessonSuffix = pickSuffix();
    renderLesson(currentLessonSuffix);
  }

  function startQuiz() {
    if (!currentLessonSuffix) return;
    quiz = {
      questions: genQuiz(currentLessonSuffix),
      index: 0,
      answers: []
    };
    showScreen('screen-quiz');
    renderQ();
  }

  // ════════════════════════════════════════════════════════
  //  VERB MODE
  // ════════════════════════════════════════════════════════

  // ─── VERB SENTENCE JOINING ────────────────────────────
  function joinPrep(pre, prep, post) {
    if (!prep) return pre + ' ' + post;
    if (prep === 'de' && /^[aeéèêëàâiîïoôuûüyh]/i.test(post)) {
      return pre + " d'" + post;
    }
    return pre + ' ' + prep + ' ' + post;
  }

  // ─── VERB WEAKNESS ────────────────────────────────────
  function verbWeak(id) {
    var s = state.verbScores[id];
    if (!s || s.total === 0) return 0.4;
    return 1 - s.correct / s.total;
  }

  // ─── VERB QUEUE (weighted rotation) ───────────────────
  function buildVerbQueue() {
    var av = activeVerbs();
    var ids = [];
    for (var i = 0; i < av.length; i++) ids.push(av[i].id);
    ids.sort(function (a, b) { return verbWeak(b) - verbWeak(a); });

    var q = ids.slice();
    for (var i = 0; i < ids.length; i++) {
      var w = verbWeak(ids[i]);
      if (w > 0.3) q.splice(1 + Math.floor(Math.random() * (q.length - 1)), 0, ids[i]);
      if (w > 0.5) q.splice(1 + Math.floor(Math.random() * (q.length - 1)), 0, ids[i]);
      if (w > 0.7) q.splice(1 + Math.floor(Math.random() * (q.length - 1)), 0, ids[i]);
    }
    return q;
  }

  function pickVerb() {
    if (!state.verbQueue.length || state.verbQueueIndex >= state.verbQueue.length) {
      state.verbQueue = buildVerbQueue();
      state.verbQueueIndex = 0;
    }
    var id = state.verbQueue[state.verbQueueIndex];
    state.verbQueueIndex++;
    if (isVerbDeleted(id)) {
      state.verbQueue = buildVerbQueue();
      state.verbQueueIndex = 0;
      if (!state.verbQueue.length) return null;
      id = state.verbQueue[state.verbQueueIndex];
      state.verbQueueIndex++;
    }
    save();
    return verbById(id);
  }

  // ─── WRONG PREPOSITION SELECTION ──────────────────────
  function pickWrongPrep(verb) {
    var correct = verb.prep;
    var options;
    if (correct === '') options = ['à', 'de'];
    else if (correct === 'à') options = ['de', ''];
    else options = ['à', ''];

    var conf = state.verbConfusions[verb.id];
    if (conf) {
      var best = null, bestN = -1;
      for (var i = 0; i < options.length; i++) {
        var key = options[i] || 'none';
        var n = conf[key] || 0;
        if (n > bestN) { bestN = n; best = options[i]; }
      }
      if (bestN > 0 && Math.random() < 0.7) return best;
    }

    if (correct === '') return 'de';
    if (correct === 'à') return 'de';
    return 'à';
  }

  // ─── VERB QUIZ QUESTION GENERATION ────────────────────
  function makeVerbQ(verb, sentenceIndex) {
    var sent = verb.sentences[sentenceIndex !== undefined ? sentenceIndex : Math.floor(Math.random() * verb.sentences.length)];
    var wrongPrep = pickWrongPrep(verb);

    var correctText = joinPrep(sent.pre, verb.prep, sent.post);
    var incorrectText = joinPrep(sent.pre, wrongPrep, sent.post);

    var cPos = Math.random() < 0.5 ? 'a' : 'b';

    return {
      verbId: verb.id,
      verb: verb,
      sentence: sent,
      correct: correctText,
      incorrect: incorrectText,
      wrongPrep: wrongPrep,
      english: sent.en,
      correctPos: cPos,
      textA: cPos === 'a' ? correctText : incorrectText,
      textB: cPos === 'b' ? correctText : incorrectText
    };
  }

  function genVerbQuiz(lessonVerb) {
    var questions = [];
    var usedSentences = {};
    usedSentences[lessonVerb.id] = {};

    var indices = shuffle(Array.from({ length: lessonVerb.sentences.length }, function(_, i) { return i; }));
    var lessonCount = Math.min(VERB_LESSON_Q, indices.length);
    for (var i = 0; i < lessonCount; i++) {
      questions.push(makeVerbQ(lessonVerb, indices[i]));
      usedSentences[lessonVerb.id][indices[i]] = true;
    }

    var av = activeVerbs();
    var others = [];
    var weights = [];
    for (var i = 0; i < av.length; i++) {
      if (av[i].id !== lessonVerb.id) {
        others.push(av[i]);
        weights.push(0.1 + 0.9 * Math.pow(verbWeak(av[i].id), 0.5));
      }
    }

    var remaining = QUIZ_SIZE - lessonCount;
    for (var i = 0; i < remaining; i++) {
      var v = weightedPick(others, weights);
      var si = Math.floor(Math.random() * v.sentences.length);
      questions.push(makeVerbQ(v, si));
    }

    return shuffle(questions);
  }

  // ─── RENDER: VERB LESSON ──────────────────────────────
  function renderVerbLesson(v) {
    var cat = v.prep === 'à' ? 'a' : (v.prep === 'de' ? 'de' : 'none');
    var badge = $('verb-lesson-badge');

    var prepDisplay = v.prep ? ' ' + v.prep : '';
    badge.textContent = v.verb;
    badge.className = 'verb-badge prep-cat-' + cat;

    $('verb-lesson-en').textContent = v.en;
    $('verb-lesson-rule').textContent = v.rule;

    var list = $('verb-lesson-examples');
    list.innerHTML = '';
    var examples = shuffle(v.sentences.slice()).slice(0, 3);
    for (var i = 0; i < examples.length; i++) {
      var sent = examples[i];
      var li = document.createElement('li');

      var frText = joinPrep(sent.pre, v.prep, sent.post);
      var prepSpanHtml = '';
      if (v.prep) {
        var prepInSentence = v.prep;
        if (v.prep === 'de' && /^[aeéèêëàâiîïoôuûüyh]/i.test(sent.post)) {
          prepInSentence = "d'";
        }
        var prepClass = 'verb-prep-highlight prep-' + cat;
        frText = escHtml(sent.pre) + ' <span class="' + prepClass + '">' + escHtml(prepInSentence) + '</span> ' + escHtml(sent.post);
        if (prepInSentence === "d'") {
          frText = escHtml(sent.pre) + ' <span class="' + prepClass + '">' + escHtml(prepInSentence) + '</span>' + escHtml(sent.post);
        }
      } else {
        frText = escHtml(joinPrep(sent.pre, '', sent.post));
      }

      li.innerHTML = frText + '<span class="verb-example-en">' + escHtml(sent.en) + '</span>';
      list.appendChild(li);
    }

    showScreen('screen-verb-lesson');
  }

  // ─── RENDER: VERB QUIZ QUESTION ───────────────────────
  function renderVQ() {
    var q = vquiz.questions[vquiz.index];
    var n = vquiz.questions.length;

    $('vquiz-counter').textContent = 'Question ' + (vquiz.index + 1) + ' / ' + n;
    $('vquiz-progress').style.width = (vquiz.index / n * 100) + '%';
    $('vquiz-text-a').textContent = q.textA;
    $('vquiz-text-b').textContent = q.textB;

    var oa = $('vquiz-option-a');
    var ob = $('vquiz-option-b');
    oa.className = 'option-card'; oa.disabled = false;
    ob.className = 'option-card'; ob.disabled = false;

    $('vquiz-feedback').classList.add('hidden');
    $('screen-verb-quiz').querySelector('.quiz-content').style.display = '';
  }

  // ─── VERB FEEDBACK ────────────────────────────────────
  function showVerbFeedback(chosen) {
    var q = vquiz.questions[vquiz.index];
    var ok = chosen === q.correctPos;

    vquiz.answers.push({ verbId: q.verbId, correct: ok });

    if (!state.verbScores[q.verbId])
      state.verbScores[q.verbId] = { correct: 0, total: 0 };
    state.verbScores[q.verbId].total++;
    if (ok) state.verbScores[q.verbId].correct++;

    if (!ok) {
      if (!state.verbConfusions[q.verbId]) state.verbConfusions[q.verbId] = {};
      var wrongKey = q.wrongPrep || 'none';
      state.verbConfusions[q.verbId][wrongKey] = (state.verbConfusions[q.verbId][wrongKey] || 0) + 1;
    }
    save();

    var oa = $('vquiz-option-a');
    var ob = $('vquiz-option-b');
    oa.disabled = true; ob.disabled = true;
    oa.classList.add('disabled'); ob.classList.add('disabled');

    if (q.correctPos === 'a') {
      oa.classList.add('correct');
      if (!ok) ob.classList.add('incorrect');
    } else {
      ob.classList.add('correct');
      if (!ok) oa.classList.add('incorrect');
    }

    $('vfeedback-icon').textContent = ok ? '✓' : '✗';
    var lbl = $('vfeedback-label');
    lbl.textContent = ok ? 'Correct !' : 'Incorrect';
    lbl.className = 'feedback-label ' + (ok ? 'correct' : 'incorrect');
    $('vfeedback-correct-text').textContent = q.correct;
    $('vfeedback-translation').textContent = q.english;

    var ruleSection = $('vfeedback-rule');
    if (ok) {
      ruleSection.classList.add('hidden');
    } else {
      ruleSection.classList.remove('hidden');
      $('vfeedback-rule-text').textContent = q.verb.rule;

      var otherSentences = [];
      for (var i = 0; i < q.verb.sentences.length; i++) {
        if (q.verb.sentences[i] !== q.sentence) otherSentences.push(q.verb.sentences[i]);
      }
      if (otherSentences.length) {
        var ex = pick(otherSentences);
        $('vfeedback-example').textContent = joinPrep(ex.pre, q.verb.prep, ex.post);
      } else {
        $('vfeedback-example').textContent = '';
      }
    }

    $('vquiz-feedback').classList.remove('hidden');

    setTimeout(function () {
      $('vquiz-feedback').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  }

  // ─── VERB ADVANCE / FINISH ────────────────────────────
  function verbAdvance() {
    vquiz.index++;
    if (vquiz.index >= vquiz.questions.length) {
      $('vquiz-progress').style.width = '100%';
      state.verbSessions++;
      save();
      setTimeout(renderVerbResults, 350);
    } else {
      renderVQ();
    }
  }

  // ─── RENDER: VERB RESULTS ─────────────────────────────
  function renderVerbResults() {
    var total = vquiz.answers.length;
    var correct = 0;
    for (var i = 0; i < vquiz.answers.length; i++) {
      if (vquiz.answers[i].correct) correct++;
    }
    var pct = Math.round(correct / total * 100);

    $('vresults-score').textContent = correct + ' / ' + total;
    $('vresults-progress').style.width = pct + '%';

    var progFill = $('vresults-progress');
    if (pct >= 80) progFill.style.background = 'var(--color-correct)';
    else if (pct >= 50) progFill.style.background = 'var(--color-verb-accent)';
    else progFill.style.background = 'var(--color-incorrect)';

    $('vresults-percent').textContent = pct + '%';

    var stats = {};
    for (var i = 0; i < vquiz.answers.length; i++) {
      var a = vquiz.answers[i];
      if (!stats[a.verbId]) stats[a.verbId] = { c: 0, t: 0 };
      stats[a.verbId].t++;
      if (a.correct) stats[a.verbId].c++;
    }

    var container = $('vresults-verbs');
    var oldRows = container.querySelectorAll('.suffix-row');
    for (var i = 0; i < oldRows.length; i++) oldRows[i].remove();

    var entries = [];
    for (var id in stats) entries.push([id, stats[id]]);
    entries.sort(function (a, b) { return (a[1].c / a[1].t) - (b[1].c / b[1].t); });

    var weakId = null, weakPct = 101;
    for (var i = 0; i < entries.length; i++) {
      var id = entries[i][0], st = entries[i][1];
      var v = verbById(id);
      var p = Math.round(st.c / st.t * 100);
      if (p < weakPct) { weakPct = p; weakId = id; }
      var cat = v.prep === 'à' ? 'a' : (v.prep === 'de' ? 'de' : 'none');

      var row = document.createElement('div');
      row.className = 'suffix-row';
      row.innerHTML =
        '<span class="suffix-row__label" style="color:var(--color-prep-' + cat + ')">' + escHtml(v.verb) + '</span>' +
        '<div class="suffix-row__bar"><div class="suffix-row__fill prep-' + cat + '" style="width:' + p + '%"></div></div>' +
        '<span class="suffix-row__pct">' + p + '%</span>';
      container.appendChild(row);
    }

    if (weakId && weakPct < 100) {
      var wv = verbById(weakId);
      $('vresults-weakest').classList.remove('hidden');
      $('vresults-weakest-verb').textContent = wv.verb;
      $('vresults-weakest-rule').textContent = wv.rule;
    } else {
      $('vresults-weakest').classList.add('hidden');
    }

    var errors = [];
    for (var i = 0; i < vquiz.questions.length; i++) {
      if (!vquiz.answers[i].correct) errors.push(vquiz.questions[i]);
    }

    var revBtn = $('btn-verb-review-errors');
    var revBox = $('vresults-errors-review');

    if (errors.length) {
      revBtn.classList.remove('hidden');
      revBtn.textContent = 'Revoir les erreurs';
      revBox.innerHTML = '';
      revBox.classList.add('hidden');
      for (var i = 0; i < errors.length; i++) {
        var eq = errors[i];
        var div = document.createElement('div');
        div.className = 'error-review-item';
        div.innerHTML =
          '<p class="error-review-item__wrong">' + escHtml(eq.incorrect) + '</p>' +
          '<p class="error-review-item__right">' + escHtml(eq.correct) + '</p>' +
          '<p class="error-review-item__rule">' + escHtml(eq.verb.rule) + '</p>';
        revBox.appendChild(div);
      }
    } else {
      revBtn.classList.add('hidden');
      revBox.classList.add('hidden');
    }

    showScreen('screen-verb-results');
  }

  // ─── VERB FLOW CONTROL ────────────────────────────────
  function newVerbLesson() {
    currentVerbLesson = pickVerb();
    renderVerbLesson(currentVerbLesson);
  }

  function startVerbQuiz() {
    if (!currentVerbLesson) return;
    vquiz = {
      questions: genVerbQuiz(currentVerbLesson),
      index: 0,
      answers: []
    };
    showScreen('screen-verb-quiz');
    renderVQ();
  }

  // ─── EVENT SETUP ───────────────────────────────────────
  function setup() {
    // Home → modes
    $('card-genre').addEventListener('click', newLesson);
    $('card-verb').addEventListener('click', newVerbLesson);

    // Genre home button
    $('btn-genre-home').addEventListener('click', showHome);

    // Genre mode
    $('btn-start-quiz').addEventListener('click', startQuiz);
    $('btn-skip-lesson').addEventListener('click', startQuiz);

    $('quiz-option-a').addEventListener('click', function () {
      if (this.disabled) return;
      showFeedback('a');
    });

    $('quiz-option-b').addEventListener('click', function () {
      if (this.disabled) return;
      showFeedback('b');
    });

    $('btn-next').addEventListener('click', advance);

    $('btn-new-lesson').addEventListener('click', newLesson);

    $('btn-review-errors').addEventListener('click', function () {
      var box = $('results-errors-review');
      var nowHidden = box.classList.toggle('hidden');
      this.textContent = nowHidden ? 'Revoir les erreurs' : 'Masquer les erreurs';
      if (!nowHidden) {
        setTimeout(function () {
          box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    });

    $('btn-progress').addEventListener('click', renderProgress);

    // Verb mode
    $('btn-verb-home').addEventListener('click', showHome);
    $('btn-verb-progress').addEventListener('click', renderVerbProgress);

    $('btn-start-verb-quiz').addEventListener('click', startVerbQuiz);
    $('btn-skip-verb-lesson').addEventListener('click', startVerbQuiz);

    $('vquiz-option-a').addEventListener('click', function () {
      if (this.disabled) return;
      showVerbFeedback('a');
    });

    $('vquiz-option-b').addEventListener('click', function () {
      if (this.disabled) return;
      showVerbFeedback('b');
    });

    $('btn-vnext').addEventListener('click', verbAdvance);

    $('btn-dismiss-verb').addEventListener('click', function () {
      if (!vquiz) return;
      var q = vquiz.questions[vquiz.index];
      if (!q) return;
      var verb = q.verb;
      if (!confirm('Retirer « ' + verb.verb + ' » définitivement ?')) return;
      if (state.deletedVerbs.indexOf(verb.id) < 0) {
        state.deletedVerbs.push(verb.id);
        state.verbQueue = [];
        state.verbQueueIndex = 0;
        save();
      }
      showToast('« ' + verb.verb + ' » retiré');
      verbAdvance();
    });

    $('btn-new-verb-lesson').addEventListener('click', newVerbLesson);

    $('btn-verb-review-errors').addEventListener('click', function () {
      var box = $('vresults-errors-review');
      var nowHidden = box.classList.toggle('hidden');
      this.textContent = nowHidden ? 'Revoir les erreurs' : 'Masquer les erreurs';
      if (!nowHidden) {
        setTimeout(function () {
          box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    });

    // Shared overlay
    $('btn-close-progress').addEventListener('click', function () {
      $('overlay-progress').classList.add('hidden');
    });

    $('overlay-progress').addEventListener('click', function (e) {
      if (e.target === this) this.classList.add('hidden');
    });

    $('btn-reset').addEventListener('click', function () {
      if (confirm('Réinitialiser tout le progrès ?')) {
        state = defaults();
        save();
        $('overlay-progress').classList.add('hidden');
        showHome();
      }
    });
  }

  // ─── INIT ──────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    state = load();
    setup();

    showHome();
  });

})();
