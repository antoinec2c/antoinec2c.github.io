import type { FC } from "react";
import { personalInfo } from "../data/portfolioData";
import { 
  GraduationCap, 
  Network, 
  Check, 
  Terminal,
  Users
} from "lucide-react";


export const About: FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>À propos & Formation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ingénierie Réseaux, Systèmes Unix & Management Agile
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Une formation d'excellence à l'ENSEEIHT alliant rigueur scientifique, maîtrise des protocoles et pilotage de projets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Bio & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-850 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                Mon Profil d'Ingénieur
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Après trois années intenses en <strong>Classes Préparatoires aux Grandes Écoles (CPGE PCSI / PSI*)</strong> aux lycées Montesquieu (Le Mans) et Descartes (Tours), j'ai développé une grande rigueur de travail et une forte capacité de modélisation mathématique et physique.
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <div className="mt-1 p-1 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white block">Réseaux & Télécoms</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">TCP/IP, Quagga, RIP/OSPF, Wireshark</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-1 p-1 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white block">Systèmes Unix & C</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Mini-shell POSIX, pipes, fork, Valgrind</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-1 p-1 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white block">Option Managership</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Méthodes agiles (Scrum), leadership</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-1 p-1 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white block">Leadership Opérationnel</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Réserviste 1er RCP & Chef de troupe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* School & Option card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-rose-900/10 via-rose-800/5 to-transparent border border-rose-200/60 dark:border-rose-900/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-600 text-white font-mono font-black flex items-center justify-center text-lg shadow-sm">
                  N7
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    Toulouse INP — ENSEEIHT
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Sciences du Numérique • Spécialisation Réseaux & Télécoms • Option Managership
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 border border-slate-200 dark:border-slate-700 shadow-sm">
                2025 – 2028
              </span>
            </div>

          </div>

          {/* Right: The 3 Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-rose-300 dark:hover:border-rose-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                1. Réseaux & Systèmes Unix
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Plans d'adressage IP hiérarchiques (VLSM/CIDR), routage dynamique (RIP, OSPF) sous Quagga, passerelles NAT, serveurs DNS/Web et analyse approfondie de trames sous Wireshark.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-rose-300 dark:hover:border-rose-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                2. Programmation Système & Algorithmique
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Développement système bas-niveau en C (mini-shell Unix POSIX, processus fork/exec, tubes de communication, zéro fuite mémoire Valgrind), programmation objet en Java/Python et rigueur algorithmique en Ada.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-rose-300 dark:hover:border-rose-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                3. Option Managership & Modélisation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Management de projets agiles (méthodes Scrum), leadership, gestion des risques et logistique d'équipe, complétés par une démarche scientifique de modélisation (TIPE propulsion navale CFD SolidWorks).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
