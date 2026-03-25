import Home from './views/Home.jsx'
import { useDarkMode } from './controllers/useDarkMode.js'

export default function App() {
  // Dark mode activé par défaut (true)
  const { darkMode, setDarkMode } = useDarkMode(true)

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111]">
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}
