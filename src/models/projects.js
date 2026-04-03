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
      'PLUS QU\'UN ESPACE,UN TREMPLIN POUR VOS AMBITIONS. Incubation • Coworking • Bureaux Privés • Salles de RéunionInternet fiable • Groupe électrogène • Communauté d\'entrepreneurs',
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
    github: 'https://github.com/Docteur-Parfait/os228',
  },
  {
    id: 4,
    title: 'GesEvent',
    description:'Application de gestion d\'évènements pour les organisateurs. Publication des phots d\'évènements; pour éviter le chevauchments des évènements, les organisateurs peuvent consulter le calendrier des évènements avant de publier le leur.',
    image: '/images/gesevent.png',
    category: 'encours',
    tags: ['React', 'PHP', 'MySQL'],
    link: '#',
  },

  {
    id: 6,
    title: 'Voice AI Companion',
    description:
      'Assistant vocal pour l\'apprentissage des langues FR/EN. Prototype sur Raspberry Pi : Google STT, Whisper, Claude API.',
    image: 'https://picsum.photos/seed/voiceai/600/380',
    category: 'encours',
    tags: ['Python', 'Raspberry Pi', 'Claude API'],
    link: '#',
  },
]

export const categories = [
  { id: 'all',     label: 'Tous' },
  { id: 'realise', label: 'Réalisés' },
  { id: 'encours', label: 'En cours' },
  { id: 'contribute', label: 'À contribuer' }
]
