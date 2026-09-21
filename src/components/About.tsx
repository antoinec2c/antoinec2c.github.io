import type { FC } from "react";
import { personalInfo } from "../data/portfolioData";
import { 
  GraduationCap, 
  Layers, 
  Radio, 
  Check, 
  Terminal
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
            Au cœur des Télécommunications et des Réseaux du futur
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Une formation d'excellence à l'ENSEEIHT alliant rigueur scientifique, maîtrise des protocoles et ingénierie logicielle.
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
                Après deux années intensives en <strong>Classes Préparatoires aux Grandes Écoles (CPGE)</strong> où j'ai développé une solide rigueur mathématique et une forte capacité d'abstraction, j'ai choisi d'intégrer l'<strong>ENSEEIHT</strong> pour me consacrer aux technologies qui connectent le monde.
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <div className="mt-1 p-1 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white block">Double compétence</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Traitement du signal / RF & Réseaux IP</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-1 p-1 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white block">Esprit expérimental</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Pratique intensive en TP & bancs d'essais</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-1 p-1 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white block">Programmation système</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">C bas-niveau, Sockets, POSIX & Python</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-1 p-1 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white block">Méthode d'ingénieur CTI</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Gestion de projet agile & réflexivité</span>
                  </div>
                </div>
              </div>
            </div>

            {/* School identity card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-rose-900/10 via-rose-800/5 to-transparent border border-rose-200/60 dark:border-rose-900/40 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-600 text-white font-mono font-black flex items-center justify-center text-lg shadow-sm">
                N7
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  ENSEEIHT — Toulouse INP
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Filière Sciences du Numérique | Informatique & Télécommunications (SN-IT)
                </p>
              </div>
            </div>

          </div>

          {/* Right: The 3 Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-rose-300 dark:hover:border-rose-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                1. Télécoms, Signal & Radio Logicielle
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                De la modulation en bande de base aux canaux sélectifs en fréquence : modélisation de modulations numériques (QPSK, QAM), filtrage adapté RRC, traitement numérique du signal et expérimentations SDR (GNU Radio, RTL-SDR).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-rose-300 dark:hover:border-rose-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                2. Architectures Réseaux & Protocoles IP
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Conception et sécurisation d'infrastructures : routage dynamique OSPF, segmentation VLAN, redondance EtherChannel/STP, analyse fine de trames avec Wireshark et politiques de filtrage (ACLs, NAT).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-rose-300 dark:hover:border-rose-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                3. Développement Système & IoT
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Programmation bas-niveau en C (sockets POSIX, multithreading, synchronisation thread-safe), scripts réseau en Python (Scapy), et transmission de données de capteurs sur réseaux basse consommation LoRaWAN.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
