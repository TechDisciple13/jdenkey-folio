/**
 * MODEL — Projets
 * Remplace les images par tes vraies captures (src="/images/nom.jpg")
 */
export const projects = [
  {
    id: 1,
    title: 'SnapTag',
    description:
      'Application de partage de photos avec authentification JWT, backend PHP natif et frontend React. Upload, tagging et profils utilisateurs.',
    image: 'https://picsum.photos/seed/snaptag/600/380',
    category: 'realise',
    tags: ['PHP', 'React', 'MySQL', 'JWT'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Bison Elevate',
    description:
      'Site web multilingue pour un espace de coworking et incubateur au Togo. Support FR/EN dynamique via Context API.',
    image: 'https://picsum.photos/seed/bison/600/380',
    category: 'realise',
    tags: ['React', 'TypeScript', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Logistics Tracker',
    description:
      'Outil de suivi logistique pour les déclarations BOE à Tema Port (Ghana). Données consolidées, formules dynamiques et graphiques.',
    image: 'https://picsum.photos/seed/logistics/600/380',
    category: 'realise',
    tags: ['Excel', 'VBA', 'Analyse de données'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Voice AI Companion',
    description:
      'Assistant vocal pour l\'apprentissage des langues FR/EN. Prototype sur Raspberry Pi : Google STT, Whisper, Claude API.',
    image: 'https://picsum.photos/seed/voiceai/600/380',
    category: 'encours',
    tags: ['Python', 'Raspberry Pi', 'Claude API'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Ce Portfolio',
    description:
      'Portfolio personnel développé avec React et Vite. Design minimaliste, responsive, SEO optimisé.',
    image: 'https://picsum.photos/seed/portfolio/600/380',
    category: 'encours',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: '#',
    github: '#',
  },
]

export const categories = [
  { id: 'all',     label: 'Tous' },
  { id: 'realise', label: 'Réalisés' },
  { id: 'encours', label: 'En cours' },
]
