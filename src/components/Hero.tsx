import type { FC } from "react";
import { personalInfo } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Radio, 
  Network, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  Calendar,
  Lock
} from "lucide-react";

export const Hero: FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-rose-500/15 via-sky-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-rose-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            Toulouse INP — ENSEEIHT
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Recherche de stage technique 2A (Mai - Août)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-sm">
            <Lock className="w-3.5 h-3.5" />
            <span>Orientation Cybersécurité</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            
            {/* Name and headline */}
            <div className="space-y-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono text-sm font-semibold tracking-wide uppercase">
                Bonjour, je suis {personalInfo.name}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Élève-Ingénieur en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-sky-600">
                  Télécommunications
                </span>{" "}
                & Réseaux Informatiques
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              En 2ème année à l'<strong>N7</strong> (Sciences du Numérique - Informatique & Télécoms). 
              Passionné par la <strong>cybersécurité</strong>, l'ingénierie protocolaire, le traitement du signal et les systèmes communicants.
            </p>

            {/* Fast info chips */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-600 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-500" />
                <span>Stage 12-16 semaines dès mai</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 shadow-md shadow-rose-500/25 transition-all hover:shadow-lg hover:shadow-rose-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explorer mes projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cti"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span>Approche CTI (Compétences)</span>
              </a>

              {/* CV Downloads (FR & EN) */}
              <div className="inline-flex rounded-xl shadow-sm">
                <a
                  href={personalInfo.cvFileFR}
                  download
                  className="inline-flex items-center gap-1.5 px-3.5 py-3.5 rounded-l-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
                  title="Télécharger le CV en Français (PDF)"
                >
                  <Download className="w-3.5 h-3.5 text-rose-500" />
                  <span>CV (FR)</span>
                </a>
                <a
                  href={personalInfo.cvFileEN}
                  download
                  className="inline-flex items-center gap-1.5 px-3.5 py-3.5 rounded-r-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-y border-r border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
                  title="Download English Resume (PDF)"
                >
                  <Download className="w-3.5 h-3.5 text-sky-500" />
                  <span>CV (EN)</span>
                </a>
              </div>
            </div>

            {/* Social & Contact icons */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 font-mono">
                Réseaux :
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 transition-colors shadow-sm"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-300 transition-colors shadow-sm"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Envoyer un email"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 transition-colors shadow-sm"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Photo + Interactive Terminal */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Profile Photo Card */}
            <div className="relative rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 p-3 shadow-lg flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 border-rose-500/40 shadow-sm">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.profilePhotoAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Élève-Ingénieur ENSEEIHT
                </p>
                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Disponible stage 2A</span>
                </div>
              </div>
            </div>

            {/* Engineer Terminal */}
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-2xl text-slate-200 font-mono text-xs space-y-3">
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] text-slate-400 font-mono">antoine@n7-telecom:~$</span>
              </div>

              {/* Terminal output */}
              <div className="space-y-2 text-slate-300">
                <div className="flex gap-2">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span className="text-slate-400">whoami</span>
                </div>
                <p className="text-white pl-4 font-semibold">
                  {personalInfo.name} — N7 Informatique & Télécoms (2A)
                </p>

                <div className="flex gap-2 pt-0.5">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span className="text-slate-400">cat /etc/career_goal</span>
                </div>
                <div className="pl-4 space-y-1 text-slate-300">
                  <p className="text-purple-400 flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Ingénierie Cybersécurité & Réseaux
                  </p>
                  <p className="text-sky-400 flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5" /> Télécoms, SDR & Signal
                  </p>
                  <p className="text-amber-400 flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5" /> Protocoles & Systèmes C/Linux
                  </p>
                </div>

                <div className="flex gap-2 pt-0.5">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span className="text-slate-400">stage_status --check</span>
                </div>
                <div className="pl-4 p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300">
                  <span className="font-bold text-white">RECHERCHE :</span> Stage 12 à 16 sem. dès mai.
                </div>
              </div>

              {/* Quick stats grid */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                {personalInfo.stats.map((stat) => (
                  <div key={stat.label} className="p-2 rounded-lg bg-slate-850/60 border border-slate-800">
                    <div className="text-[10px] text-slate-400">{stat.label}</div>
                    <div className="text-xs font-bold text-white">{stat.value}</div>
                    {stat.sublabel && (
                      <div className="text-[10px] text-rose-400">{stat.sublabel}</div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
