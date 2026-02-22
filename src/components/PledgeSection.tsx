import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Sparkles, Share2, Heart } from "lucide-react";

const PledgeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [pledgeTaken, setPledgeTaken] = useState(false);

  const pledges = [
    "আমি আমার মাতৃভাষায় গর্বিত",
    "আমি বিপন্ন ভাষা সংরক্ষণে সচেষ্ট থাকব",
    "আমি সব ভাষা ও সংস্কৃতিকে সম্মান করব",
    "আমি পরবর্তী প্রজন্মকে মাতৃভাষা শেখাব"
  ];

  return (
    <section id="pledge" className="py-24 bg-card relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 border border-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border border-accent/10 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-bengali text-lg flex items-center justify-center gap-2">
            <Heart className="w-5 h-5" />
            একসাথে প্রতিজ্ঞা করি
          </span>
          <h2 className="font-bengali text-4xl md:text-5xl font-bold text-foreground mt-2">
            মাতৃভাষার <span className="text-accent">শপথ</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary text-primary-foreground rounded-3xl p-10 shadow-elevated"
          >
            <AnimatePresence mode="wait">
              {!pledgeTaken ? (
                <motion.div key="pledge-form" exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                  <div className="space-y-6">
                    {pledges.map((pledge, index) => (
                      <motion.div
                        key={pledge}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <p className="font-bengali text-lg text-primary-foreground/90">{pledge}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-10 text-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--accent) / 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setPledgeTaken(true)}
                      className="bg-accent text-accent-foreground px-10 py-4 rounded-full font-bengali font-bold text-lg shadow-glow hover:shadow-none transition-all duration-300 flex items-center gap-3 mx-auto"
                    >
                      <Sparkles className="w-5 h-5" />
                      আমি শপথ নিচ্ছি
                    </motion.button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="thank-you"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
                    className="w-24 h-24 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-6"
                  >
                    <Heart className="w-12 h-12 text-accent fill-accent" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-bengali text-3xl md:text-4xl font-bold text-accent mb-3"
                  >
                    ধন্যবাদ!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-bengali text-xl text-primary-foreground/80 mb-2"
                  >
                    আপনি মাতৃভাষার শপথ গ্রহণ করেছেন
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="font-bengali text-primary-foreground/60"
                  >
                    আসুন সবাই মিলে আমাদের ভাষা ও সংস্কৃতি রক্ষা করি
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 flex items-center justify-center gap-3"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + i * 0.1 }}
                      >
                        <Sparkles className="w-5 h-5 text-accent/60" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="font-bengali text-muted-foreground mb-4 flex items-center justify-center gap-2">
            <Share2 className="w-4 h-4" />
            শেয়ার করুন এবং সচেতনতা ছড়িয়ে দিন
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PledgeSection;
