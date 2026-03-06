import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FACEBOOK_MESSENGER = "https://m.me/globalbridges.int";

export const MessengerFAB = () => {
  return (
    <motion.a
      href={FACEBOOK_MESSENGER}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
      title="Message us on Facebook"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
    </motion.a>
  );
};
