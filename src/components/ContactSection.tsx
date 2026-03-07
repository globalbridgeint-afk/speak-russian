import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { MessageCircle, Facebook, Mail, Clock } from "lucide-react";

const FACEBOOK_MESSENGER = "https://m.me/globalbridges.int";
const FACEBOOK_PAGE = "https://www.facebook.com/globalbridges.int";

export const ContactSection = () => {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-20 sm:py-28 bg-hero-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">{t.contact.title}</h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {/* Messenger */}
          <motion.a
            href={FACEBOOK_MESSENGER}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="group bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-primary-foreground/15 transition-colors cursor-pointer"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary-foreground mb-2">{t.contact.messageUs}</h3>
            <p className="text-sm text-primary-foreground/60">Facebook Messenger</p>
          </motion.a>

          {/* Facebook Page */}
          <motion.a
            href={FACEBOOK_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-primary-foreground/15 transition-colors cursor-pointer"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <Facebook className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary-foreground mb-2">{t.contact.visitPage}</h3>
            <p className="text-sm text-primary-foreground/60">@globalbridges.int</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:international@globalbridges.info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-primary-foreground/15 transition-colors cursor-pointer"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary-foreground mb-2">{t.contact.email}</h3>
            <p className="text-sm text-primary-foreground/60">international@globalbridges.info</p>
          </motion.a>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 sm:p-8 text-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4 sm:mb-5">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary-foreground mb-2">{t.contact.workingHours}</h3>
            <p className="text-sm text-primary-foreground/60">{t.contact.workingHoursValue}</p>
            <p className="text-sm text-primary-foreground/60">{t.contact.satValue}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
