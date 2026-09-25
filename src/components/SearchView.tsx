import React, { useState, useMemo } from 'react';
import { FX991ES_FUNCTIONS } from '../data/fx991esData';
import { CasioFunction } from '../types/calculator';
import { searchFunctions } from '../utils/searchHelper';
import { Search, X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SearchViewProps {
  onSelectFunction: (func: CasioFunction) => void;
  masteredIds: string[];
}

export const SearchView: React.FC<SearchViewProps> = ({ onSelectFunction, masteredIds }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const suggestedQueries = [
    'second degré',
    'tableau de valeurs',
    "dérivée f'(a)",
    'radians / degrés',
    'suites Ans',
    'systèmes 2x2',
    'moyenne & écart-type',
    'combinaisons nCr',
    'solveur solve',
    'produit scalaire'
  ];

  const categories = useMemo(() => {
    const cats = Array.from(new Set(FX991ES_FUNCTIONS.map((f) => f.categorie)));
    return ['all', ...cats];
  }, []);

  const results = useMemo(() => {
    let list = query.trim() ? searchFunctions(FX991ES_FUNCTIONS, query) : FX991ES_FUNCTIONS;

    if (selectedCategory !== 'all') {
      list = list.filter((f) => f.categorie === selectedCategory);
    }

    return list;
  }, [query, selectedCategory]);

  return (
    <div className="space-y-4">
      {/* Search Input Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#123C2A] dark:text-[#B8E86A]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tape un calcul, une touche, un chapitre (ex: f'(x), racines, delta...)"
          autoFocus
          className="w-full bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl pl-10 pr-10 py-3 text-sm text-[#15251E] dark:text-[#F0F4EF] placeholder:text-[#89968F] dark:placeholder:text-[#718079] focus:outline-none focus:border-[#123C2A] dark:focus:border-[#B8E86A] focus:ring-2 focus:ring-[#123C2A]/20 dark:focus:ring-[#B8E86A]/30 shadow-xs"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#89968F] hover:text-[#15251E] dark:hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Suggested Search Chips */}
      {!query && (
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider block">
            Recherches fréquentes Première S2
          </span>
          <div className="flex flex-wrap gap-1.5">
            {suggestedQueries.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setQuery(item)}
                className="text-xs px-3 py-1.5 rounded-xl bg-white dark:bg-[#1D3028] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] text-[#15251E] dark:text-[#F0F4EF] active:scale-95 transition-all cursor-pointer shadow-2xs font-semibold"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Category Filter Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
                : 'bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] text-[#53635B] dark:text-[#B7C5BE] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31]'
            }`}
          >
            {cat === 'all' ? 'Toutes les catégories' : cat}
          </button>
        ))}
      </div>

      {/* Results Count & Clear */}
      <div className="flex items-center justify-between text-xs text-[#53635B] dark:text-[#B7C5BE] px-1">
        <span>
          {results.length} {results.length > 1 ? 'procédures trouvées' : 'procédure trouvée'}
        </span>
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSelectedCategory('all');
            }}
            className="text-[#123C2A] dark:text-[#B8E86A] hover:underline cursor-pointer font-semibold"
          >
            Effacer la recherche
          </button>
        )}
      </div>

      {/* Results List */}
      <div className="space-y-2.5">
        {results.length === 0 ? (
          <div className="text-center py-10 bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-6 space-y-2 shadow-xs">
            <span className="text-3xl">🔍</span>
            <h3 className="text-sm font-bold text-[#15251E] dark:text-[#F0F4EF]">
              Aucun résultat pour "{query}"
            </h3>
            <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] max-w-xs mx-auto">
              Essaie avec un mot simple comme "dérivée", "fraction", "matrice" ou consulte le catalogue complet.
            </p>
          </div>
        ) : (
          results.map((func) => {
            const isMastered = masteredIds.includes(func.id);

            return (
              <button
                key={func.id}
                type="button"
                onClick={() => onSelectFunction(func)}
                className="w-full text-left p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/30 dark:hover:border-[#6FAF82]/50 shadow-xs transition-all cursor-pointer group space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#123C2A] dark:text-[#B8E86A] bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] px-1.5 py-0.2 rounded">
                        {func.modeCasio}
                      </span>
                      <span className="text-[10px] text-[#53635B] dark:text-[#B7C5BE]">
                        {func.categorie}
                      </span>
                      {isMastered && (
                        <span className="text-[10px] font-bold text-[#123C2A] dark:text-[#B8E86A] flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3 text-[#123C2A] dark:text-[#B8E86A]" />
                          <span>Maîtrisé</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] transition-colors">
                      {func.nom}
                    </h3>
                  </div>

                  <ArrowRight className="w-4 h-4 text-[#89968F] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>

                <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-1">
                  {func.description}
                </p>

                {/* Keystrokes Pill sequence */}
                <div className="pt-2 border-t border-[#F0F3EE] dark:border-[#243A31] flex items-center justify-between">
                  <div className="flex items-center gap-1 font-mono text-[10px] text-[#15251E] dark:text-[#F0F4EF]">
                    <span className="text-[#89968F] dark:text-[#718079] font-sans font-medium mr-1">Touches :</span>
                    {func.touchesRapides.map((t, idx) => (
                      <React.Fragment key={idx}>
                        <span className="font-extrabold px-1.5 py-0.2 rounded bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] text-[#123C2A] dark:text-[#B8E86A]">
                          {t}
                        </span>
                        {idx < func.touchesRapides.length - 1 && <span className="text-[#89968F]">→</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-[#123C2A] dark:text-[#B8E86A]">
                    Ouvrir &gt;
                  </span>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};
