import { FiArrowUpRight, FiMail, FiDownload, FiGithub, FiLinkedin, FiTwitter} from 'react-icons/fi'

const socials = [
  { icon: <FiGithub size={17} />,   href: 'https://github.com/TechDisciple13',    label: 'GitHub' },
  { icon: <FiLinkedin size={17} />, href: 'https://www.linkedin.com/in/henri-joël-denkey', label: 'LinkedIn' },
  { icon: <FiTwitter size={17} />,  href: 'https://x.com/Joel_Dky',  label: 'Twitter' },
  { icon: <FiMail size={17} />,     href: 'mailto:denkeyhenrijoel1@gmail.com', label: 'Email' },
]

export default function CTA() {
  return (
    <section id="contact" className="bg-tertiary dark:bg-[#0d0d0d]">
      <div className="section-wrap py-10 md:py-14">
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
              Que ce soit un site web, une application ou un simple conseil technique,
              je suis disponible pour échanger sur votre idée.
            </p>
          </div>

          {/* Action */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            
              <a href="/CV_Henri-Joel_Denkey.pdf"
              download="CV_Henri-Joel_Denkey.pdf"
              className="inline-flex items-center gap-3 bg-white dark:bg-primary
                         text-primary dark:text-white px-7 py-4 rounded-full font-medium
                         text-sm hover:opacity-80 transition-opacity duration-150"
              >
              <FiDownload size={15} />
              Télécharger le CV
            </a>
            
              <a href="mailto:denkeyhenrijoel1@gmail.com"
              className="inline-flex items-center gap-3 bg-white dark:bg-primary
                         text-primary dark:text-white px-7 py-4 rounded-full font-medium
                         text-sm hover:opacity-80 transition-opacity duration-150"
              >
              <FiMail size={15} />
              Envoyer un message
              <FiArrowUpRight size={15} />
            </a>

            {/* Socials */}
            <div className="flex items-center gap-2 pt-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label}
                   className="w-9 h-9 rounded-full border border-white/30 dark:border-primary/30
                              flex items-center justify-center
                              text-white/60 dark:text-primary/60
                              hover:text-white dark:hover:text-primary
                              hover:border-white/60 dark:hover:border-primary/60
                              transition-colors duration-150">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}