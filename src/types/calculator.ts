export type DifficultyLevel = 'debutant' | 'intermediaire' | 'avance';

// Strict Première S2 pedagogical utility classification
export type S2Relevance = 'indispensable' | 'tres_utile' | 'utile' | 'avance';

export type StatusVerification = 'confirme' | 'a_verifier' | 'non_disponible';

export type CurriculumTopic = 
  | 'second_degre'
  | 'derivation'
  | 'fonctions'
  | 'trigonometrie'
  | 'suites'
  | 'probabilites_stats'
  | 'geometrie_vecteurs'
  | 'complexes'
  | 'calcul_general';

export interface KeyStep {
  keyLabel: string;
  subLabel?: string; // SHIFT (gold) or ALPHA (red) secondary label
  modifier?: 'SHIFT' | 'ALPHA' | null;
  note?: string;
  isEnter?: boolean;
}

export interface ProcedureStep {
  stepNumber: number;
  title: string;
  instruction: string;
  keys: KeyStep[];
  lcdDisplay?: {
    line1: string;
    line2?: string;
    indicators?: string[]; // e.g. ["D", "Math"]
  };
  explanation?: string;
}

export interface CasioFunction {
  id: string;
  nom: string;
  slug: string;
  categorie: string;
  sousCategorie: string;
  description: string;
  niveau: DifficultyLevel;
  pertinenceS2: S2Relevance; // 'indispensable' | 'tres_utile' | 'utile' | 'avance'
  contexteScolaire: string;
  programmeS2Theme: CurriculumTopic;
  modeCasio: string; // e.g., "EQN (MODE 5 3)", "TABLE (MODE 8)", "COMP (MODE 1)"
  modeCode: number; // 1 to 8
  touchesRapides: string[]; // e.g. ["MODE", "5", "3", "a", "=", "b", "=", "c", "=", "="]
  etapes: ProcedureStep[];
  exempleConcret: {
    enonce: string;
    action: string;
    touchesDetaillees: KeyStep[];
    resultatAffiche: string;
    interpretationScolaire: string;
  };
  aRetenir: string;
  erreursFrequentes: string[];
  astucePro: string;
  motsClesRecherche: string[];
  statut: StatusVerification;
  estMeconnue?: boolean; // For discreet "Découvrir" section
}

export interface ProblemGuide {
  id: string;
  question: string;
  contexte: string;
  icon: string;
  functionId: string;
  touchesExpress: string[];
  apercuResultat: string;
}

export interface CasioKeyInfo {
  code: string;
  label: string;
  shiftLabel?: string;
  alphaLabel?: string;
  type: 'function' | 'digit' | 'operator' | 'navigation' | 'mode' | 'system';
  description: string;
  shiftDescription?: string;
  alphaDescription?: string;
  associatedFunctions: string[]; // function IDs
  astuce?: string;
}

export interface CasioErrorInfo {
  code: string;
  titre: string;
  signification: string;
  causesCourantes: string[];
  solutionImmediate: string;
  touchesPourCorriger: string[];
  exempleS2: string;
}
