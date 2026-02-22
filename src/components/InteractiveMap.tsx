import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MapSVG from './MapSVG';

type Dialect = { name: string; origin: string; example: string };

type DivisionData = {
    label: string;
    svgId: string;    
    color: string;
    activeColor: string;
    glowColor: string;
    dialects: Dialect[];
};

// Map SVG path IDs to division info
// BD-A = Barisal, BD-B = Chittagong, BD-C = Dhaka, BD-D = Khulna, BD-E = Rajshahi, BD-F = Rangpur, BD-G = Sylhet
const divisions: Record<string, DivisionData> = {
    'BD-F': {
        label: 'রংপুর',
        svgId: 'BD-F',
        color: '#166534',
        activeColor: '#22c55e',
        glowColor: '#22c55e',
        dialects: [
            { name: 'রংপুরী/কামতাপুরী', origin: 'উত্তরাঞ্চলের প্রাচীন কামতা রাজ্যের ভাষা থেকে উদ্ভূত।', example: '"তই কাই যাস?"' },
            { name: 'রাজবংশী ভাষা', origin: 'রাজবংশী জনগোষ্ঠীর কথ্যভাষা।', example: '"তই কোত যাস?"' },
            { name: 'সাঁওতালি', origin: 'আদিবাসী সাঁওতাল জনগোষ্ঠীর ভাষা।', example: '"চেনা?" (কেমন?)' },
        ],
    },
    'BD-E': {
        label: 'রাজশাহী',
        svgId: 'BD-E',
        color: '#0e7490',
        activeColor: '#22d3ee',
        glowColor: '#22d3ee',
        dialects: [
            { name: 'বরেন্দ্রী উপভাষা', origin: 'উত্তর-পশ্চিম বাংলার প্রাচীন বরেন্দ্র অঞ্চলের ভাষা।', example: '"কোথা যাস?"' },
            { name: 'নওগাঁ–চাঁপাইনবাবগঞ্জ ভাষা', origin: 'সীমান্তবর্তী হওয়ায় হিন্দি-উর্দুর প্রভাব আছে।', example: '"তুই কিদর যাস?"' },
            { name: 'সাঁওতালি', origin: 'সাঁওতাল আদিবাসী জনগোষ্ঠীর অস্ট্রো-এশীয় ভাষা।', example: '"ইনাহা?" (কোথায়?)' },
        ],
    },
    'BD-MYMENSINGH': {
        label: 'ময়মনসিংহ',
        svgId: 'BD-MYMENSINGH',
        color: '#7c3aed',
        activeColor: '#a78bfa',
        glowColor: '#a78bfa',
        dialects: [
            { name: 'ময়মনসিংহী উপভাষা', origin: 'মধ্য-উত্তর বাংলার গ্রামীণ ভাষা; টানে ভিন্নতা আছে।', example: '"কই যাইতাছ?"' },
            { name: 'গারো ভাষা', origin: 'গারো আদিবাসী জনগোষ্ঠীর তিব্বতি-বর্মী ভাষা।', example: '"নাংআ?" (তুমি?)' },
            { name: 'হাজং ভাষা', origin: 'হাজং সম্প্রদায়ের ভাষা; ইন্দো-আর্য প্রভাব রয়েছে।', example: '"তুমি কাই যাও?"' },
        ],
    },
    'BD-G': {
        label: 'সিলেট',
        svgId: 'BD-G',
        color: '#b45309',
        activeColor: '#fbbf24',
        glowColor: '#fbbf24',
        dialects: [
            { name: 'সিলেটি ভাষা', origin: 'প্রাচীন কামরূপী উপভাষার ধারাবাহিকতা; স্বতন্ত্র ধ্বনিগত বৈশিষ্ট্য।', example: '"তুঁই কিতা করস?"' },
            { name: 'বিষ্ণুপ্রিয়া মণিপুরি', origin: 'মণিপুরি জনগোষ্ঠীর ইন্দো-আর্য ভাষা।', example: '"তুমি কই যাও?"' },
            { name: 'খাসি ভাষা', origin: 'খাসি জনগোষ্ঠীর অস্ট্রো-এশীয় ভাষা; সীমান্ত অঞ্চলে প্রচলিত।', example: '"খুব লেই?" (ভালো আছো?)' },
        ],
    },
    'BD-C': {
        label: 'ঢাকা',
        svgId: 'BD-C',
        color: '#be185d',
        activeColor: '#f472b6',
        glowColor: '#f472b6',
        dialects: [
            { name: 'ঢাকাইয়া কুট্টি ভাষা', origin: 'পুরান ঢাকার মুসলিম ব্যবসায়ী ও কারিগর সম্প্রদায়ের ভাষা; মোগল আমলে ফারসি-উর্দুর প্রভাব রয়েছে।', example: '"কই যাইতাছো?" (কোথায় যাচ্ছ?)' },
            { name: 'গোপালগঞ্জ–মাদারীপুর আঞ্চলিক ভাষা', origin: 'পদ্মা অববাহিকার দক্ষিণ-মধ্য উপভাষা।', example: '"তুমি কেডা?" (তুমি কে?)' },
            { name: 'মানিকগঞ্জ–টাঙ্গাইল উপভাষা', origin: 'মধ্য-পশ্চিম ঢাকার গ্রামীণ কথ্যভাষা।', example: '"কোথায় যাইতাছস?"' },
        ],
    },
    'BD-B': {
        label: 'চট্টগ্রাম',
        svgId: 'BD-B',
        color: '#1d4ed8',
        activeColor: '#60a5fa',
        glowColor: '#60a5fa',
        dialects: [
            { name: 'চাটগাঁইয়া ভাষা', origin: 'প্রাচীন আরাকান ও সমুদ্রবাণিজ্যের প্রভাবে গড়ে ওঠা স্বতন্ত্র উপভাষা।', example: '"তুঁই কইয্যা আছস?"' },
            { name: 'রোহিঙ্গা ভাষা', origin: 'আরাকান অঞ্চলের ইন্দো-আর্য ভাষা; কক্সবাজার অঞ্চলে ব্যবহৃত।', example: '"তুমার নাম কি?"' },
            { name: 'ত্রিপুরা (ককবরক)', origin: 'ত্রিপুরা জনগোষ্ঠীর তিব্বতি-বর্মী ভাষা; পার্বত্য অঞ্চলে প্রচলিত।', example: '"নাং বুই?" (তুমি ভালো?)' },
        ],
    },
    'BD-D': {
        label: 'খুলনা',
        svgId: 'BD-D',
        color: '#065f46',
        activeColor: '#34d399',
        glowColor: '#34d399',
        dialects: [
            { name: 'দক্ষিণ-পশ্চিম উপভাষা', origin: 'যশোর-সাতক্ষীরা অঞ্চলে প্রচলিত; পশ্চিমবঙ্গের প্রভাব রয়েছে।', example: '"কোথায় যাইতাছিস রে?"' },
            { name: 'সুন্দরবন উপকূলীয় ভাষা', origin: 'উপকূল ও বনাঞ্চলের মিশ্র ভাষা; জেলেদের মধ্যে প্রচলিত।', example: '"নাও লইয়া যামু।"' },
            { name: 'বাগেরহাট আঞ্চলিক ভাষা', origin: 'নদীবিধৌত অঞ্চলের কথ্যভাষা।', example: '"তুই আইবি?" (তুই আসবি?)' },
        ],
    },
    'BD-A': {
        label: 'বরিশাল',
        svgId: 'BD-A',
        color: '#9a3412',
        activeColor: '#fb923c',
        glowColor: '#fb923c',
        dialects: [
            { name: 'বরিশাইল্যা ভাষা', origin: 'দক্ষিণাঞ্চলের নদীমাতৃক অঞ্চলে বিকশিত স্বতন্ত্র উপভাষা।', example: '"কই যাইতাছো?"' },
            { name: 'ভোলা উপভাষা', origin: 'দ্বীপাঞ্চলীয় স্বরভঙ্গি; শব্দে টান স্পষ্ট।', example: '"তুমি কই থাকো?"' },
            { name: 'পটুয়াখালী আঞ্চলিক ভাষা', origin: 'উপকূলীয় পরিবেশে বিকশিত; ধ্বনিতে নরম টান।', example: '"আইবা নাকি?"' },
        ],
    },
};

const divisionList = Object.values(divisions);

const InteractiveMap: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [selected, setSelected] = useState<string | null>(null);
    const [labelPositions, setLabelPositions] = useState<Record<string, { x: number; y: number }>>({});

    const displayId = hovered ?? selected;
    const data = displayId ? divisions[displayId] : null;

    const handleClick = (id: string) => {
        setSelected(prev => (prev === id ? null : id));
    };

    // Custom cursor: SVG map-pin as a data-URI (24x24, hotspot = 12,24 = bottom tip)
    const cursorColor = hovered
      ? (divisions[hovered]?.activeColor ?? '#ffffff')
      : '#ffffff';
    const encodedCursor = encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 24 32">
        <path fill="${cursorColor}" stroke="rgba(0,0,0,0.5)" stroke-width="1"
          d="M12 0C7.58 0 4 3.58 4 8c0 7 8 20 8 20s8-13 8-20c0-4.42-3.58-8-8-8z"/>
        <circle cx="12" cy="8" r="3" fill="rgba(0,0,0,0.35)"/>
      </svg>`
    );
    const customCursorCSS = `.map-cursor-zone { cursor: url("data:image/svg+xml,${encodedCursor}") 12 32, crosshair; }`;

    // Build dynamic CSS to color the SVG paths + custom cursor
    // Each path has id like "BD-A", we override fill + stroke
    const styleRules = customCursorCSS + '\n' + Object.values(divisions).map(div => {
        const isActive = hovered === div.svgId || selected === div.svgId;
        const isPinned = selected === div.svgId;
        const isHov = hovered === div.svgId;
        const isDimmed = selected && selected !== div.svgId && hovered !== div.svgId;
        const fill = isActive ? div.activeColor : div.color;
        const opacity = isDimmed ? 0.4 : 1;
        return `
      #map-svg-root path[id="${div.svgId}"] {
        fill: ${fill} !important;
        opacity: ${opacity};
        stroke: ${isActive ? '#fff' : 'rgba(255,255,255,0.25)'} !important;
        stroke-width: ${isPinned ? '2.5' : isHov ? '2' : '1'} !important;
        transition: fill 0.2s ease, opacity 0.2s ease, stroke-width 0.15s ease;
        filter: ${isActive ? `drop-shadow(0 0 8px ${div.glowColor}88)` : 'none'};
      }
    `;
    }).join('\n');

    useEffect(() => {
      const computeLabelPositions = () => {
        const nextPositions: Record<string, { x: number; y: number }> = {};
        Object.keys(divisions).forEach((id) => {
          const path = document.querySelector(`#map-svg-root path[id="${id}"]`) as SVGGraphicsElement | null;
          if (!path) return;
          const box = path.getBBox();
          nextPositions[id] = {
            x: box.x + box.width / 2,
            y: box.y + box.height / 2,
          };
        });
        setLabelPositions(nextPositions);
      };

      const raf = requestAnimationFrame(computeLabelPositions);
      window.addEventListener('resize', computeLabelPositions);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', computeLabelPositions);
      };
    }, []);

  return (
    <div className="w-full">
      <style>{styleRules}</style>


      {/* ===== SIDE-BY-SIDE: MAP LEFT | INFO RIGHT ===== */}
      <div className="flex flex-col xl:flex-row gap-8 items-start w-full">

        {/* ====== LEFT: MAP COLUMN ====== */}
        <div className="w-full xl:w-[46%] flex-shrink-0 flex flex-col items-center">

          {/* Map wrapper — custom cursor injected via CSS */}
          <div
            id="map-svg-root"
            className="relative w-full max-w-[640px] map-cursor-zone"
            style={{ filter: 'drop-shadow(0 8px 40px rgba(0,0,0,0.5))' }}
          >
            <MapSVG
              className="w-full h-auto max-h-[62vh]"
              style={{ display: 'block' }}
              onClick={handleClick}
              onHover={setHovered}
              getFill={(id) => divisions[id]?.color ?? '#555'}
              getOpacity={() => 1}
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 500 600"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {Object.entries(labelPositions).map(([id, pos]) => (
                <text
                  key={id}
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    fill: '#ffffff',
                    stroke: 'rgba(0,0,0,0.88)',
                    strokeWidth: 2,
                    paintOrder: 'stroke',
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: 0.2,
                    fontFamily: '"Noto Sans Bengali","Hind Siliguri","Nirmala UI",sans-serif',
                  }}
                >
                  {divisions[id].label}
                </text>
              ))}
            </svg>
          </div>

          {/* Color Legend */}
          <div className="mt-3 flex flex-wrap gap-2 justify-center px-2">
            {divisionList.map((div) => (
              <button
                key={div.svgId}
                onClick={() => handleClick(div.svgId)}
                onMouseEnter={() => setHovered(div.svgId)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-bengali font-medium border transition-all duration-200"
                style={{
                  backgroundColor:
                    hovered === div.svgId || selected === div.svgId
                      ? div.activeColor
                      : div.color,
                  borderColor: selected === div.svgId ? 'white' : 'transparent',
                  transform: hovered === div.svgId ? 'scale(1.1)' : 'scale(1)',
                  boxShadow:
                    hovered === div.svgId || selected === div.svgId
                      ? `0 0 12px ${div.glowColor}88`
                      : 'none',
                }}
              >
                {selected === div.svgId && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                )}
                {div.label}
              </button>
            ))}
          </div>
        </div>

        {/* ====== RIGHT: INFO COLUMN ====== */}
        <div className="w-full xl:w-[54%] xl:sticky xl:top-24">
          <AnimatePresence mode="wait">
            {data ? (
              <motion.div
                key={displayId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.22 }}
                className="bg-card border border-border/50 rounded-2xl p-6 shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-1.5 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: data.activeColor }}
                  />
                  <div>
                    <h3 className="font-bengali text-2xl font-bold text-foreground">
                      {data.label} বিভাগ
                    </h3>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bengali px-2 py-0.5 rounded-full mt-0.5"
                      style={{ backgroundColor: data.color + '33', color: data.activeColor }}
                    >
                      {hovered && hovered === displayId ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                          </svg>
                          হোভার করা হচ্ছে
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          নির্বাচিত
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Dialect Cards */}
                <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                  {data.dialects.map((d, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="rounded-xl p-3 border border-border/30 space-y-1.5"
                      style={{ borderLeftWidth: '3px', borderLeftColor: data.activeColor }}
                    >
                      <p className="font-bengali text-sm font-semibold text-foreground/90">
                        {i + 1}. {d.name}
                      </p>
                      <p className="font-bengali text-xs text-muted-foreground leading-relaxed">
                        <span className="font-medium text-foreground/70">উৎপত্তি: </span>
                        {d.origin}
                      </p>
                      <p
                        className="font-bengali text-xs rounded-lg px-2 py-1.5"
                        style={{ backgroundColor: data.color + '22' }}
                      >
                        <span className="font-semibold" style={{ color: data.activeColor }}>উদাহরণ: </span>
                        {d.example}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {selected && (
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-5 w-full font-bengali text-sm text-muted-foreground hover:text-foreground border border-border/40 hover:border-border rounded-xl py-2 transition-all flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    নির্বাচন বাতিল করুন
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center p-10 bg-card/30 rounded-2xl border border-dashed border-border min-h-[420px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-muted-foreground/40 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
                </svg>
                <h3 className="font-bengali text-xl font-semibold text-foreground/60 mb-2">
                  আঞ্চলিক ভাষার বৈচিত্র্য
                </h3>
                <p className="font-bengali text-muted-foreground text-sm leading-relaxed max-w-xs">
                  মানচিত্রে যেকোনো বিভাগে ক্লিক করুন বা হোভার করুন — সেই অঞ্চলের ভাষার বিস্তারিত এখানে দেখাবে
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {divisionList.map(div => (
                    <span
                      key={div.svgId}
                      className="text-xs font-bengali px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: div.color }}
                    >
                      {div.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hint pill under information section */}
          <div className="mt-4 flex items-center gap-2 bg-card/80 backdrop-blur border border-border/40 px-5 py-2 rounded-full text-sm shadow w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 3l14 9-7 1-4 7L5 3z" />
            </svg>
            <span className="font-bengali text-muted-foreground text-xs">
              বিভাগের উপর মাউস নিয়ে যান বা ক্লিক করুন
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
