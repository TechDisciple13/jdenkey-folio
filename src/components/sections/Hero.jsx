import { FiArrowDown } from 'react-icons/fi'
import { scrollToSection } from '../../controllers/useScrollSpy.js'

export default function Hero() {
  return (
    <section id="home" className="bg-white dark:bg-[#111111]">
      {/* pt-16 = hauteur navbar fixe, pas de padding vertical additionnel */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 pt-16 flex flex-col md:flex-row items-stretch min-h-screen gap-0">

        {/* Left — Content */}
        <div className="flex-1 flex flex-col justify-center py-12 md:py-20 pr-0 md:pr-12">

          {/* Stats */}
          <div className="flex items-center gap-8 mb-8">
            <div>
              <p className="text-2xl font-light text-primary dark:text-white">+5</p>
              <p className="text-xs text-secondary dark:text-[#888] mt-0.5 tracking-wide">Projets réalisés</p>
            </div>
            <div className="w-px h-8 bg-[#ebebeb] dark:bg-[#333]" />
            <div>
              <p className="text-2xl font-light text-primary dark:text-white">+15</p>
              <p className="text-xs text-secondary dark:text-[#888] mt-0.5 tracking-wide">Clients satisfaits</p>
            </div>
          </div>

          {/* Title */}
          <h1 className="heading-xl mb-3">Hello</h1>

          {/* Subtitle */}
          <p className="text-secondary dark:text-[#aaa] text-sm mb-5">
            — Henri-Joel Denkey, développeur web.
          </p>

          {/* Description */}
          <p className="text-secondary dark:text-[#888] text-base font-light leading-relaxed max-w-md mb-8">
            Étudiant en informatique à Lomé, Togo. Je conçois et développe des applications
            web modernes, des interfaces soignées et des solutions systèmes informatiques.</p>

          {/* Photo mobile — visible uniquement sur petit écran */}
          <div className="md:hidden mb-8 rounded-2xl overflow-hidden bg-tertiary dark:bg-[#1a1a1a] relative">
            <img
              src="/src/assets/JOfolio.jpeg"
              alt="Henri-Joel Denkey — Développeur Web"
              className="w-full h-60 object-cover object-top"
              loading="eager"
            />
            <div className="absolute bottom-4 left-4 bg-white dark:bg-[#1a1a1a] rounded-xl px-4 py-2.5
                            shadow-md border border-[#ebebeb] dark:border-[#2a2a2a]">
              <p className="text-xs text-secondary dark:text-[#888]">Disponible pour</p>
              <p className="text-sm font-medium text-primary dark:text-white">Freelance & Remote Work</p>
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

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2 text-xs text-secondary dark:text-[#666]
                       hover:text-primary dark:hover:text-white transition-colors duration-150 w-fit"
          >
            <FiArrowDown size={13} />
            Scroll down
          </button>
        </div>

        {/* Right — Portrait desktop uniquement */}
        <div className="hidden md:flex flex-shrink-0 w-[320px] lg:w-[380px] items-stretch relative">
          <div className="w-full rounded-3xl overflow-hidden bg-tertiary dark:bg-[#1a1a1a] relative my-8">
            <img
              src="/images/techdisciple.jpeg"
              alt="Henri-Joel Denkey — Développeur Web"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            {/* Badge disponibilité */}
            <div className="absolute bottom-6 left-6 bg-white dark:bg-[#1a1a1a] rounded-2xl px-5 py-4
                            shadow-lg border border-[#ebebeb] dark:border-[#2a2a2a]">
              <p className="text-xs text-secondary dark:text-[#888] mb-1">Disponible pour</p>
              <p className="text-sm font-medium text-primary dark:text-white">Freelance & Remote Work </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
