import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HINT_DISMISSED_KEY = "lang_hint_dismissed";

export const LanguageHint = () => {
  const { t, lang } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(HINT_DISMISSED_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const autoHide = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(HINT_DISMISSED_KEY, "1");
    }, 10000);
    return () => clearTimeout(autoHide);
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(HINT_DISMISSED_KEY, "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-24 left-4 sm:left-6 z-50 max-w-xs"
        >
          <div className="bg-card border border-border rounded-2xl shadow-card-hover p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground mb-0.5">
                {t.hint?.langTitle || "🌍 Available in your language!"}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.hint?.langDesc || "Click the globe icon in the header to switch languages."}
              </p>
            </div>
            <button onClick={dismiss} className="text-muted-foreground hover:text-foreground shrink-0 mt-0.5">
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
