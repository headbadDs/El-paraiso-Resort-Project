export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="section-label mb-4">Find Us</div>
            <div className="gold-divider mb-6" />
            <h2 className="section-title text-charcoal mb-6">
              Located in the Heart of <em className="text-gold-600">Koru, Kenya</em>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 font-light">
              Canon El Paraiso Resort is uniquely situated <strong>within the grounds of a medical institution</strong> in
              Koru, Kisumu County — making it one of the safest, quietest, and most
              convenient stays in Western Kenya.
            </p>

            {/* Address details */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: 'Address',
                  value: 'Canon El Paraiso Resort, Koru, Kisumu County, Kenya',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+254 700 000 000',
                  href: 'tel:+254700000000',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'info@canonelparaiso.co.ke',
                  href: 'mailto:info@canonelparaiso.co.ke',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  ),
                  label: 'Distance',
                  value: '~40 km from Kisumu City | ~10 min from Koru Town',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-[11px] tracking-widest uppercase text-gray-400 font-sans mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-charcoal hover:text-gold-600 transition-colors font-light">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-charcoal font-light">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs py-3 px-6"
              >
                WhatsApp Us
              </a>
              <a
                href="https://maps.google.com/?q=Koru,+Kisumu+County,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-xs py-3 px-6"
              >
                Open in Maps
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="relative">
            <div className="w-full h-[420px] bg-gray-200 overflow-hidden shadow-xl">
              <iframe
                title="Canon El Paraiso Resort Location"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.70285!2d35.0!3d-0.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa4a6a3555555%3A0x0!2sKoru%2C+Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              />
            </div>
            {/* Gold corner accent */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-gold-400/60 hidden md:block" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-gold-400/60 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
