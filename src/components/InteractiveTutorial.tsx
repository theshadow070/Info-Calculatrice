import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProcedureStep } from '../types/calculator';
import { CasioKeySequence } from './CasioKeySequence';
import { CasioScreen } from './CasioScreen';
import { ChevronLeft, ChevronRight, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface InteractiveTutorialProps {
  steps: ProcedureStep[];
  onComplete?: () => void;
  functionName: string;
}

export const InteractiveTutorial: React.FC<InteractiveTutorialProps> = ({
  steps,
  onComplete,
  functionName
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const currentStep = steps[currentStepIndex];
  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === steps.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setDirection(1);
      setCurrentStepIndex((prev) => prev + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setDirection(-1);
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setDirection(-1);
    setCurrentStepIndex(0);
  };

  const handleJumpToStep = (idx: number) => {
    setDirection(idx > currentStepIndex ? 1 : -1);
    setCurrentStepIndex(idx);
  };

  return (
    <div className="bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4 overflow-hidden">
      {/* Header and Step Indicators */}
      <div className="flex items-center justify-between border-b border-[#DCE2DC] dark:border-[#34483F] pb-3">
        <div className="space-y-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#123C2A] dark:text-[#B8E86A] flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Tutoriel Interactif Pas à Pas</span>
          </span>
          <h4 className="text-sm font-semibold text-[#15251E] dark:text-[#F0F4EF] line-clamp-1">
            {functionName}
          </h4>
        </div>
        <div className="flex items-center gap-1.5 bg-[#F0F3EE] dark:bg-[#243A31] px-2.5 py-1 rounded-full text-xs font-mono text-[#15251E] dark:text-[#F0F4EF] border border-[#DCE2DC] dark:border-[#34483F]">
          <span>Étape</span>
          <span className="font-bold text-[#123C2A] dark:text-[#B8E86A]">{currentStepIndex + 1}</span>
          <span className="text-[#89968F] dark:text-[#718079]">/</span>
          <span>{steps.length}</span>
        </div>
      </div>

      {/* Progress Dots Indicator with fluid active pill */}
      <div className="flex items-center justify-center gap-1.5 py-1">
        {steps.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleJumpToStep(idx)}
            className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
              idx === currentStepIndex
                ? 'w-7 bg-[#123C2A] dark:bg-[#B8E86A] shadow-xs'
                : idx < currentStepIndex
                ? 'w-2 bg-[#6FAF82]'
                : 'w-2 bg-[#DCE2DC] dark:bg-[#34483F]'
            }`}
            aria-label={`Aller à l'étape ${idx + 1}`}
          />
        ))}
      </div>

      {/* Animated Step Content Container */}
      <div className="relative min-h-[220px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStepIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3.5"
          >
            {/* Step Number & Title */}
            <div className="flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#123C2A] dark:bg-[#B8E86A] text-white dark:text-[#123C2A] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {currentStep.stepNumber}
              </span>
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-[#15251E] dark:text-[#F0F4EF] leading-snug">
                  {currentStep.title}
                </h5>
                <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] leading-relaxed">
                  {currentStep.instruction}
                </p>
                {currentStep.explanation && (
                  <p className="text-[11px] text-[#89968F] dark:text-[#718079]">
                    {currentStep.explanation}
                  </p>
                )}
              </div>
            </div>

            {/* Keys To Press at this step */}
            {currentStep.keys && currentStep.keys.length > 0 && (
              <div className="p-3 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl space-y-1">
                <span className="text-[10px] font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider block">
                  Action sur le clavier :
                </span>
                <CasioKeySequence keys={currentStep.keys} size="md" />
              </div>
            )}

            {/* Screen result at this step */}
            {currentStep.lcdDisplay && (
              <CasioScreen
                line1={currentStep.lcdDisplay.line1}
                line2={currentStep.lcdDisplay.line2}
                indicators={currentStep.lcdDisplay.indicators}
                title={`Écran étape ${currentStep.stepNumber}`}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons: Prev / Reset / Next */}
      <div className="flex items-center justify-between pt-2 border-t border-[#DCE2DC] dark:border-[#34483F]">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handlePrev}
            disabled={isFirst}
            className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
              isFirst
                ? 'opacity-30 cursor-not-allowed text-[#89968F]'
                : 'bg-[#F0F3EE] dark:bg-[#243A31] hover:bg-[#E5EAE2] dark:hover:bg-[#2C443A] text-[#15251E] dark:text-[#F0F4EF] cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Précédent</span>
          </button>

          {!isFirst && (
            <button
              type="button"
              onClick={handleReset}
              className="p-2 rounded-xl text-[#53635B] hover:text-[#15251E] dark:text-[#B7C5BE] dark:hover:text-[#F0F4EF] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31] text-xs transition-colors cursor-pointer"
              title="Recommencer au début"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="py-2.5 px-4 rounded-xl bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95 transition-all"
        >
          <span>{isLast ? 'Terminer le guide' : 'Étape suivante'}</span>
          {isLast ? <CheckCircle2 className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
