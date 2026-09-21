import type { FC } from "react";
import { usePortfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { ArrowUp } from "lucide-react";

export const Footer: FC = () => {
  const { personalInfo } = usePortfolioData();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-white font-bold tracking-wider flex items-center justify-center text-sm shadow-sm">
              N7
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-400">
                {t("footerSubtitle")}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#hero" className="hover:text-white transition-colors">{t("navHome")}</a>
            <a href="#about" className="hover:text-white transition-colors">{t("navAbout")}</a>
            <a href="#skills" className="hover:text-white transition-colors">{t("navSkills")}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t("navProjects")}</a>
            <a href="#cti" className="hover:text-white transition-colors">{t("navCti")}</a>
            <a href="#engagement" className="hover:text-white transition-colors">{t("navEngagement")}</a>
            <a href="#timeline" className="hover:text-white transition-colors">{t("navTimeline")}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t("navContact")}</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-medium"
          >
            <span>{t("footerBackToTop")}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name} • Toulouse INP - ENSEEIHT
          </p>
          <div className="flex items-center gap-2">
            <span>{t("footerCopyrightNote")}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
