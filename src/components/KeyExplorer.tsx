import React, { useState } from 'react';
import { FX991ES_KEYS } from '../data/fx991esKeys';
import { FX991ES_FUNCTIONS } from '../data/fx991esData';
import { CasioKey } from './CasioKey';
import { CasioKeyInfo, CasioFunction } from '../types/calculator';
import { Sparkles, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface KeyExplorerProps {
  onSelectFunction: (func: CasioFunction) => void;
}

export const KeyExplorer: React.FC<KeyExplorerProps> = ({ onSelectFunction }) => {
  const [selectedKey, setSelectedKey] = useState<CasioKeyInfo>(FX991ES_KEYS[0]);
  const [filterType, setFilterType] = useState<string>('all');

  const filteredKeys = filterType === 'all'
    ? FX991ES_KEYS
    : FX991ES_KEYS.filter(k => k.type === filterType);

  const associatedFuncObjects = FX991ES_FUNCTIONS.filter(f =>
    selectedKey.associatedFunctions?.includes(f.id)
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-[#15251E] dark:text-[#F0F4EF] tracking-tight">
          Explorateur des touches
        </h2>
        <p className="text-xs sm:text-sm text-[#53635B] dark:text-[#B7C5BE]">
          Touche un bouton du clavier Casio fx-991ES pour découvrir ses raccourcis cachés et les fonctions associées.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {[
          { id: 'all', label: 'Toutes les touches' },
          { id: 'system', label: 'Système (SHIFT/ALPHA)' },
          { id: 'mode', label: 'Modes & Setup' },
          { id: 'function', label: 'Fonctions' },
          { id: 'operator', label: 'Opérateurs' },
          { id: 'digit', label: 'Pavé numérique' }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilterType(tab.id)}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all cursor-pointer ${
              filterType === tab.id
                ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
                : 'bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] text-[#53635B] dark:text-[#B7C5BE] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Interactive Key Grid */}
      <div className="p-3.5 sm:p-4 bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl shadow-xs">
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          {filteredKeys.map((k) => (
            <CasioKey
              key={k.code}
              label={k.label}
              shiftLabel={k.shiftLabel}
              alphaLabel={k.alphaLabel}
              active={selectedKey.code === k.code}
              size="md"
              onClick={() => setSelectedKey(k)}
            />
          ))}
        </div>
      </div>

      {/* Selected Key Detail Card */}
      <div className="bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-5 sm:p-6 space-y-4 shadow-xs">
        <div className="flex items-start justify-between gap-3 border-b border-[#DCE2DC] dark:border-[#34483F] pb-3">
          <div className="flex items-center gap-3">
            <CasioKey
              label={selectedKey.label}
              shiftLabel={selectedKey.shiftLabel}
              alphaLabel={selectedKey.alphaLabel}
              size="lg"
            />
            <div>
              <span className="text-[11px] font-mono uppercase text-[#123C2A] dark:text-[#B8E86A] font-bold tracking-wider">
                Touche {selectedKey.code}
              </span>
              <h3 className="text-lg font-bold text-[#15251E] dark:text-[#F0F4EF]">
                {selectedKey.label}
              </h3>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F0F3EE] dark:bg-[#243A31] text-[#53635B] dark:text-[#B7C5BE] font-mono border border-[#DCE2DC] dark:border-[#34483F]">
            {selectedKey.type}
          </span>
        </div>

        {/* Triple Action Layer (Normal, SHIFT, ALPHA) */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Les fonctions de cette touche :</span>
          </span>

          <div className="space-y-2 text-xs">
            {/* Normal Press */}
            <div className="p-3 rounded-2xl bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#15251E] dark:text-[#F0F4EF] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#123C2A] dark:bg-[#B8E86A]" />
                  <span>Appui direct</span>
                </span>
                <span className="font-mono font-bold text-[#123C2A] dark:text-[#B8E86A]">
                  [{selectedKey.label}]
                </span>
              </div>
              <p className="text-[#53635B] dark:text-[#B7C5BE] leading-relaxed">
                {selectedKey.description}
              </p>
            </div>

            {/* Shift Press */}
            {selectedKey.shiftDescription && (
              <div className="p-3 rounded-2xl bg-[#FEF3C7]/40 dark:bg-[#78350F]/20 border border-[#FDE68A] dark:border-[#92400E] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#92400E] dark:text-[#FDE68A] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
                    <span>Fonction Jaune [SHIFT]</span>
                  </span>
                  <span className="font-mono font-bold text-[#D97706] dark:text-[#FBBF24]">
                    {selectedKey.shiftLabel ? `[SHIFT] + [${selectedKey.shiftLabel}]` : 'Aucune'}
                  </span>
                </div>
                <p className="text-[#92400E] dark:text-[#FDE68A] leading-relaxed">
                  {selectedKey.shiftDescription}
                </p>
              </div>
            )}

            {/* Alpha Press */}
            {selectedKey.alphaDescription && (
              <div className="p-3 rounded-2xl bg-[#FEE2E2]/40 dark:bg-[#7F1D1D]/20 border border-[#FECACA] dark:border-[#991B1B] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#991B1B] dark:text-[#FCA5A5] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Fonction Rouge [ALPHA]</span>
                  </span>
                  <span className="font-mono font-bold text-[#DC2626] dark:text-[#F87171]">
                    {selectedKey.alphaLabel ? `[ALPHA] + [${selectedKey.alphaLabel}]` : 'Aucune'}
                  </span>
                </div>
                <p className="text-[#991B1B] dark:text-[#FCA5A5] leading-relaxed">
                  {selectedKey.alphaDescription}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Associated Functions Cards */}
        {associatedFuncObjects.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-[#DCE2DC] dark:border-[#34483F]">
            <span className="text-xs font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider block">
              Fiches associées utilisant cette touche :
            </span>

            <div className="space-y-1.5">
              {associatedFuncObjects.map((func) => (
                <button
                  key={func.id}
                  type="button"
                  onClick={() => onSelectFunction(func)}
                  className="w-full text-left p-3 rounded-2xl bg-[#F0F3EE] hover:bg-[#E5EAE2] dark:bg-[#243A31] dark:hover:bg-[#2C443A] border border-[#DCE2DC] dark:border-[#34483F] flex items-center justify-between transition-colors cursor-pointer group"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-[#123C2A] dark:text-[#B8E86A] font-bold">
                        {func.modeCasio}
                      </span>
                      <span className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A]">
                        {func.nom}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-1">
                      {func.touchesRapides.join(' → ')}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#89968F] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
