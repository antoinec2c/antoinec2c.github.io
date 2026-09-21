import type { FC } from "react";
import { usePortfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { 
  Download, 
  Mail, 
  MapPin, 
  ArrowRight,
  Shield
} from "lucide-react";

export const Hero: FC = () => {
  const { personalInfo } = usePortfolioData();
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Executive Summary & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Identity Meta & Status Badge */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white" />
                  {t("heroSchoolBadge")}
                </span>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/70 dark:bg-emerald-950/40 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                  {t("heroAvailabilityBadge")}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Antoine Chaptal
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 leading-snug">
                {t("heroRole")}
              </p>
            </div>

            {/* Executive Bio */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {t("heroBio")}
            </p>

            {/* Executive 4-KPI Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <div className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t("heroStat1Val")}
                </div>
                <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                  {t("heroStat1Label")}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {t("heroStat1Sub")}
                </div>
              </div>

              <div className="p-3.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <div className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t("heroStat2Val")}
                </div>
                <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                  {t("heroStat2Label")}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {t("heroStat2Sub")}
                </div>
              </div>

              <div className="p-3.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <div className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t("heroStat3Val")}
                </div>
                <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                  {t("heroStat3Label")}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {t("heroStat3Sub")}
                </div>
              </div>

              <div className="p-3.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <div className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t("heroStat4Val")}
                </div>
                <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                  {t("heroStat4Label")}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {t("heroStat4Sub")}
                </div>
              </div>
            </div>

            {/* Location & Military Service Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{t("heroReservistBadge")}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={personalInfo.cvFileEN}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>{t("heroCvEn")}</span>
              </a>

              <a
                href={personalInfo.cvFileFR}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t("heroCvFr")}</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>{t("heroViewProjects")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Executive Profile Card & Key Credentials */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Executive Portrait Card */}
            <div className="rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-sm">
              <div className="aspect-[4/5] w-full overflow-hidden rounded bg-slate-100 dark:bg-slate-800 relative">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.profilePhotoAlt}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-sm border border-white/10">
                    {t("heroProfileCardBadge")}
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Overview Desk */}
            <div className="rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 space-y-3 text-xs">
              <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>{language === "en" ? "Executive Summary" : "Synthèse Exécutive"}</span>
                <span className="text-[10px] font-mono text-slate-500">2025–2028</span>
              </div>

              <div className="space-y-2 text-slate-700 dark:text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Institution:" : "École :"}
                  </span>
                  <span className="font-semibold text-right">Toulouse INP (N7)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Engineering Major:" : "Spécialisation :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "Networks & Telecoms" : "Réseaux & Télécoms"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Management Track:" : "Option Diplômante :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "Agile Managership (Scrum)" : "Option Managership (Scrum)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Academic Prepa:" : "Classes Prépa :"}
                  </span>
                  <span className="font-semibold text-right">CPGE PCSI / PSI* (3 yrs)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Operational Service:" : "Service Militaire :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "1st RCP Airborne (PMS)" : "Réserviste 1er RCP (PMS)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Field Leadership:" : "Leadership Terrain :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "Scout Troop Leader" : "Chef de Troupe Scout"}
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
