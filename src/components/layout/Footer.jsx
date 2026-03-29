import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { scrollToSection } from '../../controllers/useScrollSpy.js'

const navLinks = ['about', 'portfolio', 'experience', 'services', 'contact']
const navLabels = { about: 'À propos', portfolio: 'Portfolio', experience: 'Expérience',
                    services: 'Services', contact: 'Contact' }

const socials = [
  { icon: <FiGithub size={17} />,   href: 'https://github.com/TechDisciple13',    label: 'GitHub' },
  { icon: <FiLinkedin size={17} />, href: 'https://www.linkedin.com/in/henri-joël-denkey', label: 'LinkedIn' },
  { icon: <FiTwitter size={17} />,  href: 'https://x.com/Joel_Dky',  label: 'Twitter' },
  { icon: <FiMail size={17} />,     href: 'mailto:denkeyhenrijoel1@gmail.com', label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-14">

        {/* Main row */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center
                               text-primary text-xs font-semibold">TD</span>
              <span className="text-white font-medium tracking-tight">Tech Disciple</span>
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-5">
              Développeur web & systèmes informatiques.<br />Lomé, Togo 🇹🇬
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label}
                   className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
                              text-white/50 hover:text-white hover:border-white/50 transition-colors duration-150">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white/100
            text-xs uppercase tracking-widest mb-4 font-medium">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                  >
                    {navLabels[id]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/100 text-xs uppercase tracking-widest mb-4 font-medium">Contact</p>
            <div className="space-y-2.5">
              <a href="mailto:denkeyhenrijoel1@gmail.com"
                 className="block text-sm text-white/50 hover:text-white transition-colors duration-150">
                denkeyhenrijoel1@gmail.com
              </a>
              <a href="tel:+22896466388" className="text-sm text-white/50 hover:text-white transition-colors duration-150">
                +228 96 46 63 88
              </a>
              <p className="text-sm text-white/50">Lomé, Togo</p>
              <div className="flex items-center gap-2 pt-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-xs text-white/40">Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-4 border-t border-white/10 flex flex-col sm:flex-row justify-between
                        items-center gap-2 text-xs text-white/30">
          <p>© {year} Tech Disciple. Tous droits réservés.</p>
          <p>Made with heart by Henri-Joel Denkey</p>
        </div>
      </div>
    </footer>
  )
}
