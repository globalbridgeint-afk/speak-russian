import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";

const FACEBOOK_MESSENGER = "https://m.me/globalbridges.int";

export const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary-foreground/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/10 mb-6 sm:mb-8">
              <img src="/logo.png" alt="" className="w-5 h-5 rounded" />
              <span className="text-xs sm:text-sm font-medium text-primary-foreground/80">Licensed EU Employment Agency</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-4 sm:mb-6"
          >
            {t.hero.title.split("EU").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-gradient-gold">EU</span>}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20"
          >
            <a
              href={FACEBOOK_MESSENGER}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gold-gradient text-primary font-heading font-bold text-base sm:text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              {t.hero.cta1}
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl border-2 border-primary-foreground/20 text-primary-foreground font-heading font-semibold text-base sm:text-lg hover:bg-primary-foreground/5 transition-colors"
            >
              {t.hero.cta2}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
          >
            {[
              { value: t.hero.stat1, label: t.hero.stat1Label },
              { value: t.hero.stat2, label: t.hero.stat2Label },
              { value: t.hero.stat3, label: t.hero.stat3Label },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient-gold">{stat.value}</div>
                <div className="text-xs sm:text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="w-5 h-5 text-primary-foreground/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
