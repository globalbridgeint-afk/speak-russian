import { useI18n } from "@/lib/i18n";
import { Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FACEBOOK_PAGE = "https://www.facebook.com/globalbridges.int";
const FACEBOOK_MESSENGER = "https://m.me/globalbridges.int";

export const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-primary py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <img src="/logo.png" alt="Global Bridges INT." className="w-8 h-8 rounded-lg object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-lg text-primary-foreground leading-none">Global Bridges</span>
                <span className="font-heading font-semibold text-xs text-accent leading-none">INT.</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/50">{t.footer.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={FACEBOOK_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Facebook className="w-5 h-5 text-primary-foreground/70" />
            </a>
            <a
              href={FACEBOOK_MESSENGER}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-primary-foreground/70" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center space-y-2">
          <Link to="/privacy-policy" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
            Privacy Policy
          </Link>
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Global Bridges INT. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
