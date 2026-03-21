export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 md:order-1">
            <div
              className="w-full h-[500px] bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            {/* Floating accent card */}
            <div className="absolute -bottom-8 -right-8 bg-charcoal text-white p-6 w-48 shadow-2xl hidden md:block">
              <div className="text-gold-400 text-3xl font-serif font-light">7+</div>
              <div className="text-white/60 text-xs tracking-widest uppercase mt-1">Years of Excellence</div>
            </div>
            {/* Gold corner */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-gold-400/60" />
          </div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <div className="section-label mb-4">Our Story</div>
            <div className="gold-divider mb-6" />
            <h2 className="section-title text-charcoal mb-8">
              A Sanctuary Built for <em className="text-gold-600">Those Who Know</em>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              Tucked away within the serene grounds of a medical institution in
              Koru, Canon El Paraiso Resort was conceived as more than just a
              place to sleep — it is a deliberate escape from noise, from rush,
              from the ordinary.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-light">
              Our guests are business executives, visiting doctors, professionals,
              and travellers who have discovered that true luxury is not about
              extravagance — it is about peace, security, and feeling genuinely
              cared for.
            </p>

            {/* Key pillars */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🌿', title: 'Tranquil Grounds', desc: 'Lush, manicured gardens away from city noise' },
                { icon: '🔒', title: 'Secure Location', desc: 'Within a professional institution — 24/7 safety' },
                { icon: '💼', title: 'Business-Ready', desc: 'Fast WiFi, quiet spaces, meeting support' },
                { icon: '🍽️', title: 'Quality Dining', desc: 'Wholesome meals served with care' },
              ].map((p, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <div className="text-charcoal font-medium text-sm tracking-wide">{p.title}</div>
                    <div className="text-gray-500 text-xs mt-1 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#rooms" className="btn-gold text-xs">
                Explore Our Rooms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
