import { useState } from "react";
import type { FC } from "react";
import { usePortfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { 
  Award, 
  CheckCircle2, 
  FolderGit2, 
  ChevronRight
} from "lucide-react";

export const CompetenciesCTI: FC = () => {
  const { ctiCompetencies } = usePortfolioData();
  const { language, t } = useLanguage();
  const [selectedCompCode, setSelectedCompCode] = useState<string>("C1");

  const activeComp = ctiCompetencies.find((c) => c.code === selectedCompCode) || ctiCompetencies[0];

  return (
    <section id="cti" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>{t("ctiBadge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t("ctiTitle")}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {t("ctiSubtitle")}
          </p>
        </div>

        {/* 2-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Competency List */}
          <div className="lg:col-span-5 space-y-2">
            {ctiCompetencies.map((comp) => {
              const isSelected = comp.code === selectedCompCode;
              return (
                <button
                  key={comp.code}
                  type="button"
                  onClick={() => setSelectedCompCode(comp.code)}
                  className={`w-full text-left p-4 rounded border transition-colors flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm"
                      : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected 
                          ? "bg-white text-slate-900 dark:bg-slate-900 dark:text-white" 
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      {comp.code}
                    </span>
                    <div>
                      <div className="font-bold text-sm leading-snug">
                        {comp.title}
                      </div>
                      <div className={`text-[11px] mt-0.5 line-clamp-1 ${isSelected ? "text-slate-300 dark:text-slate-600" : "text-slate-500"}`}>
                        {comp.shortDesc}
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? "text-white dark:text-slate-900" : "text-slate-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Competency Detail Box */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs">
                    {activeComp.code}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {activeComp.title}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                  {language === "en" ? "Validated Year 2" : "Validée 2A"}
                </span>
              </div>

              {/* Requirements Description */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  {language === "en" ? "CTI Framework Scope & Details" : "Détail & Exigences CTI"}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeComp.details}
                </p>
              </div>

              {/* Learning Outcomes */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  {t("ctiLearningOutcomes")}
                </div>
                <ul className="space-y-1.5">
                  {activeComp.learningOutcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Linked Projects Evidence */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>{t("ctiAssociatedProjects")}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeComp.projectsLinked.map((proj) => (
                    <a
                      key={proj.id}
                      href="#projects"
                      className="p-2.5 rounded bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex items-center justify-between text-xs font-medium text-slate-800 dark:text-slate-200"
                    >
                      <span className="truncate">{proj.title}</span>
                      <ChevronRight className="w-3 h-3 text-slate-400 shrink-0 ml-2" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
