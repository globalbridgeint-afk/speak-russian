import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Camera, Play, Star, ImageIcon } from "lucide-react";

type BlogItem = {
  id: string;
  type: "photo" | "video" | "review";
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  author?: string;
  rating?: number;
};

// Placeholder blog items — you can replace these with real data or a CMS
const blogItems: BlogItem[] = [
  {
    id: "1",
    type: "review",
    title: "Amazing experience with Global Bridges INT.",
    description: "They helped me get a job in Germany. Everything was official, transparent and fast. I highly recommend their services to anyone looking for EU employment.",
    author: "Nguyen T.",
    rating: 5,
  },
  {
    id: "2",
    type: "photo",
    title: "Our team at the EU Employment Fair 2024",
    description: "Global Bridges INT. participated in the annual EU Employment Fair, meeting hundreds of potential candidates and partner agencies.",
  },
  {
    id: "3",
    type: "review",
    title: "Professional and reliable agency",
    description: "From document preparation to arrival support — everything was handled perfectly. My family and I are now settled in Poland.",
    author: "Mehmet K.",
    rating: 5,
  },
  {
    id: "4",
    type: "video",
    title: "Client success story: From Vietnam to Czech Republic",
    description: "Watch how our client successfully relocated and started a new career in the Czech Republic with full legal support.",
  },
];

const typeIcons = {
  photo: Camera,
  video: Play,
  review: Star,
};

const typeColors = {
  photo: "bg-blue-500/10 text-blue-600",
  video: "bg-red-500/10 text-red-600",
  review: "bg-amber-500/10 text-amber-600",
};

export const BlogSection = () => {
  const { t } = useI18n();

  return (
    <section id="blog" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {t.blog.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </motion.div>

        {blogItems.length === 0 ? (
          <div className="text-center py-16">
            <ImageIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">{t.blog.noItems}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {blogItems.map((item, i) => {
              const Icon = typeIcons[item.type];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow group"
                >
                  {/* Type badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${typeColors[item.type]}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {t.blog[item.type]}
                    </span>
                    {item.rating && (
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: item.rating }).map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Placeholder image area */}
                  {(item.type === "photo" || item.type === "video") && (
                    <div className="w-full aspect-video bg-muted rounded-xl mb-4 flex items-center justify-center">
                      {item.type === "video" ? (
                        <Play className="w-12 h-12 text-muted-foreground/40" />
                      ) : (
                        <Camera className="w-12 h-12 text-muted-foreground/40" />
                      )}
                    </div>
                  )}

                  <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  {item.author && (
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      — {item.author}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
