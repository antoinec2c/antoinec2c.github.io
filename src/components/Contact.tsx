import { useState } from "react";
import type { FC, FormEvent } from "react";
import { personalInfo } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Send, 
  Check, 
  Copy, 
  CheckCheck
} from "lucide-react";

export const Contact: FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || "Contact depuis E-Portfolio"
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Me Contacter & Opportunités</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Échanger sur un Projet ou une Proposition de Stage
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            À la recherche d'un stage technique de 3 mois à partir de juin 2027 (infrastructures réseaux, systèmes Unix, télécommunications ou gestion de projet). N'hésitez pas à me contacter directement.
          </p>
        </div>

        {/* Recruiter Quick Banner */}
        <div className="mb-10 p-6 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Espace Recruteurs & Partenaires Industriels
            </span>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Stage Élève-Ingénieur 2A — ENSEEIHT (Toulouse INP)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Période : <strong>Juin - Août 2027 (12 à 16 semaines)</strong> • Convention Toulouse INP prête • Mobilité France & International (Permis B).
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 shrink-0">
            <a
              href={personalInfo.cvFileFR}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>CV Français (PDF)</span>
            </a>
            <a
              href={personalInfo.cvFileEN}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>English Resume (PDF)</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800">
                Coordonnées directes
              </h3>

              {/* Email Card with Copy button */}
              <div className="flex items-center justify-between p-3 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400">Adresse Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white truncate block underline-offset-2 hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copier l'adresse email"
                  aria-label="Copier l'adresse email"
                  className="p-2 rounded text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
                >
                  {copied ? (
                    <CheckCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-3 p-3 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                <div className="p-2 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Téléphone</div>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white block underline-offset-2 hover:underline"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                <div className="p-2 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Localisation & Mobilité</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors shadow-sm"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4"
            >
              <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800">
                Envoyer un message
              </h3>

              {formSubmitted && (
                <div className="p-3.5 rounded border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Votre client de messagerie a été ouvert avec les informations pré-remplies. Merci !</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Votre nom / Entreprise *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Entreprise, RH, Maître de stage..."
                    className="w-full px-3.5 py-2.5 rounded text-sm bg-slate-50 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-600 focus:border-slate-600 text-slate-900 dark:text-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Votre adresse email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@entreprise.com"
                    className="w-full px-3.5 py-2.5 rounded text-sm bg-slate-50 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-600 focus:border-slate-600 text-slate-900 dark:text-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Objet du message
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Ex: Proposition de stage technique 2A / Échange"
                  className="w-full px-3.5 py-2.5 rounded text-sm bg-slate-50 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-600 focus:border-slate-600 text-slate-900 dark:text-white transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Présentez brièvement vos besoins, projets ou opportunités..."
                  className="w-full px-3.5 py-2.5 rounded text-sm bg-slate-50 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-600 focus:border-slate-600 text-slate-900 dark:text-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
