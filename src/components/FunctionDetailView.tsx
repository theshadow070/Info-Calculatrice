import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CasioFunction } from '../types/calculator';
import { CasioKeySequence } from './CasioKeySequence';
import { CasioScreen } from './CasioScreen';
import { InteractiveTutorial } from './InteractiveTutorial';
import { QuickQuiz } from './QuickQuiz';
import { SecondDegreeCalculator } from './SecondDegreeCalculator';
import {
  ArrowLeft,
  Bookmark,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Zap,
  BookOpen,
  GraduationCap,
  PlayCircle,
  Copy,
  Check
} from 'lucide-react';

interface FunctionDetailViewProps {
  func: CasioFunction;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  isMastered: boolean;
  onToggleMastered: (id: string) => void;
  onMarkMastered: (id: string) => void;
}

export const FunctionDetailView: React.FC<FunctionDetailViewProps> = ({
  func,
  onBack,
  isFavorite,
  onToggleFavorite,
  isMastered,
  onToggleMastered,
  onMarkMastered
}) => {
  const [learningMode, setLearningMode] = useState<'fast' | 'steps'>('fast');
  const [showInteractiveTutorial, setShowInteractiveTutorial] = useState(false);
  const [copiedShortcut, setCopiedShortcut] = useState(false);

  const relevanceBadge = {
    indispensable: { text: 'Indispensable 1ère S2', color: 'text-[#123C2A] dark:text-[#B8E86A] bg-[#F0F3EE] dark:bg-[#243A31] border-[#DCE2DC] dark:border-[#34483F]' },
    tres_utile: { text: 'Très utile', color: 'text-[#B45309] dark:text-[#FBBF24] bg-[#FEF3C7]/60 dark:bg-[#78350F]/30 border-[#FDE68A] dark:border-[#92400E]' },
    utile: { text: 'Utile selon exercices', color: 'text-[#0369A1] dark:text-[#38BDF8] bg-[#E0F2FE]/60 dark:bg-[#075985]/30 border-[#BAE6FD] dark:border-[#0369A1]' },
    avance: { text: 'Avancé', color: 'text-[#6D28D9] dark:text-[#C084FC] bg-[#EDE9FE]/60 dark:bg-[#5B21B6]/30 border-[#DDD6FE] dark:border-[#6D28D9]' }
  }[func.pertinenceS2];

  const handleCopyShortcut = () => {
    navigator.clipboard.writeText(func.touchesRapides.join(' → '));
    setCopiedShortcut(true);
    setTimeout(() => setCopiedShortcut(false), 2000);
  };

  // Find representative screen display
  const primaryLcdDisplay = func.etapes.find(e => e.lcdDisplay)?.lcdDisplay || {
    line1: func.touchesRapides.slice(-4).join(' '),
    line2: func.exempleConcret?.resultatAffiche || '0',
    indicators: ['D', 'Math']
  };

  return (
    <div className="space-y-4">
      {/* Top Bar: Navigation & Core Actions (Responsively wrapped for narrow screens) */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1.5 sm:gap-2 border-b border-[#DCE2DC] dark:border-[#34483F] pb-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#F0F3EE] hover:bg-[#E5EAE2] dark:bg-[#243A31] dark:hover:bg-[#2C443A] text-[#15251E] dark:text-[#F0F4EF] text-xs font-bold active:scale-95 transition-all cursor-pointer shadow-2xs shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour</span>
        </button>

        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 ml-auto">
          {/* Quick Copy shortcut */}
          <button
            type="button"
            onClick={handleCopyShortcut}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-xl text-xs font-semibold border bg-white dark:bg-[#1D3028] border-[#DCE2DC] dark:border-[#34483F] text-[#15251E] dark:text-[#F0F4EF] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31] active:scale-95 transition-all cursor-pointer shadow-2xs"
            title="Copier le raccourci"
          >
            {copiedShortcut ? <Check className="w-3.5 h-3.5 text-[#123C2A] dark:text-[#B8E86A]" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="text-[10px] hidden xs:inline">{copiedShortcut ? 'Copié' : 'Copier'}</span>
          </button>

          {/* Mastered Toggle */}
          <button
            type="button"
            onClick={() => onToggleMastered(func.id)}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-xl text-xs font-semibold border active:scale-95 transition-all cursor-pointer ${
              isMastered
                ? 'bg-[#F0F3EE] dark:bg-[#243A31] text-[#123C2A] dark:text-[#B8E86A] border-[#DCE2DC] dark:border-[#34483F] shadow-2xs'
                : 'bg-white dark:bg-[#1D3028] text-[#53635B] dark:text-[#B7C5BE] border-[#DCE2DC] dark:border-[#34483F] hover:text-[#15251E] dark:hover:text-[#F0F4EF]'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${isMastered ? 'text-[#123C2A] dark:text-[#B8E86A]' : ''}`} />
            <span className="text-[11px] sm:text-xs">{isMastered ? 'Maîtrisé' : 'À revoir'}</span>
          </button>

          {/* Favorite Toggle */}
          <button
            type="button"
            onClick={() => onToggleFavorite(func.id)}
            className={`p-1.5 sm:p-2 rounded-xl border active:scale-95 transition-all cursor-pointer ${
              isFavorite
                ? 'bg-[#FEF3C7] dark:bg-[#78350F]/40 text-[#D97706] dark:text-[#FBBF24] border-[#FDE68A] dark:border-[#92400E] shadow-2xs'
                : 'bg-white dark:bg-[#1D3028] text-[#53635B] dark:text-[#B7C5BE] border-[#DCE2DC] dark:border-[#34483F] hover:text-[#15251E] dark:hover:text-[#F0F4EF]'
            }`}
            title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-[#D97706] text-[#D97706]' : ''}`} />
          </button>
        </div>
      </div>

      {/* 1. Header Information */}
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-mono font-bold text-[#123C2A] dark:text-[#B8E86A] bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] px-2 py-0.5 rounded-md">
            {func.modeCasio}
          </span>
          <span className={`text-[10px] font-semibold border px-2 py-0.5 rounded-md ${relevanceBadge.color}`}>
            {relevanceBadge.text}
          </span>
          {func.estMeconnue && (
            <span className="text-[10px] font-semibold text-[#123C2A] dark:text-[#B8E86A] bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] px-2 py-0.5 rounded-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#123C2A] dark:text-[#B8E86A]" />
              <span>Astuce méconnue</span>
            </span>
          )}
        </div>

        <h1 className="text-xl sm:text-2xl font-extrabold text-[#15251E] dark:text-[#F0F4EF] tracking-tight break-words">
          {func.nom}
        </h1>

        <p className="text-xs sm:text-sm text-[#53635B] dark:text-[#B7C5BE] leading-relaxed font-medium">
          {func.description}
        </p>
      </div>

      {/* 2. Mode Selector: Mode Rapide vs Mode Pas à pas */}
      <div className="p-1 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl flex gap-1 text-xs">
        <button
          type="button"
          onClick={() => setLearningMode('fast')}
          className={`flex-1 py-2 px-2 sm:px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer text-[11px] sm:text-xs text-center ${
            learningMode === 'fast'
              ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
              : 'text-[#53635B] dark:text-[#B7C5BE] hover:text-[#15251E] dark:hover:text-white'
          }`}
        >
          <Zap className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Mode Rapide (Bac)</span>
        </button>

        <button
          type="button"
          onClick={() => setLearningMode('steps')}
          className={`flex-1 py-2 px-2 sm:px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer text-[11px] sm:text-xs text-center ${
            learningMode === 'steps'
              ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
              : 'text-[#53635B] dark:text-[#B7C5BE] hover:text-[#15251E] dark:hover:text-white'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Mode Pas à pas ({func.etapes.length})</span>
        </button>
      </div>

      {/* 3. MODE RAPIDE */}
      {learningMode === 'fast' && (
        <div className="space-y-4">
          {/* Key Sequence Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider">
                Séquence express certifiée :
              </span>
              <span className="text-[11px] font-mono text-[#89968F] dark:text-[#718079]">
                {func.touchesRapides.length} touches
              </span>
            </div>

            <CasioKeySequence
              keys={func.touchesRapides.map((label) => ({ keyLabel: label }))}
              size="lg"
            />

            <div className="p-2.5 rounded-xl bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] text-xs font-semibold text-[#15251E] dark:text-[#F0F4EF] flex items-center gap-2">
              <span className="text-[#123C2A] dark:text-[#B8E86A] font-bold shrink-0">À retenir :</span>
              <span className="break-words">{func.aRetenir}</span>
            </div>
          </div>

          {/* Authentic LCD Screen Display */}
          <CasioScreen
            line1={primaryLcdDisplay.line1}
            line2={primaryLcdDisplay.line2}
            indicators={primaryLcdDisplay.indicators}
            title="Aperçu de l'écran Casio fx-991ES"
          />

          {/* Interactive Tutorial Launcher */}
          <button
            type="button"
            onClick={() => setShowInteractiveTutorial(true)}
            className="w-full py-3 px-4 rounded-2xl bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs active:scale-[0.99] transition-all cursor-pointer"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Lancer le simulateur guidé touche par touche</span>
          </button>

          {/* Concrete Example Card */}
          {func.exempleConcret && (
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] shadow-xs space-y-2.5">
              <span className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] uppercase tracking-wider block">
                Exemple concret type examen :
              </span>

              <div className="p-3 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-xl space-y-1.5 text-xs">
                <div className="font-bold text-[#15251E] dark:text-[#F0F4EF] break-words">
                  Énoncé : {func.exempleConcret.enonce}
                </div>
                <div className="text-[#53635B] dark:text-[#B7C5BE] break-words">
                  Action : {func.exempleConcret.action}
                </div>
                <div className="text-[#123C2A] dark:text-[#B8E86A] font-bold break-words">
                  Résultat attendu : {func.exempleConcret.resultatAffiche}
                </div>
                {func.exempleConcret.interpretationScolaire && (
                  <div className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] pt-1.5 border-t border-[#DCE2DC] dark:border-[#34483F] leading-relaxed break-words">
                    Sur ta copie : {func.exempleConcret.interpretationScolaire}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Dynamic Solver (If second-degre-eqn) */}
          {func.id === 'second-degre-eqn' && (
            <SecondDegreeCalculator />
          )}

          {/* Traps & Pitfalls Card */}
          {func.erreursFrequentes && func.erreursFrequentes.length > 0 && (
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] shadow-xs space-y-2.5">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#D97706]" />
                <span className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] uppercase tracking-wider">
                  Pièges à éviter absolument :
                </span>
              </div>

              <div className="space-y-1.5">
                {func.erreursFrequentes.map((piege, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-[#FEF3C7]/40 dark:bg-[#78350F]/20 border border-[#FDE68A] dark:border-[#92400E] rounded-xl text-xs text-[#92400E] dark:text-[#FDE68A] leading-relaxed flex items-start gap-2"
                  >
                    <span className="font-bold shrink-0">•</span>
                    <span className="break-words">{piege}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contexte scolaire */}
          {func.contexteScolaire && (
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] shadow-xs space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#123C2A] dark:text-[#B8E86A]" />
                <span className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] uppercase tracking-wider">
                  Contexte scolaire & devoirs surveillés :
                </span>
              </div>
              <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] leading-relaxed bg-[#F0F3EE] dark:bg-[#243A31] p-3 rounded-xl border border-[#DCE2DC] dark:border-[#34483F] break-words">
                {func.contexteScolaire}
              </p>
            </div>
          )}

          {/* Pro Tip */}
          {func.astucePro && (
            <div className="p-4 rounded-2xl bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
              <div className="space-y-0.5 min-w-0">
                <span className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF]">
                  Astuce Pro :
                </span>
                <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] leading-relaxed break-words">
                  {func.astucePro}
                </p>
              </div>
            </div>
          )}

          {/* Self-Assessment Quick Quiz */}
          <QuickQuiz
            functionId={func.id}
            onSuccess={() => onMarkMastered(func.id)}
          />
        </div>
      )}

      {/* 4. MODE PAS À PAS */}
      {learningMode === 'steps' && (
        <div className="space-y-4">
          <div className="p-3 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl text-xs text-[#53635B] dark:text-[#B7C5BE]">
            Suis cette procédure pas à pas sur ta calculatrice. Chaque étape décrit la touche exacte et l'écran attendu.
          </div>

          <div className="space-y-3">
            {func.etapes.map((step) => (
              <div
                key={step.stepNumber}
                className="p-4 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] shadow-xs space-y-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#123C2A] dark:bg-[#B8E86A] text-white dark:text-[#123C2A] font-bold text-xs flex items-center justify-center shrink-0">
                    {step.stepNumber}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#15251E] dark:text-[#F0F4EF] break-words">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] leading-relaxed break-words">
                  {step.instruction}
                </p>

                {step.explanation && (
                  <p className="text-[11px] text-[#89968F] dark:text-[#718079] break-words">
                    {step.explanation}
                  </p>
                )}

                {step.keys && step.keys.length > 0 && (
                  <div className="p-2.5 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-xl">
                    <span className="text-[10px] font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase block mb-1">
                      Touches à appuyer :
                    </span>
                    <CasioKeySequence keys={step.keys} size="md" />
                  </div>
                )}

                {step.lcdDisplay && (
                  <CasioScreen
                    line1={step.lcdDisplay.line1}
                    line2={step.lcdDisplay.line2}
                    indicators={step.lcdDisplay.indicators}
                    title={`Écran étape ${step.stepNumber}`}
                  />
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onMarkMastered(func.id)}
            className="w-full py-3 px-4 rounded-2xl bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95 transition-all"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>J'ai compris cette procédure ! Valider ma maîtrise</span>
          </button>
        </div>
      )}

      {/* Interactive Step-by-Step Modal */}
      {showInteractiveTutorial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div
            onClick={() => setShowInteractiveTutorial(false)}
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xs"
          />
          <div className="w-full max-w-md relative z-10">
            <InteractiveTutorial
              steps={func.etapes}
              functionName={func.nom}
              onComplete={() => {
                onMarkMastered(func.id);
                setShowInteractiveTutorial(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
