import { useState } from "react";
import type { FC } from "react";
import { projects } from "../data/portfolioData";
import type { Project } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import { GithubIcon } from "./Icons";
import { 
  ArrowUpRight, 
  Layers
} from "lucide-react";

export const Projects: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "reseau", label: "Infrastructures Réseaux (Quagga)" },
    { id: "systeme", label: "Systèmes Unix & C" },
    { id: "tipe", label: "Recherche & TIPE (CFD)" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "reseau":
        return "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-900";
      case "systeme":
        return "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900";
      case "tipe":
        return "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900";
      case "telecom":
        return "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-900";
      default:
        return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";
    }
  };


  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Showcase Technique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projets Réalisés & Travaux d'Ingénierie
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Une sélection de réalisations concrètes : bancs d'essais télécoms, architectures réseaux virtualisées et logiciels système en C/Linux.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/20 font-semibold"
                    : "bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-rose-300 dark:hover:border-rose-800 transition-all group overflow-hidden"
            >
              <div className="p-6 space-y-4">
                
                {/* Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(project.category)}`}>
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {project.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                    {project.context}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech tags preview */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 px-6 bg-slate-50/80 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Fiche détaillée</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Code source sur GitHub de ${project.title}`}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Detailed Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
