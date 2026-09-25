import React from 'react';
import { KeyStep } from '../types/calculator';
import { CasioKey } from './CasioKey';
import { ChevronRight } from 'lucide-react';

interface CasioKeySequenceProps {
  keys: KeyStep[];
  size?: 'sm' | 'md' | 'lg';
  showArrows?: boolean;
  className?: string;
}

export const CasioKeySequence: React.FC<CasioKeySequenceProps> = ({
  keys,
  size = 'md',
  showArrows = true,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-1 sm:gap-1.5 py-1 ${className}`}>
      {keys.map((key, index) => {
        const isLast = index === keys.length - 1;

        let variant: 'function' | 'digit' | 'operator' | 'shift' | 'alpha' | 'action' = 'function';
        if (key.keyLabel === 'SHIFT') variant = 'shift';
        else if (key.keyLabel === 'ALPHA') variant = 'alpha';
        else if (/^[0-9]$/.test(key.keyLabel)) variant = 'digit';
        else if (['+', '-', '×', '÷', '=', 'x²', '√'].includes(key.keyLabel)) variant = 'operator';
        else if (['AC', 'DEL', 'ON'].includes(key.keyLabel)) variant = 'action';

        return (
          <React.Fragment key={index}>
            <CasioKey
              label={key.keyLabel}
              subLabel={key.subLabel}
              modifier={key.modifier}
              note={key.note}
              size={size}
              variant={variant}
              active={key.isEnter}
            />
            {showArrows && !isLast && (
              <ChevronRight className="w-3.5 h-3.5 text-[#89968F] dark:text-[#718079] shrink-0 mx-0.5" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
