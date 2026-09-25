import { ProblemGuide } from '../types/calculator';

export const PROBLEM_GUIDES: ProblemGuide[] = [
  {
    id: 'resoudre-degre-2',
    question: 'Je veux résoudre une équation du second degré (ax² + bx + c = 0)',
    contexte: 'Trouver les racines x₁ et x₂, le discriminant Δ, factoriser un polynôme',
    icon: '🧮',
    functionId: 'second-degre-eqn',
    touchesExpress: ['MODE', '5', '3', 'a', '=', 'b', '=', 'c', '=', '='],
    apercuResultat: 'X₁ = ... et X₂ = ... (forme exacte avec fractions ou racines)'
  },
  {
    id: 'tableau-valeurs',
    question: 'Je veux faire un tableau de valeurs d\'une fonction',
    contexte: 'Tracer une courbe sur papier millimétré, trouver où f(x) change de signe',
    icon: '📋',
    functionId: 'tableau-valeurs-table',
    touchesExpress: ['MODE', '8', 'f(X)', '=', 'Start', '=', 'End', '=', 'Step', '='],
    apercuResultat: 'Tableau 2 colonnes X et f(X) jusqu\'à 30 valeurs'
  },
  {
    id: 'nombre-derive-tangente',
    question: 'Je veux calculer un nombre dérivé f\'(a) ou la pente de la tangente',
    contexte: 'Vérifier la dérivée en un point, équation de tangente y = f\'(a)(x-a) + f(a)',
    icon: '📈',
    functionId: 'derivee-numerique-ddx',
    touchesExpress: ['SHIFT', '∫dx', 'formule', '►', 'valeur a', '='],
    apercuResultat: 'Pente numérique exacte au point a'
  },
  {
    id: 'radians-degres',
    question: 'Je veux travailler avec des radians ou passer en degrés',
    contexte: 'Trigonométrie, cos(x), sin(x), cercle trigonométrique (angles en radians)',
    icon: '📐',
    functionId: 'angle-degre-radian-setup',
    touchesExpress: ['SHIFT', 'MODE', '4 (Radian) ou 3 (Degré)'],
    apercuResultat: 'Indicateur R ou D en haut de l\'écran LCD'
  },
  {
    id: 'suite-recurrente',
    question: 'Je veux calculer les termes successifs d\'une suite (uₙ₊₁ = f(uₙ))',
    contexte: 'Calculer u₁, u₂, u₃... u₁₀ rapidement sans retaper la formule',
    icon: '🔢',
    functionId: 'suites-recurrentes-ans',
    touchesExpress: ['u₀', '=', 'formule avec Ans', '=', '=', '='],
    apercuResultat: 'Chaque appui sur = calcule le terme suivant instantanément'
  },
  {
    id: 'systeme-2-inconnues',
    question: 'Je veux trouver les solutions d\'un système de 2 équations',
    contexte: 'Intersection de deux droites, résolution de systèmes ax + by = c',
    icon: '⚖️',
    functionId: 'systeme-lineaire-2x2',
    touchesExpress: ['MODE', '5', '1', 'a₁', '=', 'b₁', '=', 'c₁', '=', '...'],
    apercuResultat: 'X = ... puis Y = ... (coordonnées exactes du point d\'intersection)'
  },
  {
    id: 'stats-moyenne-ecart-type',
    question: 'Je veux calculer une moyenne et un écart-type en statistiques',
    contexte: 'Série statistique avec ou sans effectifs / coefficients',
    icon: '📊',
    functionId: 'statistiques-1var',
    touchesExpress: ['MODE', '3', '1', 'valeurs', 'AC', 'SHIFT', '1', '4', '2 (x̄)'],
    apercuResultat: 'Moyenne x̄, écart-type xσn, effectif total n'
  },
  {
    id: 'probabilites-combinaisons',
    question: 'Je veux calculer des combinaisons (nCr) ou factorielles (n!)',
    contexte: 'Dénombrement, loi binomiale, tirages simultanés sans remise',
    icon: '🎲',
    functionId: 'denombrement-ncr-factorielle',
    touchesExpress: ['n', 'SHIFT', '÷ (nCr)', 'k', '='],
    apercuResultat: 'Nombre de combinaisons possibles'
  },
  {
    id: 'vecteurs-produit-scalaire',
    question: 'Je veux calculer le produit scalaire de deux vecteurs',
    contexte: 'Orthogonalité (u·v = 0), calcul d\'angles, géométrie analytique',
    icon: '🧭',
    functionId: 'produit-scalaire-vector',
    touchesExpress: ['MODE', '7', 'saisir VctA et VctB', 'VctA Dot VctB', '='],
    apercuResultat: 'Scalaire numérique u·v'
  },
  {
    id: 'fraction-decimal',
    question: 'Je veux basculer entre fraction, racine et écriture décimale',
    contexte: 'Obtenir la valeur exacte pour la copie ou l\'arrondi décimal',
    icon: '🔄',
    functionId: 'fraction-decimal-sd',
    touchesExpress: ['S<=>D'],
    apercuResultat: 'Bascule immédiate : fraction ↔ décimal ↔ forme simplifiée'
  },
  {
    id: 'resoudre-equation-solve',
    question: 'Je veux résoudre une équation quelconque sans isoler x',
    contexte: 'Équations avec exponentielle, logarithme ou fractions complexes',
    icon: '⚡',
    functionId: 'solveur-numerique-solve',
    touchesExpress: ['taper équation avec ALPHA CALC (=)', 'SHIFT', 'CALC (SOLVE)', '='],
    apercuResultat: 'Valeur numérique approchée de x par l\'algorithme de Newton'
  },
  {
    id: 'somme-termes-sigma',
    question: 'Je veux calculer la somme de termes d\'une suite (touche Σ)',
    contexte: 'Somme des termes d\'une suite arithmétique ou géométrique',
    icon: '∑',
    functionId: 'somme-discrete-sigma-suites',
    touchesExpress: ['SHIFT', 'log■□ (Σ)', 'formule', 'début', 'fin', '='],
    apercuResultat: 'Somme cumulée exacte'
  },
  {
    id: 'matrices-inverse-det',
    question: 'Je veux manipuler des matrices (déterminant, inverse A⁻¹)',
    contexte: 'Calcul matriciel, système linéaire sous forme matricielle AX = B',
    icon: '⬛',
    functionId: 'matrices-determinant-inverse',
    touchesExpress: ['MODE', '6', '1 (MatA)', 'valeurs', 'AC', 'SHIFT', '4'],
    apercuResultat: 'Déterminant det(A) ou matrice inverse fractionnaire'
  },
  {
    id: 'complexes-module-arg',
    question: 'Je veux calculer avec des nombres complexes (module, argument)',
    contexte: 'Forme algébrique a+ib, module |z|, argument arg(z), forme polaire',
    icon: '🌀',
    functionId: 'nombres-complexes-cmplx',
    touchesExpress: ['MODE', '2', 'saisie i avec ENG', 'SHIFT', '2'],
    apercuResultat: 'Module r, argument θ, conjugué ou forme polaire r∠θ'
  },
  {
    id: 'dms-degres-minutes',
    question: 'Je veux convertir des heures ou angles décimaux en ° \' "',
    contexte: 'Passer de 2.75h à 2h45min ou mesurer des angles en degrés, minutes, secondes',
    icon: '⏱️',
    functionId: 'degres-minutes-secondes-dms',
    touchesExpress: ['2.75', '=', '° \' "'],
    apercuResultat: '2°45\'0" (2 degrés 45 minutes 0 seconde)'
  },
  {
    id: 'logarithmes-exponentielles',
    question: 'Je veux calculer ln, exponentielle ou un log à base quelconque',
    contexte: 'Fonctions transcendantes ln(x), eˣ et log_a(b)',
    icon: '📉',
    functionId: 'logarithmes-ln-exponentielle',
    touchesExpress: ['ln', 'valeur', ')', '=', 'ou', 'SHIFT', 'ln (e^■)'],
    apercuResultat: 'Valeur exacte avec e ou valeur décimale approchée'
  }
];
