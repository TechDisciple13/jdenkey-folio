import { useState, useEffect } from 'react'

/**
 * CONTROLLER — Gestion du dark mode
 * Persiste la préférence dans localStorage
 */
export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    // Si l'utilisateur n'a jamais changé le thème → dark par défaut
    if (saved !== null) return saved === 'true'
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    darkMode ? root.classList.add('dark') : root.classList.remove('dark')
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  return { darkMode, setDarkMode }
}
