import React from 'react';
import { FX991ES_FUNCTIONS } from '../data/fx991esData';
import { CasioFunction } from '../types/calculator';
import { Bookmark, CheckCircle2, History, ArrowRight, Trophy } from 'lucide-react';

interface FavoritesViewProps {
  favoriteIds: string[];
  masteredIds: string[];
  historyIds: string[];
  onSelectFunction: (func: CasioFunction) => void;
  onClearHistory: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favoriteIds,
  masteredIds,
  historyIds,
  onSelectFunction,
  onClearHistory
}) => {
  const favoriteFunctions = FX991ES_FUNCTIONS.filter((f) => favoriteIds.includes(f.id));
  const historyFunctions = historyIds
    .map((id) => FX991ES_FUNCTIONS.find((f) => f.id === id))
    .filter((f): f is CasioFunction => f !== undefined);

  const totalCount = FX991ES_FUNCTIONS.length;
  const progressPercent = Math.round((masteredIds.length / totalCount) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-[#15251E] dark:text-[#F0F4EF] tracking-tight">
          Favoris & Progression
        </h2>
        <p className="text-xs sm:text-sm text-[#53635B] dark:text-[#B7C5BE]">
          Suis ta maîtrise de la Casio fx-991ES et retrouve tes fiches mémorisées.
        </p>
      </div>

      {/* Mastery Progress Card */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] shadow-xs space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#E5A93C]" />
            <h3 className="text-sm font-bold text-[#15251E] dark:text-[#F0F4EF]">
              Maîtrise de la fx-991ES
            </h3>
          </div>
          <span className="font-mono text-xs font-bold text-[#123C2A] dark:text-[#B8E86A]">
            {masteredIds.length} / {totalCount} ({progressPercent}%)
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#F0F3EE] dark:bg-[#243A31] rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-[#123C2A] dark:bg-[#B8E86A] h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] leading-relaxed">
          {progressPercent === 100
            ? "Félicitations ! Tu maîtrises l'intégralité des fonctions clés de ta calculatrice pour le bac !"
            : progressPercent >= 50
            ? 'Super progression ! Tu maîtrises déjà plus de la moitié des fonctions du programme.'
            : "Explore les fiches et coche « J'ai compris » pour valider chaque procédure."}
        </p>
      </div>

      {/* Favorites Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <Bookmark className="w-4 h-4 text-[#D97706] fill-[#D97706]" />
            <h3 className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] uppercase tracking-wider">
              Mes favoris ({favoriteFunctions.length})
            </h3>
          </div>
        </div>

        {favoriteFunctions.length === 0 ? (
          <div className="text-center py-6 bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-4 text-xs text-[#53635B] dark:text-[#B7C5BE] space-y-1 shadow-2xs">
            <p>Aucun favori enregistré pour le moment.</p>
            <p className="text-[11px] text-[#89968F] dark:text-[#718079]">
              Touche l'icône marque-page sur une fiche pour l'ajouter ici.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {favoriteFunctions.map((func) => (
              <button
                key={func.id}
                type="button"
                onClick={() => onSelectFunction(func)}
                className="w-full p-4 bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:border-[#123C2A]/30 dark:hover:border-[#6FAF82]/50 rounded-2xl text-left transition-all flex items-center justify-between group cursor-pointer shadow-xs"
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F0F3EE] dark:bg-[#243A31] text-[#123C2A] dark:text-[#B8E86A] border border-[#DCE2DC] dark:border-[#34483F] font-bold">
                      {func.modeCasio}
                    </span>
                    <span className="text-[10px] text-[#53635B] dark:text-[#B7C5BE]">
                      {func.categorie}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#15251E] dark:text-[#F0F4EF] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] transition-colors">
                    {func.nom}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-[#89968F] group-hover:text-[#123C2A] dark:group-hover:text-[#B8E86A] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* History Section */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <History className="w-4 h-4 text-[#53635B] dark:text-[#B7C5BE]" />
            <h3 className="text-xs font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider">
              Historique récent ({historyFunctions.length})
            </h3>
          </div>
          {historyFunctions.length > 0 && (
            <button
              type="button"
              onClick={onClearHistory}
              className="text-[11px] text-[#53635B] hover:text-[#DC2626] dark:hover:text-[#EF4444] cursor-pointer"
            >
              Effacer historique
            </button>
          )}
        </div>

        {historyFunctions.length === 0 ? (
          <div className="text-center py-6 bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-4 text-xs text-[#53635B] dark:text-[#B7C5BE] shadow-2xs">
            Ton historique de consultation apparaîtra ici.
          </div>
        ) : (
          <div className="space-y-1.5">
            {historyFunctions.map((func) => (
              <button
                key={func.id}
                type="button"
                onClick={() => onSelectFunction(func)}
                className="w-full p-3 rounded-2xl bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31] text-left transition-all flex items-center justify-between text-xs cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#53635B] dark:text-[#B7C5BE] font-mono text-[10px]">{func.modeCasio}</span>
                  <span className="font-semibold text-[#15251E] dark:text-[#F0F4EF] truncate">{func.nom}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#89968F] shrink-0" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
