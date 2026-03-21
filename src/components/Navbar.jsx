import { useState } from 'react'

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-gold-400/60 flex items-center justify-center">
            <span className="text-gold-400 font-serif text-lg font-semibold">C</span>
          </div>
          <div>
            <div className="text-white font-serif text-base tracking-wider leading-none">Canon</div>
            <div className="text-gold-400 text-[10px] tracking-[0.25em] uppercase leading-none mt-0.5">El Paraiso Resort</div>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-white/80 hover:text-white text-sm tracking-wider uppercase transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+254700000000"
            className="text-gold-400 text-sm tracking-wider hover:text-gold-300 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Now
          </a>
          <a href="#rooms" className="btn-gold text-xs py-3 px-6">
            Reserve
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-lg border-t border-white/10 py-6">
          <ul className="flex flex-col gap-4 px-6">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-gold-400 text-sm tracking-widest uppercase transition-colors block py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a href="tel:+254700000000" className="btn-ghost text-center justify-center text-xs py-3">
                Call Now
              </a>
              <a href="#rooms" onClick={() => setMenuOpen(false)} className="btn-gold text-center justify-center text-xs py-3">
                Reserve a Room
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
