import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  // Default to dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { label: "হোম", href: "#" },
    { label: "ইতিহাস", href: "#history" },
    { label: "শহীদ", href: "#martyrs" },
    { label: "সংস্কৃতি", href: "#culture" },
    { label: "ভাষা", href: "#language-diversity" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/90 backdrop-blur-xl shadow-soft border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            onClick={(e) => handleNav(e, "#")}
            className="flex items-center gap-3"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden ${scrolled ? "bg-primary shadow-sm" : "bg-foreground/10 backdrop-blur-sm"
                }`}
            >
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span
              className={`font-bengali font-bold text-xl hidden sm:block transition-colors ${scrolled ? "text-foreground" : "text-foreground"
                }`}
            >
              মাতৃভাষা দিবস
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="font-bengali font-medium transition-colors text-foreground/70 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDark}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-muted text-foreground hover:bg-accent/20 hover:text-accent"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.a
              href="#pledge"
              onClick={(e) => handleNav(e, "#pledge")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full font-bengali font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-sm"
            >
              শপথ নিন
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
