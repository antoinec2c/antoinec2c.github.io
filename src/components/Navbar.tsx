import { useState, useEffect } from "react";
import type { FC } from "react";
import { personalInfo } from "../data/portfolioData";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download 
} from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: FC<NavbarProps> = ({ activeSection }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Approche CTI", href: "#cti" },
    { name: "Engagements", href: "#engagement" },
    { name: "Parcours", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 py-3 shadow-sm" 
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-850 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 focus:outline-none"
        >
          <div className="w-8 h-8 rounded bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-xs tracking-wider">
            N7
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white uppercase">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Réseaux, Systèmes & Télécoms
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  isActive
                    ? "text-slate-900 dark:text-white font-semibold bg-slate-100 dark:bg-slate-800"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-850"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (CV & Theme) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Activer mode clair" : "Activer mode sombre"}
            className="p-2 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          <a
            href={personalInfo.cvFile}
            download
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Télécharger CV</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="p-2 rounded text-slate-700 dark:text-slate-300"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <a
              href={personalInfo.cvFile}
              download
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
