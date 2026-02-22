import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Crosshair, Megaphone, AlertTriangle, Users } from "lucide-react";

const moments = [
  {
    time: "সকাল ৯:০০",
    location: "ঢাকা বিশ্ববিদ্যালয়",
    icon: Users,
    title: "ছাত্রদের সমাবেশ",
    description:
      "১৪৪ ধারা জারি হওয়া সত্ত্বেও হাজার হাজার ছাত্র ঢাকা বিশ্ববিদ্যালয় প্রাঙ্গণে জড়ো হয়। তাদের চোখে অদম্য সাহস, বুকে মাতৃভাষার প্রতি অপরিসীম ভালোবাসা।",
  },
  {
    time: "সকাল ১১:৩০",
    location: "আমতলা, ঢাকা বিশ্ববিদ্যালয়",
    icon: Megaphone,
    title: "১৪৪ ধারা ভঙ্গের সিদ্ধান্ত",
    description:
      "ছাত্ররা সিদ্ধান্ত নেয় যে, ১৪৪ ধারা ভঙ্গ করে মিছিল বের করবে। দশ জন দশ জন করে দল বেঁধে বের হওয়ার পরিকল্পনা করা হয়। ভাষার দাবিতে প্রাণ দিতেও তারা প্রস্তুত।",
  },
  {
    time: "দুপুর ৩:০০",
    location: "ঢাকা মেডিকেল কলেজের সামনে",
    icon: AlertTriangle,
    title: "পুলিশের লাঠিচার্জ ও কাঁদানে গ্যাস",
    description:
      "মিছিল যখন ঢাকা মেডিকেল কলেজের কাছে পৌঁছায়, পুলিশ লাঠিচার্জ ও কাঁদানে গ্যাস নিক্ষেপ করে। কিন্তু ছাত্ররা পিছু হটেনি। তাদের কণ্ঠে শুধু একটাই স্লোগান — 'রাষ্ট্রভাষা বাংলা চাই'।",
  },
  {
    time: "দুপুর ৩:২৫",
    location: "ঢাকা মেডিকেল কলেজ হোস্টেল প্রাঙ্গণ",
    icon: Crosshair,
    title: "পুলিশের গুলিবর্ষণ",
    description:
      "বিকেলের আলো যখন ম্লান হয়ে আসছিল, পুলিশ নিরস্ত্র ছাত্রদের ওপর গুলি চালায়। রফিক, সালাম, বরকত, জব্বারসহ অনেকে গুলিবিদ্ধ হন। রাজপথ রক্তে লাল হয়ে যায়।",
  },
  {
    time: "বিকেল ৪:০০",
    location: "ঢাকা মেডিকেল কলেজ হাসপাতাল",
    icon: Clock,
    title: "শহীদের রক্তে রঞ্জিত মাটি",
    description:
      "আবুল বরকত, রফিকউদ্দিন আহমদ, আবদুস সালামসহ আরও অনেকে শহীদ হন। তাঁদের আত্মত্যাগ বৃথা যায়নি — এই রক্তই বাংলা ভাষার মর্যাদা প্রতিষ্ঠার ভিত্তি রচনা করে।",
  },
  {
    time: "রাত ৯:০০",
    location: "সমগ্র ঢাকা",
    icon: MapPin,
    title: "প্রতিবাদের আগুন ছড়িয়ে পড়ে",
    description:
      "খবর ছড়িয়ে পড়ে সারা দেশে। শোক, ক্ষোভ আর প্রতিবাদের আগুন জ্বলে ওঠে প্রতিটি ঘরে। পরদিন থেকে শুরু হয় নতুন অধ্যায় — ভাষা আন্দোলনের চূড়ান্ত পর্ব।",
  },
];

const LastWordsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, hsl(var(--destructive) / 0.08) 0%, hsl(var(--background)) 70%)",
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-pattern-nakshi pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
            <Crosshair className="w-4 h-4" />
            <span className="text-sm font-medium font-bengali">
              ২১শে ফেব্রুয়ারি, ১৯৫২
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-foreground mb-4">
            মায়ের ভাষায় শেষ কথা
          </h2>
          <p className="text-muted-foreground font-bengali max-w-2xl mx-auto text-lg">
            সেই রক্তঝরা দিনের প্রতিটি মুহূর্ত, যখন বাংলার সন্তানেরা মাতৃভাষার
            জন্য জীবন উৎসর্গ করেছিল
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-px bg-destructive/60 md:-translate-x-px origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            style={{ height: "100%" }}
          />

          {moments.map((moment, index) => {
            const Icon = moment.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.25,
                }}
                className={`relative flex items-start mb-12 last:mb-0 ${isLeft
                    ? "md:flex-row md:pr-[calc(50%+2rem)] pl-16 md:pl-0"
                    : "md:flex-row-reverse md:pl-[calc(50%+2rem)] pl-16 md:pr-0"
                  }`}
              >
                <div className="absolute left-6 md:left-1/2 top-3 -translate-x-1/2 z-10">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive/40" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-destructive border-2 border-background" />
                  </span>
                </div>

                <div className="w-full backdrop-blur-md bg-card/70 border border-border rounded-xl p-6 shadow-soft border-l-4 border-l-secondary hover:shadow-elevated transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-destructive">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold font-bengali">
                        {moment.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-xs font-bengali">
                        {moment.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-secondary/10">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-bengali text-foreground mb-2">
                        {moment.title}
                      </h3>
                      <p className="text-muted-foreground font-bengali text-sm leading-relaxed">
                        {moment.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LastWordsSection;
