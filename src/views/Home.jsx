import Navbar   from '../components/layout/Navbar.jsx'
import Footer   from '../components/layout/Footer.jsx'
import Hero       from '../components/sections/Hero.jsx'
import Portfolio  from '../components/sections/Portfolio.jsx'
import Experience from '../components/sections/Experience.jsx'
import About      from '../components/sections/About.jsx'
import CTA        from '../components/sections/CTA.jsx'

export default function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <Portfolio />
        <Experience />
        <About />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
