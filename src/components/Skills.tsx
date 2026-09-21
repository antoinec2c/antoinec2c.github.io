import { useState } from "react";
import type { FC } from "react";
import { usePortfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { 
  Radio, 
  Network, 
  Terminal, 
  Users, 
  Layers,
  Sparkles,
  Check
} from "lucide-react";

export const Skills: FC = () => {
  const { skillCategories } = usePortfolioData();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>(skillCategories[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Network":
        return <Network className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case "Terminal":
        return <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case "Users":
        return <Users className="w-4 h-4 text-slate-700 dark:text-slate-300" />;
      case "Radio":
        return <Radio className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Layers className="w-4 h-4 text-slate-700 dark:text-slate-300" />;
    }
  };

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("skillsBadge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t("skillsTitle")}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {t("skillsSubtitle")}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat) => {
            const isSelected = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs transition-colors ${
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm font-semibold"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {getIcon(cat.iconName)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Executive Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-slate-900 dark:bg-slate-200 shrink-0" />
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>

              {skill.description && (
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                  {skill.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Tech Ecosystem Bar */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 shrink-0">
            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t("skillsTechBarTitle")}</span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {(t("skillsTechBarTitle").includes("Arsenal") || t("skillsTechBarTitle").includes("Stack")
              ? ["TCP/IP", "Quagga (RIP/OSPF)", "Linux / POSIX", "Wireshark", "C Language", "Python", "Java", "Ada", "SQL", "Matlab", "Docker", "Git", "Agile Scrum", "SolidWorks CFD"]
              : ["TCP/IP", "Quagga (RIP/OSPF)", "Linux Unix POSIX", "Wireshark", "Langage C", "Python", "Java", "Ada", "SQL", "Matlab", "Docker", "Git", "Scrum Agilité", "SolidWorks CFD"]
            ).map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-normal bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
