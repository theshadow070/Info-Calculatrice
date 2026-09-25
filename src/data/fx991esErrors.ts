import { CasioErrorInfo } from '../types/calculator';

export const FX991ES_ERRORS: CasioErrorInfo[] = [
  {
    code: 'MATH_ERROR',
    titre: 'Math ERROR (Erreur mathématique)',
    signification: 'Le calcul demandé est mathématiquement impossible dans l\'ensemble considéré ou dépasse les limites de calcul de la machine.',
    causesCourantes: [
      'Division par zéro (ex: 5 ÷ 0 ou dénominateur nul).',
      'Racine carrée d\'un nombre négatif en mode COMP (ex: √(-4)).',
      'Logarithme d\'un nombre négatif ou nul (ex: ln(0) ou log(-2)).',
      'Tangente d\'un angle à 90° (π/2 radians).',
      'Combinaison nCr avec k > n (ex: 3 C 5 au lieu de 5 C 3).',
      'Dépassement de capacité : résultat supérieur à 9.999999999 × 10⁹⁹.'
    ],
    solutionImmediate: 'Appuie sur ◄ ou ► pour placer le curseur exactement sur l\'élément mathématique qui bloque et corrige-le.',
    touchesPourCorriger: ['◄', '►', 'DEL', 'AC'],
    exempleS2: 'Calculer la pente m = (yB - yA) / (xB - xA) avec deux points de même abscisse (xB = xA).'
  },
  {
    code: 'SYNTAX_ERROR',
    titre: 'Syntax ERROR (Erreur de syntaxe)',
    signification: 'La formule contient un symbole mal placé, une parenthèse orpheline ou une touche inappropriée.',
    causesCourantes: [
      'Deux opérateurs consécutifs (ex: 5 ++ 2 ou 4 × ÷ 3).',
      'Confusion entre le moins de négation (-) et le moins de soustraction -.',
      'Oubli de fermer une parenthèse avant d\'appuyer sur =.',
      'Appui sur = au lieu de SHIFT + CALC dans une équation du solveur.',
      'Utilisation du signe égal rouge (=) en mode normal sans lancer SOLVE.'
    ],
    solutionImmediate: 'Appuie sur ◄ ou ► : le curseur se positionne précisément sur la faute de syntaxe ! Remplace le caractère ou supprime-le avec DEL.',
    touchesPourCorriger: ['◄', '►', 'DEL'],
    exempleS2: 'Taper -3² en tapant la soustraction - au lieu du signe négatif unaire (-).'
  },
  {
    code: 'WRONG_ANGLE_UNIT',
    titre: 'Résultats trigonométriques aberrants (Mauvais angle)',
    signification: 'Tu calcules un cosinus ou sinus en pensant être en degrés alors que la calculatrice est en radians (ou inversement).',
    causesCourantes: [
      'cos(60) donne -0.952... au lieu de 0.5 (la calculatrice est en Radians !).',
      'sin(π/2) donne 0.027... au lieu de 1 (la calculatrice est en Degrés !).'
    ],
    solutionImmediate: 'Regarde le petit indicateur tout en haut du LCD. Si tu vois "D", tu es en degrés. Si tu vois "R", tu es en radians.',
    touchesPourCorriger: ['SHIFT', 'MODE', '4 (Radian) ou 3 (Degré)'],
    exempleS2: 'En 1ère S2, 90% des exercices d\'analyse et trigonométrie se font en RADIANS (SHIFT MODE 4).'
  },
  {
    code: 'INSUFFICIENT_MEM',
    titre: 'Insufficient MEM (Mémoire insuffisante en TABLE)',
    signification: 'Le tableau de valeurs f(x) demandé dépasse le nombre maximum de 30 lignes autorisées par la mémoire de la fx-991ES.',
    causesCourantes: [
      'Intervalle trop large par rapport au pas : par exemple de Start = 0 à End = 100 avec un Step de 1 (donnerait 101 lignes !).',
      'Pas (Step) trop petit : par exemple Start = 0, End = 5 avec Step = 0.05 (donnerait 100 lignes).'
    ],
    solutionImmediate: 'Augmente la valeur du pas (Step) ou réduis la plage entre Start et End pour avoir moins de 30 lignes.',
    touchesPourCorriger: ['AC', 'Step adapté'],
    exempleS2: 'Pour étudier f(x) de -5 à 5, choisis un pas Step de 0.5 ou 1 (11 à 21 lignes), pas 0.1.'
  },
  {
    code: 'DIM_ERROR',
    titre: 'Dim ERROR (Erreur de dimension matricielle/vectorielle)',
    signification: 'Les dimensions des matrices ou vecteurs multipliés ou additionnés ne sont pas compatibles.',
    causesCourantes: [
      'Additionner deux matrices de tailles différentes (ex: 2x2 avec 3x3).',
      'Multiplier deux matrices A (2x3) et B (2x2) : le nombre de colonnes de A doit être égal au nombre de lignes de B.',
      'Produit vectoriel ou scalaire entre un vecteur 2D et un vecteur 3D.'
    ],
    solutionImmediate: 'Vérifie les dimensions de tes objets dans SHIFT 4 1 (Dim Mat) ou SHIFT 5 1 (Dim Vct).',
    touchesPourCorriger: ['SHIFT', '4 ou 5', '1 (Dim)'],
    exempleS2: 'Tenter de multiplier MatA (2x3) par MatB (2x2) sans inverser l\'ordre.'
  },
  {
    code: 'CANNOT_SOLVE',
    titre: 'Can\'t Solve (Équation non résolue par SOLVE)',
    signification: 'L\'algorithme de Newton n\'a pas réussi à converger vers une solution réelle à partir de la valeur de départ.',
    causesCourantes: [
      'L\'équation n\'a aucune solution réelle (ex: X² + 1 = 0).',
      'La dérivée s\'annule au voisinage du point de départ.',
      'La valeur initiale est trop éloignée de la solution.'
    ],
    solutionImmediate: 'Lorsqu\'elle affiche "Solve for X", donne une estimation manuelle plus proche de la racine attendue (ex: tape 10 ou -5 puis =).',
    touchesPourCorriger: ['SHIFT', 'CALC', 'Nouvelle valeur initiale', '='],
    exempleS2: 'Résoudre x² - 100 = 0 en partant de 0 bloque parfois. En partant de 5, la calculatrice converge immédiatement vers 10.'
  }
];
