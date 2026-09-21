# 🎓 E-Portfolio Élève-Ingénieur ENSEEIHT (Télécommunications & Réseaux)

Ce projet est un site web **e-portfolio professionnel et académique** développé avec **React**, **TypeScript**, **Vite** et **Tailwind CSS**. Il est spécialement calibré pour un élève-ingénieur en 2ème année à l'**ENSEEIHT - Toulouse INP** (filière Informatique & Télécommunications / Sciences du Numérique).

---

## 🚀 Fonctionnalités & Structure

- **En-tête & Navigation intelligente** : Liens d'ancrage avec détection automatique de la section active lors du défilement, bascule fluide Mode Sombre / Mode Clair (Dark/Light mode avec mémorisation `localStorage`), bouton d'accès rapide au CV.
- **Hero Section (Ingénierie)** : Présentation synthétique avec badges officiels, badge d'alerte recruteurs pour la recherche de stage 2A, terminal interactif d'ingénieur stylisé et liens rapides (GitHub, LinkedIn, Email).
- **À propos & Piliers** : Présentation du profil d'ingénieur, mise en valeur de la formation ENSEEIHT et des 3 piliers d'excellence (Télécoms & Signal, Architectures Réseaux IP, Développement Système & IoT).
- **Matrice de Compétences** : Filtrage interactif par catégorie avec barres de progression, niveaux de maîtrise et explications concrètes sur chaque savoir-faire.
- **Showcase Projets & Fiches Détaillées** : Cartes filtrables avec métriques clés et **boîtes de dialogue modales complètes** (balise HTML5 native `<dialog>` accessible au clavier et au clic extérieur) détaillant problématique, solution technique, compétences CTI et liens GitHub.
- **Référentiel CTI / Approche Par Compétences (APC)** : Section dédiée à la valorisation des 5 macro-compétences d'ingénieur certifiées par la Commission des Titres d'Ingénieur (C1 à C5) avec liens vers les projets preuves.
- **Parcours Académique & Expériences** : Chronologie interactive valorisant la CPGE, l'intégration à l'ENSEEIHT, le stage 1A et l'encadré dédié au stage 2A recherché.
- **Espace Contact & Recruteurs** : Encadré synthétique rappelant les modalités de stage (durée 12-16 semaines, conventions Toulouse INP), bouton de copie en un clic de l'email et formulaire interactif.

---

## 🛠️ Stack Technique

- **Framework** : [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool** : [Vite](https://vitejs.dev/) (démarrage instantané et build de production optimisé)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/) avec support natif `dark:`
- **Iconographie** : [Lucide React](https://lucide.dev/) + Composants SVG vectoriels
- **Typographie** : Polices Google Fonts *Inter* et *Fira Code*

---

## 🧑‍💻 Personnaliser vos Informations

Toutes les données du portfolio sont centralisées dans un seul fichier facile à éditer :

👉 [`src/data/portfolioData.ts`](file:///home/ajcha/projets/portfolio/src/data/portfolioData.ts)

Vous pouvez y modifier en quelques minutes :
1. **Identité & Contacts** (`personalInfo`) :
   - Votre nom et prénom
   - Vos liens LinkedIn et GitHub
   - Votre adresse email et téléphone
   - Vos dates et critères de stage
2. **Projets** (`projects`) :
   - Ajouter vos propres projets scolaires, TP ou projets personnels
   - Modifier les descriptifs, métriques et tags
3. **Compétences** (`skillCategories`) :
   - Ajuster les niveaux et compétences selon vos points forts
4. **Fichier CV** :
   - Déposez votre CV PDF dans le dossier `public/` (par exemple `public/mon_cv.pdf`) et mettez à jour le champ `cvFile` dans `portfolioData.ts`.

---

## 💻 Commandes Disponibles

Dans le dossier du projet :

```bash
# Lancer le serveur de développement en local
npm run dev

# Compiler pour la production (TypeScript + Vite)
npm run build

# Prévisualiser la version de production en local
npm run preview
```

---

## 🌐 Déploiement Gratuit (ex: GitHub Pages)

Le site est entièrement statique une fois compilé (`dist/`). Vous pouvez l'héberger gratuitement sur **GitHub Pages**, **Vercel** ou **Netlify**.

### Déploiement sur GitHub Pages avec `gh-pages` :
1. Installez le paquet :
   ```bash
   npm install -D gh-pages
   ```
2. Ajoutez dans `package.json` :
   ```json
   "homepage": "https://<votre-compte-github>.github.io/<nom-du-repo>/",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Déployez :
   ```bash
   npm run deploy
   ```
