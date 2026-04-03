import { FiDownload,} from "react-icons/fi"

const skillGroups = [
  { category: "Frontend",  items: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS"] },
  { category: "Backend",   items: ["PHP", "Python", "MySQL"] },
  { category: "Système",   items: ["Linux", "SSH", "Réseau"] },
  { category: "Outils",    items: ["Git", "Vite", "Figma", "Excel/VBA"] },
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
              Fullstack & sécurité <br />
              <span className="text-secondary dark:text-[#888] font-light italic">
                de l'interface au système
              </span>
            </h2>

            <p className="text-secondary dark:text-[#888] leading-relaxed mb-5 font-light text-sm">
              Je suis Henri-Joel Denkey, développeur web fullstack.
              Mon expertise couvre l'ensemble de la chaîne de développement : conception
              d'interfaces React performantes, développement backend PHP/Python,
              et sécurisation des applications et systèmes.
            </p>

            <p className="text-secondary dark:text-[#888] leading-relaxed mb-8 font-light text-sm">
              Avec une solide expérience en administration système Linux,
              configuration réseau et cybersécurité, j'apporte une vision
              technique complète à chaque projet.
            </p>

            {/* Bouton CV */}
            <a
              href="/CV_Henri-Joel_Denkey.pdf"
              download="CV_Henri-Joel_Denkey.pdf"
              className="inline-flex items-center gap-2 btn-dark"
            >
              <FiDownload size={15} />
              Télécharger le CV
            </a>
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
