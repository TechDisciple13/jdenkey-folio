import { FiArrowDown } from 'react-icons/fi'
import { scrollToSection } from '../../controllers/useScrollSpy.js'

export default function Hero() {
  return (
    <section id="home" className="bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-14 pt-16 flex flex-col md:flex-row items-stretch min-h-screen gap-0">

        {/* Left — Content */}
        <div className="flex-1 flex flex-col justify-center py-12 md:py-20 pr-0 md:pr-12">
          {/* Title */}
          <h1 className="heading-xl mb-4">Henri-Joel<br />DENKEY</h1>

          {/* Subtitle */}
          <p className="text-secondary dark:text-[#aaa] text-lg font-light mb-5 max-w-md leading-snug">
            Développeur web fullstack.
              Mon expertise couvre l'ensemble de la chaîne de développement : conception
              d'interfaces React performantes, développement backend PHP/Python,
              et sécurisation des applications et systèmes.
            Je construis des applications web robustes et sécurisées
            du frontend soigné jusqu'à l'infrastructure système.
          </p>

          {/* Description SEO */}
          <p className="text-secondary dark:text-[#888] text-sm font-light leading-relaxed max-w-md mb-10">
            Spécialisé en développement React, PHP et sécurité des systèmes,
            j'interviens sur des projets web complets avec une approche centrée
            sur la performance, la fiabilité et l'expérience utilisateur.
          </p>

          {/* Photo mobile */}
          <div className="md:hidden mb-8 rounded-2xl overflow-hidden bg-tertiary dark:bg-[#1a1a1a] relative">
            <img
              src="/images/techdisciple.png"
              alt="Henri-Joel Denkey — Développeur Web Fullstack Lomé Togo"
              className="w-full h-60 object-cover object-top"
              loading="eager"
            />
            <div className="absolute bottom-4 left-4 bg-white dark:bg-[#1a1a1a] rounded-xl px-4 py-2.5
                            shadow-md border border-[#ebebeb] dark:border-[#2a2a2a]">
              <p className="text-xs text-secondary dark:text-[#888]">Disponible pour</p>
              <p className="text-sm font-medium text-primary dark:text-white">Freelance & Remote</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button onClick={() => scrollToSection('contact')} className="btn-dark">
              Me contacter
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="btn-light">
              Voir mes projets
            </button>
          </div>

          {/* Scroll */}
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2 text-xs text-secondary dark:text-[#666]
                       hover:text-primary dark:hover:text-white transition-colors duration-150 w-fit"
          >
            <FiArrowDown size={13} />
            Scroll down
          </button>
        </div>

        {/* Right — Portrait desktop */}
        <div className="hidden md:flex flex-shrink-0 w-[320px] lg:w-[380px] items-stretch relative">
          <div className="w-full rounded-3xl overflow-hidden bg-tertiary dark:bg-[#1a1a1a] relative my-8">
            <img
              src="/images/techdisciple.png"
              alt="Henri-Joel Denkey — Développeur Web Fullstack Lomé Togo"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute bottom-6 left-6 bg-white dark:bg-[#1a1a1a] rounded-2xl px-5 py-4
                            shadow-lg border border-[#ebebeb] dark:border-[#2a2a2a]">
              <p className="text-xs text-secondary dark:text-[#888] mb-1">Disponible pour</p>
              <p className="text-sm font-medium text-primary dark:text-white">Freelance & Remote</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
