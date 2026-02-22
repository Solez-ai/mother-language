import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Pen, Mail, Flower2, BookOpen } from "lucide-react";

const letterLines = [
  "একজন শহীদ সন্তানের মায়ের চিঠি (বাস্তব অনুভব থেকে সংকলিত)",
  "",
  "প্রিয় বাবা,",
  "",
  "তুই তো বলেছিলি, “মা, দেশ স্বাধীন না হওয়া পর্যন্ত ফিরব না।”",
  "আমি সেদিন হাসতে হাসতে বলেছিলাম, “যুদ্ধ শেষ হলেই চলে আয়।”",
  "কিন্তু জানতাম না, তোর ফেরা হবে লাল-সবুজ পতাকায় মোড়া হয়ে।",
  "",
  "বাবা, তোর ঘরটা আমি এখনো আগের মতোই রেখে দিয়েছি।",
  "তোর বইগুলো, তোর প্রিয় শার্ট-সবকিছু।",
  "মাঝে মাঝে মনে হয়, দরজা খুলে তুই ঢুকে বলবি,",
  "“মা, ভাত দে, খুব ক্ষুধা লেগেছে।”",
  "",
  "কাঁদি আমি, খুব কাঁদি।",
  "তবু জানিস, বুকের ভেতর একটা অদ্ভুত গর্বও কাজ করে।",
  "আমার ছেলে কাপুরুষের মতো বাঁচেনি",
  "সে দেশের জন্য জীবন দিয়েছে।",
  "",
  "আজ মানুষ তোকে শহীদ বলে ডাকে।",
  "আমি তোকে ডাকি আমার সোনার ছেলে বলে।",
  "তুই যেখানে থাকিস, ভালো থাকিস বাবা।",
  "",
  "— তোর মা",
];

// Floating petal component
const Petal = ({ delay, x, duration }: { delay: number; x: number; duration: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    initial={{ y: -20, x, opacity: 0, rotate: 0 }}
    animate={{
      y: "100vh",
      x: x + Math.random() * 100 - 50,
      opacity: [0, 0.6, 0.4, 0],
      rotate: 360,
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <Flower2 className="w-4 h-4 text-secondary/30" />
  </motion.div>
);

const MothersLetterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-28 bg-muted overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <Petal
          key={i}
          delay={i * 2.5}
          x={Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200)}
          duration={12 + Math.random() * 8}
        />
      ))}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium font-bengali">একটি মায়ের আর্তনাদ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-foreground mb-4">
            মায়ের চিঠি
          </h2>
          <p className="text-muted-foreground font-bengali max-w-2xl mx-auto text-lg">
            একজন মা তাঁর শহীদ সন্তানকে লেখা চিঠি — ভালোবাসা, বেদনা আর গর্বের অশ্রুভেজা কথামালা
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="relative rounded-2xl p-8 md:p-12 border-2 border-dashed border-secondary/20"
            style={{
              background: "var(--gradient-paper)",
            }}
          >
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-secondary/30 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-secondary/30 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-secondary/30 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-lg" />

            <div className="flex justify-center gap-3 mb-8">
              <Pen className="w-5 h-5 text-secondary/50" />
              <BookOpen className="w-5 h-5 text-secondary/50" />
              <Flower2 className="w-5 h-5 text-secondary/50" />
            </div>

            <div className="space-y-0">
              {letterLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                  }}
                  className={`font-bengali leading-loose text-foreground/90 ${line === "" ? "h-4" : ""
                    } ${line === "বাবা আমার," || line === "— তোর মা"
                      ? "text-xl font-semibold text-secondary"
                      : "text-base"
                    } ${line === "সন্ধ্যা এলো। তুই এলি না।"
                      ? "text-lg font-semibold text-foreground italic"
                      : ""
                    }`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 3, duration: 1 }}
              className="mt-10 pt-6 border-t border-secondary/20 text-center"
            >
              <div className="inline-flex items-center gap-2 text-secondary/60">
                <Flower2 className="w-4 h-4" />
                <span className="text-sm font-bengali">ফুলেল শ্রদ্ধা</span>
                <Flower2 className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MothersLetterSection;
