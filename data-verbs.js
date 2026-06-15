// ─── VERB PREPOSITION DATA ───────────────────────────────────
// Each sentence is split into `pre` (everything before the preposition)
// and `post` (the infinitive clause). The quiz engine joins them with
// the correct or wrong preposition at runtime.
//
// prep: "" = no preposition, "à", "de"

var VERBS = [

  // ════════════════════════════════════════════════════════════
  //  NO PREPOSITION (verb + infinitive directly)
  // ════════════════════════════════════════════════════════════

  { id:"aimer", verb:"aimer", prep:"", en:"to like / to love",
    rule:"Aimer est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"J'aime",post:"voyager en été.",en:"I like to travel in summer."},
      {pre:"Elle aime",post:"cuisiner le week-end.",en:"She likes to cook on weekends."},
      {pre:"On aime",post:"se promener le soir.",en:"We like to walk in the evening."},
      {pre:"Tu aimes",post:"lire avant de dormir ?",en:"Do you like to read before sleeping?"},
      {pre:"Ils aiment",post:"sortir le samedi soir.",en:"They like to go out on Saturday night."}
    ]},

  { id:"aller", verb:"aller", prep:"", en:"to go (to do sth)",
    rule:"Aller est suivi directement de l'infinitif (futur proche).",
    sentences:[
      {pre:"Je vais",post:"chercher du pain.",en:"I'm going to get bread."},
      {pre:"Elle va",post:"prendre le train.",en:"She's going to take the train."},
      {pre:"On va",post:"manger au restaurant ce soir.",en:"We're going to eat at the restaurant tonight."},
      {pre:"Il va",post:"pleuvoir demain.",en:"It's going to rain tomorrow."},
      {pre:"Tu vas",post:"réussir, j'en suis sûr.",en:"You're going to succeed, I'm sure of it."}
    ]},

  { id:"avouer", verb:"avouer", prep:"", en:"to admit",
    rule:"Avouer est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"J'avoue",post:"ne pas comprendre.",en:"I admit I don't understand."},
      {pre:"Il avoue",post:"avoir menti.",en:"He admits having lied."},
      {pre:"Elle avoue",post:"préférer la campagne.",en:"She admits she prefers the countryside."},
      {pre:"J'avoue",post:"être un peu jaloux.",en:"I admit I'm a little jealous."},
      {pre:"On avoue",post:"ne pas savoir quoi faire.",en:"We admit we don't know what to do."}
    ]},

  { id:"compter", verb:"compter", prep:"", en:"to intend / to plan",
    rule:"Compter est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Je compte",post:"partir en vacances en août.",en:"I plan to leave on vacation in August."},
      {pre:"Elle compte",post:"déménager bientôt.",en:"She plans to move soon."},
      {pre:"Il compte",post:"changer de travail.",en:"He intends to change jobs."},
      {pre:"On compte",post:"rester trois jours.",en:"We plan to stay three days."},
      {pre:"Tu comptes",post:"venir ce soir ?",en:"Do you plan to come tonight?"}
    ]},

  { id:"desirer", verb:"désirer", prep:"", en:"to wish / to desire",
    rule:"Désirer est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Je désire",post:"réserver une table.",en:"I'd like to reserve a table."},
      {pre:"Elle désire",post:"en savoir plus.",en:"She wishes to know more."},
      {pre:"Vous désirez",post:"commander ?",en:"Would you like to order?"},
      {pre:"Il désire",post:"voyager à l'étranger.",en:"He wants to travel abroad."},
      {pre:"Je désire",post:"parler au directeur.",en:"I wish to speak to the manager."}
    ]},

  { id:"detester", verb:"détester", prep:"", en:"to hate",
    rule:"Détester est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Je déteste",post:"attendre.",en:"I hate waiting."},
      {pre:"Elle déteste",post:"se lever tôt.",en:"She hates getting up early."},
      {pre:"Il déteste",post:"conduire la nuit.",en:"He hates driving at night."},
      {pre:"On déteste",post:"faire la queue.",en:"We hate standing in line."},
      {pre:"Tu détestes",post:"cuisiner, non ?",en:"You hate cooking, right?"}
    ]},

  { id:"devoir", verb:"devoir", prep:"", en:"must / to have to",
    rule:"Devoir est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Je dois",post:"partir maintenant.",en:"I have to leave now."},
      {pre:"Elle doit",post:"finir son travail.",en:"She has to finish her work."},
      {pre:"On doit",post:"se dépêcher.",en:"We must hurry."},
      {pre:"Il doit",post:"être fatigué.",en:"He must be tired."},
      {pre:"Tu dois",post:"voir ce film.",en:"You must see this movie."}
    ]},

  { id:"ecouter", verb:"écouter", prep:"", en:"to listen (to sb do sth)",
    rule:"Écouter est suivi directement de l'infinitif (verbe de perception).",
    sentences:[
      {pre:"J'écoute",post:"chanter les oiseaux le matin.",en:"I listen to the birds sing in the morning."},
      {pre:"On écoute",post:"tomber la pluie.",en:"We listen to the rain fall."},
      {pre:"Elle écoute",post:"parler les enfants.",en:"She listens to the children talk."},
      {pre:"Il écoute",post:"jouer le pianiste.",en:"He listens to the pianist play."},
      {pre:"J'aime écouter",post:"chanter cette artiste.",en:"I like listening to this artist sing."}
    ]},

  { id:"esperer", verb:"espérer", prep:"", en:"to hope",
    rule:"Espérer est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"J'espère",post:"te revoir bientôt.",en:"I hope to see you again soon."},
      {pre:"Elle espère",post:"trouver un appartement.",en:"She hopes to find an apartment."},
      {pre:"On espère",post:"partir en vacances cet été.",en:"We hope to go on vacation this summer."},
      {pre:"Il espère",post:"avoir une réponse demain.",en:"He hopes to get an answer tomorrow."},
      {pre:"J'espère",post:"ne pas être en retard.",en:"I hope I'm not late."}
    ]},

  { id:"faire", verb:"faire", prep:"", en:"to make / to have (sth done)",
    rule:"Faire est suivi directement de l'infinitif (faire + infinitif = faire faire).",
    sentences:[
      {pre:"Je fais",post:"réparer ma voiture.",en:"I'm having my car repaired."},
      {pre:"Elle fait",post:"construire une maison.",en:"She's having a house built."},
      {pre:"Il fait",post:"cuire le poulet au four.",en:"He's cooking the chicken in the oven."},
      {pre:"On fait",post:"livrer les courses.",en:"We're having groceries delivered."},
      {pre:"Tu fais",post:"couper tes cheveux où ?",en:"Where do you get your hair cut?"}
    ]},

  { id:"falloir", verb:"falloir", prep:"", en:"to be necessary",
    rule:"Il faut est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Il faut",post:"réserver à l'avance.",en:"You have to book in advance."},
      {pre:"Il faut",post:"partir avant huit heures.",en:"We need to leave before eight."},
      {pre:"Il faut",post:"faire attention.",en:"You have to be careful."},
      {pre:"Il ne faut pas",post:"oublier son passeport.",en:"You mustn't forget your passport."},
      {pre:"Il faut",post:"essayer pour savoir.",en:"You have to try to know."}
    ]},

  { id:"laisser", verb:"laisser", prep:"", en:"to let / to allow",
    rule:"Laisser est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Laisse-moi",post:"réfléchir.",en:"Let me think."},
      {pre:"Elle laisse",post:"ses enfants jouer dehors.",en:"She lets her children play outside."},
      {pre:"Il m'a laissé",post:"choisir le restaurant.",en:"He let me choose the restaurant."},
      {pre:"Laisse-le",post:"décider lui-même.",en:"Let him decide for himself."},
      {pre:"On ne peut pas le laisser",post:"partir seul.",en:"We can't let him leave alone."}
    ]},

  { id:"oser", verb:"oser", prep:"", en:"to dare",
    rule:"Oser est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Je n'ose pas",post:"lui demander.",en:"I don't dare ask him."},
      {pre:"Elle n'ose pas",post:"sortir seule le soir.",en:"She doesn't dare go out alone at night."},
      {pre:"Il ose",post:"dire la vérité.",en:"He dares to tell the truth."},
      {pre:"On n'ose pas",post:"déranger.",en:"We don't dare disturb."},
      {pre:"Tu oses",post:"te plaindre ?",en:"You dare to complain?"}
    ]},

  { id:"paraitre", verb:"paraître", prep:"", en:"to seem / to appear",
    rule:"Paraître est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Elle paraît",post:"comprendre la situation.",en:"She seems to understand the situation."},
      {pre:"Il paraît",post:"savoir ce qu'il fait.",en:"He seems to know what he's doing."},
      {pre:"Tout paraît",post:"fonctionner normalement.",en:"Everything seems to work normally."},
      {pre:"Elle paraît",post:"hésiter un peu.",en:"She seems to hesitate a little."},
      {pre:"Il paraît",post:"aller mieux.",en:"He seems to be doing better."}
    ]},

  { id:"penser", verb:"penser", prep:"", en:"to think / to plan",
    rule:"Penser est suivi directement de l'infinitif quand il signifie « avoir l'intention de ».",
    sentences:[
      {pre:"Je pense",post:"déménager l'année prochaine.",en:"I'm thinking of moving next year."},
      {pre:"Elle pense",post:"changer de métier.",en:"She's thinking of changing careers."},
      {pre:"On pense",post:"partir en Italie.",en:"We're thinking of going to Italy."},
      {pre:"Il pense",post:"vendre sa voiture.",en:"He's planning to sell his car."},
      {pre:"Tu penses",post:"rester longtemps ?",en:"Do you plan to stay long?"}
    ]},

  { id:"pouvoir", verb:"pouvoir", prep:"", en:"can / to be able to",
    rule:"Pouvoir est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Je peux",post:"t'aider si tu veux.",en:"I can help you if you want."},
      {pre:"Elle peut",post:"parler trois langues.",en:"She can speak three languages."},
      {pre:"On peut",post:"se retrouver au café.",en:"We can meet at the café."},
      {pre:"Il ne peut pas",post:"venir ce soir.",en:"He can't come tonight."},
      {pre:"Tu peux",post:"répéter, s'il te plaît ?",en:"Can you repeat, please?"}
    ]},

  { id:"preferer", verb:"préférer", prep:"", en:"to prefer",
    rule:"Préférer est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Je préfère",post:"rester à la maison.",en:"I prefer to stay home."},
      {pre:"Elle préfère",post:"voyager en train.",en:"She prefers to travel by train."},
      {pre:"Il préfère",post:"ne rien dire.",en:"He prefers to say nothing."},
      {pre:"On préfère",post:"manger dehors.",en:"We prefer to eat outside."},
      {pre:"Tu préfères",post:"sortir ou rester ?",en:"Do you prefer to go out or stay?"}
    ]},

  { id:"pretendre", verb:"prétendre", prep:"", en:"to claim",
    rule:"Prétendre est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Il prétend",post:"tout savoir.",en:"He claims to know everything."},
      {pre:"Elle prétend",post:"ne pas être au courant.",en:"She claims not to be aware."},
      {pre:"Il prétend",post:"avoir raison.",en:"He claims to be right."},
      {pre:"Ils prétendent",post:"connaître la vérité.",en:"They claim to know the truth."},
      {pre:"Elle prétend",post:"être malade.",en:"She claims to be sick."}
    ]},

  { id:"savoir", verb:"savoir", prep:"", en:"to know how to",
    rule:"Savoir est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Je sais",post:"nager depuis l'âge de cinq ans.",en:"I've known how to swim since age five."},
      {pre:"Elle sait",post:"très bien cuisiner.",en:"She knows how to cook very well."},
      {pre:"Il ne sait pas",post:"conduire.",en:"He doesn't know how to drive."},
      {pre:"Tu sais",post:"parler français ?",en:"Can you speak French?"},
      {pre:"On sait",post:"se débrouiller.",en:"We know how to manage."}
    ]},

  { id:"sembler", verb:"sembler", prep:"", en:"to seem",
    rule:"Sembler est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Il semble",post:"avoir oublié.",en:"He seems to have forgotten."},
      {pre:"Elle semble",post:"s'amuser.",en:"She seems to be having fun."},
      {pre:"Tout semble",post:"bien se passer.",en:"Everything seems to be going well."},
      {pre:"Il semble",post:"faire beau demain.",en:"It seems like it'll be nice tomorrow."},
      {pre:"Elle semble",post:"être d'accord.",en:"She seems to agree."}
    ]},

  { id:"sentir", verb:"sentir", prep:"", en:"to feel / to sense",
    rule:"Sentir est suivi directement de l'infinitif (verbe de perception).",
    sentences:[
      {pre:"Je sens",post:"la pluie arriver.",en:"I can feel the rain coming."},
      {pre:"On sent",post:"l'été approcher.",en:"You can feel summer approaching."},
      {pre:"Elle sent",post:"monter la colère.",en:"She feels anger rising."},
      {pre:"Je sens",post:"quelque chose brûler.",en:"I can smell something burning."},
      {pre:"Il sent",post:"venir le problème.",en:"He can sense the problem coming."}
    ]},

  { id:"souhaiter", verb:"souhaiter", prep:"", en:"to wish",
    rule:"Souhaiter est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Je souhaite",post:"vous remercier.",en:"I wish to thank you."},
      {pre:"Elle souhaite",post:"prendre rendez-vous.",en:"She wishes to make an appointment."},
      {pre:"On souhaite",post:"réserver pour deux.",en:"We'd like to book for two."},
      {pre:"Il souhaite",post:"en savoir plus.",en:"He wishes to know more."},
      {pre:"Je souhaite",post:"vous parler en privé.",en:"I wish to speak to you privately."}
    ]},

  { id:"venir2", verb:"venir", prep:"", en:"to come (to do sth)",
    rule:"Venir est suivi directement de l'infinitif quand il signifie « venir faire quelque chose ».",
    sentences:[
      {pre:"Il vient",post:"me chercher à la gare.",en:"He's coming to pick me up at the station."},
      {pre:"Elle vient",post:"dîner chez nous ce soir.",en:"She's coming to have dinner at our place tonight."},
      {pre:"Tu viens",post:"prendre un café ?",en:"Are you coming to have a coffee?"},
      {pre:"Ils viennent",post:"nous rendre visite.",en:"They're coming to visit us."},
      {pre:"Je viens",post:"récupérer mes affaires.",en:"I'm coming to pick up my things."}
    ]},

  { id:"voir", verb:"voir", prep:"", en:"to see",
    rule:"Voir est suivi directement de l'infinitif (verbe de perception).",
    sentences:[
      {pre:"Je l'ai vu",post:"partir ce matin.",en:"I saw him leave this morning."},
      {pre:"Elle voit",post:"ses enfants grandir.",en:"She watches her children grow up."},
      {pre:"On l'a vu",post:"traverser la rue.",en:"We saw him cross the street."},
      {pre:"Je les vois",post:"arriver.",en:"I can see them coming."},
      {pre:"Il l'a vue",post:"sourire.",en:"He saw her smile."}
    ]},

  { id:"vouloir", verb:"vouloir", prep:"", en:"to want",
    rule:"Vouloir est suivi directement de l'infinitif, sans préposition.",
    sentences:[
      {pre:"Je veux",post:"apprendre le français.",en:"I want to learn French."},
      {pre:"Elle veut",post:"devenir médecin.",en:"She wants to become a doctor."},
      {pre:"On veut",post:"réserver une chambre.",en:"We want to book a room."},
      {pre:"Il ne veut pas",post:"attendre.",en:"He doesn't want to wait."},
      {pre:"Tu veux",post:"goûter ?",en:"Do you want to taste?"}
    ]},

  // ════════════════════════════════════════════════════════════
  //  PREPOSITION « À »
  // ════════════════════════════════════════════════════════════

  { id:"forcer", verb:"forcer à", prep:"à", en:"to force to",
    rule:"Forcer est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"On m'a forcé",post:"accepter.",en:"They forced me to accept."},
      {pre:"Elle le force",post:"manger ses légumes.",en:"She forces him to eat his vegetables."},
      {pre:"Personne ne te force",post:"venir.",en:"Nobody is forcing you to come."},
      {pre:"Il m'a forcé",post:"recommencer.",en:"He forced me to start over."},
      {pre:"On ne peut pas la forcer",post:"parler.",en:"We can't force her to talk."}
    ]},

  { id:"aider", verb:"aider à", prep:"à", en:"to help (to do sth)",
    rule:"Aider est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Elle m'aide",post:"comprendre la leçon.",en:"She helps me understand the lesson."},
      {pre:"Il aide sa mère",post:"préparer le dîner.",en:"He helps his mother prepare dinner."},
      {pre:"On m'a aidé",post:"trouver un logement.",en:"They helped me find housing."},
      {pre:"Ça aide",post:"dormir.",en:"It helps you sleep."},
      {pre:"Tu peux m'aider",post:"porter les courses ?",en:"Can you help me carry the groceries?"}
    ]},

  { id:"amuser", verb:"s'amuser à", prep:"à", en:"to enjoy / to have fun doing",
    rule:"S'amuser est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Les enfants s'amusent",post:"jouer dans le parc.",en:"The children enjoy playing in the park."},
      {pre:"Elle s'amuse",post:"dessiner des portraits.",en:"She has fun drawing portraits."},
      {pre:"Il s'amuse",post:"imiter ses professeurs.",en:"He has fun imitating his teachers."},
      {pre:"On s'amuse",post:"découvrir la ville.",en:"We're having fun discovering the city."},
      {pre:"Je m'amuse",post:"apprendre de nouveaux mots.",en:"I enjoy learning new words."}
    ]},

  { id:"apprendre", verb:"apprendre à", prep:"à", en:"to learn (to do sth)",
    rule:"Apprendre est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"J'apprends",post:"parler français.",en:"I'm learning to speak French."},
      {pre:"Elle apprend",post:"conduire.",en:"She's learning to drive."},
      {pre:"Il apprend",post:"cuisiner des plats italiens.",en:"He's learning to cook Italian dishes."},
      {pre:"On apprend",post:"se connaître.",en:"We're getting to know each other."},
      {pre:"Tu apprends",post:"jouer de la guitare ?",en:"Are you learning to play guitar?"}
    ]},

  { id:"arriver", verb:"arriver à", prep:"à", en:"to manage to",
    rule:"Arriver est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je n'arrive pas",post:"dormir.",en:"I can't manage to sleep."},
      {pre:"Elle arrive",post:"tout faire en même temps.",en:"She manages to do everything at the same time."},
      {pre:"Il n'arrive pas",post:"se concentrer.",en:"He can't concentrate."},
      {pre:"On arrive",post:"comprendre un peu.",en:"We manage to understand a little."},
      {pre:"Tu arrives",post:"lire sans lunettes ?",en:"Can you manage to read without glasses?"}
    ]},

  { id:"aspirer", verb:"aspirer à", prep:"à", en:"to aspire to",
    rule:"Aspirer est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Elle aspire",post:"devenir avocate.",en:"She aspires to become a lawyer."},
      {pre:"Il aspire",post:"vivre une vie simple.",en:"He aspires to live a simple life."},
      {pre:"On aspire tous",post:"être heureux.",en:"We all aspire to be happy."},
      {pre:"J'aspire",post:"changer de carrière.",en:"I aspire to change careers."},
      {pre:"Elle aspire",post:"voyager partout dans le monde.",en:"She aspires to travel all over the world."}
    ]},

  { id:"attendre", verb:"s'attendre à", prep:"à", en:"to expect",
    rule:"S'attendre est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je m'attends",post:"recevoir une réponse demain.",en:"I expect to receive an answer tomorrow."},
      {pre:"Elle ne s'attendait pas",post:"le voir ici.",en:"She didn't expect to see him here."},
      {pre:"On s'attend",post:"avoir du retard.",en:"We expect to be delayed."},
      {pre:"Il s'attend",post:"être promu.",en:"He expects to be promoted."},
      {pre:"Je ne m'attendais pas",post:"gagner.",en:"I didn't expect to win."}
    ]},

  { id:"autoriser", verb:"autoriser à", prep:"à", en:"to authorize / to allow",
    rule:"Autoriser est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"On m'a autorisé",post:"partir plus tôt.",en:"They authorized me to leave early."},
      {pre:"La loi autorise",post:"construire ici.",en:"The law authorizes building here."},
      {pre:"Elle m'autorise",post:"utiliser sa voiture.",en:"She allows me to use her car."},
      {pre:"Le médecin l'a autorisé",post:"reprendre le sport.",en:"The doctor authorized him to resume sports."},
      {pre:"On n'est pas autorisé",post:"entrer sans badge.",en:"You're not authorized to enter without a badge."}
    ]},

  { id:"chercher", verb:"chercher à", prep:"à", en:"to try to / to seek to",
    rule:"Chercher est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je cherche",post:"comprendre pourquoi.",en:"I'm trying to understand why."},
      {pre:"Elle cherche",post:"améliorer son français.",en:"She's trying to improve her French."},
      {pre:"Il cherche",post:"nous convaincre.",en:"He's trying to convince us."},
      {pre:"On cherche",post:"trouver une solution.",en:"We're trying to find a solution."},
      {pre:"Ils cherchent",post:"attirer l'attention.",en:"They're trying to attract attention."}
    ]},

  { id:"commencer", verb:"commencer à", prep:"à", en:"to start / to begin",
    rule:"Commencer est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Il commence",post:"pleuvoir.",en:"It's starting to rain."},
      {pre:"Elle commence",post:"comprendre le problème.",en:"She's starting to understand the problem."},
      {pre:"Je commence",post:"m'habituer à la ville.",en:"I'm starting to get used to the city."},
      {pre:"On commence",post:"travailler à huit heures.",en:"We start working at eight."},
      {pre:"Il commence",post:"faire froid.",en:"It's starting to get cold."}
    ]},

  { id:"proposer", verb:"proposer de", prep:"de", en:"to suggest / to offer to",
    rule:"Proposer est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je propose",post:"aller au cinéma.",en:"I suggest going to the movies."},
      {pre:"Elle m'a proposé",post:"m'aider.",en:"She offered to help me."},
      {pre:"Il propose",post:"partager l'addition.",en:"He suggests splitting the bill."},
      {pre:"On propose",post:"se retrouver à midi.",en:"We suggest meeting at noon."},
      {pre:"Tu proposes",post:"faire quoi ce soir ?",en:"What do you suggest we do tonight?"}
    ]},

  { id:"continuer", verb:"continuer à", prep:"à", en:"to continue",
    rule:"Continuer est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Il continue",post:"pleuvoir.",en:"It keeps raining."},
      {pre:"Elle continue",post:"étudier malgré la fatigue.",en:"She continues studying despite being tired."},
      {pre:"Je continue",post:"apprendre le français.",en:"I keep learning French."},
      {pre:"On continue",post:"marcher ?",en:"Shall we keep walking?"},
      {pre:"Il continue",post:"nier.",en:"He continues to deny it."}
    ]},

  { id:"decider2", verb:"se décider à", prep:"à", en:"to make up one's mind to",
    rule:"Se décider est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Il s'est enfin décidé",post:"partir.",en:"He finally made up his mind to leave."},
      {pre:"Elle se décide",post:"changer de travail.",en:"She's making up her mind to change jobs."},
      {pre:"Je me suis décidé",post:"lui parler.",en:"I made up my mind to talk to her."},
      {pre:"On s'est décidé",post:"acheter une maison.",en:"We decided to buy a house."},
      {pre:"Il ne se décide pas",post:"répondre.",en:"He can't make up his mind to reply."}
    ]},

  { id:"encourager", verb:"encourager à", prep:"à", en:"to encourage to",
    rule:"Encourager est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Elle m'encourage",post:"continuer.",en:"She encourages me to continue."},
      {pre:"Il encourage ses enfants",post:"lire.",en:"He encourages his children to read."},
      {pre:"On m'a encouragé",post:"postuler.",en:"They encouraged me to apply."},
      {pre:"Le professeur nous encourage",post:"parler français.",en:"The teacher encourages us to speak French."},
      {pre:"Elle l'encourage",post:"suivre ses rêves.",en:"She encourages him to follow his dreams."}
    ]},

  { id:"sefaire", verb:"se faire à", prep:"à", en:"to get used to",
    rule:"Se faire est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je me fais",post:"manger épicé.",en:"I'm getting used to eating spicy food."},
      {pre:"Elle ne se fait pas",post:"travailler le week-end.",en:"She can't get used to working on weekends."},
      {pre:"On se fait",post:"vivre ensemble.",en:"We're getting used to living together."},
      {pre:"Il se fait",post:"se lever tôt.",en:"He's getting used to waking up early."},
      {pre:"Je me fais",post:"conduire à droite.",en:"I'm getting used to driving on the right."}
    ]},

  { id:"faireattention", verb:"faire attention à", prep:"à", en:"to be careful to",
    rule:"Faire attention est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Fais attention",post:"ne pas tomber.",en:"Be careful not to fall."},
      {pre:"Il fait attention",post:"bien prononcer.",en:"He's careful to pronounce well."},
      {pre:"Faites attention",post:"vérifier la date.",en:"Make sure to check the date."},
      {pre:"Elle fait attention",post:"ne pas faire de bruit.",en:"She's careful not to make noise."},
      {pre:"On fait attention",post:"respecter les règles.",en:"We make sure to follow the rules."}
    ]},

  { id:"habituer", verb:"s'habituer à", prep:"à", en:"to get used to",
    rule:"S'habituer est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je m'habitue",post:"me lever tôt.",en:"I'm getting used to waking up early."},
      {pre:"Elle s'habitue",post:"vivre seule.",en:"She's getting used to living alone."},
      {pre:"On s'habitue",post:"manger tard en Espagne.",en:"We're getting used to eating late in Spain."},
      {pre:"Il s'habitue",post:"travailler de chez lui.",en:"He's getting used to working from home."},
      {pre:"Tu t'habitueras",post:"conduire, ne t'inquiète pas.",en:"You'll get used to driving, don't worry."}
    ]},

  { id:"hesiter", verb:"hésiter à", prep:"à", en:"to hesitate to",
    rule:"Hésiter est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"J'hésite",post:"lui dire la vérité.",en:"I hesitate to tell him the truth."},
      {pre:"Elle hésite",post:"accepter l'offre.",en:"She's hesitating to accept the offer."},
      {pre:"N'hésitez pas",post:"me contacter.",en:"Don't hesitate to contact me."},
      {pre:"Il hésite",post:"partir si loin.",en:"He's hesitating to go so far."},
      {pre:"On hésite",post:"réserver maintenant.",en:"We're hesitating to book now."}
    ]},

  { id:"inciter", verb:"inciter à", prep:"à", en:"to encourage / to prompt",
    rule:"Inciter est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Le beau temps incite",post:"sortir.",en:"The nice weather makes you want to go out."},
      {pre:"Elle m'incite",post:"être plus prudent.",en:"She encourages me to be more careful."},
      {pre:"Rien ne l'incite",post:"changer.",en:"Nothing motivates him to change."},
      {pre:"Cette expérience m'a incité",post:"réfléchir.",en:"This experience made me think."},
      {pre:"Le prix nous incite",post:"acheter.",en:"The price encourages us to buy."}
    ]},

  { id:"interesser", verb:"s'intéresser à", prep:"à", en:"to be interested in",
    rule:"S'intéresser est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je m'intéresse",post:"apprendre les langues.",en:"I'm interested in learning languages."},
      {pre:"Elle s'intéresse",post:"comprendre l'histoire.",en:"She's interested in understanding history."},
      {pre:"Il s'intéresse",post:"découvrir la cuisine locale.",en:"He's interested in discovering local cuisine."},
      {pre:"On s'intéresse",post:"visiter les musées.",en:"We're interested in visiting museums."},
      {pre:"Tu t'intéresses",post:"faire du yoga ?",en:"Are you interested in doing yoga?"}
    ]},

  { id:"inviter", verb:"inviter à", prep:"à", en:"to invite to",
    rule:"Inviter est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je t'invite",post:"dîner chez moi.",en:"I'm inviting you to have dinner at my place."},
      {pre:"Elle nous invite",post:"prendre un verre.",en:"She's inviting us to have a drink."},
      {pre:"Il m'a invité",post:"participer au projet.",en:"He invited me to participate in the project."},
      {pre:"On vous invite",post:"venir samedi.",en:"We're inviting you to come on Saturday."},
      {pre:"Ils nous ont invités",post:"passer le week-end.",en:"They invited us to spend the weekend."}
    ]},

  { id:"mettre", verb:"se mettre à", prep:"à", en:"to start / to begin",
    rule:"Se mettre est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Il s'est mis",post:"pleuvoir.",en:"It started to rain."},
      {pre:"Elle s'est mise",post:"pleurer.",en:"She started crying."},
      {pre:"Je me suis mis",post:"courir tous les matins.",en:"I started running every morning."},
      {pre:"On se met",post:"travailler ?",en:"Shall we get to work?"},
      {pre:"Il s'est mis",post:"rire sans raison.",en:"He started laughing for no reason."}
    ]},

  { id:"parvenir", verb:"parvenir à", prep:"à", en:"to manage to / to succeed in",
    rule:"Parvenir est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je suis parvenu",post:"ouvrir la porte.",en:"I managed to open the door."},
      {pre:"Elle parvient",post:"concilier travail et famille.",en:"She manages to balance work and family."},
      {pre:"On parvient",post:"se comprendre malgré tout.",en:"We manage to understand each other despite everything."},
      {pre:"Il est parvenu",post:"résoudre le problème.",en:"He managed to solve the problem."},
      {pre:"Elle n'est pas parvenue",post:"le convaincre.",en:"She didn't manage to convince him."}
    ]},

  { id:"preparer", verb:"se préparer à", prep:"à", en:"to prepare to",
    rule:"Se préparer est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je me prépare",post:"partir.",en:"I'm getting ready to leave."},
      {pre:"Elle se prépare",post:"passer l'examen.",en:"She's preparing to take the exam."},
      {pre:"On se prépare",post:"déménager.",en:"We're getting ready to move."},
      {pre:"Il se prépare",post:"courir un marathon.",en:"He's preparing to run a marathon."},
      {pre:"Prépare-toi",post:"entendre une mauvaise nouvelle.",en:"Get ready to hear bad news."}
    ]},

  { id:"renoncer", verb:"renoncer à", prep:"à", en:"to give up",
    rule:"Renoncer est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"J'ai renoncé",post:"comprendre.",en:"I gave up trying to understand."},
      {pre:"Elle a renoncé",post:"fumer.",en:"She gave up smoking."},
      {pre:"Il renonce",post:"courir le marathon.",en:"He's giving up on running the marathon."},
      {pre:"On a renoncé",post:"partir ce week-end.",en:"We gave up on leaving this weekend."},
      {pre:"Il ne renonce jamais",post:"essayer.",en:"He never gives up trying."}
    ]},

  { id:"resigner", verb:"se résigner à", prep:"à", en:"to resign oneself to",
    rule:"Se résigner est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Il se résigne",post:"attendre.",en:"He resigns himself to waiting."},
      {pre:"Elle s'est résignée",post:"rester ici.",en:"She resigned herself to staying here."},
      {pre:"On se résigne",post:"accepter la situation.",en:"We resign ourselves to accepting the situation."},
      {pre:"Il s'est résigné",post:"vivre loin de sa famille.",en:"He resigned himself to living far from his family."},
      {pre:"Je me résigne",post:"recommencer.",en:"I resign myself to starting over."}
    ]},

  { id:"reussir", verb:"réussir à", prep:"à", en:"to manage to / to succeed in",
    rule:"Réussir est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"J'ai réussi",post:"trouver un appartement.",en:"I managed to find an apartment."},
      {pre:"Elle réussit",post:"tout faire en une journée.",en:"She manages to do everything in one day."},
      {pre:"Il a réussi",post:"la convaincre.",en:"He managed to convince her."},
      {pre:"On a réussi",post:"finir à temps.",en:"We managed to finish on time."},
      {pre:"Tu as réussi",post:"ouvrir la bouteille ?",en:"Did you manage to open the bottle?"}
    ]},

  { id:"songer", verb:"songer à", prep:"à", en:"to think about / to consider",
    rule:"Songer est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je songe",post:"changer de ville.",en:"I'm thinking about changing cities."},
      {pre:"Elle songe",post:"reprendre ses études.",en:"She's thinking about going back to school."},
      {pre:"Il songe",post:"vendre sa maison.",en:"He's thinking about selling his house."},
      {pre:"On songe",post:"adopter un chien.",en:"We're thinking about adopting a dog."},
      {pre:"Tu songes",post:"partir à l'étranger ?",en:"Are you thinking about going abroad?"}
    ]},

  { id:"tenir", verb:"tenir à", prep:"à", en:"to insist on / to be keen to",
    rule:"Tenir est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"Je tiens",post:"vous remercier.",en:"I insist on thanking you."},
      {pre:"Elle tient",post:"venir avec nous.",en:"She insists on coming with us."},
      {pre:"Il tient",post:"payer l'addition.",en:"He insists on paying the bill."},
      {pre:"On tient",post:"garder ce secret.",en:"We insist on keeping this secret."},
      {pre:"Je tenais",post:"vous prévenir.",en:"I wanted to warn you."}
    ]},

  { id:"viser", verb:"viser à", prep:"à", en:"to aim to",
    rule:"Viser est suivi de « à » devant un infinitif.",
    sentences:[
      {pre:"On vise",post:"améliorer la qualité.",en:"We aim to improve quality."},
      {pre:"Elle vise",post:"obtenir une promotion.",en:"She aims to get a promotion."},
      {pre:"Ce projet vise",post:"réduire la pollution.",en:"This project aims to reduce pollution."},
      {pre:"Il vise",post:"devenir champion.",en:"He aims to become champion."},
      {pre:"On vise",post:"finir avant vendredi.",en:"We're aiming to finish before Friday."}
    ]},

  // ════════════════════════════════════════════════════════════
  //  PREPOSITION « DE »
  // ════════════════════════════════════════════════════════════

  { id:"accepter", verb:"accepter de", prep:"de", en:"to agree to / to accept",
    rule:"Accepter est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'accepte",post:"vous aider.",en:"I agree to help you."},
      {pre:"Elle a accepté",post:"venir.",en:"She agreed to come."},
      {pre:"Il accepte",post:"travailler le week-end.",en:"He agrees to work on weekends."},
      {pre:"On a accepté",post:"changer la date.",en:"We agreed to change the date."},
      {pre:"Tu acceptes",post:"m'accompagner ?",en:"Do you agree to come with me?"}
    ]},

  { id:"accuser", verb:"accuser de", prep:"de", en:"to accuse of",
    rule:"Accuser est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"On l'accuse",post:"avoir menti.",en:"They accuse him of having lied."},
      {pre:"Elle m'accuse",post:"ne jamais écouter.",en:"She accuses me of never listening."},
      {pre:"Il est accusé",post:"avoir triché.",en:"He's accused of having cheated."},
      {pre:"On m'accuse",post:"être en retard.",en:"They accuse me of being late."},
      {pre:"Elle l'accuse",post:"avoir oublié.",en:"She accuses him of having forgotten."}
    ]},

  { id:"arreter", verb:"s'arrêter de", prep:"de", en:"to stop",
    rule:"S'arrêter est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Il s'arrête",post:"pleuvoir.",en:"It stops raining."},
      {pre:"Elle s'est arrêtée",post:"fumer.",en:"She stopped smoking."},
      {pre:"Je me suis arrêté",post:"courir à cause de la douleur.",en:"I stopped running because of the pain."},
      {pre:"On s'arrête",post:"travailler à dix-huit heures.",en:"We stop working at six."},
      {pre:"Il ne s'arrête jamais",post:"parler.",en:"He never stops talking."}
    ]},

  { id:"avoirbesoin", verb:"avoir besoin de", prep:"de", en:"to need to",
    rule:"Avoir besoin est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'ai besoin",post:"dormir.",en:"I need to sleep."},
      {pre:"Elle a besoin",post:"réfléchir.",en:"She needs to think."},
      {pre:"On a besoin",post:"acheter du lait.",en:"We need to buy milk."},
      {pre:"Il a besoin",post:"se reposer.",en:"He needs to rest."},
      {pre:"Tu as besoin",post:"parler à quelqu'un ?",en:"Do you need to talk to someone?"}
    ]},

  { id:"avoirenvie", verb:"avoir envie de", prep:"de", en:"to feel like",
    rule:"Avoir envie est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'ai envie",post:"manger une glace.",en:"I feel like eating ice cream."},
      {pre:"Elle a envie",post:"sortir ce soir.",en:"She feels like going out tonight."},
      {pre:"On a envie",post:"voyager.",en:"We feel like traveling."},
      {pre:"Il n'a pas envie",post:"travailler aujourd'hui.",en:"He doesn't feel like working today."},
      {pre:"Tu as envie",post:"voir un film ?",en:"Do you feel like watching a movie?"}
    ]},

  { id:"avoirintention", verb:"avoir l'intention de", prep:"de", en:"to intend to",
    rule:"Avoir l'intention est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'ai l'intention",post:"déménager.",en:"I intend to move."},
      {pre:"Elle a l'intention",post:"changer de métier.",en:"She intends to change careers."},
      {pre:"On a l'intention",post:"partir en mars.",en:"We intend to leave in March."},
      {pre:"Il a l'intention",post:"apprendre le japonais.",en:"He intends to learn Japanese."},
      {pre:"Vous avez l'intention",post:"rester longtemps ?",en:"Do you intend to stay long?"}
    ]},

  { id:"avoirpeur", verb:"avoir peur de", prep:"de", en:"to be afraid of",
    rule:"Avoir peur est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'ai peur",post:"prendre l'avion.",en:"I'm afraid of flying."},
      {pre:"Elle a peur",post:"sortir le soir.",en:"She's afraid of going out at night."},
      {pre:"Il a peur",post:"échouer.",en:"He's afraid of failing."},
      {pre:"On a peur",post:"déranger.",en:"We're afraid of disturbing."},
      {pre:"Tu as peur",post:"être en retard ?",en:"Are you afraid of being late?"}
    ]},

  { id:"cesser", verb:"cesser de", prep:"de", en:"to stop / to cease",
    rule:"Cesser est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Il a cessé",post:"pleuvoir.",en:"It stopped raining."},
      {pre:"Elle ne cesse",post:"se plaindre.",en:"She never stops complaining."},
      {pre:"Cessez",post:"faire du bruit !",en:"Stop making noise!"},
      {pre:"Il a cessé",post:"fumer l'an dernier.",en:"He stopped smoking last year."},
      {pre:"La douleur a cessé",post:"me gêner.",en:"The pain stopped bothering me."}
    ]},

  { id:"choisir", verb:"choisir de", prep:"de", en:"to choose to",
    rule:"Choisir est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'ai choisi",post:"rester.",en:"I chose to stay."},
      {pre:"Elle choisit",post:"vivre à la campagne.",en:"She chooses to live in the countryside."},
      {pre:"Il a choisi",post:"ne rien dire.",en:"He chose to say nothing."},
      {pre:"On a choisi",post:"prendre le train.",en:"We chose to take the train."},
      {pre:"Tu as choisi",post:"partir ou rester ?",en:"Did you choose to leave or stay?"}
    ]},

  { id:"conseiller", verb:"conseiller de", prep:"de", en:"to advise to",
    rule:"Conseiller est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je te conseille",post:"réserver à l'avance.",en:"I advise you to book in advance."},
      {pre:"Le médecin m'a conseillé",post:"me reposer.",en:"The doctor advised me to rest."},
      {pre:"Elle lui conseille",post:"prendre son temps.",en:"She advises him to take his time."},
      {pre:"On vous conseille",post:"goûter le dessert.",en:"We recommend you try the dessert."},
      {pre:"Il m'a conseillé",post:"ne pas y aller.",en:"He advised me not to go."}
    ]},

  { id:"contenter", verb:"se contenter de", prep:"de", en:"to content oneself with",
    rule:"Se contenter est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Il se contente",post:"regarder.",en:"He contents himself with watching."},
      {pre:"Elle se contente",post:"sourire.",en:"She just smiles."},
      {pre:"On se contente",post:"manger un sandwich.",en:"We just eat a sandwich."},
      {pre:"Je me contente",post:"écouter.",en:"I just listen."},
      {pre:"Il se contente",post:"attendre sans rien dire.",en:"He just waits without saying anything."}
    ]},

  { id:"convaincre", verb:"convaincre de", prep:"de", en:"to convince to",
    rule:"Convaincre est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Elle m'a convaincu",post:"venir.",en:"She convinced me to come."},
      {pre:"Il essaie de me convaincre",post:"changer d'avis.",en:"He's trying to convince me to change my mind."},
      {pre:"On l'a convaincu",post:"rester.",en:"We convinced him to stay."},
      {pre:"J'ai réussi à la convaincre",post:"accepter.",en:"I managed to convince her to accept."},
      {pre:"Tu m'as convaincu",post:"essayer.",en:"You convinced me to try."}
    ]},

  { id:"craindre", verb:"craindre de", prep:"de", en:"to fear",
    rule:"Craindre est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je crains",post:"le déranger.",en:"I'm afraid of disturbing him."},
      {pre:"Elle craint",post:"perdre son emploi.",en:"She fears losing her job."},
      {pre:"Il craint",post:"arriver en retard.",en:"He fears arriving late."},
      {pre:"On craint",post:"ne pas avoir assez de temps.",en:"We fear not having enough time."},
      {pre:"Je crains",post:"vous décevoir.",en:"I'm afraid of disappointing you."}
    ]},

  { id:"defendre", verb:"défendre de", prep:"de", en:"to forbid",
    rule:"Défendre est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Le médecin lui défend",post:"faire du sport.",en:"The doctor forbids him to do sports."},
      {pre:"On nous défend",post:"entrer.",en:"We're forbidden from entering."},
      {pre:"Elle défend à ses enfants",post:"manger des bonbons.",en:"She forbids her children from eating candy."},
      {pre:"Il est défendu",post:"fumer ici.",en:"It's forbidden to smoke here."},
      {pre:"On m'a défendu",post:"parler de ça.",en:"I was forbidden to talk about that."}
    ]},

  { id:"demander", verb:"demander de", prep:"de", en:"to ask to",
    rule:"Demander est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je te demande",post:"m'écouter.",en:"I ask you to listen to me."},
      {pre:"Elle m'a demandé",post:"l'attendre.",en:"She asked me to wait for her."},
      {pre:"On m'a demandé",post:"remplir un formulaire.",en:"They asked me to fill out a form."},
      {pre:"Il demande",post:"ne pas faire de bruit.",en:"He asks not to make noise."},
      {pre:"Le professeur nous demande",post:"lire le chapitre trois.",en:"The teacher asks us to read chapter three."}
    ]},

  { id:"depecher", verb:"se dépêcher de", prep:"de", en:"to hurry to",
    rule:"Se dépêcher est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Dépêche-toi",post:"finir !",en:"Hurry up and finish!"},
      {pre:"Elle se dépêche",post:"préparer le dîner.",en:"She hurries to prepare dinner."},
      {pre:"On se dépêche",post:"partir avant la pluie.",en:"We hurry to leave before the rain."},
      {pre:"Il s'est dépêché",post:"répondre.",en:"He hurried to reply."},
      {pre:"Dépêchons-nous",post:"rentrer.",en:"Let's hurry home."}
    ]},

  { id:"decider", verb:"décider de", prep:"de", en:"to decide to",
    rule:"Décider est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'ai décidé",post:"partir.",en:"I decided to leave."},
      {pre:"Elle a décidé",post:"changer de travail.",en:"She decided to change jobs."},
      {pre:"On a décidé",post:"rester une nuit de plus.",en:"We decided to stay one more night."},
      {pre:"Il a décidé",post:"ne plus fumer.",en:"He decided to stop smoking."},
      {pre:"Tu as décidé",post:"faire quoi ?",en:"What did you decide to do?"}
    ]},

  { id:"empecher", verb:"empêcher de", prep:"de", en:"to prevent from",
    rule:"Empêcher est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"La pluie nous empêche",post:"sortir.",en:"The rain prevents us from going out."},
      {pre:"Rien ne m'empêche",post:"partir.",en:"Nothing prevents me from leaving."},
      {pre:"Le bruit m'empêche",post:"dormir.",en:"The noise prevents me from sleeping."},
      {pre:"Elle l'empêche",post:"faire une bêtise.",en:"She prevents him from making a mistake."},
      {pre:"On ne peut pas l'empêcher",post:"parler.",en:"We can't prevent him from talking."}
    ]},

  { id:"sempecher", verb:"s'empêcher de", prep:"de", en:"to refrain from",
    rule:"S'empêcher est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je ne peux pas m'empêcher",post:"rire.",en:"I can't help laughing."},
      {pre:"Elle ne peut pas s'empêcher",post:"sourire.",en:"She can't help smiling."},
      {pre:"Il ne s'empêche pas",post:"critiquer.",en:"He doesn't refrain from criticizing."},
      {pre:"On ne peut pas s'empêcher",post:"penser à ça.",en:"We can't help thinking about that."},
      {pre:"Je n'ai pas pu m'empêcher",post:"lui dire.",en:"I couldn't help telling him."}
    ]},

  { id:"envisager", verb:"envisager de", prep:"de", en:"to consider",
    rule:"Envisager est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'envisage",post:"déménager.",en:"I'm considering moving."},
      {pre:"Elle envisage",post:"changer de carrière.",en:"She's considering changing careers."},
      {pre:"On envisage",post:"partir en Grèce.",en:"We're considering going to Greece."},
      {pre:"Il envisage",post:"prendre sa retraite.",en:"He's considering retiring."},
      {pre:"Tu envisages",post:"acheter une voiture ?",en:"Are you thinking about buying a car?"}
    ]},

  { id:"essayer", verb:"essayer de", prep:"de", en:"to try to",
    rule:"Essayer est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'essaie",post:"comprendre.",en:"I'm trying to understand."},
      {pre:"Elle essaie",post:"trouver un travail.",en:"She's trying to find a job."},
      {pre:"On essaie",post:"se voir plus souvent.",en:"We try to see each other more often."},
      {pre:"Il essaie",post:"apprendre le piano.",en:"He's trying to learn piano."},
      {pre:"Essaie",post:"ne pas t'inquiéter.",en:"Try not to worry."}
    ]},

  { id:"eviter", verb:"éviter de", prep:"de", en:"to avoid",
    rule:"Éviter est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'évite",post:"manger trop tard.",en:"I avoid eating too late."},
      {pre:"Elle évite",post:"prendre la voiture.",en:"She avoids taking the car."},
      {pre:"On évite",post:"parler politique.",en:"We avoid talking about politics."},
      {pre:"Il évite",post:"sortir quand il pleut.",en:"He avoids going out when it rains."},
      {pre:"Évite",post:"faire du bruit le soir.",en:"Avoid making noise in the evening."}
    ]},

  { id:"excuser", verb:"s'excuser de", prep:"de", en:"to apologize for",
    rule:"S'excuser est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je m'excuse",post:"être en retard.",en:"I apologize for being late."},
      {pre:"Elle s'excuse",post:"avoir oublié.",en:"She apologizes for having forgotten."},
      {pre:"Il s'excuse",post:"vous déranger.",en:"He apologizes for disturbing you."},
      {pre:"On s'excuse",post:"ne pas avoir répondu.",en:"We apologize for not having replied."},
      {pre:"Je m'excuse",post:"ne pas pouvoir venir.",en:"I apologize for not being able to come."}
    ]},

  { id:"fairesemblant", verb:"faire semblant de", prep:"de", en:"to pretend to",
    rule:"Faire semblant est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Il fait semblant",post:"dormir.",en:"He pretends to be sleeping."},
      {pre:"Elle fait semblant",post:"ne pas comprendre.",en:"She pretends not to understand."},
      {pre:"On fait semblant",post:"être surpris.",en:"We pretend to be surprised."},
      {pre:"Il fait semblant",post:"travailler.",en:"He pretends to work."},
      {pre:"Ne fais pas semblant",post:"ne pas savoir.",en:"Don't pretend you don't know."}
    ]},

  { id:"risquer", verb:"risquer de", prep:"de", en:"to risk / to be likely to",
    rule:"Risquer est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Il risque",post:"pleuvoir cet après-midi.",en:"It might rain this afternoon."},
      {pre:"Tu risques",post:"rater ton train.",en:"You might miss your train."},
      {pre:"Elle risque",post:"ne pas être contente.",en:"She might not be happy."},
      {pre:"On risque",post:"arriver en retard.",en:"We might arrive late."},
      {pre:"Il risque",post:"perdre son emploi.",en:"He might lose his job."}
    ]},

  { id:"finir", verb:"finir de", prep:"de", en:"to finish",
    rule:"Finir est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'ai fini",post:"manger.",en:"I finished eating."},
      {pre:"Elle finit",post:"se préparer.",en:"She's finishing getting ready."},
      {pre:"Tu as fini",post:"lire le livre ?",en:"Have you finished reading the book?"},
      {pre:"On a fini",post:"ranger la maison.",en:"We finished tidying up the house."},
      {pre:"Il n'a pas fini",post:"parler.",en:"He hasn't finished speaking."}
    ]},

  { id:"interdire", verb:"interdire de", prep:"de", en:"to forbid",
    rule:"Interdire est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"On m'interdit",post:"stationner ici.",en:"I'm forbidden from parking here."},
      {pre:"Le règlement interdit",post:"fumer dans le bâtiment.",en:"The rules forbid smoking in the building."},
      {pre:"Elle lui interdit",post:"sortir ce soir.",en:"She forbids him to go out tonight."},
      {pre:"Il est interdit",post:"photographier.",en:"It's forbidden to take photos."},
      {pre:"On nous a interdit",post:"utiliser nos téléphones.",en:"We were forbidden from using our phones."}
    ]},

  { id:"menacer", verb:"menacer de", prep:"de", en:"to threaten to",
    rule:"Menacer est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Il menace",post:"partir.",en:"He threatens to leave."},
      {pre:"Elle menace",post:"appeler la police.",en:"She threatens to call the police."},
      {pre:"Le ciel menace",post:"s'assombrir.",en:"The sky threatens to darken."},
      {pre:"Il menace",post:"tout raconter.",en:"He threatens to tell everything."},
      {pre:"Elle a menacé",post:"démissionner.",en:"She threatened to resign."}
    ]},

  { id:"meriter", verb:"mériter de", prep:"de", en:"to deserve to",
    rule:"Mériter est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Tu mérites",post:"te reposer.",en:"You deserve to rest."},
      {pre:"Elle mérite",post:"réussir.",en:"She deserves to succeed."},
      {pre:"Ce film mérite",post:"être vu.",en:"This film deserves to be seen."},
      {pre:"Il mérite",post:"avoir une seconde chance.",en:"He deserves to get a second chance."},
      {pre:"On mérite",post:"savoir la vérité.",en:"We deserve to know the truth."}
    ]},

  { id:"offrir", verb:"offrir de", prep:"de", en:"to offer to",
    rule:"Offrir est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Il m'offre",post:"m'accompagner.",en:"He offers to come with me."},
      {pre:"Elle nous offre",post:"rester chez elle.",en:"She offers us to stay at her place."},
      {pre:"On m'a offert",post:"m'aider.",en:"They offered to help me."},
      {pre:"Il offre",post:"payer le repas.",en:"He offers to pay for the meal."},
      {pre:"Elle offre",post:"garder les enfants.",en:"She offers to look after the children."}
    ]},

  { id:"oublier", verb:"oublier de", prep:"de", en:"to forget to",
    rule:"Oublier est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"J'ai oublié",post:"fermer la porte.",en:"I forgot to close the door."},
      {pre:"N'oublie pas",post:"m'appeler.",en:"Don't forget to call me."},
      {pre:"Elle a oublié",post:"prendre son parapluie.",en:"She forgot to take her umbrella."},
      {pre:"Il oublie toujours",post:"répondre.",en:"He always forgets to reply."},
      {pre:"On a oublié",post:"acheter du pain.",en:"We forgot to buy bread."}
    ]},

  { id:"permettre", verb:"permettre de", prep:"de", en:"to allow / to permit",
    rule:"Permettre est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Cet appartement nous permet",post:"vivre en centre-ville.",en:"This apartment allows us to live downtown."},
      {pre:"Permettez-moi",post:"vous expliquer.",en:"Allow me to explain."},
      {pre:"Le visa permet",post:"rester trois mois.",en:"The visa allows you to stay three months."},
      {pre:"Ça m'a permis",post:"découvrir la culture.",en:"It allowed me to discover the culture."},
      {pre:"L'appli permet",post:"réserver en ligne.",en:"The app lets you book online."}
    ]},

  { id:"persuader", verb:"persuader de", prep:"de", en:"to persuade to",
    rule:"Persuader est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Elle m'a persuadé",post:"venir.",en:"She persuaded me to come."},
      {pre:"Il essaie de me persuader",post:"changer d'avis.",en:"He's trying to persuade me to change my mind."},
      {pre:"On l'a persuadé",post:"rester.",en:"We persuaded him to stay."},
      {pre:"Tu m'as persuadé",post:"essayer.",en:"You persuaded me to try."},
      {pre:"Elle nous a persuadés",post:"accepter.",en:"She persuaded us to accept."}
    ]},

  { id:"plaindre", verb:"se plaindre de", prep:"de", en:"to complain about",
    rule:"Se plaindre est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Il se plaint",post:"ne jamais dormir.",en:"He complains about never sleeping."},
      {pre:"Elle se plaint",post:"travailler trop.",en:"She complains about working too much."},
      {pre:"On se plaint",post:"ne rien comprendre.",en:"We complain about not understanding anything."},
      {pre:"Il se plaint",post:"avoir mal au dos.",en:"He complains about having back pain."},
      {pre:"Ne te plains pas",post:"être fatigué.",en:"Don't complain about being tired."}
    ]},

  { id:"promettre", verb:"promettre de", prep:"de", en:"to promise to",
    rule:"Promettre est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je te promets",post:"revenir.",en:"I promise you I'll come back."},
      {pre:"Elle a promis",post:"être à l'heure.",en:"She promised to be on time."},
      {pre:"Il promet",post:"faire un effort.",en:"He promises to make an effort."},
      {pre:"On a promis",post:"ne rien dire.",en:"We promised to say nothing."},
      {pre:"Promets-moi",post:"ne pas oublier.",en:"Promise me you won't forget."}
    ]},

  { id:"projeter", verb:"projeter de", prep:"de", en:"to plan to",
    rule:"Projeter est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je projette",post:"partir en vacances.",en:"I'm planning to go on vacation."},
      {pre:"Elle projette",post:"créer son entreprise.",en:"She's planning to start her own business."},
      {pre:"On projette",post:"visiter le Japon.",en:"We're planning to visit Japan."},
      {pre:"Il projette",post:"prendre une année sabbatique.",en:"He's planning to take a sabbatical year."},
      {pre:"Tu projettes",post:"faire quoi cet été ?",en:"What are you planning to do this summer?"}
    ]},

  { id:"refuser", verb:"refuser de", prep:"de", en:"to refuse to",
    rule:"Refuser est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Il refuse",post:"partir.",en:"He refuses to leave."},
      {pre:"Elle refuse",post:"manger de la viande.",en:"She refuses to eat meat."},
      {pre:"On refuse",post:"accepter cette décision.",en:"We refuse to accept this decision."},
      {pre:"Je refuse",post:"me taire.",en:"I refuse to be silent."},
      {pre:"Il a refusé",post:"signer le contrat.",en:"He refused to sign the contract."}
    ]},

  { id:"regretter", verb:"regretter de", prep:"de", en:"to regret",
    rule:"Regretter est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je regrette",post:"ne pas être venu.",en:"I regret not having come."},
      {pre:"Elle regrette",post:"avoir dit ça.",en:"She regrets having said that."},
      {pre:"Il regrette",post:"ne pas avoir voyagé plus jeune.",en:"He regrets not having traveled younger."},
      {pre:"On regrette",post:"vous informer que c'est complet.",en:"We regret to inform you that it's full."},
      {pre:"Je ne regrette pas",post:"avoir changé de travail.",en:"I don't regret having changed jobs."}
    ]},

  { id:"remercier", verb:"remercier de", prep:"de", en:"to thank for",
    rule:"Remercier est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je vous remercie",post:"m'avoir aidé.",en:"I thank you for having helped me."},
      {pre:"Elle le remercie",post:"être venu.",en:"She thanks him for having come."},
      {pre:"On vous remercie",post:"nous avoir prévenus.",en:"We thank you for having warned us."},
      {pre:"Je te remercie",post:"m'avoir écouté.",en:"I thank you for having listened to me."},
      {pre:"Merci",post:"m'avoir accompagné.",en:"Thank you for having accompanied me."}
    ]},

  { id:"reprocher", verb:"reprocher de", prep:"de", en:"to reproach for",
    rule:"Reprocher est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Elle me reproche",post:"ne jamais écouter.",en:"She reproaches me for never listening."},
      {pre:"Il lui reproche",post:"avoir menti.",en:"He reproaches her for having lied."},
      {pre:"On me reproche",post:"être trop franc.",en:"They reproach me for being too frank."},
      {pre:"Elle me reproche",post:"ne pas avoir appelé.",en:"She reproaches me for not having called."},
      {pre:"Il lui reproche",post:"arriver toujours en retard.",en:"He reproaches her for always arriving late."}
    ]},

  { id:"soupconner", verb:"soupçonner de", prep:"de", en:"to suspect of",
    rule:"Soupçonner est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"On le soupçonne",post:"avoir triché.",en:"He's suspected of having cheated."},
      {pre:"Elle le soupçonne",post:"mentir.",en:"She suspects him of lying."},
      {pre:"La police le soupçonne",post:"avoir volé la voiture.",en:"The police suspect him of having stolen the car."},
      {pre:"On me soupçonne",post:"cacher quelque chose.",en:"I'm suspected of hiding something."},
      {pre:"Il la soupçonne",post:"ne pas dire la vérité.",en:"He suspects her of not telling the truth."}
    ]},

  { id:"souvenir", verb:"se souvenir de", prep:"de", en:"to remember",
    rule:"Se souvenir est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je me souviens",post:"avoir visité ce musée.",en:"I remember having visited this museum."},
      {pre:"Elle se souvient",post:"l'avoir rencontré à Paris.",en:"She remembers having met him in Paris."},
      {pre:"Tu te souviens",post:"être venu ici enfant ?",en:"Do you remember coming here as a child?"},
      {pre:"On se souvient",post:"avoir mangé dans ce restaurant.",en:"We remember having eaten at this restaurant."},
      {pre:"Il ne se souvient pas",post:"avoir dit ça.",en:"He doesn't remember having said that."}
    ]},

  { id:"rever", verb:"rêver de", prep:"de", en:"to dream of",
    rule:"Rêver est suivi de « de » devant un infinitif.",
    sentences:[
      {pre:"Je rêve",post:"voyager au Japon.",en:"I dream of traveling to Japan."},
      {pre:"Elle rêve",post:"devenir actrice.",en:"She dreams of becoming an actress."},
      {pre:"Il rêve",post:"vivre au bord de la mer.",en:"He dreams of living by the sea."},
      {pre:"On rêve tous",post:"être libres.",en:"We all dream of being free."},
      {pre:"Tu rêves",post:"faire quoi plus tard ?",en:"What do you dream of doing later?"}
    ]}

];
