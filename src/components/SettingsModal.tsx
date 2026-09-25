import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  RotateCcw,
  ShieldCheck,
  Sun,
  Moon,
  Type,
  AlertTriangle,
  Check,
  Share2,
  Download,
  FileText,
  Copy,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { generateFx991EsSummaryText } from '../utils/generateSummaryText';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResetProgress: () => void;
  onOpenModelCheck: () => void;
  textSize: 'normal' | 'large';
  onChangeTextSize: (size: 'normal' | 'large') => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  onResetProgress,
  onOpenModelCheck,
  textSize,
  onChangeTextSize
}) => {
  const { theme, setTheme } = useTheme();
  const [confirmReset, setConfirmReset] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [showSummaryPreview, setShowSummaryPreview] = useState(false);

  const handleShareOrCopy = async () => {
    const text = generateFx991EsSummaryText();
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Casio fx-991ES — Résumé des commandes essentielles',
          text: text
        });
        setCopiedSummary(true);
        setTimeout(() => setCopiedSummary(false), 2500);
        return;
      } catch (err) {}
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch (e) {
      console.error('Clipboard error:', e);
    }
  };

  const handleDownloadTxt = () => {
    const text = generateFx991EsSummaryText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Casio-fx991ES-Resume-Essentiel.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 14 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="w-full max-w-md max-h-[92vh] overflow-y-auto no-scrollbar bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-5 sm:p-6 shadow-2xl space-y-5 relative z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#DCE2DC] dark:border-[#34483F] pb-3">
              <h3 className="text-base font-bold text-[#15251E] dark:text-[#F0F4EF] tracking-tight">
                Paramètres & Modèle
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl bg-[#F0F3EE] hover:bg-[#E5EAE2] dark:bg-[#243A31] dark:hover:bg-[#2C443A] text-[#53635B] dark:text-[#B7C5BE] hover:text-[#15251E] dark:hover:text-[#F0F4EF] cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Model Accuracy Badge */}
            <div className="p-4 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#123C2A] dark:text-[#B8E86A] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] block">
                  Modèle certifié : CASIO fx-991ES
                </span>
                <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] leading-relaxed">
                  Toutes les combinaisons de touches correspondent rigoureusement à la fx-991ES originale (Natural-V.P.A.M.).
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenModelCheck();
                  }}
                  className="text-[11px] font-bold text-[#123C2A] dark:text-[#B8E86A] underline cursor-pointer mt-1"
                >
                  Voir les différences avec les autres Casio (PLUS / EX)
                </button>
              </div>
            </div>

            {/* Export / Share Summary Action */}
            <div className="p-4 bg-[#F0F3EE] dark:bg-[#243A31] border border-[#DCE2DC] dark:border-[#34483F] rounded-2xl space-y-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#123C2A] dark:text-[#B8E86A] shrink-0" />
                  <span className="text-xs font-bold text-[#15251E] dark:text-[#F0F4EF] uppercase tracking-wider">
                    Fiche résumé des commandes
                  </span>
                </div>
                <p className="text-[11px] text-[#53635B] dark:text-[#B7C5BE] leading-relaxed">
                  Génère un aide-mémoire complet au format texte (.txt) prêt à imprimer, copier ou partager.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleShareOrCopy}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs ${
                    copiedSummary
                      ? 'bg-[#123C2A] dark:bg-[#B8E86A] text-white dark:text-[#123C2A]'
                      : 'bg-[#123C2A] dark:bg-[#B8E86A] text-white dark:text-[#123C2A] active:scale-95'
                  }`}
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copié / Partagé !</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Partager / Copier</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadTxt}
                  className="py-2.5 px-3 rounded-xl text-xs font-bold bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] text-[#15251E] dark:text-[#F0F4EF] hover:bg-[#F0F3EE] dark:hover:bg-[#243A31] flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-[#123C2A] dark:text-[#B8E86A]" />
                  <span>Fichier (.txt)</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowSummaryPreview(!showSummaryPreview)}
                className="w-full flex items-center justify-between text-[11px] text-[#123C2A] dark:text-[#B8E86A] hover:underline cursor-pointer pt-1 font-semibold"
              >
                <span>{showSummaryPreview ? "Masquer l'aperçu du texte" : "Afficher l'aperçu du texte"}</span>
                {showSummaryPreview ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showSummaryPreview && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2"
                >
                  <pre className="text-[10px] font-mono leading-relaxed p-3 bg-[#14231D] text-[#F0F4EF] rounded-xl max-h-48 overflow-y-auto whitespace-pre-wrap border border-[#34483F] shadow-inner select-all">
                    {generateFx991EsSummaryText()}
                  </pre>
                </motion.div>
              )}
            </div>

            {/* Theme Settings */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider block">
                Thème d'affichage
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2 text-xs font-semibold cursor-pointer transition-all ${
                    theme === 'light'
                      ? 'bg-[#123C2A] text-white font-bold shadow-xs border-[#123C2A]'
                      : 'bg-[#F0F3EE] dark:bg-[#243A31] border-[#DCE2DC] dark:border-[#34483F] text-[#53635B] dark:text-[#B7C5BE]'
                  }`}
                >
                  <Sun className="w-4 h-4 text-[#B8E86A]" />
                  <span>Mode Clair</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2 text-xs font-semibold cursor-pointer transition-all ${
                    theme === 'dark'
                      ? 'bg-[#B8E86A] text-[#123C2A] font-bold shadow-xs border-[#B8E86A]'
                      : 'bg-[#F0F3EE] dark:bg-[#243A31] border-[#DCE2DC] dark:border-[#34483F] text-[#53635B] dark:text-[#B7C5BE]'
                  }`}
                >
                  <Moon className="w-4 h-4 text-[#123C2A]" />
                  <span>Mode Sombre (Doux)</span>
                </button>
              </div>
            </div>

            {/* Text Size */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#53635B] dark:text-[#B7C5BE] uppercase tracking-wider block">
                Taille de police
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onChangeTextSize('normal')}
                  className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2 text-xs font-semibold cursor-pointer transition-all ${
                    textSize === 'normal'
                      ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] font-bold shadow-xs border-[#123C2A] dark:border-[#B8E86A]'
                      : 'bg-[#F0F3EE] dark:bg-[#243A31] border-[#DCE2DC] dark:border-[#34483F] text-[#53635B] dark:text-[#B7C5BE]'
                  }`}
                >
                  <Type className="w-3.5 h-3.5" />
                  <span>Standard</span>
                </button>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('large')}
                  className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2 text-xs font-semibold cursor-pointer transition-all ${
                    textSize === 'large'
                      ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] font-bold shadow-xs border-[#123C2A] dark:border-[#B8E86A]'
                      : 'bg-[#F0F3EE] dark:bg-[#243A31] border-[#DCE2DC] dark:border-[#34483F] text-[#53635B] dark:text-[#B7C5BE]'
                  }`}
                >
                  <Type className="w-4 h-4" />
                  <span>Agrandie (+15%)</span>
                </button>
              </div>
            </div>

            {/* Reset Progress */}
            <div className="pt-2 border-t border-[#DCE2DC] dark:border-[#34483F]">
              {!confirmReset ? (
                <button
                  type="button"
                  onClick={() => setConfirmReset(true)}
                  className="w-full py-2.5 px-3 rounded-2xl text-xs font-semibold bg-[#FEE2E2]/60 hover:bg-[#FEE2E2] dark:bg-[#7F1D1D]/30 dark:hover:bg-[#7F1D1D]/50 border border-[#FECACA] dark:border-[#991B1B] text-[#DC2626] dark:text-[#F87171] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Réinitialiser la progression et l'historique</span>
                </button>
              ) : (
                <div className="p-3 bg-[#FEE2E2]/60 dark:bg-[#7F1D1D]/40 border border-[#FECACA] dark:border-[#991B1B] rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-[#991B1B] dark:text-[#FCA5A5] text-xs font-bold">
                    <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
                    <span>Confirmer la réinitialisation ?</span>
                  </div>
                  <p className="text-[11px] text-[#991B1B] dark:text-[#FCA5A5]">
                    Tes favoris et ton statut de progression seront effacés.
                  </p>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setConfirmReset(false)}
                      className="flex-1 py-1.5 text-xs font-medium rounded-xl bg-[#F0F3EE] dark:bg-[#243A31] text-[#53635B] dark:text-[#B7C5BE] cursor-pointer"
                    >
                      Annuler
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onResetProgress();
                        setConfirmReset(false);
                        onClose();
                      }}
                      className="flex-1 py-1.5 text-xs font-bold rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Oui, effacer</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
