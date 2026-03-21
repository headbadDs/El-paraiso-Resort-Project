const photos = [
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    label: 'Resort Grounds',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    label: 'Classic Room',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    label: 'Dining',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    label: 'Executive Suite',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    label: 'Garden View',
    span: '',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">Gallery</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title text-charcoal mb-4">
            See It for <em className="text-gold-600">Yourself</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed font-light">
            A glimpse into the comfort, beauty, and tranquillity that awaits you at Canon El Paraiso.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px]">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${p.span}`}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${p.url}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-white text-sm tracking-widest uppercase font-sans">{p.label}</span>
                <div className="h-px w-8 bg-gold-400 mt-1.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm font-light">
            Want to see more? Follow us on Instagram{' '}
            <span className="text-gold-500 font-medium">@canonelparaiso</span>
          </p>
        </div>
      </div>
    </section>
  )
}
