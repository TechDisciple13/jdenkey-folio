import { useState, useEffect } from 'react'
import Home from './views/Home.jsx'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    darkMode ? root.classList.add('dark') : root.classList.remove('dark')
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}
