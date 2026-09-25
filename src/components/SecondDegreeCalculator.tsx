import React, { useState, useMemo } from 'react';
import { CasioScreen } from './CasioScreen';
import { CasioKeySequence } from './CasioKeySequence';
import { KeyStep } from '../types/calculator';
import { Calculator, CheckCircle, Sparkles, RefreshCw } from 'lucide-react';

export const SecondDegreeCalculator: React.FC = () => {
  const [aStr, setAStr] = useState('2');
  const [bStr, setBStr] = useState('-5');
  const [cStr, setCStr] = useState('2');

  const a = parseFloat(aStr);
  const b = parseFloat(bStr);
  const c = parseFloat(cStr);

  const isValid = !isNaN(a) && !isNaN(b) && !isNaN(c) && a !== 0;

  const calculation = useMemo(() => {
    if (!isValid) return null;

    const delta = b * b - 4 * a * c;
    let x1Display = '';
    let x2Display = '';
    let type: 'two_real' | 'one_double' | 'complex' = 'two_real';

    if (delta > 0) {
      type = 'two_real';
      const root1 = (-b + Math.sqrt(delta)) / (2 * a);
      const root2 = (-b - Math.sqrt(delta)) / (2 * a);
      x1Display = Number.isInteger(root1) ? root1.toString() : root1.toFixed(4).replace(/\.?0+$/, '');
      x2Display = Number.isInteger(root2) ? root2.toString() : root2.toFixed(4).replace(/\.?0+$/, '');
    } else if (delta === 0) {
      type = 'one_double';
      const root0 = -b / (2 * a);
      x1Display = Number.isInteger(root0) ? root0.toString() : root0.toFixed(4).replace(/\.?0+$/, '');
      x2Display = x1Display;
    } else {
      type = 'complex';
      const realPart = -b / (2 * a);
      const imagPart = Math.sqrt(-delta) / (2 * a);
      const realStr = Number.isInteger(realPart) ? realPart.toString() : realPart.toFixed(3);
      const imagStr = Number.isInteger(imagPart) ? imagPart.toString() : imagPart.toFixed(3);
      x1Display = `${realStr} + ${imagStr}i`;
      x2Display = `${realStr} - ${imagStr}i`;
    }

    const formatKeys = (val: number): KeyStep[] => {
      const keys: KeyStep[] = [];
      const s = val.toString();
      if (s.startsWith('-')) {
        keys.push({ keyLabel: '(-)', note: 'Moins' });
        const absVal = s.slice(1);
        for (const ch of absVal) {
          keys.push({ keyLabel: ch });
        }
      } else {
        for (const ch of s) {
          keys.push({ keyLabel: ch });
        }
      }
      keys.push({ keyLabel: '=', isEnter: true });
      return keys;
    };

    const keysSequence: KeyStep[] = [
      { keyLabel: 'MODE' },
      { keyLabel: '5', note: 'EQN' },
      { keyLabel: '3', note: 'Degré 2' },
      ...formatKeys(a),
      ...formatKeys(b),
      ...formatKeys(c),
      { keyLabel: '=', isEnter: true, note: 'Afficher X1' },
      { keyLabel: '=', isEnter: true, note: 'Afficher X2' }
    ];

    return {
      delta,
      type,
      x1Display,
      x2Display,
      keysSequence
    };
  }, [a, b, c, isValid]);

  return (
    <div className="bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-4 sm:p-6 shadow-xs space-y-4 sm:space-y-5">
      <div className="flex items-center justify-between border-b border-[#DCE2DC] dark:border-[#34483F] pb-3.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[#F0F3EE] dark:bg-[#243A31] text-[#123C2A] dark:text-[#B8E86A] border border-[#DCE2DC] dark:border-[#34483F] flex items-center justify-center shrink-0">
            <Calculator className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-[#15251E] dark:text-[#F0F4EF] truncate">
              Simulateur dynamique d'exercice
            </h3>
            <span className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] block truncate">
              Touches exactes et écran Casio personnalisés
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setAStr('1');
            setBStr('-3');
            setCStr('2');
          }}
          className="text-xs text-[#53635B] hover:text-[#15251E] dark:text-[#B7C5BE] dark:hover:text-[#F0F4EF] flex items-center gap-1 cursor-pointer shrink-0 ml-2"
          title="Réinitialiser exemple"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="hidden xs:inline">Exemple</span>
        </button>
      </div>

      {/* Input Coefficient Boxes */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
        <div className="p-2.5 sm:p-3 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl space-y-1">
          <label className="text-[10px] sm:text-[11px] font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase block truncate">
            Coeff a (x²)
          </label>
          <input
            type="number"
            value={aStr}
            onChange={(e) => setAStr(e.target.value)}
            className="w-full bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-xl px-1 sm:px-2 py-1.5 text-center font-mono font-bold text-xs sm:text-sm text-[#15251E] dark:text-[#F0F4EF] focus:outline-none focus:border-[#123C2A] dark:focus:border-[#B8E86A]"
            placeholder="≠ 0"
          />
        </div>

        <div className="p-2.5 sm:p-3 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl space-y-1">
          <label className="text-[10px] sm:text-[11px] font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase block truncate">
            Coeff b (x)
          </label>
          <input
            type="number"
            value={bStr}
            onChange={(e) => setBStr(e.target.value)}
            className="w-full bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-xl px-1 sm:px-2 py-1.5 text-center font-mono font-bold text-xs sm:text-sm text-[#15251E] dark:text-[#F0F4EF] focus:outline-none focus:border-[#123C2A] dark:focus:border-[#B8E86A]"
          />
        </div>

        <div className="p-2.5 sm:p-3 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl space-y-1">
          <label className="text-[10px] sm:text-[11px] font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase block truncate">
            Coeff c (const)
          </label>
          <input
            type="number"
            value={cStr}
            onChange={(e) => setCStr(e.target.value)}
            className="w-full bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-xl px-1 sm:px-2 py-1.5 text-center font-mono font-bold text-xs sm:text-sm text-[#15251E] dark:text-[#F0F4EF] focus:outline-none focus:border-[#123C2A] dark:focus:border-[#B8E86A]"
          />
        </div>
      </div>

      {/* Results and Visual Keys Output */}
      {calculation ? (
        <div className="space-y-4 pt-1">
          {/* Delta and Roots Summary */}
          <div className="p-3.5 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="space-y-0.5">
              <span className="font-mono font-bold text-[#15251E] dark:text-[#F0F4EF]">
                Δ = b² - 4ac = {calculation.delta}
              </span>
              <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE]">
                {calculation.type === 'two_real' && 'Deux racines réelles distinctes (Δ > 0)'}
                {calculation.type === 'one_double' && 'Une racine double (Δ = 0)'}
                {calculation.type === 'complex' && 'Deux racines complexes conjuguées (Δ < 0)'}
              </p>
            </div>

            <div className="sm:text-right font-mono font-bold text-xs space-y-0.5 text-[#123C2A] dark:text-[#B8E86A] shrink-0">
              <div>X₁ = {calculation.x1Display}</div>
              {calculation.type !== 'one_double' && <div>X₂ = {calculation.x2Display}</div>}
            </div>
          </div>

          {/* Keystrokes customized for user's numbers */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] uppercase tracking-wider block">
              Séquence personnalisée pour ton équation :
            </span>
            <CasioKeySequence keys={calculation.keysSequence} size="md" />
          </div>

          {/* Simulated Casio Display for X1 */}
          <CasioScreen
            line1="X1="
            line2={calculation.x1Display}
            indicators={['D', 'Math']}
            title={`Affichage Casio pour ${aStr}x² + (${bStr})x + (${cStr}) = 0`}
          />
        </div>
      ) : (
        <p className="text-xs text-[#DC2626] dark:text-[#F87171] text-center py-2">
          Le coefficient "a" ne peut pas être égal à zéro pour une équation du second degré.
        </p>
      )}
    </div>
  );
};
