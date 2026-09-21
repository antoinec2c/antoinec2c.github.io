import type { FC } from "react";
import { usePortfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { 
  GraduationCap, 
  Network, 
  Check, 
  Terminal,
  Users
} from "lucide-react";

export const About: FC = () => {
  const { personalInfo } = usePortfolioData();
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t("aboutBadge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t("aboutTitle")}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {t("aboutSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Bio & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded bg-slate-900 dark:bg-white" />
                {t("aboutProfileTitle")}
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t("aboutCpgePraise")}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 p-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white block">
                      {language === "en" ? "Networks & Telecoms" : "Réseaux & Télécoms"}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">TCP/IP, Quagga, RIP/OSPF, Wireshark</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 p-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white block">
                      {language === "en" ? "Unix Systems & C" : "Systèmes Unix & C"}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Mini-shell POSIX, pipes, fork, Valgrind</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 p-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white block">
                      {language === "en" ? "Agile Managership" : "Option Managership"}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {language === "en" ? "Agile delivery (Scrum), leadership" : "Méthodes agiles (Scrum), leadership"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 p-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white block">
                      {language === "en" ? "Field Leadership" : "Leadership Opérationnel"}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {language === "en" ? "1st RCP Reservist & Troop Leader" : "Réserviste 1er RCP & Chef de troupe"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* School & Option card */}
            <div className="p-5 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded bg-slate-900 dark:bg-slate-800 border border-slate-700 text-white font-mono font-bold flex items-center justify-center text-base shadow-sm">
                  N7
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    Toulouse INP — ENSEEIHT
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {language === "en" 
                      ? "Digital Sciences • Networks & Telecommunications Major • Agile Managership Track"
                      : "Sciences du Numérique • Spécialisation Réseaux & Télécoms • Option Managership"}
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex px-2.5 py-1 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                2025 – 2028
              </span>
            </div>

          </div>

          {/* Right: The 3 Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <div className="w-9 h-9 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-3">
                <Network className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">
                {t("aboutPillar1Title")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t("aboutPillar1Desc")}
              </p>
            </div>

            <div className="p-6 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <div className="w-9 h-9 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-3">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">
                {t("aboutPillar2Title")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t("aboutPillar2Desc")}
              </p>
            </div>

            <div className="p-6 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <div className="w-9 h-9 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">
                {t("aboutPillar3Title")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t("aboutPillar3Desc")}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
