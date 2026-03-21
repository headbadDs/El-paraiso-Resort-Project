const amenities = [
  {
    icon: (
      <svg className="w-8 h-8 amenity-icon text-gold-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: 'High-Speed WiFi',
    desc: 'Reliable fibre internet throughout the resort — stay connected for work or streaming.',
  },
  {
    icon: (
      <svg className="w-8 h-8 amenity-icon text-gold-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Air Conditioning',
    desc: 'Climate-controlled rooms for a perfect temperature whatever the weather.',
  },
  {
    icon: (
      <svg className="w-8 h-8 amenity-icon text-gold-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-1.5-.75m0-7.5l1.5.75a3.354 3.354 0 003 0 3.354 3.354 0 013 0 3.354 3.354 0 003 0 3.354 3.354 0 011.5-.75M6 10.5v3" />
      </svg>
    ),
    title: 'Restaurant & Bar',
    desc: 'Savour fresh, wholesome meals prepared daily — breakfast included for all guests.',
  },
  {
    icon: (
      <svg className="w-8 h-8 amenity-icon text-gold-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: '24/7 Security',
    desc: 'Fully secured premises within hospital grounds — your safety is our priority.',
  },
  {
    icon: (
      <svg className="w-8 h-8 amenity-icon text-gold-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Airport Transfers',
    desc: 'Convenient pickup and drop-off to Kisumu Airport — arranged on request.',
  },
  {
    icon: (
      <svg className="w-8 h-8 amenity-icon text-gold-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: 'Conference Room',
    desc: 'Private meeting rooms with projector and whiteboard — ideal for business teams.',
  },
  {
    icon: (
      <svg className="w-8 h-8 amenity-icon text-gold-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    title: 'Free Parking',
    desc: 'Ample, secure parking space within the grounds for all guests.',
  },
  {
    icon: (
      <svg className="w-8 h-8 amenity-icon text-gold-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Quiet Environment',
    desc: 'No noisy clubs or busy roads — a genuinely peaceful place to rest and think.',
  },
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">What We Offer</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title text-charcoal mb-4">
            Everything You Need, <em className="text-gold-600">Nothing You Don't</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed font-light">
            We've curated every amenity with intentionality — focused on
            genuine comfort, security, and productivity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((a, i) => (
            <div
              key={i}
              className="amenity-card bg-white p-6 text-center cursor-default group border border-transparent hover:border-forest-300"
            >
              <div className="flex justify-center mb-4">{a.icon}</div>
              <h3 className="font-serif text-lg text-charcoal mb-2 group-hover:text-white transition-colors">{a.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed group-hover:text-white/70 transition-colors">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
