import { useState, useEffect } from 'react'

/**
 * CONTROLLER — Scroll vers une section
 */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/**
 * CONTROLLER — Détecte si la page a scrollé
 */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
