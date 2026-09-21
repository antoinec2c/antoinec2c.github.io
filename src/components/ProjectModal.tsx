import { useEffect, useRef } from "react";
import type { FC, MouseEvent } from "react";
import type { Project } from "../data/portfolioData";
import { GithubIcon } from "./Icons";
import { 
  X, 
  CheckCircle2, 
  Award,
  Layers,
  FileText
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
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      onClick={handleBackdropClick}
      className="backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm p-0 rounded border border-slate-300 dark:border-slate-700 shadow-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 max-w-3xl w-full mx-auto my-auto overflow-hidden"
    >
      <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {project.context}
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="p-1.5 rounded border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Problématique & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-1.5">
            <div className="font-semibold text-xs text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Problématique Ingénieur</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.problematique}
            </p>
          </div>

          <div className="p-4 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-1.5">
            <div className="font-semibold text-xs text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Solution & Approche</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-2">
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Description détaillée
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Points clés & Réalisations
          </h4>
          <ul className="space-y-1.5">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Indicators */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="p-3.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
            <h4 className="font-semibold text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Indicateurs & Métriques
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{metric.value}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Competencies Validated */}
        <div className="space-y-1.5">
          <h4 className="font-semibold text-[11px] text-slate-500 uppercase tracking-wider">
            Compétences CTI mobilisées
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.competencies.map((comp, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                <Award className="w-3.5 h-3.5" />
                <span>{comp}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Technologies tags */}
        <div className="space-y-1.5">
          <h4 className="font-semibold text-[11px] text-slate-500 uppercase tracking-wider">
            Technologies & Outils
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            {project.date}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>

      </div>
    </dialog>
  );
};
