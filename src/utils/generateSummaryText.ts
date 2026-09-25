/**
 * Générateur du résumé simplifié des commandes essentielles de la Casio fx-991ES originale (Natural-V.P.A.M.).
 * Format texte clair, optimisé pour l'impression, l'envoi par SMS/WhatsApp ou l'enregistrement dans les notes.
 */
export function generateFx991EsSummaryText(): string {
  return `════════════════════════════════════════════════════════════
    CASIO fx-991ES — RÉSUMÉ DES COMMANDES ESSENTIELLES
             Guide de poche • Première S2 & Lycée
════════════════════════════════════════════════════════════

1. ÉQUATIONS & SYSTÈMES
• Équation du 2nd degré (ax² + bx + c = 0) :
  [MODE] [5] (EQN) [3] → saisir a [=] b [=] c [=]
  → [=] donne X₁  |  [=] donne X₂ (forme exacte fractions/racines)
• Système 2 équations à 2 inconnues :
  [MODE] [5] (EQN) [1] → saisir a₁ [=] b₁ [=] c₁ [=] a₂ [=] b₂ [=] c₂ [=]
  → [=] donne X  |  [=] donne Y (intersection des droites)
• Système 3 équations à 3 inconnues :
  [MODE] [5] (EQN) [2] → saisir les 12 coefficients → [=] X, Y, Z
• Solveur d'équation quelconque (Newton) :
  En MODE 1 (COMP) : taper l'équation avec [ALPHA] [CALC] (=)
  Lancer avec [SHIFT] [CALC] (SOLVE) puis valider avec [=]

2. FONCTIONS & DÉRIVATION
• Tableau de valeurs f(x) :
  [MODE] [8] (TABLE) → saisir f(X) avec [ALPHA] [)] (X) → [=]
  → Start [=] End [=] Step [=] → grille 2 colonnes X et f(X)
• Nombre dérivé f'(a) (pente de la tangente) :
  [SHIFT] [∫dx] (d/dx) → formule en X → [►] → valeur a → [=]
• Intégrale définie ∫ f(x) dx :
  [∫dx] → formule en X → [►] borne inf → [►] borne sup → [=]
• Touche CALC (évaluer une formule pour plusieurs valeurs) :
  Taper formule avec X ou A → [CALC] → saisir valeur → [=]

3. SUITES NUMÉRIQUES
• Calculer les termes d'une suite récurrente (uₙ₊₁ = f(uₙ)) :
  Taper u₀ → [=] (enregistré dans Ans)
  Taper la formule avec la touche [Ans] (ex: 2×Ans - 3)
  Chaque appui sur [=] donne le terme suivant : u₁, u₂, u₃...
• Somme de termes d'une suite (touche Σ) :
  [SHIFT] [log□(□)] (Σ) → formule en X → borne début → borne fin → [=]

4. TRIGONOMÉTRIE & ANGLES
• Passer en RADIANS : [SHIFT] [MODE] (SETUP) [4] (Rad)  [R allumé]
• Passer en DEGRÉS  : [SHIFT] [MODE] (SETUP) [3] (Deg)  [D allumé]
• Conversion Sexagésimale (° ' ") :
  Taper la valeur décimale (ex: 2.75) → [=] → appuyer sur [° ' "]
  → affiche 2°45'0" (soit 2h 45min ou 2 degrés 45 minutes)

5. STATISTIQUES & PROBABILITÉS
• Moyenne (x̄), Écart-type (xσn), Effectif total (n) :
  [MODE] [3] (STAT) [1] (1-VAR) → entrer les valeurs avec [=]
  → [AC] → [SHIFT] [1] (STAT) [4] (Var) → [2] (x̄) ou [3] (xσn)
• Activer la colonne des effectifs (FREQ) :
  [SHIFT] [MODE] (SETUP) [▼] [4] (STAT) [1] (ON)
• Combinaisons nCr : n [SHIFT] [÷] (nCr) k [=]
• Factorielle n!   : n [SHIFT] [x⁻¹] (x!) [=]

6. GÉOMÉTRIE & VECTEURS
• Produit scalaire de deux vecteurs 3D :
  [MODE] [7] (VECTOR) [1] (VctA) [1] (dim 3) → saisir composantes
  → [AC] → [SHIFT] [5] [1] (Dim) [2] (VctB) → saisir composantes
  → [AC] → [SHIFT] [5] [3] (VctA) [SHIFT] [5] [7] (Dot) [SHIFT] [5] [4] (VctB) [=]
• Coordonnées Polaires ↔ Cartésiennes :
  [SHIFT] [+] (Pol) x , y ) [=]  |  [SHIFT] [-] (Rec) r , θ ) [=]

7. CALCUL FONDAMENTAL & RÉGLAGES
• Bascule Fraction ↔ Décimal : touche [S<=>D]
• Bascule Fraction simple ↔ Fraction mixte : [SHIFT] [S<=>D] (a b/c <=> d/c)
• Puissances et racines : [x²]  |  [SHIFT] [x²] (x³)  |  [x^□]
  Racine carrée : [√]  |  Racine cubique : [SHIFT] [√]  |  Racine n-ième : [SHIFT] [x^□]
• Mémoires variables (A, B, C, D, E, F, X, Y, M) :
  Stocker : résultat → [SHIFT] [RCL] (STO) puis touche de lettre
  Rappeler : [RCL] puis touche de lettre
• Forcer l'arrondi (Fix) : [SHIFT] [MODE] (SETUP) [6] (Fix) → nb décimales (ex: 2)
  Annuler le Fix : [SHIFT] [MODE] [8] (Norm) [1]
• RÉINITIALISATION TOTALE (Remise à zéro) :
  [SHIFT] [9] (CLR) [3] (All) [=] (YES) [AC]

════════════════════════════════════════════════════════════
💡 ASTUCE EXAMEN :
• Toujours vérifier l'indicateur [R] ou [D] avant un exercice de trigo.
• En cas d'erreur de frappe (Syntax ERROR), appuie sur [◄] ou [►] pour
  placer le curseur directement sur l'erreur et la corriger avec [DEL].
• Pour quitter n'importe quel menu et revenir au calcul normal : [MODE] [1] (COMP).
════════════════════════════════════════════════════════════
Généré depuis l'application FX Guide — Casio fx-991ES
`;
}
