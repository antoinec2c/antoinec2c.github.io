import { useState } from "react";
import type { FC } from "react";
import { skillCategories } from "../data/portfolioData";
import { 
  Radio, 
  Network, 
  Terminal, 
  Users, 
  Layers,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export const Skills: FC = () => {
  const [activeTab, setActiveTab] = useState<string>(skillCategories[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Network":
        return <Network className="w-5 h-5 text-sky-500" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-emerald-500" />;
      case "Users":
        return <Users className="w-5 h-5 text-purple-500" />;
      case "Radio":
        return <Radio className="w-5 h-5 text-rose-500" />;
      default:
        return <Layers className="w-5 h-5 text-rose-500" />;
    }
  };

  const getBadgeColor = (level: string) => {
    switch (level) {
      case "Maîtrisé":
        return "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";
      case "Avancé":
        return "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800";
      case "Intermédiaire":
        return "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800";
      default:
        return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";
    }
  };

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Matrice de Compétences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Compétences Techniques & Méthodologiques
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Un profil d'ingénieur équilibré alliant protocoles réseaux, programmation système bas-niveau et management agile de projets.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {skillCategories.map((cat) => {
            const isSelected = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md shadow-slate-900/10 scale-102"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 dark:bg-slate-850 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {getIcon(cat.iconName)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid for Selected Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getBadgeColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mb-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-rose-600 to-sky-600 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.progress}%` }}
                />
              </div>

              {skill.description && (
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Fast Tech Tags Bar from New CV */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Technologies & Méthodes maîtrisées :</span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {["TCP/IP", "Quagga (RIP/OSPF)", "Linux Unix POSIX", "Wireshark", "Langage C", "Python", "Java", "Ada", "SQL", "Matlab", "Docker", "Git", "Scrum Agilité", "SolidWorks CFD"].map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
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
