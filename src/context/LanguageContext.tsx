import { createContext, useContext, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";

export type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    navBrandRole: "Networks & Telecoms Engineer",
    navHome: "Executive Overview",
    navAbout: "Profile",
    navSkills: "Capabilities",
    navProjects: "Case Studies",
    navCti: "CTI Standards",
    navEngagement: "Leadership",
    navTimeline: "Trajectory",
    navContact: "Contact",
    navDownloadCv: "Executive Resume",
    navSwitchTheme: "Toggle theme",

    // Hero
    heroSchoolBadge: "Toulouse INP — ENSEEIHT (N7) • Class of 2025–2028",
    heroRole: "Engineering Candidate in Networks, Systems & Telecommunications",
    heroAvailabilityBadge: "AVAILABLE FOR 3-MONTH TECHNICAL INTERNSHIP — JUNE 2027",
    heroBannerTitle: "Target Opportunity: 3-Month Technical Engineering Internship",
    heroBannerDesc: "Starting June 2027 • Nationwide (France) or International Mobility • Toulouse INP convention ready • Driving License B",
    heroBio: "Combining carrier-grade network architecture (TCP/IP, Quagga OSPF/RIP routing), POSIX systems programming in C, and agile project delivery (Scrum). Forged through 3 years of rigorous French scientific preparatory classes (CPGE PCSI / PSI*) and operational leadership as a parachute reservist in the 1st RCP and scout troop leader.",
    heroReservistBadge: "Operational Reservist (1st RCP) • Scout Troop Leader",
    heroCvFr: "French CV (PDF)",
    heroCvEn: "Executive Resume (PDF)",
    heroViewProjects: "Explore Case Studies",
    heroStat1Val: "June 2027",
    heroStat1Label: "Availability",
    heroStat1Sub: "3-Month Technical Internship",
    heroStat2Val: "ENSEEIHT",
    heroStat2Label: "Institution",
    heroStat2Sub: "Toulouse INP Engineering",
    heroStat3Val: "Agile Scrum",
    heroStat3Label: "Management",
    heroStat3Sub: "Agile Track & Finance",
    heroStat4Val: "1er RCP",
    heroStat4Label: "Leadership",
    heroStat4Sub: "Airborne Reservist & Scout Leader",
    heroProfileCardBadge: "ENGINEERING CANDIDATE",
    heroProfileName: "Antoine Chaptal",
    heroProfileSub: "Networks, Systems & Telecoms",

    // About
    aboutBadge: "Executive Profile & Vision",
    aboutTitle: "Technical Rigor, Systems Reliability & Agile Delivery",
    aboutSubtitle: "An engineering trajectory grounded in rigorous scientific modeling, low-level protocol mastery, and autonomous operational execution.",
    aboutProfileTitle: "Executive Summary",
    aboutCpgePraise: "Three intensive years in French Scientific Preparatory Classes (CPGE PCSI / PSI*) at Lycée Montesquieu (Le Mans) and Lycée Descartes (Tours) built a decisive competitive foundation: deep analytical endurance, advanced mathematical modeling, and swift problem-solving under tight constraints.",
    aboutPillar1Title: "1. Network Architecture & Backbone Routing",
    aboutPillar1Desc: "Designing robust multi-tier IP topologies: hierarchical VLSM/CIDR addressing, dynamic routing suites (Quagga RIP & OSPF) with automatic convergence, stateful NAT/PAT gateways, DNS/Web services, and forensic packet inspection via Wireshark.",
    aboutPillar2Title: "2. Systems Engineering & Kernel Interfaces",
    aboutPillar2Desc: "Low-level POSIX systems programming in C: process orchestration (fork/exec), IPC pipelines, signal handling, resource containment, and memory audits certified zero-leak with Valgrind. Complemented by OOP in Java/Python and strict algorithmic discipline in Ada.",
    aboutPillar3Title: "3. Agile Leadership & Operational Stewardship",
    aboutPillar3Desc: "Bridging engineering and execution: Option Managership at ENSEEIHT (Scrum sprint planning, backlog grooming, risk mitigation), prior budget management as mini-enterprise CFO, and experimental physical validation (Naval hydrodynamics TIPE & CFD).",

    // Skills
    skillsBadge: "Capability Matrix",
    skillsTitle: "Core Technical & Methodological Competencies",
    skillsSubtitle: "A high-performance engineering arsenal spanning networking stacks, systems programming, and agile organizational leadership.",
    skillsTechBarTitle: "Technical Arsenal & Engineering Stack:",

    // Projects
    projectsBadge: "Engineering Portfolio",
    projectsTitle: "Case Studies & Technical Deliverables",
    projectsSubtitle: "Carrier-grade routing infrastructures, low-level POSIX Unix command shells, and fluid propulsion engineering models.",
    projectsFilterAll: "All Projects",
    projectsFilterReseau: "Network Infrastructure",
    projectsFilterSysteme: "Unix Systems & C",
    projectsFilterTipe: "Applied Physics & CFD",
    projectsViewDetails: "Review Case Study",

    // Modal
    modalProblem: "Engineering Challenge & Problem Statement",
    modalSolution: "Technical Solution & Architecture",
    modalHighlights: "Technical Highlights & Specifications",
    modalCompetencies: "CTI Competencies Demonstrated",
    modalMetrics: "Key Engineering Metrics",
    modalClose: "Close",

    // CTI
    ctiBadge: "Governance & Engineering Standards",
    ctiTitle: "CTI Accreditation & Competency Framework",
    ctiSubtitle: "Systematic alignment with the 5 macro-competencies mandated by the French Engineering Accreditation Commission (CTI).",
    ctiAssociatedProjects: "Referenced Case Studies & Evidence:",
    ctiLearningOutcomes: "Validated Learning Outcomes:",

    // Engagement
    engagementBadge: "Operational Resilience & Leadership",
    engagementTitle: "Military Discipline, Youth Mentorship & International Outlook",
    engagementSubtitle: "Field leadership, high-stress decision-making, and financial responsibility developed in high-standard environments.",
    engagementPitchTitle: "Executive Video Presentation",
    engagementPitchSubtitle: "A concise 2-minute overview of my engineering background, core competencies, and career objectives.",
    engagementMobilityTitle: "International Mobility & Credentials",
    engagementMobilityDesc: "Worldwide mobility with international European background. Holder of Driving License B.",

    // Timeline
    timelineBadge: "Trajectory & Milestones",
    timelineTitle: "Academic & Operational Career Path",
    timelineSubtitle: "From French competitive CPGE preparatory classes to ENSEEIHT graduate engineering school, airborne military service, and entrepreneurial management.",
    timelineFilterAll: "Full Trajectory",
    timelineFilterEducation: "Academics",
    timelineFilterExperience: "Experience",
    timelineFilterEngagement: "Leadership & Service",
    timelineSkillsAcquired: "Capabilities Acquired:",

    // Contact
    contactBadge: "Partnership & Hiring Desk",
    contactTitle: "Initiate Dialogue on Technical Internship & Opportunities",
    contactSubtitle: "Available for a 3-month technical internship starting June 2027 in Network Engineering, Telecom Systems, Unix Infrastructure, or Agile Project Delivery.",
    contactRecruiterBoxTitle: "Executive Hiring Desk — Industry Partners & Technical Directors",
    contactRecruiterBoxSubtitle: "2nd-Year Engineering Intern Candidate — ENSEEIHT (Toulouse INP)",
    contactRecruiterBoxPeriod: "Availability: June - August 2027 (12 to 16 weeks) • Toulouse INP convention ready • Worldwide Mobility (Driving License B).",
    contactDirectCoordinates: "Direct Coordinates",
    contactEmail: "Email",
    contactPhone: "Telephone",
    contactLocation: "Base & Mobility",
    contactSendMessage: "Send Direct Inquiry",
    contactFormSuccess: "Your mail client has been opened with the inquiry pre-filled. Thank you for reaching out.",
    contactFormName: "Full Name & Organization *",
    contactFormEmail: "Corporate Email *",
    contactFormSubject: "Subject / Opportunity Overview",
    contactFormMessage: "Project Scope / Internship Details *",
    contactFormSubmit: "Submit Inquiry",

    // Footer
    footerSubtitle: "Engineering Candidate in Telecoms & Networks — Toulouse INP ENSEEIHT",
    footerBackToTop: "Top",
    footerCopyrightNote: "Executive Portfolio • Built with React 19 & Tailwind CSS"
  },
  fr: {
    // Navbar
    navBrandRole: "Ingénieur Réseaux & Télécoms",
    navHome: "Synthèse",
    navAbout: "Profil",
    navSkills: "Compétences",
    navProjects: "Études de Cas",
    navCti: "Référentiel CTI",
    navEngagement: "Leadership",
    navTimeline: "Parcours",
    navContact: "Contact",
    navDownloadCv: "CV Exécutif",
    navSwitchTheme: "Changer de thème",

    // Hero
    heroSchoolBadge: "Toulouse INP — ENSEEIHT (N7) • Promotion 2025–2028",
    heroRole: "Élève-Ingénieur Réseaux, Systèmes & Télécommunications",
    heroAvailabilityBadge: "STAGE TECHNIQUE DE 3 MOIS RECHERCHÉ — DÈS JUIN 2027",
    heroBannerTitle: "Opportunité ciblée : Stage technique d'ingénieur de 3 mois",
    heroBannerDesc: "À partir de juin 2027 • Mobilité France & International • Convention Toulouse INP prête • Titulaire Permis B",
    heroBio: "Alliant architectures réseaux de niveau opérateur (TCP/IP, routage dynamique RIP/OSPF Quagga), programmation système POSIX en C et pilotage agile (Scrum). Profil forgé par 3 années de CPGE scientifique (PCSI / PSI*) et un leadership opérationnel exercé comme réserviste parachutiste au 1er RCP et chef de troupe scout.",
    heroReservistBadge: "Réserviste Opérationnel 1er RCP • Chef de Troupe Scout",
    heroCvFr: "CV Français (PDF)",
    heroCvEn: "English Resume (PDF)",
    heroViewProjects: "Consulter les Études de Cas",
    heroStat1Val: "Juin 2027",
    heroStat1Label: "Disponibilité",
    heroStat1Sub: "Stage technique 3 mois",
    heroStat2Val: "ENSEEIHT",
    heroStat2Label: "Formation",
    heroStat2Sub: "Toulouse INP Ingénieur",
    heroStat3Val: "Agilité Scrum",
    heroStat3Label: "Management",
    heroStat3Sub: "Option Managership & Finance",
    heroStat4Val: "1er RCP",
    heroStat4Label: "Leadership",
    heroStat4Sub: "Réserviste Parachutiste & Scout",
    heroProfileCardBadge: "PROFIL INGÉNIEUR",
    heroProfileName: "Antoine Chaptal",
    heroProfileSub: "Réseaux, Systèmes & Télécoms",

    // About
    aboutBadge: "Profil Exécutif & Vision",
    aboutTitle: "Rigueur Technique, Fiabilité Système & Pilotage Agile",
    aboutSubtitle: "Une formation d'excellence articulant modélisation scientifique, maîtrise des protocoles bas-niveau et autonomie opérationnelle de terrain.",
    aboutProfileTitle: "Synthèse Exécutive",
    aboutCpgePraise: "Trois années intenses en Classes Préparatoires scientifiques (CPGE PCSI / PSI*) aux lycées Montesquieu (Le Mans) et Descartes (Tours) ont bâti un socle de compétences déterminant : endurance intellectuelle, capacités de modélisation mathématique et rapidité d'exécution face aux contraintes complexes.",
    aboutPillar1Title: "1. Architectures Réseaux & Routage Opérateur",
    aboutPillar1Desc: "Conception et déploiement de topologies IP hiérarchiques (VLSM/CIDR), routage dynamique (Quagga RIP & OSPF) avec convergence automatique sur incidents, passerelles NAT/PAT iptables, services DNS/Web et audit de trames Wireshark.",
    aboutPillar2Title: "2. Ingénierie Système & Interfaces Noyau",
    aboutPillar2Desc: "Programmation système Unix bas-niveau en C (POSIX) : gestion des processus (fork/exec), tubes anonymes, traitement des signaux, gestion mémoire rigoureuse certifiée sans fuite sous Valgrind, programmation objet Java/Python et rigueur algorithmique Ada.",
    aboutPillar3Title: "3. Leadership Agile & Gestion Opérationnelle",
    aboutPillar3Desc: "Apport concret de l'Option Managership de l'ENSEEIHT (méthodes agiles Scrum, gestion des risques), expérience de trésorier en mini-entreprise, et démarche de modélisation scientifique expérimentale (TIPE propulsion navale & CFD SolidWorks).",

    // Skills
    skillsBadge: "Matrice de Compétences",
    skillsTitle: "Compétences Techniques & Méthodologiques",
    skillsSubtitle: "Un arsenal d'ingénierie complet couvrant les couches protocolaires réseaux, les systèmes bas-niveau et la gouvernance agile de projet.",
    skillsTechBarTitle: "Arsenal Technique & Stack d'Ingénierie :",

    // Projects
    projectsBadge: "Portefeuille d'Ingénierie",
    projectsTitle: "Études de Cas & Livrables Techniques",
    projectsSubtitle: "Infrastructures réseaux d'opérateur, interpréteurs de commandes Unix en C et modélisation physique expérimentale.",
    projectsFilterAll: "Tous les Projets",
    projectsFilterReseau: "Infrastructures Réseaux",
    projectsFilterSysteme: "Systèmes Unix & C",
    projectsFilterTipe: "Physique Appliquée & CFD",
    projectsViewDetails: "Consulter la Réalisation",

    // Modal
    modalProblem: "Problématique & Enjeux d'Ingénierie",
    modalSolution: "Architecture & Solution Technique",
    modalHighlights: "Points Clés & Spécifications",
    modalCompetencies: "Compétences CTI Validées",
    modalMetrics: "Métriques de Performance",
    modalClose: "Fermer",

    // CTI
    ctiBadge: "Gouvernance & Standards CTI",
    ctiTitle: "Accréditation CTI & Référentiel de Compétences",
    ctiSubtitle: "Démonstration factuelle de la maîtrise des 5 macro-compétences du titre d'ingénieur diplômé de l'ENSEEIHT.",
    ctiAssociatedProjects: "Études de Cas Associées & Preuves :",
    ctiLearningOutcomes: "Acquis d'Apprentissage Validés :",

    // Engagement
    engagementBadge: "Leadership Opérationnel & Résilience",
    engagementTitle: "Discipline Militaire, Scoutisme & Mobilité Internationale",
    engagementSubtitle: "Maîtrise de soi sous pression, leadership d'équipe et responsabilité humaine exercés sur le terrain.",
    engagementPitchTitle: "Présentation Vidéo Exécutive",
    engagementPitchSubtitle: "Une synthèse vidéo de 2 minutes présentant mon profil, mes compétences et mes objectifs de stage.",
    engagementMobilityTitle: "Mobilité Internationale & Permis B",
    engagementMobilityDesc: "Mobilité internationale complète avec enfance européenne. Titulaire du Permis B.",

    // Timeline
    timelineBadge: "Trajectoire & Jalons",
    timelineTitle: "Parcours Académique & Expériences Clés",
    timelineSubtitle: "Des classes préparatoires d'élite à l'ENSEEIHT, complétées par le service opérationnel militaire et la gestion de projet.",
    timelineFilterAll: "Toute la Trajectoire",
    timelineFilterEducation: "Formation",
    timelineFilterExperience: "Expériences",
    timelineFilterEngagement: "Leadership & Service",
    timelineSkillsAcquired: "Compétences Maîtrisées :",

    // Contact
    contactBadge: "Bureau Partenaires & Recruteurs",
    contactTitle: "Échanger sur une Opportunité de Stage ou un Projet",
    contactSubtitle: "À la recherche d'un stage technique de 3 mois à partir de juin 2027 en ingénierie réseaux, systèmes Unix, télécoms ou gestion de projet.",
    contactRecruiterBoxTitle: "Espace Partenaires Industriels & Directeurs Techniques",
    contactRecruiterBoxSubtitle: "Candidature Stage Élève-Ingénieur 2A — ENSEEIHT (Toulouse INP)",
    contactRecruiterBoxPeriod: "Disponibilité : Juin - Août 2027 (12 à 16 semaines) • Convention Toulouse INP prête • Mobilité France & International (Permis B).",
    contactDirectCoordinates: "Coordonnées directes",
    contactEmail: "Email",
    contactPhone: "Téléphone",
    contactLocation: "Localisation & Mobilité",
    contactSendMessage: "Transmettre une proposition",
    contactFormSuccess: "Votre client de messagerie s'est ouvert avec les informations pré-remplies. Merci pour votre message.",
    contactFormName: "Nom complet & Entreprise *",
    contactFormEmail: "Adresse email professionnelle *",
    contactFormSubject: "Objet / Opportunité",
    contactFormMessage: "Description du besoin / Périmètre du stage *",
    contactFormSubmit: "Envoyer la proposition",

    // Footer
    footerSubtitle: "Élève-Ingénieur Télécoms & Réseaux — Toulouse INP ENSEEIHT",
    footerBackToTop: "Haut",
    footerCopyrightNote: "Portfolio Exécutif • Développé avec React 19 & Tailwind CSS"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio_lang");
      if (stored === "fr" || stored === "en") return stored;
    }
    return "en"; // Default to English as requested
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
