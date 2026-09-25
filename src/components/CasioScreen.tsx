import React from 'react';

interface CasioScreenProps {
  line1?: string;
  line2?: string;
  indicators?: string[]; // e.g. ['D', 'Math'], ['R', 'Math'], ['CMPLX', 'D'], etc.
  className?: string;
  title?: string;
}

export const CasioScreen: React.FC<CasioScreenProps> = ({
  line1 = '',
  line2 = '',
  indicators = ['D', 'Math'],
  className = '',
  title
}) => {
  const allIndicators = [
    { key: 'S', label: 'S' },
    { key: 'A', label: 'A' },
    { key: 'M', label: 'M' },
    { key: 'STO', label: 'STO' },
    { key: 'D', label: 'D' },
    { key: 'R', label: 'R' },
    { key: 'G', label: 'G' },
    { key: 'FIX', label: 'FIX' },
    { key: 'SCI', label: 'SCI' },
    { key: 'Math', label: 'Math' },
    { key: 'STAT', label: 'STAT' },
    { key: 'CMPLX', label: 'CMPLX' },
    { key: 'MAT', label: 'MAT' },
    { key: 'VCT', label: 'VCT' },
  ];

  return (
    <div className={`relative rounded-2xl p-2.5 sm:p-3 border border-[#2D4337] bg-[#16251E] shadow-md ${className}`}>
      {title && (
        <div className="flex items-center justify-between text-[11px] font-semibold text-[#B7C5BE] mb-1.5 px-0.5">
          <span className="truncate pr-2">{title}</span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#B8E86A] shrink-0 font-bold">
            fx-991ES Natural-V.P.A.M.
          </span>
        </div>
      )}

      {/* Physical LCD Display Screen */}
      <div className="relative rounded-lg p-2.5 lcd-screen overflow-hidden border border-[#526658]/40">
        {/* Subtle pixel grid texture overlay */}
        <div className="absolute inset-0 bg-radial from-transparent to-black/10 pointer-events-none" />

        {/* Top Status Bar (LCD flags) */}
        <div className="flex items-center justify-between border-b border-black/15 pb-1 mb-1.5 text-[9px] sm:text-[10px] font-mono select-none px-0.5 font-bold tracking-wider overflow-x-auto no-scrollbar whitespace-nowrap">
          <div className="flex gap-1.5 sm:gap-2 shrink-0">
            {allIndicators.slice(0, 4).map((ind) => (
              <span
                key={ind.key}
                className={indicators.includes(ind.key) ? 'opacity-100 font-extrabold text-[#111C12]' : 'opacity-15 text-[#3C4A3E]'}
              >
                {ind.label}
              </span>
            ))}
          </div>

          <div className="flex gap-1.5 sm:gap-2 shrink-0 px-1">
            {allIndicators.slice(4, 7).map((ind) => (
              <span
                key={ind.key}
                className={indicators.includes(ind.key) ? 'opacity-100 font-extrabold text-[#111C12]' : 'opacity-15 text-[#3C4A3E]'}
              >
                {ind.label}
              </span>
            ))}
          </div>

          <div className="flex gap-1.5 sm:gap-2 shrink-0">
            {allIndicators.slice(7).map((ind) => (
              <span
                key={ind.key}
                className={indicators.includes(ind.key) ? 'opacity-100 font-extrabold text-[#111C12]' : 'opacity-15 text-[#3C4A3E]'}
              >
                {ind.label}
              </span>
            ))}
          </div>
        </div>

        {/* Line 1: Expression / Natural Input */}
        <div className="min-h-[24px] font-mono text-xs sm:text-sm font-semibold tracking-wide flex items-center overflow-x-auto whitespace-pre no-scrollbar text-[#111C12]">
          {line1 || <span className="opacity-40 italic">Prêt...</span>}
        </div>

        {/* Line 2: Evaluated Result (Right aligned) */}
        <div className="min-h-[28px] font-mono text-sm sm:text-base font-bold tracking-wider flex items-center justify-end overflow-x-auto whitespace-pre no-scrollbar text-[#111C12] mt-1">
          {line2}
        </div>
      </div>
    </div>
  );
};
