import type { FC } from "react";
import { usePortfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { 
  Download, 
  Mail, 
  MapPin, 
  ArrowRight,
  Shield,
  Sparkles
} from "lucide-react";

export const Hero: FC = () => {
  const { personalInfo } = usePortfolioData();
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Executive Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Identity & Status */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-slate-900 dark:bg-slate-100" />
                  {t("heroSchoolBadge")}
                </span>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-xs font-semibold text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {t("heroAvailabilityBadge")}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Antoine Chaptal
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 leading-snug">
                {t("heroRole")}
              </p>
            </div>

            {/* Narrative Bio */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t("heroBio")}
            </p>

            {/* 4 Clean Editorial Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60">
                <div className="text-lg font-bold text-slate-900 dark:text-white">
                  {t("heroStat1Val")}
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {t("heroStat1Label")}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {t("heroStat1Sub")}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60">
                <div className="text-lg font-bold text-slate-900 dark:text-white">
                  {t("heroStat2Val")}
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {t("heroStat2Label")}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {t("heroStat2Sub")}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60">
                <div className="text-lg font-bold text-slate-900 dark:text-white">
                  {t("heroStat3Val")}
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {t("heroStat3Label")}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {t("heroStat3Sub")}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60">
                <div className="text-lg font-bold text-slate-900 dark:text-white">
                  {t("heroStat4Val")}
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {t("heroStat4Label")}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {t("heroStat4Sub")}
                </div>
              </div>
            </div>

            {/* Location & Military Service Meta */}
            <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{t("heroReservistBadge")}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={personalInfo.cvFileEN}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>{t("heroCvEn")}</span>
              </a>

              <a
                href={personalInfo.cvFileFR}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-850 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t("heroCvFr")}</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>{t("heroViewProjects")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Contact Links */}
            <div className="flex items-center gap-4 pt-1 text-xs text-slate-600 dark:text-slate-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </a>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Natural Portrait & Institutional Overview */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Elegant Portrait */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-md">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.profilePhotoAlt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-3 pt-4 text-center">
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Antoine Chaptal
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Toulouse INP — ENSEEIHT (Promotion 2025–2028)
                </div>
              </div>
            </div>

            {/* Quick Profile Summary */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-5 space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] pb-2 border-b border-slate-200 dark:border-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                <span>{language === "en" ? "Executive Summary" : "Synthèse Exécutive"}</span>
              </div>

              <div className="space-y-2.5 text-slate-700 dark:text-slate-300">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Engineering Degree:" : "Diplôme d'Ingénieur :"}
                  </span>
                  <span className="font-semibold text-right">ENSEEIHT (Toulouse INP)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Specialization:" : "Spécialisation :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "Networks & Telecoms" : "Réseaux & Télécoms"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Management Track:" : "Option Diplômante :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "Agile Managership (Scrum)" : "Option Managership (Scrum)"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Scientific Prepa:" : "Classes Préparatoires :"}
                  </span>
                  <span className="font-semibold text-right">CPGE PCSI / PSI* (3 ans)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Military Service:" : "Service Militaire :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "1st RCP Airborne Reservist" : "Réserviste 1er RCP (PMS)"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Field Leadership:" : "Leadership Terrain :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "Scout Troop Leader (12 youths)" : "Chef de Troupe Scout (12 jeunes)"}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
