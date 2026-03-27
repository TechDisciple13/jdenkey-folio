/**
 * MODEL — Projets
 */
export const projects = [
  {
    id: 1,
    title: 'Axen-Noir',
    description:
      'Axen Noir est une entreprise opérant au Togo et au Niger, spécialisée dans le marketing, la communication, l\'impression, l\'événementiel et la logistique.',
    image: '/images/axennoirhero.png',
    category: 'realise',
    tags: ['React','TypeScript','Tailwind'],
    link: 'https://axennoir-website.vercel.app/',
  },
  {
    id: 2,
    title: 'Bison Coworking-Space ',
    description: 
      'Site web pour un espace de coworking et incubateur au Togo.',
    image: '/images/bisonhero.png',
    category: 'realise',
    tags: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://bison-incubateur.vercel.app/',
  },
  {
    id: 3,
    title: 'OS228',
    description:'Welcome to the platform that brings together open source projects from Togo as part of Hacktoberfest 2025. Discover, contribute and participate in the Togolese technological ecosystem.',
    image: '/images/os228.png',
    category:'contribute',
    tags: ['Typescript', 'React', 'Tailwind CSS'],
    link: 'https://os228.vercel.app/',
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
  },
  {
    id: 5,
    title: 'Ce Portfolio',
    description:
      'Portfolio personnel développé avec React et Vite. Design minimaliste, responsive, SEO optimisé.',
    image: '/images/portfolio.png',
    category: 'encours',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: '#',
    
  },
]

export const categories = [
  { id: 'all',     label: 'Tous' },
  { id: 'realise', label: 'Réalisés' },
  { id: 'encours', label: 'En cours' },
  { id: 'contribute', label: 'À contribuer' }
]
