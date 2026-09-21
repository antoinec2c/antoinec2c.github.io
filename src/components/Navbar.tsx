import { useState, useEffect } from "react";
import type { FC } from "react";
import { usePortfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download,
  Languages
} from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: FC<NavbarProps> = ({ activeSection }) => {
  const { personalInfo } = usePortfolioData();
  const { language, toggleLanguage, t } = useLanguage();

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
    { name: t("navHome"), href: "#hero" },
    { name: t("navAbout"), href: "#about" },
    { name: t("navSkills"), href: "#skills" },
    { name: t("navProjects"), href: "#projects" },
    { name: t("navCti"), href: "#cti" },
    { name: t("navEngagement"), href: "#engagement" },
    { name: t("navTimeline"), href: "#timeline" },
    { name: t("navContact"), href: "#contact" },
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
              {language === "en" ? "Networks, Systems & Telecoms" : "Réseaux, Systèmes & Télécoms"}
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
                className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors ${
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

        {/* Actions (Language Switcher, Theme & CV) */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Language Toggle Button */}
          <button
            type="button"
            onClick={toggleLanguage}
            title={language === "en" ? "Passer en Français" : "Switch to English"}
            aria-label="Changer de langue / Switch language"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <Languages className="w-3.5 h-3.5 text-slate-500" />
            <span className={language === "en" ? "text-slate-900 dark:text-white font-extrabold" : "text-slate-400 font-normal"}>EN</span>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span className={language === "fr" ? "text-slate-900 dark:text-white font-extrabold" : "text-slate-400 font-normal"}>FR</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Activer mode clair" : "Activer mode sombre"}
            className="p-2 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* CV Download Button */}
          <a
            href={personalInfo.cvFile}
            download
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t("navDownloadCv")}</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200"
          >
            {language === "en" ? "FR" : "EN"}
          </button>

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
              <span>{t("navDownloadCv")} (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
