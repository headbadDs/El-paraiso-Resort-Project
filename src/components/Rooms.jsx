const rooms = [
  {
    name: 'Classic Room',
    tag: 'Perfect for Solo Travellers',
    price: 'KSh 3,500',
    period: '/night',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['King Bed', 'En-Suite Bathroom', 'Free WiFi', 'TV & AC', 'Breakfast Option'],
    highlight: false,
  },
  {
    name: 'Executive Suite',
    tag: 'Most Popular',
    price: 'KSh 5,500',
    period: '/night',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['King Bed', 'Sitting Area', 'Desk & Fast WiFi', 'Premium TV', 'Daily Breakfast', 'Late Checkout'],
    highlight: true,
  },
  {
    name: 'Family Room',
    tag: 'Ideal for Families',
    price: 'KSh 7,000',
    period: '/night',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['2 Double Beds', 'Spacious Layout', 'En-Suite', 'Free WiFi', 'Breakfast Included', 'Garden View'],
    highlight: false,
  },
]

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">Accommodation</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title text-charcoal mb-4">
            Your Private Retreat <em className="text-gold-600">Awaits</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed font-light">
            Each room is designed to offer comfort, calm, and the essentials that
            matter most — whether you're here for one night or one week.
          </p>
        </div>

        {/* Room cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden shadow-lg card-hover ${
                room.highlight
                  ? 'ring-2 ring-gold-400 ring-offset-4'
                  : ''
              }`}
            >
              {/* Badge */}
              {room.highlight && (
                <div className="absolute top-4 left-4 z-20 bg-gold-500 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${room.img}')` }}
                />
                <div className="room-overlay absolute inset-0" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white/60 text-[10px] tracking-widest uppercase">{room.tag}</div>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${room.highlight ? 'bg-charcoal text-white' : 'bg-white'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`font-serif text-2xl font-light ${room.highlight ? 'text-white' : 'text-charcoal'}`}>
                      {room.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className={`font-serif text-xl font-medium ${room.highlight ? 'text-gold-300' : 'text-gold-600'}`}>
                      {room.price}
                    </div>
                    <div className={`text-[10px] tracking-wider ${room.highlight ? 'text-white/50' : 'text-gray-400'}`}>
                      per night
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {room.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <svg className={`w-3.5 h-3.5 shrink-0 ${room.highlight ? 'text-gold-400' : 'text-gold-500'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={room.highlight ? 'text-white/75' : 'text-gray-500'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking-cta"
                  className={`block text-center py-3 text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                    room.highlight
                      ? 'bg-gold-500 hover:bg-gold-400 text-white'
                      : 'border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white'
                  }`}
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* M-Pesa note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-forest-50 border border-forest-200 px-6 py-3 text-sm text-forest-700">
            <svg className="w-5 h-5 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
            <span>We accept <strong>M-Pesa, Cash</strong> and <strong>Bank Transfer</strong> — easy and secure payments</span>
          </div>
        </div>
      </div>
    </section>
  )
}
