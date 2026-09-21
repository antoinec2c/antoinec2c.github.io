import { useState } from "react";
import type { FC } from "react";
import { ctiCompetencies } from "../data/portfolioData";
import { 
  Award, 
  CheckCircle2, 
  FolderGit2, 
  ChevronRight
} from "lucide-react";

export const CompetenciesCTI: FC = () => {
  const [selectedCompCode, setSelectedCompCode] = useState<string>("C1");

  const activeComp = ctiCompetencies.find((c) => c.code === selectedCompCode) || ctiCompetencies[0];

  return (
    <section id="cti" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Référentiel Académique ENSEEIHT / CTI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Approche Par Compétences (APC)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Conformément aux exigences de la Commission des Titres d'Ingénieur (CTI), voici la matrice réflexive démontrant l'acquisition des 5 macro-compétences du titre d'ingénieur.
          </p>
        </div>

        {/* 2-Column Interactive Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Competency Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {ctiCompetencies.map((comp) => {
              const isSelected = comp.code === selectedCompCode;
              return (
                <button
                  key={comp.code}
                  type="button"
                  onClick={() => setSelectedCompCode(comp.code)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all border flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                    isSelected
                      ? "bg-slate-900 text-white dark:bg-slate-850 dark:border-rose-500/80 shadow-md shadow-slate-900/10 scale-101"
                      : "bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black font-mono text-sm shrink-0 shadow-sm ${
                        isSelected 
                          ? "bg-rose-600 text-white" 
                          : "bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 border border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      {comp.code}
                    </span>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base leading-snug">
                        {comp.title}
                      </h3>
                      <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>
                        {comp.shortDesc}
                      </p>
                    </div>
                  </div>
                  
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "translate-x-1 text-rose-400" : "text-slate-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Competency Deep-Dive Box */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              {/* Box Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-lg bg-rose-600 text-white font-mono font-black text-sm">
                    {activeComp.code}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {activeComp.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Compétence Validée 2A
                </span>
              </div>

              {/* Competency Explanation */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                  Détail & Exigences Académiques
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeComp.details}
                </p>
              </div>

              {/* Learning Outcomes Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                  Acquis d'Apprentissage Clés (Learning Outcomes)
                </h4>
                <ul className="space-y-2.5">
                  {activeComp.learningOutcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Linked Projects Evidence */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
                  <FolderGit2 className="w-4 h-4 text-rose-500" />
                  <span>Preuves & Projets de référence associés</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeComp.projectsLinked.map((proj) => (
                    <a
                      key={proj.id}
                      href="#projects"
                      className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-rose-400 dark:hover:border-rose-500 transition-colors flex items-center justify-between group"
                    >
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors line-clamp-1">
                        {proj.title}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
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
