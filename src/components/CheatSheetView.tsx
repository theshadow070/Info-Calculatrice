import React, { useState } from 'react';
import { FX991ES_FUNCTIONS } from '../data/fx991esData';
import { CasioFunction } from '../types/calculator';
import { BookOpen, Copy, Check, ArrowRight, Zap, Filter, Star } from 'lucide-react';

interface CheatSheetViewProps {
  onSelectFunction: (func: CasioFunction) => void;
}

export const CheatSheetView: React.FC<CheatSheetViewProps> = ({ onSelectFunction }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState<string>('all');

  const s2Essentials = FX991ES_FUNCTIONS.filter(f =>
    f.pertinenceS2 === 'indispensable' || f.pertinenceS2 === 'tres_utile'
  );

  const filteredItems = activeTheme === 'all'
    ? s2Essentials
    : s2Essentials.filter(f => f.programmeS2Theme === activeTheme);

  const handleCopy = (id: string, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const themes = [
    { id: 'all', label: 'Tous les indispensables' },
    { id: 'second_degre', label: 'Second Degré' },
    { id: 'derivation', label: 'Dérivation' },
    { id: 'fonctions', label: 'Fonctions' },
    { id: 'trigonometrie', label: 'Trigonométrie' },
    { id: 'suites', label: 'Suites' },
    { id: 'probabilites_stats', label: 'Probas & Stats' },
    { id: 'geometrie_vecteurs', label: 'Vecteurs & Systèmes' }
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#123C2A] dark:text-[#B8E86A] bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] px-2 py-0.5 rounded-md">
            Aide-mémoire de poche
          </span>
          <span className="text-[10px] font-mono text-[#53635B] dark:text-[#B7C5BE]">1ère S2</span>
        </div>
        <h2 className="text-xl font-bold text-[#15251E] dark:text-[#F0F4EF] tracking-tight">
          Fiche Révision Bac & Devoirs
        </h2>
        <p className="text-xs sm:text-sm text-[#53635B] dark:text-[#B7C5BE]">
          Les raccourcis indispensables à connaître par cœur pour gagner 15 minutes en épreuve de maths.
        </p>
      </div>

      {/* Theme Filters */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {themes.map(t => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTheme(t.id)}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all cursor-pointer ${
              activeTheme === t.id
                ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
                : 'bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] text-[#53635B] dark:text-[#B7C5BE] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31]'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Quick Summary Cards */}
      <div className="space-y-2.5">
        {filteredItems.map((func) => {
          const shortcutStr = func.touchesRapides.join(' → ');
          const isCopied = copiedId === func.id;

          return (
            <div
              key={func.id}
              onClick={() => onSelectFunction(func)}
              className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/30 dark:hover:border-[#6FAF82]/50 shadow-xs transition-all cursor-pointer group space-y-2.5"
            >
              {/* Header inside card */}
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-[#F0F3EE] dark:bg-[#243A31] text-[#123C2A] dark:text-[#B8E86A] border border-[#DCE2DC] dark:border-[#34483F] font-bold">
                      {func.modeCasio}
                    </span>
                    <span className="text-[10px] text-[#53635B] dark:text-[#B7C5BE]">
                      {func.categorie}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] transition-colors">
                    {func.nom}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleCopy(func.id, shortcutStr, e)}
                  className="p-1.5 rounded-lg bg-[#F0F3EE] hover:bg-[#E5EAE2] dark:bg-[#243A31] dark:hover:bg-[#2C443A] text-[#53635B] dark:text-[#B7C5BE] transition-colors cursor-pointer"
                  title="Copier la séquence"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-[#123C2A] dark:text-[#B8E86A]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Keystrokes Pill Strip */}
              <div className="flex flex-wrap items-center gap-1 font-mono text-[10px]">
                {func.touchesRapides.map((k, idx) => (
                  <React.Fragment key={idx}>
                    <span className="font-extrabold px-1.5 py-0.5 rounded bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] text-[#123C2A] dark:text-[#B8E86A]">
                      {k}
                    </span>
                    {idx < func.touchesRapides.length - 1 && <span className="text-[#89968F]">→</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* Bottom rule to remember */}
              <div className="flex items-center justify-between pt-1 border-t border-[#F0F3EE] dark:border-[#243A31] text-[11px]">
                <span className="text-[#53635B] dark:text-[#B7C5BE] truncate max-w-[220px]">
                  {func.aRetenir}
                </span>
                <span className="font-semibold text-[#123C2A] dark:text-[#B8E86A] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  <span>Détail</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
