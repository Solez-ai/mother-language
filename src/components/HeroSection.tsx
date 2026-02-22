import { motion } from "framer-motion";
import heroImage from "@/assets/hero-shaheed-minar.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/95 dark:from-background/90 dark:via-background/70 dark:to-background" />
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent/20 rounded-full animate-float opacity-40" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-secondary/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-accent font-bengali text-xl md:text-2xl mb-4 tracking-wider">
            ২১শে ফেব্রুয়ারি
          </p>

          <h1 className="font-bengali text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            আন্তর্জাতিক
            <br />
            <span className="text-accent">মাতৃভাষা দিবস</span>
          </h1>

          <motion.p
            className="font-bengali text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            ভাষার জন্য জীবন উৎসর্গকারী শহীদদের স্মরণে
          </motion.p>

          <motion.div
            className="w-40 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />

          <motion.p
            className="font-display italic text-muted-foreground/70 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            International Mother Language Day
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
            <span className="font-bengali text-sm">নিচে স্ক্রল করুন</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
