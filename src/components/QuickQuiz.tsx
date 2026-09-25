import React, { useState } from 'react';
import { COMPREHENSIVE_QUIZ_DATA, QuizQuestion } from '../data/quizData';
import { CheckCircle, XCircle, HelpCircle, ArrowRight } from 'lucide-react';

interface QuickQuizProps {
  functionId: string;
  onSuccess?: () => void;
}

export const QuickQuiz: React.FC<QuickQuizProps> = ({ functionId, onSuccess }) => {
  const quiz: QuizQuestion | undefined = COMPREHENSIVE_QUIZ_DATA[functionId];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!quiz) return null;

  const handleSelect = (index: number) => {
    if (submitted) return;
    setSelectedIndex(index);
    setSubmitted(true);
    if (index === quiz.correctIndex && onSuccess) {
      onSuccess();
    }
  };

  const handleRetry = () => {
    setSelectedIndex(null);
    setSubmitted(false);
  };

  const isCorrect = selectedIndex === quiz.correctIndex;

  return (
    <div className="bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-4 sm:p-6 space-y-3.5 shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold text-[#123C2A] dark:text-[#B8E86A] uppercase tracking-wider">
        <HelpCircle className="w-4 h-4 shrink-0" />
        <span>Vérification rapide (Mini-Quiz)</span>
      </div>

      <p className="text-sm font-semibold text-[#15251E] dark:text-[#F0F4EF] leading-snug break-words">
        {quiz.question}
      </p>

      <div className="space-y-2">
        {quiz.options.map((option, idx) => {
          let btnStyle = 'bg-[#F0F3EE] dark:bg-[#243A31] border-[#DCE2DC] dark:border-[#34483F] text-[#15251E] dark:text-[#F0F4EF] hover:bg-[#E5EAE2] dark:hover:bg-[#2C443A]';
          if (submitted) {
            if (idx === quiz.correctIndex) {
              btnStyle = 'bg-[#F0F3EE] dark:bg-[#243A31] border-[#123C2A] dark:border-[#B8E86A] text-[#123C2A] dark:text-[#B8E86A] font-bold';
            } else if (idx === selectedIndex) {
              btnStyle = 'bg-[#FEE2E2]/60 dark:bg-[#7F1D1D]/40 border-[#FECACA] dark:border-[#991B1B] text-[#DC2626] dark:text-[#F87171]';
            } else {
              btnStyle = 'opacity-40 border-[#DCE2DC] dark:border-[#34483F] text-[#89968F] dark:text-[#718079]';
            }
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              disabled={submitted}
              className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-2.5 cursor-pointer ${btnStyle}`}
            >
              <span className="leading-snug break-words pr-1">{option}</span>
              {submitted && idx === quiz.correctIndex && (
                <CheckCircle className="w-4 h-4 text-[#123C2A] dark:text-[#B8E86A] shrink-0 mt-0.5" />
              )}
              {submitted && idx === selectedIndex && idx !== quiz.correctIndex && (
                <XCircle className="w-4 h-4 text-[#DC2626] dark:text-[#F87171] shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {submitted && (
        <div className={`p-3.5 rounded-2xl text-xs space-y-1.5 ${
          isCorrect
            ? 'bg-[#F0F3EE] dark:bg-[#243A31] text-[#123C2A] dark:text-[#B8E86A] border border-[#DCE2DC] dark:border-[#34483F]'
            : 'bg-[#FEE2E2]/60 dark:bg-[#7F1D1D]/40 text-[#991B1B] dark:text-[#FCA5A5] border border-[#FECACA] dark:border-[#991B1B]'
        }`}>
          <div className="font-bold flex items-center gap-1.5">
            {isCorrect ? "Bravo ! C'est exactement ça." : 'Pas tout à fait...'}
          </div>
          <p className="leading-relaxed opacity-95 text-[#15251E] dark:text-[#F0F4EF] break-words">{quiz.explanation}</p>
          {!isCorrect && (
            <button
              type="button"
              onClick={handleRetry}
              className="mt-1 text-xs font-semibold text-[#DC2626] dark:text-[#F87171] underline underline-offset-2 cursor-pointer flex items-center gap-1"
            >
              <span>Réessayer</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
