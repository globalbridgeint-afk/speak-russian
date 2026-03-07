import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AboutSection } from "@/components/AboutSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MessengerFAB } from "@/components/MessengerFAB";
import { LanguageHint } from "@/components/LanguageHint";

const Index = () => {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <AboutSection />
        <BlogSection />
        <ContactSection />
        <Footer />
        <MessengerFAB />
        <LanguageHint />
      </div>
    </I18nProvider>
  );
};

export default Index;
