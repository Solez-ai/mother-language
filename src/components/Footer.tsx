const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bengali font-bold text-xl text-foreground">আন্তর্জাতিক মাতৃভাষা দিবস</h3>
              <p className="text-foreground/60 text-sm">International Mother Language Day</p>
            </div>
          </div>
          <p className="font-bengali text-foreground/70">
            প্রতি বছর ২১শে ফেব্রুয়ারি বিশ্বব্যাপী পালিত হয় আন্তর্জাতিক মাতৃভাষা দিবস।
            ১৯৫২ সালের ভাষা শহীদদের স্মরণে এই দিনটি উদযাপিত হয়।
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="text-foreground/50 text-sm font-bengali mb-4">Made by</p>
              <p className="text-foreground font-bold text-lg mb-2">Samin Yeasar</p>

              <div className="flex flex-col gap-2">
                <a
                  href="https://x.com/Solez_None"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  X (twitter) - https://x.com/Solez_None
                </a>
                <a
                  href="https://github.com/Solez-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Github - https://github.com/Solez-ai
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center opacity-[0.04]">
          <p className="font-bengali text-6xl tracking-widest text-foreground">
            ক খ গ ঘ ঙ চ ছ জ ঝ ঞ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;