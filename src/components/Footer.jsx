export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-gold-400/60 flex items-center justify-center">
                <span className="text-gold-400 font-serif text-lg font-semibold">C</span>
              </div>
              <div>
                <div className="text-white font-serif text-base tracking-wider leading-none">Canon</div>
                <div className="text-gold-400 text-[10px] tracking-[0.25em] uppercase leading-none mt-0.5">El Paraiso Resort</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              A hidden luxury retreat in Koru, Kenya — where calm, security,
              and elegance meet.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { label: 'Facebook', icon: 'f', href: '#' },
                { label: 'Instagram', icon: '▲', href: '#' },
                { label: 'WhatsApp', icon: '✓', href: 'https://wa.me/254700000000' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold-400 hover:text-gold-400 transition-colors text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-gold-400 text-[11px] tracking-[0.3em] uppercase font-sans mb-6">Quick Links</div>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Rooms', href: '#rooms' },
                { label: 'Amenities', href: '#amenities' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Location', href: '#location' },
                { label: 'Book Now', href: '#booking-cta' },
              ].map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-white/50 hover:text-gold-300 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-4 h-px bg-gold-500/0 group-hover:bg-gold-500/60 transition-all" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <div className="text-gold-400 text-[11px] tracking-[0.3em] uppercase font-sans mb-6">Our Rooms</div>
            <ul className="space-y-3">
              {[
                { name: 'Classic Room', price: 'from KSh 3,500' },
                { name: 'Executive Suite', price: 'from KSh 5,500' },
                { name: 'Family Room', price: 'from KSh 7,000' },
              ].map((r, i) => (
                <li key={i} className="border-b border-white/5 pb-3">
                  <div className="text-white/80 text-sm">{r.name}</div>
                  <div className="text-gold-500 text-xs mt-0.5">{r.price} per night</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-gold-400 text-[11px] tracking-[0.3em] uppercase font-sans mb-6">Contact Us</div>
            <div className="space-y-4">
              <div>
                <div className="text-white/30 text-[10px] tracking-widest uppercase">Address</div>
                <p className="text-white/60 text-sm mt-1 leading-relaxed">Koru, Kisumu County, Kenya</p>
              </div>
              <div>
                <div className="text-white/30 text-[10px] tracking-widest uppercase">Phone</div>
                <a href="tel:+254700000000" className="text-white/60 hover:text-gold-300 text-sm mt-1 block transition-colors">
                  +254 700 000 000
                </a>
              </div>
              <div>
                <div className="text-white/30 text-[10px] tracking-widest uppercase">Email</div>
                <a href="mailto:info@canonelparaiso.co.ke" className="text-white/60 hover:text-gold-300 text-sm mt-1 block transition-colors">
                  info@canonelparaiso.co.ke
                </a>
              </div>
              <div>
                <div className="text-white/30 text-[10px] tracking-widest uppercase">Hours</div>
                <p className="text-white/60 text-sm mt-1">Open 24 Hours · 7 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} Canon El Paraiso Resort. All rights reserved. · Koru, Kenya.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <span>We accept:</span>
            <span className="border border-white/20 px-2 py-0.5 text-[10px] tracking-wider">M-PESA</span>
            <span className="border border-white/20 px-2 py-0.5 text-[10px] tracking-wider">CASH</span>
            <span className="border border-white/20 px-2 py-0.5 text-[10px] tracking-wider">BANK</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
