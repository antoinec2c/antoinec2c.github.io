import type { FC } from "react";
import { usePortfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { 
  Download, 
  Mail, 
  MapPin, 
  Briefcase,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Profile, Info, CTAs */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Identity Meta */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white" />
                <span>{t("heroSchoolBadge")}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Antoine Chaptal
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {personalInfo.role}
              </p>
            </div>

            {/* Stage Search Banner */}
            <div className="p-4 rounded border-l-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-slate-900 text-sm space-y-1">
              <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>{t("heroBannerTitle")}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                {language === "en" ? (
                  <>Duration: <strong>3 months starting June 2027</strong> • Location: Nationwide (France) or Worldwide • Ready for Toulouse INP convention</>
                ) : (
                  <>Durée : <strong>3 mois à partir de juin 2027</strong> • Localisation : France entière ou International • Convention Toulouse INP</>
                )}
              </p>
            </div>

            {/* Executive Bio */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Practical details (Location, Permis, Contact) */}
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
            <div className="flex flex-wrap items-center gap-3 pt-3">
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
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Photo & Key Facts Box */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Professional Portrait */}
            <div className="rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-sm">
              <div className="aspect-[4/5] w-full overflow-hidden rounded bg-slate-100 dark:bg-slate-800">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.profilePhotoAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Structured Facts Box */}
            <div className="rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 space-y-3 text-xs">
              <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] pb-2 border-b border-slate-200 dark:border-slate-800">
                {language === "en" ? "Key Profile Highlights" : "Points Clés du Profil"}
              </div>

              <div className="space-y-2 text-slate-700 dark:text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "School:" : "Formation :"}
                  </span>
                  <span className="font-semibold text-right">ENSEEIHT (N7)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Major:" : "Filière :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "Networks & Telecoms" : "Réseaux & Télécoms"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Preparatory:" : "Cursus préalable :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "CPGE PCSI / PSI* (3 yrs)" : "CPGE PCSI / PSI* (3 ans)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Management:" : "Management :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "Agile Managership (Scrum)" : "Option Managership (Scrum)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Military:" : "Militaire :"}
                  </span>
                  <span className="font-semibold text-right">
                    {language === "en" ? "1st RCP Reservist (PMS)" : "Réserviste 1er RCP (PMS)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {language === "en" ? "Leadership:" : "Associatif :"}
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
