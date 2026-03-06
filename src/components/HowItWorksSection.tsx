import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export const HowItWorksSection = () => {
  const { t } = useI18n();

  const steps = [
    { title: t.howItWorks.step1, desc: t.howItWorks.step1Desc },
    { title: t.howItWorks.step2, desc: t.howItWorks.step2Desc },
    { title: t.howItWorks.step3, desc: t.howItWorks.step3Desc },
    { title: t.howItWorks.step4, desc: t.howItWorks.step4Desc },
    { title: t.howItWorks.step5, desc: t.howItWorks.step5Desc },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.howItWorks.title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t.howItWorks.subtitle}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 sm:gap-6 mb-8 sm:mb-10 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-primary text-sm sm:text-base">{i + 1}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-3" />
                )}
              </div>
              <div className="pb-8 sm:pb-10">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1.5 sm:mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
