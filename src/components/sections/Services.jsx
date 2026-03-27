import { FiCode, FiLayout, FiSettings, FiZap } from 'react-icons/fi'

const services = [
  {
    icon: <FiCode size={20} />,
    title: 'Développement Web',
    description:
      'Applications web full-stack modernes. Frontend React, backend PHP/Python, base de données MySQL et APIs REST.',
    points: ['React / Vite', 'PHP & Python', 'MySQL'],
  },
  {
    icon: <FiLayout size={20} />,
    title: 'UI/UX Design',
    description:
      'Interfaces utilisateur élégantes, intuitives et responsive. Design system cohérent, maquettes Figma et prototypage rapide.',
    points: ['Figma & Tailwind', 'Design system'],
  },
  {
    icon: <FiSettings size={20} />,
    title: 'Admin Système',
    description:
      'Administration Linux, virtualisation Hyper-V/VMware, configuration réseau, sécurité des systèmes et accès SSH.',
    points: ['Linux (CentOS, Kali)', 'Virtualisation', 'Réseau & SSH'],
  },
  {
    icon: <FiZap size={20} />,
    title: 'Performance & SEO',
    description:
      'Optimisation des performances web, SEO technique, Core Web Vitals. Lazy loading, minification et accessibilité.',
    points: ['Core Web Vitals', 'SEO technique', 'Accessibilité'],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-tertiary dark:bg-[#0d0d0d]">
      <div className="section-wrap">

        <p className="section-label">Services</p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h4 className="heading-lg">
            Des solutions complètes adaptées à vos besoins d'entreprise
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div key={service.title} className="card-base p-6 flex flex-col gap-4">

              {/* Icône */}
              <div className="w-10 h-10 rounded-xl bg-tertiary dark:bg-[#222]
                              flex items-center justify-center text-primary dark:text-white">
                {service.icon}
              </div>

              {/* Titre */}
              <h3 className="font-medium text-primary dark:text-white text-sm">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-secondary dark:text-[#888] font-light
                            leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Points */}
              <ul className="space-y-2 pt-3 border-t border-[#ebebeb] dark:border-[#2a2a2a]">
                {service.points.map((point) => (
                  <li key={point}
                      className="text-xs text-secondary dark:text-[#888] flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary dark:bg-white rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
