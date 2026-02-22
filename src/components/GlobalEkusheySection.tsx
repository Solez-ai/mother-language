import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Flag, Landmark, CalendarHeart, Award, MapPin } from "lucide-react";

const stats = [
  { label: "দেশে পালিত হয়", value: 199, icon: Globe, suffix: "+" },
  { label: "ইউনেস্কো স্বীকৃতি", value: 1999, icon: Award, suffix: "" },
  { label: "ভাষা সংরক্ষিত", value: 7000, icon: Flag, suffix: "+" },
  { label: "বছর ধরে উদযাপন", value: 73, icon: CalendarHeart, suffix: "+" },
];

const celebrations = [
  {
    country: "কানাডা",
    detail:
      "কানাডার ভ্যাঙ্কুভারে বসবাসকারী বাঙালি রফিকুল ইসলামের উদ্যোগে কানাডা সরকার ২১শে ফেব্রুয়ারিকে 'International Mother Language Day' হিসেবে স্বীকৃতি দেয়।",
    icon: Flag,
  },
  {
    country: "ইউনেস্কো",
    detail:
      "১৯৯৯ সালের ১৭ই নভেম্বর ইউনেস্কো ২১শে ফেব্রুয়ারিকে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে ঘোষণা করে। ২০০০ সাল থেকে বিশ্বব্যাপী পালিত হচ্ছে।",
    icon: Landmark,
  },
  {
    country: "ভারত",
    detail:
      "পশ্চিমবঙ্গ, ত্রিপুরা ও আসামে বাঙালি জনগোষ্ঠী প্রভাতফেরি, সাংস্কৃতিক অনুষ্ঠান ও শহীদ মিনারে শ্রদ্ধা নিবেদনের মাধ্যমে দিনটি পালন করে।",
    icon: MapPin,
  },
  {
    country: "যুক্তরাজ্য",
    detail:
      "লন্ডনের আলতাব আলী পার্কে ও ব্রিক লেনে বাংলাদেশি কমিউনিটি শহীদ মিনারের প্রতিকৃতিতে ফুল দিয়ে শ্রদ্ধা জানায়।",
    icon: Landmark,
  },
  {
    country: "অস্ট্রেলিয়া",
    detail:
      "সিডনি ও মেলবোর্নে প্রবাসী বাংলাদেশিরা প্রভাতফেরি, আলোচনা সভা ও সাংস্কৃতিক সন্ধ্যার আয়োজন করে।",
    icon: Globe,
  },
  {
    country: "জাপান",
    detail:
      "টোকিওতে বাংলাদেশ দূতাবাসের উদ্যোগে প্রতি বছর ভাষা দিবস উদযাপিত হয়। জাপানি ভাষাবিদরাও অংশ নেন।",
    icon: Award,
  },
];

const useCounter = (target: number, isActive: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isActive, target, duration]);

  return count;
};

const StatCard = ({
  stat,
  index,
  isInView,
}: {
  stat: (typeof stats)[0];
  index: number;
  isInView: boolean;
}) => {
  const count = useCounter(stat.value, isInView);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      className="text-center p-6"
    >
      <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-3">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground font-bengali">
        {count.toLocaleString("bn-BD")}
        {stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground font-bengali mt-1">{stat.label}</div>
    </motion.div>
  );
};

const GlobalEkusheySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-28 bg-card overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium font-bengali">বিশ্বব্যাপী স্বীকৃতি</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-foreground mb-4">
            বিশ্বজুড়ে একুশ
          </h2>
          <p className="text-muted-foreground font-bengali max-w-2xl mx-auto text-lg">
            বাংলার সন্তানদের আত্মত্যাগ আজ বিশ্বের প্রতিটি কোণে স্বীকৃত — ১৯৯টিরও বেশি দেশে
            পালিত হয় আন্তর্জাতিক মাতৃভাষা দিবস
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 backdrop-blur-md bg-background/50 border border-border rounded-2xl p-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {celebrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.12 }}
                className="group relative backdrop-blur-md bg-background/60 border border-border rounded-xl p-6 hover:shadow-elevated hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-bengali text-foreground">
                    {item.country}
                  </h3>
                </div>
                <p className="text-muted-foreground font-bengali text-sm leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalEkusheySection;
