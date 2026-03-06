import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Users, DollarSign, Shield, Headphones, MessageCircle } from "lucide-react";

const FACEBOOK_MESSENGER = "https://m.me/globalbridges.int";

export const AgencyPartnersSection = () => {
  const { t } = useI18n();

  const benefits = [
    { icon: Users, title: t.agencies.benefit1Title, desc: t.agencies.benefit1Desc },
    { icon: DollarSign, title: t.agencies.benefit2Title, desc: t.agencies.benefit2Desc },
    { icon: Shield, title: t.agencies.benefit3Title, desc: t.agencies.benefit3Desc },
    { icon: Headphones, title: t.agencies.benefit4Title, desc: t.agencies.benefit4Desc },
  ];

  return (
    <section id="agencies" className="py-20 sm:py-28 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
            {t.agencies.title}
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            {t.agencies.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary-foreground/60 mb-6 max-w-lg mx-auto">
            {t.agencies.ctaDesc}
          </p>
          <a
            href={FACEBOOK_MESSENGER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold-gradient text-primary font-heading font-bold text-base hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            {t.agencies.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
