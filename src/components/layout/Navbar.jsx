import { useState } from 'react'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { useScrolled, scrollToSection } from '../../controllers/useScrollSpy.js'

const navLinks = [
  { label: 'À propos',   id: 'about' },
  { label: 'Portfolio',  id: 'portfolio' },
  { label: 'Expérience', id: 'experience' },
  { label: 'Services',   id: 'services' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(20)

  const handleNav = (id) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300
        bg-white dark:bg-[#111111]
        ${scrolled ? 'shadow-sm border-b border-[#ebebeb] dark:border-[#222]' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5"
          aria-label="Retour en haut"
        >
          <span className="w-8 h-8 bg-primary dark:bg-white rounded-full flex items-center justify-center
                           text-white dark:text-primary text-xs font-semibold select-none">
            TD
          </span>
          <span className="hidden sm:block text-sm font-medium text-primary dark:text-white tracking-tight">
            Tech Disciple
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-sm text-secondary dark:text-[#aaa] hover:text-primary dark:hover:text-white
                         transition-colors duration-150 font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-secondary dark:text-[#aaa] hover:text-primary
                       dark:hover:text-white hover:bg-tertiary dark:hover:bg-[#222] transition-colors duration-150"
            aria-label="Basculer le thème"
          >
            {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="btn-dark"
          >
            Me contacter
          </button>
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-secondary dark:text-[#aaa]"
            aria-label="Thème"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-primary dark:text-white"
            aria-label="Menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#111111] border-t border-[#ebebeb] dark:border-[#222]
                        px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left py-3 text-sm text-secondary dark:text-[#aaa]
                         hover:text-primary dark:hover:text-white font-medium
                         border-b border-[#f0f0f0] dark:border-[#222] last:border-0"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => handleNav('contact')}
              className="btn-dark w-full justify-center"
            >
              Me contacter
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
