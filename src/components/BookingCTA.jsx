import { useState } from 'react'

export default function BookingCTA() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: '1',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `*New Booking Request — Canon El Paraiso Resort*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Check-in: ${form.checkIn}\n` +
      `Check-out: ${form.checkOut}\n` +
      `Room Type: ${form.roomType}\n` +
      `Guests: ${form.guests}\n` +
      `Message: ${form.message || 'None'}`
    )
    window.open(`https://wa.me/254700000000?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="booking-cta" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <div className="section-label mb-4">Make a Reservation</div>
            <div className="gold-divider mb-6" />
            <h2 className="section-title text-charcoal mb-6">
              Ready to Experience <em className="text-gold-600">El Paraiso?</em>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 font-light">
              Fill out the form and we'll confirm your reservation via WhatsApp
              within minutes. We accept <strong>M-Pesa</strong>, cash, and bank transfer.
            </p>

            {/* Key booking info */}
            <div className="space-y-4">
              {[
                { label: 'Check-in Time', value: '12:00 PM (Noon)' },
                { label: 'Check-out Time', value: '10:00 AM' },
                { label: 'Cancellation', value: 'Free cancellation 24hrs before arrival' },
                { label: 'Payment', value: 'M-Pesa · Cash · Bank Transfer' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-gray-100">
                  <div className="text-gold-500 font-serif text-lg leading-none mt-0.5">→</div>
                  <div>
                    <div className="text-[11px] text-gray-400 tracking-widest uppercase">{item.label}</div>
                    <div className="text-charcoal font-light mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct call */}
            <div className="mt-10 p-6 bg-charcoal text-white">
              <div className="text-gold-400 text-xs tracking-widest uppercase mb-2">Prefer to call?</div>
              <a href="tel:+254700000000" className="font-serif text-2xl text-white hover:text-gold-300 transition-colors">
                +254 700 000 000
              </a>
              <p className="text-white/50 text-sm mt-1">Available 6:00 AM – 10:00 PM daily</p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="bg-forest-50 border border-forest-200 p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">Reservation Sent!</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Your booking request has been sent via WhatsApp. Our team will
                  confirm your reservation shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-gold text-xs py-3 px-8"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-cream p-8 space-y-5">
                <h3 className="font-serif text-2xl text-charcoal mb-2">Book Your Stay</h3>
                <div className="h-px bg-gold-200" />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] tracking-widest uppercase text-gray-500 block mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] tracking-widest uppercase text-gray-500 block mb-2">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="+254..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] tracking-widest uppercase text-gray-500 block mb-2">Check-in *</label>
                    <input
                      type="date"
                      name="checkIn"
                      required
                      value={form.checkIn}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] tracking-widest uppercase text-gray-500 block mb-2">Check-out *</label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      value={form.checkOut}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] tracking-widest uppercase text-gray-500 block mb-2">Room Type *</label>
                    <select
                      name="roomType"
                      required
                      value={form.roomType}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    >
                      <option value="">Select room</option>
                      <option value="Classic Room">Classic Room — KSh 3,500</option>
                      <option value="Executive Suite">Executive Suite — KSh 5,500</option>
                      <option value="Family Room">Family Room — KSh 7,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] tracking-widest uppercase text-gray-500 block mb-2">Guests</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    >
                      {[1,2,3,4].map(n => (
                        <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] tracking-widest uppercase text-gray-500 block mb-2">Special Request (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    placeholder="Any special requirements, dietary needs, arrival time..."
                  />
                </div>

                <button type="submit" className="w-full btn-gold justify-center text-xs py-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.549 4.103 1.508 5.829L0 24l6.335-1.65A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.574-.5-5.065-1.374L4 21.5l.924-2.841A9.961 9.961 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Your form will open WhatsApp — confirmation within 30 minutes
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
