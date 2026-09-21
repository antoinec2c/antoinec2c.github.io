export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "reseau" | "systeme" | "tipe" | "telecom" | "cyber";
  categoryLabel: string;
  summary: string;
  description: string;
  problematique: string;
  solution: string;
  tags: string[];
  context: string;
  date: string;
  highlights: string[];
  competencies: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: "Network" | "Terminal" | "Radio" | "Users" | "Shield";
  skills: {
    name: string;
    level: "Notions" | "Intermédiaire" | "Avancé" | "Maîtrisé";
    progress: number;
    description?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  type: "education" | "experience" | "engagement";
  badge?: string;
  description: string[];
  skillsAcquired?: string[];
}

export interface CTICompetency {
  code: string;
  title: string;
  shortDesc: string;
  details: string;
  color: string;
  projectsLinked: { id: string; title: string }[];
  learningOutcomes: string[];
}

export interface EngagementItem {
  title: string;
  role: string;
  period: string;
  image: string;
  description: string;
  tags: string[];
}

export const personalInfo = {
  name: "Antoine Chaptal",
  fullName: "Antoine Chaptal de Chanteloup",
  role: "Élève-Ingénieur Réseaux, Systèmes & Télécommunications",
  school: "Toulouse INP — ENSEEIHT (N7)",
  promotion: "2025 – 2028",
  specialization: "Sciences du Numérique — Spécialisation Réseaux & Télécoms",
  tagline: "Spécialisé dans les architectures réseaux (TCP/IP, routage, Unix), la programmation système et les télécommunications, avec un fort sens de l'engagement opérationnel et du management agile.",
  status: "Recherche active d'un stage technique de 3 mois à partir de juin 2027",
  email: "antoine.chaptaldechanteloup@etu.inp-n7.fr",
  phone: "+33 6 95 68 58 84",
  location: "Toulouse, France (Mobile France & International • Permis B)",
  linkedin: "https://linkedin.com/in/antoine-chaptal",
  github: "https://github.com/antoinec2c",
  profilePhoto: "/img/IMG_4602.jpg",
  profilePhotoAlt: "Portrait d'Antoine Chaptal",
  videoPitchUrl: "https://www.youtube.com/embed/CleSc_Oj3v0",
  cvFile: "/pdfs/CV_Antoine_Chaptal.pdf",
  cvFileFR: "/pdfs/CV_Antoine_Chaptal.pdf",
  cvFileEN: "/pdfs/CV_Antoine_Chaptal_EN.pdf",
  bio: "Élève-ingénieur à l'ENSEEIHT (Toulouse INP) en spécialisation Réseaux & Télécommunications après 3 années en classes préparatoires scientifiques (PCSI / PSI* au Mans et à Tours). Je combine une solide maîtrise technique des couches basses et protocolaires (TCP/IP, routage RIP/OSPF, programmation système C/Unix POSIX, Quagga, Wireshark) avec des compétences reconnues en management de projet agile (Scrum) et un leadership opérationnel forgé comme réserviste parachutiste au 1er RCP et chef de troupe scout.",
  stats: [
    { label: "Formation", value: "ENSEEIHT", sublabel: "Toulouse INP" },
    { label: "Filière", value: "Réseaux & Télécoms", sublabel: "Option Managership" },
    { label: "Stage recherché", value: "3 mois dès juin 2027", sublabel: "Stage technique" },
    { label: "Engagement", value: "Réserviste 1er RCP", sublabel: "& Chef de troupe" },
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "B2 / Professionnel (C1 en prépa)" },
    { name: "Espagnol", level: "Notions (A2)" },
  ],
  certifications: [
    "Préparation Militaire Supérieure (PMS 2021–2022)",
    "Premiers Secours Civiques (PSC1)",
    "Certification Compétences Numériques (PIX)",
    "Permis de conduire (Permis B)"
  ]
};

export const ctiCompetencies: CTICompetency[] = [
  {
    code: "C1",
    title: "Concevoir & Modéliser",
    shortDesc: "Modélisation de plans d'adressage IP hiérarchiques et systèmes physiques complexes.",
    details: "Capacité à concevoir des architectures complètes : plans d'adressage IP VLSM/CIDR, dimensionnement d'infrastructures de FAI, modélisation théorique de propulsion navale (lois de Bernoulli, quantité de mouvement) et simulation numérique Python.",
    color: "from-blue-500 to-cyan-500",
    projectsLinked: [
      { id: "infra-fai", title: "Déploiement d'Infrastructure Réseau FAI (Quagga)" },
      { id: "tipe-propulsion", title: "TIPE : Modélisation Tuyère Kort & Simulation Python" }
    ],
    learningOutcomes: [
      "Élaboration d'architectures d'interconnexion de réseaux locaux et sous-réseaux VLSM",
      "Modélisation mathématique et confrontation théorique avec les lois physiques",
      "Intégration des contraintes de routage statique et dynamique multi-domaines"
    ]
  },
  {
    code: "C2",
    title: "Développer & Implémenter",
    shortDesc: "Programmation système Unix bas-niveau, shell POSIX et algorithmique.",
    details: "Maîtrise du développement système en langage C sous Linux : gestion des processus (fork, exec), tubes de communication (pipe), redirections d'entrées/sorties, gestion de mémoire contrôlée par Valgrind, et programmation objet en Java/Ada/Python.",
    color: "from-emerald-500 to-teal-500",
    projectsLinked: [
      { id: "mini-shell", title: "Interpréteur de Commandes Unix (Mini-Shell C)" },
      { id: "eportfolio-refonte", title: "Refonte & Architecture E-Portfolio React/Tailwind" }
    ],
    learningOutcomes: [
      "Conception et implémentation d'un interpréteur de commandes Unix interactif",
      "Manipulation bas-niveau des descripteurs de fichiers, signaux et processus",
      "Écriture de code modulaire et robuste sans fuite de mémoire (Valgrind)"
    ]
  },
  {
    code: "C3",
    title: "Mesurer, Analyser & Valider",
    shortDesc: "Analyse de flux Wireshark, bancs d'essais physiques et audits de performance.",
    details: "Validation expérimentale systématique : analyse fine de trames et protocoles sous Wireshark (RIP, OSPF, DNS, HTTP, NAT), banc d'essai expérimental hydraulique avec tube de Pitot pour le TIPE et contrôle de la qualité de code.",
    color: "from-amber-500 to-orange-500",
    projectsLinked: [
      { id: "infra-fai", title: "Analyse des flux et protocoles sous Wireshark" },
      { id: "tipe-propulsion", title: "Mesures expérimentales au tube de Pitot" }
    ],
    learningOutcomes: [
      "Capture et inspection de protocoles réseaux avec filtres Wireshark avancés",
      "Confrontation rigoureuse entre modèle théorique, simulation CFD et mesures réelles",
      "Validation de la conformité aux spécifications fonctionnelles"
    ]
  },
  {
    code: "C4",
    title: "Piloter & Manager des Projets",
    shortDesc: "Option Managership : Méthodes Agiles (Scrum), logistique et gestion des risques.",
    details: "Apports de l'Option Managership de l'ENSEEIHT complétés par le rôle de responsable financier en mini-entreprise : planification agile par sprints, gestion budgétaire autonome, intendance et logistique d'équipe en conditions réelles.",
    color: "from-rose-500 to-pink-500",
    projectsLinked: [
      { id: "infra-fai", title: "Gestion de projet réseau et travail en équipe" },
      { id: "engagement-scout", title: "Organisation logistique et intendance autonome" }
    ],
    learningOutcomes: [
      "Pratique des méthodologies agiles (Scrum, rôles, cérémonies, livrables)",
      "Gestion budgétaire, prévisionnel financier et suivi de trésorerie",
      "Coordination humaine, communication d'équipe et conduite des objectifs"
    ]
  },
  {
    code: "C5",
    title: "Éthique, Rusticité & Engagement",
    shortDesc: "Discipline, leadership opérationnel, cohésion et valeurs républicaines.",
    details: "Mise en pratique d'un engagement au service du collectif : réserviste opérationnel au 1er Régiment de Chasseurs Parachutistes (1er RCP), animation pédagogique auprès des jeunes dans le scoutisme et actions citoyennes à l'N7.",
    color: "from-purple-500 to-indigo-500",
    projectsLinked: [
      { id: "engagement-rcp", title: "Réserviste Parachutiste au 1er RCP" },
      { id: "engagement-scout", title: "Chef de Troupe Scoutisme" }
    ],
    learningOutcomes: [
      "Aguerrissement, maîtrise de soi et prise de décision sous forte pression",
      "Sens de la rusticité, adaptabilité et esprit de corps inébranlable",
      "Transmission de valeurs morales, bienveillance et responsabilité humaine"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "infra-fai",
    title: "Déploiement d'une Infrastructure Réseau & Services FAI",
    subtitle: "Routage dynamique RIP/OSPF, Passerelles NAT, Quagga, DNS & Wireshark",
    category: "reseau",
    categoryLabel: "Infrastructures Réseaux & Télécoms",
    summary: "Conception complète, plan d'adressage IP (VLSM/CIDR) et déploiement d'une topologie réseau de Fournisseur d'Accès à Internet avec routage dynamique et services applicatifs sous Linux.",
    problematique: "Comment interconnecter plusieurs réseaux locaux d'utilisateurs et de serveurs à travers un cœur de réseau résilient tout en garantissant un routage dynamique rapide et la translation d'adresses pour l'accès public ?",
    solution: "Élaboration d'un plan d'adressage IP hiérarchique avec calculs VLSM/CIDR. Configuration de la suite de routage Quagga sous Linux pour activer RIP et OSPF. Déploiement de passerelles NAT/PAT avec iptables, configuration des serveurs Web (Apache) et DNS (Bind), et audit des paquets avec Wireshark.",
    description: "Projet d'ingénierie réseaux à l'ENSEEIHT : mise en place d'une infrastructure FAI complète simulant des agences clientes et un cœur de réseau opérateur. Nous avons défini l'adressage optimal en évitant le gaspillage d'adresses, configuré les tables de routage statiques et dynamiques (RIP et OSPF) avec convergence automatique en cas de rupture de lien, déployé des services d'infrastructure (DNS, Web) et analysé chaque échange protocolaire sous Wireshark pour vérifier le bon comportement des passerelles NAT.",
    tags: ["Linux", "Quagga", "Wireshark", "OSPF / RIP", "VLSM / CIDR", "NAT / PAT", "DNS / Web", "TCP/IP"],
    context: "Projet d'Ingénierie Réseaux (ENSEEIHT)",
    date: "2026",
    highlights: [
      "Définition d'un plan d'adressage VLSM/CIDR propre et structuré pour réseaux d'abonnés et cœur de réseau.",
      "Routage dynamique OSPF et RIP testé avec bascule automatique sur route de secours en cas d'incident.",
      "Analyse approfondie de trames Wireshark validant les requêtes DNS récursives et les traductions NAT."
    ],
    metrics: [
      { label: "Technologies", value: "Linux & Quagga" },
      { label: "Routage", value: "RIP & OSPF" },
      { label: "Analyse", value: "Wireshark" }
    ],
    competencies: ["C1 - Concevoir & Modéliser", "C3 - Mesurer, Analyser & Valider", "C4 - Piloter & Gérer un projet"],
    githubUrl: "https://github.com/antoinec2c"
  },
  {
    id: "mini-shell",
    title: "Conception d'un Interpréteur de Commandes Unix (Mini-Shell)",
    subtitle: "Programmation système en langage C, POSIX, gestion des processus & Valgrind",
    category: "systeme",
    categoryLabel: "Programmation Système Unix",
    summary: "Développement sous Linux d'un interpréteur de commandes interactif avec gestion des processus enfants (fork, exec), tubes anonymes (pipes) et redirections d'E/S sans fuite mémoire.",
    problematique: "Comment concevoir un interpréteur de commandes robuste capable d'exécuter des pipelines complexes de programmes en parallèle avec contrôle des signaux et sans ressources orphelines ?",
    solution: "Architecture système modulaire en C exploitant les appels système POSIX : boucle d'évaluation Read-Eval-Print-Loop (REPL), parsing de la ligne de commande, création de processus avec fork() et remplacement d'image mémoire par execvp(), chaînage de tubes avec pipe() et dup2(), gestion fine des zombies avec waitpid(), et contrôle systématique de la mémoire sous Valgrind.",
    description: "Développement en langage C sous environnement Unix à l'ENSEEIHT. Le mini-shell prend en charge les commandes internes (cd, exit), l'exécution de binaires système externes, les redirections de flux standards (>, <, >>), et l'enchaînement de processus multiples via des tubes anonymes (|). Une attention rigoureuse a été portée à la libération de toutes les ressources mémoires et à la fermeture systématique des descripteurs de fichiers pour éviter les blocages.",
    tags: ["Langage C", "Linux / POSIX", "fork / exec", "Tubes (pipes)", "Redirections", "Valgrind", "Makefile"],
    context: "Projet Programmation Système (ENSEEIHT)",
    date: "2026",
    highlights: [
      "Exécution fluide de pipelines multi-étages (ex: cat file | grep pattern | wc -l).",
      "Audit mémoire sans faille : 0 octet perdu lors des tests sous Valgrind (zéro memory leak).",
      "Gestion propre des signaux système (SIGINT, SIGTSTP) et synchronisation des processus pères/enfants."
    ],
    metrics: [
      { label: "Langage", value: "C / POSIX" },
      { label: "Mémoire", value: "0 fuite (Valgrind)" },
      { label: "Architecture", value: "Processus & Pipes" }
    ],
    competencies: ["C2 - Développer & Implémenter", "C3 - Mesurer, Analyser & Valider"],
    githubUrl: "https://github.com/antoinec2c"
  },
  {
    id: "tipe-propulsion",
    title: "TIPE : Modélisation & Optimisation de Propulsion Navale",
    subtitle: "Hélice carénée (Tuyère Kort), modélisation théorique, simulation Python & banc d'essais",
    category: "tipe",
    categoryLabel: "Recherche & Modélisation Physique",
    summary: "Étude théorique et expérimentale de l'augmentation du rendement propulsif par tuyère de Kort : calculs analytiques, script de simulation en Python, CAO SolidWorks, impression 3D et banc d'essais Pitot.",
    problematique: "Dans quelles conditions d'exploitation l'adjonction d'une tuyère de Kort permet-elle d'accroître significativement la vitesse d'éjection et la poussée nette par rapport à une hélice libre ?",
    solution: "Triangulation scientifique complète : 1) Modélisation théorique basée sur les équations de Bernoulli et le théorème de la quantité de mouvement ; 2) Conception CAO 3D (SolidWorks) et impression 3D d'un modèle réduit ; 3) Banc d'essais expérimental avec mesure de vitesse du jet d'eau au tube de Pitot ; 4) Scripts Python de simulation numérique et confrontations des résultats.",
    description: "Travail d'Initiative Personnelle Encadré (TIPE) mené en classes préparatoires scientifiques (PCSI / PSI*). L'étude a établi les équations de poussée d'une hélice carénée vs libre, conçu un banc physique de mesure et confronté les données mesurées aux prédictions des simulations d'écoulement CFD, confirmant le gain de poussée à basse vitesse et point fixe pour les navires de servitude et remorqueurs.",
    tags: ["Python", "SolidWorks", "Simulations CFD", "Mécanique des fluides", "Tube de Pitot", "Impression 3D", "Banc de mesure"],
    context: "TIPE CPGE (Lycée Montesquieu & Descartes)",
    date: "2024 – 2025",
    highlights: [
      "Confrontation rigoureuse modèle théorique analytique ↔ mesures réelles tube de Pitot ↔ simulation Python/CFD.",
      "Conception 3D intégrale sous SolidWorks et fabrication du prototype par impression 3D.",
      "Démonstration chiffrée de l'augmentation de la vitesse de sortie du fluide grâce au carénage hydrodynamique."
    ],
    metrics: [
      { label: "Approche", value: "Théorie + Test + CFD" },
      { label: "Mesure", value: "Tube de Pitot" },
      { label: "Outils", value: "Python & SolidWorks" }
    ],
    competencies: ["C1 - Concevoir & Modéliser", "C3 - Mesurer, Analyser & Valider", "C4 - Piloter un projet"],
    githubUrl: "https://github.com/antoinec2c"
  },
  {
    id: "eportfolio-refonte",
    title: "Conception & Déploiement du E-Portfolio d'Ingénieur",
    subtitle: "Application web réactive React 19, TypeScript, Vite & Tailwind CSS déployée sur GitHub Pages",
    category: "systeme",
    categoryLabel: "Développement Web & Outillage",
    summary: "Refonte complète du portfolio d'ingénieur avec architecture modulaire par composants, dark/light mode natif, fiches modales accessibles et pipeline d'intégration continue GitHub Actions.",
    problematique: "Comment concevoir une vitrine professionnelle et académique performante, responsive et facilement maintenable valorisant les compétences CTI et la double casquette technique/management ?",
    solution: "Stack moderne basée sur React 19 et Vite pour un temps de build ultra-rapide (< 3s), typage strict TypeScript, styling Tailwind CSS avec design épuré, boîtes modales HTML5 natives `<dialog>` accessibles et workflow CI/CD GitHub Actions pour publication instantanée sur GitHub Pages.",
    description: "Projet de développement complet servant de support pour la recherche de stage technique et pour la validation des macro-compétences du diplôme d'ingénieur ENSEEIHT. Intégration de la matrice CTI, des fiches de projets détaillées, de la vidéo de pitch et des liens de téléchargement direct des CVs.",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "GitHub Actions", "GitHub Pages", "Accessibilité"],
    context: "Projet Personnel & Valorisation Professionnelle",
    date: "2026",
    highlights: [
      "Architecture modulaire et composants réutilisables avec gestion centralisée des données.",
      "Temps de compilation inférieur à 3 secondes et bundle léger (< 100 kB gzippé).",
      "Déploiement automatisé sur antoinec2c.github.io à chaque push sur la branche main."
    ],
    metrics: [
      { label: "Build Vite", value: "< 3s" },
      { label: "Poids CSS", value: "7 kB gzippé" },
      { label: "Hébergement", value: "antoinec2c.github.io" }
    ],
    competencies: ["C2 - Développer & Implémenter", "C4 - Piloter un projet"],
    githubUrl: "https://github.com/antoinec2c"
  }
];

export const engagements: EngagementItem[] = [
  {
    title: "Réserviste Opérationnel (FGIR) — 1er RCP",
    role: "1er Régiment de Chasseurs Parachutistes • Armée de Terre",
    period: "Juillet 2026 (PMS 2021–2022)",
    image: "/img/reserve.jpg",
    description: "Formation militaire initiale (FGIR) : aguerrissement, discipline, rusticité, maîtrise du stress et cohésion d'équipe au sein du prestigieux 1er RCP. Préparation Militaire Supérieure (PMS) effectuée en 2021–2022.",
    tags: ["1er RCP", "Aguerrissement", "Discipline", "Rusticité", "Cohésion", "PMS"]
  },
  {
    title: "Chef de Troupe — Scoutisme",
    role: "Direction et animation d'une troupe (jeunes 12-17 ans)",
    period: "2025 – Présent",
    image: "/img/scout.jpg",
    description: "Direction et encadrement d'une douzaine de jeunes : organisation logistique complète, intendance et gestion budgétaire de sorties et camps en autonomie. Pédagogie active, transmission de valeurs et responsabilité.",
    tags: ["Leadership", "Intendance", "Gestion budgétaire", "Pédagogie", "Autonomie"]
  },
  {
    title: "Responsable Financier — Mini-Entreprise",
    role: "Projet entrepreneurial en équipe",
    period: "2017 – 2018",
    image: "/img/inclusion.jpg",
    description: "Gestion du budget (500 €) et suivi rigoureux de trésorerie au sein d'une équipe de 10 personnes. Première expérience concrète de gestion des ressources financières et de travail collaboratif.",
    tags: ["Finance", "Trésorerie", "Mini-Entreprise", "Rigueur", "Équipe"]
  },
  {
    title: "Restauration du Patrimoine — Manoir de Blossac",
    role: "Chantiers bénévoles en Bretagne",
    period: "Étés 2024 & 2025",
    image: "/img/blossac.jpg",
    description: "Aide bénévole estivale à la restauration du Manoir de Blossac en Bretagne suite aux inondations subies. Travail manuel exigeant, sauvegarde du patrimoine historique breton et démarche solidaire.",
    tags: ["Patrimoine", "Travail manuel", "Solidarité", "Bretagne"]
  },
  {
    title: "Mobilité Internationale & Randonnée",
    role: "Enfance européenne & Dépassement de soi",
    period: "Bruxelles, Camino del Norte, Europe",
    image: "/img/brussels.jpg",
    description: "Enfance passée à Bruxelles dans un cadre multiculturel européen stimulant. Randonnées sur le Camino del Norte (Chemin de Saint-Jacques), séjours linguistiques en Allemagne, Autriche et Italie. Perspectives d'échange en Irlande et pays nordiques.",
    tags: ["Bruxelles", "Camino del Norte", "Ouverture", "Autonomie"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "reseau",
    title: "Réseaux & Systèmes",
    iconName: "Network",
    skills: [
      { name: "Architecture TCP/IP & Modèle OSI", level: "Maîtrisé", progress: 95, description: "Protocoles réseaux, plan d'adressage IP (VLSM/CIDR), interconnexion" },
      { name: "Routage dynamique & statique (RIP, OSPF)", level: "Avancé", progress: 85, description: "Configuration Quagga, convergence, découpage en aires, métriques" },
      { name: "Systèmes d'exploitation Linux / Unix & Bash", level: "Maîtrisé", progress: 90, description: "Administration système, scripts shell, gestion des processus, permissions" },
      { name: "Analyse de trames & Protocoles (Wireshark)", level: "Maîtrisé", progress: 90, description: "Inspection approfondie des paquets, dépannage, filtres d'analyse experts" },
      { name: "Services Réseaux (DNS, Web, NAT/PAT)", level: "Avancé", progress: 85, description: "Passerelles NAT iptables, serveurs Bind DNS, serveurs Web Apache" },
      { name: "Conteneurisation & Outils (Docker, Git)", level: "Avancé", progress: 80, description: "Environnements de test, gestion de versions distribuée, intégration continue" },
    ]
  },
  {
    id: "programmation",
    title: "Programmation",
    iconName: "Terminal",
    skills: [
      { name: "Langage C (Programmation Système Unix / POSIX)", level: "Avancé", progress: 90, description: "Gestion des processus (fork, exec), tubes (pipes), signaux, Valgrind" },
      { name: "Python (Scripts, Réseaux & Simulations)", level: "Maîtrisé", progress: 90, description: "Scripting, simulation numérique TIPE, traitement de données" },
      { name: "Java / Programmation Orientée Objet", level: "Avancé", progress: 80, description: "POO, classes, encapsulation, polymorphisme, design patterns" },
      { name: "Ada (Programmation Impérative & Rigueur)", level: "Avancé", progress: 80, description: "Typage fort, rigueur algorithmique, modélisation logicielle (ENSEEIHT 1A)" },
      { name: "Bases de Données & SQL", level: "Avancé", progress: 80, description: "Modélisation relationnelle, requêtes SQL complexes, intégrité" },
      { name: "Matlab / Traitement du Signal", level: "Avancé", progress: 85, description: "Calcul matriciel, modélisation de signaux, filtrage numérique" },
    ]
  },
  {
    id: "management",
    title: "Management & Méthodes",
    iconName: "Users",
    skills: [
      { name: "Option Managership (ENSEEIHT)", level: "Maîtrisé", progress: 90, description: "Management des organisations, leadership, prise de décision stratégique" },
      { name: "Méthodes Agiles (Scrum, Sprints)", level: "Avancé", progress: 85, description: "Découpage en user stories, rétrospectives, pilotage par la valeur" },
      { name: "Gestion des Risques & Logistique d'Équipe", level: "Maîtrisé", progress: 90, description: "Intendance, gestion des imprévus, organisation de camps en autonomie" },
      { name: "Gestion Budgétaire & Trésorerie", level: "Avancé", progress: 85, description: "Suivi de trésorerie, gestion de budget (expérience mini-entreprise & scoutisme)" },
      { name: "Démarche d'Ingénieur CTI (Référentiel APC)", level: "Maîtrisé", progress: 90, description: "Conception, modélisation, validation expérimentale et posture réflexive" },
    ]
  },
  {
    id: "telecom",
    title: "Télécommunications & Signal",
    iconName: "Radio",
    skills: [
      { name: "Architecture Télécoms & Modulations", level: "Avancé", progress: 85, description: "Modulations numériques (BPSK, QPSK, QAM), constellations, TEB" },
      { name: "Traitement Numérique du Signal (TNS)", level: "Avancé", progress: 85, description: "Échantillonnage, filtrage numérique RIF/RII, Transformée de Fourier (FFT)" },
      { name: "Radio Logicielle (SDR) & Transmission", level: "Intermédiaire", progress: 75, description: "Chaîne bande de base, transposition fréquentielle, filtres adaptés" },
      { name: "Modélisation Physique & CFD (SolidWorks)", level: "Avancé", progress: 85, description: "Conception 3D, calcul d'écoulements fluides numériques (TIPE)" },
    ]
  }
];

export const timeline: TimelineItem[] = [
  {
    id: "stage-2a-search",
    period: "À partir de juin 2027 (3 mois)",
    title: "Recherche active : Stage Technique Élève-Ingénieur",
    institution: "Entreprise du secteur Réseaux, Systèmes, Télécoms ou Cybersécurité",
    location: "Toulouse, France entière ou International",
    type: "experience",
    badge: "Opportunité recherchée",
    description: [
      "Objectif : Mettre en pratique mes compétences en architectures réseaux (TCP/IP, routage dynamique), administration système Linux et développement C/Python sur des projets techniques à fort impact.",
      "Thématiques ciblées : Ingénierie réseaux opérateurs/entreprises, supervision de services FAI, sécurité des infrastructures, administration système et virtualisation.",
      "Ce que j'apporte : Rigueur scientifique (CPGE PSI* et ENSEEIHT), compétences pratiques prouvées (Quagga, Wireshark, Shell Unix en C), leadership et esprit de cohésion (1er RCP, scoutisme)."
    ],
    skillsAcquired: ["Réseaux IP", "Quagga / OSPF", "Linux / POSIX C", "Leadership", "Management Agile"]
  },
  {
    id: "n7-cursus",
    period: "2025 – 2028 (Diplôme en 2028)",
    title: "Diplôme d'Ingénieur Sciences du Numérique — Spécialisation Réseaux & Télécoms",
    institution: "Toulouse INP — ENSEEIHT (N7)",
    location: "Toulouse, France",
    type: "education",
    badge: "En cours (Bac+4)",
    description: [
      "Enseignements clés : Architecture réseaux & protocoles (TCP/IP), Systèmes d'exploitation Unix, Routage, Traitement du signal, Programmation objet (Java, Ada, C).",
      "Option Managership : Gestion de projet (méthodes agiles / Scrum), leadership et management des organisations.",
      "Projets phares : Déploiement d'une infrastructure FAI (Quagga, Wireshark, NAT/DNS) et Conception d'un mini-shell Unix en C."
    ],
    skillsAcquired: ["TCP/IP & Routage", "Unix & POSIX C", "Traitement du signal", "Méthodes Agiles / Scrum", "Option Managership"]
  },
  {
    id: "cpge-cursus",
    period: "2022 – 2025 (3 ans)",
    title: "Classes Préparatoires aux Grandes Écoles (CPGE) — PCSI / PSI*",
    institution: "Lycée Montesquieu (Le Mans) & Lycée Descartes (Tours)",
    location: "Le Mans & Tours, France",
    type: "education",
    badge: "Filière PCSI / PSI*",
    description: [
      "Formation scientifique approfondie en Mathématiques, Physique, Sciences de l'ingénieur et Algorithmique (Python / SQL).",
      "Rigueur méthodologique poussée et endurance intellectuelle face à des problèmes scientifiques complexes.",
      "TIPE : Modélisation et Optimisation de Propulsion Navale (Hélice carénée Kort Nozzle, simulation Python, banc Pitot et CFD SolidWorks)."
    ],
    skillsAcquired: ["Mathématiques", "Physique", "Sciences de l'ingénieur", "Python / SQL", "TIPE"]
  },
  {
    id: "engagement-rcp-time",
    period: "Juillet 2026 (PMS en 2021–2022)",
    title: "Réserviste Opérationnel (FGIR) — 1er Régiment de Chasseurs Parachutistes (1er RCP)",
    institution: "Armée de Terre",
    location: "Pamiers / France",
    type: "engagement",
    badge: "Engagement Militaire",
    description: [
      "Formation militaire initiale de réserviste (FGIR) : aguerrissement physique et mental, rusticité, respect de la hiérarchie et cohésion d'équipe.",
      "Préparation Militaire Supérieure (PMS) effectuée en 2021–2022 : initiation au commandement et aux opérations."
    ],
    skillsAcquired: ["Aguerrissement", "Leadership", "Discipline", "Gestion du stress", "Esprit de corps"]
  },
  {
    id: "engagement-scout-time",
    period: "2025 – Présent",
    title: "Chef de Troupe — Scoutisme",
    institution: "Association Scoute",
    location: "Toulouse, France",
    type: "engagement",
    badge: "Engagement Éducatif",
    description: [
      "Direction et animation d'une troupe d'une douzaine de jeunes (12-17 ans).",
      "Organisation logistique, intendance et gestion budgétaire des sorties et camps en autonomie complète."
    ],
    skillsAcquired: ["Gestion budgétaire", "Intendance", "Pédagogie", "Organisation", "Autonomie"]
  },
  {
    id: "mini-entreprise",
    period: "2017 – 2018",
    title: "Responsable Financier d'une Mini-Entreprise",
    institution: "Projet entrepreneurial",
    location: "France",
    type: "experience",
    badge: "Entrepreneuriat",
    description: [
      "Gestion du budget (500 €) et suivi de trésorerie au sein d'une équipe de 10 personnes.",
      "Gestion des devis, facturations et bilan financier de clôture."
    ],
    skillsAcquired: ["Comptabilité", "Gestion de budget", "Travail d'équipe", "Rigueur"]
  }
];
