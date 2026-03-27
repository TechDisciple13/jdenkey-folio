import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  const { title, description, image, tags, link, github, category } = project

  return (
    <article className="card-base overflow-hidden flex flex-col">

      {/* Image */}
      <div className="relative overflow-hidden bg-tertiary dark:bg-[#222]" style={{ aspectRatio: '16/10' }}>
        <img
          src={image}
          alt={`Aperçu du projet ${title}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Badge */}
        <span className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-medium
  ${category === 'encours'
    ? 'bg-primary text-white dark:bg-white dark:text-primary'
    : category === 'contribute'
    ? 'bg-green-600 text-white'
    : 'bg-white/90 text-primary'}`}
>
  {category === 'encours'
    ? 'En cours'
    : category === 'contribute'
    ? 'À contribuer'
    : 'Réalisé'}
</span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-base font-medium text-primary dark:text-white mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-secondary dark:text-[#888] font-light leading-relaxed flex-1 mb-4">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4
                        border-t border-[#ebebeb] dark:border-[#2a2a2a]">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-primary dark:text-white
                       hover:opacity-70 transition-opacity duration-150"
          >
            Voir projet <FiExternalLink size={13} />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub — ${title}`}
            className="p-2 text-secondary dark:text-[#888] hover:text-primary dark:hover:text-white
                       hover:bg-tertiary dark:hover:bg-[#222] rounded-lg transition-colors duration-150"
          >
            <FiGithub size={16} />
          </a>
        </div>
      </div>
    </article>
  )
}
