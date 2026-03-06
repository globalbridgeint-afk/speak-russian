import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Briefcase, FileText, Scale, Home } from "lucide-react";

const icons = [Briefcase, FileText, Scale, Home];

export const ServicesSection = () => {
  const { t } = useI18n();

  const services = [
    { title: t.services.s1Title, desc: t.services.s1Desc },
    { title: t.services.s2Title, desc: t.services.s2Desc },
    { title: t.services.s3Title, desc: t.services.s3Desc },
    { title: t.services.s4Title, desc: t.services.s4Desc },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.services.title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3">{s.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
