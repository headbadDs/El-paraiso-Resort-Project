import { useState } from 'react'

const reviews = [
  {
    name: 'Dr. Amara K.',
    title: 'Medical Consultant, Nairobi',
    quote: "I've stayed at many hotels across Kenya for medical conferences. Canon El Paraiso is in a different league — the quiet, the security, and the staff make it my go-to whenever I'm in the Western region.",
    rating: 5,
    avatar: 'AK',
  },
  {
    name: 'James M.',
    title: 'Business Executive, Kisumu',
    quote: "Needed somewhere peaceful to work on a project for a week. Fast WiFi, delicious breakfast, no noise. Honestly better than some Nairobi hotels I've paid double for. Highly recommend.",
    rating: 5,
    avatar: 'JM',
  },
  {
    name: 'Faith O.',
    title: 'NGO Programme Officer',
    quote: "The location inside a hospital compound gives you so much peace of mind, especially as a woman travelling alone. Professional, clean, and genuinely warm staff. I felt safe the entire time.",
    rating: 5,
    avatar: 'FO',
  },
  {
    name: 'Peter N.',
    title: 'Architect, Eldoret',
    quote: "Stopped here on a road trip and ended up staying an extra night. The garden view from my room, the meals, and the calm atmosphere — hard to leave. Will definitely be back.",
    rating: 5,
    avatar: 'PN',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">Guest Reviews</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title text-charcoal mb-4">
            What Our Guests <em className="text-gold-600">Say</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Sidebar list */}
          <div className="md:col-span-2 space-y-4">
            {reviews.map((r, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-4 border transition-all duration-300 ${
                  active === i
                    ? 'border-gold-400 bg-white shadow-md'
                    : 'border-transparent bg-white/60 hover:bg-white hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 flex items-center justify-center text-sm font-medium font-sans ${
                    active === i ? 'bg-gold-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-charcoal">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.title}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Featured review */}
          <div className="md:col-span-3 bg-white p-10 shadow-xl relative">
            {/* Quote mark */}
            <div className="absolute top-6 left-8 text-gold-200 font-serif text-8xl leading-none select-none">"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(reviews[active].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="font-serif text-xl md:text-2xl font-light text-charcoal leading-relaxed mb-8 relative z-10">
              {reviews[active].quote}
            </blockquote>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="w-12 h-12 bg-gold-500 flex items-center justify-center text-white font-medium">
                {reviews[active].avatar}
              </div>
              <div>
                <div className="font-medium text-charcoal">{reviews[active].name}</div>
                <div className="text-gray-400 text-sm">{reviews[active].title}</div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 transition-all duration-300 ${
                    active === i ? 'w-8 bg-gold-500' : 'w-3 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Overall rating */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-charcoal text-white">
          <div className="text-center">
            <div className="font-serif text-6xl font-light text-gold-300">4.8</div>
            <div className="flex gap-1 justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-white/50 text-xs mt-2 tracking-widest uppercase">Overall Rating</div>
          </div>
          <div className="w-px h-16 bg-white/10 hidden md:block" />
          <div className="text-center md:text-left max-w-sm">
            <p className="text-white/70 leading-relaxed font-light italic font-serif text-lg">
              "Rated among the top quiet retreats in Western Kenya by our returning guests."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
