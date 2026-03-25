import { FiArrowUpRight, FiClock } from 'react-icons/fi'

const articles = [
  {
    id: 1,
    title: 'Comment créer une application React de A à Z en 2024',
    summary:
      'Guide complet pour démarrer un projet React moderne avec Vite, Tailwind CSS et les meilleures pratiques actuelles.',
    image: 'https://picsum.photos/seed/blog1/700/440',
    category: 'Développement',
    readTime: '8 min',
    date: 'Janvier 2025',
    href: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Bonnes pratiques en administration Linux pour les débutants',
    summary:
      'Les commandes essentielles, gestion des droits, SSH et virtualisation — tout ce qu\'un étudiant en IT doit maîtriser.',
    image: 'https://picsum.photos/seed/blog2/700/440',
    category: 'Système',
    readTime: '6 min',
    date: 'Décembre 2024',
    href: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'PHP + React : construire une API REST avec authentification JWT',
    summary:
      'Architecture backend PHP native, auth JWT sécurisée, consommation depuis React avec Axios.',
    image: 'https://picsum.photos/seed/blog3/700/440',
    category: 'Backend',
    readTime: '10 min',
    date: 'Novembre 2024',
    href: '#',
    featured: false,
  },
]

export default function Blog() {
  const featured = articles.find((a) => a.featured)
  const secondary = articles.filter((a) => !a.featured)

  return (
    <section id="blog" className="bg-white dark:bg-[#111111]">
      <div className="section-wrap">

        <p className="section-label">Blog</p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h2 className="heading-lg">
            Insights &{' '}
            <span className="text-secondary dark:text-[#888] font-light italic">
              tendances
            </span>
          </h2>
          <button className="btn-light self-start sm:self-auto flex-shrink-0 text-sm">
            Tous les articles
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* Article featured — grande card */}
          {featured && (
            <a
              href={featured.href}
              className="lg:col-span-3 card-base overflow-hidden flex flex-col group"
            >
              <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium bg-primary text-white px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-secondary dark:text-[#888]">
                    <FiClock size={11} /> {featured.readTime}
                  </span>
                  <span className="text-xs text-secondary dark:text-[#888]">{featured.date}</span>
                </div>
                <h3 className="text-lg font-medium text-primary dark:text-white mb-3
                               leading-snug group-hover:underline underline-offset-4">
                  {featured.title}
                </h3>
                <p className="text-sm text-secondary dark:text-[#888] font-light
                               leading-relaxed mb-5 flex-1">
                  {featured.summary}
                </p>
                <span className="flex items-center gap-1.5 text-sm font-medium
                                 text-primary dark:text-white">
                  Lire l'article <FiArrowUpRight size={15} />
                </span>
              </div>
            </a>
          )}

          {/* Articles secondaires */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {secondary.map((article) => (
              <a
                key={article.id}
                href={article.href}
                className="card-base flex gap-4 p-4 group"
              >
                {/* Miniature */}
                <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0
                                bg-tertiary dark:bg-[#222]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Texte */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag">{article.category}</span>
                    <span className="flex items-center gap-1 text-xs text-secondary dark:text-[#888]">
                      <FiClock size={10} /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-primary dark:text-white
                                 leading-snug group-hover:underline underline-offset-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-secondary dark:text-[#888] mt-1 font-light">
                    {article.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
