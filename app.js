(function () {
  'use strict';

  // ─── CONSTANTS ─────────────────────────────────────────
  var STORAGE_KEY = 'genresFR_state';
  var VERSION = 1;
  var QUIZ_SIZE = 15;
  var LESSON_Q = 5;
  var RECENT_MAX = 60;

  // ─── MODULE STATE ──────────────────────────────────────
  var state;
  var currentLessonSuffix = null;
  var quiz = null;
  var advanceTimer = null;

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
      totalSessions: 0
    };
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaults();
      var s = JSON.parse(raw);
      if (!s || s.version !== VERSION) return defaults();
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

  // ─── SENTENCE GENERATION ──────────────────────────────
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

    return { correct: fill(g), incorrect: fill(wrong) };
  }

  // ─── SUFFIX SELECTION (weighted rotation) ──────────────
  function weak(id) {
    var s = state.scores[id];
    if (!s || s.total === 0) return 0.7;
    return 1 - s.correct / s.total;
  }

  function buildQueue() {
    var ids = [];
    for (var i = 0; i < SUFFIXES.length; i++) ids.push(SUFFIXES[i].id);
    ids.sort(function (a, b) { return weak(b) - weak(a); });

    var q = ids.slice();
    for (var i = 0; i < ids.length; i++) {
      var w = weak(ids[i]);
      if (w > 0.5) q.splice(1 + Math.floor(Math.random() * (q.length - 1)), 0, ids[i]);
      if (w > 0.75) q.splice(1 + Math.floor(Math.random() * (q.length - 1)), 0, ids[i]);
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

  // ─── QUIZ GENERATION ──────────────────────────────────
  function makeQ(word, suffix) {
    var tpl = pick(TEMPLATES);
    var pool = tpl.adjPos === 'pre' ? ADJECTIVES_PRE : ADJECTIVES_POST;
    var a = pick(pool);
    var pair = genPair(word, suffix, tpl, a);
    var cPos = Math.random() < 0.5 ? 'a' : 'b';

    return {
      word: word,
      suffixId: suffix.id,
      suffix: suffix,
      correct: pair.correct,
      incorrect: pair.incorrect,
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
        weights.push(0.3 + 0.7 * weak(SUFFIXES[i].id));
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

  // ─── RENDER: LESSON ────────────────────────────────────
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

  // ─── RENDER: QUIZ QUESTION ─────────────────────────────
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

  // ─── FEEDBACK ──────────────────────────────────────────
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

    $('quiz-feedback').classList.remove('hidden');

    setTimeout(function () {
      $('quiz-feedback').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);

    if (ok) {
      advanceTimer = setTimeout(advance, 1500);
    }
  }

  // ─── ADVANCE / FINISH ─────────────────────────────────
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

  // ─── RENDER: RESULTS ──────────────────────────────────
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

  // ─── FLOW CONTROL ─────────────────────────────────────
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

  // ─── EVENT SETUP ───────────────────────────────────────
  function setup() {
    $('screen-splash').addEventListener('click', function () {
      newLesson();
    });

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
        newLesson();
      }
    });
  }

  // ─── INIT ──────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    state = load();
    setup();

    if (state.totalSessions === 0) {
      showScreen('screen-splash');
    } else {
      newLesson();
    }
  });

})();
