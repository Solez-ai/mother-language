import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Flame, Star, Shield, Quote, Flower2 } from "lucide-react";

const martyrs = [
  {
    name: "রফিক উদ্দিন আহমদ",
    title: "শহীদ রফিক",
    quote: "মায়ের ভাষার অধিকার আমাদের জন্মগত অধিকার",
    year: "১৯২৬-১৯৫২",
    icon: Flame,
    role: "ভাষা আন্দোলনের প্রথম শহীদ"
  },
  {
    name: "আবদুস সালাম",
    title: "শহীদ সালাম",
    quote: "আমার রক্তে বাংলা ভাষা অমর হোক",
    year: "১৯২৫-১৯৫২",
    icon: Shield,
    role: "সাহসী ভাষা সৈনিক"
  },
  {
    name: "আবুল বরকত",
    title: "শহীদ বরকত",
    quote: "বাংলা ভাষার জন্য জীবন দিতে আমি প্রস্তুত",
    year: "১৯২৭-১৯৫২",
    icon: Star,
    role: "ঢাকা বিশ্ববিদ্যালয়ের ছাত্র"
  },
  {
    name: "আবদুল জব্বার",
    title: "শহীদ জব্বার",
    quote: "মাতৃভাষা আমার অহংকার",
    year: "১৯১৯-১৯৫২",
    icon: Heart,
    role: "নির্ভীক ভাষা যোদ্ধা"
  }
];

const MartyrsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Flower2 className="w-5 h-5 text-accent" />
            <span className="text-accent font-bengali text-lg tracking-wider">চিরস্মরণীয়</span>
            <Flower2 className="w-5 h-5 text-accent" />
          </div>
          <h2 className="font-bengali text-4xl md:text-6xl font-bold text-foreground mt-2">
            আমাদের <span className="text-accent">ভাষা শহীদ</span>
          </h2>
          <div className="w-24 h-0.5 bg-accent/50 mx-auto mt-4" />
          <p className="font-bengali text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            যাদের রক্তের বিনিময়ে আমরা পেয়েছি মায়ের ভাষায় কথা বলার অধিকার
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {martyrs.map((martyr, index) => {
            const Icon = martyr.icon;
            return (
              <motion.div
                key={martyr.name}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 h-full hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--accent)/0.1)] overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-[60px]" />

                  <div className="flex items-start gap-5">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0 border border-accent/20"
                    >
                      <Icon className="w-7 h-7 text-accent" />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="font-bengali text-2xl font-bold text-accent">
                        {martyr.title}
                      </h3>
                      <p className="font-bengali text-muted-foreground text-sm mt-0.5">
                        {martyr.name}
                      </p>
                      <p className="font-bengali text-muted-foreground/60 text-xs mt-1 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-accent/60" />
                        {martyr.role}
                        <span className="mx-1">·</span>
                        {martyr.year}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pl-2 border-l-2 border-accent/30">
                    <Quote className="w-4 h-4 text-accent/40 mb-2" />
                    <blockquote className="font-bengali text-foreground/80 text-lg leading-relaxed">
                      {martyr.quote}
                    </blockquote>
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/0 group-hover:bg-accent/5 rounded-full blur-2xl transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-card/60 backdrop-blur-sm border border-accent/20 rounded-3xl py-8 px-12">
            <Flower2 className="w-6 h-6 text-accent/60" />
            <p className="font-bengali text-2xl md:text-3xl font-light text-foreground leading-relaxed">
              "মোদের গরব, মোদের আশা, আ মরি <span className="text-accent font-semibold">বাংলা ভাষা</span>"
            </p>
            <p className="font-bengali text-sm text-muted-foreground">— অতুলপ্রসাদ সেন</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MartyrsSection;
