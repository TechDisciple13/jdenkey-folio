import { FiDownload, FiCalendar, FiMapPin, FiAward, FiBook } from 'react-icons/fi'

const education = [
  {
    degree: 'Licence 3 — Informatique',
    school: 'SICC-3 — Université de Lomé',
    period: '2022 — Présent',
    location: 'Lomé, Togo',
    note: 'Spécialité : Admin Système, Dev Web, Sécurité, Python',
  },
  {
    degree: 'Baccalauréat Scientifique',
    school: 'Lycée de Lomé',
    period: '2021',
    location: 'Lomé, Togo',
    note: 'Mention Assez Bien',
  },
]

const certifications = [
  { title: 'Linux Administration', issuer: 'Auto-formation pratique', year: '2024' },
  { title: 'React & Vite Development', issuer: 'Projets personnels', year: '2024' },
  { title: 'Virtualisation Hyper-V', issuer: 'Stage IT Infrastructure', year: '2023' },
]

const competences = [
  { label: 'React / TypeScript', level: 85 },
  { label: 'PHP / MySQL', level: 80 },
  { label: 'Python', level: 75 },
  { label: 'Linux / SSH', level: 78 },
  { label: 'HTML / CSS / Tailwind', level: 90 },
  { label: 'Git / Vite', level: 82 },
]

export default function Resume() {
  return (
    <section id="resume" className="bg-white dark:bg-[#111111]">
      <div className="section-wrap">

        <p className="section-label">Résumé</p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2 className="heading-lg">
            Mon{' '}
            <span className="text-secondary dark:text-[#888] font-light italic">curriculum vitæ</span>
          </h2>

          {/* Bouton téléchargement */}
          <a
            href="/cv-tech-disciple.pdf"
            download="CV_Tech_Disciple.pdf"
            className="btn-dark self-start sm:self-auto flex-shrink-0 gap-2"
          >
            <FiDownload size={15} />
            Télécharger le CV
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ---- Colonne gauche ---- */}
          <div className="space-y-10">

            {/* Formation */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <FiBook size={15} className="text-primary dark:text-white" />
                <p className="text-sm font-medium text-primary dark:text-white uppercase tracking-widest">
                  Formation
                </p>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="card-base p-5">
                    <div className="flex flex-wrap justify-between gap-2 mb-2">
                      <h3 className="text-sm font-medium text-primary dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="flex items-center gap-1 text-xs text-secondary dark:text-[#888]">
                        <FiCalendar size={11} /> {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-secondary dark:text-[#888] mb-1 flex items-center gap-1">
                      <FiMapPin size={11} /> {edu.school} · {edu.location}
                    </p>
                    <p className="text-xs text-secondary dark:text-[#999] font-light mt-2">
                      {edu.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <FiAward size={15} className="text-primary dark:text-white" />
                <p className="text-sm font-medium text-primary dark:text-white uppercase tracking-widest">
                  Certifications
                </p>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.title}
                       className="card-base p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-primary dark:text-white">
                        {cert.title}
                      </p>
                      <p className="text-xs text-secondary dark:text-[#888] mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="tag flex-shrink-0">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Colonne droite — Compétences ---- */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <p className="text-sm font-medium text-primary dark:text-white uppercase tracking-widest">
                Niveau de maîtrise
              </p>
            </div>
            <div className="space-y-5">
              {competences.map((comp) => (
                <div key={comp.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-primary dark:text-white font-medium">
                      {comp.label}
                    </span>
                    <span className="text-xs text-secondary dark:text-[#888]">
                      {comp.level}%
                    </span>
                  </div>
                  {/* Barre de progression statique — pas d'animation */}
                  <div className="w-full h-1.5 bg-tertiary dark:bg-[#222] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary dark:bg-white rounded-full"
                      style={{ width: `${comp.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Note téléchargement */}
            <div className="mt-10 card-base p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary dark:bg-[#222] flex items-center
                              justify-center flex-shrink-0">
                <FiDownload size={18} className="text-primary dark:text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary dark:text-white mb-1">
                  Version complète disponible
                </p>
                <p className="text-xs text-secondary dark:text-[#888] font-light leading-relaxed mb-3">
                  Mon CV complet au format PDF inclut mes références, projets détaillés et lettres de motivation.
                </p>
                <a
                  href="/cv-tech-disciple.pdf"
                  download="CV_Tech_Disciple.pdf"
                  className="inline-flex items-center gap-2 text-sm font-medium
                             text-primary dark:text-white hover:opacity-70 transition-opacity"
                >
                  <FiDownload size={13} />
                  Télécharger le CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
