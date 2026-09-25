import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

interface ModelClarificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModelClarificationModal: React.FC<ModelClarificationModalProps> = ({
  isOpen,
  onClose
}) => {
  const models = [
    {
      name: 'CASIO fx-991ES (Modèle certifié par ce guide)',
      isTarget: true,
      badge: '100% conforme à cette application',
      features: [
        'Écran Natural-V.P.A.M. 2 lignes (matrice + 7 segments)',
        'Menu des 8 modes accessibles par la touche [MODE] (1 à 8)',
        'Résolution quadratique via MODE 5 3',
        "Dérivée numérique f'(a) via SHIFT ∫dx",
        'Tableau de valeurs limité à 30 points'
      ]
    },
    {
      name: 'CASIO fx-991ES PLUS',
      isTarget: false,
      badge: 'Très proche mais menus parfois décalés',
      features: [
        'Mêmes fonctions fondamentales que la fx-991ES',
        'Boîtier argenté plus arrondi et nouveau processeur',
        "Résolution d'inéquations supplémentaire sur certaines révisions"
      ]
    },
    {
      name: 'CASIO fx-991EX ClassWiz',
      isTarget: false,
      badge: 'Ne pas confondre (Génération différente)',
      features: [
        'Écran LCD haute résolution avec menu à icônes visuelles',
        'Génération de QR codes pour smartphone',
        'Tableau de valeurs g(x) simultané et tableur'
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
            className="w-full max-w-md bg-white dark:bg-[#1D3028] border border-[#DCE2DC] dark:border-[#34483F] rounded-3xl p-5 sm:p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto no-scrollbar relative z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#DCE2DC] dark:border-[#34483F] pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#123C2A] dark:text-[#B8E86A]" />
                <h3 className="text-base font-bold text-[#15251E] dark:text-[#F0F4EF] tracking-tight">
                  Vérifier ton modèle Casio
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl bg-[#F0F3EE] hover:bg-[#E5EAE2] dark:bg-[#243A31] dark:hover:bg-[#2C443A] text-[#53635B] dark:text-[#B7C5BE] hover:text-[#15251E] dark:hover:text-[#F0F4EF] cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#53635B] dark:text-[#B7C5BE] leading-relaxed">
              Beaucoup d'élèves se font piéger par des tutoriels conçus pour la ClassWiz ou la PLUS. Voici comment identifier formellement ta machine :
            </p>

            <div className="space-y-3">
              {models.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border text-xs space-y-2 ${
                    m.isTarget
                      ? 'bg-[#F0F3EE] dark:bg-[#243A31] border-[#123C2A] dark:border-[#B8E86A] shadow-xs'
                      : 'bg-white dark:bg-[#1D3028] border-[#DCE2DC] dark:border-[#34483F]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#15251E] dark:text-[#F0F4EF]">
                      {m.name}
                    </span>
                    {m.isTarget ? (
                      <CheckCircle2 className="w-4 h-4 text-[#123C2A] dark:text-[#B8E86A] shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-[#89968F] shrink-0" />
                    )}
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md inline-block font-semibold ${
                    m.isTarget
                      ? 'bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A]'
                      : 'bg-[#F0F3EE] dark:bg-[#243A31] text-[#53635B] dark:text-[#B7C5BE]'
                  }`}>
                    {m.badge}
                  </span>

                  <ul className="space-y-1 text-[11px] text-[#53635B] dark:text-[#B7C5BE] pt-1">
                    {m.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5">
                        <span className="text-[#123C2A] dark:text-[#B8E86A] font-bold">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-[#123C2A] text-white dark:bg-[#B8E86A] dark:text-[#123C2A] font-bold text-xs cursor-pointer shadow-xs active:scale-95 transition-all"
            >
              Compris, j'ai bien la fx-991ES
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
