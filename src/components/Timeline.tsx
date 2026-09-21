import type { FC } from "react";
import { timeline } from "../data/portfolioData";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin,
  Shield
} from "lucide-react";

export const Timeline: FC = () => {
  return (
    <section id="timeline" className="py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Chronologie & Expériences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Parcours Académique, Opérationnel & Professionnel
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            De la rigueur des classes préparatoires (PCSI / PSI*) à l'ENSEEIHT, complétée par l'aguerrissement au 1er RCP et l'animation scoute.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-5 space-y-8">
          {timeline.map((item) => {
            const isStageSearch = item.id === "stage-2a-search";
            const isEducation = item.type === "education";
            const isEngagement = item.type === "engagement";

            return (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                
                {/* Node icon */}
                <span
                  className={`absolute -left-[17px] top-1 w-8 h-8 rounded flex items-center justify-center border-2 border-white dark:border-slate-950 shadow-sm ${
                    isStageSearch 
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" 
                      : isEducation
                        ? "bg-slate-800 text-white"
                        : isEngagement
                          ? "bg-slate-700 text-white"
                          : "bg-slate-600 text-white"
                  }`}
                >
                  {isEducation ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : isEngagement ? (
                    <Shield className="w-4 h-4" />
                  ) : (
                    <Briefcase className="w-4 h-4" />
                  )}
                </span>

                {/* Card */}
                <div
                  className={`p-5 sm:p-6 rounded border transition-colors ${
                    isStageSearch
                      ? "bg-slate-50 dark:bg-slate-900 border-slate-400 dark:border-slate-600"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                  }`}
                >
                  {/* Period & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                          isStageSearch
                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium mt-1 mb-3">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {item.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {item.location}
                    </span>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description.map((desc, idx) => (
                      <p key={idx} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-1.5 shrink-0" />
                        <span>{desc}</span>
                      </p>
                    ))}
                  </div>

                  {/* Skills tags */}
                  {item.skillsAcquired && (
                    <div className="flex flex-wrap gap-1 pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                      {item.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
