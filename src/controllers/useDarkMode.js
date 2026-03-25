import { useState, useEffect } from 'react'

/**
 * CONTROLLER — Gestion du dark mode
 * Persiste la préférence dans localStorage
 */
export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) return saved === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    darkMode ? root.classList.add('dark') : root.classList.remove('dark')
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  return { darkMode, setDarkMode }
}
