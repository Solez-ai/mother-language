import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import historyImage from "@/assets/history-1952.png";

const HistorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-pattern-nakshi opacity-20 dark:opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={historyImage}
                alt="১৯৫২ সালের ভাষা আন্দোলন"
                className="relative rounded-2xl shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-elevated border border-primary/20">
                <p className="font-bengali text-3xl font-bold">১৯৫২</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-secondary font-bengali text-lg font-medium">আমাদের ইতিহাস</span>
            <h2 className="font-bengali text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              ভাষা আন্দোলনের
              <span className="text-secondary"> রক্তাক্ত ইতিহাস</span>
            </h2>

            <div className="space-y-4 text-muted-foreground font-bengali text-lg leading-relaxed">
              <p>
                ১৯৫২ সালের ২১শে ফেব্রুয়ারি, ঢাকার রাজপথে বাংলা ভাষার মর্যাদা রক্ষার দাবিতে ছাত্র-জনতার মিছিলে পুলিশ গুলি চালায়। সালাম, বরকত, রফিক, জব্বার সহ আরও অনেকে শহীদ হন।
              </p>
              <p>
                তাদের এই আত্মত্যাগের ফলে বাংলা পাকিস্তানের অন্যতম রাষ্ট্রভাষার মর্যাদা পায়। ১৯৯৯ সালে ইউনেস্কো ২১শে ফেব্রুয়ারিকে 'আন্তর্জাতিক মাতৃভাষা দিবস' হিসেবে ঘোষণা করে।
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <motion.div
                className="text-center p-4 bg-muted rounded-xl border border-border/50"
                whileHover={{ y: -5 }}
              >
                <p className="font-bengali text-3xl font-bold text-primary">৭০০০+</p>
                <p className="font-bengali text-sm text-muted-foreground mt-1">বিশ্বের ভাষা</p>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-muted rounded-xl border border-border/50"
                whileHover={{ y: -5 }}
              >
                <p className="font-bengali text-3xl font-bold text-secondary">৩০০+</p>
                <p className="font-bengali text-sm text-muted-foreground mt-1">মিলিয়ন বাংলা ভাষী</p>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-muted rounded-xl border border-border/50"
                whileHover={{ y: -5 }}
              >
                <p className="font-bengali text-3xl font-bold text-accent">১৯৯</p>
                <p className="font-bengali text-sm text-muted-foreground mt-1">দেশে পালিত</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
