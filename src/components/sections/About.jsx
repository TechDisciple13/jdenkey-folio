import { FiCheck } from 'react-icons/fi'

const skillGroups = [
  { category: 'Frontend',  items: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
  { category: 'Backend',   items: ['PHP', 'Python', 'MySQL'] },
  { category: 'Système',   items: ['Linux', 'Virtualisation', 'SSH', 'Réseau'] },
  { category: 'Outils',    items: ['Git', 'Vite', 'Figma', 'Excel/VBA'] },
]

const highlights = [
  'Développement d\'applications web complètes (frontend + backend)',
  'Administration systèmes Linux et gestion de réseaux',
  'Passionné par les projets innovants et l\'IA',
  'Ouvert à la collaboration et au travail en équipe',
]

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-[#111111]">
      <div className="section-wrap">

        <p className="section-label">À propos</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Bio */}
          <div>
            <h2 className="heading-lg mb-6">
              Développeur web &<br />
              <span className="text-secondary dark:text-[#888] font-light italic">
                passionné des systèmes informatiques
              </span>
            </h2>

            <p className="text-secondary dark:text-[#888] leading-relaxed mb-5 font-light text-sm">
              Je suis Henri-Joel Denkey, étudiant en Licence 3 Informatique à Lomé, Togo.
              Je combine créativité technique et rigueur systémique, je developpe des 
              solutions aux besoins des utilisateurs, de l'interface jusqu'au serveur.
            </p>

            <p className="text-secondary dark:text-[#888] leading-relaxed mb-8 font-light text-sm">
              Avec une expérience en développement web, administration réseau,
              je m'adapte vite et j'aime relever des défis techniques.
            </p>

            {/* Points forts */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-secondary dark:text-[#888]">
                  <FiCheck className="text-primary dark:text-white mt-0.5 flex-shrink-0" size={13} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Metric */}
          </div>

          {/* Right — Compétences */}
          <div>
            <p className="text-xs font-medium text-primary dark:text-white tracking-widest uppercase mb-5">
              Compétences techniques
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillGroups.map((group) => (
                <div key={group.category} className="card-base p-5">
                  <p className="section-label mb-3">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
