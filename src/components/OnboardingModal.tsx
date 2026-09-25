import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Search, Keyboard, Trophy, ArrowRight, Check } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onFinish: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onFinish }) => {
  const [step, setStep] = useState(0);

  const slides = [
    {
      title: 'Apprends à utiliser ta fx-991ES.',
      description: 'Découvre tout ce que ta calculatrice Casio originale peut réellement faire pour tes cours et épreuves de Première S2.',
      icon: Sparkles
    },
    {
      title: 'Trouve une fonction en 2 secondes.',
      description: 'Recherche par nom, par touche, ou directement par chapitre de maths : second degré, dérivée, suites, probas.',
      icon: Search
    },
    {
      title: 'Suis les touches pas à pas.',
      description: "Regarde précisément chaque touche physique à presser et l'écran attendu. Zéro devinette, zéro jargon.",
      icon: Keyboard
    },
    {
      title: 'Maîtrise ta calculatrice.',
      description: 'Teste le simulateur tactile, sauvegarde tes favoris et gagne un temps précieux pendant tes devoirs surveillés.',
      icon: Trophy
    }
  ];

  const current = slides[step];
  const isLast = step === slides.length - 1;

  const handleNext = () => {
    if (isLast) {
      onFinish();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="w-full max-w-sm bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-6 shadow-2xl space-y-6 text-center relative z-10 overflow-hidden"
          >
            {/* Step dots */}
            <div className="flex justify-center gap-1.5">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === step ? 'w-6 bg-[#123C2A] dark:bg-[#B8E86A]' : 'w-2 bg-[#DCE2DC] dark:bg-[#34483F]'
                  }`}
                />
              ))}
            </div>

            {/* Slide animated content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-[#DCE2DC] dark:border-[#34483F] bg-[#F0F3EE] dark:bg-[#243A31] text-[#123C2A] dark:text-[#B8E86A] shadow-xs">
                    <current.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#15251E] dark:text-[#F0F4EF] tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] leading-relaxed">
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Actions */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3 px-4 rounded-xl bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95 transition-all"
              >
                <span>{isLast ? 'Commencer la découverte' : 'Continuer'}</span>
                {isLast ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
