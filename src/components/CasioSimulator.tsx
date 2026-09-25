import React, { useState } from 'react';
import { CasioScreen } from './CasioScreen';
import { CasioKey } from './CasioKey';
import { Sparkles, RotateCcw, HelpCircle, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export const CasioSimulator: React.FC = () => {
  const [line1, setLine1] = useState('0');
  const [line2, setLine2] = useState('');
  const [indicators, setIndicators] = useState<string[]>(['D', 'Math']);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isShiftActive, setIsShiftActive] = useState(false);
  const [isAlphaActive, setIsAlphaActive] = useState(false);
  const [lastActionNote, setLastActionNote] = useState<string>('Prêt. Appuie sur MODE, SHIFT ou tape un calcul.');

  const [guidedScenario, setGuidedScenario] = useState<{
    id: string;
    title: string;
    steps: { key: string; instruction: string }[];
    currentStep: number;
  } | null>(null);

  const guidedScenarios = [
    {
      id: 'radians',
      title: 'Passer en Radians (Indispensable 1ère S2)',
      steps: [
        { key: 'SHIFT', instruction: "Appuie d'abord sur SHIFT (jaune)" },
        { key: 'MODE', instruction: 'Appuie sur MODE pour ouvrir le SETUP' },
        { key: '4', instruction: "Choisis 4 pour sélectionner Radian (note l'indicateur R)" }
      ]
    },
    {
      id: 'eqn2',
      title: 'Ouvrir la résolution de degré 2 (ax²+bx+c=0)',
      steps: [
        { key: 'MODE', instruction: 'Appuie sur la touche MODE' },
        { key: '5', instruction: 'Choisis 5 pour entrer dans EQN' },
        { key: '3', instruction: "Choisis 3 pour l'équation de degré 2" }
      ]
    },
    {
      id: 'table',
      title: 'Activer le mode TABLE f(x)',
      steps: [
        { key: 'MODE', instruction: 'Appuie sur la touche MODE' },
        { key: '8', instruction: 'Choisis 8 (TABLE) pour saisir f(X)' }
      ]
    },
    {
      id: 'ddx',
      title: 'Activer la dérivée d/dx',
      steps: [
        { key: 'SHIFT', instruction: 'Appuie sur SHIFT' },
        { key: '∫dx', instruction: 'Appuie sur ∫dx pour obtenir la dérivée d/dx' }
      ]
    }
  ];

  const handleKeyPress = (keyLabel: string) => {
    if (guidedScenario) {
      const targetKey = guidedScenario.steps[guidedScenario.currentStep]?.key;
      if (keyLabel === targetKey) {
        if (guidedScenario.currentStep < guidedScenario.steps.length - 1) {
          setGuidedScenario({ ...guidedScenario, currentStep: guidedScenario.currentStep + 1 });
        } else {
          setLastActionNote('Bravo ! Séquence guidée terminée avec succès.');
          setGuidedScenario(null);
        }
      }
    }

    if (keyLabel === 'SHIFT') {
      const nextShift = !isShiftActive;
      setIsShiftActive(nextShift);
      if (nextShift) {
        if (!indicators.includes('S')) setIndicators(prev => ['S', ...prev]);
        setLastActionNote('SHIFT activé. La prochaine touche exécutera sa fonction jaune.');
      } else {
        setIndicators(prev => prev.filter(i => i !== 'S'));
        setLastActionNote('SHIFT désactivé.');
      }
      return;
    }

    if (keyLabel === 'ALPHA') {
      const nextAlpha = !isAlphaActive;
      setIsAlphaActive(nextAlpha);
      if (nextAlpha) {
        if (!indicators.includes('A')) setIndicators(prev => ['A', ...prev]);
        setLastActionNote('ALPHA activé. La prochaine touche tapera sa lettre rouge.');
      } else {
        setIndicators(prev => prev.filter(i => i !== 'A'));
        setLastActionNote('ALPHA désactivé.');
      }
      return;
    }

    if (keyLabel === 'AC') {
      setLine1('');
      setLine2('0');
      setActiveMenu(null);
      setLastActionNote('Écran effacé (AC). Calculatrice prête.');
      return;
    }

    if (keyLabel === 'DEL') {
      setLine1(prev => prev.slice(0, -1));
      setLastActionNote('Dernier caractère supprimé.');
      return;
    }

    if (isShiftActive && keyLabel === 'MODE') {
      setActiveMenu('setup');
      setLine1('1:MthIO  2:LineIO\n3:Deg    4:Rad\n5:Gra    6:Fix\n7:Sci    8:Norm');
      setLine2('');
      setIsShiftActive(false);
      setIndicators(prev => prev.filter(i => i !== 'S'));
      setLastActionNote('Menu SETUP ouvert. Appuie sur 3 (Degrés) ou 4 (Radians).');
      return;
    }

    if (!isShiftActive && keyLabel === 'MODE') {
      setActiveMenu('mode');
      setLine1('1:COMP   2:CMPLX\n3:STAT   4:BASE-N\n5:EQN    6:MATRIX\n7:VECTOR 8:TABLE');
      setLine2('');
      setLastActionNote('Menu MODE ouvert. Choisis un mode entre 1 et 8.');
      return;
    }

    if (activeMenu === 'setup') {
      if (keyLabel === '4') {
        setIndicators(prev => [...prev.filter(i => i !== 'D' && i !== 'G'), 'R']);
        setLine1('SETUP: Radian');
        setLine2('Radian');
        setActiveMenu(null);
        setLastActionNote('Unité angulaire changée : RADIAN (Indicateur R visible en haut).');
        return;
      }
      if (keyLabel === '3') {
        setIndicators(prev => [...prev.filter(i => i !== 'R' && i !== 'G'), 'D']);
        setLine1('SETUP: Degré');
        setLine2('Deg');
        setActiveMenu(null);
        setLastActionNote('Unité angulaire changée : DEGRÉ (Indicateur D visible en haut).');
        return;
      }
    }

    if (activeMenu === 'mode') {
      if (keyLabel === '5') {
        setActiveMenu('eqn');
        setLine1('1: anX + bnY = cn\n2: anX + bnY + cnZ = dn\n3: aX² + bX + c = 0\n4: aX³ + bX² + cX + d = 0');
        setLine2('');
        setLastActionNote('Menu EQN : Appuie sur 3 pour degré 2 ou 1 pour système 2x2.');
        return;
      }
      if (keyLabel === '8') {
        setActiveMenu(null);
        setLine1('f(X)=');
        setLine2('');
        setLastActionNote('Mode TABLE : Tape ton expression avec ALPHA + ) pour afficher X.');
        return;
      }
      if (keyLabel === '1') {
        setActiveMenu(null);
        setLine1('Mode COMP');
        setLine2('0');
        setLastActionNote('Retour au mode standard COMP (Calcul normal).');
        return;
      }
    }

    if (activeMenu === 'eqn' && keyLabel === '3') {
      setActiveMenu(null);
      setLine1('aX² + bX + c = 0\na?');
      setLine2('0');
      setLastActionNote('Saisie des coefficients du second degré a, b, c puis =.');
      return;
    }

    if (keyLabel === '=') {
      try {
        const sanitized = line1
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/Ans/g, line2 || '0')
          .replace(/π/g, 'Math.PI');

        const res = Function(`"use strict"; return (${sanitized})`)();
        setLine2(String(res));
        setLastActionNote(`Calcul exécuté : résultat = ${res}`);
      } catch (e) {
        setLine2('Syntax ERROR');
        setLastActionNote('Erreur de syntaxe dans l\'expression.');
      }
      return;
    }

    if (isShiftActive && keyLabel === '∫dx') {
      setLine1(prev => (prev === '0' ? '' : prev) + 'd/dx(');
      setIsShiftActive(false);
      setIndicators(prev => prev.filter(i => i !== 'S'));
      setLastActionNote('Fonction dérivée numérique d/dx( insérée.');
      return;
    }

    if (isAlphaActive && keyLabel === ')') {
      setLine1(prev => (prev === '0' ? '' : prev) + 'X');
      setIsAlphaActive(false);
      setIndicators(prev => prev.filter(i => i !== 'A'));
      setLastActionNote('Variable X insérée.');
      return;
    }

    setLine1(prev => (prev === '0' || prev.includes('Mode') || prev.includes('SETUP') ? '' : prev) + keyLabel);
    setIsShiftActive(false);
    setIsAlphaActive(false);
    setIndicators(prev => prev.filter(i => i !== 'S' && i !== 'A'));
    setLastActionNote(`Touche pressée : [${keyLabel}]`);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#123C2A] dark:text-[#B8E86A] bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] px-2 py-0.5 rounded-md">
            Simulateur Physique
          </span>
          <span className="text-[10px] font-mono text-[#53635B] dark:text-[#B7C5BE]">Casio fx-991ES</span>
        </div>
        <h2 className="text-xl font-bold text-[#15251E] dark:text-[#F0F4EF] tracking-tight">
          Simulateur Tactile fx-991ES
        </h2>
        <p className="text-xs sm:text-sm text-[#53635B] dark:text-[#B7C5BE]">
          Entraîne-toi sur le clavier virtuel avec le comportement exact de l'écran Casio.
        </p>
      </div>

      {/* Guided Training Scenarios */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] shadow-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#123C2A] dark:text-[#B8E86A]" />
            <span>Missions guidées (1-clic pour t'entraîner) :</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {guidedScenarios.map((sc) => (
            <button
              key={sc.id}
              type="button"
              onClick={() => {
                setGuidedScenario({ ...sc, currentStep: 0 });
                setLine1('0');
                setLine2('');
                setLastActionNote(`Mission lancée : ${sc.title}`);
              }}
              className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                guidedScenario?.id === sc.id
                  ? 'bg-[#F0F3EE] dark:bg-[#243A31] border-[#123C2A] dark:border-[#B8E86A] text-[#123C2A] dark:text-[#B8E86A] font-bold'
                  : 'bg-white dark:bg-[#1D3028] border-[#DCE2DC] dark:border-[#34483F] text-[#15251E] dark:text-[#F0F4EF] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="line-clamp-1">{sc.title}</span>
                <ChevronRight className="w-3.5 h-3.5 shrink-0 ml-1" />
              </div>
            </button>
          ))}
        </div>

        {guidedScenario && (
          <div className="p-3 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#123C2A]/30 dark:border-[#B8E86A]/40 rounded-xl space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#123C2A] dark:text-[#B8E86A]">
                Étape {guidedScenario.currentStep + 1} / {guidedScenario.steps.length}
              </span>
              <button
                type="button"
                onClick={() => setGuidedScenario(null)}
                className="text-[10px] text-[#53635B] dark:text-[#B7C5BE] underline cursor-pointer"
              >
                Quitter la mission
              </button>
            </div>
            <p className="text-[#15251E] dark:text-[#F0F4EF] font-semibold">
              👉 {guidedScenario.steps[guidedScenario.currentStep].instruction}
            </p>
            <div className="text-[11px] text-[#53635B] dark:text-[#B7C5BE]">
              Touche attendue : <span className="font-mono font-bold text-[#123C2A] dark:text-[#B8E86A]">[{guidedScenario.steps[guidedScenario.currentStep].key}]</span>
            </div>
          </div>
        )}
      </div>

      {/* Calculator Body Simulation Container */}
      <div className="p-3.5 sm:p-5 rounded-3xl bg-[#16251E] border border-[#2D4337] shadow-xl space-y-3.5 select-none">
        {/* Authentic Casio LCD Screen */}
        <CasioScreen
          line1={line1}
          line2={line2}
          indicators={indicators}
          title="Casio fx-991ES Natural-V.P.A.M."
        />

        {/* Live Note ticker below screen */}
        <div className="p-2 rounded-xl bg-[#0F1C16] border border-[#24372D] text-[11px] font-mono text-[#B7C5BE] flex items-center justify-between">
          <span className="truncate pr-2">{lastActionNote}</span>
          <button
            type="button"
            onClick={() => handleKeyPress('AC')}
            className="text-[10px] uppercase font-bold text-[#EA580C] hover:underline cursor-pointer shrink-0"
          >
            Reset
          </button>
        </div>

        {/* Realistic Keypad Grid */}
        <div className="space-y-1.5 pt-1">
          {/* Row 1: System Keys (SHIFT, ALPHA, REPLAY, MODE, ON) */}
          <div className="grid grid-cols-5 gap-1">
            <CasioKey label="SHIFT" variant="shift" active={isShiftActive} onClick={() => handleKeyPress('SHIFT')} />
            <CasioKey label="ALPHA" variant="alpha" active={isAlphaActive} onClick={() => handleKeyPress('ALPHA')} />
            <CasioKey label="REPLAY" variant="function" onClick={() => handleKeyPress('REPLAY')} />
            <CasioKey label="MODE" shiftLabel="SETUP" variant="function" onClick={() => handleKeyPress('MODE')} />
            <CasioKey label="ON" variant="action" onClick={() => handleKeyPress('AC')} />
          </div>

          {/* Row 2: Secondary Scientific Functions */}
          <div className="grid grid-cols-6 gap-1">
            <CasioKey label="CALC" shiftLabel="SOLVE" onClick={() => handleKeyPress('CALC')} />
            <CasioKey label="∫dx" shiftLabel="d/dx" onClick={() => handleKeyPress('∫dx')} />
            <CasioKey label="x⁻¹" shiftLabel="x!" onClick={() => handleKeyPress('x⁻¹')} />
            <CasioKey label="log" shiftLabel="10ˣ" onClick={() => handleKeyPress('log')} />
            <CasioKey label="ln" shiftLabel="eˣ" onClick={() => handleKeyPress('ln')} />
            <CasioKey label="x²" shiftLabel="x³" onClick={() => handleKeyPress('x²')} />
          </div>

          {/* Row 3: Math & Trigo */}
          <div className="grid grid-cols-6 gap-1">
            <CasioKey label="■/□" shiftLabel="ab/c" onClick={() => handleKeyPress('■/□')} />
            <CasioKey label="√" shiftLabel="³√" onClick={() => handleKeyPress('√')} />
            <CasioKey label="x■" shiftLabel="■√" onClick={() => handleKeyPress('x■')} />
            <CasioKey label="sin" shiftLabel="sin⁻¹" onClick={() => handleKeyPress('sin')} />
            <CasioKey label="cos" shiftLabel="cos⁻¹" onClick={() => handleKeyPress('cos')} />
            <CasioKey label="tan" shiftLabel="tan⁻¹" onClick={() => handleKeyPress('tan')} />
          </div>

          {/* Row 4: Variables & Parentheses */}
          <div className="grid grid-cols-6 gap-1">
            <CasioKey label="STO" shiftLabel="RCL" onClick={() => handleKeyPress('STO')} />
            <CasioKey label="ENG" shiftLabel="←" onClick={() => handleKeyPress('ENG')} />
            <CasioKey label="(" onClick={() => handleKeyPress('(')} />
            <CasioKey label=")" alphaLabel="X" onClick={() => handleKeyPress(')')} />
            <CasioKey label="S⇔D" onClick={() => handleKeyPress('S⇔D')} />
            <CasioKey label="M+" shiftLabel="M-" onClick={() => handleKeyPress('M+')} />
          </div>

          {/* Row 5: Numeric Keypad 7, 8, 9, DEL, AC */}
          <div className="grid grid-cols-5 gap-1">
            <CasioKey label="7" variant="digit" onClick={() => handleKeyPress('7')} />
            <CasioKey label="8" variant="digit" onClick={() => handleKeyPress('8')} />
            <CasioKey label="9" variant="digit" onClick={() => handleKeyPress('9')} />
            <CasioKey label="DEL" variant="action" onClick={() => handleKeyPress('DEL')} />
            <CasioKey label="AC" variant="action" onClick={() => handleKeyPress('AC')} />
          </div>

          {/* Row 6: Numeric Keypad 4, 5, 6, ×, ÷ */}
          <div className="grid grid-cols-5 gap-1">
            <CasioKey label="4" variant="digit" onClick={() => handleKeyPress('4')} />
            <CasioKey label="5" variant="digit" onClick={() => handleKeyPress('5')} />
            <CasioKey label="6" variant="digit" onClick={() => handleKeyPress('6')} />
            <CasioKey label="×" variant="operator" onClick={() => handleKeyPress('×')} />
            <CasioKey label="÷" variant="operator" onClick={() => handleKeyPress('÷')} />
          </div>

          {/* Row 7: Numeric Keypad 1, 2, 3, +, - */}
          <div className="grid grid-cols-5 gap-1">
            <CasioKey label="1" variant="digit" onClick={() => handleKeyPress('1')} />
            <CasioKey label="2" variant="digit" onClick={() => handleKeyPress('2')} />
            <CasioKey label="3" variant="digit" onClick={() => handleKeyPress('3')} />
            <CasioKey label="+" variant="operator" onClick={() => handleKeyPress('+')} />
            <CasioKey label="-" variant="operator" onClick={() => handleKeyPress('-')} />
          </div>

          {/* Row 8: Numeric Keypad 0, ., ×10ˣ, Ans, = */}
          <div className="grid grid-cols-5 gap-1">
            <CasioKey label="0" variant="digit" onClick={() => handleKeyPress('0')} />
            <CasioKey label="." variant="digit" onClick={() => handleKeyPress('.')} />
            <CasioKey label="×10ˣ" shiftLabel="π" variant="digit" onClick={() => handleKeyPress('×10ˣ')} />
            <CasioKey label="Ans" shiftLabel="%" onClick={() => handleKeyPress('Ans')} />
            <CasioKey label="=" variant="operator" active onClick={() => handleKeyPress('=')} />
          </div>
        </div>
      </div>
    </div>
  );
};
