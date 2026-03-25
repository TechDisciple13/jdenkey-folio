import { experiences } from '../../models/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-[#111111]">
      <div className="section-wrap">

        <p className="section-label">Expérience</p>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left — Titre */}
          <div className="lg:w-72 flex-shrink-0">
            <h2 className="heading-lg mb-4">
              Mon parcours
              <br />
              <span className="text-secondary dark:text-[#888] font-light italic">
                professionnel
              </span>
            </h2>
            <p className="text-sm text-secondary dark:text-[#888] font-light leading-relaxed">
              Formations, stages et missions réalisés au fil de mon développement
              en tant que technicien et développeur.
            </p>
          </div>

          {/* Right — Timeline */}
          <div className="flex-1 relative">

            {/* Ligne verticale */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#ebebeb] dark:bg-[#222] hidden sm:block" />

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="sm:pl-8 relative">

                  {/* Point timeline */}
                  <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full
                                  bg-primary dark:bg-white -translate-x-[5px] hidden sm:block" />

                  <div className="card-base p-6">

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-medium text-primary dark:text-white text-sm">
                          {exp.role}
                        </h3>
                        <p className="text-xs text-secondary dark:text-[#888] mt-1">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-secondary dark:text-[#888] bg-tertiary
                                         dark:bg-[#222] px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="text-xs text-green-500 font-medium">● En cours</span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-secondary dark:text-[#888] font-light
                                  leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
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
