import { FiArrowUpRight, FiMail } from 'react-icons/fi'

export default function CTA() {
  return (
    <section id="contact" className="bg-tertiary dark:bg-[#0d0d0d]">
      <div className="section-wrap">

        <div className="bg-primary dark:bg-white rounded-3xl p-10 md:p-16
                        flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Texte */}
          <div className="flex-1">
            <p className="text-white/50 dark:text-primary/50 text-xs uppercase
                           tracking-widest mb-4 font-medium">
              Travaillons ensemble
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white dark:text-primary
                           leading-tight tracking-tight mb-4">
              Vous avez un projet ?<br />
              <span className="italic">Donnons-lui vie.</span>
            </h2>
            <p className="text-white/50 dark:text-primary/50 text-sm font-light
                           max-w-md leading-relaxed">
              Que ce soit un site web, une application ou un simple conseil technique —
              je suis disponible pour échanger sur votre idée.
            </p>
          </div>

          {/* Action */}
          <div className="flex flex-col items-start lg:items-end gap-4 flex-shrink-0">
            <a
              href="mailto:hello@techdisciple.com"
              className="inline-flex items-center gap-3 bg-white dark:bg-primary
                         text-primary dark:text-white px-7 py-4 rounded-full font-medium
                         text-sm hover:opacity-80 transition-opacity duration-150"
            >
              <FiMail size={15} />
              Envoyer un message
              <FiArrowUpRight size={15} />
            </a>
            <a
              href="mailto:hello@techdisciple.com"
              className="text-white/50 dark:text-primary/50 text-sm font-light
                         hover:text-white dark:hover:text-primary transition-colors duration-150"
            >
              hello@techdisciple.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
