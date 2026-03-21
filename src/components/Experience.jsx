const experiences = [
  {
    number: '01',
    title: 'Arrive & Unwind',
    desc: 'From the moment you arrive, our team ensures a warm, personal welcome. No queues, no formality — just calm.',
    img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    number: '02',
    title: 'Work or Rest',
    desc: 'High-speed WiFi, a quiet writing desk, and a comfortable bed — designed for executives and explorers alike.',
    img: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    number: '03',
    title: 'Dine & Savour',
    desc: 'Fresh, locally inspired meals served in our garden dining area. Breakfast is included in every stay.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
]

export default function Experience() {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c8891a' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-gold-400 uppercase tracking-[0.3em] text-xs font-semibold font-sans mb-4">The Experience</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
            A Stay You'll <em className="text-gold-300">Remember</em>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed font-light">
            From arrival to departure, every moment at Canon El Paraiso is designed
            to leave you refreshed, inspired, and ready to return.
          </p>
        </div>

        {/* Experience steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((e, i) => (
            <div key={i} className="group">
              {/* Image */}
              <div className="relative h-56 overflow-hidden mb-6">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${e.img}')` }}
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-all duration-300" />
                {/* Number */}
                <div className="absolute top-4 left-4 w-10 h-10 border border-gold-400/60 flex items-center justify-center">
                  <span className="text-gold-400 font-serif text-sm">{e.number}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-white font-light mb-3 group-hover:text-gold-300 transition-colors">
                {e.title}
              </h3>
              <div className="h-px w-8 bg-gold-500/60 mb-3 group-hover:w-16 transition-all duration-500" />
              <p className="text-white/55 text-sm leading-relaxed font-light">{e.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="#rooms" className="btn-outline-gold text-xs">
            Start Your Experience
          </a>
        </div>
      </div>
    </section>
  )
}
