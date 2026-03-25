import { FiArrowDown } from 'react-icons/fi'
import { scrollToSection } from '../../controllers/useScrollSpy.js'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 bg-white dark:bg-[#111111] flex items-center">
      <div className="section-wrap w-full flex flex-col md:flex-row items-center gap-12">

        {/* Left — Content */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Stats */}
          <div className="flex items-center gap-8 mb-10">
            <div>
              <p className="text-2xl font-light text-primary dark:text-white">+5</p>
              <p className="text-xs text-secondary mt-0.5 tracking-wide">Projets réalisés</p>
            </div>
            <div className="w-px h-8 bg-[#ebebeb] dark:bg-[#333]" />
            <div>
              <p className="text-2xl font-light text-primary dark:text-white">+15</p>
              <p className="text-xs text-secondary mt-0.5 tracking-wide">Clients satisfaits</p>
            </div>
          </div>

          {/* Title */}
          <h1 className="heading-xl mb-4">Hello</h1>

          {/* Subtitle */}
          <p className="text-secondary dark:text-[#aaa] text-sm mb-6">
            — Tech Disciple, développeur web & systèmes
          </p>

          {/* Description */}
          <p className="text-secondary dark:text-[#888] text-base font-light leading-relaxed max-w-md mb-10">
            Étudiant en informatique à Lomé, Togo. Je conçois et développe des applications
            web modernes, des interfaces soignées et des solutions systèmes robustes.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mb-14">
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

        {/* Right — Portrait */}
        <div className="hidden md:block flex-shrink-0 w-[340px] lg:w-[400px] relative">
          <div className="rounded-3xl overflow-hidden bg-tertiary dark:bg-[#1a1a1a]">
            {/* Remplace src par ta vraie photo : src="/images/photo.jpg" */}
            <img
              src="https://picsum.photos/seed/portrait/400/540"
              alt="Tech Disciple — Développeur Web"
              className="w-full h-[500px] object-cover object-top"
              loading="eager"
            />
          </div>

          {/* Badge disponibilité */}
          <div className="absolute bottom-6 left-6 bg-white dark:bg-[#1a1a1a] rounded-2xl px-5 py-4
                          shadow-lg border border-[#ebebeb] dark:border-[#2a2a2a]">
            <p className="text-xs text-secondary dark:text-[#888] mb-1">Disponible pour</p>
            <p className="text-sm font-medium text-primary dark:text-white">Freelance & Stages</p>
          </div>
        </div>
      </div>
    </section>
  )
}
