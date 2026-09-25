export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const COMPREHENSIVE_QUIZ_DATA: Record<string, QuizQuestion> = {
  'second-degre-eqn': {
    question: 'Pour résoudre ax² + bx + c = 0, quel numéro faut-il choisir dans le menu MODE 5 ?',
    options: ['1: anX + bnY = cn', '2: anX + bnY + cnZ = dn', '3: aX² + bX + c = 0', '4: aX³ + bX² + cX + d = 0'],
    correctIndex: 2,
    explanation: 'Le numéro 3 correspond à l\'équation quadratique de degré 2 (aX² + bX + c = 0).'
  },
  'tableau-valeurs-table': {
    question: 'Comment tape-t-on la variable X dans la formule de la fonction f(X) en mode TABLE ?',
    options: ['Touche de multiplication [ × ]', 'Touche [ ALPHA ] puis [ ) ] (X rouge)', 'Touche [ SHIFT ] puis [ MODE ]'],
    correctIndex: 1,
    explanation: 'La variable X se tape impérativement avec [ALPHA] suivi de la parenthèse fermante [ ) ] où se trouve le X rouge.'
  },
  'derivee-numerique-ddx': {
    question: 'Quelle combinaison permet d\'accéder à la dérivée numérique d/dx sur la fx-991ES ?',
    options: ['[ SHIFT ] + [ ∫dx ]', '[ ALPHA ] + [ CALC ]', '[ MODE ] + [ 1 ]'],
    correctIndex: 0,
    explanation: 'La mention d/dx est inscrite en jaune au-dessus de la touche intégrale [ ∫dx ], donc accessible avec [SHIFT].'
  },
  'fraction-decimal-sd': {
    question: 'Quelle touche permet d\'alterner instantanément entre écriture fractionnaire exacte et valeur décimale approchée ?',
    options: ['La touche [ S<=>D ]', 'La touche [ ab/c ]', 'La touche [ ENG ]'],
    correctIndex: 0,
    explanation: 'La touche S<=>D (Standard to Decimal) bascule instantanément entre fraction irréductible et écriture décimale.'
  },
  'angle-degre-radian-setup': {
    question: 'Quel indicateur doit être affiché tout en haut du LCD pour être certain d\'être en Radians ?',
    options: ['La lettre "D"', 'La lettre "R"', 'La lettre "G"'],
    correctIndex: 1,
    explanation: '"R" = Radians (SHIFT MODE 4), "D" = Degrés (SHIFT MODE 3). En 1ère S2, la plupart des calculs trigo sont en Radians.'
  },
  'suites-recurrentes-ans': {
    question: 'Quelle touche magique permet de réutiliser le résultat précédent pour calculer un+1 = f(un) ?',
    options: ['La touche [ RCL ]', 'La touche [ Ans ]', 'La touche [ M+ ]'],
    correctIndex: 1,
    explanation: 'La touche [ Ans ] retient la valeur du dernier calcul validé par [ = ]. Chaque appui sur [ = ] applique à nouveau la formule.'
  },
  'statistiques-1var': {
    question: 'Après avoir saisi les données en MODE 3 1 et appuyé sur AC, comment retrouve-t-on le menu pour afficher la moyenne x̄ ?',
    options: ['[ SHIFT ] + [ 1 ] (STAT) puis [ 5 ] (Var)', '[ MODE ] + [ 1 ]', '[ ALPHA ] + [ CALC ]'],
    correctIndex: 0,
    explanation: 'SHIFT + 1 ouvre le menu des statistiques. Le sous-menu 5 (Var) contient n, x̄ (la moyenne) et xσn (l\'écart-type).'
  },
  'stats-colonne-freq': {
    question: 'Comment activer la colonne FREQ pour saisir les coefficients des notes ?',
    options: ['SHIFT MODE (SETUP) → ▼ → 4 (STAT) → 1 (ON)', 'MODE 3 2', 'Touche [ ab/c ]'],
    correctIndex: 0,
    explanation: 'Dans SETUP, la seconde page (flèche bas ▼) contient l\'option 4 (STAT) permettant d\'activer la fréquence (1:ON).'
  },
  'denombrement-ncr-factorielle': {
    question: 'Pour calculer (3 parmi 10), quelle syntaxe tape-t-on sur la fx-991ES ?',
    options: ['10 puis [ SHIFT ] [ ÷ ] puis 3', '3 puis [ SHIFT ] [ ÷ ] puis 10', '10 puis [ ab/c ] puis 3'],
    correctIndex: 0,
    explanation: 'La syntaxe est n C k. On tape d\'abord le grand nombre n (10), puis SHIFT ÷ (nCr), puis le petit nombre k (3).'
  },
  'solveur-numerique-solve': {
    question: 'Pour lancer le calcul du solveur, quelle touche dois-tu presser après avoir écrit l\'équation ?',
    options: ['La touche [ = ] en bas à droite', '[ SHIFT ] + [ CALC ] (SOLVE)', 'La touche [ ON ]'],
    correctIndex: 1,
    explanation: 'Appuyer sur [ = ] donnerait Syntax ERROR. Il faut impérativement lancer la résolution avec [SHIFT] + [CALC] (SOLVE) !'
  },
  'systeme-lineaire-2x2': {
    question: 'Dans quelle forme doivent être écrites les équations pour le mode MODE 5 1 ?',
    options: ['ax + by = c (constante à droite)', 'ax + by + c = 0 (constante à gauche)', 'y = ax + b'],
    correctIndex: 0,
    explanation: 'La fx-991ES attend anX + bnY = cn : le terme constant c doit obligatoirement être à droite du signe égal.'
  },
  'produit-scalaire-vector': {
    question: 'Quel opérateur correspond au produit scalaire dans le menu VECTOR (SHIFT 5) ?',
    options: ['L\'opérateur 7: Dot (•)', 'La touche de multiplication [ × ]', 'L\'opérateur 3: MatA'],
    correctIndex: 0,
    explanation: 'Dans le menu VECTOR (SHIFT 5), le choix 7 (Dot) insère le point • qui calcule le produit scalaire.'
  },
  'integrale-numerique-gauss': {
    question: 'Que calcule la touche [ ∫dx ] sur la Casio fx-991ES ?',
    options: ['L\'intégrale numérique définie entre a et b', 'Une primitive symbolique avec constante + C', 'Une dérivée seconde'],
    correctIndex: 0,
    explanation: 'La fx-991ES calcule l\'intégrale numérique définie (aire sous la courbe) par la méthode de Gauss-Kronrod, pas de calcul formel.'
  },
  'nombres-complexes-cmplx': {
    question: 'En MODE 2 (CMPLX), sur quelle touche appuie-t-on pour insérer le symbole imaginaire i ?',
    options: ['Directement sur [ ENG ]', 'Sur [ ALPHA ] + [ ENG ]', 'Sur [ SHIFT ] + [ 0 ]'],
    correctIndex: 0,
    explanation: 'En mode CMPLX (MODE 2), la touche [ENG] tape directement l\'unité imaginaire i (sans même appuyer sur ALPHA).'
  },
  'matrices-determinant-inverse': {
    question: 'Comment calcule-t-on la matrice inverse de MatA en MODE 6 ?',
    options: ['Rappeler MatA (SHIFT 4 3) puis presser [ x⁻¹ ]', 'Diviser 1 par MatA', 'SHIFT 4 6'],
    correctIndex: 0,
    explanation: 'Il suffit d\'afficher MatA puis d\'appuyer sur la touche d\'inversion [ x⁻¹ ] suivie de [ = ].'
  },
  'evaluation-rapide-calc': {
    question: 'À quoi sert la touche [ CALC ] en mode standard (MODE 1) ?',
    options: ['Évaluer une formule pour différentes valeurs de X sans la retaper', 'Calculer le déterminant', 'Changer la luminosité'],
    correctIndex: 0,
    explanation: 'CALC permet de taper une formule littérale une seule fois (ex: 3X² - 2X + 1), puis d\'entrer plusieurs valeurs successives de X.'
  },
  'reinitialisation-complete-clr': {
    question: 'Quelle est la combinaison pour réinitialiser complètement la calculatrice aux réglages d\'usine ?',
    options: ['[ SHIFT ] + [ 9 ] (CLR) puis [ 3 ] (All) puis [ = ]', '[ MODE ] + [ 1 ]', '[ ON ] + [ AC ]'],
    correctIndex: 0,
    explanation: 'SHIFT + 9 (CLR) ouvre le menu de réinitialisation. Le choix 3 (All) suivi de = remet toute la machine à neuf.'
  },
  'somme-discrete-sigma-suites': {
    question: 'Quelle touche active le symbole de sommation Σ sur la fx-991ES ?',
    options: ['[ SHIFT ] + [ log ]', '[ ALPHA ] + [ x² ]', '[ MODE ] + [ 8 ]'],
    correctIndex: 0,
    explanation: 'Le symbole de somme Σ est sérigraphié en jaune au-dessus de la touche [log], donc accessible avec [SHIFT].'
  }
};
