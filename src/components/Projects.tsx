import { useState } from "react";
import type { FC } from "react";
import { usePortfolioData } from "../data/portfolioData";
import type { Project } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { ProjectModal } from "./ProjectModal";
import { GithubIcon } from "./Icons";
import { 
  ArrowUpRight, 
  Layers
} from "lucide-react";

export const Projects: FC = () => {
  const { projects } = usePortfolioData();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: t("projectsFilterAll") },
    { id: "reseau", label: t("projectsFilterReseau") },
    { id: "systeme", label: t("projectsFilterSysteme") },
    { id: "tipe", label: t("projectsFilterTipe") },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{t("projectsBadge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t("projectsTitle")}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {t("projectsSubtitle")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm font-semibold"
                    : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-850 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-750"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors group"
            >
              <div className="p-6 space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800 text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {project.categoryLabel}
                  </span>
                  <span className="text-slate-400">
                    {project.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Metrics / Highlights Strip */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 text-center">
                    {project.metrics.slice(0, 3).map((metric, mIdx) => (
                      <div key={mIdx} className="overflow-hidden">
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate font-normal">
                          {metric.label}
                        </div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate mt-0.5">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 px-6 bg-slate-50/50 dark:bg-slate-850/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white hover:underline"
                >
                  <span>{t("projectsViewDetails")}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repo for ${project.title}`}
                    className="p-1 rounded text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
