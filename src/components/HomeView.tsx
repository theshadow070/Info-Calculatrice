import React, { useState, useMemo } from 'react';
import { FX991ES_FUNCTIONS } from '../data/fx991esData';
import { PROBLEM_GUIDES } from '../data/problemGuides';
import { CasioFunction } from '../types/calculator';
import { searchFunctions } from '../utils/searchHelper';
import {
  Search,
  Sparkles,
  ArrowRight,
  Zap,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  X,
  HelpCircle
} from 'lucide-react';

interface HomeViewProps {
  onSelectFunction: (func: CasioFunction) => void;
  onOpenSearch: () => void;
  onOpenSimulator: () => void;
  onOpenCheatSheet: () => void;
  onOpenModelCheck: () => void;
  historyIds: string[];
  favoriteIds: string[];
  masteredIds: string[];
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectFunction,
  onOpenSearch,
  onOpenSimulator,
  onOpenCheatSheet,
  onOpenModelCheck,
  historyIds,
  favoriteIds,
  masteredIds
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'essentiels' | 'problemes' | 'programme'>('essentiels');

  // Natural language live search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchFunctions(FX991ES_FUNCTIONS, searchQuery).slice(0, 5);
  }, [searchQuery]);

  // Frequently used quick actions in Première S2
  const topActions = [
    {
      title: 'Résoudre ax² + bx + c = 0',
      subtitle: 'Racines X₁ & X₂, forme exacte',
      icon: '🧮',
      funcId: 'second-degre-eqn',
      keys: ['MODE', '5', '3'],
      badge: 'Indispensable'
    },
    {
      title: 'Tableau de valeurs f(X)',
      subtitle: 'Start / End / Step pour tracer',
      icon: '📋',
      funcId: 'tableau-valeurs-table',
      keys: ['MODE', '8'],
      badge: 'Indispensable'
    },
    {
      title: "Nombre dérivé f'(a)",
      subtitle: 'Pente de la tangente via d/dx',
      icon: '📈',
      funcId: 'derivee-numerique-ddx',
      keys: ['SHIFT', '∫dx'],
      badge: 'Indispensable'
    },
    {
      title: 'Passer en Radians ou Degrés',
      subtitle: 'Indicateur R ou D pour la trigo',
      icon: '📐',
      funcId: 'angle-degre-radian-setup',
      keys: ['SHIFT', 'MODE', '4 / 3'],
      badge: 'Indispensable'
    },
    {
      title: 'Suites avec la touche Ans',
      subtitle: "uₙ₊₁ = f(uₙ) successifs d'un tap",
      icon: '🔢',
      funcId: 'suites-recurrentes-ans',
      keys: ['u₀', '=', 'Ans'],
      badge: 'Indispensable'
    },
    {
      title: 'Système linéaire 2×2',
      subtitle: 'Intersection de deux droites',
      icon: '⚖️',
      funcId: 'systeme-lineaire-2x2',
      keys: ['MODE', '5', '1'],
      badge: 'Indispensable'
    }
  ];

  // Pedagogical groupings for Première S2
  const indispensables = FX991ES_FUNCTIONS.filter((f) => f.pertinenceS2 === 'indispensable');
  const tresUtiles = FX991ES_FUNCTIONS.filter((f) => f.pertinenceS2 === 'tres_utile');
  const utiles = FX991ES_FUNCTIONS.filter((f) => f.pertinenceS2 === 'utile');
  const avances = FX991ES_FUNCTIONS.filter((f) => f.pertinenceS2 === 'avance');

  // Discreet "Découvrir" selection (hidden gems of fx-991ES)
  const secretFeatures = FX991ES_FUNCTIONS.filter((f) => f.estMeconnue);

  return (
    <div className="space-y-4">
      {/* 1. Header with Model Certification Badge */}
      <div className="flex items-start justify-between gap-3 border-b border-[#DCE2DC] dark:border-[#34483F] pb-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono font-bold text-[#123C2A] dark:text-[#B8E86A] bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] px-2 py-0.5 rounded-md">
              CASIO fx-991ES Originale
            </span>
            <span className="text-[10px] font-semibold text-[#53635B] dark:text-[#B7C5BE]">
              Première S2 & Lycée
            </span>
          </div>
          <h1 className="text-xl font-extrabold text-[#15251E] dark:text-[#F0F4EF] tracking-tight">
            Guide des touches & fonctions
          </h1>
          <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] leading-relaxed">
            Trouve la séquence exacte pour tes exercices et devoirs sur table.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenModelCheck}
          className="flex items-center gap-1 text-[11px] font-semibold text-[#15251E] dark:text-[#F0F4EF] bg-white dark:bg-[#1D3028] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] px-2.5 py-1.5 rounded-xl cursor-pointer shadow-xs shrink-0 transition-colors"
          title="Vérifier ton modèle Casio"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#123C2A] dark:text-[#B8E86A]" />
          <span className="hidden sm:inline">Mon modèle</span>
        </button>
      </div>

      {/* 2. Prominent Search Bar (TripAdvisor-inspired visual anchor) */}
      <div className="relative space-y-2">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher (ex: second degré, dérivée f'(x), tableau, radians...)"
            className="w-full bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl pl-10 pr-9 py-3 text-xs sm:text-sm text-[#15251E] dark:text-[#F0F4EF] placeholder:text-[#89968F] dark:placeholder:text-[#718079] focus:outline-none focus:ring-2 focus:ring-[#123C2A]/20 dark:focus:ring-[#B8E86A]/30 focus:border-[#123C2A] dark:focus:border-[#B8E86A] shadow-xs transition-all"
          />
          <Search className="w-4 h-4 text-[#123C2A] dark:text-[#B8E86A] absolute left-3.5 top-3.5 pointer-events-none" />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 p-1 rounded-full text-[#89968F] hover:text-[#15251E] dark:hover:text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Live Search Dropdown */}
        {searchQuery.trim().length > 0 && (
          <div className="bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl p-2 shadow-xl space-y-1 z-30 relative max-h-80 overflow-y-auto no-scrollbar">
            {searchResults.length === 0 ? (
              <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] text-center py-3">
                Aucune fonction ne correspond à "{searchQuery}". Essaie un mot-clé comme <em>"racine"</em>, <em>"tangente"</em> ou <em>"table"</em>.
              </p>
            ) : (
              searchResults.map((func) => (
                <button
                  key={func.id}
                  type="button"
                  onClick={() => onSelectFunction(func)}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-[#F0F3EE] dark:hover:bg-[#243A31] flex items-center justify-between text-xs transition-colors cursor-pointer group"
                >
                  <div className="space-y-0.5 pr-2 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono text-[10px] text-[#123C2A] dark:text-[#B8E86A] font-bold bg-[#F0F3EE] dark:bg-[#243A31] px-1.5 py-0.2 rounded border border-[#DCE2DC] dark:border-[#34483F]">
                        {func.modeCasio}
                      </span>
                      <span className="font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] truncate">
                        {func.nom}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-1">
                      {func.touchesRapides.join(' → ')}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#89968F] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {/* 3. Segmented Navigation Controls with responsive text */}
      <div className="p-1 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl flex gap-1 text-xs">
        <button
          type="button"
          onClick={() => setActiveTab('essentiels')}
          className={`flex-1 py-2 px-1.5 sm:px-2 rounded-xl font-bold flex items-center justify-center gap-1 sm:gap-1.5 transition-all cursor-pointer text-[11px] sm:text-xs text-center ${
            activeTab === 'essentiels'
              ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
              : 'text-[#53635B] dark:text-[#B7C5BE] hover:text-[#15251E] dark:hover:text-white'
          }`}
        >
          <Zap className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Accès rapide</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('problemes')}
          className={`flex-1 py-2 px-1.5 sm:px-2 rounded-xl font-bold flex items-center justify-center gap-1 sm:gap-1.5 transition-all cursor-pointer text-[11px] sm:text-xs text-center ${
            activeTab === 'problemes'
              ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
              : 'text-[#53635B] dark:text-[#B7C5BE] hover:text-[#15251E] dark:hover:text-white'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Par problème</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('programme')}
          className={`flex-1 py-2 px-1.5 sm:px-2 rounded-xl font-bold flex items-center justify-center gap-1 sm:gap-1.5 transition-all cursor-pointer text-[11px] sm:text-xs text-center ${
            activeTab === 'programme'
              ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
              : 'text-[#53635B] dark:text-[#B7C5BE] hover:text-[#15251E] dark:hover:text-white'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Programme S2</span>
        </button>
      </div>

      {/* 4. Tab 1: Top 6 Actions */}
      {activeTab === 'essentiels' && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider">
              Touches directes les plus demandées :
            </span>
            <span className="text-[11px] font-semibold text-[#123C2A] dark:text-[#B8E86A]">
              1-tap vers la procédure
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {topActions.map((action, idx) => {
              const func = FX991ES_FUNCTIONS.find((f) => f.id === action.funcId);
              if (!func) return null;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelectFunction(func)}
                  className="p-3.5 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/40 dark:hover:border-[#6FAF82]/50 text-left transition-all cursor-pointer shadow-xs group flex flex-col justify-between space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <span className="text-xl shrink-0 mt-0.5">{action.icon}</span>
                      <div className="space-y-0.5 min-w-0">
                        <h3 className="text-xs sm:text-sm font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] transition-colors leading-tight">
                          {action.title}
                        </h3>
                        <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-1">
                          {action.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Keystrokes Sequence */}
                  <div className="flex items-center justify-between pt-1 border-t border-[#F0F3EE] dark:border-[#243A31]">
                    <div className="flex flex-wrap items-center gap-1 font-mono text-[10px]">
                      {action.keys.map((k, kIdx) => (
                        <React.Fragment key={kIdx}>
                          <span className="font-extrabold px-1.5 py-0.5 rounded bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] text-[#123C2A] dark:text-[#B8E86A]">
                            {k}
                          </span>
                          {kIdx < action.keys.length - 1 && <span className="text-[#89968F]">→</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#123C2A] dark:text-[#B8E86A] group-hover:translate-x-0.5 transition-transform shrink-0 ml-1">
                      <span>Voir</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. Tab 2: Par Problème d'Exercice */}
      {activeTab === 'problemes' && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider">
              Partir de ce que demande ton exercice :
            </span>
            <span className="text-[11px] font-semibold text-[#123C2A] dark:text-[#B8E86A]">
              12 cas résolus
            </span>
          </div>

          <div className="space-y-2">
            {PROBLEM_GUIDES.map((prob) => {
              const func = FX991ES_FUNCTIONS.find((f) => f.id === prob.functionId);
              if (!func) return null;

              return (
                <button
                  key={prob.id}
                  type="button"
                  onClick={() => onSelectFunction(func)}
                  className="w-full text-left p-3.5 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/40 dark:hover:border-[#6FAF82]/50 shadow-xs transition-all cursor-pointer group flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="text-2xl shrink-0 mt-0.5">{prob.icon}</span>
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] transition-colors leading-snug">
                        {prob.question}
                      </h3>
                      <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-1">
                        {prob.contexte}
                      </p>
                      <div className="flex items-center gap-1.5 pt-0.5 flex-wrap">
                        <span className="text-[10px] font-mono font-bold text-[#123C2A] dark:text-[#B8E86A] bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] px-1.5 py-0.2 rounded">
                          {func.modeCasio}
                        </span>
                        <span className="text-[10px] font-mono text-[#53635B] dark:text-[#B7C5BE] truncate max-w-[200px]">
                          {prob.touchesExpress.join(' → ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-[#F0F3EE] dark:bg-[#243A31] group-hover:bg-[#123C2A] dark:group-hover:bg-[#B8E86A] group-hover:text-white dark:group-hover:text-[#123C2A] text-[#89968F] transition-all shrink-0 mt-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 6. Tab 3: Programme 1ère S2 */}
      {activeTab === 'programme' && (
        <div className="space-y-3.5">
          {/* Section 1 : Indispensables */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-[#123C2A] dark:text-[#B8E86A] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#123C2A] dark:bg-[#B8E86A]" />
                <span>Indispensables (Maîtrise obligatoire)</span>
              </span>
              <span className="text-[10px] font-mono text-[#89968F] font-bold">
                {indispensables.length}
              </span>
            </div>

            <div className="space-y-1">
              {indispensables.map((func) => (
                <button
                  key={func.id}
                  type="button"
                  onClick={() => onSelectFunction(func)}
                  className="w-full text-left p-2.5 rounded-xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/40 flex items-center justify-between text-xs transition-colors cursor-pointer group shadow-2xs"
                >
                  <div className="space-y-0.5 pr-2 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono text-[10px] font-bold text-[#123C2A] dark:text-[#B8E86A]">
                        {func.modeCasio}
                      </span>
                      <span className="font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] truncate">
                        {func.nom}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-1">
                      {func.aRetenir}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#89968F] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Section 2 : Très utiles */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
                <span>Très utiles (Gain de temps en DS)</span>
              </span>
              <span className="text-[10px] font-mono text-[#89968F] font-bold">
                {tresUtiles.length}
              </span>
            </div>

            <div className="space-y-1">
              {tresUtiles.map((func) => (
                <button
                  key={func.id}
                  type="button"
                  onClick={() => onSelectFunction(func)}
                  className="w-full text-left p-2.5 rounded-xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/40 flex items-center justify-between text-xs transition-colors cursor-pointer group shadow-2xs"
                >
                  <div className="space-y-0.5 pr-2 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono text-[10px] font-bold text-[#123C2A] dark:text-[#B8E86A]">
                        {func.modeCasio}
                      </span>
                      <span className="font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] truncate">
                        {func.nom}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-1">
                      {func.description}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#89968F] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Section 3 : Utiles selon exercices */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#6FAF82]" />
                <span>Utiles selon les exercices</span>
              </span>
              <span className="text-[10px] font-mono text-[#89968F] font-bold">
                {utiles.length}
              </span>
            </div>

            <div className="space-y-1">
              {utiles.map((func) => (
                <button
                  key={func.id}
                  type="button"
                  onClick={() => onSelectFunction(func)}
                  className="w-full text-left p-2.5 rounded-xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/40 flex items-center justify-between text-xs transition-colors cursor-pointer group shadow-2xs"
                >
                  <div className="space-y-0.5 pr-2 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono text-[10px] font-bold text-[#123C2A] dark:text-[#B8E86A]">
                        {func.modeCasio}
                      </span>
                      <span className="font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] truncate">
                        {func.nom}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-1">
                      {func.description}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#89968F] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Section 4 : Avancé */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span>Avancé (Pour approfondir & Terminale)</span>
              </span>
              <span className="text-[10px] font-mono text-[#89968F] font-bold">
                {avances.length}
              </span>
            </div>

            <div className="space-y-1">
              {avances.map((func) => (
                <button
                  key={func.id}
                  type="button"
                  onClick={() => onSelectFunction(func)}
                  className="w-full text-left p-2.5 rounded-xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/40 flex items-center justify-between text-xs transition-colors cursor-pointer group shadow-2xs"
                >
                  <div className="space-y-0.5 pr-2 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono text-[10px] font-bold text-[#123C2A] dark:text-[#B8E86A]">
                        {func.modeCasio}
                      </span>
                      <span className="font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] truncate">
                        {func.nom}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-1">
                      {func.description}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#89968F] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 7. Section "Découvrir" (Astuces méconnues) */}
      <div className="p-4 rounded-3xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] space-y-2.5 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#123C2A] dark:text-[#B8E86A]" />
            <h3 className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] uppercase tracking-wider">
              Découvrir (Astuces méconnues fx-991ES)
            </h3>
          </div>
          <span className="text-[10px] text-[#89968F] font-mono">Astuces</span>
        </div>

        <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] leading-relaxed">
          Des raccourcis puissants méconnus des lycéens pour gagner du temps en examen :
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {secretFeatures.slice(0, 4).map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => onSelectFunction(f)}
              className="p-3 rounded-2xl bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/30 text-left transition-all cursor-pointer shadow-2xs group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#123C2A] dark:text-[#B8E86A] font-bold block">
                  {f.modeCasio}
                </span>
                <h4 className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] transition-colors line-clamp-1">
                  {f.nom}
                </h4>
              </div>
              <span className="text-[10px] text-[#53635B] dark:text-[#B7C5BE] mt-1 line-clamp-1">
                {f.astucePro}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
