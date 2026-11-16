import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  backgroundImage: string;
}

const PageBanner = ({ title, backgroundImage }: PageBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-glow mb-12"
    >
      <img
        src={backgroundImage}
        alt={title}
        className="w-full h-full object-cover"
        width="1920"
        height="400"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-heading font-bold text-4xl md:text-6xl text-primary-foreground text-center px-4"
        >
          {title}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default PageBanner;
