import { projects, categories } from '../../models/projects.js'
import { useFilter } from '../../controllers/useFilter.js'
import ProjectCard from '../ui/ProjectCard.jsx'

export default function Portfolio() {
  const { active, setActive, filtered } = useFilter(projects)

  return (
    <section id="portfolio" className="bg-tertiary dark:bg-[#0d0d0d]">
      <div className="section-wrap">

        <p className="section-label">Portfolio</p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h2 className="heading-lg">
            Des idées transformées en{' '}
            <span className="text-secondary dark:text-[#888] font-light italic">projets</span>
          </h2>
          <p className="text-secondary dark:text-[#888] text-sm font-light max-w-md">
            Une sélection de projets réalisés pour apprendre, expérimenter et répondre à des besoins concrets.</p>

          {/* Filtre */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors duration-150
                  ${active === cat.id
                    ? 'bg-primary dark:bg-white text-white dark:text-primary'
                    : 'bg-white dark:bg-[#1a1a1a] text-secondary dark:text-[#888] border border-[#ebebeb] dark:border-[#2a2a2a]'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-secondary dark:text-[#888] py-16 text-sm">
            Aucun projet dans cette catégorie.
          </p>
        )}
      </div>
    </section>
  )
}
