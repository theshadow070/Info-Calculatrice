import React, { useState } from 'react';
import { FX991ES_FUNCTIONS } from '../data/fx991esData';
import { CasioFunction } from '../types/calculator';
import { ArrowRight, CheckCircle2, Bookmark, Filter } from 'lucide-react';

interface ExploreViewProps {
  onSelectFunction: (func: CasioFunction) => void;
  masteredIds: string[];
  favoriteIds: string[];
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  onSelectFunction,
  masteredIds,
  favoriteIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedRelevance, setSelectedRelevance] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'Équations & Systèmes', name: 'Équations & Systèmes' },
    { id: 'Fonctions & Analyse', name: 'Fonctions & Analyse' },
    { id: 'Calcul Fondamental', name: 'Calcul & Fractions' },
    { id: 'Trigonométrie & Géométrie', name: 'Trigonométrie & Géométrie' },
    { id: 'Suites & Récurrence', name: 'Suites & Récurrence' },
    { id: 'Statistiques & Probabilités', name: 'Statistiques & Probas' },
    { id: 'Algèbre & Matrices', name: 'Matrices & Complexes' },
    { id: 'Constantes & Outils', name: 'Constantes & Outils' }
  ];

  const filtered = FX991ES_FUNCTIONS.filter((func) => {
    if (selectedCategory !== 'all' && func.categorie !== selectedCategory) return false;
    if (selectedLevel !== 'all' && func.niveau !== selectedLevel) return false;
    if (selectedRelevance !== 'all' && func.pertinenceS2 !== selectedRelevance) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-[#15251E] dark:text-[#F0F4EF] tracking-tight">
          Catalogue des Fonctions fx-991ES
        </h2>
        <p className="text-xs text-[#53635B] dark:text-[#B7C5BE]">
          Les {FX991ES_FUNCTIONS.length} fonctions certifiées pour la Casio fx-991ES originale.
        </p>
      </div>

      {/* Category Pills Slider */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
                : 'bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] text-[#53635B] dark:text-[#B7C5BE] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Secondary Filters */}
      <div className="flex flex-wrap items-center gap-2 pt-0.5">
        <div className="flex items-center gap-1.5 bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-xl px-2.5 py-1.5 shadow-2xs">
          <Filter className="w-3.5 h-3.5 text-[#89968F]" />
          <span className="text-[10px] text-[#53635B] dark:text-[#B7C5BE] uppercase font-bold">Utilité :</span>
          <select
            value={selectedRelevance}
            onChange={(e) => setSelectedRelevance(e.target.value)}
            className="bg-transparent text-[#15251E] dark:text-[#F0F4EF] focus:outline-none text-xs cursor-pointer"
          >
            <option value="all">Toutes importances</option>
            <option value="indispensable">Indispensable</option>
            <option value="tres_utile">Très utile</option>
            <option value="utile">Utile selon exercices</option>
            <option value="avance">Avancé</option>
          </select>
        </div>

        <div className="flex items-center gap-1 bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-xl px-2.5 py-1.5 shadow-2xs">
          <span className="text-[10px] text-[#53635B] dark:text-[#B7C5BE] uppercase font-bold">Niveau :</span>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="bg-transparent text-[#15251E] dark:text-[#F0F4EF] focus:outline-none text-xs cursor-pointer"
          >
            <option value="all">Tous les niveaux</option>
            <option value="debutant">Débutant</option>
            <option value="intermediaire">Intermédiaire</option>
            <option value="avance">Avancé</option>
          </select>
        </div>

        {(selectedCategory !== 'all' || selectedLevel !== 'all' || selectedRelevance !== 'all') && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedLevel('all');
              setSelectedRelevance('all');
            }}
            className="text-[11px] text-[#123C2A] dark:text-[#B8E86A] underline cursor-pointer ml-auto font-semibold"
          >
            Réinitialiser filtres
          </button>
        )}
      </div>

      {/* Function Cards Grid */}
      <div className="space-y-2.5 pt-1">
        {filtered.length === 0 ? (
          <div className="text-center py-10 bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-6 space-y-2 shadow-xs">
            <span className="text-3xl">🔍</span>
            <h3 className="text-sm font-bold text-[#15251E] dark:text-[#F0F4EF]">
              Aucune fonction trouvée
            </h3>
            <p className="text-xs text-[#53635B] dark:text-[#B7C5BE]">
              Ajuste tes critères de filtre pour voir d'autres fonctions.
            </p>
          </div>
        ) : (
          filtered.map((func) => {
            const isMastered = masteredIds.includes(func.id);
            const isFavorite = favoriteIds.includes(func.id);

            return (
              <button
                key={func.id}
                type="button"
                onClick={() => onSelectFunction(func)}
                className="w-full text-left p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/30 dark:hover:border-[#6FAF82]/50 shadow-xs transition-all cursor-pointer group space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
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
                      {isFavorite && (
                        <Bookmark className="w-3 h-3 text-[#E5A93C] fill-[#E5A93C]" />
                      )}
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] transition-colors">
                      {func.nom}
                    </h3>
                  </div>

                  <ArrowRight className="w-4 h-4 text-[#89968F] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>

                <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] line-clamp-2 leading-relaxed">
                  {func.description}
                </p>

                {/* Keystrokes Preview */}
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
                    Fiche &gt;
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
