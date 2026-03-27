Henri-Joel Denkey — Portfolio 

Portfolio personnel, design minimaliste noir/blanc/gris.
Stack : React 18 · Vite 5 · Tailwind CSS 3 · React Icons

---

## Lancement

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build production → /dist
npm run preview    # preview du build
```

---

## Structure MVC

```
src/
├── models/                    ← DONNÉES (Model)
│   ├── projects.js            ← Liste des projets + catégories
│   └── experience.js          ← Expériences professionnelles
│
├── controllers/               ← LOGIQUE (Controller)
│   ├── useDarkMode.js         ← Gestion dark mode + localStorage
│   ├── useScrollSpy.js        ← Scroll vers section + détection scroll
│   └── useFilter.js           ← Filtre projets par catégorie
│
├── views/                     ← PAGE PRINCIPALE (View)
│   └── Home.jsx               ← Assemble Navbar + sections + Footer
│
├── components/
│   ├── layout/                ← Composants de mise en page
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/              ← Sections de la page
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Experience.jsx
│   │   ├── Services.jsx
│   │   ├── Blog.jsx
│   │   └── CTA.jsx
│   └── ui/                    ← Composants réutilisables
│       └── ProjectCard.jsx
│
├── styles/
│   └── index.css              ← Tailwind + classes globales
├── App.jsx                    ← Root + dark mode state
└── main.jsx                   ← Entry point
```

---

## Personnalisation rapide

### 1. Ta photo de profil
Dans `src/components/sections/Hero.jsx`, remplace :
```jsx
src="https://picsum.photos/seed/portrait/400/540"
```
Par :
```jsx
src="/images/photo.jpg"   // place ton image dans /public/images/
```

### 2. Tes projets
Modifie `src/models/projects.js` — champs disponibles :
```js
{
  id:          1,
  title:       'Nom du projet',
  description: 'Description courte...',
  image:       '/images/projet.jpg',
  category:    'realise',   // ou 'encours'
  tags:        ['React', 'PHP'],
  link:        'https://...',
  github:      'https://github.com/...',
}
```

### 3. Tes expériences
Modifie `src/models/experience.js` de la même façon.

### 4. Ton email
Cherche `hello@techdisciple.com` dans tous les fichiers et remplace.

### 5. Tes réseaux sociaux
Dans `src/components/layout/Footer.jsx`, mets à jour les `href` des socials.

---

## Déploiement

### Vercel (recommandé — gratuit)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Glisse le dossier /dist sur netlify.com/drop
```

---

© Tech Disciple — Lomé, Togo 🇹🇬
