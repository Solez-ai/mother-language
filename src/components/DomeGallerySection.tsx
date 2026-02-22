import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn, Camera, ChevronLeft, ChevronRight } from "lucide-react";

import galleryShaheed from "@/assets/gallery-shaheed-minar.png";
import galleryEkushey from "@/assets/gallery-ekushey.png";
import galleryAlpona from "@/assets/gallery-alpona.png";
import galleryCalligraphy from "@/assets/gallery-calligraphy.png";
import galleryProtest from "@/assets/gallery-protest.png";
import galleryFolk from "@/assets/gallery-folk.png";
import galleryKantha from "@/assets/gallery-kantha.png";

const galleryItems = [
  { src: galleryShaheed, title: "শহীদ মিনার", desc: "ভাষা শহীদদের স্মৃতিস্তম্ভ", span: "col-span-2 row-span-2" },
  { src: galleryEkushey, title: "একুশে উদযাপন", desc: "প্রভাতফেরি", span: "col-span-1 row-span-1" },
  { src: galleryAlpona, title: "আলপনা", desc: "ঐতিহ্যবাহী মেঝে চিত্র", span: "col-span-1 row-span-2" },
  { src: galleryCalligraphy, title: "বাংলা ক্যালিগ্রাফি", desc: "হস্তলিখন শিল্প", span: "col-span-1 row-span-1" },
  { src: galleryProtest, title: "ভাষা আন্দোলন", desc: "১৯৫২ সালের মিছিল", span: "col-span-2 row-span-1" },
  { src: galleryFolk, title: "লোকসংগীত", desc: "বাউল সাধক", span: "col-span-1 row-span-1" },
  { src: galleryKantha, title: "নকশী কাঁথা", desc: "ঐতিহ্যবাহী সূচিশিল্প", span: "col-span-1 row-span-1" },
];

const DomeGallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + dir + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-28 bg-muted relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[200px] bg-card rounded-b-[50%]" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bengali text-lg flex items-center justify-center gap-2">
            <Camera className="w-5 h-5" />
            চিত্রশালা
          </span>
          <h2 className="font-bengali text-4xl md:text-6xl font-bold text-foreground mt-2">
            স্মৃতির <span className="text-accent">গম্বুজ</span>
          </h2>
          <p className="font-bengali text-muted-foreground mt-4 max-w-xl mx-auto">
            ভাষা আন্দোলন ও বাংলা সংস্কৃতির অমূল্য মুহূর্তগুলো
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`${item.span} relative group cursor-pointer rounded-2xl overflow-hidden border border-border/50`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h4 className="font-bengali font-bold text-foreground text-lg">{item.title}</h4>
                    <p className="font-bengali text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-background/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors z-10"
              onClick={() => setSelectedIndex(null)}
              whileHover={{ scale: 1.1 }}
            >
              <X className="w-6 h-6 text-foreground" />
            </motion.button>

            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="font-bengali text-2xl font-bold text-foreground">
                  {galleryItems[selectedIndex].title}
                </h3>
                <p className="font-bengali text-muted-foreground mt-1">
                  {galleryItems[selectedIndex].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DomeGallerySection;
