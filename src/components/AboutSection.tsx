import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Shield, Globe, Users, CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const { t } = useI18n();

  const features = [
    { icon: Shield, label: "Official License" },
    { icon: Globe, label: "10+ EU Countries" },
    { icon: Users, label: "Multilingual Team" },
    { icon: CheckCircle, label: "Transparent Terms" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.about.title}</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{t.about.p1}</p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{t.about.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-5 sm:p-6 shadow-card border border-border text-center"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gold-gradient flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <f.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <p className="font-heading font-semibold text-sm sm:text-base text-foreground">{f.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
