import { I18nProvider, useI18n } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessengerFAB } from "@/components/MessengerFAB";
import { motion } from "framer-motion";
import { Users, DollarSign, Shield, Headphones, MessageCircle, ArrowRight, CheckCircle, Building2, Handshake, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const FACEBOOK_MESSENGER = "https://m.me/globalbridges.int";

const AgenciesContent = () => {
  const { t } = useI18n();

  const benefits = [
    { icon: Users, title: t.agencies.benefit1Title, desc: t.agencies.benefit1Desc },
    { icon: DollarSign, title: t.agencies.benefit2Title, desc: t.agencies.benefit2Desc },
    { icon: Shield, title: t.agencies.benefit3Title, desc: t.agencies.benefit3Desc },
    { icon: Headphones, title: t.agencies.benefit4Title, desc: t.agencies.benefit4Desc },
  ];

  const steps = [
    { icon: Handshake, label: t.agencies.step1 || "Sign Partnership Agreement" },
    { icon: Users, label: t.agencies.step2 || "Submit Your Candidates" },
    { icon: Globe, label: t.agencies.step3 || "We Handle Documents & Logistics" },
    { icon: Building2, label: t.agencies.step4 || "Candidates Start Working" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="mb-6">
              <Link to="/" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                ← {t.news.backHome}
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                {t.agencies.title}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 mb-8 max-w-2xl">
                {t.agencies.subtitle}
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

        {/* Benefits */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-heading font-bold text-foreground text-center mb-12"
            >
              {t.agencies.whyTitle || "Why Partner With Us?"}
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works for Agencies */}
        <section className="py-16 sm:py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-heading font-bold text-foreground text-center mb-12"
            >
              {t.agencies.howTitle || "How Partnership Works"}
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
                    <s.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-bold text-accent mb-2">0{i + 1}</div>
                  <p className="font-heading font-semibold text-foreground">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
                {t.agencies.ctaTitle || "Ready to Start?"}
              </h2>
              <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
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
      </main>
      <Footer />
      <MessengerFAB />
    </div>
  );
};

const AgenciesPage = () => (
  <I18nProvider>
    <AgenciesContent />
  </I18nProvider>
);

export default AgenciesPage;
