import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Users, AlertTriangle, Languages, ChevronDown, ChevronUp } from "lucide-react";
import InteractiveMap from "./InteractiveMap";

const languages = [
  { name: "বাংলা", native: "বাংলা", speakers: "৩০০ মিলিয়ন", color: "bg-primary" },
  { name: "মান্দারিন", native: "中文", speakers: "১১০০ মিলিয়ন", color: "bg-secondary" },
  { name: "স্প্যানিশ", native: "Español", speakers: "৫৫০ মিলিয়ন", color: "bg-accent" },
  { name: "হিন্দি", native: "हिन्दी", speakers: "৬০০ মিলিয়ন", color: "bg-secondary" },
  { name: "আরবি", native: "العربية", speakers: "৪০০ মিলিয়ন", color: "bg-primary" },
  { name: "পর্তুগিজ", native: "Português", speakers: "২৫০ মিলিয়ন", color: "bg-secondary" },
];

const greetings = [
  { lang: "বাংলা", text: "আসসালামু আলাইকুম", pronunciation: "Assalamu Alaikum" },
  { lang: "हिन्दी", text: "नमस्कार", pronunciation: "নমস্কার" },
  { lang: "日本語", text: "こんにちは", pronunciation: "কোন্নিচিওয়া" },
  { lang: "العربية", text: "مرحبا", pronunciation: "মারহাবা" },
  { lang: "Español", text: "Hola", pronunciation: "ওলা" },
  { lang: "Français", text: "Bonjour", pronunciation: "বঁজুর" },
];

const LanguageDiversitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeGreeting, setActiveGreeting] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref} id="language-diversity">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            hsl(var(--primary)) 0px,
            hsl(var(--primary)) 1px,
            transparent 1px,
            transparent 20px
          )`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* NEW: Bengali Language Diversity Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-bengali text-4xl md:text-5xl font-bold text-foreground mb-6">
              বাংলা ভাষার <span className="text-primary">বৈচিত্র্য</span>
            </h2>
            <p className="font-bengali text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              বাংলা ভাষা শুধু একটি ভাষা নয়—এটি একটি জীবন্ত সংস্কৃতি, ইতিহাস এবং মানুষের আবেগের ধারক। একই ভাষার ভেতরে উচ্চারণ, শব্দচয়ন, বাক্যগঠন ও স্বরভঙ্গির অসংখ্য পার্থক্য বাংলা ভাষাকে করেছে অত্যন্ত সমৃদ্ধ ও বৈচিত্র্যময়।
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <div className="font-bengali text-lg text-muted-foreground/90 space-y-4 mb-8 text-left bg-card/50 p-6 rounded-2xl border border-border/50">
                    <p>
                      বাংলাদেশের এক অঞ্চল থেকে আরেক অঞ্চলে গেলেই দেখা যায় ভাষার রূপ বদলে যায়। ঢাকার ভাষা যেমন মানভাষার কাছাকাছি, তেমনি চট্টগ্রামের ভাষা ধ্বনিগতভাবে অনেক আলাদা। সিলেটি ভাষার উচ্চারণ ও শব্দভাণ্ডার মানবাংলা থেকে ভিন্ন, আবার রংপুর অঞ্চলে শোনা যায় কামতাপুরী বা রাজবংশী প্রভাব। দক্ষিণাঞ্চলে বরিশাইল্যা ভাষায় স্বরের টান আলাদা, আর উত্তর-পূর্বে সিলেটি ভাষায় অনেক প্রাচীন ধ্বনির উপস্থিতি রয়েছে।
                    </p>
                    <p>
                      শুধু আঞ্চলিক উপভাষাই নয়, বাংলাদেশে বসবাসকারী বিভিন্ন জাতিগোষ্ঠীর নিজস্ব ভাষাও বাংলা ভাষার বৈচিত্র্যের অংশ। চাকমা, মারমা, সাঁওতাল, গারো, হাজং, খাসি প্রভৃতি জনগোষ্ঠীর ভাষা এই ভূখণ্ডের ভাষাগত সমৃদ্ধিকে আরও গভীর করেছে। এসব ভাষার কিছু ইন্দো-আর্য, কিছু তিব্বতি-বর্মী, আবার কিছু অস্ট্রো-এশীয় ভাষা পরিবারের অন্তর্গত।
                    </p>
                    <div className="bg-background/60 p-4 rounded-xl border border-border/50 mt-4">
                      <h4 className="font-bold text-foreground mb-2">বাংলা ভাষার বৈচিত্র্য মূলত তিনটি স্তরে প্রকাশ পায়—</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>প্রথমত, ধ্বনিগত বৈচিত্র্য: একই শব্দ বিভিন্ন অঞ্চলে ভিন্নভাবে উচ্চারিত হয়।</li>
                        <li>দ্বিতীয়ত, শব্দগত বৈচিত্র্য: একটি বস্তুর জন্য ভিন্ন ভিন্ন অঞ্চলে আলাদা শব্দ ব্যবহৃত হয়।</li>
                        <li>তৃতীয়ত, ব্যাকরণগত পার্থক্য।</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 mx-auto px-6 py-2 rounded-full border border-primary/30 text-primary font-bengali font-medium hover:bg-primary/5 transition-all mb-16"
            >
              {isExpanded ? "সংক্ষিপ্ত করুন" : "আরও পড়ুন"}
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              )}
            </button>
          </div>

          <div className="mt-12 w-full">
            <h3 className="font-bengali text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              চলুন মানচিত্রে <span className="text-secondary">ইন্টারঅ্যাকটিভভাবে খেলি!</span>
            </h3>

            <InteractiveMap />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bengali text-lg flex items-center justify-center gap-2">
            <Globe className="w-5 h-5" />
            বিশ্বের ভাষা
          </span>
          <h2 className="font-bengali text-4xl md:text-5xl font-bold text-foreground mt-2">
            ভাষার <span className="text-accent">বৈচিত্র্য</span>
          </h2>
          <p className="font-bengali text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            পৃথিবীতে ৭,০০০ এরও বেশি ভাষা রয়েছে। প্রতিটি ভাষাই অমূল্য সাংস্কৃতিক সম্পদ।
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bengali text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              বিশ্বের প্রধান ভাষাসমূহ
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-all"
                >
                  <div className={`w-12 h-12 ${lang.color} rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg`}>
                    {lang.native[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bengali font-semibold text-foreground">{lang.name}</h4>
                      <span className="font-bengali text-sm text-muted-foreground">{lang.speakers}</span>
                    </div>
                    <p className="text-lg font-display text-muted-foreground">{lang.native}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-bengali text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Languages className="w-6 h-6 text-accent" />
              বিভিন্ন ভাষায় শুভেচ্ছা
            </h3>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl mb-6 text-center shadow-elevated">
              <motion.p
                key={activeGreeting}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {greetings[activeGreeting].text}
              </motion.p>
              <p className="text-accent text-lg">{greetings[activeGreeting].lang}</p>
              <p className="text-primary-foreground/60 text-sm mt-2 font-bengali">
                উচ্চারণ: {greetings[activeGreeting].pronunciation}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {greetings.map((greeting, index) => (
                <button
                  key={greeting.lang}
                  onClick={() => setActiveGreeting(index)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 font-bengali ${activeGreeting === index
                    ? "border-accent bg-accent/10 text-foreground shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:border-accent/40"
                    }`}
                >
                  <span className="block text-lg">{greeting.text}</span>
                  <span className="block text-xs mt-1 opacity-70">{greeting.lang}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="relative bg-card border border-border rounded-3xl p-10 md:p-14 overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-secondary/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-secondary/20 rounded-br-3xl" />
            <div className="absolute top-4 right-6 opacity-5">
              <AlertTriangle className="w-32 h-32 text-secondary" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <AlertTriangle className="w-10 h-10 text-secondary" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bengali text-2xl md:text-3xl font-bold text-foreground mb-3">
                  বিপন্ন ভাষা <span className="text-secondary">সংরক্ষণ করুন</span>
                </h3>
                <p className="font-bengali text-muted-foreground max-w-2xl text-lg leading-relaxed">
                  প্রতি দুই সপ্তাহে একটি ভাষা বিলুপ্ত হচ্ছে। বর্তমানে বিশ্বের <span className="text-secondary font-semibold">৪০%</span> ভাষা বিপন্ন।
                  আমাদের মাতৃভাষা ও অন্যান্য ভাষা সংরক্ষণে এগিয়ে আসুন।
                </p>
                <div className="flex flex-wrap gap-4 mt-5 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm font-bengali text-muted-foreground bg-muted px-4 py-2 rounded-full border border-border">
                    <Globe className="w-4 h-4 text-primary" />
                    ৭,০০০+ ভাষা
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bengali text-muted-foreground bg-muted px-4 py-2 rounded-full border border-border">
                    <AlertTriangle className="w-4 h-4 text-secondary" />
                    ২,৫০০+ বিপন্ন
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bengali text-muted-foreground bg-muted px-4 py-2 rounded-full border border-border">
                    <Users className="w-4 h-4 text-accent" />
                    প্রতি ২ সপ্তাহে ১টি বিলুপ্ত
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguageDiversitySection;
