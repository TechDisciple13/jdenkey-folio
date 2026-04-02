export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-5
                      flex flex-col sm:flex-row items-center justify-center
                      gap-2 text-xs text-white/30">
        <p>© {year} Tech Disciple. Tous droits réservés.</p>
        <p>Made with heart by Henri-Joel Denkey</p>
      </div>
    </footer>
  )
}