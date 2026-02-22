import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flag, Users, Calendar, Award, Globe, Sparkles, Star } from "lucide-react";

const timelineEvents = [
  {
    year: "১৯৪৮",
    title: "ভাষা আন্দোলনের সূচনা",
    description: "পাকিস্তান সরকার উর্দুকে একমাত্র রাষ্ট্রভাষা ঘোষণা করলে প্রতিবাদ শুরু হয়।",
    Icon: Flag
  },
  {
    year: "১৯৫২",
    title: "২১শে ফেব্রুয়ারি",
    description: "ঢাকায় ছাত্র-জনতার মিছিলে পুলিশের গুলিতে শহীদ হন সালাম, বরকত, রফিক, জব্বার।",
    highlight: true,
    Icon: Users
  },
  {
    year: "১৯৫৬",
    title: "বাংলা রাষ্ট্রভাষা",
    description: "পাকিস্তান সংবিধানে বাংলাকে অন্যতম রাষ্ট্রভাষা হিসেবে স্বীকৃতি দেওয়া হয়।",
    Icon: Calendar
  },
  {
    year: "১৯৭১",
    title: "বাংলাদেশ স্বাধীন",
    description: "বাংলা ভাষা ও সংস্কৃতির উপর গৌরব অর্জন করে স্বাধীন বাংলাদেশের জন্ম।",
    Icon: Award
  },
  {
    year: "১৯৯৯",
    title: "আন্তর্জাতিক মাতৃভাষা দিবস",
    description: "ইউনেস্কো ২১শে ফেব্রুয়ারিকে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে ঘোষণা করে।",
    highlight: true,
    Icon: Globe
  }
];

const TimelineSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-muted relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-pattern-nakshi opacity-10 dark:opacity-[0.03]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bengali text-lg flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            ঘটনাপ্রবাহ
          </span>
          <h2 className="font-bengali text-4xl md:text-5xl font-bold text-foreground mt-2">
            ভাষা আন্দোলনের <span className="text-primary">টাইমলাইন</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-border hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-accent to-secondary"
              style={{ height: lineHeight }}
            />
          </div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-12 md:mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              <motion.div
                className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`inline-block p-6 md:p-8 rounded-2xl relative overflow-hidden ${event.highlight
                      ? "bg-primary text-primary-foreground shadow-elevated"
                      : "bg-card shadow-soft border border-border"
                    }`}
                  whileHover={{
                    boxShadow: event.highlight
                      ? "0 20px 60px -15px hsl(var(--primary) / 0.4)"
                      : "0 20px 40px -10px hsl(var(--foreground) / 0.1)"
                  }}
                >
                  {event.highlight && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}

                  <div className="relative z-10">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <event.Icon className={`w-5 h-5 ${event.highlight ? "text-accent" : "text-primary"}`} />
                      <span className={`text-sm font-medium ${event.highlight ? "text-accent" : "text-primary"}`}>
                        {event.year}
                      </span>
                    </div>
                    <h3 className={`font-bengali text-xl md:text-2xl font-bold ${event.highlight ? "text-primary-foreground" : "text-foreground"
                      }`}>
                      {event.title}
                    </h3>
                    <p className={`font-bengali mt-2 text-sm md:text-base ${event.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}>
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative z-10 order-first md:order-none"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center font-bengali font-bold text-lg relative ${event.highlight
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground"
                    }`}
                  animate={event.highlight ? {
                    boxShadow: [
                      "0 0 0 0 hsl(var(--accent) / 0)",
                      "0 0 0 20px hsl(var(--accent) / 0.15)",
                      "0 0 0 0 hsl(var(--accent) / 0)"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className={`absolute inset-2 rounded-full border-2 ${event.highlight ? "border-accent-foreground/20" : "border-secondary-foreground/20"
                    }`} />

                  {event.highlight && (
                    <>
                      <motion.div
                        className="absolute -top-1 -right-1"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="w-4 h-4 text-primary fill-primary" />
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-1 -left-1"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="w-3 h-3 text-secondary fill-secondary" />
                      </motion.div>
                    </>
                  )}

                  <span className="relative z-10">{event.year}</span>
                </motion.div>

                {index < timelineEvents.length - 1 && (
                  <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-border to-transparent" />
                )}
              </motion.div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="font-bengali text-muted-foreground">
            এই ইতিহাস আমাদের অনুপ্রেরণা, এই ত্যাগ আমাদের গর্ব
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
