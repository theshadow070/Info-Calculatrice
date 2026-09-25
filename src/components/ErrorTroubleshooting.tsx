import React, { useState } from 'react';
import { FX991ES_ERRORS } from '../data/fx991esErrors';
import { CasioErrorInfo } from '../types/calculator';
import { AlertCircle, CheckCircle2, ChevronRight, Search } from 'lucide-react';

export const ErrorTroubleshooting: React.FC = () => {
  const [selectedError, setSelectedError] = useState<CasioErrorInfo>(FX991ES_ERRORS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredErrors = FX991ES_ERRORS.filter(err =>
    err.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    err.signification.toLowerCase().includes(searchQuery.toLowerCase()) ||
    err.causesCourantes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-[#15251E] dark:text-[#F0F4EF] tracking-tight">
          Guide des erreurs Casio
        </h2>
        <p className="text-xs sm:text-sm text-[#53635B] dark:text-[#B7C5BE]">
          Comprends immédiatement ce que signifie un message d'erreur et comment le réparer en 2 secondes.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#89968F]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher une erreur (ex: Math ERROR, syntaxe, angle)..."
          className="w-full bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-[#15251E] dark:text-[#F0F4EF] placeholder:text-[#89968F] dark:placeholder:text-[#718079] focus:outline-none focus:border-[#123C2A] dark:focus:border-[#B8E86A] shadow-xs"
        />
      </div>

      {/* Error Selection List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {filteredErrors.map((err) => {
          const isSelected = selectedError.code === err.code;
          return (
            <button
              key={err.code}
              type="button"
              onClick={() => setSelectedError(err)}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                isSelected
                  ? 'bg-[#F0F3EE] dark:bg-[#243A31] border-[#123C2A] dark:border-[#B8E86A] shadow-xs'
                  : 'bg-white dark:bg-[#1D3028] border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/30 dark:hover:bg-[#243A31]'
              }`}
            >
              <div className="space-y-1 pr-2">
                <span className={`text-xs font-bold block ${isSelected ? 'text-[#123C2A] dark:text-[#B8E86A]' : 'text-[#15251E] dark:text-[#F0F4EF]'}`}>
                  {err.titre}
                </span>
                <span className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-1">
                  {err.signification}
                </span>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#123C2A] dark:text-[#B8E86A]' : 'text-[#89968F]'}`} />
            </button>
          );
        })}
      </div>

      {/* Selected Error Detailed Card */}
      {selectedError && (
        <div className="bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 border-b border-[#DCE2DC] dark:border-[#34483F] pb-3">
            <AlertCircle className="w-5 h-5 text-[#DC2626] dark:text-[#F87171] shrink-0" />
            <h3 className="text-base font-bold text-[#15251E] dark:text-[#F0F4EF]">
              {selectedError.titre}
            </h3>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider">
              Ce que ça veut dire :
            </span>
            <p className="text-xs sm:text-sm text-[#15251E] dark:text-[#F0F4EF] leading-relaxed bg-[#F0F3EE] dark:bg-[#243A31] p-3.5 rounded-2xl border border-[#DCE2DC] dark:border-[#34483F]">
              {selectedError.signification}
            </p>
          </div>

          {/* Causes */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider">
              Causes les plus fréquentes :
            </span>
            <ul className="space-y-1.5 text-xs text-[#15251E] dark:text-[#F0F4EF]">
              {selectedError.causesCourantes.map((cause, i) => (
                <li key={i} className="flex items-start gap-2 bg-[#F0F3EE] dark:bg-[#243A31] p-2.5 rounded-xl border border-[#DCE2DC] dark:border-[#34483F]">
                  <span className="text-[#DC2626] dark:text-[#F87171] font-bold shrink-0">•</span>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fix */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-bold text-[#123C2A] dark:text-[#B8E86A] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#123C2A] dark:text-[#B8E86A]" />
              <span>Comment résoudre immédiatement :</span>
            </span>
            <div className="p-3.5 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl text-xs sm:text-sm text-[#15251E] dark:text-[#F0F4EF] font-medium leading-relaxed">
              {selectedError.solutionImmediate}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
