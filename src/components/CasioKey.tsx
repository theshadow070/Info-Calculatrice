import React from 'react';

interface CasioKeyProps {
  label: string;
  shiftLabel?: string;
  alphaLabel?: string;
  subLabel?: string;
  modifier?: 'SHIFT' | 'ALPHA' | null;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'function' | 'digit' | 'operator' | 'action' | 'shift' | 'alpha' | 'dpad';
  active?: boolean;
  highlighted?: boolean;
  onClick?: () => void;
  className?: string;
  note?: string;
}

export const CasioKey: React.FC<CasioKeyProps> = ({
  label,
  shiftLabel,
  alphaLabel,
  subLabel,
  modifier,
  size = 'md',
  variant = 'function',
  active = false,
  highlighted = false,
  onClick,
  className = '',
  note
}) => {
  const effectiveShift = shiftLabel || (modifier !== 'ALPHA' ? subLabel : undefined);
  const effectiveAlpha = alphaLabel || (modifier === 'ALPHA' ? subLabel : undefined);

  const isDigit = variant === 'digit' || /^[0-9]$/.test(label) || label === '.' || label === '×10ˣ';
  const isShift = variant === 'shift' || label === 'SHIFT';
  const isAlpha = variant === 'alpha' || label === 'ALPHA';
  const isAction = variant === 'action' || label === 'AC' || label === 'DEL' || label === 'ON';
  const isEqual = label === '=';

  // Tactile color styling adhering to real fx-991ES hardware and the new color palette
  let keyBg = 'bg-[#243A31] dark:bg-[#1E332A] hover:bg-[#2C443A] dark:hover:bg-[#264035] text-[#F0F4EF] border-[#385145] dark:border-[#385145] shadow-[0_2px_0_#14231D] active:shadow-none active:translate-y-[2px]';

  if (isDigit) {
    keyBg = 'bg-white hover:bg-[#F0F3EE] text-[#15251E] font-extrabold border-[#DCE2DC] dark:border-[#94A3B8] shadow-[0_2.5px_0_#CBD5E1] dark:shadow-[0_2.5px_0_#64748B] active:shadow-none active:translate-y-[2px]';
  } else if (isShift) {
    keyBg = 'bg-[#E5A93C] hover:bg-[#F2B94D] text-[#15251E] font-black border-[#C78E28] shadow-[0_2.5px_0_#976916] active:shadow-none active:translate-y-[2px]';
  } else if (isAlpha) {
    keyBg = 'bg-[#DC2626] hover:bg-[#EF4444] text-white font-black border-[#B91C1C] shadow-[0_2.5px_0_#7F1D1D] active:shadow-none active:translate-y-[2px]';
  } else if (isAction) {
    keyBg = 'bg-[#EA580C] hover:bg-[#F97316] text-white font-black border-[#C2410C] shadow-[0_2.5px_0_#9A3412] active:shadow-none active:translate-y-[2px]';
  } else if (isEqual) {
    keyBg = 'bg-[#123C2A] dark:bg-[#2A5A44] hover:bg-[#1A4F38] text-white font-black border-[#0B2519] dark:border-[#1E4332] shadow-[0_2.5px_0_#071911] active:shadow-none active:translate-y-[2px]';
  }

  // Responsive key sizing avoiding any viewport blowup
  let sizeClasses = 'min-w-[36px] sm:min-w-[42px] h-[36px] px-1 sm:px-2 text-[11px] sm:text-xs';
  if (size === 'sm') {
    sizeClasses = 'min-w-[28px] sm:min-w-[32px] h-[28px] px-1 text-[10px] sm:text-[11px]';
  } else if (size === 'lg') {
    sizeClasses = 'min-w-[46px] sm:min-w-[54px] h-[42px] sm:h-[44px] px-2 sm:px-3 text-xs sm:text-sm';
  }

  const isFullWidthInGrid = className.includes('w-full');

  return (
    <div className={`inline-flex flex-col items-center select-none ${isFullWidthInGrid ? 'w-full' : 'm-0.5'}`}>
      {/* Secondary labels printed on faceplate above key */}
      {(effectiveShift || effectiveAlpha) && (
        <div className="flex justify-between w-full px-0.5 text-[8.5px] sm:text-[9px] font-mono leading-none mb-0.5 min-h-[10px]">
          <span className="text-[#B45309] dark:text-[#FBBF24] font-bold truncate max-w-[50%]">
            {effectiveShift}
          </span>
          <span className="text-[#DC2626] dark:text-[#F87171] font-bold truncate max-w-[50%] text-right">
            {effectiveAlpha}
          </span>
        </div>
      )}

      {/* Tactile Casio Key button */}
      <button
        type="button"
        onClick={onClick}
        className={`
          relative flex items-center justify-center font-bold tracking-tight rounded-lg border
          transition-transform duration-75 cursor-pointer max-w-full
          ${keyBg}
          ${sizeClasses}
          ${highlighted ? 'ring-2 ring-[#B8E86A] ring-offset-2 ring-offset-[#F7F8F4] dark:ring-offset-[#14231D] animate-pulse' : ''}
          ${active ? 'ring-2 ring-[#B8E86A] dark:ring-[#B8E86A] ring-offset-1 ring-offset-white dark:ring-offset-[#1D3028]' : ''}
          ${className}
        `}
      >
        <span className="truncate px-0.5">{label}</span>
      </button>

      {note && (
        <span className="text-[9px] text-[#53635B] dark:text-[#B7C5BE] mt-0.5 font-medium text-center truncate max-w-[50px]">
          {note}
        </span>
      )}
    </div>
  );
};
