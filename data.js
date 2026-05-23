// ============================================================
// SUFFIX RULES + WORD BANK
// ============================================================

const SUFFIXES = [

  // ── FEMININE SUFFIXES ──────────────────────────────────────

  {
    id: "tion",
    suffix: "-tion",
    gender: "f",
    rule: "Les mots en -tion sont toujours féminins.",
    explanation: "Cette terminaison vient du latin -tio et désigne souvent une action ou un résultat. Il n'y a pas d'exception courante.",
    words: [
      "nation", "attention", "information", "éducation", "situation",
      "direction", "question", "solution", "tradition", "invitation",
      "population", "condition", "protection", "collection", "construction",
      "organisation", "imagination", "communication", "destination", "réservation"
    ]
  },

  {
    id: "sion",
    suffix: "-sion",
    gender: "f",
    rule: "Les mots en -sion sont toujours féminins.",
    explanation: "Comme -tion, cette terminaison vient du latin et désigne une action ou un état.",
    words: [
      "décision", "télévision", "passion", "discussion", "expression",
      "impression", "permission", "occasion", "dimension", "conclusion",
      "profession", "version", "mission", "session", "tension",
      "émission", "commission", "extension", "progression", "obsession"
    ]
  },

  {
    id: "ite",
    suffix: "-ité / -été",
    gender: "f",
    rule: "Les mots en -ité et -été sont toujours féminins.",
    explanation: "Ces terminaisons expriment une qualité ou un état abstrait. Elles correspondent à « -ity » en anglais.",
    words: [
      "université", "liberté", "société", "qualité", "identité",
      "activité", "réalité", "possibilité", "responsabilité", "curiosité",
      "capacité", "nationalité", "majorité", "sécurité", "diversité",
      "propriété", "créativité", "générosité", "personnalité", "électricité"
    ]
  },

  {
    id: "ure",
    suffix: "-ure",
    gender: "f",
    rule: "Les mots en -ure sont presque toujours féminins.",
    explanation: "Cette terminaison désigne souvent un résultat ou un processus. Exception rare : le murmure.",
    words: [
      "nature", "culture", "aventure", "structure", "température",
      "lecture", "nourriture", "ouverture", "fermeture", "peinture",
      "sculpture", "signature", "couverture", "écriture", "voiture",
      "chaussure", "ceinture", "blessure", "confiture", "brochure"
    ]
  },

  {
    id: "ence",
    suffix: "-ence / -ance",
    gender: "f",
    rule: "Les mots en -ence et -ance sont presque toujours féminins.",
    explanation: "Ces terminaisons expriment un état ou une qualité. Exception notable : le silence.",
    words: [
      "patience", "importance", "expérience", "différence", "présence",
      "absence", "influence", "distance", "performance", "connaissance",
      "naissance", "confiance", "élégance", "résistance", "correspondance",
      "indépendance", "existence", "conscience", "violence", "tendance"
    ]
  },

  {
    id: "ie",
    suffix: "-ie",
    gender: "f",
    rule: "Les mots en -ie sont toujours féminins.",
    explanation: "Cette terminaison se retrouve dans de nombreux domaines : sciences, politique, arts. Pas d'exception courante.",
    words: [
      "philosophie", "énergie", "économie", "démocratie", "stratégie",
      "technologie", "biologie", "géographie", "compagnie", "catégorie",
      "garantie", "industrie", "pharmacie", "poésie", "théorie",
      "maladie", "bougie", "chimie", "fantaisie", "mélodie"
    ]
  },

  {
    id: "esse",
    suffix: "-esse",
    gender: "f",
    rule: "Les mots en -esse sont toujours féminins.",
    explanation: "Cette terminaison exprime souvent une qualité ou un état. Elle est typiquement française et sans exception.",
    words: [
      "jeunesse", "politesse", "richesse", "tristesse", "sagesse",
      "vitesse", "tendresse", "gentillesse", "faiblesse", "maladresse",
      "paresse", "noblesse", "promesse", "adresse", "ivresse",
      "hardiesse", "détresse", "largesse", "souplesse", "justesse"
    ]
  },

  {
    id: "ette",
    suffix: "-ette",
    gender: "f",
    rule: "Les mots en -ette sont presque toujours féminins.",
    explanation: "Ce suffixe a souvent une valeur diminutive. Il transforme un mot en version plus petite ou plus familière.",
    words: [
      "cigarette", "bicyclette", "fourchette", "serviette", "allumette",
      "omelette", "trompette", "silhouette", "recette", "tablette",
      "camionnette", "maquette", "étiquette", "chaussette", "cassette",
      "baguette", "marionnette", "crevette", "brouette", "raquette"
    ]
  },

  {
    id: "ade",
    suffix: "-ade",
    gender: "f",
    rule: "Les mots en -ade sont presque toujours féminins.",
    explanation: "Cette terminaison évoque souvent une action collective ou un résultat. Exception rare : le stade.",
    words: [
      "promenade", "salade", "façade", "limonade", "cascade",
      "barricade", "ambassade", "parade", "arcade", "esplanade",
      "croisade", "escapade", "marmelade", "sérénade", "tirade",
      "ballade", "embuscade", "baignade", "grillade", "orangeade"
    ]
  },

  {
    id: "ee",
    suffix: "-ée",
    gender: "f",
    rule: "Les mots en -ée sont généralement féminins.",
    explanation: "Cette terminaison exprime souvent une durée ou un contenu. Exceptions notables : le musée, le lycée, le trophée.",
    words: [
      "idée", "journée", "entrée", "année", "soirée",
      "arrivée", "pensée", "vallée", "randonnée", "chaussée",
      "assemblée", "épée", "fée", "orchidée", "poupée",
      "fumée", "durée", "matinée", "bouée", "tranchée"
    ]
  },

  // ── MASCULINE SUFFIXES ─────────────────────────────────────

  {
    id: "ment",
    suffix: "-ment",
    gender: "m",
    rule: "Les mots en -ment sont presque toujours masculins.",
    explanation: "Ce suffixe forme des noms à partir de verbes et exprime une action ou son résultat. Pas d'exception courante.",
    words: [
      "moment", "gouvernement", "développement", "appartement", "mouvement",
      "changement", "traitement", "comportement", "enseignement", "environnement",
      "département", "sentiment", "établissement", "jugement", "renseignement",
      "événement", "équipement", "compliment", "instrument", "document"
    ]
  },

  {
    id: "age",
    suffix: "-age",
    gender: "m",
    rule: "Les mots en -age sont généralement masculins.",
    explanation: "Ce suffixe forme des noms d'action à partir de verbes. Exceptions notables : la page, la plage, l'image, la cage, la rage.",
    words: [
      "voyage", "message", "courage", "passage", "paysage",
      "mariage", "fromage", "garage", "ménage", "héritage",
      "reportage", "bricolage", "jardinage", "apprentissage", "camouflage",
      "sondage", "chômage", "maquillage", "stockage", "montage"
    ]
  },

  {
    id: "isme",
    suffix: "-isme",
    gender: "m",
    rule: "Les mots en -isme sont toujours masculins.",
    explanation: "Ce suffixe désigne une doctrine, un mouvement ou un système. Il n'a aucune exception.",
    words: [
      "tourisme", "capitalisme", "optimisme", "journalisme", "organisme",
      "mécanisme", "féminisme", "racisme", "communisme", "réalisme",
      "romantisme", "patriotisme", "enthousiasme", "professionnalisme", "vandalisme",
      "cyclisme", "pessimisme", "terrorisme", "idéalisme", "humanisme"
    ]
  },

  {
    id: "eur",
    suffix: "-eur",
    gender: "m",
    rule: "Les mots en -eur désignant un agent ou un appareil sont masculins.",
    explanation: "Attention : les mots abstraits en -eur sont souvent féminins (la fleur, la couleur, la douleur, la chaleur, la peur).",
    words: [
      "bonheur", "honneur", "facteur", "directeur", "professeur",
      "ordinateur", "moteur", "spectateur", "indicateur", "réfrigérateur",
      "aspirateur", "radiateur", "calculateur", "ventilateur", "serveur",
      "chauffeur", "ingénieur", "ambassadeur", "sculpteur", "compositeur"
    ]
  },

  {
    id: "ail",
    suffix: "-ail",
    gender: "m",
    rule: "Les mots en -ail sont toujours masculins.",
    explanation: "Cette terminaison est typiquement masculine. Le pluriel se forme souvent en -aux (travaux, vitraux).",
    words: [
      "travail", "détail", "éventail", "vitrail", "portail",
      "corail", "gouvernail", "bétail", "épouvantail", "chandail",
      "soupirail", "attirail", "rail", "mail", "ail"
    ]
  },

  {
    id: "eau",
    suffix: "-eau",
    gender: "m",
    rule: "Les mots en -eau sont presque toujours masculins.",
    explanation: "Cette terminaison est très fiable pour identifier le genre masculin. Exceptions très rares : l'eau (fém.), la peau.",
    words: [
      "chapeau", "gâteau", "bureau", "bateau", "château",
      "cadeau", "couteau", "morceau", "rideau", "drapeau",
      "tableau", "manteau", "réseau", "cerveau", "berceau",
      "troupeau", "niveau", "tonneau", "anneau", "poteau"
    ]
  },

  {
    id: "et",
    suffix: "-et",
    gender: "m",
    rule: "Les mots en -et sont presque toujours masculins.",
    explanation: "Ce suffixe a souvent une valeur diminutive au masculin, comme -ette au féminin. Pas d'exception courante.",
    words: [
      "billet", "secret", "projet", "objet", "budget",
      "bouquet", "ticket", "bracelet", "cabinet", "alphabet",
      "carnet", "livret", "parquet", "gilet", "sommet",
      "buffet", "robinet", "jouet", "trajet", "guichet"
    ]
  },

  {
    id: "oir",
    suffix: "-oir",
    gender: "m",
    rule: "Les mots en -oir sont toujours masculins.",
    explanation: "Attention : les mots en -oire (avec un e) peuvent être féminins (la mémoire, l'histoire, la victoire).",
    words: [
      "miroir", "espoir", "couloir", "pouvoir", "devoir",
      "réservoir", "trottoir", "comptoir", "rasoir", "tiroir",
      "parloir", "manoir", "séchoir", "entonnoir", "arrosoir"
    ]
  },

  {
    id: "in",
    suffix: "-in",
    gender: "m",
    rule: "Les mots en -in sont généralement masculins.",
    explanation: "Cette terminaison est assez fiable. Exception notable : la fin.",
    words: [
      "jardin", "matin", "destin", "voisin", "cousin",
      "médecin", "chemin", "moulin", "lapin", "sapin",
      "raisin", "bassin", "bulletin", "magasin", "requin",
      "parchemin", "patin", "gamin", "chagrin", "festin"
    ]
  },

  {
    id: "on",
    suffix: "-on",
    gender: "m",
    rule: "Les mots en -on (hors -tion/-sion) sont généralement masculins.",
    explanation: "Attention aux exceptions féminines : la maison, la raison, la saison, la leçon, la chanson, la prison, la boisson.",
    words: [
      "salon", "ballon", "garçon", "avion", "crayon",
      "bouton", "melon", "mouton", "papillon", "jambon",
      "bouchon", "champignon", "poisson", "camion", "carton",
      "patron", "saumon", "cochon", "tampon", "wagon"
    ]
  }
];

// ============================================================
// ADJECTIVES (with distinct masc/fem forms only)
// ============================================================

const ADJECTIVES_POST = [
  { m: "important", f: "importante" },
  { m: "intéressant", f: "intéressante" },
  { m: "différent", f: "différente" },
  { m: "national", f: "nationale" },
  { m: "naturel", f: "naturelle" },
  { m: "personnel", f: "personnelle" },
  { m: "professionnel", f: "professionnelle" },
  { m: "essentiel", f: "essentielle" },
  { m: "parfait", f: "parfaite" },
  { m: "actif", f: "active" },
  { m: "ancien", f: "ancienne" },
  { m: "complet", f: "complète" },
  { m: "correct", f: "correcte" },
  { m: "court", f: "courte" },
  { m: "dangereux", f: "dangereuse" },
  { m: "excellent", f: "excellente" },
  { m: "fort", f: "forte" },
  { m: "français", f: "française" },
  { m: "idéal", f: "idéale" },
  { m: "léger", f: "légère" },
  { m: "original", f: "originale" },
  { m: "particulier", f: "particulière" },
  { m: "précieux", f: "précieuse" },
  { m: "puissant", f: "puissante" },
  { m: "récent", f: "récente" },
  { m: "spécial", f: "spéciale" },
  { m: "doux", f: "douce" },
  { m: "faux", f: "fausse" },
  { m: "nouveau", f: "nouvelle" },
  { m: "européen", f: "européenne" }
];

const ADJECTIVES_PRE = [
  { m: "beau", f: "belle", mVowel: "bel" },
  { m: "bon", f: "bonne" },
  { m: "grand", f: "grande" },
  { m: "petit", f: "petite" },
  { m: "nouveau", f: "nouvelle", mVowel: "nouvel" },
  { m: "vieux", f: "vieille", mVowel: "vieil" },
  { m: "premier", f: "première" },
  { m: "dernier", f: "dernière" },
  { m: "long", f: "longue" },
  { m: "mauvais", f: "mauvaise" },
  { m: "joli", f: "jolie" },
  { m: "gros", f: "grosse" }
];

// ============================================================
// SENTENCE TEMPLATES
// ============================================================
// Slot keys:
//   {da}  = definite article (le / la / l')
//   {ia}  = indefinite article (un / une)
//   {dem} = demonstrative (ce / cet / cette)
//   {pos} = possessive (mon / ma — uses mon before fem vowel)
//   {n}   = noun
//   {ap}  = adjective postnominal
//   {apr} = adjective prenominal
//   {pro} = pronoun (il / elle)
//   {pp}  = past participle agreement ending ("" / "e")

const TEMPLATES = [
  {
    id: "def_est_adj",
    pattern: "{da} {n} est {ap}.",
    needs: ["da", "ap"],
    adjPos: "post"
  },
  {
    id: "cest_indef_noun_adj",
    pattern: "C'est {ia} {n} {ap}.",
    needs: ["ia", "ap"],
    adjPos: "post"
  },
  {
    id: "dem_est_tres_adj",
    pattern: "{dem} {n} est très {ap}.",
    needs: ["dem", "ap"],
    adjPos: "post"
  },
  {
    id: "def_semble_adj",
    pattern: "{da} {n} semble {ap}.",
    needs: ["da", "ap"],
    adjPos: "post"
  },
  {
    id: "voici_indef_adj",
    pattern: "Voici {ia} {n} {ap}.",
    needs: ["ia", "ap"],
    adjPos: "post"
  },
  {
    id: "pos_est_adj",
    pattern: "{pos} {n} est {ap}.",
    needs: ["pos", "ap"],
    adjPos: "post"
  },
  {
    id: "def_pronoun_adj",
    pattern: "{da} {n} ? {pro} est {ap}.",
    needs: ["da", "pro", "ap"],
    adjPos: "post"
  },
  {
    id: "cest_indef_pre_noun",
    pattern: "C'est {ia} {apr} {n}.",
    needs: ["ia", "apr"],
    adjPos: "pre"
  },
  {
    id: "def_pre_noun_est",
    pattern: "{da} {apr} {n} est ici.",
    needs: ["da", "apr"],
    adjPos: "pre"
  },
  {
    id: "indef_pre_noun_exist",
    pattern: "Il y a {ia} {apr} {n} là-bas.",
    needs: ["ia", "apr"],
    adjPos: "pre"
  },
  {
    id: "def_devenu_adj",
    pattern: "{da} {n} est devenu{pp} {ap}.",
    needs: ["da", "pp", "ap"],
    adjPos: "post"
  },
  {
    id: "def_reste_adj",
    pattern: "{da} {n} est resté{pp} {ap}.",
    needs: ["da", "pp", "ap"],
    adjPos: "post"
  }
];

// ============================================================
// H ASPIRÉ WORDS (no elision: le hibou, not l'hibou)
// ============================================================

const H_ASPIRE = new Set([
  "hardiesse", "haie", "hanche", "handicap",
  "hangar", "harpe", "hasard", "hausse", "hauteur",
  "héros", "hibou", "homard", "honte",
  "hoquet", "hotte", "hutte"
]);
