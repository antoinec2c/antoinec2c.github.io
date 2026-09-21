import type { FC } from "react";
import { engagements, personalInfo } from "../data/portfolioData";
import { 
  HeartHandshake, 
  Award, 
  Play, 
  Languages,
  Activity
} from "lucide-react";

export const Engagement: FC = () => {
  return (
    <section id="engagement" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Engagements, Valeurs & Mobilité</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Au-delà de la Technique : L'Esprit de Service & d'Ouverture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Un parcours façonné par la réserve militaire, le scoutisme, l'engagement citoyen et une ouverture internationale précoce.
          </p>
        </div>

        {/* Video Pitch & International Profile Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Video Elevator Pitch */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Elevator Pitch Vidéo
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Présentation synthétique
              </span>
            </div>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-md">
              <iframe
                className="w-full h-full"
                src={personalInfo.videoPitchUrl}
                title="Elevator Pitch - Antoine Chaptal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Quick Certifications & Languages Card */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
                <Award className="w-4 h-4" />
                <span>Brevets & Certifications</span>
              </div>
              <div className="space-y-2">
                {personalInfo.certifications.map((cert) => (
                  <div 
                    key={cert}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
                <Languages className="w-4 h-4" />
                <span>Langues & Ouverture Internationale</span>
              </div>
              <div className="space-y-2">
                {personalInfo.languages.map((lang) => (
                  <div 
                    key={lang.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs"
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.name}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Engagement Grid Cards with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagements.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden group hover:border-rose-300 dark:hover:border-rose-800 transition-all hover:shadow-md"
            >
              {/* Image with fallback */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm border border-white/20">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-3">
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-rose-600 dark:text-rose-400 font-mono">
                    {item.role}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Sports and Hobbies Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Sports & Équilibre de Vie
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Endurance, discipline et passion du travail bien fait.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {["Course à pied", "Cyclisme", "Canoë-Kayak", "Jardinage & Nature", "Trompette & Cor d'harmonie", "Pâtisserie"].map((hobby) => (
              <span
                key={hobby}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
