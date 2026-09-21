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
    <section id="engagement" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Engagements, Valeurs & Mobilité</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Esprit d'Équipe, Rusticité & Responsabilités
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Un profil d'ingénieur ancré dans l'action de terrain : service opérationnel militaire (1er RCP), encadrement de jeunes dans le scoutisme et gestion budgétaire.
          </p>
        </div>

        {/* Video Pitch & Quick Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Video Elevator Pitch */}
          <div className="lg:col-span-7 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-sm">
                <Play className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>Elevator Pitch Vidéo</span>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                Présentation synthétique
              </span>
            </div>

            <div className="relative w-full aspect-video rounded overflow-hidden bg-slate-950">
              <iframe
                className="w-full h-full"
                src={personalInfo.videoPitchUrl}
                title="Elevator Pitch - Antoine Chaptal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Languages & Certifications Boxes */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>Brevets & Certifications</span>
              </div>
              <div className="space-y-2">
                {personalInfo.certifications.map((cert) => (
                  <div 
                    key={cert}
                    className="p-2.5 rounded bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-between"
                  >
                    <span>{cert}</span>
                    <span className="text-slate-400 text-[10px]">Validé</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-xs uppercase tracking-wider">
                <Languages className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>Langues & Mobilité</span>
              </div>
              <div className="space-y-2">
                {personalInfo.languages.map((lang) => (
                  <div 
                    key={lang.name}
                    className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.name}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Engagements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagements.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
            >
              {/* Photo */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-white border border-white/10">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono">
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
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Sports & Centres d'intérêt */}
        <div className="mt-10 p-5 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-slate-700 dark:text-slate-300 shrink-0" />
            <div>
              <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                Centres d'intérêt & Pratiques
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Endurance, discipline et équilibre personnel.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {["Trompette & Harmonica", "Course à pied", "Cyclisme sur route", "Jardinage"].map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
