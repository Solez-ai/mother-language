import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import nakshiPattern from "@/assets/nakshi-pattern.jpg";
import alponaArt from "@/assets/alpona-art.png";
import { Music, BookOpen, Mic2, Palette, Drama, ScrollText, Feather, Quote, Play, Pause } from "lucide-react";


const culturalItems = [
  {
    title: "নকশী কাঁথা",
    subtitle: "Nakshi Kantha",
    description: "বাংলার ঐতিহ্যবাহী সূচিশিল্প যা প্রতিটি সুতায় গল্প বলে",
    image: nakshiPattern
  },
  {
    title: "আলপনা",
    subtitle: "Alpona",
    description: "মাটির উৎসব ও পূজার সময় আঁকা শুভ্র চালের গুঁড়ার নকশা",
    image: alponaArt
  }
];

const culturalElements = [
  { Icon: Drama, title: "যাত্রা", desc: "লোকনাট্য" },
  { Icon: Music, title: "বাউল গান", desc: "আধ্যাত্মিক সঙ্গীত" },
  { Icon: BookOpen, title: "সাহিত্য", desc: "রবীন্দ্রনাথ থেকে" },
  { Icon: Palette, title: "পট চিত্র", desc: "স্ক্রল পেইন্টিং" }
];

const poetryItems = [
  {
    title: "আমার ভাইয়ের রক্তে রাঙানো",
    author: "আব্দুল গাফফার চৌধুরী",
    year: "১৯৫২",
    excerpt: "আমার ভাইয়ের রক্তে রাঙানো একুশে ফেব্রুয়ারি, আমি কি ভুলিতে পারি...",
    Icon: Feather,
    type: "song"
  },
  {
    title: "বাংলা ভাষা",
    author: "রবীন্দ্রনাথ ঠাকুর",
    year: "১৯০৫",
    excerpt: "আমার সোনার বাংলা, আমি তোমায় ভালোবাসি...",
    Icon: ScrollText,
    type: "poem"
  },
  {
    title: "একুশের গান",
    author: "আলতাফ মাহমুদ",
    year: "১৯৫৪",
    excerpt: "মোদের গরব, মোদের আশা, আ-মরি বাংলা ভাষা...",
    Icon: Mic2,
    type: "song"
  },
  {
    title: "ফেব্রুয়ারির একুশ তারিখ",
    author: "শামসুর রাহমান",
    year: "১৯৬৯",
    excerpt: "ফেব্রুয়ারির একুশ তারিখ, দুপুর বেলার অক্ত...",
    Icon: Feather,
    type: "poem"
  }
];

const CultureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/anthem.mp3");
    audio.loop = true;
    audio.volume = 1.0;
    audio.preload = "auto";

    const setPlay = () => setIsPlaying(true);
    const setPause = () => setIsPlaying(false);

    audio.addEventListener("play", setPlay);
    audio.addEventListener("pause", setPause);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener("play", setPlay);
      audio.removeEventListener("pause", setPause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error("Audio playback failed:", err);
      }
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <section className="py-24 bg-card relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bengali text-lg">আমাদের ঐতিহ্য</span>
          <h2 className="font-bengali text-4xl md:text-5xl font-bold text-foreground mt-2">
            বাংলা <span className="text-secondary">সংস্কৃতি</span>
          </h2>
          <p className="font-bengali text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            ভাষার সাথে সাথে আমাদের রয়েছে সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {culturalItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-accent font-display italic text-sm">
                    {item.subtitle}
                  </span>
                  <h3 className="font-bengali text-3xl font-bold text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="font-bengali text-foreground/70 mt-2">
                    {item.description}
                  </p>
                </div>

                <div className="absolute inset-0 border-4 border-accent/0 group-hover:border-accent/50 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {culturalElements.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-muted p-6 rounded-xl text-center shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <item.Icon className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-bengali text-xl font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="font-bengali text-muted-foreground text-sm mt-1">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-bengali text-lg flex items-center justify-center gap-2">
              <Feather className="w-5 h-5" />
              কবিতা ও সঙ্গীত
            </span>
            <h3 className="font-bengali text-3xl md:text-4xl font-bold text-foreground mt-2">
              ভাষা আন্দোলনের <span className="text-primary">কবিতা ও গান</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {poetryItems.map((poem, index) => (
              <motion.div
                key={poem.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-muted p-6 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${poem.type === 'song' ? 'bg-accent/15' : 'bg-primary/15'
                    }`}>
                    <poem.Icon className={`w-6 h-6 ${poem.type === 'song' ? 'text-accent' : 'text-primary'
                      }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${poem.type === 'song'
                        ? 'bg-accent/15 text-accent'
                        : 'bg-primary/15 text-primary'
                        }`}>
                        {poem.type === 'song' ? 'গান' : 'কবিতা'}
                      </span>
                      <span className="text-xs text-muted-foreground">{poem.year}</span>
                    </div>
                    <h4 className="font-bengali text-lg font-bold text-foreground">
                      {poem.title}
                    </h4>
                    <p className="font-bengali text-sm text-secondary mt-1">
                      — {poem.author}
                    </p>
                    <div className="mt-3 p-3 bg-card rounded-lg border-l-4 border-accent/40">
                      <Quote className="w-4 h-4 text-accent/50 mb-1" />
                      <p className="font-bengali text-sm text-muted-foreground italic">
                        {poem.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-primary p-8 md:p-12 rounded-2xl text-primary-foreground shadow-elevated relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Music className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Mic2 className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <span className="text-accent text-sm font-medium">প্রধান গান</span>
                    <h4 className="font-bengali text-2xl font-bold">আমার ভাইয়ের রক্তে রাঙানো</h4>
                  </div>
                  <div className="ml-auto">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9, rotate: isPlaying ? -10 : 10 }}
                      onClick={togglePlay}
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-glow ${isPlaying
                        ? "bg-accent text-accent-foreground"
                        : "bg-background/20 backdrop-blur-md text-primary-foreground border border-white/20 hover:bg-white/30"
                        }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 fill-current" />
                      ) : (
                        <Play className="w-8 h-8 fill-current translate-x-1" />
                      )}

                      {isPlaying && (
                        <motion.div
                          layoutId="pulse"
                          className="absolute inset-0 rounded-full bg-accent/30"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.button>
                  </div>
                </div>
                <p className="font-bengali text-primary-foreground/80 text-lg mb-6 max-w-2xl">
                  এই গানটি প্রতি বছর একুশে ফেব্রুয়ারির প্রভাতফেরীতে লক্ষ লক্ষ মানুষের কণ্ঠে ধ্বনিত হয়।
                  এটি বাঙালি জাতির আত্মত্যাগ ও ভাষাপ্রেমের প্রতীক।
                </p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="text-accent">গীতিকার:</span>
                    <span className="ml-2">আব্দুল গাফফার চৌধুরী</span>
                  </div>
                  <div>
                    <span className="text-accent">সুরকার:</span>
                    <span className="ml-2">আলতাফ মাহমুদ</span>
                  </div>
                  <div>
                    <span className="text-accent">রচনাকাল:</span>
                    <span className="ml-2">১৯৫২</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureSection;
