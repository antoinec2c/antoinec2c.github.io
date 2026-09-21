import type { FC } from "react";
import { timeline } from "../data/portfolioData";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin
} from "lucide-react";

export const Timeline: FC = () => {
  return (
    <section id="timeline" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Parcours & Expériences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Formation Académique & Expériences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            De la rigueur des classes préparatoires aux bancs de l'ENSEEIHT, un parcours tourné vers l'ingénierie et l'innovation.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-10">
          {timeline.map((item) => {
            const isStageSearch = item.id === "stage-2a-search";
            const isEducation = item.type === "education";

            return (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline node icon */}
                <span
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-sm transition-transform group-hover:scale-110 ${
                    isStageSearch 
                      ? "bg-rose-600 text-white ring-4 ring-rose-500/20" 
                      : isEducation
                        ? "bg-sky-600 text-white"
                        : "bg-slate-700 text-white"
                  }`}
                >
                  {isEducation ? (
                    <GraduationCap className="w-3.5 h-3.5" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5" />
                  )}
                </span>

                {/* Card */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                    isStageSearch
                      ? "bg-gradient-to-br from-rose-500/5 via-white to-sky-500/5 dark:from-rose-950/30 dark:via-slate-850 dark:to-sky-950/20 border-rose-300 dark:border-rose-900/60 shadow-md shadow-rose-500/5 ring-1 ring-rose-500/20"
                      : "bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold font-mono text-rose-600 dark:text-rose-400">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                          isStageSearch
                            ? "bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800 animate-pulse"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 mb-4">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {item.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description.map((desc, idx) => (
                      <p key={idx} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                        <span>{desc}</span>
                      </p>
                    ))}
                  </div>

                  {/* Acquired Skills */}
                  {item.skillsAcquired && (
                    <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                      {item.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
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
