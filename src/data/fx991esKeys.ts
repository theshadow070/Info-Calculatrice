import { CasioKeyInfo } from '../types/calculator';

export const FX991ES_KEYS: CasioKeyInfo[] = [
  // Top control keys
  {
    code: 'SHIFT',
    label: 'SHIFT',
    type: 'system',
    description: 'Active les fonctions secondaires sérigraphiées en JAUNE au-dessus des touches.',
    associatedFunctions: ['angle-degre-radian-setup', 'derivee-numerique-ddx', 'reinitialisation-complete-clr', 'constantes-scientifiques-physique', 'conversions-unites-conv', 'denombrement-ncr-factorielle'],
    astuce: 'Un petit symbole "S" apparaît en haut à gauche de l\'écran quand SHIFT est actif. Réappuyer dessus pour annuler.'
  },
  {
    code: 'ALPHA',
    label: 'ALPHA',
    type: 'system',
    description: 'Active les variables et lettres sérigraphiées en ROUGE (X, Y, A, B, C, D, E, F, M) ainsi que le signe égal (=).',
    associatedFunctions: ['tableau-valeurs-table', 'solveur-numerique-solve', 'evaluation-rapide-calc', 'derivee-numerique-ddx'],
    astuce: 'Le symbole "A" s\'affiche sur le LCD. Essentiel pour taper la variable X dans les fonctions et les équations.'
  },
  {
    code: 'MODE',
    label: 'MODE',
    shiftLabel: 'SETUP',
    type: 'mode',
    description: 'Ouvre le menu des 8 modes de calcul de la fx-991ES (COMP, CMPLX, STAT, BASE-N, EQN, MATRIX, VECTOR, TABLE).',
    shiftDescription: 'SETUP : configure l\'affichage naturel (MthIO), les unités d\'angle (Deg/Rad), les arrondis (Fix/Sci) et les options de fréquence.',
    associatedFunctions: ['second-degre-eqn', 'tableau-valeurs-table', 'angle-degre-radian-setup', 'statistiques-1var', 'stats-colonne-freq', 'systeme-lineaire-2x2', 'produit-scalaire-vector', 'nombres-complexes-cmplx', 'matrices-determinant-inverse'],
    astuce: 'Pour revenir au mode de calcul par défaut, fais simplement MODE 1 (COMP).'
  },
  {
    code: 'CALC',
    label: 'CALC',
    shiftLabel: 'SOLVE',
    alphaLabel: '=',
    type: 'function',
    description: 'Évalue une expression littérale pour différentes valeurs numériques de ses variables.',
    shiftDescription: 'SOLVE : résout numériquement une égalité par la méthode de Newton.',
    alphaDescription: '= : signe d\'égalité pour écrire une équation dans le solveur.',
    associatedFunctions: ['evaluation-rapide-calc', 'solveur-numerique-solve'],
    astuce: 'Ne confonds pas ALPHA + CALC (= pour écrire une équation) avec la touche = en bas (qui lance le calcul) !'
  },
  {
    code: 'INT_DX',
    label: '∫dx',
    shiftLabel: 'd/dx',
    alphaLabel: ':',
    type: 'function',
    description: 'Calcule l\'intégrale numérique définie d\'une fonction entre deux bornes a et b.',
    shiftDescription: 'd/dx : calcule le nombre dérivé f\'(a) (coefficient directeur de la tangente) en x = a.',
    alphaDescription: ': : séparateur d\'instructions pour enchaîner plusieurs calculs en une seule ligne.',
    associatedFunctions: ['integrale-numerique-gauss', 'derivee-numerique-ddx'],
    astuce: 'Pour vérifier une dérivée calculée à la main en contrôle : compare f\'(a) avec d/dx(f(x)) en un point x = a.'
  },
  {
    code: 'SD',
    label: 'S<=>D',
    type: 'function',
    description: 'Bascule instantanément entre l\'écriture exacte (fraction, racine, π) et l\'écriture décimale approchée.',
    associatedFunctions: ['fraction-decimal-sd'],
    astuce: 'Une pression = décimal, une nouvelle pression = retour à la fraction exacte. La touche la plus pressée au lycée !'
  },
  {
    code: 'ANS',
    label: 'Ans',
    shiftLabel: 'DRG►',
    type: 'function',
    description: 'Rappelle la valeur du dernier résultat calculé et validé par =.',
    shiftDescription: 'DRG► : permet de forcer une unité d\'angle ponctuelle (Degré °, Radian r, Grade g) sans changer le SETUP.',
    associatedFunctions: ['suites-recurrentes-ans'],
    astuce: 'Pour les suites récurrentes un+1 = f(un) : tape u0 puis =, puis tape l\'expression avec Ans et appuie sur = en boucle !'
  },
  {
    code: 'ENG',
    label: 'ENG',
    shiftLabel: '←',
    alphaLabel: 'i',
    type: 'function',
    description: 'Convertit l\'exposant de dix en multiple de 3 (notation ingénieur : k, M, µ, n...).',
    alphaDescription: 'i : symbole de l\'unité imaginaire pour les nombres complexes en MODE 2 (CMPLX).',
    associatedFunctions: ['nombres-complexes-cmplx'],
    astuce: 'En MODE 2 (CMPLX), appuie directement sur ENG pour insérer le i complexe.'
  },
  {
    code: 'FRAC',
    label: '■/□',
    shiftLabel: '■ ■/□',
    type: 'operator',
    description: 'Insère une barre de fraction naturelle pour écrire numérateur et dénominateur superposés.',
    associatedFunctions: ['fraction-decimal-sd'],
    astuce: 'Utilise la flèche du bas ▼ pour passer au dénominateur, et la flèche droite ► pour sortir de la fraction.'
  },
  {
    code: 'ROOT',
    label: '√',
    shiftLabel: '³√',
    type: 'operator',
    description: 'Calcule la racine carrée naturelle d\'un nombre ou d\'une expression.',
    shiftDescription: '³√ : racine cubique.',
    associatedFunctions: ['second-degre-eqn'],
    astuce: 'Pense à appuyer sur ► pour sortir de sous la racine avant de taper les additions suivantes.'
  },
  {
    code: 'POW2',
    label: 'x²',
    shiftLabel: 'x³',
    type: 'operator',
    description: 'Élève le nombre ou l\'expression précédente au carré.',
    shiftDescription: 'x³ : élève au cube.',
    associatedFunctions: ['second-degre-eqn', 'tableau-valeurs-table'],
    astuce: 'Pour des puissances supérieures (x⁴, xⁿ), utilise la touche voisine [ x^■ ].'
  },
  {
    code: 'LOG_SIGMA',
    label: 'log',
    shiftLabel: 'Σ',
    type: 'function',
    description: 'Logarithme décimal en base 10.',
    shiftDescription: 'Σ : opérateur de sommation discrète pour les suites numériques.',
    associatedFunctions: ['somme-discrete-sigma-suites'],
    astuce: 'Pour calculer la somme des 50 premiers termes d\'une suite sans faire 50 additions.'
  },
  {
    code: 'PAREN_CLOSE',
    label: ')',
    shiftLabel: ',',
    alphaLabel: 'X',
    type: 'operator',
    description: 'Parenthèse fermante.',
    alphaDescription: 'X : la variable indispensable pour le mode TABLE, EQN, SOLVE et la dérivation d/dx.',
    associatedFunctions: ['tableau-valeurs-table', 'derivee-numerique-ddx', 'solveur-numerique-solve', 'evaluation-rapide-calc'],
    astuce: 'ALPHA + ) est la combinaison indispensable pour taper la variable X sur la fx-991ES.'
  },
  {
    code: 'KEY_7',
    label: '7',
    shiftLabel: 'CONST',
    type: 'digit',
    description: 'Chiffre 7.',
    shiftDescription: 'CONST : ouvre le catalogue des 40 constantes scientifiques physiques et chimiques (code 01 à 40).',
    associatedFunctions: ['constantes-scientifiques-physique'],
    astuce: 'Exemples utiles : 28 pour c (vitesse lumière), 35 pour g (gravité terrestre).'
  },
  {
    code: 'KEY_8',
    label: '8',
    shiftLabel: 'CONV',
    type: 'digit',
    description: 'Chiffre 8.',
    shiftDescription: 'CONV : convertit entre 40 unités métriques et impériales (km/h ↔ m/s, atm ↔ Pa, etc.).',
    associatedFunctions: ['conversions-unites-conv'],
    astuce: 'Tape d\'abord la valeur à convertir, puis SHIFT 8 et le code à deux chiffres.'
  },
  {
    code: 'KEY_9',
    label: '9',
    shiftLabel: 'CLR',
    type: 'digit',
    description: 'Chiffre 9.',
    shiftDescription: 'CLR : réinitialise le Setup (1), les Mémoires (2) ou effectue une remise à zéro totale d\'usine (3 : All).',
    associatedFunctions: ['reinitialisation-complete-clr'],
    astuce: 'En cas de bug ou d\'affichage inattendu : fais SHIFT 9 3 = AC.'
  },
  {
    code: 'KEY_4',
    label: '4',
    shiftLabel: 'MATRIX',
    type: 'digit',
    description: 'Chiffre 4.',
    shiftDescription: 'MATRIX : menu d\'opérations sur les matrices en MODE 6 (MatA, MatB, det, transposée).',
    associatedFunctions: ['matrices-determinant-inverse'],
    astuce: 'Fonctionne quand la calculatrice est en mode MATRIX (MODE 6).'
  },
  {
    code: 'KEY_5',
    label: '5',
    shiftLabel: 'VECTOR',
    type: 'digit',
    description: 'Chiffre 5.',
    shiftDescription: 'VECTOR : menu d\'opérations sur les vecteurs en MODE 7 (VctA, VctB, produit scalaire Dot, produit vectoriel).',
    associatedFunctions: ['produit-scalaire-vector'],
    astuce: 'Touche 7 dans le sous-menu pour l\'opérateur produit scalaire Dot (•).'
  },
  {
    code: 'KEY_1',
    label: '1',
    shiftLabel: 'STAT',
    type: 'digit',
    description: 'Chiffre 1.',
    shiftDescription: 'STAT : menu des statistiques en MODE 3 (données, somme ∑, moyenne x̄, écart-type σx, min/max).',
    associatedFunctions: ['statistiques-1var', 'stats-colonne-freq'],
    astuce: 'Après avoir saisi tes données et appuyé sur AC, fais SHIFT 1 pour ouvrir les résultats statistiques.'
  },
  {
    code: 'KEY_DIV',
    label: '÷',
    shiftLabel: 'nCr',
    type: 'operator',
    description: 'Opération de division.',
    shiftDescription: 'nCr : combinaisons (k parmi n) pour les probabilités et la loi binomiale.',
    associatedFunctions: ['denombrement-ncr-factorielle'],
    astuce: 'Tape n d\'abord (le grand nombre), puis SHIFT ÷, puis k (le petit nombre).'
  },
  {
    code: 'KEY_MUL',
    label: '×',
    shiftLabel: 'nPr',
    type: 'operator',
    description: 'Opération de multiplication.',
    shiftDescription: 'nPr : permutations / arrangements ordonnés de k parmi n.',
    associatedFunctions: ['denombrement-ncr-factorielle'],
    astuce: 'Utilisé pour dénombrer quand l\'ordre des choix compte.'
  },
  {
    code: 'NEG',
    label: '(-)',
    alphaLabel: 'A',
    type: 'operator',
    description: 'Moins unaire pour exprimer un nombre négatif (ex: -5 ou -x).',
    alphaDescription: 'A : variable mémoire A.',
    associatedFunctions: ['second-degre-eqn'],
    astuce: 'Ne confonds pas la touche (-) avec la soustraction - ! Une erreur de touche ici engendre Syntax ERROR.'
  },
  {
    code: 'RCL',
    label: 'RCL',
    shiftLabel: 'STO',
    type: 'function',
    description: 'Rappelle la valeur stockée dans une variable (A, B, C, D, E, F, X, Y, M).',
    shiftDescription: 'STO : enregistre le dernier résultat dans une variable mémoire.',
    associatedFunctions: ['evaluation-rapide-calc'],
    astuce: 'Pour stocker un calcul dans A : fais SHIFT + RCL (STO) puis la touche (-).'
  }
];
