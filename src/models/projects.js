/**
 * MODEL — Projets
 * Remplace les images par tes vraies captures (src="/images/nom.jpg")
 */
export const projects = [
  {
    id: 1,
    title: 'Axen-Noir',
    description:
      'Axen Noir est une entreprise opérant au Togo et au Niger, spécialisée dans le marketing, la communication, l\'impression, l\'événementiel et la logistique.',
    image: '/src/images/axennoirhero.png',
    category: 'realise',
    tags: ['React','TypeScript','Tailwind'],
    link: 'https://axennoir-website.vercel.app/',
    github: '#',
  },
  {
    id: 2,
    title: 'Bison Coworking-Space ',
    description: 
      'Site web pour un espace de coworking et incubateur au Togo.',
    image: '/src/images/bisonhero.png',
    category: 'realise',
    tags: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://bison-incubateur.vercel.app/',
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
