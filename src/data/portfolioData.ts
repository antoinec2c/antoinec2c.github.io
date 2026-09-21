export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "telecom" | "reseau" | "cyber" | "tipe" | "dev";
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
  reportUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: "Radio" | "Network" | "Shield" | "Code2" | "Users" | "Compass";
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
  role: "Élève-Ingénieur en Informatique & Télécommunications",
  school: "ENSEEIHT - Toulouse INP (N7)",
  promotion: "2025 - 2028 (2ème année)",
  tagline: "Passionné par la cybersécurité, les réseaux d'infrastructure, le traitement du signal et les systèmes communicants.",
  status: "Recherche active : Stage technique d'ingénieur 2A (12 à 16 semaines) dès mai",
  email: "antoine.chaptaldechanteloup@etu.inp-n7.fr",
  phone: "+33 6 95 68 58 84",
  location: "Toulouse, France (Mobile France entière & International)",
  linkedin: "https://linkedin.com/in/antoine-chaptal-8b1a2a37b",
  github: "https://github.com/antoinec2c",
  profilePhoto: "/img/IMG_4602.jpg",
  profilePhotoAlt: "Portrait d'Antoine Chaptal",
  videoPitchUrl: "https://www.youtube.com/embed/CleSc_Oj3v0",
  cvFileFR: "/pdfs/CV_Antoine_Chaptal_FR.pdf",
  cvFileEN: "/pdfs/CV_Antoine_Chaptal_EN.pdf",
  bio: "Élève-ingénieur à l'ENSEEIHT (Toulouse INP) au sein de la filière Sciences du Numérique - Informatique & Télécommunications, j'ai suivi un cursus exigeant en CPGE (PCSI - PSI* au Mans et à Tours). Mon projet professionnel est résolument orienté vers la Cybersécurité et la résilience des architectures réseaux. Alliant rigueur scientifique, esprit d'équipe et sens du service forgé par mon engagement dans la réserve militaire et le scoutisme, je recherche un stage technique stimulant de 12 à 16 semaines dès mai.",
  stats: [
    { label: "Formation", value: "ENSEEIHT (N7)", sublabel: "Toulouse INP" },
    { label: "Niveau", value: "Bac+4 (2A)", sublabel: "Master 1 Ingénieur" },
    { label: "Disponibilité", value: "Mai - Août", sublabel: "12 à 16 semaines" },
    { label: "Objectif", value: "Cybersécurité", sublabel: "& Réseaux communicants" },
  ],
  languages: [
    { name: "Français", level: "Langue maternelle (C2)" },
    { name: "Anglais", level: "Courant (B2 - C1 en préparation)" },
    { name: "Espagnol", level: "Niveau scolaire (A2)" },
  ],
  certifications: [
    "Préparation Militaire Supérieure (PMS)",
    "Premiers Secours Civiques (PSC1)",
    "Certification Compétences Numériques (PIX)"
  ]
};

export const ctiCompetencies: CTICompetency[] = [
  {
    code: "C1",
    title: "Concevoir & Modéliser",
    shortDesc: "Modélisation de chaînes de transmission, dimensionnement de réseaux et modélisation physique.",
    details: "Capacité à poser les bases théoriques (théorie de l'information, modulations numériques, mécanique des fluides en TIPE, plan d'adressage IP hiérarchique avec découpage VLSM) et à simuler mathématiquement le comportement de systèmes complexes.",
    color: "from-blue-500 to-cyan-500",
    projectsLinked: [
      { id: "tipe-propulsion", title: "TIPE : Optimisation de propulsion navale (Kort Nozzle)" },
      { id: "chaine-sdr-telecom", title: "Chaîne de transmission numérique SDR & QAM" },
      { id: "archi-reseau-securisee", title: "Architecture Réseau d'Entreprise Multi-Sites OSPF" }
    ],
    learningOutcomes: [
      "Conception théorique basée sur les lois fondamentales (Bernoulli, quantité de mouvement, Nyquist)",
      "Modélisation géométrique 3D et simulations numériques Computational Fluid Dynamics (CFD)",
      "Dimensionnement d'infrastructures réseaux résilientes et sécurisées"
    ]
  },
  {
    code: "C2",
    title: "Développer & Implémenter",
    shortDesc: "Programmation système bas-niveau, développement réseau en C/Python et POO.",
    details: "Maîtrise du développement en C sous Linux (sockets POSIX, processus légers, synchronisation thread-safe, gestion mémoire sans fuite), développement d'outils d'audit réseau en Python et programmation impérative/orientée objet.",
    color: "from-emerald-500 to-teal-500",
    projectsLinked: [
      { id: "serveur-audio-sockets", title: "Serveur C multithreadé de streaming et messagerie" },
      { id: "eportfolio-react", title: "Conception et déploiement du e-portfolio React/Vite" }
    ],
    learningOutcomes: [
      "Conception de protocoles applicatifs client-serveur sur TCP et UDP",
      "Développement système Linux avec contrôle des signaux et multiplexage d'E/S",
      "Écriture de code propre, modulaire et documenté sous Git"
    ]
  },
  {
    code: "C3",
    title: "Mesurer, Analyser & Valider",
    shortDesc: "Confrontation théorie/expérience/simulation, analyse de trames et bancs d'essais.",
    details: "Validation expérimentale rigoureuse : analyse de flux réseau sous Wireshark, mesures physiques sur banc d'essais hydraulique par tube de Pitot, analyse spectrale RF et vérification d'indicateurs de performance (TEB, débit, latence).",
    color: "from-amber-500 to-orange-500",
    projectsLinked: [
      { id: "tipe-propulsion", title: "TIPE : Mesures Pitot & Confrontation CFD" },
      { id: "chaine-sdr-telecom", title: "Validation du TEB vs bornes théoriques" },
      { id: "cyber-ctf", title: "Épreuves de Capture The Flag & BattleDev" }
    ],
    learningOutcomes: [
      "Triangulation méthodologique complète : Théorie, Expérience, Simulation",
      "Audit de conformité réseau par capture de paquets Wireshark",
      "Identification de vulnérabilités et analyse de trafic"
    ]
  },
  {
    code: "C4",
    title: "Piloter & Gérer un projet",
    shortDesc: "Gestion des exigences, collaboration d'équipe, méthodologie et restitution.",
    details: "Capacité à structurer un projet d'ingénierie, à travailler efficacement en équipe pluridisciplinaire, à respecter des jalons stricts et à vulgariser des problématiques complexes à l'écrit comme à l'oral.",
    color: "from-rose-500 to-pink-500",
    projectsLinked: [
      { id: "tipe-propulsion", title: "TIPE : Conduite d'un projet de recherche sur 2 ans" },
      { id: "archi-reseau-securisee", title: "Bureau d'études réseau en équipe" }
    ],
    learningOutcomes: [
      "Planification rigoureuse et gestion des aléas d'expérimentation",
      "Utilisation collaborative des outils de gestion de version (Git/GitHub)",
      "Présentation synthétique et percutante des résultats scientifiques"
    ]
  },
  {
    code: "C5",
    title: "Éthique, RSE & Engagement Citoyen",
    shortDesc: "Responsabilité sociétale, numérique responsable, engagement militaire et associatif.",
    details: "Sensibilité aiguë à l'impact éthique et environnemental de l'ingénieur : engagement dans la réserve militaire opérationnelle, scoutisme, sensibilisation au climat (Fresque du Climat) et lutte contre les violences sexistes et sexuelles.",
    color: "from-purple-500 to-indigo-500",
    projectsLinked: [
      { id: "engagement-scout", title: "Assistant Chef de Troupe (Scoutisme)" },
      { id: "engagement-reserve", title: "Réserve Opérationnelle de l'Armée de Terre" }
    ],
    learningOutcomes: [
      "Leadership bienveillant, pédagogie et sens du service désintéressé",
      "Gestion du stress et prise de décision dans un cadre opérationnel contraint",
      "Sensibilisation active aux enjeux climatiques et sociétaux à l'école"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "tipe-propulsion",
    title: "TIPE : Optimisation de Propulsion Navale — Hélice Carénée (Kort Nozzle)",
    subtitle: "Modélisation théorique, banc d'essai expérimental Pitot & simulations CFD SolidWorks",
    category: "tipe",
    categoryLabel: "Projet de Recherche & Modélisation (TIPE)",
    summary: "Étude approfondie de l'efficacité hydrodynamique d'une tuyère de Kort face à une hélice libre : conception 3D, banc de mesure expérimental et simulations d'écoulement numérique.",
    problematique: "Dans quelle mesure l'ajout d'une tuyère de Kort (hélice carénée) permet-il d'accroître le rendement propulsif et la poussée d'un navire à basse vitesse ou fort remorquage, face aux pertes par frottement hydrodynamique ?",
    solution: "Approche scientifique en trois volets : 1) Modélisation théorique basée sur les équations de Bernoulli et le théorème de la quantité de mouvement ; 2) Conception CAO 3D et impression d'un modèle réduit testé sur banc d'essais avec mesure de vitesse par tube de Pitot ; 3) Simulations d'écoulement CFD (SolidWorks Flow Simulation) pour confronter les champs de vitesse simulés et expérimentaux.",
    description: "Ce travail de recherche mené en CPGE a exploré l'hydrodynamique des propulseurs carénés. L'investigation théorique a établi que pour une hélice libre, l'accélération du fluide à l'infini aval est le double de celle dans le plan de l'hélice. Un banc d'essai instrumenté a ensuite été conçu afin de mesurer la vitesse d'éjection de l'eau à l'aide d'un tube de Pitot pour différentes vitesses de rotation. Les mesures ont démontré une vitesse de sortie significativement accrue avec la tuyère. Enfin, des simulations numériques d'écoulement (CFD) ont permis de cartographier les tourbillons marginaux et de confronter les données empiriques aux équations théoriques.",
    tags: ["SolidWorks", "Simulations CFD", "Mécanique des Fluides", "Impression 3D", "Tube de Pitot", "Banc d'essais", "Python"],
    context: "TIPE CPGE (Lycée Montesquieu & Descartes)",
    date: "2024 - 2025",
    highlights: [
      "Triangulation scientifique complète : Théorie (Bernoulli / Qte Mvt) ↔ Expérience (Banc Pitot) ↔ Simulation CFD.",
      "Mise en évidence du gain net de poussée à point fixe et basse vitesse pour les opérations de remorquage.",
      "Fabrication d'un banc de mesure physique et traitement des données en Python."
    ],
    metrics: [
      { label: "Méthode", value: "Théorie + Expérience + CFD" },
      { label: "Mesure physique", value: "Tube de Pitot" },
      { label: "Outil CAO/CFD", value: "SolidWorks" }
    ],
    competencies: ["C1 - Concevoir & Modéliser", "C3 - Mesurer, Analyser & Valider", "C4 - Piloter un projet"],
    githubUrl: "https://github.com/antoinec2c"
  },
  {
    id: "cyber-ctf",
    title: "Cybersécurité & Programmation Compétitive",
    subtitle: "Participation au Thales BattleDev, CTF ENSEEIHT & Club Cybersécurité",
    category: "cyber",
    categoryLabel: "Cybersécurité & Algorithmique",
    summary: "Entraînement régulier et challenges en sécurité des systèmes d'information, rétro-ingénierie, cryptographie et analyse de vulnérabilités.",
    problematique: "Comment identifier, exploiter et corriger des failles de sécurité courantes dans des environnements logiciels et réseaux concurrents ?",
    solution: "Participation aux événements de cybersécurité (CTF ENSEEIHT, Thales BattleDev) et implication active au sein du club Cybersécurité de l'école : exercices de pentesting, analyse de protocoles, reverse engineering et scripting défensif.",
    description: "Investi dans la dynamique cybersécurité de l'ENSEEIHT, je participe aux compétitions étudiantes et challenges CTF (Capture The Flag). Ces exercices pratiques couvrent la sécurité web, l'analyse forensique, l'exploitation de binaires et la cryptographie appliquée. Cette activité nourrit directement mon ambition professionnelle de devenir ingénieur spécialisé en cybersécurité des réseaux et des systèmes communicants.",
    tags: ["Cybersécurité", "CTF", "Linux", "Python", "BattleDev Thales", "Wireshark", "Reverse Engineering"],
    context: "Club Cybersécurité ENSEEIHT & Compétitions",
    date: "2024 - 2025",
    highlights: [
      "Participation active au CTF de l'ENSEEIHT axé sur des scénarios réels d'attaque/défense.",
      "Résolution d'épreuves de programmation sous contrainte de temps au Thales BattleDev.",
      "Veille continue sur les vulnérabilités CVE et les bonnes pratiques de sécurisation."
    ],
    metrics: [
      { label: "Compétitions", value: "CTF N7 & BattleDev" },
      { label: "Clubs", value: "Info & Cybersécurité N7" },
      { label: "Focus", value: "Réseaux & Sécurité" }
    ],
    competencies: ["C2 - Développer & Implémenter", "C3 - Mesurer, Analyser & Valider"],
    githubUrl: "https://github.com/antoinec2c"
  },
  {
    id: "chaine-sdr-telecom",
    title: "Chaîne de Transmission Numérique & Radio Logicielle (SDR)",
    subtitle: "Modulation QAM/QPSK, Canal AWGN avec bruit & Filtrage adapté RRC",
    category: "telecom",
    categoryLabel: "Télécoms & Signal",
    summary: "Conception complète et simulation d'une chaîne de télécommunications numériques bande de base et transposition en fréquence avec validation exacte du TEB.",
    problematique: "Comment maximiser le débit binaire et l'efficacité spectrale d'une liaison radio tout en garantissant un taux d'erreur binaire minimal en présence de bruit gaussien et d'interférences ?",
    solution: "Mise en place d'une chaîne numérique complète : mapping de constellations (BPSK, 4-QAM, 16-QAM), suréchantillonnage, filtrage de mise en forme en racine de cosinus surélevé (RRC) respectant le premier critère de Nyquist, canal AWGN, filtre adapté et décision seuil. Validation sur matériel RTL-SDR.",
    description: "Ce projet réalisé dans le cadre du cursus Télécommunications à l'ENSEEIHT a consisté à concevoir, coder et valider une chaîne d'émission-réception numérique de bout en bout. Nous avons implémenté le mapping de symboles, le suréchantillonnage, le filtrage de mise en forme garantissant le critère de Nyquist pour éliminer les IES. Le signal passe ensuite par un canal simulé avec bruit gaussien blanc additif (AWGN). En réception : filtrage adapté, synchronisation et détection par seuil avec tracé des diagrammes de l'œil et des constellations.",
    tags: ["MATLAB", "Python (NumPy / SciPy)", "Radio Logicielle (SDR)", "Filtrage RRC", "Critère de Nyquist", "GNU Radio"],
    context: "Projet Télécoms & Traitement du Signal (ENSEEIHT 2A)",
    date: "Automne 2024",
    highlights: [
      "Tracé des courbes TEB en fonction de Eb/N0 avec superposition parfaite aux bornes théoriques.",
      "Analyse spectrale interactive : mise en évidence de l'impact du roll-off sur la bande passante occupée.",
      "Expérimentation physique via clé RTL-SDR pour la capture et démodulation de signaux réels."
    ],
    metrics: [
      { label: "Modulations", value: "BPSK, 4-QAM, 16-QAM" },
      { label: "Précision TEB", value: "Conforme théorie à 10⁻⁵" },
      { label: "Outils", value: "MATLAB & GNU Radio" }
    ],
    competencies: ["C1 - Concevoir & Modéliser", "C3 - Mesurer, Analyser & Valider"],
    githubUrl: "https://github.com/antoinec2c"
  },
  {
    id: "archi-reseau-securisee",
    title: "Architecture Réseau d'Entreprise Sécurisée Multi-Sites",
    subtitle: "Routage dynamique OSPF, Segmentation VLAN, NAT/PAT & Pare-feu",
    category: "reseau",
    categoryLabel: "Réseaux & Protocoles",
    summary: "Conception, adressage VLSM et déploiement virtuel d'une infrastructure réseau multi-sites résiliente avec routage dynamique et politiques d'accès strictes.",
    problematique: "Comment interconnecter de manière sécurisée et tolérante aux pannes des sites distants et un datacenter, tout en isolant strictement les flux métiers sensibles ?",
    solution: "Découpage en zones hiérarchiques avec plan d'adressage IPv4/IPv6 VLSM, routage dynamique OSPF multi-aires, agrégation de liens EtherChannel LACP, segmentation 802.1Q, filtrage étatique par ACLs et sécurisation des switchs (Port-Security, DHCP Snooping, DAI).",
    description: "Conception d'une infrastructure réseau distribuée pour une entreprise multi-sites. Définition du plan d'adressage IP hiérarchique avec calculs VLSM, mise en œuvre du routage dynamique intra-domaine OSPF avec découpage en zones. Configuration des VLANs pour isoler les services, agrégation de liens EtherChannel et sécurisation des switchs contre l'usurpation d'adresses. Déploiement de NAT dynamique pour l'accès Internet et ACLs inter-VLAN.",
    tags: ["Cisco Packet Tracer", "GNS3", "OSPF", "VLAN / 802.1Q", "Wireshark", "Sécurité Réseau (ACLs)"],
    context: "Bureau d'Étude Réseaux & Systèmes (ENSEEIHT 2A)",
    date: "Hiver 2024",
    highlights: [
      "Temps de convergence OSPF inférieur à 1,5 seconde en cas de rupture de liaison louée.",
      "Sécurisation des ports d'accès contre les attaques par usurpation (DHCP Snooping & DAI activés).",
      "Validation de chaque règle de filtrage via captures de paquets Wireshark ciblées."
    ],
    metrics: [
      { label: "Convergence OSPF", value: "< 1.5s sur panne" },
      { label: "VLANs déployés", value: "6 segments isolés" },
      { label: "Plateforme", value: "Cisco & GNS3" }
    ],
    competencies: ["C1 - Concevoir & Modéliser", "C4 - Piloter & Gérer un projet"],
    githubUrl: "https://github.com/antoinec2c"
  },
  {
    id: "serveur-audio-sockets",
    title: "Serveur Multithreadé de Diffusion Audio & Messagerie en C",
    subtitle: "Sockets POSIX TCP/UDP, Multithreading & Synchronisation sous Linux",
    category: "dev",
    categoryLabel: "Développement Système",
    summary: "Développement en C sous Linux d'un serveur applicatif combinant contrôle TCP et streaming audio UDP concurrent sans fuite mémoire.",
    problematique: "Comment concevoir un serveur capable de diffuser des flux audio temps-réel à de nombreux clients simultanés sans latence tout en gérant les déconnexions inattendues ?",
    solution: "Architecture hybride dissociant le plan de contrôle (canal TCP fiable pour l'authentification et les échanges textuels) et le plan de données (canal UDP temps-réel avec estampillage temporel pour compenser la gigue). Synchronisation thread-safe via mutex et sémaphores POSIX.",
    description: "Développement système complet sous environnement Linux POSIX en langage C. Mise en œuvre d'une boucle d'événements multiplexée, synchronisation thread-safe pour la gestion de la liste des clients et de la file d'attente circulaire de paquets audio. Gestion rigoureuse des signaux système (SIGINT, SIGPIPE) pour une fermeture propre des ressources.",
    tags: ["Langage C", "Sockets POSIX (TCP/UDP)", "Pthreads & Mutex", "Linux API", "Wireshark", "Valgrind"],
    context: "Projet Programmation Système & Réseaux (ENSEEIHT)",
    date: "Printemps 2024",
    highlights: [
      "Support simultané de plus de 50 clients audio connectés sans dégradation sonore.",
      "Zéro fuite mémoire vérifié systématiquement sous Valgrind.",
      "Gestion robuste des pannes : détection de déconnexion inopinée et reprise sur perte UDP."
    ],
    metrics: [
      { label: "Clients simultanés", value: "50+ testés" },
      { label: "Fuites mémoire", value: "0 octet (Valgrind)" },
      { label: "Latence streaming", value: "< 25 ms" }
    ],
    competencies: ["C2 - Développer & Implémenter", "C3 - Mesurer, Analyser & Valider"],
    githubUrl: "https://github.com/antoinec2c"
  },
  {
    id: "eportfolio-react",
    title: "Conception & Déploiement du E-Portfolio d'Ingénieur",
    subtitle: "Application web réactive avec React, Vite, TypeScript & Tailwind CSS",
    category: "dev",
    categoryLabel: "Développement Web & Outillage",
    summary: "Conception et publication d'un e-portfolio moderne présentant compétences CTI, parcours, engagements citoyens et projets techniques avec dark mode natif.",
    problematique: "Comment valoriser efficacement un profil d'ingénieur auprès des recruteurs et des jurys CTI avec une interface fluide, responsive et accessible ?",
    solution: "Architecture en composants React modulaires, typage strict TypeScript, styling Tailwind CSS avec support du thème sombre/clair, boîtes de dialogue modales HTML5 accessibles et automatisation du déploiement vers GitHub Pages.",
    description: "Développement complet du site portfolio servant de vitrine professionnelle et de support de validation des compétences académiques. Intégration de la matrice CTI, des fiches projets interactives et de l'ensemble des justificatifs d'expérience.",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "GitHub Actions / Pages", "Accessibilité"],
    context: "Projet Personnel & Valorisation Professionnelle",
    date: "2025",
    highlights: [
      "Interface réactive adaptée mobile/tablette/desktop avec mode sombre automatique.",
      "Score de performance Lighthouse élevé et build statique optimisé.",
      "Déploiement continu automatisé via GitHub Pages."
    ],
    metrics: [
      { label: "Temps de build", value: "< 4 secondes" },
      { label: "Poids CSS", value: "7 kB gzippé" },
      { label: "Hébergement", value: "GitHub Pages" }
    ],
    competencies: ["C2 - Développer & Implémenter", "C4 - Piloter un projet"],
    githubUrl: "https://github.com/antoinec2c"
  }
];

export const engagements: EngagementItem[] = [
  {
    title: "Réserve Opérationnelle — Armée de Terre",
    role: "Militaire du rang / Préparation Militaire Supérieure (PMS)",
    period: "2025 - Présent",
    image: "/img/reserve.jpg",
    description: "Engagement au service de la nation au sein de la réserve opérationnelle. Développement de qualités de leadership, de discipline, de gestion du stress en situation dégradée et d'un sens profond de l'esprit d'équipe.",
    tags: ["Leadership", "Discipline", "Gestion du stress", "Cohésion", "PMS"]
  },
  {
    title: "Assistant Chef de Troupe — Scoutisme",
    role: "Animation & Pédagogie auprès des jeunes (12-17 ans)",
    period: "2025 - Présent",
    image: "/img/scout.jpg",
    description: "Encadrement, animation et transmission de valeurs au profit d'une douzaine de jeunes à Toulouse. Mise en œuvre des cinq buts du scoutisme : sens pratique, formation du caractère, sens du service, santé et spiritualité.",
    tags: ["Pédagogie", "Sens du service", "Organisation", "Animation", "Responsabilité"]
  },
  {
    title: "Sensibilisation Climat & Lutte contre les VSS (N7)",
    role: "Engagement associatif & citoyen à l'ENSEEIHT",
    period: "2024 - 2025",
    image: "/img/inclusion.jpg",
    description: "Participation à la Fresque du Climat pour la transition écologique du numérique. Acteur engagé dans la pièce de théâtre 'King Kong' afin de lutter activement contre les violences sexistes et sexuelles au sein de la vie étudiante.",
    tags: ["Fresque du Climat", "Inclusion", "Lutte VSS", "RSE", "Citoyenneté"]
  },
  {
    title: "Restauration du Patrimoine — Manoir de Blossac",
    role: "Chantier bénévole estival en Bretagne",
    period: "Étés 2024 & 2025",
    image: "/img/blossac.jpg",
    description: "Aide bénévole à la restauration du Manoir de Blossac en Bretagne suite aux inondations subies. Travail manuel exigeant, sauvegarde du patrimoine historique et démarche solidaire.",
    tags: ["Patrimoine", "Travail manuel", "Solidarité", "Bretagne"]
  },
  {
    title: "Mobilité Internationale & Randonnée",
    role: "Ouverture culturelle européenne & Dépassement de soi",
    period: "Enfance à Bruxelles & Voyages européens",
    image: "/img/brussels.jpg",
    description: "Enfance passée à Bruxelles dans un cadre multiculturel européen stimulant. Randonnées sur le Camino del Norte (Chemin de Saint-Jacques), voyages réguliers en Allemagne, Autriche et Italie. Projet de mobilité académique en Irlande (Cybersécurité) et stage dans les pays nordiques.",
    tags: ["Bruxelles", "Camino del Norte", "Irlande", "Multiculturalisme", "Autonomie"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "cyber",
    title: "Cybersécurité & Réseaux",
    iconName: "Shield",
    skills: [
      { name: "Architecture TCP/IP & Protocoles Réseaux", level: "Maîtrisé", progress: 95, description: "Modèle OSI, encapsulation, sockets, analyse de trafic approfondie" },
      { name: "Routage dynamique & Commutation (OSPF, VLAN, STP)", level: "Avancé", progress: 85, description: "Aires OSPF, EtherChannel LACP, segmentation 802.1Q, redondance L2" },
      { name: "Analyse de trames & Détection d'anomalies (Wireshark)", level: "Maîtrisé", progress: 90, description: "Inspection de paquets, filtres d'affichage experts, rétro-ingénierie protocolaire" },
      { name: "Sécurité des infrastructures (ACLs, NAT/PAT, Pare-feu)", level: "Avancé", progress: 80, description: "Filtrage étatique, sécurité des accès commutateurs (DHCP snooping, DAI)" },
      { name: "Compétitions CTF & Notions de Pentesting", level: "Intermédiaire", progress: 75, description: "Challenges web, reverse engineering de base, Thales BattleDev" },
      { name: "Outils de simulation (Cisco Packet Tracer, GNS3)", level: "Avancé", progress: 85, description: "Conception et maquettage de topologies virtuelles d'entreprises" },
    ]
  },
  {
    id: "telecom",
    title: "Télécommunications & Signal",
    iconName: "Radio",
    skills: [
      { name: "Modulations Numériques (BPSK, QPSK, 16/64-QAM)", level: "Avancé", progress: 85, description: "Constellations, filtre de mise en forme RRC, calculs analytiques de TEB" },
      { name: "Radio Logicielle (SDR) & GNU Radio", level: "Intermédiaire", progress: 75, description: "Clés RTL-SDR, USRP, analyse spectrale en temps réel" },
      { name: "Traitement Numérique du Signal (FFT, Filtrage)", level: "Avancé", progress: 85, description: "Échantillonnage de Shannon, filtres RIF/RII, corrélation, transformées" },
      { name: "Technologies sans fil (4G/5G, Wi-Fi, LoRaWAN)", level: "Intermédiaire", progress: 75, description: "Bilans de liaison RF, propagation hertzienne, protocoles radio" },
      { name: "Simulation MATLAB & Python (NumPy, SciPy)", level: "Maîtrisé", progress: 90, description: "Bancs d'essais mathématiques, analyse de signaux et calculs matriciels" },
    ]
  },
  {
    id: "dev",
    title: "Développement & Systèmes",
    iconName: "Code2",
    skills: [
      { name: "Programmation Système en C (Sockets & POSIX)", level: "Avancé", progress: 85, description: "Pointeurs, mémoire dynamique, multithreading Pthreads, mutex, signaux" },
      { name: "Python (Réseaux, Analyse, Automatisation)", level: "Maîtrisé", progress: 90, description: "Scapy, sockets réseau, scripts d'administration système" },
      { name: "Environnement Linux & Scripting Bash", level: "Avancé", progress: 85, description: "Processus, tubes IPC, outils d'administration et automatisation" },
      { name: "Bases de données & SQL", level: "Avancé", progress: 80, description: "Modélisation relationnelle, requêtes complexes, intégrité des données" },
      { name: "Git, GitHub & Intégration Continue", level: "Avancé", progress: 85, description: "Branches, revues de code, automatisation GitHub Actions" },
      { name: "CAO & Simulation Numérique (SolidWorks)", level: "Avancé", progress: 80, description: "Conception 3D et simulations d'écoulement CFD (TIPE)" },
    ]
  },
  {
    id: "soft",
    title: "Leadership, Valeurs & Soft Skills",
    iconName: "Users",
    skills: [
      { name: "Leadership & Gestion du Stress (Réserve militaire)", level: "Maîtrisé", progress: 95, description: "Prise de décision en environnement contraint, rigueur, discipline" },
      { name: "Esprit d'équipe & Sens du service (Scoutisme)", level: "Maîtrisé", progress: 95, description: "Pédagogie, animation de groupe, bienveillance et engagement" },
      { name: "Méthodologie d'Ingénieur CTI (Référentiel APC)", level: "Maîtrisé", progress: 90, description: "Analyse du besoin, modélisation, validation expérimentale et réflexivité" },
      { name: "Rigueur Mathématique & Abstraction (CPGE)", level: "Maîtrisé", progress: 90, description: "Formation approfondie en mathématiques pures et appliquées" },
      { name: "Communication & Synthèse Technique", level: "Avancé", progress: 85, description: "Rédaction de rapports d'ingénierie et présentations orales structurées" },
    ]
  }
];

export const timeline: TimelineItem[] = [
  {
    id: "stage-2a-search",
    period: "Mai - Août (12 à 16 semaines)",
    title: "Recherche active : Stage Technique Élève-Ingénieur 2A",
    institution: "Entreprise du secteur Cybersécurité / Télécoms / Réseaux",
    location: "Toulouse, France entière ou International",
    type: "experience",
    badge: "Opportunité recherchée",
    description: [
      "Objectif : Participer à des projets d'envergure en cybersécurité, résilience réseau, ingénierie des télécommunications ou développement système.",
      "Thématiques ciblées : Cybersécurité des architectures réseaux, tests d'intrusion, sécurisation des protocoles communicants, développement d'outils réseaux en C/Python.",
      "Ce que j'apporte : Solide socle scientifique (CPGE PSI* et ENSEEIHT), rigueur, sens du collectif, leadership forgé dans la réserve opérationnelle et enthousiasme à apprendre."
    ],
    skillsAcquired: ["Cybersécurité", "Réseaux IP", "C / Linux", "Leadership", "Rigueur"]
  },
  {
    id: "n7-cursus",
    period: "2025 - 2028 (Diplôme d'Ingénieur prévu en 2028)",
    title: "École d'Ingénieur en Informatique et Télécommunications",
    institution: "ENSEEIHT - Toulouse INP (N7)",
    location: "Toulouse, France",
    type: "education",
    badge: "En cours - 2ème année (Bac+4)",
    description: [
      "Grande école d'ingénieurs réputée pour son excellence dans le numérique et les télécommunications.",
      "Enseignements fondamentaux : Programmation impérative et modélisation, optimisation, probabilités & statistiques, analyse de données, architectures de processeurs, protocoles réseaux TCP/IP, télécommunications numériques.",
      "Investissement associatif : Membre du Club Cybersécurité et de l'Association Informatique de l'école."
    ],
    skillsAcquired: ["Télécoms", "Réseaux TCP/IP", "Programmation système C", "Cybersécurité", "Optimisation"]
  },
  {
    id: "cpge-tours",
    period: "2024 - 2025 (1 an)",
    title: "Classes Préparatoires aux Grandes Écoles (CPGE) — PSI",
    institution: "Lycée Descartes",
    location: "Tours, France",
    type: "education",
    badge: "Spécialité PSI",
    description: [
      "Formation intensive pluridisciplinaire axée sur les mathématiques appliquées, la physique expérimentale et les sciences de l'ingénieur.",
      "Finalisation du TIPE sur l'optimisation de propulsion navale (hélice carénée Kort Nozzle) avec mesures de vitesse par tube de Pitot et simulations CFD."
    ],
    skillsAcquired: ["Mathématiques", "Physique", "Sciences de l'ingénieur", "Python / SQL", "TIPE"]
  },
  {
    id: "cpge-lemans",
    period: "2022 - 2024 (2 ans)",
    title: "Classes Préparatoires aux Grandes Écoles (CPGE) — PCSI / PSI*",
    institution: "Lycée Montesquieu",
    location: "Le Mans, France",
    type: "education",
    badge: "Filière PCSI puis PSI*",
    description: [
      "Acquisition de méthodes de travail rigoureuses, sens de l'analyse critique et endurance face à des problèmes scientifiques complexes.",
      "Sciences de l'ingénieur, modélisation mécanique, automatique des systèmes et programmation algorithmique."
    ],
    skillsAcquired: ["Raisonnement scientifique", "Modélisation", "Automatique", "Résistance à l'effort"]
  },
  {
    id: "jobs-ete",
    period: "Étés 2021, 2022, 2023 & Juillet 2020",
    title: "Expériences Professionnelles Estivales (Paysagiste & Ouvrier Agricole)",
    institution: "Particuliers & Exploitations Agricoles",
    location: "France",
    type: "experience",
    description: [
      "Paysagisme (Étés 2021 à 2023) : Entretien complet d'espaces verts chez des particuliers, autonomie, gestion du matériel et relation client.",
      "Ouvrier agricole (Juillet 2020) : Castrage de maïs, travail physique en équipe, ponctualité et persévérance.",
      "Directeur financier en mini-entreprise (2018-2019) : Gestion du budget d'une mini-entreprise de 10 personnes."
    ],
    skillsAcquired: ["Sens de l'effort", "Autonomie", "Relation client", "Travail d'équipe"]
  }
];
