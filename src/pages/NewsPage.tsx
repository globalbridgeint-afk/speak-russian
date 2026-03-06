import { I18nProvider, useI18n } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessengerFAB } from "@/components/MessengerFAB";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

type NewsItem = {
  id: string;
  date: string;
  title: string;
  summary: string;
  image?: string;
};

// Placeholder news items — replace with CMS or database data
const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "2026-03-01",
    title: "Global Bridges INT. Expands Operations to France",
    summary: "We are excited to announce the expansion of our employment services to France, opening new opportunities for our clients across multiple industries including hospitality, construction and IT.",
  },
  {
    id: "2",
    date: "2026-02-15",
    title: "New Partnership with Major German Employers",
    summary: "Global Bridges INT. has signed strategic partnership agreements with leading German manufacturing and logistics companies, creating over 200 new positions for our candidates.",
  },
  {
    id: "3",
    date: "2026-02-01",
    title: "Updated EU Work Permit Regulations 2026",
    summary: "Important changes in EU work permit regulations for 2026. Our legal team has prepared a comprehensive guide to help you understand the new requirements and how they affect your application.",
  },
  {
    id: "4",
    date: "2026-01-20",
    title: "Success Story: 100 Vietnamese Workers Placed in Czech Republic",
    summary: "We celebrate a major milestone — successfully placing 100 workers from Vietnam into verified positions in the Czech Republic with full legal documentation and post-arrival support.",
  },
];

const NewsContent = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.news.backHome}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              {t.news.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t.news.subtitle}
            </p>
          </motion.div>

          {newsItems.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">{t.news.noNews}</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {newsItems.map((item, i) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-shadow group cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <time>{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
                  </div>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                    {t.news.readMore}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <MessengerFAB />
    </div>
  );
};

const NewsPage = () => (
  <I18nProvider>
    <NewsContent />
  </I18nProvider>
);

export default NewsPage;
