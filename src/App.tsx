import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'motion/react';
import { FX991ES_FUNCTIONS } from './data/fx991esData';
import { CasioFunction } from './types/calculator';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { HomeView } from './components/HomeView';
import { ExploreView } from './components/ExploreView';
import { SearchView } from './components/SearchView';
import { KeyExplorer } from './components/KeyExplorer';
import { ErrorTroubleshooting } from './components/ErrorTroubleshooting';
import { FavoritesView } from './components/FavoritesView';
import { FunctionDetailView } from './components/FunctionDetailView';
import { CasioSimulator } from './components/CasioSimulator';
import { CheatSheetView } from './components/CheatSheetView';
import { OnboardingModal } from './components/OnboardingModal';
import { SettingsModal } from './components/SettingsModal';
import { ModelClarificationModal } from './components/ModelClarificationModal';
import {
  Home,
  Compass,
  Search,
  Keyboard,
  Bookmark,
  AlertCircle,
  Settings,
  Sun,
  Moon,
  Zap,
  BookOpen
} from 'lucide-react';

type TabType = 'home' | 'explore' | 'search' | 'simulator' | 'cheatsheet' | 'keys' | 'errors' | 'favorites';

const MAIN_TABS: TabType[] = ['home', 'explore', 'search', 'keys', 'favorites'];

function MainApp() {
  const { theme, toggleTheme } = useTheme();

  // Navigation tab
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [tabDirection, setTabDirection] = useState<number>(0);
  const [selectedFunction, setSelectedFunction] = useState<CasioFunction | null>(null);

  // Persistence States
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('fx_favorites');
      return stored ? JSON.parse(stored) : ['second-degre-eqn', 'fraction-decimal-sd', 'tableau-valeurs-table'];
    } catch {
      return ['second-degre-eqn', 'fraction-decimal-sd', 'tableau-valeurs-table'];
    }
  });

  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('fx_mastered');
      return stored ? JSON.parse(stored) : ['fraction-decimal-sd'];
    } catch {
      return ['fraction-decimal-sd'];
    }
  });

  const [historyIds, setHistoryIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('fx_history');
      return stored ? JSON.parse(stored) : ['second-degre-eqn', 'tableau-valeurs-table'];
    } catch {
      return ['second-degre-eqn', 'tableau-valeurs-table'];
    }
  });

  const [hasOnboarded, setHasOnboarded] = useState<boolean>(() => {
    try {
      return localStorage.getItem('fx_onboarded') === 'true';
    } catch {
      return true;
    }
  });

  const [textSize, setTextSize] = useState<'normal' | 'large'>(() => {
    try {
      const stored = localStorage.getItem('fx_text_size');
      return (stored === 'large' || stored === 'normal') ? stored : 'normal';
    } catch {
      return 'normal';
    }
  });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isModelCheckOpen, setIsModelCheckOpen] = useState(false);

  // Sync text size
  useEffect(() => {
    try {
      localStorage.setItem('fx_text_size', textSize);
    } catch (e) {
      console.error(e);
    }
  }, [textSize]);

  // Sync favorites
  useEffect(() => {
    try {
      localStorage.setItem('fx_favorites', JSON.stringify(favoriteIds));
    } catch (e) {
      console.error(e);
    }
  }, [favoriteIds]);

  // Sync mastered
  useEffect(() => {
    try {
      localStorage.setItem('fx_mastered', JSON.stringify(masteredIds));
    } catch (e) {
      console.error(e);
    }
  }, [masteredIds]);

  // Sync history
  useEffect(() => {
    try {
      localStorage.setItem('fx_history', JSON.stringify(historyIds));
    } catch (e) {
      console.error(e);
    }
  }, [historyIds]);

  // Tab switcher with direction awareness
  const handleTabSwitch = (newTab: TabType) => {
    if (newTab === activeTab && !selectedFunction) return;

    const currentIdx = MAIN_TABS.indexOf(activeTab);
    const targetIdx = MAIN_TABS.indexOf(newTab);

    if (currentIdx !== -1 && targetIdx !== -1) {
      setTabDirection(targetIdx > currentIdx ? 1 : -1);
    } else {
      setTabDirection(0);
    }

    setSelectedFunction(null);
    setActiveTab(newTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFunction = (func: CasioFunction) => {
    setTabDirection(1);
    setSelectedFunction(func);
    setHistoryIds((prev) => [func.id, ...prev.filter((id) => id !== func.id)].slice(0, 15));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromDetail = () => {
    setTabDirection(-1);
    setSelectedFunction(null);
  };

  // Gesture navigation: swipe left / swipe right
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (activeTab === 'simulator' && !selectedFunction) {
      return;
    }

    const offsetThreshold = 70;
    const velocityThreshold = 0.35;
    const isHorizontalSwipe = Math.abs(info.offset.x) > 60 && Math.abs(info.offset.x) > Math.abs(info.offset.y) * 1.6;

    if (!isHorizontalSwipe) return;

    if (selectedFunction) {
      if (info.offset.x > 85 || info.velocity.x > 0.4) {
        handleBackFromDetail();
      }
      return;
    }

    const currentIdx = MAIN_TABS.indexOf(activeTab);
    if (currentIdx === -1) {
      if (info.offset.x > offsetThreshold || info.velocity.x > velocityThreshold) {
        handleTabSwitch('home');
      }
      return;
    }

    if (info.offset.x < -offsetThreshold || info.velocity.x < -velocityThreshold) {
      if (currentIdx < MAIN_TABS.length - 1) {
        handleTabSwitch(MAIN_TABS[currentIdx + 1]);
      }
    } else if (info.offset.x > offsetThreshold || info.velocity.x > velocityThreshold) {
      if (currentIdx > 0) {
        handleTabSwitch(MAIN_TABS[currentIdx - 1]);
      }
    }
  };

  const handleToggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleMastered = (id: string) => {
    setMasteredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleMarkMastered = (id: string) => {
    setMasteredIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleClearHistory = () => {
    setHistoryIds([]);
    try {
      localStorage.removeItem('fx_history');
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetProgress = () => {
    setFavoriteIds([]);
    setMasteredIds([]);
    setHistoryIds([]);
    try {
      localStorage.removeItem('fx_favorites');
      localStorage.removeItem('fx_mastered');
      localStorage.removeItem('fx_history');
    } catch (e) {
      console.error(e);
    }
  };

  const finishOnboarding = () => {
    setHasOnboarded(true);
    try {
      localStorage.setItem('fx_onboarded', 'true');
    } catch (e) {
      console.error(e);
    }
  };

  const currentTabIdx = MAIN_TABS.indexOf(activeTab);

  return (
    <div className={`min-h-screen bg-[#F7F8F4] dark:bg-[#14231D] text-[#15251E] dark:text-[#F0F4EF] ${textSize === 'large' ? 'text-base' : 'text-sm'} transition-colors duration-150`}>
      {/* Onboarding Dialog */}
      <OnboardingModal
        isOpen={!hasOnboarded}
        onFinish={finishOnboarding}
      />

      {/* Model Clarification Modal */}
      <ModelClarificationModal
        isOpen={isModelCheckOpen}
        onClose={() => setIsModelCheckOpen(false)}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onResetProgress={handleResetProgress}
        onOpenModelCheck={() => setIsModelCheckOpen(true)}
        textSize={textSize}
        onChangeTextSize={setTextSize}
      />

      {/* Mobile-first viewport container (responsive frame with safe-area bottom clearance) */}
      <div className="max-w-md mx-auto min-h-screen flex flex-col relative pb-[calc(6rem+env(safe-area-inset-bottom,16px))] bg-[#F7F8F4] dark:bg-[#14231D] border-x border-[#DCE2DC] dark:border-[#34483F] shadow-sm">
        {/* Sticky Mobile App Top Bar */}
        <header className="sticky top-0 z-40 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#FFFFFF]/95 dark:bg-[#1D3028]/95 backdrop-blur-md border-b border-[#DCE2DC] dark:border-[#34483F] flex items-center justify-between transition-colors">
          <div
            className="flex items-center gap-2.5 cursor-pointer min-w-0"
            onClick={() => handleTabSwitch('home')}
          >
            {/* Identity Badge */}
            <div className="w-8 h-8 rounded-xl bg-[#123C2A] dark:bg-[#B8E86A] flex items-center justify-center font-mono font-black text-[#B8E86A] dark:text-[#123C2A] text-sm shadow-xs shrink-0">
              fx
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-extrabold text-sm tracking-tight text-[#15251E] dark:text-[#F0F4EF] truncate">
                  fx-991ES
                </span>
                <span className="text-[9px] font-mono font-bold bg-[#F0F3EE] dark:bg-[#243A31] text-[#123C2A] dark:text-[#B8E86A] border border-[#DCE2DC] dark:border-[#34483F] px-1.5 py-0.2 rounded shrink-0">
                  Originale
                </span>
              </div>
              <span className="text-[10px] text-[#53635B] dark:text-[#B7C5BE] block -mt-0.5 font-medium truncate">
                Guide officiel Première S2
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0 ml-1">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-[#53635B] hover:text-[#15251E] dark:text-[#B7C5BE] dark:hover:text-[#F0F4EF] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31] cursor-pointer active:scale-95 transition-all min-w-[36px] min-h-[36px] flex items-center justify-center"
              title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              aria-label="Changer le thème"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#B8E86A]" /> : <Moon className="w-4 h-4 text-[#123C2A]" />}
            </button>

            {/* Quick search shortcut */}
            {activeTab !== 'search' && (
              <button
                type="button"
                onClick={() => handleTabSwitch('search')}
                className="p-2 rounded-xl text-[#53635B] hover:text-[#15251E] dark:text-[#B7C5BE] dark:hover:text-[#F0F4EF] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31] cursor-pointer active:scale-95 transition-all min-w-[36px] min-h-[36px] flex items-center justify-center"
                title="Recherche"
                aria-label="Rechercher"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Settings button */}
            <button
              type="button"
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 rounded-xl text-[#53635B] hover:text-[#15251E] dark:text-[#B7C5BE] dark:hover:text-[#F0F4EF] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31] cursor-pointer active:scale-95 transition-all min-w-[36px] min-h-[36px] flex items-center justify-center"
              title="Paramètres"
              aria-label="Paramètres"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Secondary Quick Action Bar (Direct jump to Simulator, Cheat Sheet, Dépannage) */}
        {!selectedFunction && (
          <div className="px-3.5 sm:px-4 py-2 border-b border-[#DCE2DC] dark:border-[#34483F] bg-[#FFFFFF]/80 dark:bg-[#1D3028]/80 backdrop-blur-xs flex items-center justify-between gap-1.5 overflow-x-auto no-scrollbar text-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => handleTabSwitch('simulator')}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                  activeTab === 'simulator'
                    ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
                    : 'bg-[#F0F3EE] dark:bg-[#243A31] hover:bg-[#E5EAE2] dark:hover:bg-[#2C443A] text-[#15251E] dark:text-[#F0F4EF]'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-[#B8E86A] dark:text-[#123C2A] shrink-0" />
                <span>Simulateur</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabSwitch('cheatsheet')}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                  activeTab === 'cheatsheet'
                    ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
                    : 'bg-[#F0F3EE] dark:bg-[#243A31] hover:bg-[#E5EAE2] dark:hover:bg-[#2C443A] text-[#15251E] dark:text-[#F0F4EF]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#B8E86A] dark:text-[#123C2A] shrink-0" />
                <span>Mémo Bac</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabSwitch('errors')}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                  activeTab === 'errors'
                    ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] shadow-xs'
                    : 'bg-[#F0F3EE] dark:bg-[#243A31] hover:bg-[#E5EAE2] dark:hover:bg-[#2C443A] text-[#15251E] dark:text-[#F0F4EF]'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5 text-[#B8E86A] dark:text-[#123C2A] shrink-0" />
                <span>Dépannage</span>
              </button>
            </div>

            {/* Subtle swipe indicator */}
            {currentTabIdx !== -1 && (
              <div className="hidden sm:flex items-center gap-1 text-[10px] text-[#89968F] dark:text-[#718079] font-mono shrink-0 pl-1">
                <span>← swipe →</span>
              </div>
            )}
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 p-3.5 sm:p-4 overflow-hidden relative">
          <AnimatePresence mode="wait" custom={tabDirection}>
            {selectedFunction ? (
              <motion.div
                key={`function-detail-${selectedFunction.id}`}
                custom={tabDirection}
                initial={{ opacity: 0, x: 60, scale: 0.99 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.99 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragDirectionLock
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                style={{ touchAction: 'pan-y' }}
                className="w-full"
              >
                <FunctionDetailView
                  func={selectedFunction}
                  onBack={handleBackFromDetail}
                  isFavorite={favoriteIds.includes(selectedFunction.id)}
                  onToggleFavorite={handleToggleFavorite}
                  isMastered={masteredIds.includes(selectedFunction.id)}
                  onToggleMastered={handleToggleMastered}
                  onMarkMastered={handleMarkMastered}
                />
              </motion.div>
            ) : (
              <motion.div
                key={`tab-view-${activeTab}`}
                custom={tabDirection}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 80 : dir < 0 ? -80 : 0,
                    opacity: 0,
                    scale: 0.99
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      x: { type: 'spring', stiffness: 400, damping: 35 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 }
                    }
                  },
                  exit: (dir: number) => ({
                    x: dir > 0 ? -80 : dir < 0 ? 80 : 0,
                    opacity: 0,
                    scale: 0.99,
                    transition: {
                      x: { type: 'spring', stiffness: 400, damping: 35 },
                      opacity: { duration: 0.16 },
                      scale: { duration: 0.16 }
                    }
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                drag={activeTab === 'simulator' ? false : 'x'}
                dragDirectionLock
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                style={{ touchAction: 'pan-y' }}
                className="w-full"
              >
                {activeTab === 'home' && (
                  <HomeView
                    onSelectFunction={handleSelectFunction}
                    onOpenSearch={() => handleTabSwitch('search')}
                    onOpenSimulator={() => handleTabSwitch('simulator')}
                    onOpenCheatSheet={() => handleTabSwitch('cheatsheet')}
                    onOpenModelCheck={() => setIsModelCheckOpen(true)}
                    historyIds={historyIds}
                    favoriteIds={favoriteIds}
                    masteredIds={masteredIds}
                  />
                )}

                {activeTab === 'explore' && (
                  <ExploreView
                    onSelectFunction={handleSelectFunction}
                    masteredIds={masteredIds}
                    favoriteIds={favoriteIds}
                  />
                )}

                {activeTab === 'search' && (
                  <SearchView
                    onSelectFunction={handleSelectFunction}
                    masteredIds={masteredIds}
                  />
                )}

                {activeTab === 'simulator' && (
                  <CasioSimulator />
                )}

                {activeTab === 'cheatsheet' && (
                  <CheatSheetView
                    onSelectFunction={handleSelectFunction}
                  />
                )}

                {activeTab === 'keys' && (
                  <KeyExplorer
                    onSelectFunction={handleSelectFunction}
                  />
                )}

                {activeTab === 'errors' && (
                  <ErrorTroubleshooting />
                )}

                {activeTab === 'favorites' && (
                  <FavoritesView
                    favoriteIds={favoriteIds}
                    masteredIds={masteredIds}
                    historyIds={historyIds}
                    onSelectFunction={handleSelectFunction}
                    onClearHistory={handleClearHistory}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Fixed Bottom Navigation Bar with safe-area spacing and 48px hitboxes */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 dark:bg-[#1D3028]/95 backdrop-blur-lg border-t border-[#DCE2DC] dark:border-[#34483F] pt-1.5 pb-[calc(0.5rem+env(safe-area-inset-bottom,4px))] px-3">
          <div className="max-w-md mx-auto grid grid-cols-5 items-center">
            {/* Home Tab */}
            <button
              type="button"
              onClick={() => handleTabSwitch('home')}
              className={`relative flex flex-col items-center justify-center min-h-[48px] py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'home' && !selectedFunction
                  ? 'text-[#123C2A] dark:text-[#B8E86A] font-bold'
                  : 'text-[#53635B] hover:text-[#15251E] dark:text-[#718079] dark:hover:text-[#F0F4EF]'
              }`}
            >
              {activeTab === 'home' && !selectedFunction && (
                <motion.div
                  layoutId="activeBottomTab"
                  className="absolute inset-0 bg-[#123C2A]/10 dark:bg-[#B8E86A]/15 rounded-xl -z-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <Home className="w-5 h-5 relative z-10" />
              <span className="text-[10px] tracking-tight relative z-10 mt-0.5">Accueil</span>
            </button>

            {/* Explore Tab */}
            <button
              type="button"
              onClick={() => handleTabSwitch('explore')}
              className={`relative flex flex-col items-center justify-center min-h-[48px] py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'explore' && !selectedFunction
                  ? 'text-[#123C2A] dark:text-[#B8E86A] font-bold'
                  : 'text-[#53635B] hover:text-[#15251E] dark:text-[#718079] dark:hover:text-[#F0F4EF]'
              }`}
            >
              {activeTab === 'explore' && !selectedFunction && (
                <motion.div
                  layoutId="activeBottomTab"
                  className="absolute inset-0 bg-[#123C2A]/10 dark:bg-[#B8E86A]/15 rounded-xl -z-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <Compass className="w-5 h-5 relative z-10" />
              <span className="text-[10px] tracking-tight relative z-10 mt-0.5">Catalogue</span>
            </button>

            {/* Search Tab */}
            <button
              type="button"
              onClick={() => handleTabSwitch('search')}
              className={`relative flex flex-col items-center justify-center min-h-[48px] py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'search' && !selectedFunction
                  ? 'text-[#123C2A] dark:text-[#B8E86A] font-bold'
                  : 'text-[#53635B] hover:text-[#15251E] dark:text-[#718079] dark:hover:text-[#F0F4EF]'
              }`}
            >
              {activeTab === 'search' && !selectedFunction && (
                <motion.div
                  layoutId="activeBottomTab"
                  className="absolute inset-0 bg-[#123C2A]/10 dark:bg-[#B8E86A]/15 rounded-xl -z-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <Search className="w-5 h-5 relative z-10" />
              <span className="text-[10px] tracking-tight relative z-10 mt-0.5">Recherche</span>
            </button>

            {/* Keys Explorer Tab */}
            <button
              type="button"
              onClick={() => handleTabSwitch('keys')}
              className={`relative flex flex-col items-center justify-center min-h-[48px] py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'keys' && !selectedFunction
                  ? 'text-[#123C2A] dark:text-[#B8E86A] font-bold'
                  : 'text-[#53635B] hover:text-[#15251E] dark:text-[#718079] dark:hover:text-[#F0F4EF]'
              }`}
            >
              {activeTab === 'keys' && !selectedFunction && (
                <motion.div
                  layoutId="activeBottomTab"
                  className="absolute inset-0 bg-[#123C2A]/10 dark:bg-[#B8E86A]/15 rounded-xl -z-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <Keyboard className="w-5 h-5 relative z-10" />
              <span className="text-[10px] tracking-tight relative z-10 mt-0.5">Touches</span>
            </button>

            {/* Favorites Tab */}
            <button
              type="button"
              onClick={() => handleTabSwitch('favorites')}
              className={`relative flex flex-col items-center justify-center min-h-[48px] py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'favorites' && !selectedFunction
                  ? 'text-[#123C2A] dark:text-[#B8E86A] font-bold'
                  : 'text-[#53635B] hover:text-[#15251E] dark:text-[#718079] dark:hover:text-[#F0F4EF]'
              }`}
            >
              {activeTab === 'favorites' && !selectedFunction && (
                <motion.div
                  layoutId="activeBottomTab"
                  className="absolute inset-0 bg-[#123C2A]/10 dark:bg-[#B8E86A]/15 rounded-xl -z-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <Bookmark className="w-5 h-5 relative z-10" />
              <span className="text-[10px] tracking-tight relative z-10 mt-0.5">Favoris</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
