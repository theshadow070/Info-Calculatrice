import { CasioFunction } from '../types/calculator';

export const FX991ES_FUNCTIONS: CasioFunction[] = [
  // --- SECOND DEGRÉ & ALGÈBRE ---
  {
    id: 'second-degre-eqn',
    nom: 'Résoudre une équation du 2nd degré',
    slug: 'resoudre-equation-second-degre',
    categorie: 'Équations & Systèmes',
    sousCategorie: 'Polynômes',
    description: 'Trouve instantanément les racines x₁ et x₂ de ax² + bx + c = 0, y compris les solutions complexes.',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Chapitre Second Degré : recherche des racines, factorisation de polynômes, calcul du discriminant Δ.',
    programmeS2Theme: 'second_degre',
    modeCasio: 'EQN (MODE 5)',
    modeCode: 5,
    touchesRapides: ['MODE', '5', '3', 'a', '=', 'b', '=', 'c', '=', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Entrer dans le mode Équations',
        instruction: 'Appuie sur la touche MODE, puis choisis 5 (EQN).',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '5', note: 'EQN' }],
        lcdDisplay: {
          line1: '1: anX+bnY=cn   2: anX+bnY+cnZ=dn',
          line2: '3: aX²+bX+c=0   4: aX³+bX²+cX+d=0',
          indicators: ['D', 'Math']
        },
        explanation: 'Le menu affiche les 4 types d\'équations résolubles par la fx-991ES.'
      },
      {
        stepNumber: 2,
        title: 'Sélectionner le format quadratique (degré 2)',
        instruction: 'Appuie sur 3 pour choisir aX² + bX + c = 0.',
        keys: [{ keyLabel: '3', note: 'Quadratique' }],
        lcdDisplay: {
          line1: '      a       b       c',
          line2: '      0       0       0',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice affiche une grille matricielle pour saisir les 3 coefficients a, b et c.'
      },
      {
        stepNumber: 3,
        title: 'Saisir les coefficients a, b et c',
        instruction: 'Tape la valeur de a puis =, puis b puis =, puis c puis =.',
        keys: [
          { keyLabel: '2', note: 'Ex: a=2' },
          { keyLabel: '=', isEnter: true },
          { keyLabel: '(-)', note: 'Moins unaire' },
          { keyLabel: '5', note: 'Ex: b=-5' },
          { keyLabel: '=', isEnter: true },
          { keyLabel: '2', note: 'Ex: c=2' },
          { keyLabel: '=', isEnter: true }
        ],
        lcdDisplay: {
          line1: '      a       b       c',
          line2: '      2      -5       2',
          indicators: ['D', 'Math']
        },
        explanation: 'Utilise bien la touche (-) pour les nombres négatifs. Chaque coefficient est validé avec =.'
      },
      {
        stepNumber: 4,
        title: 'Lire les solutions x₁ et x₂',
        instruction: 'Appuie sur = pour afficher la première solution X₁, puis sur = ou ▼ pour la seconde X₂.',
        keys: [{ keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'X1=',
          line2: '2',
          indicators: ['D', 'Math']
        },
        explanation: 'Si les solutions contiennent des fractions ou racines, la fx-991ES affiche la forme exacte naturelle !'
      }
    ],
    exempleConcret: {
      enonce: 'Résoudre dans ℝ l\'équation : 2x² - 5x + 2 = 0',
      action: 'Saisir a = 2, b = -5, c = 2 dans le menu EQN 3.',
      touchesDetaillees: [
        { keyLabel: 'MODE' },
        { keyLabel: '5' },
        { keyLabel: '3' },
        { keyLabel: '2' },
        { keyLabel: '=' },
        { keyLabel: '(-)' },
        { keyLabel: '5' },
        { keyLabel: '=' },
        { keyLabel: '2' },
        { keyLabel: '=' },
        { keyLabel: '=' }
      ],
      resultatAffiche: 'X₁ = 2  puis  X₂ = 1/2',
      interpretationScolaire: 'Δ = (-5)² - 4(2)(2) = 25 - 16 = 9 > 0. Les racines sont bien x₁ = (5+3)/4 = 2 et x₂ = (5-3)/4 = 1/2.'
    },
    aRetenir: 'MODE → 5 → 3 : donne directement les solutions exactes sans risque de faute de calcul sur le discriminant.',
    erreursFrequentes: [
      'Ne pas confondre la touche de signe négatif (-) avec la soustraction -.',
      'Si l\'équation est x² - 3 = 0, n\'oublie pas que b = 0 ! Il faut taper 0 pour b.',
      'Si un résultat affiche un petit "i" en haut à droite, cela signifie que Δ < 0 et que la solution est complexe.'
    ],
    astucePro: 'Pour revenir au mode normal de calcul après avoir résolu ton équation, appuie sur MODE puis 1 (COMP).',
    motsClesRecherche: ['equation', 'second degre', 'polynome', 'racines', 'delta', 'discriminant', 'degre 2', 'factoriser', 'x1', 'x2'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- TABLE DE VALEURS ---
  {
    id: 'tableau-valeurs-table',
    nom: 'Générer un tableau de valeurs f(x)',
    slug: 'tableau-de-valeurs-table',
    categorie: 'Fonctions & Analyse',
    sousCategorie: 'Étude de fonction',
    description: 'Calcule une table de valeurs pour f(x) avec un pas régulier pour tracer une courbe ou repérer un zéro.',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Tracé de courbes représentatives, conjecture de variations et recherche approchée de solutions f(x)=0.',
    programmeS2Theme: 'fonctions',
    modeCasio: 'TABLE (MODE 8)',
    modeCode: 8,
    touchesRapides: ['MODE', '8', 'f(X)', '=', 'Start', '=', 'End', '=', 'Step', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Activer le mode TABLE',
        instruction: 'Appuie sur MODE puis choisis 8 (TABLE).',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '8', note: 'TABLE' }],
        lcdDisplay: {
          line1: 'f(X)=',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'L\'écran invite à saisir l\'expression de la fonction f(X).'
      },
      {
        stepNumber: 2,
        title: 'Saisir la variable X',
        instruction: 'Pour écrire la lettre X dans la formule, fais ALPHA puis la parenthèse fermante ) où se trouve le X rouge.',
        keys: [
          { keyLabel: 'ALPHA', modifier: 'ALPHA' },
          { keyLabel: ')', subLabel: 'X' },
          { keyLabel: 'x²', note: 'X²' },
          { keyLabel: '-' },
          { keyLabel: '3' }
        ],
        lcdDisplay: {
          line1: 'f(X)=X²-3',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'La variable de la fonction doit toujours être saisie avec [ALPHA] + [ ) ]. Valide avec =.'
      },
      {
        stepNumber: 3,
        title: 'Définir la plage : Start, End et Step',
        instruction: 'Règle la valeur de début (Start), de fin (End) et le pas (Step). Valide chaque valeur avec =.',
        keys: [
          { keyLabel: '(-)' },
          { keyLabel: '2', note: 'Start=-2' },
          { keyLabel: '=' },
          { keyLabel: '3', note: 'End=3' },
          { keyLabel: '=' },
          { keyLabel: '0' },
          { keyLabel: '.' },
          { keyLabel: '5', note: 'Step=0.5' },
          { keyLabel: '=' }
        ],
        lcdDisplay: {
          line1: 'Step?',
          line2: '1',
          indicators: ['D', 'Math']
        },
        explanation: 'Start = première valeur de x, End = dernière valeur, Step = espacement entre chaque valeur.'
      },
      {
        stepNumber: 4,
        title: 'Explorer la table générée',
        instruction: 'Utilise les flèches ▲ et ▼ pour faire défiler les couples (x, f(x)).',
        keys: [{ keyLabel: '▼', note: 'Défiler' }, { keyLabel: '▲' }],
        lcdDisplay: {
          line1: '      X       f(X)',
          line2: '1    -2         1',
          indicators: ['D', 'Math']
        },
        explanation: 'Sur la fx-991ES originale, la table supporte jusqu\'à 30 lignes. Idéal pour placer tes points sur le repère.'
      }
    ],
    exempleConcret: {
      enonce: 'Tracer f(x) = x² - 3 sur l\'intervalle [-2 ; 3] avec un pas de 1.',
      action: 'MODE 8 → taper X² - 3 → Start = -2, End = 3, Step = 1.',
      touchesDetaillees: [
        { keyLabel: 'MODE' },
        { keyLabel: '8' },
        { keyLabel: 'ALPHA' },
        { keyLabel: ')' },
        { keyLabel: 'x²' },
        { keyLabel: '-' },
        { keyLabel: '3' },
        { keyLabel: '=' },
        { keyLabel: '(-)' },
        { keyLabel: '2' },
        { keyLabel: '=' },
        { keyLabel: '3' },
        { keyLabel: '=' },
        { keyLabel: '1' },
        { keyLabel: '=' }
      ],
      resultatAffiche: 'Tableau : (-2, 1), (-1, -2), (0, -3), (1, -2), (2, 1), (3, 6)',
      interpretationScolaire: 'On repère tout de suite le minimum au point (0 ; -3) et la symétrie de la parabole.'
    },
    aRetenir: 'MODE 8 puis ALPHA + ) pour le X : permet de remplir ton tableau de valeurs sans calculer chaque image à la main.',
    erreursFrequentes: [
      'Erreur Insufficient Memory : si la plage (End - Start) / Step dépasse 30 points.',
      'Ne pas taper la touche de multiplication × pour la variable X ! Il faut [ALPHA] + [ ) ].',
      'Pour quitter la table et revenir au calcul normal : [MODE] puis [1].'
    ],
    astucePro: 'Pour trouver une racine approchée d\'une fonction compliquée, affine le Step à 0.1 puis 0.01 là où f(x) change de signe.',
    motsClesRecherche: ['table', 'tableau de valeurs', 'tracer courbe', 'f(x)', 'image', 'step', 'pas', 'start', 'end', 'fonction'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- DÉRIVÉE NUMÉRIQUE ---
  {
    id: 'derivee-numerique-ddx',
    nom: 'Calculer le nombre dérivé f\'(a)',
    slug: 'nombre-derivee-f-prime-point',
    categorie: 'Fonctions & Analyse',
    sousCategorie: 'Dérivation',
    description: 'Calcule instantanément la valeur exacte de f\'(a), soit le coefficient directeur de la tangente en un point.',
    niveau: 'intermediaire',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Chapitre Dérivation : équation de la tangente y = f\'(a)(x-a) + f(a), vérification de calculs de dérivées.',
    programmeS2Theme: 'derivation',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['SHIFT', '∫dx', 'f(X)', '►', 'a', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Activer la dérivée d/dx',
        instruction: 'En mode standard (MODE 1), fais SHIFT puis la touche intégrale [ ∫dx ].',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: '∫dx', subLabel: 'd/dx' }],
        lcdDisplay: {
          line1: 'd/dx( | )|x= ',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'La notation naturelle d/dx(...) s\'affiche avec un curseur pour l\'expression et la valeur de x.'
      },
      {
        stepNumber: 2,
        title: 'Saisir la fonction f(X)',
        instruction: 'Tape la formule de ta fonction en utilisant ALPHA + ) pour la variable X.',
        keys: [
          { keyLabel: 'ALPHA', modifier: 'ALPHA' },
          { keyLabel: ')', subLabel: 'X' },
          { keyLabel: 'x²' },
          { keyLabel: '+' },
          { keyLabel: '3' },
          { keyLabel: 'ALPHA', modifier: 'ALPHA' },
          { keyLabel: ')', subLabel: 'X' }
        ],
        lcdDisplay: {
          line1: 'd/dx(X²+3X)|x= ',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Exemple avec f(X) = X² + 3X.'
      },
      {
        stepNumber: 3,
        title: 'Entrer l\'abscisse du point a',
        instruction: 'Appuie sur la flèche droite ► pour atteindre x= et entre l\'abscisse désirée.',
        keys: [{ keyLabel: '►' }, { keyLabel: '2', note: 'Point a=2' }],
        lcdDisplay: {
          line1: 'd/dx(X²+3X)|x=2',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice va évaluer la dérivée numérique précisément en ce point.'
      },
      {
        stepNumber: 4,
        title: 'Obtenir la valeur de f\'(a)',
        instruction: 'Appuie sur = pour valider et afficher le nombre dérivé.',
        keys: [{ keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'd/dx(X²+3X)|x=2',
          line2: '7',
          indicators: ['D', 'Math']
        },
        explanation: 'Le résultat est 7. La pente de la tangente en x = 2 vaut donc 7.'
      }
    ],
    exempleConcret: {
      enonce: 'Déterminer le coefficient directeur de la tangente à la courbe de f(x) = x³ - 4x au point d\'abscisse a = 2.',
      action: 'Calculer d/dx(X³ - 4X) en x = 2.',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' },
        { keyLabel: '∫dx' },
        { keyLabel: 'ALPHA' },
        { keyLabel: ')' },
        { keyLabel: 'x³' },
        { keyLabel: '-' },
        { keyLabel: '4' },
        { keyLabel: 'ALPHA' },
        { keyLabel: ')' },
        { keyLabel: '►' },
        { keyLabel: '2' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '8',
      interpretationScolaire: 'Par le calcul formel : f\'(x) = 3x² - 4, donc f\'(2) = 3(4) - 4 = 8. La calculatrice confirme parfaitement ton calcul !'
    },
    aRetenir: 'SHIFT + ∫dx permet de vérifier en 5 secondes n\'importe quel calcul de dérivée en un point sans faire de calcul formel.',
    erreursFrequentes: [
      'Attention : la fx-991ES calcule une dérivée NUMÉRIQUE en un point précis, elle ne donne pas l\'expression littérale f\'(x).',
      'Si ta fonction contient des fonctions trigonométriques (sin, cos), assure-toi d\'être en RADIANS (SHIFT MODE 4).'
    ],
    astucePro: 'Pour vérifier si ta formule de f\'(x) trouvée en devoir est juste : calcule d/dx(f(x)) en un point x=3, et compare avec f\'(3). Si les deux nombres sont identiques, ta dérivée est juste !',
    motsClesRecherche: ['derivee', 'nombre derive', 'tangente', 'f prime', 'd/dx', 'coefficient directeur', 'taux de variation', 'extremum'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- FRACTION VERS DÉCIMAL S<=>D ---
  {
    id: 'fraction-decimal-sd',
    nom: 'Passer de Fraction à Décimal (S<=>D)',
    slug: 'conversion-fraction-decimal-sd',
    categorie: 'Calcul Fondamental',
    sousCategorie: 'Fractions',
    description: 'Bascule instantanément entre écriture fractionnaire exacte, notation racine/π et valeur décimale approchée.',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Partout : obtenir l\'arrondi demandé par un énoncé ou retrouver la valeur exacte.',
    programmeS2Theme: 'calcul_general',
    modeCasio: 'Tous les modes',
    modeCode: 1,
    touchesRapides: ['S<=>D'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Effectuer un calcul donnant une fraction',
        instruction: 'Calcule par exemple 7 ÷ 8 ou une fraction avec la touche fraction.',
        keys: [{ keyLabel: '7' }, { keyLabel: 'ab/c', subLabel: 'Fraction' }, { keyLabel: '8' }, { keyLabel: '=' }],
        lcdDisplay: {
          line1: '7/8',
          line2: '7/8',
          indicators: ['D', 'Math']
        },
        explanation: 'En mode MthIO (affichage naturel standard), la fx-991ES garde toujours la fraction irréductible.'
      },
      {
        stepNumber: 2,
        title: 'Appuyer sur la touche S<=>D',
        instruction: 'Appuie simplement sur la touche S<=>D (située au-dessus de DEL).',
        keys: [{ keyLabel: 'S<=>D', note: 'Standard to Decimal' }],
        lcdDisplay: {
          line1: '7/8',
          line2: '0.875',
          indicators: ['D', 'Math']
        },
        explanation: 'L\'affichage bascule immédiatement vers la valeur décimale 0.875.'
      },
      {
        stepNumber: 3,
        title: 'Appuyer à nouveau pour revenir',
        instruction: 'Chaque pression sur S<=>D alterne entre fraction et décimal.',
        keys: [{ keyLabel: 'S<=>D' }],
        lcdDisplay: {
          line1: '7/8',
          line2: '7/8',
          indicators: ['D', 'Math']
        },
        explanation: 'Fonctionne aussi avec √2, √3, π, etc.'
      }
    ],
    exempleConcret: {
      enonce: 'Donner l\'arrondi au centième de √50 / 3.',
      action: 'Taper √(50) / 3 puis S<=>D.',
      touchesDetaillees: [
        { keyLabel: '√' },
        { keyLabel: '5' },
        { keyLabel: '0' },
        { keyLabel: '►' },
        { keyLabel: 'ab/c' },
        { keyLabel: '3' },
        { keyLabel: '=' },
        { keyLabel: 'S<=>D' }
      ],
      resultatAffiche: '5√2/3 ≈ 2.3570226... -> 2.36',
      interpretationScolaire: 'Garde la valeur exacte 5√2/3 pour la suite du problème, et donne 2.36 pour la réponse finale.'
    },
    aRetenir: 'S<=>D est la touche la plus utile de la calculatrice pour alterner entre valeur exacte et valeur approchée.',
    erreursFrequentes: [
      'Ne pas réécrire à la main un calcul avec des décimaux arrondis : appuie sur S<=>D après le calcul exact.'
    ],
    astucePro: 'Pour obtenir directement un résultat décimal sans appuyer sur S<=>D, termine ton calcul par [SHIFT] + [ = ] !',
    motsClesRecherche: ['fraction', 'decimal', 's<=>d', 'sd', 'virgule', 'valeur approchee', 'arrondi', 'exact'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- DEGRÉS ET RADIANS ---
  {
    id: 'angle-degre-radian-setup',
    nom: 'Changer l\'unité d\'angle : Degrés / Radians',
    slug: 'regler-degres-radians-setup',
    categorie: 'Trigonométrie & Géométrie',
    sousCategorie: 'Configuration',
    description: 'Bascule la calculatrice entre Degrés (Deg) et Radians (Rad). Indispensable en trigonométrie de Première S2.',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Cercle trigonométrique, sinus, cosinus, enroulement de la droite numérique, physique.',
    programmeS2Theme: 'trigonometrie',
    modeCasio: 'SETUP (SHIFT MODE)',
    modeCode: 1,
    touchesRapides: ['SHIFT', 'MODE', '3 (Deg) ou 4 (Rad)'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Ouvrir le menu SETUP',
        instruction: 'Fais SHIFT puis appuie sur MODE (SETUP).',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'MODE', subLabel: 'SETUP' }],
        lcdDisplay: {
          line1: '1: MthIO       2: LineIO',
          line2: '3: Deg         4: Rad',
          indicators: ['D', 'Math']
        },
        explanation: 'Le menu de configuration système de la fx-991ES apparaît.'
      },
      {
        stepNumber: 2,
        title: 'Choisir Degré (3) ou Radian (4)',
        instruction: 'Appuie sur 3 pour les Degrés, ou sur 4 pour les Radians.',
        keys: [{ keyLabel: '4', note: 'Radian pour 1ère S2' }],
        lcdDisplay: {
          line1: '0',
          line2: '',
          indicators: ['R', 'Math']
        },
        explanation: 'Remarque le petit indicateur en haut de l\'écran LCD : "R" pour Radian, "D" pour Degré.'
      }
    ],
    exempleConcret: {
      enonce: 'Calculer cos(π/3) puis sin(30°).',
      action: 'Passer en Radian (SHIFT MODE 4) pour cos(π/3), puis en Degré (SHIFT MODE 3) pour sin(30°).',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' },
        { keyLabel: 'MODE' },
        { keyLabel: '4' },
        { keyLabel: 'cos' },
        { keyLabel: 'SHIFT' },
        { keyLabel: '×10ˣ', subLabel: 'π' },
        { keyLabel: 'ab/c' },
        { keyLabel: '3' },
        { keyLabel: ')' },
        { keyLabel: '=' }
      ],
      resultatAffiche: 'cos(π/3) = 1/2  et  sin(30°) = 1/2',
      interpretationScolaire: '30° correspond à π/6 radians. Attention : cos(30) en radians donnerait 0.15425..., ce qui fausserait tout ton exercice !'
    },
    aRetenir: 'Regarde TOUJOURS la lettre en haut de l\'écran LCD : D = Degrés, R = Radians. En mathématiques de 1ère S2, 95% des calculs sont en Radians.',
    erreursFrequentes: [
      'Erreur numéro 1 des lycéens : calculer cos(π/4) alors que la calculatrice est en mode D (Degré) ! Résultat faux garanti.',
      'Oublier de fermer la parenthèse après l\'argument trigonométrique.'
    ],
    astucePro: 'Si tu es en mode Radian mais veux calculer exceptionnellement le sinus d\'un angle en degrés sans changer le Setup, tape sin(30) suivi de [SHIFT] + [Ans] (DRG►) puis choisis 1 (°).',
    motsClesRecherche: ['radian', 'degre', 'angle', 'setup', 'trigo', 'cos', 'sin', 'tan', 'cercle trigonometrique', 'drg'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- SUITES RÉCURRENTES AVEC ANS ---
  {
    id: 'suites-recurrentes-ans',
    nom: 'Calculer les termes d\'une suite récurrente avec Ans',
    slug: 'termes-suite-recurrente-touche-ans',
    categorie: 'Suites & Récurrence',
    sousCategorie: 'Suites numériques',
    description: 'Génère à la chaîne les termes u₁, u₂, u₃, ... d\'une suite un+1 = f(un) simplement en appuyant sur =.',
    niveau: 'intermediaire',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Chapitre Suites numériques : conjecture du comportement d\'une suite, calcul rapide de termes, seuil.',
    programmeS2Theme: 'suites',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['u0', '=', 'Formule avec Ans', '=', '=', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Initialiser le premier terme u₀',
        instruction: 'Tape la valeur de u₀ (par exemple 5) et appuie sur =. Cette valeur est maintenant mémorisée dans la touche Ans.',
        keys: [{ keyLabel: '5', note: 'u0=5' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: '5',
          line2: '5',
          indicators: ['D', 'Math']
        },
        explanation: 'La touche Ans (Answer) retient toujours le dernier résultat validé par =.'
      },
      {
        stepNumber: 2,
        title: 'Écrire la formule de récurrence avec Ans',
        instruction: 'Sans effacer, tape la relation : par exemple pour un+1 = 2un - 3, tape 2 × Ans - 3.',
        keys: [
          { keyLabel: '2' },
          { keyLabel: '×' },
          { keyLabel: 'Ans', note: 'Dernier résultat' },
          { keyLabel: '-' },
          { keyLabel: '3' }
        ],
        lcdDisplay: {
          line1: '2×Ans-3',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Ans remplace la valeur du terme précédent un.'
      },
      {
        stepNumber: 3,
        title: 'Appuyer sur = pour générer u₁, u₂, u₃...',
        instruction: 'Appuie sur = : tu obtiens u₁. Réappuie sur = : tu obtiens u₂. Chaque pression calcule le terme suivant !',
        keys: [{ keyLabel: '=', note: 'u1 = 7' }, { keyLabel: '=', note: 'u2 = 11' }, { keyLabel: '=', note: 'u3 = 19' }],
        lcdDisplay: {
          line1: '2×Ans-3',
          line2: '7',
          indicators: ['D', 'Math']
        },
        explanation: 'Chaque pression réinjecte automatiquement le résultat précédent dans la formule.'
      }
    ],
    exempleConcret: {
      enonce: 'Soit la suite définie par u₀ = 2 et uₙ₊₁ = 0,5 uₙ + 3. Calculer u₁, u₂ et conjecturer la limite.',
      action: '2 = puis 0.5 × Ans + 3 puis = puis =.',
      touchesDetaillees: [
        { keyLabel: '2' },
        { keyLabel: '=' },
        { keyLabel: '0' },
        { keyLabel: '.' },
        { keyLabel: '5' },
        { keyLabel: '×' },
        { keyLabel: 'Ans' },
        { keyLabel: '+' },
        { keyLabel: '3' },
        { keyLabel: '=' },
        { keyLabel: '=' },
        { keyLabel: '=' },
        { keyLabel: '=' }
      ],
      resultatAffiche: 'u₁ = 4 ; u₂ = 5 ; u₃ = 5.5 ; u₄ = 5.75 ; ... converge vers 6',
      interpretationScolaire: 'En continuant d\'appuyer sur =, la suite se stabilise vers 6. On conjecture que lim uₙ = 6.'
    },
    aRetenir: 'u₀ suivi de = puis la relation avec Ans permet de calculer 20 termes de suite en 10 secondes.',
    erreursFrequentes: [
      'Ne pas appuyer sur AC entre les étapes, sinon la mémoire Ans est réinitialisée.',
      'Bien compter le nombre de pressions sur = pour savoir à quel indice uₙ tu es rendu.'
    ],
    astucePro: 'Si tu as besoin de compter automatiquement l\'indice n, tu peux utiliser le double calcul avec les deux-points [ALPHA] + [∫dx] (:) : A=A+1 : B=0.5B+3.',
    motsClesRecherche: ['suite', 'recurrence', 'ans', 'termes', 'un', 'un+1', 'conjecture', 'limite', 'u0'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- STATISTIQUES À 1 VARIABLE ---
  {
    id: 'statistiques-1var',
    nom: 'Statistiques à 1 variable (Moyenne, Écart-type)',
    slug: 'statistiques-1-variable-moyenne-ecart-type',
    categorie: 'Statistiques & Probabilités',
    sousCategorie: 'Statistiques descriptives',
    description: 'Calcule automatiquement la moyenne x̄, l\'écart-type σx, la somme des valeurs et l\'effectif total n.',
    niveau: 'intermediaire',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Chapitre Statistiques : analyse de séries de données, moyenne pondérée, dispersion, variance.',
    programmeS2Theme: 'probabilites_stats',
    modeCasio: 'STAT (MODE 3)',
    modeCode: 3,
    touchesRapides: ['MODE', '3', '1', 'Valeurs', 'AC', 'SHIFT', '1', '5 (Var)'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Entrer dans le mode STAT',
        instruction: 'Appuie sur MODE puis choisis 3 (STAT).',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '3', note: 'STAT' }],
        lcdDisplay: {
          line1: '1: 1-VAR        2: A+BX',
          line2: '3: _+CX²       4: ln X',
          indicators: ['D', 'Math']
        },
        explanation: 'Pour une série statistique simple, on choisit 1 (1-VAR).'
      },
      {
        stepNumber: 2,
        title: 'Sélectionner 1-VAR',
        instruction: 'Appuie sur 1 pour afficher le tableau de saisie des données X.',
        keys: [{ keyLabel: '1', note: '1-VAR' }],
        lcdDisplay: {
          line1: '       X',
          line2: '1      |',
          indicators: ['STAT', 'Math']
        },
        explanation: 'Une colonne X s\'affiche pour entrer les données.'
      },
      {
        stepNumber: 3,
        title: 'Saisir la série de valeurs',
        instruction: 'Tape chaque valeur suivie de =. Quand tu as terminé, appuie sur AC.',
        keys: [
          { keyLabel: '1' },
          { keyLabel: '2' },
          { keyLabel: '=' },
          { keyLabel: '1' },
          { keyLabel: '5' },
          { keyLabel: '=' },
          { keyLabel: '8' },
          { keyLabel: '=' },
          { keyLabel: 'AC', note: 'Quitter saisie' }
        ],
        lcdDisplay: {
          line1: '0',
          line2: '',
          indicators: ['STAT', 'Math']
        },
        explanation: 'Pas d\'inquiétude : appuyer sur AC ne supprime PAS tes données ! Elles sont conservées en mémoire.'
      },
      {
        stepNumber: 4,
        title: 'Accéder aux résultats (Moyenne, Écart-type)',
        instruction: 'Fais SHIFT puis 1 (STAT) pour ouvrir le menu statistique, puis choisis 5 (Var).',
        keys: [
          { keyLabel: 'SHIFT', modifier: 'SHIFT' },
          { keyLabel: '1', subLabel: 'STAT' },
          { keyLabel: '5', note: 'Var' }
        ],
        lcdDisplay: {
          line1: '1: n           2: x̄',
          line2: '3: xσn         4: xσn-1',
          indicators: ['STAT', 'Math']
        },
        explanation: '1: effectif n, 2: moyenne x̄, 3: écart-type σx.'
      },
      {
        stepNumber: 5,
        title: 'Afficher la moyenne',
        instruction: 'Appuie sur 2 (x̄) puis sur =.',
        keys: [{ keyLabel: '2', note: 'x̄' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'x̄',
          line2: '11.66666667',
          indicators: ['STAT', 'Math']
        },
        explanation: 'La moyenne exacte de la série s\'affiche instantanément.'
      }
    ],
    exempleConcret: {
      enonce: 'Calculer la moyenne et l\'écart-type des notes : 12, 15, 8, 14, 11.',
      action: 'MODE 3 1 → entrer les 5 notes avec = → AC → SHIFT 1 5 2 = pour x̄, et SHIFT 1 5 3 = pour σx.',
      touchesDetaillees: [
        { keyLabel: 'MODE' },
        { keyLabel: '3' },
        { keyLabel: '1' },
        { keyLabel: '1' }, { keyLabel: '2' }, { keyLabel: '=' },
        { keyLabel: '1' }, { keyLabel: '5' }, { keyLabel: '=' },
        { keyLabel: '8' }, { keyLabel: '=' },
        { keyLabel: '1' }, { keyLabel: '4' }, { keyLabel: '=' },
        { keyLabel: '1' }, { keyLabel: '1' }, { keyLabel: '=' },
        { keyLabel: 'AC' },
        { keyLabel: 'SHIFT' }, { keyLabel: '1' }, { keyLabel: '5' }, { keyLabel: '2' }, { keyLabel: '=' }
      ],
      resultatAffiche: 'Moyenne x̄ = 12 ; Écart-type σx ≈ 2.45',
      interpretationScolaire: 'L\'écart-type mesure la dispersion des notes autour de la moyenne 12.'
    },
    aRetenir: 'Après avoir saisi les données, appuie sur AC puis SHIFT + 1 pour retrouver le menu de calculs statistiques.',
    erreursFrequentes: [
      'Penser que la touche AC a effacé les données : non, elle passe juste en mode calcul statistique.',
      'Pour supprimer la mémoire statistique et recommencer à zéro : refaire [MODE] [3] [1].'
    ],
    astucePro: 'Si ta série a des effectifs (coefficients), active la colonne FREQ via SHIFT + MODE (SETUP) → flèche bas ▼ → 4 (STAT) → 1 (ON) !',
    motsClesRecherche: ['statistiques', 'moyenne', 'ecart type', 'variance', '1-var', 'effectif', 'serie', 'freq', 'ponderee'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- ACTIVATION COLONNE EFFECTIFS / FREQUENCE ---
  {
    id: 'stats-colonne-freq',
    nom: 'Activer la colonne des effectifs (FREQ) en statistiques',
    slug: 'activer-colonne-frequence-effectifs-stats',
    categorie: 'Statistiques & Probabilités',
    sousCategorie: 'Réglages',
    description: 'Affiche la colonne FREQ dans le tableau statistique pour saisir directement les coefficients ou effectifs.',
    niveau: 'intermediaire',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Séries statistiques avec coefficients ou tableau de valeurs avec effectifs associés.',
    programmeS2Theme: 'probabilites_stats',
    modeCasio: 'SETUP (SHIFT MODE)',
    modeCode: 3,
    touchesRapides: ['SHIFT', 'MODE', '▼', '4 (STAT)', '1 (ON)'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Accéder à la seconde page du SETUP',
        instruction: 'Fais SHIFT puis MODE, puis appuie sur la flèche vers le bas ▼.',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'MODE', subLabel: 'SETUP' }, { keyLabel: '▼' }],
        lcdDisplay: {
          line1: '1: ab/c        2: d/c',
          line2: '3: CMPLX       4: STAT',
          indicators: ['D', 'Math']
        },
        explanation: 'La deuxième page du menu SETUP contient les options avancées.'
      },
      {
        stepNumber: 2,
        title: 'Sélectionner STAT (4) puis ON (1)',
        instruction: 'Appuie sur 4 (STAT) puis choisis 1 (ON).',
        keys: [{ keyLabel: '4', note: 'STAT' }, { keyLabel: '1', note: 'ON' }],
        lcdDisplay: {
          line1: 'Frequency?',
          line2: '1: ON    2: OFF',
          indicators: ['D', 'Math']
        },
        explanation: 'La fréquence (effectif) est maintenant activée.'
      },
      {
        stepNumber: 3,
        title: 'Constater la double colonne dans MODE 3',
        instruction: 'En retournant dans MODE 3 puis 1, tu disposes de deux colonnes : X et FREQ !',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '3' }, { keyLabel: '1' }],
        lcdDisplay: {
          line1: '       X      FREQ',
          line2: '1      |        1',
          indicators: ['STAT', 'Math']
        },
        explanation: 'Entre la note dans X et le coefficient dans FREQ.'
      }
    ],
    exempleConcret: {
      enonce: 'Calculer la moyenne avec coefficients : Note 14 (coeff 3), Note 8 (coeff 1), Note 12 (coeff 2).',
      action: 'Saisir X=14 FREQ=3, X=8 FREQ=1, X=12 FREQ=2 puis AC → SHIFT 1 5 2 =.',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' }, { keyLabel: 'MODE' }, { keyLabel: '▼' }, { keyLabel: '4' }, { keyLabel: '1' },
        { keyLabel: 'MODE' }, { keyLabel: '3' }, { keyLabel: '1' },
        { keyLabel: '1' }, { keyLabel: '4' }, { keyLabel: '=' },
        { keyLabel: '8' }, { keyLabel: '=' },
        { keyLabel: '1' }, { keyLabel: '2' }, { keyLabel: '=' },
        { keyLabel: '►' }, { keyLabel: '▲' }, { keyLabel: '▲' },
        { keyLabel: '3' }, { keyLabel: '=' },
        { keyLabel: '1' }, { keyLabel: '=' },
        { keyLabel: '2' }, { keyLabel: '=' },
        { keyLabel: 'AC' },
        { keyLabel: 'SHIFT' }, { keyLabel: '1' }, { keyLabel: '5' }, { keyLabel: '2' }, { keyLabel: '=' }
      ],
      resultatAffiche: 'x̄ = 12.33333333 (soit 74/6 = 37/3)',
      interpretationScolaire: 'Calcul de moyenne pondérée automatique : (14×3 + 8×1 + 12×2) / 6 = 74/6.'
    },
    aRetenir: 'SHIFT MODE ▼ 4 1 active la colonne FREQ pour gérer tous les coefficients d\'un devoir sans taper 3 fois la même note.',
    erreursFrequentes: [
      'Si tu laisses FREQ activé pour une série sans coefficients, vérifie que chaque FREQ reste à 1 par défaut.'
    ],
    astucePro: 'Pour désactiver la colonne FREQ : refais la même procédure et choisis 2 (OFF).',
    motsClesRecherche: ['freq', 'frequence', 'coefficient', 'effectif', 'moyenne ponderee', 'statistiques', 'colonne'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- COMBINAISONS nCr ET FACTORIELLE ---
  {
    id: 'denombrement-ncr-factorielle',
    nom: 'Calculer les combinaisons (nCr) et factorielles (n!)',
    slug: 'combinaisons-ncr-factorielle-denombrement',
    categorie: 'Statistiques & Probabilités',
    sousCategorie: 'Probabilités & Dénombrement',
    description: 'Calcule les coefficients binomiaux (k parmi n) et les factorielles indispensables en probabilités.',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Loi binomiale, dénombrement, triangle de Pascal, tirages simultanés.',
    programmeS2Theme: 'probabilites_stats',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['n', 'SHIFT', '÷ (nCr)', 'k', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Saisir le nombre total d\'éléments n',
        instruction: 'Tape la valeur de n (par exemple 5).',
        keys: [{ keyLabel: '5', note: 'n=5' }],
        lcdDisplay: {
          line1: '5',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'En notation française, on note (k parmi n). Sur la Casio, la syntaxe est n C k.'
      },
      {
        stepNumber: 2,
        title: 'Appuyer sur SHIFT puis ÷ (nCr)',
        instruction: 'Fais SHIFT puis appuie sur la touche de division ÷ où est inscrit nCr en jaune.',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: '÷', subLabel: 'nCr' }],
        lcdDisplay: {
          line1: '5C',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Le symbole C apparaît sur l\'écran.'
      },
      {
        stepNumber: 3,
        title: 'Entrer le nombre d\'éléments choisis k',
        instruction: 'Tape k (par exemple 2) puis appuie sur =.',
        keys: [{ keyLabel: '2', note: 'k=2' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: '5C2',
          line2: '10',
          indicators: ['D', 'Math']
        },
        explanation: 'Le résultat est 10. Il y a 10 manières de choisir 2 éléments parmi 5.'
      }
    ],
    exempleConcret: {
      enonce: 'Dans une classe de 20 élèves, combien de groupes de 3 délégués peut-on former ?',
      action: 'Calculer (3 parmi 20), soit 20 C 3.',
      touchesDetaillees: [
        { keyLabel: '2' },
        { keyLabel: '0' },
        { keyLabel: 'SHIFT' },
        { keyLabel: '÷' },
        { keyLabel: '3' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '1140',
      interpretationScolaire: '(3 parmi 20) = 20! / (3! × 17!) = (20 × 19 × 18) / 6 = 1140.'
    },
    aRetenir: 'Toujours taper le grand nombre n d\'abord, puis SHIFT ÷, puis le petit nombre k.',
    erreursFrequentes: [
      'Inverser n et k : taper 3 C 20 produira une erreur mathématique (Math ERROR), car k ne peut pas dépasser n.',
      'Pour la factorielle n! : tape le nombre puis [SHIFT] + [x⁻¹] (qui porte le ! jaune).'
    ],
    astucePro: 'Pour les arrangements (ordre important) : utilise [SHIFT] + [×] (nPr) au lieu de nCr.',
    motsClesRecherche: ['combinaison', 'ncr', 'k parmi n', 'factorielle', 'probabilites', 'loi binomiale', 'denombrement', 'npr', 'arrangements'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- RÉSOLUTION D'ÉQUATIONS AVEC SOLVE ---
  {
    id: 'solveur-numerique-solve',
    nom: 'Résoudre n\'importe quelle équation avec SOLVE',
    slug: 'resoudre-equation-quelconque-solve',
    categorie: 'Équations & Systèmes',
    sousCategorie: 'Résolution numérique',
    description: 'Trouve par méthode de Newton la solution numérique de n\'importe quelle égalité f(x) = g(x).',
    niveau: 'avance',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Trouver un point d\'intersection de courbes ou la solution d\'une équation non polynomiale.',
    programmeS2Theme: 'second_degre',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['Saisie équation avec ALPHA CALC (=)', 'SHIFT', 'CALC (SOLVE)', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Saisir l\'équation avec le symbole égal rouge',
        instruction: 'En mode normal (MODE 1), écris ton équation. Pour le signe =, utilise ALPHA puis CALC (pas la touche = en bas !).',
        keys: [
          { keyLabel: 'ALPHA', modifier: 'ALPHA' },
          { keyLabel: ')', subLabel: 'X' },
          { keyLabel: 'x²' },
          { keyLabel: '-' },
          { keyLabel: '5' },
          { keyLabel: 'ALPHA', modifier: 'ALPHA' },
          { keyLabel: 'CALC', subLabel: '=' },
          { keyLabel: '0' }
        ],
        lcdDisplay: {
          line1: 'X²-5=0',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'ALPHA + CALC insère le signe d\'égalité mathématique de l\'équation.'
      },
      {
        stepNumber: 2,
        title: 'Lancer la commande SOLVE',
        instruction: 'Fais SHIFT puis appuie sur la touche CALC (SOLVE).',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'CALC', subLabel: 'SOLVE' }],
        lcdDisplay: {
          line1: 'X²-5=0',
          line2: 'Solve for X',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice demande un point de départ pour la recherche par approximations de Newton.'
      },
      {
        stepNumber: 3,
        title: 'Valider avec = pour calculer',
        instruction: 'Appuie sur la touche = du bas pour lancer l\'algorithme de résolution.',
        keys: [{ keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'X=2.236067977',
          line2: 'L-R=0',
          indicators: ['D', 'Math']
        },
        explanation: 'X donne la solution approchée (ici √5 ≈ 2.236). L-R=0 indique que le membre de gauche moins celui de droite vaut 0 (précision parfaite).'
      }
    ],
    exempleConcret: {
      enonce: 'Résoudre numériquement l\'équation : 3x - cos(x) = 0 (en radians).',
      action: 'SHIFT MODE 4 (Radian) → taper 3X - cos(X) = 0 avec ALPHA CALC → SHIFT CALC → =.',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' }, { keyLabel: 'MODE' }, { keyLabel: '4' },
        { keyLabel: '3' }, { keyLabel: 'ALPHA' }, { keyLabel: ')' },
        { keyLabel: '-' },
        { keyLabel: 'cos' }, { keyLabel: 'ALPHA' }, { keyLabel: ')' }, { keyLabel: ')' },
        { keyLabel: 'ALPHA' }, { keyLabel: 'CALC' }, { keyLabel: '0' },
        { keyLabel: 'SHIFT' }, { keyLabel: 'CALC' },
        { keyLabel: '=' }
      ],
      resultatAffiche: 'X = 0.3167508288 ; L-R = 0',
      interpretationScolaire: 'Cette équation n\'a pas de solution algébrique simple : le solveur numérique fournit la solution approchée instantanément.'
    },
    aRetenir: 'SHIFT + CALC (SOLVE) résout n\'importe quelle égalité, même sans passer par le mode EQN.',
    erreursFrequentes: [
      'Appuyer sur la touche = du bas au lieu de SHIFT CALC : cela donnera Syntax ERROR.',
      'Si l\'équation a plusieurs solutions (comme x² - 5 = 0), SOLVE ne trouve que la solution la plus proche de la valeur initiale de X.'
    ],
    astucePro: 'Pour trouver l\'autre solution (la racine négative -√5) : quand la calculatrice demande "Solve for X", tape -5 puis =, elle cherchera du côté négatif et donnera -2.236 !',
    motsClesRecherche: ['solve', 'solveur', 'newton', 'equation', 'alpha calc', 'l-r', 'inconnue', 'resolution numerique'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- SYSTÈMES LINÉAIRES 2x2 ---
  {
    id: 'systeme-lineaire-2x2',
    nom: 'Résoudre un système linéaire (2 équations, 2 inconnues)',
    slug: 'resoudre-systeme-lineaire-2-inconnues',
    categorie: 'Équations & Systèmes',
    sousCategorie: 'Systèmes linéaires',
    description: 'Résout en quelques secondes un système de type anX + bnY = cn et donne les valeurs de X et Y.',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Intersection de deux droites dans le plan, recherche de coefficients a et b d\'une fonction affine ou quadratique.',
    programmeS2Theme: 'geometrie_vecteurs',
    modeCasio: 'EQN (MODE 5)',
    modeCode: 5,
    touchesRapides: ['MODE', '5', '1', 'Coefficients a1, b1, c1, a2, b2, c2', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Ouvrir le mode EQN et choisir 1',
        instruction: 'Appuie sur MODE, puis 5 (EQN), puis choisis 1 (anX + bnY = cn).',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '5', note: 'EQN' }, { keyLabel: '1', note: '2 inconnues' }],
        lcdDisplay: {
          line1: '      a       b       c',
          line2: '1     0       0       0',
          indicators: ['D', 'Math']
        },
        explanation: 'Une grille matricielle à 2 lignes apparaît pour les 2 équations.'
      },
      {
        stepNumber: 2,
        title: 'Entrer les coefficients de la première équation',
        instruction: 'Tape a₁ puis =, b₁ puis =, c₁ puis =. Le curseur passe automatiquement à la ligne 2.',
        keys: [{ keyLabel: '2' }, { keyLabel: '=' }, { keyLabel: '3' }, { keyLabel: '=' }, { keyLabel: '8' }, { keyLabel: '=' }],
        lcdDisplay: {
          line1: '      a       b       c',
          line2: '2     0       0       0',
          indicators: ['D', 'Math']
        },
        explanation: 'Exemple pour la première équation : 2X + 3Y = 8.'
      },
      {
        stepNumber: 3,
        title: 'Entrer les coefficients de la seconde équation',
        instruction: 'Tape a₂ puis =, b₂ puis =, c₂ puis =.',
        keys: [{ keyLabel: '5' }, { keyLabel: '=' }, { keyLabel: '(-)' }, { keyLabel: '1' }, { keyLabel: '=' }, { keyLabel: '3' }, { keyLabel: '=' }],
        lcdDisplay: {
          line1: '      a       b       c',
          line2: '2     5      -1       3',
          indicators: ['D', 'Math']
        },
        explanation: 'Exemple pour la seconde équation : 5X - Y = 3.'
      },
      {
        stepNumber: 4,
        title: 'Lire les valeurs de X et Y',
        instruction: 'Appuie sur = : la valeur de X s\'affiche. Appuie encore sur = : la valeur de Y s\'affiche.',
        keys: [{ keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'X=',
          line2: '1',
          indicators: ['D', 'Math']
        },
        explanation: 'X = 1, puis en appuyant sur ▼ ou = : Y = 2.'
      }
    ],
    exempleConcret: {
      enonce: 'Trouver le point d\'intersection des droites (d₁) : 2x + 3y = 8 et (d₂) : 5x - y = 3.',
      action: 'MODE 5 1 → entrer 2, 3, 8 puis 5, -1, 3.',
      touchesDetaillees: [
        { keyLabel: 'MODE' }, { keyLabel: '5' }, { keyLabel: '1' },
        { keyLabel: '2' }, { keyLabel: '=' }, { keyLabel: '3' }, { keyLabel: '=' }, { keyLabel: '8' }, { keyLabel: '=' },
        { keyLabel: '5' }, { keyLabel: '=' }, { keyLabel: '(-)' }, { keyLabel: '1' }, { keyLabel: '=' }, { keyLabel: '3' }, { keyLabel: '=' },
        { keyLabel: '=' }
      ],
      resultatAffiche: 'X = 1  puis  Y = 2',
      interpretationScolaire: 'Les deux droites se coupent au point de coordonnées (1 ; 2).'
    },
    aRetenir: 'Assure-toi que les équations sont bien sous la forme standard ax + by = c (avec la constante à DROITE du signe égal !).',
    erreursFrequentes: [
      'Si ton équation est 2x + 3y - 8 = 0, il faut IMPÉRATIVEMENT entrer c = 8 (passer le terme constant à droite) ! Sinon le signe est faux.',
      'Si le système n\'a pas de solution unique (droites parallèles), la calculatrice affiche "No Solution" ou "Infinite Sol".'
    ],
    astucePro: 'Pour un système à 3 inconnues (X, Y, Z), utilise MODE 5 2 ! Idéal en géométrie dans l\'espace.',
    motsClesRecherche: ['systeme', 'lineaire', '2 inconnues', 'droites', 'intersection', 'x et y', 'eqn 1', 'gauss'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- PRODUIT SCALAIRE DE VECTEURS ---
  {
    id: 'produit-scalaire-vector',
    nom: 'Calculer le produit scalaire de deux vecteurs',
    slug: 'produit-scalaire-vecteurs-mode-vector',
    categorie: 'Trigonométrie & Géométrie',
    sousCategorie: 'Vecteurs',
    description: 'Définit deux vecteurs u et v et calcule leur produit scalaire u · v ou leur norme instantanément.',
    niveau: 'avance',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Chapitre Produit Scalaire : orthogonalité, calcul d\'angles, travail d\'une force en physique.',
    programmeS2Theme: 'geometrie_vecteurs',
    modeCasio: 'VECTOR (MODE 7)',
    modeCode: 7,
    touchesRapides: ['MODE', '7', 'Définir VctA et VctB', 'AC', 'SHIFT 5', 'VctA Dot VctB', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Entrer dans le mode VECTOR',
        instruction: 'Appuie sur MODE puis choisis 7 (VECTOR).',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '7', note: 'VECTOR' }],
        lcdDisplay: {
          line1: '1: VctA        2: VctB',
          line2: '3: VctC',
          indicators: ['D', 'Math']
        },
        explanation: 'Choisis le vecteur à définir : appuie sur 1 pour VctA.'
      },
      {
        stepNumber: 2,
        title: 'Choisir la dimension (2D ou 3D)',
        instruction: 'Appuie sur 2 pour un vecteur du plan (dimension 2), ou 1 pour l\'espace (dimension 3).',
        keys: [{ keyLabel: '2', note: 'Dimension 2' }],
        lcdDisplay: {
          line1: 'VctA(2)',
          line2: '      0       0',
          indicators: ['VCT', 'Math']
        },
        explanation: 'Saisis les coordonnées de VctA : x puis =, y puis =.'
      },
      {
        stepNumber: 3,
        title: 'Définir le second vecteur VctB',
        instruction: 'Fais SHIFT puis 5 (VECTOR), choisis 1 (Dim), puis 2 (VctB), dimension 2, et entre ses coordonnées.',
        keys: [
          { keyLabel: 'SHIFT', modifier: 'SHIFT' },
          { keyLabel: '5', subLabel: 'VECTOR' },
          { keyLabel: '1', note: 'Dim' },
          { keyLabel: '2', note: 'VctB' },
          { keyLabel: '2', note: '2D' }
        ],
        lcdDisplay: {
          line1: 'VctB(2)',
          line2: '      0       0',
          indicators: ['VCT', 'Math']
        },
        explanation: 'Après avoir entré les coordonnées de VctB, appuie sur AC.'
      },
      {
        stepNumber: 4,
        title: 'Effectuer le produit scalaire (Dot)',
        instruction: 'Fais SHIFT 5 → 3 (VctA), puis SHIFT 5 → 7 (Dot), puis SHIFT 5 → 4 (VctB), puis =.',
        keys: [
          { keyLabel: 'SHIFT' }, { keyLabel: '5' }, { keyLabel: '3', note: 'VctA' },
          { keyLabel: 'SHIFT' }, { keyLabel: '5' }, { keyLabel: '7', note: 'Dot (•)' },
          { keyLabel: 'SHIFT' }, { keyLabel: '5' }, { keyLabel: '4', note: 'VctB' },
          { keyLabel: '=', isEnter: true }
        ],
        lcdDisplay: {
          line1: 'VctA•VctB',
          line2: '14',
          indicators: ['VCT', 'Math']
        },
        explanation: 'Le point central • représente le produit scalaire. Le résultat est un nombre réel.'
      }
    ],
    exempleConcret: {
      enonce: 'Calculer le produit scalaire u · v avec u(3 ; -2) et v(4 ; -1).',
      action: 'Définir VctA=(3, -2) et VctB=(4, -1), puis taper VctA • VctB =.',
      touchesDetaillees: [
        { keyLabel: 'MODE' }, { keyLabel: '7' }, { keyLabel: '1' }, { keyLabel: '2' },
        { keyLabel: '3' }, { keyLabel: '=' }, { keyLabel: '(-)' }, { keyLabel: '2' }, { keyLabel: '=' },
        { keyLabel: 'AC' },
        { keyLabel: 'SHIFT' }, { keyLabel: '5' }, { keyLabel: '1' }, { keyLabel: '2' }, { keyLabel: '2' },
        { keyLabel: '4' }, { keyLabel: '=' }, { keyLabel: '(-)' }, { keyLabel: '1' }, { keyLabel: '=' },
        { keyLabel: 'AC' },
        { keyLabel: 'SHIFT' }, { keyLabel: '5' }, { keyLabel: '3' },
        { keyLabel: 'SHIFT' }, { keyLabel: '5' }, { keyLabel: '7' },
        { keyLabel: 'SHIFT' }, { keyLabel: '5' }, { keyLabel: '4' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '14',
      interpretationScolaire: 'u · v = xx\' + yy\' = 3(4) + (-2)(-1) = 12 + 2 = 14.'
    },
    aRetenir: 'Le produit scalaire se fait via l\'opérateur "Dot" (touche 7 du menu SHIFT 5), et non avec la touche de multiplication × (qui fait le produit vectoriel 3D).',
    erreursFrequentes: [
      'Utiliser la touche × classique au lieu de Dot : sur des vecteurs 2D, cela provoque une erreur.',
      'Pour calculer la norme d\'un vecteur ||u|| : tape [SHIFT] + [hyp] (Abs) suivi de VctA !'
    ],
    astucePro: 'Si VctA • VctB = 0, tes deux vecteurs sont rigoureusement orthogonaux ! Un moyen ultra-rapide de vérifier l\'orthogonalité en devoir.',
    motsClesRecherche: ['produit scalaire', 'vecteur', 'vector', 'dot', 'orthogonalite', 'norme', 'angle', 'vcta'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- INTÉGRALE NUMÉRIQUE DÉFINIE ---
  {
    id: 'integrale-numerique-gauss',
    nom: 'Calculer une intégrale définie ∫ f(x) dx',
    slug: 'calcul-integrale-numerique-definie',
    categorie: 'Fonctions & Analyse',
    sousCategorie: 'Intégration',
    description: 'Calcule l\'aire sous la courbe (intégrale numérique de a à b) avec la méthode de Gauss-Kronrod.',
    niveau: 'intermediaire',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Calcul d\'aires, primitives, valeur moyenne d\'une fonction continue.',
    programmeS2Theme: 'fonctions',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['∫dx', 'f(X)', '►', 'borne a', '►', 'borne b', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Appuyer sur la touche intégrale [ ∫dx ]',
        instruction: 'En mode normal (MODE 1), appuie directement sur la touche dédiée ∫dx (sous la touche CALC).',
        keys: [{ keyLabel: '∫dx', note: 'Intégrale' }],
        lcdDisplay: {
          line1: '∫( | )dx',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Le symbole d\'intégrale apparaît avec les cases pour la fonction et les bornes.'
      },
      {
        stepNumber: 2,
        title: 'Saisir la fonction f(X)',
        instruction: 'Tape la fonction en utilisant ALPHA + ) pour X, par exemple 2X + 1.',
        keys: [
          { keyLabel: '2' },
          { keyLabel: 'ALPHA', modifier: 'ALPHA' },
          { keyLabel: ')', subLabel: 'X' },
          { keyLabel: '+' },
          { keyLabel: '1' }
        ],
        lcdDisplay: {
          line1: '∫(2X+1)dx',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'La variable d\'intégration doit toujours être X.'
      },
      {
        stepNumber: 3,
        title: 'Entrer les bornes inférieure et supérieure',
        instruction: 'Appuie sur ► pour entrer la borne inférieure a (ex: 1), puis sur ► pour la borne supérieure b (ex: 3).',
        keys: [{ keyLabel: '►' }, { keyLabel: '1', note: 'Borne bas' }, { keyLabel: '►' }, { keyLabel: '3', note: 'Borne haut' }],
        lcdDisplay: {
          line1: '∫₁³(2X+1)dx',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'L\'affichage respecte la notation mathématique classique de ton cours.'
      },
      {
        stepNumber: 4,
        title: 'Valider avec =',
        instruction: 'Appuie sur =. La calculatrice peut mettre une à deux secondes pour intégrer numériquement.',
        keys: [{ keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: '∫₁³(2X+1)dx',
          line2: '10',
          indicators: ['D', 'Math']
        },
        explanation: 'L\'aire sous la droite entre x=1 et x=3 vaut exactement 10.'
      }
    ],
    exempleConcret: {
      enonce: 'Calculer l\'intégrale de x² entre 0 et 3.',
      action: 'Taper ∫(X²) de 0 à 3 puis =.',
      touchesDetaillees: [
        { keyLabel: '∫dx' },
        { keyLabel: 'ALPHA' }, { keyLabel: ')' }, { keyLabel: 'x²' },
        { keyLabel: '►' }, { keyLabel: '0' },
        { keyLabel: '►' }, { keyLabel: '3' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '9',
      interpretationScolaire: 'Une primitive de x² est F(x) = x³/3. F(3) - F(0) = 27/3 - 0 = 9. Parfaitement cohérent !'
    },
    aRetenir: 'La touche ∫dx permet de vérifier n\'importe quel calcul d\'aire ou de primitive défini en devoir.',
    erreursFrequentes: [
      'Attention : la borne inférieure doit être saisie dans la case du bas, la borne supérieure dans la case du haut.',
      'Si la fonction oscille rapidement ou tend vers l\'infini sur la borne, le calcul peut être long ou imprécis.'
    ],
    astucePro: 'Pour une intégrale avec des sinus ou cosinus, passe impérativement en Radians (SHIFT MODE 4) avant de calculer.',
    motsClesRecherche: ['integrale', 'primitive', 'aire', 'bornes', 'integrer', 'gauss kronrod', 'aire sous courbe'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- NOMBRES COMPLEXES & SOLUTIONS DANS EQN ---
  {
    id: 'nombres-complexes-cmplx',
    nom: 'Nombres complexes : Module, Argument et Forme polaire',
    slug: 'nombres-complexes-module-argument-forme-polaire',
    categorie: 'Algèbre & Matrices',
    sousCategorie: 'Forme cartésienne et polaire',
    description: 'Calcule le module |z|, l\'argument arg(z), le conjugué et convertit entre a+bi et r∠θ.',
    niveau: 'intermediaire',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Équations du second degré à discriminant négatif Δ < 0, géométrie des complexes.',
    programmeS2Theme: 'complexes',
    modeCasio: 'CMPLX (MODE 2)',
    modeCode: 2,
    touchesRapides: ['MODE', '2', 'Saisie a + b i (avec ENG)', 'SHIFT 2 (menu CMPLX)'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Activer le mode CMPLX',
        instruction: 'Appuie sur MODE puis choisis 2 (CMPLX).',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '2', note: 'CMPLX' }],
        lcdDisplay: {
          line1: '0',
          line2: '',
          indicators: ['CMPLX', 'D', 'Math']
        },
        explanation: 'L\'indicateur CMPLX s\'allume en haut de l\'écran. La touche ENG produit désormais l\'unité imaginaire i.'
      },
      {
        stepNumber: 2,
        title: 'Saisir un nombre complexe z',
        instruction: 'Tape par exemple 1 + √3 i. Pour taper i, appuie simplement sur la touche ENG.',
        keys: [
          { keyLabel: '1' },
          { keyLabel: '+' },
          { keyLabel: '√' },
          { keyLabel: '3' },
          { keyLabel: '►' },
          { keyLabel: 'ENG', subLabel: 'i' },
          { keyLabel: '=' }
        ],
        lcdDisplay: {
          line1: '1+√3i',
          line2: '1+√3i',
          indicators: ['CMPLX', 'D', 'Math']
        },
        explanation: 'En mode CMPLX, la touche ENG écrit le petit i imaginaire (tel que i² = -1).'
      },
      {
        stepNumber: 3,
        title: 'Calculer le module |z|',
        instruction: 'Fais SHIFT puis hyp (Abs) pour obtenir la valeur absolue / module, puis tape ton complexe.',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'hyp', subLabel: 'Abs' }, { keyLabel: 'Ans' }, { keyLabel: '=' }],
        lcdDisplay: {
          line1: '|Ans|',
          line2: '2',
          indicators: ['CMPLX', 'D', 'Math']
        },
        explanation: '|1 + i√3| = √(1² + (√3)²) = √(1+3) = 2.'
      },
      {
        stepNumber: 4,
        title: 'Obtenir la forme polaire (r∠θ)',
        instruction: 'Fais SHIFT puis 2 (CMPLX), puis choisis 3 (►r∠θ) et appuie sur =.',
        keys: [{ keyLabel: 'SHIFT' }, { keyLabel: '2', subLabel: 'CMPLX' }, { keyLabel: '3', note: '►r∠θ' }, { keyLabel: '=' }],
        lcdDisplay: {
          line1: 'Ans►r∠θ',
          line2: '2∠60',
          indicators: ['CMPLX', 'D', 'Math']
        },
        explanation: 'Le module est r = 2 et l\'argument est θ = 60° (ou π/3 si tu es en radians).'
      }
    ],
    exempleConcret: {
      enonce: 'Déterminer le module et l\'argument de z = 1 + i en radians.',
      action: 'SHIFT MODE 4 (Rad) → MODE 2 → 1 + i → SHIFT 2 3 =.',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' }, { keyLabel: 'MODE' }, { keyLabel: '4' },
        { keyLabel: 'MODE' }, { keyLabel: '2' },
        { keyLabel: '1' }, { keyLabel: '+' }, { keyLabel: 'ENG' },
        { keyLabel: 'SHIFT' }, { keyLabel: '2' }, { keyLabel: '3' }, { keyLabel: '=' }
      ],
      resultatAffiche: '√2 ∠ 1/4 π',
      interpretationScolaire: '|z| = √2 et arg(z) = π/4 [2π]. Tout est calculé sous forme exacte naturelle !'
    },
    aRetenir: 'En mode CMPLX, la touche ENG tape i. SHIFT + 2 donne accès au conjugué (Conjg), à l\'argument (arg) et à la conversion polaire.',
    erreursFrequentes: [
      'Taper ENG en mode 1 (COMP) : cela ne fera rien ou produira une erreur, il faut obligatoirement être en MODE 2 (CMPLX).',
      'Attention au réglage d\'angle Degrés / Radians pour la valeur de l\'argument.'
    ],
    astucePro: 'Dans le mode EQN (MODE 5 3), si Δ < 0, la calculatrice donne automatiquement les racines complexes avec i ! Tu n\'as même pas besoin de passer en mode 2.',
    motsClesRecherche: ['complexes', 'imaginaire', 'i', 'module', 'argument', 'forme polaire', 'conjugue', 'cmplx', 'eng'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- MATRICES : DÉTERMINANT ET INVERSE ---
  {
    id: 'matrices-determinant-inverse',
    nom: 'Matrices : Déterminant et Matrice inverse A⁻¹',
    slug: 'matrices-determinant-inverse-multiplication',
    categorie: 'Algèbre & Matrices',
    sousCategorie: 'Calcul matriciel',
    description: 'Définit une matrice (jusqu\'à 3x3), calcule son déterminant det(A), sa transposée et son inverse A⁻¹.',
    niveau: 'avance',
    pertinenceS2: 'utile',
    contexteScolaire: 'Algèbre linéaire, résolution matricielle de systèmes AX = B, transformations du plan.',
    programmeS2Theme: 'geometrie_vecteurs',
    modeCasio: 'MATRIX (MODE 6)',
    modeCode: 6,
    touchesRapides: ['MODE', '6', '1 (MatA)', 'Taille', 'Valeurs', 'AC', 'SHIFT 4', 'Opérations'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Entrer dans le mode MATRIX',
        instruction: 'Appuie sur MODE puis choisis 6 (MATRIX).',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '6', note: 'MATRIX' }],
        lcdDisplay: {
          line1: '1: MatA        2: MatB',
          line2: '3: MatC',
          indicators: ['D', 'Math']
        },
        explanation: 'Choisis 1 pour définir la matrice MatA.'
      },
      {
        stepNumber: 2,
        title: 'Choisir les dimensions de la matrice',
        instruction: 'Choisis la dimension : par exemple 5 pour une matrice carrée 2x2.',
        keys: [{ keyLabel: '5', note: '2 × 2' }],
        lcdDisplay: {
          line1: 'MatA(2,2)',
          line2: '      0       0',
          indicators: ['MAT', 'Math']
        },
        explanation: 'Remplis les 4 coefficients en validant chaque nombre avec =.'
      },
      {
        stepNumber: 3,
        title: 'Valider et quitter l\'éditeur avec AC',
        instruction: 'Une fois les valeurs saisies, appuie sur AC. La matrice MatA est sauvegardée.',
        keys: [{ keyLabel: 'AC', note: 'Sauvegarder' }],
        lcdDisplay: {
          line1: '0',
          line2: '',
          indicators: ['MAT', 'Math']
        },
        explanation: 'Comme pour les statistiques, AC permet de passer à la phase de calcul.'
      },
      {
        stepNumber: 4,
        title: 'Calculer le déterminant det(MatA)',
        instruction: 'Fais SHIFT 4 (MATRIX) → 7 (det), puis SHIFT 4 → 3 (MatA), puis =.',
        keys: [
          { keyLabel: 'SHIFT' }, { keyLabel: '4', subLabel: 'MATRIX' }, { keyLabel: '7', note: 'det' },
          { keyLabel: 'SHIFT' }, { keyLabel: '4' }, { keyLabel: '3', note: 'MatA' },
          { keyLabel: '=', isEnter: true }
        ],
        lcdDisplay: {
          line1: 'det(MatA)',
          line2: '1',
          indicators: ['MAT', 'Math']
        },
        explanation: 'Si det(A) ≠ 0, la matrice est inversible.'
      },
      {
        stepNumber: 5,
        title: 'Calculer l\'inverse MatA⁻¹',
        instruction: 'Fais SHIFT 4 → 3 (MatA), appuie sur la touche x⁻¹ (sous la touche MODE), puis =.',
        keys: [{ keyLabel: 'SHIFT' }, { keyLabel: '4' }, { keyLabel: '3' }, { keyLabel: 'x⁻¹', note: 'Inverse' }, { keyLabel: '=' }],
        lcdDisplay: {
          line1: 'MatAns',
          line2: 'Matrice inverse',
          indicators: ['MAT', 'Math']
        },
        explanation: 'La matrice inverse s\'affiche sous forme de grille.'
      }
    ],
    exempleConcret: {
      enonce: 'Inverser la matrice 2x2 : A = [[3, 1], [5, 2]].',
      action: 'Saisir MatA dans MODE 6 1 5, taper 3, 1, 5, 2 puis AC → MatA x⁻¹ =.',
      touchesDetaillees: [
        { keyLabel: 'MODE' }, { keyLabel: '6' }, { keyLabel: '1' }, { keyLabel: '5' },
        { keyLabel: '3' }, { keyLabel: '=' }, { keyLabel: '1' }, { keyLabel: '=' },
        { keyLabel: '5' }, { keyLabel: '=' }, { keyLabel: '2' }, { keyLabel: '=' },
        { keyLabel: 'AC' },
        { keyLabel: 'SHIFT' }, { keyLabel: '4' }, { keyLabel: '3' },
        { keyLabel: 'x⁻¹' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '[[2, -1], [-5, 3]]',
      interpretationScolaire: 'det(A) = 3(2) - 1(5) = 1. L\'inverse est 1/det(A) × [[d, -b], [-c, a]] = [[2, -1], [-5, 3]].'
    },
    aRetenir: 'SHIFT + 4 ouvre le menu MATRIX pour rappeler MatA, MatB, det, et Trn (transposée).',
    erreursFrequentes: [
      'Si det(A) = 0, demander l\'inverse provoquera une erreur Math ERROR car la matrice n\'est pas inversible.',
      'Pour multiplier deux matrices : tape MatA × MatB simplement.'
    ],
    astucePro: 'Pour élever une matrice au carré : MatA x² calcule directement le produit matriciel A × A !',
    motsClesRecherche: ['matrice', 'determinant', 'inverse', 'det', 'transp', 'systeme matriciel', 'mode 6', 'matrix'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- ÉVALUATION RAPIDE AVEC CALC ---
  {
    id: 'evaluation-rapide-calc',
    nom: 'Évaluer une formule rapidement avec la touche CALC',
    slug: 'evaluer-formule-variable-touche-calc',
    categorie: 'Calcul Fondamental',
    sousCategorie: 'Variables & Formules',
    description: 'Saisis une expression avec X ou Y et calcule instantanément sa valeur pour différentes valeurs numériques.',
    niveau: 'debutant',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Calculer successivement f(1), f(2), f(-3) pour vérifier les points d\'une fonction sans réécrire la formule.',
    programmeS2Theme: 'fonctions',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['Saisie formule avec X', 'CALC', 'valeur X', '=', 'valeur suivante', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Écrire l\'expression avec la lettre X',
        instruction: 'En mode normal (MODE 1), écris ta formule avec ALPHA + ) pour X, par exemple 3X² - 5X + 4.',
        keys: [
          { keyLabel: '3' },
          { keyLabel: 'ALPHA', modifier: 'ALPHA' },
          { keyLabel: ')', subLabel: 'X' },
          { keyLabel: 'x²' },
          { keyLabel: '-' },
          { keyLabel: '5' },
          { keyLabel: 'ALPHA', modifier: 'ALPHA' },
          { keyLabel: ')', subLabel: 'X' },
          { keyLabel: '+' },
          { keyLabel: '4' }
        ],
        lcdDisplay: {
          line1: '3X²-5X+4',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Ne valide PAS avec la touche = en bas.'
      },
      {
        stepNumber: 2,
        title: 'Appuyer sur la touche CALC',
        instruction: 'Appuie sur la touche CALC (située juste sous la touche SHIFT).',
        keys: [{ keyLabel: 'CALC', note: 'Calculer' }],
        lcdDisplay: {
          line1: '3X²-5X+4',
          line2: 'X?',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice te demande quelle valeur donner à la variable X.'
      },
      {
        stepNumber: 3,
        title: 'Entrer la valeur désirée et valider',
        instruction: 'Tape par exemple 2 puis appuie sur =.',
        keys: [{ keyLabel: '2', note: 'X=2' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: '3X²-5X+4',
          line2: '6',
          indicators: ['D', 'Math']
        },
        explanation: 'Pour X = 2, le résultat est 3(4) - 10 + 4 = 6.'
      },
      {
        stepNumber: 4,
        title: 'Calculer pour une autre valeur immédiatement',
        instruction: 'Appuie simplement sur = : la calculatrice redemande X?. Tape la nouvelle valeur (ex: -1) puis = !',
        keys: [{ keyLabel: '=' }, { keyLabel: '(-)' }, { keyLabel: '1' }, { keyLabel: '=' }],
        lcdDisplay: {
          line1: '3X²-5X+4',
          line2: '12',
          indicators: ['D', 'Math']
        },
        explanation: 'Inutile de retaper la formule. Tu peux tester autant de valeurs que tu veux.'
      }
    ],
    exempleConcret: {
      enonce: 'Calculer l\'image de -3, 0, 1/2 et 5 par f(x) = (2x - 1) / (x + 3).',
      action: 'Taper (2X-1)/(X+3) puis CALC → tester les valeurs.',
      touchesDetaillees: [
        { keyLabel: 'ab/c' },
        { keyLabel: '2' }, { keyLabel: 'ALPHA' }, { keyLabel: ')' }, { keyLabel: '-' }, { keyLabel: '1' },
        { keyLabel: '▼' },
        { keyLabel: 'ALPHA' }, { keyLabel: ')' }, { keyLabel: '+' }, { keyLabel: '3' },
        { keyLabel: 'CALC' },
        { keyLabel: '0' }, { keyLabel: '=' }
      ],
      resultatAffiche: 'Pour X = 0 : -1/3 ; Pour X = 5 : 9/8',
      interpretationScolaire: 'Gain de temps colossal par rapport au remplacement manuel sur une feuille ou sur l\'écran.'
    },
    aRetenir: 'La touche CALC évite de réécrire 10 fois la même expression en changeant juste x.',
    erreursFrequentes: [
      'Appuyer sur = en bas avant d\'appuyer sur CALC : cela calcule avec l\'ancienne valeur mémorisée de X.',
      'Si ton expression comporte deux variables (ex: A et B), CALC te demandera successivement la valeur de A puis celle de B.'
    ],
    astucePro: 'Tu peux stocker des résultats intermédiaires dans les mémoires A, B, C, D, X, Y avec [SHIFT] + [RCL] (STO) suivi de la lettre.',
    motsClesRecherche: ['calc', 'evaluer', 'image', 'variable x', 'remplacer', 'calculer f(x)', 'formule'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- 40 CONSTANTES SCIENTIFIQUES PHYSIQUE-CHIMIE ---
  {
    id: 'constantes-scientifiques-physique',
    nom: '40 Constantes scientifiques intégrées (SHIFT 7)',
    slug: 'constantes-scientifiques-physique-chimie-shift-7',
    categorie: 'Constantes & Outils',
    sousCategorie: 'Constantes physiques',
    description: 'Accède directement aux 40 constantes physiques et chimiques fondamentales (c₀, h, G, me, g, NA, etc.).',
    niveau: 'debutant',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Physique-Chimie Première S2 : gravitation, mécanique de Newton, optique, chimie quantitative.',
    programmeS2Theme: 'calcul_general',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['SHIFT', '7 (CONST)', 'Numéro 01 à 40', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Appuyer sur SHIFT puis 7 (CONST)',
        instruction: 'Fais SHIFT puis appuie sur la touche 7 où figure la mention CONST en jaune.',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: '7', subLabel: 'CONST' }],
        lcdDisplay: {
          line1: 'CONST',
          line2: '01~40 ?',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice attend le code à 2 chiffres de la constante désirée.'
      },
      {
        stepNumber: 2,
        title: 'Taper le code à 2 chiffres',
        instruction: 'Par exemple, tape 28 pour c₀ (vitesse de la lumière dans le vide), ou 35 pour g (pesanteur).',
        keys: [{ keyLabel: '2' }, { keyLabel: '8', note: 'c0 (lumière)' }],
        lcdDisplay: {
          line1: 'c₀',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Le symbole physique officiel apparaît sur l\'écran LCD.'
      },
      {
        stepNumber: 3,
        title: 'Afficher sa valeur précise en appuyant sur =',
        instruction: 'Appuie sur = pour voir sa valeur numérique avec la précision maximale du constructeur.',
        keys: [{ keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'c₀',
          line2: '299792458',
          indicators: ['D', 'Math']
        },
        explanation: 'c₀ = 299 792 458 m/s.'
      }
    ],
    exempleConcret: {
      enonce: 'Calculer l\'énergie d\'un photon E = h × c / λ avec λ = 500 nm.',
      action: 'Utiliser CONST 06 (h) et CONST 28 (c₀).',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' }, { keyLabel: '7' }, { keyLabel: '0' }, { keyLabel: '6' },
        { keyLabel: '×' },
        { keyLabel: 'SHIFT' }, { keyLabel: '7' }, { keyLabel: '2' }, { keyLabel: '8' },
        { keyLabel: '÷' },
        { keyLabel: '(' }, { keyLabel: '5' }, { keyLabel: '0' }, { keyLabel: '0' }, { keyLabel: '×10ˣ' }, { keyLabel: '(-)' }, { keyLabel: '9' }, { keyLabel: ')' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '≈ 3.97 × 10⁻¹⁹ J',
      interpretationScolaire: 'Aucun risque de faire une faute de frappe sur la valeur de h = 6.626×10⁻³⁴ ou c = 3.00×10⁸ !'
    },
    aRetenir: 'Codes clés utiles en 1ère S2 : 28 = c₀ (lumière), 35 = g (9.80665 m/s²), 06 = h (Planck), 16 = NA (Avogadro 6.022×10²³), 24 = NA ou e.',
    erreursFrequentes: [
      'Oublier de taper les DEUX chiffres (ex: taper 6 au lieu de 06 pour la constante h).'
    ],
    astucePro: 'La liste complète des 40 constantes est imprimée à l\'intérieur du couvercle coulissant en plastique de ta fx-991ES !',
    motsClesRecherche: ['constantes', 'const', 'shift 7', 'physique', 'vitesse lumiere', 'c0', 'planck', 'pesanteur', 'avogadro', 'gravitation'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- CONVERSIONS D'UNITÉS MÉTRIQUES ---
  {
    id: 'conversions-unites-conv',
    nom: '40 Conversions d\'unités intégrées (SHIFT 8)',
    slug: 'conversions-unites-metriques-shift-8',
    categorie: 'Constantes & Outils',
    sousCategorie: 'Conversions d\'unités',
    description: 'Convertit instantanément km/h ↔ m/s, atmosphères ↔ Pascals, Joules ↔ calories, etc.',
    niveau: 'debutant',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Physique, chimie, mécanique : conversions rapides sans se tromper de facteur multiplicatif.',
    programmeS2Theme: 'calcul_general',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['Valeur', 'SHIFT', '8 (CONV)', 'Numéro 01 à 40', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Taper la valeur à convertir',
        instruction: 'Tape la valeur numérique de départ (par exemple 90 pour 90 km/h).',
        keys: [{ keyLabel: '9' }, { keyLabel: '0' }],
        lcdDisplay: {
          line1: '90',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'La valeur doit être saisie avant d\'appeler la fonction de conversion.'
      },
      {
        stepNumber: 2,
        title: 'Appuyer sur SHIFT puis 8 (CONV)',
        instruction: 'Fais SHIFT puis appuie sur la touche 8 où se trouve la mention CONV en jaune.',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: '8', subLabel: 'CONV' }],
        lcdDisplay: {
          line1: 'CONV',
          line2: '01~40 ?',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice demande le code de conversion.'
      },
      {
        stepNumber: 3,
        title: 'Entrer le numéro de conversion',
        instruction: 'Tape 19 pour la conversion km/h ► m/s (ou 20 pour m/s ► km/h).',
        keys: [{ keyLabel: '1' }, { keyLabel: '9', note: 'km/h ► m/s' }],
        lcdDisplay: {
          line1: '90km/h►m/s',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'La flèche de conversion s\'affiche à l\'écran.'
      },
      {
        stepNumber: 4,
        title: 'Valider avec =',
        instruction: 'Appuie sur = pour obtenir la valeur convertie dans l\'unité cible.',
        keys: [{ keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: '90km/h►m/s',
          line2: '25',
          indicators: ['D', 'Math']
        },
        explanation: '90 km/h équivaut exactement à 25 m/s (division par 3.6).'
      }
    ],
    exempleConcret: {
      enonce: 'Un véhicule roule à 130 km/h. Quelle est sa vitesse en m/s pour calculer l\'énergie cinétique ?',
      action: '130 SHIFT 8 19 =.',
      touchesDetaillees: [
        { keyLabel: '1' }, { keyLabel: '3' }, { keyLabel: '0' },
        { keyLabel: 'SHIFT' }, { keyLabel: '8' },
        { keyLabel: '1' }, { keyLabel: '9' },
        { keyLabel: '=' },
        { keyLabel: 'S<=>D' }
      ],
      resultatAffiche: '325/9 ≈ 36.11 m/s',
      interpretationScolaire: 'Conversion indispensable pour l\'énergie cinétique Ec = 1/2 m v² qui exige v en m/s.'
    },
    aRetenir: 'Codes indispensables : 19 = km/h►m/s, 20 = m/s►km/h, 33 = atm►Pa, 34 = Pa►atm, 39 = J►cal, 40 = cal►J.',
    erreursFrequentes: [
      'Taper SHIFT 8 avant de taper le nombre : il faut taper la valeur D\'ABORD.'
    ],
    astucePro: 'Les 40 conversions sont également répertoriées au dos du couvercle rigide de ta Casio !',
    motsClesRecherche: ['conversion', 'conv', 'shift 8', 'km/h en m/s', 'unites', 'pression', 'atm', 'joules', 'calories', 'temperature'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- RÉINITIALISATION SETUP / MEMORY (CLEAR ALL) ---
  {
    id: 'reinitialisation-complete-clr',
    nom: 'Réinitialiser la calculatrice à zéro (SHIFT 9 CLR)',
    slug: 'reinitialiser-casio-shift-9-clr',
    categorie: 'Constantes & Outils',
    sousCategorie: 'Maintenance',
    description: 'Efface les mémoires, réinitialise les modes ou restaure les réglages d\'usine en cas de comportement bizarre.',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Avant une épreuve ou un examen, ou lorsque la calculatrice affiche des erreurs inexplicables.',
    programmeS2Theme: 'calcul_general',
    modeCasio: 'Tous les modes',
    modeCode: 1,
    touchesRapides: ['SHIFT', '9 (CLR)', '3 (All)', '=', 'AC'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Appeler le menu CLR (Reset)',
        instruction: 'Fais SHIFT puis appuie sur la touche 9 où se trouve la mention CLR en jaune.',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: '9', subLabel: 'CLR' }],
        lcdDisplay: {
          line1: 'Clear?',
          line2: '1: Setup  2: Memory  3: All',
          indicators: ['D', 'Math']
        },
        explanation: '1: Réinitialise le Setup (angles, affichage) ; 2: Vide les mémoires A, B, C... ; 3: Remet tout à zéro.'
      },
      {
        stepNumber: 2,
        title: 'Sélectionner 3 (All)',
        instruction: 'Appuie sur 3 pour choisir de tout réinitialiser proprement.',
        keys: [{ keyLabel: '3', note: 'All' }],
        lcdDisplay: {
          line1: 'Reset All?',
          line2: '[=] : Yes   [AC] : Cancel',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice demande une confirmation.'
      },
      {
        stepNumber: 3,
        title: 'Confirmer avec = puis AC',
        instruction: 'Appuie sur = (Yes) puis sur AC pour terminer.',
        keys: [{ keyLabel: '=', note: 'Confirmer' }, { keyLabel: 'AC', note: 'Terminer' }],
        lcdDisplay: {
          line1: 'Reset All',
          line2: 'Press [AC] key',
          indicators: ['D', 'Math']
        },
        explanation: 'Ta calculatrice est propre, en mode COMP 1, affichage MthIO et en Degrés.'
      }
    ],
    exempleConcret: {
      enonce: 'Ta calculatrice reste bloquée en mode STAT ou affiche des résultats avec des puissances de dix bizarres.',
      action: 'SHIFT 9 3 = AC pour repartir sur une base saine.',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' }, { keyLabel: '9' }, { keyLabel: '3' }, { keyLabel: '=' }, { keyLabel: 'AC' }
      ],
      resultatAffiche: 'Écran vierge, mode COMP, indicateurs D et Math allumés.',
      interpretationScolaire: 'Le réflexe numéro 1 en cas de problème avant un devoir sur table.'
    },
    aRetenir: 'SHIFT 9 3 = AC remet la calculatrice exactement comme le jour où tu l\'as déballée de sa boîte.',
    erreursFrequentes: [
      'Penser qu\'éteindre la calculatrice avec SHIFT AC (OFF) efface les mémoires : la mémoire Casio est persistante, seule la commande CLR la vide.'
    ],
    astucePro: 'Si tu veux seulement effacer tes variables sans changer tes réglages de degrés/radians, choisis 2 (Memory) au lieu de 3 (All).',
    motsClesRecherche: ['reset', 'reinitialiser', 'clear', 'clr', 'shift 9', 'bloquee', 'effacer memoire', 'usine', 'depannage'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- POLYNÔME DU 3ÈME DEGRÉ ---
  {
    id: 'polynome-troisieme-degre',
    nom: 'Résoudre une équation du 3ème degré (ax³ + bx² + cx + d = 0)',
    slug: 'resoudre-equation-troisieme-degre-polynome',
    categorie: 'Équations & Systèmes',
    sousCategorie: 'Polynômes',
    description: 'Trouve les 3 racines réelles ou complexes d\'un polynôme de degré 3 sans factorisation manuelle.',
    niveau: 'intermediaire',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Étude des fonctions cubiques, recherche de racines évidentes et factorisation par (x - x₀).',
    programmeS2Theme: 'second_degre',
    modeCasio: 'EQN (MODE 5)',
    modeCode: 5,
    touchesRapides: ['MODE', '5', '4', 'Coefficients a, b, c, d', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Ouvrir EQN et choisir 4',
        instruction: 'Appuie sur MODE, puis 5 (EQN), puis 4 (aX³ + bX² + cX + d = 0).',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '5' }, { keyLabel: '4', note: 'Degré 3' }],
        lcdDisplay: {
          line1: '      a       b       c',
          line2: '      0       0       0',
          indicators: ['D', 'Math']
        },
        explanation: 'Une ligne de 4 coefficients a, b, c, d s\'affiche.'
      },
      {
        stepNumber: 2,
        title: 'Saisir les 4 coefficients',
        instruction: 'Tape chaque coefficient en validant par =. Exemple pour x³ - 6x² + 11x - 6 = 0.',
        keys: [
          { keyLabel: '1' }, { keyLabel: '=' },
          { keyLabel: '(-)' }, { keyLabel: '6' }, { keyLabel: '=' },
          { keyLabel: '1' }, { keyLabel: '1' }, { keyLabel: '=' },
          { keyLabel: '(-)' }, { keyLabel: '6' }, { keyLabel: '=' }
        ],
        lcdDisplay: {
          line1: '      c       d',
          line2: '     11      -6',
          indicators: ['D', 'Math']
        },
        explanation: 'Utilise la flèche ► ou ◄ pour te relire.'
      },
      {
        stepNumber: 3,
        title: 'Consulter les solutions X₁, X₂ et X₃',
        instruction: 'Appuie sur = : la première racine X₁ s\'affiche. Appuie encore pour X₂ puis X₃.',
        keys: [{ keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'X1=',
          line2: '3',
          indicators: ['D', 'Math']
        },
        explanation: 'Les trois racines sont X₁ = 3, X₂ = 2, X₃ = 1.'
      }
    ],
    exempleConcret: {
      enonce: 'Factoriser le polynôme P(x) = x³ - 6x² + 11x - 6.',
      action: 'MODE 5 4 → entrer 1, -6, 11, -6 → lire les 3 racines.',
      touchesDetaillees: [
        { keyLabel: 'MODE' }, { keyLabel: '5' }, { keyLabel: '4' },
        { keyLabel: '1' }, { keyLabel: '=' },
        { keyLabel: '(-)' }, { keyLabel: '6' }, { keyLabel: '=' },
        { keyLabel: '1' }, { keyLabel: '1' }, { keyLabel: '=' },
        { keyLabel: '(-)' }, { keyLabel: '6' }, { keyLabel: '=' },
        { keyLabel: '=' }
      ],
      resultatAffiche: 'X₁ = 3 ; X₂ = 2 ; X₃ = 1',
      interpretationScolaire: 'Comme les racines sont 1, 2 et 3, le polynôme se factorise immédiatement en (x - 1)(x - 2)(x - 3) !'
    },
    aRetenir: 'MODE 5 4 donne instantanément les racines d\'un polynôme de degré 3 pour vérifier ta factorisation en devoir.',
    erreursFrequentes: [
      'Si le terme en x² ou en x manque, n\'oublie pas d\'entrer 0 pour le coefficient correspondant !'
    ],
    astucePro: 'Si une racine est évidente (ex: 1), la calculatrice te donne aussi les deux autres, évitant la division euclidienne ou l\'identification.',
    motsClesRecherche: ['degre 3', 'troisieme degre', 'cubique', 'x3', 'racine evidente', 'factorisation', 'eqn 4'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- SOMME DISCRÈTE SIGMA (SUITES) ---
  {
    id: 'somme-discrete-sigma-suites',
    nom: 'Calculer la somme de termes d\'une suite (touche Σ)',
    slug: 'somme-discrete-sigma-termes-suites',
    categorie: 'Suites & Récurrence',
    sousCategorie: 'Sommes de suites',
    description: 'Calcule la somme de k=a à b de f(k), indispensable pour vérifier les sommes arithmétiques et géométriques.',
    niveau: 'intermediaire',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Somme des n premiers entiers, somme des termes d\'une suite arithmétique ou géométrique.',
    programmeS2Theme: 'suites',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['SHIFT', 'log (Σ)', 'Formule avec X', '►', 'Borne min', '►', 'Borne max', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Appeler le symbole de sommation Σ',
        instruction: 'Fais SHIFT puis appuie sur la touche log (qui porte le symbole sigma Σ en jaune).',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'log', subLabel: 'Σ' }],
        lcdDisplay: {
          line1: 'Σ( | ,x, )',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Le symbole mathématique officiel de sommation Σ apparaît.'
      },
      {
        stepNumber: 2,
        title: 'Entrer l\'expression générale du terme',
        instruction: 'Écris la formule avec ALPHA + ) pour X, par exemple X² ou 2^X.',
        keys: [{ keyLabel: 'ALPHA', modifier: 'ALPHA' }, { keyLabel: ')', subLabel: 'X' }, { keyLabel: 'x²' }],
        lcdDisplay: {
          line1: 'Σ(X²)',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'X représente l\'indice k qui varie.'
      },
      {
        stepNumber: 3,
        title: 'Entrer les bornes de sommation',
        instruction: 'Appuie sur ► pour entrer la valeur de départ (ex: 1), puis sur ► pour la valeur finale (ex: 10).',
        keys: [{ keyLabel: '►' }, { keyLabel: '1', note: 'Début' }, { keyLabel: '►' }, { keyLabel: '1' }, { keyLabel: '0', note: 'Fin' }],
        lcdDisplay: {
          line1: 'Σ₁¹⁰(X²)',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'La sommation ira de X = 1 jusqu\'à X = 10.'
      },
      {
        stepNumber: 4,
        title: 'Valider avec =',
        instruction: 'Appuie sur = pour calculer la somme exacte.',
        keys: [{ keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'Σ₁¹⁰(X²)',
          line2: '385',
          indicators: ['D', 'Math']
        },
        explanation: '1² + 2² + ... + 10² = 385.'
      }
    ],
    exempleConcret: {
      enonce: 'Calculer S = 1 + 2 + 3 + ... + 100.',
      action: 'Somme de X pour X allant de 1 à 100.',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' }, { keyLabel: 'log' },
        { keyLabel: 'ALPHA' }, { keyLabel: ')' },
        { keyLabel: '►' }, { keyLabel: '1' },
        { keyLabel: '►' }, { keyLabel: '1' }, { keyLabel: '0' }, { keyLabel: '0' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '5050',
      interpretationScolaire: 'Formule de cours : n(n+1)/2 = 100 × 101 / 2 = 5050. La calculatrice confirme immédiatement !'
    },
    aRetenir: 'SHIFT + log permet de calculer la somme discrète d\'une suite pour n\'importe quel intervalle d\'indices.',
    erreursFrequentes: [
      'Attention : les bornes doivent être des entiers positifs ou nuls.',
      'Si le nombre de termes est énorme (ex: 100 000), le calcul peut prendre quelques secondes.'
    ],
    astucePro: 'Idéal pour vérifier la somme des termes d\'une suite géométrique S = u₀ (1 - q^(n+1))/(1 - q) sans risque d\'erreur d\'exposant.',
    motsClesRecherche: ['sigma', 'somme', 'suites', 'termes', 'shift log', 'sommation', 'arithmetique', 'geometrique', 'k=1'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- 22. PUISSANCES ET RACINES (x^y, √, ∛, n-ième) ---
  {
    id: 'puissances-racines-racine-nieme',
    nom: 'Puissances, racines carrées, cubiques et n-ièmes (x√y)',
    slug: 'puissances-racines-carrees-cubiques-niemes',
    categorie: 'Calcul Fondamental',
    sousCategorie: 'Puissances & Radicaux',
    description: 'Calcule n\'importe quelle puissance (x², x³, xʸ) et racine carrée, cubique ou n-ième exacte pour les aires, volumes et suites géométriques.',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Calcul de la raison d\'une suite géométrique q = ⁿ√(uₙ/u₀), énergie cinétique v = √(2Ec/m), volumes sphériques et cubiques.',
    programmeS2Theme: 'calcul_general',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['SHIFT', 'x^■ (x√)', 'indice n', '►', 'radicande', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Appeler le symbole de racine n-ième',
        instruction: 'Appuie sur SHIFT puis sur la touche x^■ (qui porte le symbole ⁿ√ en jaune).',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'x^■', subLabel: 'ⁿ√' }],
        lcdDisplay: {
          line1: '■√(■)',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'La racine d\'ordre quelconque apparaît avec deux cases à remplir.'
      },
      {
        stepNumber: 2,
        title: 'Saisir l\'ordre n de la racine',
        instruction: 'Tape l\'indice n (ex: 5 pour une racine cinquième), puis appuie sur ► pour passer sous le radical.',
        keys: [{ keyLabel: '5', note: 'Ordre 5' }, { keyLabel: '►', note: 'Curseur droit' }],
        lcdDisplay: {
          line1: '⁵√( | )',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Le curseur clignote désormais à l\'intérieur du radical.'
      },
      {
        stepNumber: 3,
        title: 'Saisir le nombre sous la racine et valider',
        instruction: 'Tape la valeur sous la racine (ex: 32) puis valide avec =.',
        keys: [{ keyLabel: '3' }, { keyLabel: '2' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: '⁵√(32)',
          line2: '2',
          indicators: ['D', 'Math']
        },
        explanation: 'Puisque 2⁵ = 32, la racine cinquième de 32 vaut exactement 2.'
      }
    ],
    exempleConcret: {
      enonce: 'Dans une suite géométrique à termes positifs, u₀ = 3 et u₅ = 96. Trouver la raison q sachant que q⁵ = 96 / 3 = 32.',
      action: 'Calculer la racine cinquième de 32 avec SHIFT x^■.',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' }, { keyLabel: 'x^■' },
        { keyLabel: '5' }, { keyLabel: '►' },
        { keyLabel: '3' }, { keyLabel: '2' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '2',
      interpretationScolaire: 'q = ⁵√(32) = 2. La raison de la suite géométrique est q = 2.'
    },
    aRetenir: 'x² donne le carré, SHIFT x² donne le cube (x³), x^■ donne la puissance libre et SHIFT x^■ donne la racine n-ième.',
    erreursFrequentes: [
      'Ne pas oublier d\'appuyer sur ► après avoir tapé l\'indice n, sinon le nombre reste collé dans l\'indice.',
      'Pour une racine carrée ordinaire, utilise directement la touche √ sans passer par la racine n-ième.'
    ],
    astucePro: 'Pour les puissances négatives (ex: 10⁻³), utilise le moins unaire (-) entre parenthèses plutôt que le signe de soustraction ordinaire.',
    motsClesRecherche: ['puissance', 'racine', 'racine cubique', 'racine nieme', 'carre', 'cube', 'exposant', 'x^y', 'sqrt'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- 23. LOGARITHMES & EXPONENTIELLE ---
  {
    id: 'logarithmes-ln-exponentielle',
    nom: 'Logarithme népérien (ln), exponentielle (eˣ) et log',
    slug: 'logarithme-neperien-ln-exponentielle-ex-log',
    categorie: 'Fonctions & Analyse',
    sousCategorie: 'Exponentielle & Logarithmes',
    description: 'Calcule les valeurs de ln(x), eˣ, log₁₀(x) et logₐ(b) indispensables pour la radioactivité, le pH et la résolution d\'inéquations de suites.',
    niveau: 'intermediaire',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Résolution de qⁿ ≥ A ⇔ n ≥ ln(A)/ln(q) en suites géométriques, décroissance radioactive N(t) = N₀e⁻ᵝᵗ, calcul du pH = -log[H₃O⁺].',
    programmeS2Theme: 'fonctions',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['ln', 'valeur', ')', '=', 'ou', 'SHIFT', 'ln (e^■)', 'exposant', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Saisir la fonction exponentielle eˣ',
        instruction: 'Appuie sur SHIFT puis sur la touche ln (symbole e^■ en jaune).',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'ln', subLabel: 'e^■' }],
        lcdDisplay: {
          line1: 'e^( | )',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'La constante d\'Euler e apparaît élevée à la puissance que tu vas entrer.'
      },
      {
        stepNumber: 2,
        title: 'Entrer l\'exposant et valider',
        instruction: 'Tape la valeur de la puissance (ex: 2) puis valide avec =.',
        keys: [{ keyLabel: '2' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'e²',
          line2: '7.389056099',
          indicators: ['D', 'Math']
        },
        explanation: 'e² ≈ 7.389 (forme décimale). Appuie sur S<=>D si besoin.'
      },
      {
        stepNumber: 3,
        title: 'Calculer un logarithme népérien ln',
        instruction: 'Appuie sur la touche ln, saisis le nombre positif, ferme la parenthèse avec ) puis valide avec =.',
        keys: [{ keyLabel: 'ln' }, { keyLabel: '5' }, { keyLabel: ')' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'ln(5)',
          line2: '1.609437912',
          indicators: ['D', 'Math']
        },
        explanation: 'ln(5) est l\'unique réel x tel que eˣ = 5.'
      }
    ],
    exempleConcret: {
      enonce: 'Une population de bactéries triple toutes les heures : N(t) = 100 × 3ᵗ. À partir de combien d\'heures dépassera-t-elle 20 000 ?',
      action: 'Résoudre 3ᵗ ≥ 200 ⇔ t ≥ ln(200) / ln(3).',
      touchesDetaillees: [
        { keyLabel: 'fraction' },
        { keyLabel: 'ln' }, { keyLabel: '2' }, { keyLabel: '0' }, { keyLabel: '0' }, { keyLabel: ')' },
        { keyLabel: '▼' },
        { keyLabel: 'ln' }, { keyLabel: '3' }, { keyLabel: ')' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '4.822730164',
      interpretationScolaire: 't ≥ 4.82 heures. Il faudra donc attendre 5 heures complètes pour dépasser 20 000 individus.'
    },
    aRetenir: 'ln est la touche directe. SHIFT ln donne l\'exponentielle eˣ. Toujours fermer la parenthèse fermante ) avant de continuer une formule.',
    erreursFrequentes: [
      'Erreur Math ERROR si tu essaies de calculer ln(0) ou le logarithme d\'un nombre négatif (le logarithme n\'est défini que pour x > 0).',
      'Ne pas confondre la touche log (base 10 utilisée en chimie pH) avec ln (logarithme népérien en base e).'
    ],
    astucePro: 'Pour taper simplement le nombre e (environ 2.718) sans puissance, fais ALPHA puis la touche ×10ˣ qui porte un petit "e" rouge.',
    motsClesRecherche: ['ln', 'log', 'logarithme', 'exponentielle', 'e^x', 'euler', 'ph', 'radioactivite', 'croissance'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- 24. TRIGONOMÉTRIE DIRECTE ET RÉCIPROQUE ---
  {
    id: 'trigonometrie-sin-cos-tan-arcsin',
    nom: 'Trigonométrie directe (sin, cos, tan) et réciproque (cos⁻¹, sin⁻¹)',
    slug: 'trigonometrie-sin-cos-tan-arcsin-arccos',
    categorie: 'Trigonométrie & Géométrie',
    sousCategorie: 'Lignes trigonométriques & Angles',
    description: 'Calcule cos, sin, tan et retrouve l\'angle correspondant en degrés ou radians via cos⁻¹ (arccos) et sin⁻¹ (arcsin).',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Angles et longueurs, produit scalaire u·v = ‖u‖‖v‖cos(θ), équations trigonométriques, lois de Snell-Descartes en optique.',
    programmeS2Theme: 'trigonometrie',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['cos', 'angle', ')', '=', 'ou', 'SHIFT', 'cos (cos⁻¹)', 'valeur', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Vérifier l\'unité d\'angle (Degré ou Radian)',
        instruction: 'Regarde le petit indicateur en haut de l\'écran LCD : D pour Degrés, R pour Radians. Pour changer, fais SHIFT MODE 3 (Deg) ou 4 (Rad).',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'MODE', subLabel: 'SETUP' }, { keyLabel: '3', note: 'Degrés' }],
        lcdDisplay: {
          line1: 'Degré activé',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'En physique et géométrie euclidienne, on travaille souvent en Degrés (D) ; en analyse mathématique, toujours en Radians (R).'
      },
      {
        stepNumber: 2,
        title: 'Calculer un cosinus direct',
        instruction: 'Appuie sur cos, tape l\'angle (ex: 60) puis ferme la parenthèse et valide avec =.',
        keys: [{ keyLabel: 'cos' }, { keyLabel: '6' }, { keyLabel: '0' }, { keyLabel: ')' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'cos(60)',
          line2: '1/2',
          indicators: ['D', 'Math']
        },
        explanation: 'En mode Degré, cos(60°) = 1/2. La Casio donne la forme exacte de fraction !'
      },
      {
        stepNumber: 3,
        title: 'Retrouver un angle via cos⁻¹ (Arccos)',
        instruction: 'Pour retrouver l\'angle dont le cosinus vaut 0.5, appuie sur SHIFT puis cos, puis tape 0.5 et =.',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'cos', subLabel: 'cos⁻¹' }, { keyLabel: '0' }, { keyLabel: '.' }, { keyLabel: '5' }, { keyLabel: ')' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'cos⁻¹(0.5)',
          line2: '60',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice renvoie directement l\'angle de 60°.'
      }
    ],
    exempleConcret: {
      enonce: 'Deux vecteurs u et v ont pour normes ‖u‖ = 4 et ‖v‖ = 5. Leur produit scalaire vaut u·v = 10. Déterminer l\'angle θ en degrés.',
      action: 'cos(θ) = (u·v) / (‖u‖‖v‖) = 10 / 20 = 0.5. Calculer cos⁻¹(0.5).',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' }, { keyLabel: 'cos' },
        { keyLabel: '0' }, { keyLabel: '.' }, { keyLabel: '5' }, { keyLabel: ')' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '60',
      interpretationScolaire: 'L\'angle entre les deux vecteurs est θ = 60° (soit π/3 radians).'
    },
    aRetenir: 'Toujours vérifier la lettre D ou R en haut de l\'écran avant de faire le calcul. cos⁻¹ et sin⁻¹ s\'obtiennent avec la touche jaune SHIFT.',
    erreursFrequentes: [
      'Calculer en Degrés alors que l\'énoncé demandait des Radians (ou inversement).',
      'cos⁻¹(x) donne Math ERROR si la valeur x saisie est strictement supérieure à 1 ou inférieure à -1 (car le cosinus est borné entre -1 et 1).'
    ],
    astucePro: 'Appuie sur la touche S<=>D pour basculer instantanément entre la forme exacte en fraction/racine (ex: √3/2) et sa valeur décimale approchée (0.866).',
    motsClesRecherche: ['sinus', 'cosinus', 'tangente', 'arcsin', 'arccos', 'arctan', 'sin-1', 'cos-1', 'trigonometrie', 'angle', 'degre'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- 25. COORDONNÉES POLAIRES ET CARTÉSIENNES (Pol / Rec) ---
  {
    id: 'coordonnees-polaires-rectangulaires-pol-rec',
    nom: 'Conversion Coordonnées Polaires ↔ Cartésiennes (Pol / Rec)',
    slug: 'conversion-coordonnees-polaires-cartesiennes-pol-rec',
    categorie: 'Trigonométrie & Géométrie',
    sousCategorie: 'Coordonnées & Trigonométrie',
    description: 'Convertit instantanément des coordonnées cartésiennes (x, y) en module/rayon r et angle θ avec Pol, et inversement avec Rec.',
    niveau: 'intermediaire',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Forme trigonométrique des nombres complexes z = r(cosθ + i sinθ), calcul de la norme et de la direction d\'un vecteur force en physique.',
    programmeS2Theme: 'geometrie_vecteurs',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['SHIFT', '+ (Pol)', 'x', 'SHIFT', ') (,)', 'y', ')', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Appeler la fonction Pol(',
        instruction: 'Appuie sur SHIFT puis sur la touche + (symbole Pol en jaune au-dessus de la touche +).',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: '+', subLabel: 'Pol' }],
        lcdDisplay: {
          line1: 'Pol( |',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Pol calcule le rayon r et l\'angle θ à partir des coordonnées x et y.'
      },
      {
        stepNumber: 2,
        title: 'Saisir les coordonnées séparées par une virgule',
        instruction: 'Tape la valeur de x (ex: 3), puis insère la virgule de séparation avec SHIFT + ), puis tape y (ex: 4) et ferme la parenthèse ).',
        keys: [
          { keyLabel: '3', note: 'x = 3' },
          { keyLabel: 'SHIFT', modifier: 'SHIFT' },
          { keyLabel: ')', subLabel: ',' },
          { keyLabel: '4', note: 'y = 4' },
          { keyLabel: ')' }
        ],
        lcdDisplay: {
          line1: 'Pol(3,4)',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Attention : utilise bien la virgule jaune de séparation (SHIFT + parenthèse fermante), et non la virgule décimale du bas.'
      },
      {
        stepNumber: 3,
        title: 'Valider avec =',
        instruction: 'Appuie sur = pour obtenir le rayon r et l\'angle θ.',
        keys: [{ keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'Pol(3,4)',
          line2: 'r=5, θ=53.13010235',
          indicators: ['D', 'Math']
        },
        explanation: 'r = √(3²+4²) = 5 et θ = arctan(4/3) ≈ 53.13°.'
      }
    ],
    exempleConcret: {
      enonce: 'Un vecteur force a pour composantes Fx = 3 N et Fy = 4 N. Déterminer sa norme F et son angle d\'inclinaison θ en degrés.',
      action: 'Exécuter Pol(3, 4) en mode Degré (D).',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' }, { keyLabel: '+' },
        { keyLabel: '3' },
        { keyLabel: 'SHIFT' }, { keyLabel: ')' },
        { keyLabel: '4' },
        { keyLabel: ')' },
        { keyLabel: '=' }
      ],
      resultatAffiche: 'r=5, θ=53.13010235',
      interpretationScolaire: 'La norme est F = 5 N et l\'angle avec l\'axe horizontal est θ ≈ 53.1°.'
    },
    aRetenir: 'Pol(x,y) convertit vers le polaire (r, θ). Rec(r, θ) convertit le polaire vers le cartésien (X, Y). Les résultats sont stockés dans les variables X et Y.',
    erreursFrequentes: [
      'Ne pas confondre la virgule de séparation d\'arguments SHIFT + ) avec le point décimal .',
      'Vérifier si le résultat d\'angle doit être exprimé en Degrés ou en Radians.'
    ],
    astucePro: 'Après avoir exécuté Pol, appuie sur RCL puis ( pour revoir immédiatement X (le rayon r) ou RCL puis ) pour revoir Y (l\'angle θ).',
    motsClesRecherche: ['pol', 'rec', 'coordonnees polaires', 'cartesien', 'rayon', 'angle', 'vecteur', 'norme', 'argument'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- 26. MÉMOIRES ET VARIABLES (STO / RCL) ---
  {
    id: 'memoires-variables-sto-rcl',
    nom: 'Mémoires et variables (A, B, C, D, E, F, X, Y, M) avec STO et RCL',
    slug: 'memoires-variables-sto-rcl-casio-fx991es',
    categorie: 'Calcul Fondamental',
    sousCategorie: 'Mémoires & Variables',
    description: 'Enregistre des résultats intermédiaires dans 9 mémoires indépendantes pour éviter les erreurs de recopie et conserver la précision exacte.',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Calculs en chaîne en sciences physiques (vitesse de la lumière, masses molaires, énergie) et calculs algébriques sans arrondis prématurés.',
    programmeS2Theme: 'calcul_general',
    modeCasio: 'Tous modes (COMP 1)',
    modeCode: 1,
    touchesRapides: ['valeur', 'SHIFT', 'RCL (STO)', 'touche de la variable', 'puis', 'RCL', 'variable'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Calculer ou saisir le nombre à mémoriser',
        instruction: 'Tape ton calcul ou ton nombre (ex: 14.2) ou utilise le dernier résultat Ans.',
        keys: [{ keyLabel: '1' }, { keyLabel: '4' }, { keyLabel: '.' }, { keyLabel: '2' }],
        lcdDisplay: {
          line1: '14.2',
          line2: '',
          indicators: ['D', 'Math']
        },
        explanation: 'Ce nombre va être stocké dans une mémoire nommée (A, B, C, D, E, F, X, Y ou M).'
      },
      {
        stepNumber: 2,
        title: 'Stocker dans une mémoire avec STO',
        instruction: 'Appuie sur SHIFT puis sur RCL (qui porte STO en jaune), puis sur la touche de la variable choisie, par exemple [(-)] pour A.',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'RCL', subLabel: 'STO' }, { keyLabel: '(-)', subLabel: 'A' }],
        lcdDisplay: {
          line1: '14.2→A',
          line2: '14.2',
          indicators: ['D', 'Math']
        },
        explanation: 'La flèche →A confirme que la valeur 14.2 est désormais stockée dans la mémoire A.'
      },
      {
        stepNumber: 3,
        title: 'Rappeler la variable dans un autre calcul avec RCL',
        instruction: 'Pour utiliser la valeur stockée, appuie simplement sur RCL puis sur la touche de la variable [(-)] (A).',
        keys: [{ keyLabel: 'RCL' }, { keyLabel: '(-)', subLabel: 'A' }],
        lcdDisplay: {
          line1: 'A',
          line2: '14.2',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice remplace immédiatement le symbole A par sa valeur exacte 14.2 dans le calcul.'
      }
    ],
    exempleConcret: {
      enonce: 'Un objet de masse m = 0.25 kg se déplace à une vitesse v = 14.2 m/s. Stocker la vitesse dans A pour calculer l\'énergie cinétique Ec = 0.5 × m × v².',
      action: 'Stocker 14.2 dans A, puis calculer 0.5 × 0.25 × A².',
      touchesDetaillees: [
        { keyLabel: '1' }, { keyLabel: '4' }, { keyLabel: '.' }, { keyLabel: '2' },
        { keyLabel: 'SHIFT' }, { keyLabel: 'RCL' }, { keyLabel: '(-)' },
        { keyLabel: 'AC' },
        { keyLabel: '0' }, { keyLabel: '.' }, { keyLabel: '5' },
        { keyLabel: '×' },
        { keyLabel: '0' }, { keyLabel: '.' }, { keyLabel: '2' }, { keyLabel: '5' },
        { keyLabel: '×' },
        { keyLabel: 'ALPHA' }, { keyLabel: '(-)' },
        { keyLabel: 'x²' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '25.205',
      interpretationScolaire: 'Ec = 25.205 Joules. Aucun chiffre après la virgule n\'a été perdu.'
    },
    aRetenir: 'SHIFT + RCL (STO) permet d\'enregistrer dans A, B, C, D, E, F, X, Y, M. La touche RCL permet de rappeler la valeur à tout moment.',
    erreursFrequentes: [
      'Ne pas appuyer sur ALPHA pour stocker : c\'est bien SHIFT RCL puis la lettre directement.',
      'Pour effacer toutes les mémoires, fais SHIFT 9 (CLR) puis 1 (Memory) puis =.'
    ],
    astucePro: 'La touche M+ ajoute la valeur affichée à la mémoire M, tandis que SHIFT M+ (M-) la soustrait. Très pratique pour faire un total cumulé.',
    motsClesRecherche: ['memoire', 'variable', 'sto', 'rcl', 'stocker', 'a', 'b', 'c', 'm+', 'rappel'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- 27. SYSTÈME DE 3 ÉQUATIONS À 3 INCONNUES (3x3) ---
  {
    id: 'systeme-lineaire-3x3',
    nom: 'Résoudre un système de 3 équations à 3 inconnues (3×3)',
    slug: 'systeme-lineaire-trois-inconnues-3x3',
    categorie: 'Équations & Systèmes',
    sousCategorie: 'Systèmes linéaires',
    description: 'Trouve les valeurs exactes de X, Y et Z pour tout système de 3 équations linéaires anX + bnY + cnZ = dn.',
    niveau: 'avance',
    pertinenceS2: 'utile',
    contexteScolaire: 'Détermination de l\'équation d\'une parabole y = ax² + bx + c passant par 3 points donnés A, B et C, géométrie dans l\'espace (intersection de plans).',
    programmeS2Theme: 'geometrie_vecteurs',
    modeCasio: 'EQN (MODE 5 2)',
    modeCode: 5,
    touchesRapides: ['MODE', '5', '2', 'entrer coefficients ligne par ligne avec =', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Activer le mode EQN 3×3',
        instruction: 'Appuie sur MODE, puis 5 (EQN), puis choisis 2 pour anX + bnY + cnZ = dn.',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '5', note: 'EQN' }, { keyLabel: '2', note: '3 inconnues' }],
        lcdDisplay: {
          line1: '      a       b       c       d',
          line2: '1     0       0       0       0',
          indicators: ['D', 'Math']
        },
        explanation: 'Une grille matricielle à 3 lignes (1, 2, 3) et 4 colonnes (a, b, c, d) apparaît.'
      },
      {
        stepNumber: 2,
        title: 'Saisir les coefficients de chaque équation',
        instruction: 'Tape chaque coefficient en validant avec =. La saisie avance automatiquement de gauche à droite puis passe à la ligne suivante.',
        keys: [
          { keyLabel: '1' }, { keyLabel: '=' },
          { keyLabel: '1' }, { keyLabel: '=' },
          { keyLabel: '1' }, { keyLabel: '=' },
          { keyLabel: '6' }, { keyLabel: '=' }
        ],
        lcdDisplay: {
          line1: '      a       b       c       d',
          line2: '2     0       0       0       0',
          indicators: ['D', 'Math']
        },
        explanation: 'La première équation x + y + z = 6 est saisie. Remplis de même les lignes 2 et 3.'
      },
      {
        stepNumber: 3,
        title: 'Afficher les solutions X, Y et Z',
        instruction: 'Appuie sur = une fois tous les coefficients saisis pour voir X, puis sur ▼ pour Y et Z.',
        keys: [{ keyLabel: '=', isEnter: true }, { keyLabel: '▼' }, { keyLabel: '▼' }],
        lcdDisplay: {
          line1: 'X=',
          line2: '1',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice donne X = 1, Y = 2 et Z = 3.'
      }
    ],
    exempleConcret: {
      enonce: 'Déterminer les coefficients de la parabole y = ax² + bx + c passant par A(1, 2), B(2, 5) et C(3, 10).',
      action: 'Résoudre le système : a+b+c=2 ; 4a+2b+c=5 ; 9a+3b+c=10 dans MODE 5 2.',
      touchesDetaillees: [
        { keyLabel: 'MODE' }, { keyLabel: '5' }, { keyLabel: '2' },
        { keyLabel: '1' }, { keyLabel: '=' }, { keyLabel: '1' }, { keyLabel: '=' }, { keyLabel: '1' }, { keyLabel: '=' }, { keyLabel: '2' }, { keyLabel: '=' },
        { keyLabel: '4' }, { keyLabel: '=' }, { keyLabel: '2' }, { keyLabel: '=' }, { keyLabel: '1' }, { keyLabel: '=' }, { keyLabel: '5' }, { keyLabel: '=' },
        { keyLabel: '9' }, { keyLabel: '=' }, { keyLabel: '3' }, { keyLabel: '=' }, { keyLabel: '1' }, { keyLabel: '=' }, { keyLabel: '1' }, { keyLabel: '0' }, { keyLabel: '=' },
        { keyLabel: '=' }
      ],
      resultatAffiche: 'X=1, Y=0, Z=1',
      interpretationScolaire: 'a = 1, b = 0, c = 1. L\'équation cherchée est y = x² + 1.'
    },
    aRetenir: 'MODE 5 2 résout les systèmes à 3 équations. Ne pas oublier de mettre les constantes dn du côté droit du signe égal.',
    erreursFrequentes: [
      'Si le système n\'a pas de solution unique (plans parallèles ou confondus), la calculatrice affiche "No Solution" ou "Infinite Sol".',
      'Si un terme manque dans une équation (par exemple pas de y), entre impérativement 0 pour ce coefficient.'
    ],
    astucePro: 'Pour modifier un seul coefficient erroné sans tout retaper, utilise les touches de direction ▲ ▼ ◄ ► pour aller sur la case et réécris le chiffre.',
    motsClesRecherche: ['systeme 3x3', 'trois inconnues', 'systeme 3 equations', 'x y z', 'mode 5 2', 'plans espace'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- 28. RÉGRESSION LINÉAIRE STATS 2 VARIABLES ---
  {
    id: 'regression-lineaire-stats-2var',
    nom: 'Régression linéaire & Corrélation (y = A + Bx, r)',
    slug: 'regression-lineaire-correlation-moindres-carres',
    categorie: 'Statistiques & Probabilités',
    sousCategorie: 'Ajustement linéaire',
    description: 'Ajuste une droite des moindres carrés y = A + Bx sur un nuage de points et calcule le coefficient de corrélation linéaire r.',
    niveau: 'intermediaire',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Physique-Chimie (spectrophotométrie Beer-Lambert A = k·C, loi d\'Ohm U = R·I, étalonnage) et Mathématiques (ajustement affine).',
    programmeS2Theme: 'probabilites_stats',
    modeCasio: 'STAT (MODE 3 2)',
    modeCode: 3,
    touchesRapides: ['MODE', '3', '2 (A+BX)', 'saisir X et Y', 'AC', 'SHIFT', '1', '5 (Reg)', '3 (r) ou 2 (B)'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Choisir le modèle linéaire A+BX',
        instruction: 'Appuie sur MODE, puis 3 (STAT), puis choisis 2 (A+BX).',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '3', note: 'STAT' }, { keyLabel: '2', note: 'A+BX' }],
        lcdDisplay: {
          line1: '      X       Y',
          line2: '1',
          indicators: ['D', 'STAT', 'Math']
        },
        explanation: 'Un tableau à 2 colonnes X et Y s\'ouvre.'
      },
      {
        stepNumber: 2,
        title: 'Saisir les points expérimentaux (X, Y)',
        instruction: 'Saisis les valeurs de X en descendant avec =, puis utilise les flèches pour aller en haut de la colonne Y et saisis les valeurs de Y.',
        keys: [{ keyLabel: '1' }, { keyLabel: '=' }, { keyLabel: '2' }, { keyLabel: '=' }, { keyLabel: '3' }, { keyLabel: '=' }],
        lcdDisplay: {
          line1: '      X       Y',
          line2: '3     3',
          indicators: ['D', 'STAT', 'Math']
        },
        explanation: 'Une fois tous les couples entrés, appuie sur AC pour fermer le tableau sans perdre les données.'
      },
      {
        stepNumber: 3,
        title: 'Calculer la pente B et le coefficient r',
        instruction: 'Fais SHIFT puis 1 (STAT), choisis 5 (Reg), puis 3 pour r (corrélation) ou 2 pour B (la pente). Valide avec =.',
        keys: [{ keyLabel: 'AC' }, { keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: '1', subLabel: 'STAT' }, { keyLabel: '5', note: 'Reg' }, { keyLabel: '3', note: 'r' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'r',
          line2: '0.9998',
          indicators: ['D', 'STAT', 'Math']
        },
        explanation: 'r proche de 1 atteste d\'un alignement quasi-parfait des points de mesure.'
      }
    ],
    exempleConcret: {
      enonce: 'En TP de chimie, on mesure l\'absorbance A en fonction de la concentration C : (1, 0.2), (2, 0.4), (3, 0.61), (4, 0.79). Calculer la pente k et le coefficient r.',
      action: 'Entrer les couples dans MODE 3 2, puis demander B et r.',
      touchesDetaillees: [
        { keyLabel: 'MODE' }, { keyLabel: '3' }, { keyLabel: '2' },
        { keyLabel: '1' }, { keyLabel: '=' }, { keyLabel: '2' }, { keyLabel: '=' }, { keyLabel: '3' }, { keyLabel: '=' }, { keyLabel: '4' }, { keyLabel: '=' },
        { keyLabel: '►' }, { keyLabel: '▲' }, { keyLabel: '▲' }, { keyLabel: '▲' },
        { keyLabel: '0' }, { keyLabel: '.' }, { keyLabel: '2' }, { keyLabel: '=' },
        { keyLabel: '0' }, { keyLabel: '.' }, { keyLabel: '4' }, { keyLabel: '=' },
        { keyLabel: '0' }, { keyLabel: '.' }, { keyLabel: '6' }, { keyLabel: '1' }, { keyLabel: '=' },
        { keyLabel: '0' }, { keyLabel: '.' }, { keyLabel: '7' }, { keyLabel: '9' }, { keyLabel: '=' },
        { keyLabel: 'AC' },
        { keyLabel: 'SHIFT' }, { keyLabel: '1' }, { keyLabel: '5' }, { keyLabel: '3' }, { keyLabel: '=' }
      ],
      resultatAffiche: 'r = 0.99984... et B = 0.198',
      interpretationScolaire: 'r > 0.99 confirme la loi de Beer-Lambert avec un coefficient d\'extinction molaire k ≈ 0.20.'
    },
    aRetenir: 'Dans le menu SHIFT 1 5 (Reg) : 1: A donne l\'ordonnée à l\'origine, 2: B donne la pente (coefficient directeur), et 3: r donne le coefficient de corrélation.',
    erreursFrequentes: [
      'Ne pas oublier d\'appuyer sur AC avant d\'appeler le menu SHIFT 1.',
      'Ne jamais éteindre la calculatrice avec ON sous peine d\'effacer la série de données en cours.'
    ],
    astucePro: 'Pour prédire une valeur y pour un x donné (ex: x=5), tape 5 puis SHIFT 1 5 5 (ŷ) puis =.',
    motsClesRecherche: ['regression', 'correlation', 'moindres carres', 'ajustement', 'pente', 'beer lambert', 'statistiques 2 variables', 'nuage de points'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- 29. MODE BASE-N (BINAIRE, HEXADÉCIMAL, OCTAL) ---
  {
    id: 'base-n-binaire-hexa-octal',
    nom: 'Mode BASE-N (Binaire, Hexa, Octal, Décimal & Logique)',
    slug: 'mode-base-n-binaire-hexadecimal-octal-nsi',
    categorie: 'Constantes & Outils',
    sousCategorie: 'Informatique & NSI',
    description: 'Convertit instantanément des entiers entre binaire, décimal, hexadécimal et octal, et réalise des opérations logiques (AND, OR, XOR, NOT).',
    niveau: 'intermediaire',
    pertinenceS2: 'utile',
    contexteScolaire: 'Spécialité NSI (Numérique et Sciences Informatiques), codage des entiers, représentations binaires et hexadécimales des adresses IP et couleurs.',
    programmeS2Theme: 'calcul_general',
    modeCasio: 'BASE-N (MODE 4)',
    modeCode: 4,
    touchesRapides: ['MODE', '4', 'choisir base de saisie (DEC, HEX, BIN, OCT)', 'taper nombre', '=', 'appuyer sur la base cible'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Entrer dans le mode BASE-N',
        instruction: 'Appuie sur la touche MODE puis choisis 4 (BASE-N).',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '4', note: 'BASE-N' }],
        lcdDisplay: {
          line1: '0',
          line2: '                  d',
          indicators: ['D']
        },
        explanation: 'La lettre "d" en bas à droite indique que la calculatrice est en mode Décimal par défaut.'
      },
      {
        stepNumber: 2,
        title: 'Sélectionner la base de départ et taper le nombre',
        instruction: 'Appuie sur la touche de la base : DEC (x²), HEX (x^■), BIN (log) ou OCT (ln). Tape le nombre puis valide avec =.',
        keys: [{ keyLabel: 'x²', note: 'DEC' }, { keyLabel: '2' }, { keyLabel: '5' }, { keyLabel: '5' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: '255',
          line2: '                255 d',
          indicators: ['D']
        },
        explanation: 'Le nombre décimal 255 est enregistré.'
      },
      {
        stepNumber: 3,
        title: 'Convertir d\'un seul appui de touche',
        instruction: 'Appuie simplement sur la touche BIN (log) pour le binaire, ou HEX (x^■) pour l\'hexadécimal.',
        keys: [{ keyLabel: 'log', subLabel: 'BIN' }],
        lcdDisplay: {
          line1: 'Ans',
          line2: '           11111111 b',
          indicators: ['D']
        },
        explanation: '255 s\'écrit 11111111 en binaire (lettre b). Appuie sur HEX pour obtenir FF (lettre h).'
      }
    ],
    exempleConcret: {
      enonce: 'Convertir le nombre décimal 2024 en binaire et en hexadécimal.',
      action: 'Entrer 2024 en mode DEC, puis appuyer sur HEX et BIN.',
      touchesDetaillees: [
        { keyLabel: 'MODE' }, { keyLabel: '4' },
        { keyLabel: 'x²' },
        { keyLabel: '2' }, { keyLabel: '0' }, { keyLabel: '2' }, { keyLabel: '4' }, { keyLabel: '=' },
        { keyLabel: 'x^■' }
      ],
      resultatAffiche: 'HEX: 7E8  /  BIN: 11111101000',
      interpretationScolaire: '2024₁₀ = 7E8₁₆ = 11111101000₂. Conversion immédiate sans calculs de divisions successives.'
    },
    aRetenir: 'En mode BASE-N, les touches x² (DEC), x^■ (HEX), log (BIN) et ln (OCT) sélectionnent directement la base. Les lettres A à F se tapent directement avec (-), °\'", hyp, sin, cos, tan sans appuyer sur ALPHA.',
    erreursFrequentes: [
      'Taper un chiffre interdit dans la base (ex: taper 2 en mode binaire BIN) provoque une Syntax ERROR.',
      'Pour revenir aux calculs mathématiques normaux, fais impérativement MODE puis 1 (COMP).'
    ],
    astucePro: 'Pour les opérations logiques (ex: 12 AND 5), appuie sur SHIFT puis 3 (LOGIC) pour choisir 1: and, 2: or, 3: xor, 4: not.',
    motsClesRecherche: ['binaire', 'hexadecimal', 'octal', 'decimal', 'base-n', 'nsi', 'informatique', 'bit', 'octet', 'logique'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- 30. DISTRIBUTION NORMALE P(t), Q(t), R(t) ---
  {
    id: 'distribution-normale-stat',
    nom: 'Loi Normale centrée réduite P(t), Q(t), R(t)',
    slug: 'loi-normale-centree-reduite-p-q-r-casio',
    categorie: 'Statistiques & Probabilités',
    sousCategorie: 'Probabilités continues',
    description: 'Calcule les probabilités de la loi normale centrée réduite N(0, 1) : P(t) = P(X ≤ t), Q(t) = P(0 ≤ X ≤ t) et R(t) = P(X ≥ t).',
    niveau: 'avance',
    pertinenceS2: 'utile',
    contexteScolaire: 'Chapitre Lois de probabilités continues (loi normale), intervalles de fluctuation asymptotiques et intervalles de confiance.',
    programmeS2Theme: 'probabilites_stats',
    modeCasio: 'STAT (MODE 3 1) puis SHIFT 1 6',
    modeCode: 3,
    touchesRapides: ['MODE', '3', '1', 'AC', 'SHIFT', '1', '6 (Distr)', '1 (P()', 't', ')', '='],
    etapes: [
      {
        stepNumber: 1,
        title: 'Initialiser le mode STAT',
        instruction: 'Appuie sur MODE, puis 3 (STAT), puis 1 (1-VAR), puis appuie immédiatement sur AC.',
        keys: [{ keyLabel: 'MODE' }, { keyLabel: '3', note: 'STAT' }, { keyLabel: '1', note: '1-VAR' }, { keyLabel: 'AC' }],
        lcdDisplay: {
          line1: '0',
          line2: '',
          indicators: ['D', 'STAT', 'Math']
        },
        explanation: 'Sur la fx-991ES originale, le sous-menu des distributions n\'est accessible que lorsque le mode STAT est actif.'
      },
      {
        stepNumber: 2,
        title: 'Ouvrir le menu Distr (Distribution)',
        instruction: 'Appuie sur SHIFT puis 1 (STAT), puis choisis 6 (Distr).',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: '1', subLabel: 'STAT' }, { keyLabel: '6', note: 'Distr' }],
        lcdDisplay: {
          line1: '1:P(    2:Q(',
          line2: '3:R(    4:►t',
          indicators: ['D', 'STAT', 'Math']
        },
        explanation: '1: P(t) donne P(X ≤ t). 2: Q(t) donne P(0 ≤ X ≤ t). 3: R(t) donne P(X ≥ t). 4: ►t convertit une valeur en variable centrée réduite.'
      },
      {
        stepNumber: 3,
        title: 'Sélectionner P(t) et entrer la valeur',
        instruction: 'Appuie sur 1 pour P(, tape la valeur de t (ex: 1.96), ferme la parenthèse et valide avec =.',
        keys: [{ keyLabel: '1', note: 'P(' }, { keyLabel: '1' }, { keyLabel: '.' }, { keyLabel: '9' }, { keyLabel: '6' }, { keyLabel: ')' }, { keyLabel: '=', isEnter: true }],
        lcdDisplay: {
          line1: 'P(1.96)',
          line2: '0.9750021049',
          indicators: ['D', 'STAT', 'Math']
        },
        explanation: 'La calculatrice donne exactement 0.975 (soit 97.5%).'
      }
    ],
    exempleConcret: {
      enonce: 'Soit Z une variable aléatoire suivant la loi normale centrée réduite N(0, 1). Calculer P(Z ≤ 1.96) et P(-1.96 ≤ Z ≤ 1.96).',
      action: 'Calculer P(1.96) puis 2 × Q(1.96) ou 2 × P(1.96) - 1.',
      touchesDetaillees: [
        { keyLabel: 'MODE' }, { keyLabel: '3' }, { keyLabel: '1' }, { keyLabel: 'AC' },
        { keyLabel: 'SHIFT' }, { keyLabel: '1' }, { keyLabel: '6' }, { keyLabel: '1' },
        { keyLabel: '1' }, { keyLabel: '.' }, { keyLabel: '9' }, { keyLabel: '6' }, { keyLabel: ')' },
        { keyLabel: '=' }
      ],
      resultatAffiche: '0.9750021049',
      interpretationScolaire: 'P(Z ≤ 1.96) ≈ 0.975. Ainsi, P(-1.96 ≤ Z ≤ 1.96) = 2 × 0.975 - 1 = 0.95 (l\'intervalle de confiance à 95%).'
    },
    aRetenir: 'La Casio fx-991ES originale intègre la loi normale dans SHIFT 1 option 6 (Distr) du mode STAT. P(t) calcule l\'intégrale de Gauss de -∞ à t.',
    erreursFrequentes: [
      'Chercher un mode "DIST" sur la touche MODE : ce mode n\'existe que sur la fx-991EX (ClassWiz). Sur la fx-991ES originale, il faut passer par STAT puis SHIFT 1 6.',
      'Ne pas oublier que la fonction P(t) s\'applique uniquement à la variable CENTRÉE RÉDUITE t = (x - μ) / σ.'
    ],
    astucePro: 'Si ta variable normale X n\'est pas centrée réduite (moyenne μ ≠ 0 et écart-type σ ≠ 1), utilise l\'option 4: ►t pour calculer automatiquement t = (X - x̄) / σ.',
    motsClesRecherche: ['loi normale', 'distribution', 'p(t)', 'gauss', 'probabilites continues', 'centree reduite', 'intervalle de confiance', '1.96'],
    statut: 'confirme',
    estMeconnue: true
  },

  // --- 31. ARRONDIS ET NOTATION SCIENTIFIQUE (FIX / SCI / NORM) ---
  {
    id: 'notation-scientifique-arrondi-fix-sci',
    nom: 'Arrondi forcé et notation scientifique (Fix, Sci, Norm)',
    slug: 'arrondi-force-notation-scientifique-fix-sci-norm',
    categorie: 'Calcul Fondamental',
    sousCategorie: 'Affichage & Précision',
    description: 'Règle la calculatrice pour arrondir systématiquement à n décimales (Fix) ou formater les résultats en puissances de 10 scientifiques (Sci).',
    niveau: 'debutant',
    pertinenceS2: 'indispensable',
    contexteScolaire: 'Respect impératif des chiffres significatifs en Physique-Chimie, arrondis obligatoires au centième (Fix 2) ou millième (Fix 3) dans les énoncés de mathématiques.',
    programmeS2Theme: 'calcul_general',
    modeCasio: 'SETUP (SHIFT MODE)',
    modeCode: 1,
    touchesRapides: ['SHIFT', 'MODE (SETUP)', '6 (Fix)', 'nb décimales (0 à 9)', 'ou', '7 (Sci)'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Ouvrir le menu SETUP',
        instruction: 'Appuie sur SHIFT puis sur MODE (SETUP).',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'MODE', subLabel: 'SETUP' }],
        lcdDisplay: {
          line1: '1:MthIO  2:LineIO',
          line2: '3:Deg    4:Rad ... 6:Fix 7:Sci 8:Norm',
          indicators: ['D', 'Math']
        },
        explanation: 'Le menu de configuration générale s\'affiche.'
      },
      {
        stepNumber: 2,
        title: 'Activer le mode Fix et choisir le nombre de décimales',
        instruction: 'Appuie sur 6 pour Fix, puis saisis le nombre de chiffres après la virgule souhaité (ex: 2 pour le centième).',
        keys: [{ keyLabel: '6', note: 'Fix' }, { keyLabel: '2', note: '2 décimales' }],
        lcdDisplay: {
          line1: 'Fix 0~9 ?',
          line2: '0.00',
          indicators: ['D', 'FIX', 'Math']
        },
        explanation: 'Remarque le petit indicateur FIX allumé en haut de l\'écran. Tous les résultats seront arrondis au centième.'
      },
      {
        stepNumber: 3,
        title: 'Revenir au mode normal quand l\'exercice est terminé',
        instruction: 'Pour enlever l\'arrondi forcé et réafficher tous les chiffres, fais SHIFT MODE, choisis 8 (Norm) puis appuie sur 1.',
        keys: [{ keyLabel: 'SHIFT', modifier: 'SHIFT' }, { keyLabel: 'MODE', subLabel: 'SETUP' }, { keyLabel: '8', note: 'Norm' }, { keyLabel: '1' }],
        lcdDisplay: {
          line1: 'Norm 1~2 ?',
          line2: '0',
          indicators: ['D', 'Math']
        },
        explanation: 'L\'indicateur FIX s\'éteint et la calculatrice retrouve son affichage standard.'
      }
    ],
    exempleConcret: {
      enonce: 'Un exercice de probabilités demande d\'arrondir la probabilité 2/3 à 3 décimales (au millième près).',
      action: 'Activer Fix 3 puis calculer 2 ÷ 3.',
      touchesDetaillees: [
        { keyLabel: 'SHIFT' }, { keyLabel: 'MODE' },
        { keyLabel: '6' }, { keyLabel: '3' },
        { keyLabel: '2' }, { keyLabel: '÷' }, { keyLabel: '3' }, { keyLabel: '=' }
      ],
      resultatAffiche: '0.667',
      interpretationScolaire: 'La calculatrice arrondit directement 2/3 = 0.6666... en 0.667.'
    },
    aRetenir: 'SHIFT MODE 6 (Fix) fixe le nombre de décimales. SHIFT MODE 7 (Sci) impose la notation scientifique. SHIFT MODE 8 puis 1 (Norm 1) remet l\'affichage normal.',
    erreursFrequentes: [
      'Oublier d\'annuler le mode Fix après un devoir : si Fix 0 reste activé, tous les calculs suivants sembleront tronqués à l\'entier le plus proche !',
      'Ne pas s\'inquiéter : le mode Fix ne modifie que l\'affichage, la calculatrice garde toujours 15 chiffres de précision en mémoire interne.'
    ],
    astucePro: 'En physique, utilise Sci 3 (SHIFT MODE 7 3) pour afficher automatiquement tous les résultats avec 3 chiffres significatifs (ex: 3.00 × 10⁸).',
    motsClesRecherche: ['arrondi', 'fix', 'sci', 'norm', 'notation scientifique', 'chiffres significatifs', 'decimales', 'precision', 'virgule'],
    statut: 'confirme',
    estMeconnue: false
  },

  // --- SEXAGÉSIMAL : DEGRÉS, MINUTES, SECONDES ---
  {
    id: 'degres-minutes-secondes-dms',
    nom: 'Degrés, Minutes, Secondes (Touche ° \' ")',
    slug: 'degres-minutes-secondes-dms',
    categorie: 'Trigonométrie & Géométrie',
    sousCategorie: 'Angles & Sexagésimal',
    description: 'Convertit un angle ou une durée entre écriture décimale et format sexagésimal (° \' ") et permet d\'effectuer des calculs d\'heures et d\'angles.',
    niveau: 'debutant',
    pertinenceS2: 'tres_utile',
    contexteScolaire: 'Trigonométrie, calculs d\'angles précis (degrés, minutes, secondes) et conversions de durées (heures, minutes, secondes) en sciences.',
    programmeS2Theme: 'trigonometrie',
    modeCasio: 'COMP (MODE 1)',
    modeCode: 1,
    touchesRapides: ['2', '.', '7', '5', '=', '° \' "'],
    etapes: [
      {
        stepNumber: 1,
        title: 'Saisir une valeur décimale',
        instruction: 'Tape la valeur décimale de l\'angle ou de la durée (ex: 2.75) et valide avec =.',
        keys: [
          { keyLabel: '2' },
          { keyLabel: '.' },
          { keyLabel: '7' },
          { keyLabel: '5' },
          { keyLabel: '=', isEnter: true }
        ],
        lcdDisplay: {
          line1: '2.75',
          line2: '11/4 ou 2.75',
          indicators: ['D', 'Math']
        },
        explanation: 'Le résultat s\'affiche à l\'écran.'
      },
      {
        stepNumber: 2,
        title: 'Appuyer sur la touche sexagésimale ° \' "',
        instruction: 'Appuie directement sur la touche ° \' " (située sous la touche racine carrée √).',
        keys: [{ keyLabel: '° \' "', note: 'Degrés Minutes Secondes' }],
        lcdDisplay: {
          line1: 'Ans',
          line2: '2°45\'0"',
          indicators: ['D', 'Math']
        },
        explanation: 'La calculatrice convertit immédiatement 2,75 en 2 degrés, 45 minutes et 0 seconde (soit 2h 45 min).'
      },
      {
        stepNumber: 3,
        title: 'Saisie directe d\'un angle en degrés-minutes-secondes',
        instruction: 'Pour entrer 14° 30\' 15", tape 14 puis ° \' ", 30 puis ° \' ", 15 puis ° \' " et valide avec =.',
        keys: [
          { keyLabel: '1' }, { keyLabel: '4' }, { keyLabel: '° \' "' },
          { keyLabel: '3' }, { keyLabel: '0' }, { keyLabel: '° \' "' },
          { keyLabel: '1' }, { keyLabel: '5' }, { keyLabel: '° \' "' },
          { keyLabel: '=', isEnter: true }
        ],
        lcdDisplay: {
          line1: '14°30°15°',
          line2: '14°30\'15"',
          indicators: ['D', 'Math']
        },
        explanation: 'Lors de la frappe, la touche affiche un petit carré ou cercle ° pour chaque unité, puis le format exact \' et " à la validation.'
      }
    ],
    exempleConcret: {
      enonce: 'Un exercice demande de convertir une durée de trajet de 2,75 heures en heures et minutes.',
      action: 'Taper 2.75 = puis appuyer sur ° \' ".',
      touchesDetaillees: [
        { keyLabel: '2' }, { keyLabel: '.' }, { keyLabel: '7' }, { keyLabel: '5' },
        { keyLabel: '=' }, { keyLabel: '° \' "' }
      ],
      resultatAffiche: '2°45\'0"',
      interpretationScolaire: '0,75 heure correspond à 0,75 × 60 = 45 minutes. La durée exacte est bien 2 heures et 45 minutes.'
    },
    aRetenir: 'La touche ° \' " bascule instantanément n\'importe quel nombre décimal en degrés/minutes/secondes ou heures/minutes/secondes.',
    erreursFrequentes: [
      'Pour saisir des secondes seules (ex: 0° 0\' 45"), il faut obligatoirement taper 0 °\'" 0 °\'" 45 °\'" ! Sinon la calculatrice interprète 45 comme des degrés.',
      'Ne pas confondre la touche sexagésimale ° \' " avec la puissance ou le symbole degré du menu DRG.'
    ],
    astucePro: 'Tu peux additionner des durées directement : 1h30 + 45min s\'écrit [1] [°\'"] [3] [0] [°\'"] [+] [0] [°\'"] [4] [5] [°\'"] [=] -> affiche 2°15\'0" (2h15).',
    motsClesRecherche: ['dms', 'degre minute seconde', 'sexagesimal', 'angle', 'minutes', 'secondes', 'conversion heure', 'duree', 'temps'],
    statut: 'confirme',
    estMeconnue: false
  }
];
