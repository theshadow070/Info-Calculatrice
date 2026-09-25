import { CasioFunction } from '../types/calculator';

// Synonyms and mathematical intent dictionary
const INTENT_SYNONYMS: Record<string, string[]> = {
  'derivee': ['f\'(x)', 'f\'(a)', 'nombre derive', 'tangente', 'pente', 'ddx', 'd/dx', 'taux de variation', 'differentielle'],
  'second_degre': ['racines', 'delta', 'discriminant', 'ax2', 'ax^2', 'polynome', 'equation du second degre', 'second degre', 'degre 2', 'quadratique', 'x1', 'x2'],
  'tableau': ['table', 'table de valeurs', 'tracer courbe', 'f(x)', 'start', 'end', 'step', 'pas', 'points', 'graphe'],
  'trigonometrie': ['cosinus', 'sinus', 'tangente', 'sin', 'cos', 'tan', 'arcsin', 'arccos', 'arctan', 'cos-1', 'sin-1'],
  'angle_unite': ['radians', 'radian', 'degre', 'degres', 'grad', 'grade', 'cercle trigonometrique', 'setup deg rad', 'rad deg'],
  'suites': ['ans', 'u_n', 'u(n)', 'un+1', 'u(n+1)', 'recurrence', 'termes', 'terme suivant', 'arithmetique', 'geometrique', 'raison'],
  'systeme': ['systemes', '2 inconnues', 'deux inconnues', '3 inconnues', 'intersection', 'droites', 'ax+by=c', 'cramer'],
  'statistiques': ['moyenne', 'ecart type', 'variance', 'effectif', 'freq', 'frequence', 'serie', 'stats', 'xbar', 'xbarre', 'mediane'],
  'probabilites': ['ncr', 'npr', 'combinaison', 'combinaisons', 'factorielle', 'n!', 'tirage', 'binomiale', 'denombrement', 'arrangement', 'loi normale'],
  'vecteurs': ['produit scalaire', 'dot', 'orthogonalite', 'norme', 'coordonnees', 'vecteur', 'vcta', 'vctb', 'cross'],
  'fraction': ['s<=>d', 'sd', 'virgule', 'decimal', 'forme exacte', 'simplifier', 'fractionnaire', 'a b/c', 'd/c'],
  'puissances': ['puissance', 'puissances', 'exposant', 'racine', 'racines', 'racine carree', 'racine cubique', 'racine nieme', 'x^2', 'x^3'],
  'solve': ['solveur', 'inconnue', 'resoudre n importe quelle', 'calculer x', 'equation quelconque', 'newton'],
  'sigma': ['somme', 'somme de termes', 'sigma', 'cumul', 'serie numerique'],
  'matrices': ['matrice', 'matrices', 'determinant', 'det', 'inverse', 'mata', 'matb'],
  'complexes': ['complexe', 'complexes', 'module', 'argument', 'forme polaire', 'forme algebrique', 'cmplx', 'conjugue']
};

const STOP_WORDS = new Set([
  'comment', 'faire', 'un', 'une', 'des', 'le', 'la', 'les', 'du', 'au', 'aux',
  'calculer', 'trouver', 'obtenir', 'je', 'veux', 'peux', 'savoir', 'sur', 'ma',
  'mon', 'mes', 'casio', 'fx', '991es', 'pour', 'avec', 'dans', 'en', 'et', 'ou',
  'de', 'd', 'l', 'a', 'quel', 'quelle', 'quels', 'quelles'
]);

// Strip accents and non-alphanumeric (except math symbols)
export function normalizeText(str: string): string {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, ' ')
    .trim();
}

export function searchFunctions(functions: CasioFunction[], rawQuery: string): CasioFunction[] {
  const normalized = normalizeText(rawQuery);
  if (!normalized) return functions;

  // Tokenize & remove stop words
  const rawTokens = normalized.split(/\s+/).filter(Boolean);
  const meaningfulTokens = rawTokens.filter(t => !STOP_WORDS.has(t));
  const tokens = meaningfulTokens.length > 0 ? meaningfulTokens : rawTokens;

  // Expand query with synonyms
  const searchTargets = new Set<string>(tokens);
  for (const token of tokens) {
    for (const [key, syns] of Object.entries(INTENT_SYNONYMS)) {
      if (token === key || syns.some(s => normalizeText(s).includes(token))) {
        searchTargets.add(key);
        syns.forEach(s => searchTargets.add(normalizeText(s)));
      }
    }
  }

  // Score each function
  const scored = functions.map(func => {
    let score = 0;
    const nameNorm = normalizeText(func.nom);
    const descNorm = normalizeText(func.description);
    const modeNorm = normalizeText(func.modeCasio);
    const retNorm = normalizeText(func.aRetenir);
    const contextNorm = normalizeText(func.contexteScolaire);
    const keywordsNorm = func.motsClesRecherche.map(k => normalizeText(k));

    // Exact full query match in title gets massive boost
    if (nameNorm.includes(normalized)) score += 120;
    if (keywordsNorm.some(k => k === normalized)) score += 100;
    if (descNorm.includes(normalized)) score += 40;

    // Check individual targets
    for (const target of searchTargets) {
      if (nameNorm.includes(target)) score += 30;
      if (modeNorm.includes(target)) score += 20;
      if (keywordsNorm.some(k => k.includes(target))) score += 25;
      if (descNorm.includes(target)) score += 10;
      if (retNorm.includes(target)) score += 10;
      if (contextNorm.includes(target)) score += 5;
    }

    // === SPECIFIC SMART BOOSTERS FOR MATH INTENTS ===

    // Second degré : "second degré", "équation second degré", "résoudre x²", "delta", "ax²"
    const isSecondDegreQuery = (
      normalized.includes('second degre') ||
      normalized.includes('degre 2') ||
      (normalized.includes('degre') && (normalized.includes('equation') || normalized.includes('polynome') || normalized.includes('racine') || normalized.includes('x2') || normalized.includes('x²'))) ||
      (normalized.includes('resoudre') && (normalized.includes('x2') || normalized.includes('x²') || normalized.includes('ax2'))) ||
      normalized.includes('delta') ||
      normalized.includes('discriminant')
    );
    if (isSecondDegreQuery && func.id === 'second-degre-eqn') {
      score += 400;
    }

    // Trigonométrie directe : "sinus", "cosinus", "tangente", "sin", "cos", "tan"
    const isTrigoFuncQuery = (
      normalized.includes('sinus') ||
      normalized.includes('cosinus') ||
      normalized.includes('tangente') ||
      normalized === 'sin' ||
      normalized === 'cos' ||
      normalized === 'tan'
    );
    if (isTrigoFuncQuery && func.id === 'trigonometrie-sin-cos-tan-arcsin') {
      score += 350;
    }

    // Unités d'angles : "radians", "degres" (sans second degre)
    const isAngleUnitQuery = (
      (normalized.includes('radian') || normalized.includes('radians') || (normalized.includes('degre') && !isSecondDegreQuery)) &&
      !isTrigoFuncQuery
    );
    if (isAngleUnitQuery && func.id === 'angle-degre-radian-setup') {
      score += 300;
    }

    // Dérivée : "dérivée", "f'(x)", "f'(a)", "nombre dérivé", "tangente"
    if ((normalized.includes('derive') || normalized.includes('f\'') || normalized.includes('d/dx')) && func.id === 'derivee-numerique-ddx') {
      score += 350;
    }

    // Statistiques : "statistiques", "moyenne", "écart type"
    if ((normalized.includes('stat') || normalized.includes('moyenne') || normalized.includes('ecart type') || normalized.includes('variance')) && func.id === 'statistiques-1var') {
      score += 350;
    }

    // Tableau de valeurs : "tableau", "table"
    if ((normalized.includes('tableau') || normalized === 'table' || normalized.includes('table de')) && func.id === 'tableau-valeurs-table') {
      score += 350;
    }

    // Matrices : "matrice", "matrices"
    if (normalized.includes('matrice') && func.id === 'matrices-determinant-inverse') {
      score += 350;
    }

    // Vecteurs : "vecteur", "vecteurs", "produit scalaire"
    if ((normalized.includes('vecteur') || normalized.includes('scalaire')) && func.id === 'produit-scalaire-vector') {
      score += 350;
    }

    // Fractions : "fraction", "fractions", "s<=>d"
    if (normalized.includes('fraction') && func.id === 'fraction-decimal-sd') {
      score += 350;
    }

    // Puissances & racines : "puissance", "puissances", "racine" (hors delta/second degre)
    if (normalized.includes('puissance') && func.id === 'puissances-racines-racine-nieme') {
      score += 350;
    }
    if (normalized.includes('racine') && !isSecondDegreQuery && func.id === 'puissances-racines-racine-nieme') {
      score += 300;
    }

    // Complexes : "complexe", "complexes"
    if (normalized.includes('complexe') && func.id === 'nombres-complexes-cmplx') {
      score += 350;
    }

    // Suites : "suite", "suites", "ans", "termes"
    if ((normalized.includes('suite') || normalized === 'ans' || normalized.includes('recurrence')) && func.id === 'suites-recurrentes-ans') {
      score += 300;
    }

    // Systèmes : "systeme", "inconnues"
    if (normalized.includes('system') && func.id === 'systeme-lineaire-2x2') {
      score += 250;
    }

    return { func, score };
  });

  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.func);
}
