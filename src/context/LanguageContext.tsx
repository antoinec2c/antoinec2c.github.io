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
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navCti: "CTI Framework",
    navEngagement: "Involvement",
    navTimeline: "Background",
    navContact: "Contact",
    navDownloadCv: "Download Resume",
    navSwitchTheme: "Toggle theme",

    // Hero
    heroSchoolBadge: "Toulouse INP — ENSEEIHT (N7) • Class of 2025–2028",
    heroRole: "Engineering Student in Networks, Systems & Telecommunications",
    heroBannerTitle: "Seeking a 3-month technical engineering internship",
    heroBannerDesc: "Duration: 3 months starting June 2027 • Location: Nationwide (France) or Worldwide • Ready for Toulouse INP convention",
    heroBio: "Currently at ENSEEIHT specializing in Networks & Telecommunications with the Agile Project Management Track (Scrum), following 3 years of intensive scientific preparatory classes (CPGE PCSI / PSI*). Focused on network interconnection architectures (TCP/IP, dynamic routing RIP/OSPF under Quagga), Unix POSIX systems in C, digital signal processing, and agile engineering leadership.",
    heroReservistBadge: "Parachute Reservist (1st RCP) • Scout Troop Leader",
    heroCvFr: "French Resume (PDF)",
    heroCvEn: "English Resume (PDF)",
    heroViewProjects: "Explore projects",
    heroStatsFormation: "Education",
    heroStatsFiliere: "Major",
    heroStatsFiliereSub: "Management Track",
    heroStatsStage: "Target Internship",
    heroStatsStageSub: "Technical Internship",
    heroStatsEngagement: "Involvement",
    heroStatsEngagementSub: "& Troop Leader",
    heroSystemOverview: "Engineering System Overview",
    heroKernel: "Specialization",
    heroOption: "Academic Track",
    heroOptionVal: "Agile Managership",
    heroMobility: "Mobility",
    heroMobilityVal: "Worldwide (Driving License B)",
    heroAvailability: "Availability",
    heroAvailabilityVal: "June 2027 (3 months)",

    // About
    aboutBadge: "About & Academic Background",
    aboutTitle: "Network Engineering, Unix Systems & Agile Management",
    aboutSubtitle: "An engineering education at ENSEEIHT combining scientific rigor, protocol engineering, and project leadership.",
    aboutProfileTitle: "My Engineering Profile",
    aboutCpgePraise: "Following three demanding years in French Scientific Preparatory Classes (CPGE PCSI / PSI*) at Montesquieu (Le Mans) and Descartes (Tours) High Schools, I forged strong work discipline, mathematical modeling capabilities, and operational resilience.",
    aboutPillar1Title: "1. Networks & Unix Systems",
    aboutPillar1Desc: "Hierarchical IP address schemes (VLSM/CIDR), dynamic routing protocols (RIP, OSPF) under Quagga, NAT gateways, DNS/Web servers, and deep packet inspection with Wireshark.",
    aboutPillar2Title: "2. Systems Programming & Algorithms",
    aboutPillar2Desc: "Low-level systems programming in C (Unix POSIX mini-shell, fork/exec processes, IPC pipes, zero-leak Valgrind memory safety), OOP in Java/Python, and algorithmic discipline in Ada.",
    aboutPillar3Title: "3. Project Management & Modeling",
    aboutPillar3Desc: "Agile project leadership (Scrum methodology), team logistics, and risk control, combined with a scientific modeling mindset (Naval propulsion hydrodynamics TIPE with SolidWorks CFD).",

    // Skills
    skillsBadge: "Skills Matrix",
    skillsTitle: "Technical & Methodological Competencies",
    skillsSubtitle: "A balanced engineering profile combining network protocols, low-level systems programming, and agile project delivery.",
    skillsTechBarTitle: "Technical Environment & Tools:",

    // Projects
    projectsBadge: "Projects & Engineering Works",
    projectsTitle: "Engineering Deliverables & Implementations",
    projectsSubtitle: "ISP routing topologies deployed with Quagga/Linux, custom Unix command shell in C, and naval propulsion hydrodynamics research.",
    projectsFilterAll: "All Projects",
    projectsFilterReseau: "Network Infrastructure (Quagga)",
    projectsFilterSysteme: "Unix Systems & C",
    projectsFilterTipe: "Applied Research & TIPE (CFD)",
    projectsViewDetails: "View full case study",

    // Modal
    modalProblem: "Engineering Challenge & Problem Statement",
    modalSolution: "Technical Solution & Architecture",
    modalHighlights: "Key Technical Highlights",
    modalCompetencies: "CTI Competencies Validated",
    modalMetrics: "Engineering Metrics",
    modalClose: "Close",

    // CTI
    ctiBadge: "CTI Framework & Competency-Based Approach",
    ctiTitle: "Accreditation of Engineering Competencies (CTI)",
    ctiSubtitle: "Reflective competency matrix demonstrating mastery of the 5 macro-competencies for the ENSEEIHT Engineering Degree.",
    ctiAssociatedProjects: "Linked Real-World Projects & Proofs:",
    ctiLearningOutcomes: "Concrete Learning Outcomes:",

    // Engagement
    engagementBadge: "Commitment & International Mobility",
    engagementTitle: "Military Service, Scouting & European Background",
    engagementSubtitle: "Operational leadership, resilience under pressure, and human responsibility beyond the classroom.",
    engagementPitchTitle: "Video Pitch & Engineering Presentation",
    engagementPitchSubtitle: "Watch my 2-minute video pitch introducing my background, values, and internship goals.",
    engagementMobilityTitle: "International Mobility & Driving License",
    engagementMobilityDesc: "International mobility across Europe and worldwide. Holder of Driving License B.",

    // Timeline
    timelineBadge: "Timeline & Career Progression",
    timelineTitle: "Academic & Professional Journey",
    timelineSubtitle: "From competitive French CPGE preparatory classes to ENSEEIHT engineering school and military service.",
    timelineFilterAll: "All Milestones",
    timelineFilterEducation: "Education",
    timelineFilterExperience: "Experience",
    timelineFilterEngagement: "Service & Leadership",
    timelineSkillsAcquired: "Acquired Competencies:",

    // Contact
    contactBadge: "Contact & Opportunities",
    contactTitle: "Discuss an Engineering Opportunity or Internship",
    contactSubtitle: "Actively seeking a 3-month technical internship starting June 2027 in Network Infrastructure, Unix Systems, Telecommunications, or Project Management.",
    contactRecruiterBoxTitle: "Recruiters & Industrial Partners Desk",
    contactRecruiterBoxSubtitle: "2nd-Year Engineering Student Internship — ENSEEIHT (Toulouse INP)",
    contactRecruiterBoxPeriod: "Period: June - August 2027 (12 to 16 weeks) • Toulouse INP convention ready • Worldwide Mobility (Driving License B).",
    contactDirectCoordinates: "Direct Coordinates",
    contactEmail: "Email Address",
    contactPhone: "Phone Number",
    contactLocation: "Location & Mobility",
    contactSendMessage: "Send a Message",
    contactFormSuccess: "Your email client has been opened with your message pre-filled. Thank you!",
    contactFormName: "Your Name / Organization *",
    contactFormEmail: "Your Email Address *",
    contactFormSubject: "Subject",
    contactFormMessage: "Message *",
    contactFormSubmit: "Send Message",

    // Footer
    footerSubtitle: "Engineering Student in Telecoms & Networks — ENSEEIHT",
    footerBackToTop: "Top",
    footerCopyrightNote: "Engineer Portfolio • React & Tailwind CSS"
  },
  fr: {
    // Navbar
    navHome: "Accueil",
    navAbout: "À propos",
    navSkills: "Compétences",
    navProjects: "Projets",
    navCti: "Approche CTI",
    navEngagement: "Engagements",
    navTimeline: "Parcours",
    navContact: "Contact",
    navDownloadCv: "Télécharger CV",
    navSwitchTheme: "Changer de thème",

    // Hero
    heroSchoolBadge: "Toulouse INP — ENSEEIHT (N7) • Promotion 2025–2028",
    heroRole: "Élève-Ingénieur Réseaux, Systèmes & Télécommunications",
    heroBannerTitle: "Recherche de stage technique d'ingénieur",
    heroBannerDesc: "Durée : 3 mois à partir de juin 2027 • Localisation : France entière ou International • Convention Toulouse INP",
    heroBio: "Actuellement à l'ENSEEIHT en spécialisation Réseaux & Télécoms complétée par l'Option Managership, après 3 années en CPGE scientifique (PCSI / PSI*). Centré sur les architectures d'interconnexion (TCP/IP, routage dynamique RIP/OSPF sous Quagga), les systèmes Unix POSIX en C, le traitement du signal et le pilotage de projets agiles (Scrum).",
    heroReservistBadge: "Réserviste 1er RCP • Chef de troupe scout",
    heroCvFr: "CV Français (PDF)",
    heroCvEn: "English Resume (PDF)",
    heroViewProjects: "Voir les projets",
    heroStatsFormation: "Formation",
    heroStatsFiliere: "Filière",
    heroStatsFiliereSub: "Option Managership",
    heroStatsStage: "Stage recherché",
    heroStatsStageSub: "Stage technique",
    heroStatsEngagement: "Engagement",
    heroStatsEngagementSub: "& Chef de troupe",
    heroSystemOverview: "Synthèse d'Ingénierie",
    heroKernel: "Spécialisation",
    heroOption: "Option Diplômante",
    heroOptionVal: "Option Managership",
    heroMobility: "Mobilité",
    heroMobilityVal: "France & International (Permis B)",
    heroAvailability: "Disponibilité",
    heroAvailabilityVal: "Juin 2027 (3 mois)",

    // About
    aboutBadge: "À propos & Formation",
    aboutTitle: "Ingénierie Réseaux, Systèmes Unix & Management Agile",
    aboutSubtitle: "Une formation d'excellence à l'ENSEEIHT alliant rigueur scientifique, maîtrise des protocoles et pilotage de projets.",
    aboutProfileTitle: "Mon Profil d'Ingénieur",
    aboutCpgePraise: "Après trois années intenses en Classes Préparatoires aux Grandes Écoles (CPGE PCSI / PSI*) aux lycées Montesquieu (Le Mans) et Descartes (Tours), j'ai développé une grande rigueur de travail et une forte capacité de modélisation mathématique et physique.",
    aboutPillar1Title: "1. Réseaux & Systèmes Unix",
    aboutPillar1Desc: "Plans d'adressage IP hiérarchiques (VLSM/CIDR), routage dynamique (RIP, OSPF) sous Quagga, passerelles NAT, serveurs DNS/Web et analyse approfondie de trames sous Wireshark.",
    aboutPillar2Title: "2. Programmation Système & Algorithmique",
    aboutPillar2Desc: "Développement système bas-niveau en C (mini-shell Unix POSIX, processus fork/exec, tubes de communication, zéro fuite mémoire Valgrind), programmation objet en Java/Python et rigueur algorithmique en Ada.",
    aboutPillar3Title: "3. Option Managership & Modélisation",
    aboutPillar3Desc: "Management de projets agiles (méthodes Scrum), leadership, gestion des risques et logistique d'équipe, complétés par une démarche scientifique de modélisation (TIPE propulsion navale CFD SolidWorks).",

    // Skills
    skillsBadge: "Matrice de Compétences",
    skillsTitle: "Compétences Techniques & Méthodologiques",
    skillsSubtitle: "Un profil d'ingénieur équilibré alliant protocoles réseaux, programmation système bas-niveau et management agile de projets.",
    skillsTechBarTitle: "Environnement Technique & Outils :",

    // Projects
    projectsBadge: "Projets & Réalisations",
    projectsTitle: "Travaux d'Ingénierie & Développements",
    projectsSubtitle: "Infrastructures réseaux déployées sous Quagga/Linux, développement d'un mini-shell Unix en C et recherche expérimentale en propulsion navale.",
    projectsFilterAll: "Tous les projets",
    projectsFilterReseau: "Infrastructures Réseaux (Quagga)",
    projectsFilterSysteme: "Systèmes Unix & C",
    projectsFilterTipe: "Recherche & TIPE (CFD)",
    projectsViewDetails: "Consulter la fiche complète",

    // Modal
    modalProblem: "Problématique & Enjeux",
    modalSolution: "Solution & Architecture Technique",
    modalHighlights: "Points Clés & Spécifications",
    modalCompetencies: "Compétences CTI Validées",
    modalMetrics: "Métriques d'Ingénierie",
    modalClose: "Fermer",

    // CTI
    ctiBadge: "Référentiel CTI & Approche Par Compétences",
    ctiTitle: "Validation des Compétences du Diplôme d'Ingénieur",
    ctiSubtitle: "Matrice réflexive démontrant la maîtrise des 5 macro-compétences du titre d'ingénieur ENSEEIHT / CTI.",
    ctiAssociatedProjects: "Projets Associés & Preuves :",
    ctiLearningOutcomes: "Acquis d'Apprentissage Concrets :",

    // Engagement
    engagementBadge: "Engagements, Valeurs & Mobilité",
    engagementTitle: "Service Militaire, Scoutisme & Leadership",
    engagementSubtitle: "Rigueur opérationnelle, rusticité, transmission pédagogique et ouverture multiculturelle au service du collectif.",
    engagementPitchTitle: "Vidéo Pitch d'Ingénieur",
    engagementPitchSubtitle: "Visionnez ma présentation en 2 minutes de mon parcours, mes compétences et mes motivations.",
    engagementMobilityTitle: "Mobilité Internationale & Permis B",
    engagementMobilityDesc: "Mobilité active sur toute la France et à l'international. Titulaire du Permis B.",

    // Timeline
    timelineBadge: "Chronologie & Parcours",
    timelineTitle: "Parcours Académique & Expériences",
    timelineSubtitle: "Des classes préparatoires scientifiques à l'ENSEEIHT, enrichies par le service de réserviste militaire et le scoutisme.",
    timelineFilterAll: "Tout le parcours",
    timelineFilterEducation: "Formation",
    timelineFilterExperience: "Expériences",
    timelineFilterEngagement: "Engagements",
    timelineSkillsAcquired: "Compétences développées :",

    // Contact
    contactBadge: "Me Contacter & Opportunités",
    contactTitle: "Échanger sur un Projet ou une Proposition de Stage",
    contactSubtitle: "À la recherche d'un stage technique de 3 mois à partir de juin 2027 (infrastructures réseaux, systèmes Unix, télécommunications ou gestion de projet). N'hésitez pas à me contacter directement.",
    contactRecruiterBoxTitle: "Espace Recruteurs & Partenaires Industriels",
    contactRecruiterBoxSubtitle: "Stage Élève-Ingénieur 2A — ENSEEIHT (Toulouse INP)",
    contactRecruiterBoxPeriod: "Période : Juin - Août 2027 (12 à 16 semaines) • Convention Toulouse INP prête • Mobilité France & International (Permis B).",
    contactDirectCoordinates: "Coordonnées directes",
    contactEmail: "Adresse Email",
    contactPhone: "Téléphone",
    contactLocation: "Localisation & Mobilité",
    contactSendMessage: "Envoyer un message",
    contactFormSuccess: "Votre client de messagerie a été ouvert avec les informations pré-remplies. Merci !",
    contactFormName: "Votre nom / Entreprise *",
    contactFormEmail: "Votre adresse email *",
    contactFormSubject: "Objet du message",
    contactFormMessage: "Message *",
    contactFormSubmit: "Envoyer le message",

    // Footer
    footerSubtitle: "Élève-Ingénieur Télécoms & Réseaux — ENSEEIHT",
    footerBackToTop: "Haut",
    footerCopyrightNote: "Portfolio d'Ingénieur • React & Tailwind"
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
