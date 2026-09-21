import { useEffect, useRef } from "react";
import type { FC, MouseEvent } from "react";
import type { Project } from "../data/portfolioData";
import { GithubIcon } from "./Icons";
import { 
  X, 
  CheckCircle2, 
  Award,
  AlertCircle,
  Lightbulb
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) {
        dialog.showModal();
        document.body.style.overflow = "hidden";
      }
    } else {
      if (dialog.open) {
        dialog.close();
        document.body.style.overflow = "";
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    // Light dismiss: clicking on backdrop closes the dialog
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      onClick={handleBackdropClick}
      className="backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm p-0 rounded-2xl shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 max-w-3xl w-full mx-auto my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200"
    >
      <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {project.context}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la boîte de dialogue"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Problematique & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Problématique Ingénieur</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problematique}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-900/40 space-y-2">
            <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Solution & Approche</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
            Description détaillée
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
            Points clés & Réalisations
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              Indicateurs & Résultats
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{metric.value}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Competencies Validated */}
        <div className="space-y-2">
          <h4 className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Compétences CTI ENSEEIHT mobilisées
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.competencies.map((comp, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900"
              >
                <Award className="w-3.5 h-3.5" />
                <span>{comp}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Technologies tags */}
        <div className="space-y-2">
          <h4 className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Stack & Technologies
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {project.date}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Voir sur GitHub</span>
              </a>
            )}
            
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>

      </div>
    </dialog>
  );
};
