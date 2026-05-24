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
  { m: "important", f: "importante", en: "important" },
  { m: "intéressant", f: "intéressante", en: "interesting" },
  { m: "différent", f: "différente", en: "different" },
  { m: "national", f: "nationale", en: "national" },
  { m: "naturel", f: "naturelle", en: "natural" },
  { m: "personnel", f: "personnelle", en: "personal" },
  { m: "professionnel", f: "professionnelle", en: "professional" },
  { m: "essentiel", f: "essentielle", en: "essential" },
  { m: "parfait", f: "parfaite", en: "perfect" },
  { m: "actif", f: "active", en: "active" },
  { m: "ancien", f: "ancienne", en: "old" },
  { m: "complet", f: "complète", en: "complete" },
  { m: "correct", f: "correcte", en: "correct" },
  { m: "court", f: "courte", en: "short" },
  { m: "dangereux", f: "dangereuse", en: "dangerous" },
  { m: "excellent", f: "excellente", en: "excellent" },
  { m: "fort", f: "forte", en: "strong" },
  { m: "français", f: "française", en: "French" },
  { m: "idéal", f: "idéale", en: "ideal" },
  { m: "léger", f: "légère", en: "light" },
  { m: "original", f: "originale", en: "original" },
  { m: "particulier", f: "particulière", en: "particular" },
  { m: "précieux", f: "précieuse", en: "precious" },
  { m: "puissant", f: "puissante", en: "powerful" },
  { m: "récent", f: "récente", en: "recent" },
  { m: "spécial", f: "spéciale", en: "special" },
  { m: "doux", f: "douce", en: "soft" },
  { m: "faux", f: "fausse", en: "false" },
  { m: "nouveau", f: "nouvelle", en: "new" },
  { m: "européen", f: "européenne", en: "European" }
];

const ADJECTIVES_PRE = [
  { m: "beau", f: "belle", mVowel: "bel", en: "beautiful" },
  { m: "bon", f: "bonne", en: "good" },
  { m: "grand", f: "grande", en: "big" },
  { m: "petit", f: "petite", en: "small" },
  { m: "nouveau", f: "nouvelle", mVowel: "nouvel", en: "new" },
  { m: "vieux", f: "vieille", mVowel: "vieil", en: "old" },
  { m: "premier", f: "première", en: "first" },
  { m: "dernier", f: "dernière", en: "last" },
  { m: "long", f: "longue", en: "long" },
  { m: "mauvais", f: "mauvaise", en: "bad" },
  { m: "joli", f: "jolie", en: "pretty" },
  { m: "gros", f: "grosse", en: "big" }
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
    enPattern: "The {n} is {adj}.",
    needs: ["da", "ap"],
    adjPos: "post"
  },
  {
    id: "cest_indef_noun_adj",
    pattern: "C'est {ia} {n} {ap}.",
    enPattern: "It's {a} {adj} {n}.",
    needs: ["ia", "ap"],
    adjPos: "post"
  },
  {
    id: "dem_est_tres_adj",
    pattern: "{dem} {n} est très {ap}.",
    enPattern: "This {n} is very {adj}.",
    needs: ["dem", "ap"],
    adjPos: "post"
  },
  {
    id: "def_semble_adj",
    pattern: "{da} {n} semble {ap}.",
    enPattern: "The {n} seems {adj}.",
    needs: ["da", "ap"],
    adjPos: "post"
  },
  {
    id: "voici_indef_adj",
    pattern: "Voici {ia} {n} {ap}.",
    enPattern: "Here is {a} {adj} {n}.",
    needs: ["ia", "ap"],
    adjPos: "post"
  },
  {
    id: "pos_est_adj",
    pattern: "{pos} {n} est {ap}.",
    enPattern: "My {n} is {adj}.",
    needs: ["pos", "ap"],
    adjPos: "post"
  },
  {
    id: "def_pronoun_adj",
    pattern: "{da} {n} ? {pro} est {ap}.",
    enPattern: "The {n}? It is {adj}.",
    needs: ["da", "pro", "ap"],
    adjPos: "post"
  },
  {
    id: "cest_indef_pre_noun",
    pattern: "C'est {ia} {apr} {n}.",
    enPattern: "It's {a} {adj} {n}.",
    needs: ["ia", "apr"],
    adjPos: "pre"
  },
  {
    id: "def_pre_noun_est",
    pattern: "{da} {apr} {n} est ici.",
    enPattern: "The {adj} {n} is here.",
    needs: ["da", "apr"],
    adjPos: "pre"
  },
  {
    id: "indef_pre_noun_exist",
    pattern: "Il y a {ia} {apr} {n} là-bas.",
    enPattern: "There is {a} {adj} {n} over there.",
    needs: ["ia", "apr"],
    adjPos: "pre"
  },
  {
    id: "def_devenu_adj",
    pattern: "{da} {n} est devenu{pp} {ap}.",
    enPattern: "The {n} has become {adj}.",
    needs: ["da", "pp", "ap"],
    adjPos: "post"
  },
  {
    id: "def_reste_adj",
    pattern: "{da} {n} est resté{pp} {ap}.",
    enPattern: "The {n} has remained {adj}.",
    needs: ["da", "pp", "ap"],
    adjPos: "post"
  }
];

// ============================================================
// ENGLISH TRANSLATIONS (noun → English)
// ============================================================

const NOUN_EN = {
  // -tion
  "nation": "nation", "attention": "attention", "information": "information",
  "éducation": "education", "situation": "situation", "direction": "direction",
  "question": "question", "solution": "solution", "tradition": "tradition",
  "invitation": "invitation", "population": "population", "condition": "condition",
  "protection": "protection", "collection": "collection", "construction": "construction",
  "organisation": "organization", "imagination": "imagination", "communication": "communication",
  "destination": "destination", "réservation": "reservation",
  // -sion
  "décision": "decision", "télévision": "television", "passion": "passion",
  "discussion": "discussion", "expression": "expression", "impression": "impression",
  "permission": "permission", "occasion": "occasion", "dimension": "dimension",
  "conclusion": "conclusion", "profession": "profession", "version": "version",
  "mission": "mission", "session": "session", "tension": "tension",
  "émission": "broadcast", "commission": "commission", "extension": "extension",
  "progression": "progression", "obsession": "obsession",
  // -ité / -été
  "université": "university", "liberté": "freedom", "société": "society",
  "qualité": "quality", "identité": "identity", "activité": "activity",
  "réalité": "reality", "possibilité": "possibility", "responsabilité": "responsibility",
  "curiosité": "curiosity", "capacité": "capacity", "nationalité": "nationality",
  "majorité": "majority", "sécurité": "security", "diversité": "diversity",
  "propriété": "property", "créativité": "creativity", "générosité": "generosity",
  "personnalité": "personality", "électricité": "electricity",
  // -ure
  "nature": "nature", "culture": "culture", "aventure": "adventure",
  "structure": "structure", "température": "temperature", "lecture": "reading",
  "nourriture": "food", "ouverture": "opening", "fermeture": "closure",
  "peinture": "painting", "sculpture": "sculpture", "signature": "signature",
  "couverture": "blanket", "écriture": "writing", "voiture": "car",
  "chaussure": "shoe", "ceinture": "belt", "blessure": "injury",
  "confiture": "jam", "brochure": "brochure",
  // -ence / -ance
  "patience": "patience", "importance": "importance", "expérience": "experience",
  "différence": "difference", "présence": "presence", "absence": "absence",
  "influence": "influence", "distance": "distance", "performance": "performance",
  "connaissance": "knowledge", "naissance": "birth", "confiance": "trust",
  "élégance": "elegance", "résistance": "resistance", "correspondance": "correspondence",
  "indépendance": "independence", "existence": "existence", "conscience": "conscience",
  "violence": "violence", "tendance": "trend",
  // -ie
  "philosophie": "philosophy", "énergie": "energy", "économie": "economy",
  "démocratie": "democracy", "stratégie": "strategy", "technologie": "technology",
  "biologie": "biology", "géographie": "geography", "compagnie": "company",
  "catégorie": "category", "garantie": "guarantee", "industrie": "industry",
  "pharmacie": "pharmacy", "poésie": "poetry", "théorie": "theory",
  "maladie": "illness", "bougie": "candle", "chimie": "chemistry",
  "fantaisie": "fantasy", "mélodie": "melody",
  // -esse
  "jeunesse": "youth", "politesse": "politeness", "richesse": "wealth",
  "tristesse": "sadness", "sagesse": "wisdom", "vitesse": "speed",
  "tendresse": "tenderness", "gentillesse": "kindness", "faiblesse": "weakness",
  "maladresse": "clumsiness", "paresse": "laziness", "noblesse": "nobility",
  "promesse": "promise", "adresse": "address", "ivresse": "intoxication",
  "hardiesse": "boldness", "détresse": "distress", "largesse": "generosity",
  "souplesse": "flexibility", "justesse": "accuracy",
  // -ette
  "cigarette": "cigarette", "bicyclette": "bicycle", "fourchette": "fork",
  "serviette": "napkin", "allumette": "match", "omelette": "omelet",
  "trompette": "trumpet", "silhouette": "silhouette", "recette": "recipe",
  "tablette": "tablet", "camionnette": "van", "maquette": "model",
  "étiquette": "label", "chaussette": "sock", "cassette": "cassette",
  "baguette": "baguette", "marionnette": "puppet", "crevette": "shrimp",
  "brouette": "wheelbarrow", "raquette": "racket",
  // -ade
  "promenade": "walk", "salade": "salad", "façade": "facade",
  "limonade": "lemonade", "cascade": "waterfall", "barricade": "barricade",
  "ambassade": "embassy", "parade": "parade", "arcade": "arcade",
  "esplanade": "esplanade", "croisade": "crusade", "escapade": "escapade",
  "marmelade": "marmalade", "sérénade": "serenade", "tirade": "tirade",
  "ballade": "ballad", "embuscade": "ambush", "baignade": "swim",
  "grillade": "grilled meat", "orangeade": "orangeade",
  // -ée
  "idée": "idea", "journée": "day", "entrée": "entrance",
  "année": "year", "soirée": "evening", "arrivée": "arrival",
  "pensée": "thought", "vallée": "valley", "randonnée": "hike",
  "chaussée": "road", "assemblée": "assembly", "épée": "sword",
  "fée": "fairy", "orchidée": "orchid", "poupée": "doll",
  "fumée": "smoke", "durée": "duration", "matinée": "morning",
  "bouée": "buoy", "tranchée": "trench",
  // -ment
  "moment": "moment", "gouvernement": "government", "développement": "development",
  "appartement": "apartment", "mouvement": "movement", "changement": "change",
  "traitement": "treatment", "comportement": "behavior", "enseignement": "teaching",
  "environnement": "environment", "département": "department", "sentiment": "feeling",
  "établissement": "establishment", "jugement": "judgment", "renseignement": "information",
  "événement": "event", "équipement": "equipment", "compliment": "compliment",
  "instrument": "instrument", "document": "document",
  // -age
  "voyage": "trip", "message": "message", "courage": "courage",
  "passage": "passage", "paysage": "landscape", "mariage": "marriage",
  "fromage": "cheese", "garage": "garage", "ménage": "household",
  "héritage": "heritage", "reportage": "report", "bricolage": "DIY",
  "jardinage": "gardening", "apprentissage": "learning", "camouflage": "camouflage",
  "sondage": "survey", "chômage": "unemployment", "maquillage": "makeup",
  "stockage": "storage", "montage": "editing",
  // -isme
  "tourisme": "tourism", "capitalisme": "capitalism", "optimisme": "optimism",
  "journalisme": "journalism", "organisme": "organism", "mécanisme": "mechanism",
  "féminisme": "feminism", "racisme": "racism", "communisme": "communism",
  "réalisme": "realism", "romantisme": "romanticism", "patriotisme": "patriotism",
  "enthousiasme": "enthusiasm", "professionnalisme": "professionalism", "vandalisme": "vandalism",
  "cyclisme": "cycling", "pessimisme": "pessimism", "terrorisme": "terrorism",
  "idéalisme": "idealism", "humanisme": "humanism",
  // -eur
  "bonheur": "happiness", "honneur": "honor", "facteur": "mailman",
  "directeur": "director", "professeur": "professor", "ordinateur": "computer",
  "moteur": "engine", "spectateur": "spectator", "indicateur": "indicator",
  "réfrigérateur": "refrigerator", "aspirateur": "vacuum cleaner", "radiateur": "radiator",
  "calculateur": "calculator", "ventilateur": "fan", "serveur": "waiter",
  "chauffeur": "driver", "ingénieur": "engineer", "ambassadeur": "ambassador",
  "sculpteur": "sculptor", "compositeur": "composer",
  // -ail
  "travail": "work", "détail": "detail", "éventail": "fan",
  "vitrail": "stained glass", "portail": "gate", "corail": "coral",
  "gouvernail": "rudder", "bétail": "livestock", "épouvantail": "scarecrow",
  "chandail": "sweater", "soupirail": "vent", "attirail": "gear",
  "rail": "rail", "mail": "mail", "ail": "garlic",
  // -eau
  "chapeau": "hat", "gâteau": "cake", "bureau": "desk",
  "bateau": "boat", "château": "castle", "cadeau": "gift",
  "couteau": "knife", "morceau": "piece", "rideau": "curtain",
  "drapeau": "flag", "tableau": "painting", "manteau": "coat",
  "réseau": "network", "cerveau": "brain", "berceau": "cradle",
  "troupeau": "herd", "niveau": "level", "tonneau": "barrel",
  "anneau": "ring", "poteau": "pole",
  // -et
  "billet": "ticket", "secret": "secret", "projet": "project",
  "objet": "object", "budget": "budget", "bouquet": "bouquet",
  "ticket": "ticket", "bracelet": "bracelet", "cabinet": "cabinet",
  "alphabet": "alphabet", "carnet": "notebook", "livret": "booklet",
  "parquet": "floor", "gilet": "vest", "sommet": "summit",
  "buffet": "buffet", "robinet": "faucet", "jouet": "toy",
  "trajet": "journey", "guichet": "counter",
  // -oir
  "miroir": "mirror", "espoir": "hope", "couloir": "corridor",
  "pouvoir": "power", "devoir": "duty", "réservoir": "reservoir",
  "trottoir": "sidewalk", "comptoir": "counter", "rasoir": "razor",
  "tiroir": "drawer", "parloir": "parlor", "manoir": "manor",
  "séchoir": "dryer", "entonnoir": "funnel", "arrosoir": "watering can",
  // -in
  "jardin": "garden", "matin": "morning", "destin": "destiny",
  "voisin": "neighbor", "cousin": "cousin", "médecin": "doctor",
  "chemin": "path", "moulin": "mill", "lapin": "rabbit",
  "sapin": "fir tree", "raisin": "grape", "bassin": "basin",
  "bulletin": "bulletin", "magasin": "store", "requin": "shark",
  "parchemin": "parchment", "patin": "skate", "gamin": "kid",
  "chagrin": "sorrow", "festin": "feast",
  // -on
  "salon": "living room", "ballon": "ball", "garçon": "boy",
  "avion": "airplane", "crayon": "pencil", "bouton": "button",
  "melon": "melon", "mouton": "sheep", "papillon": "butterfly",
  "jambon": "ham", "bouchon": "cork", "champignon": "mushroom",
  "poisson": "fish", "camion": "truck", "carton": "cardboard",
  "patron": "boss", "saumon": "salmon", "cochon": "pig",
  "tampon": "stamp", "wagon": "wagon"
};

// ============================================================
// H ASPIRÉ WORDS (no elision: le hibou, not l'hibou)
// ============================================================

const H_ASPIRE = new Set([
  "hardiesse", "haie", "hanche", "handicap",
  "hangar", "harpe", "hasard", "hausse", "hauteur",
  "héros", "hibou", "homard", "honte",
  "hoquet", "hotte", "hutte"
]);
