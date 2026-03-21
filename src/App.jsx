import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Location from './components/Location'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './index.css'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <TrustBar />
      <About />
      <Rooms />
      <Amenities />
      <Experience />
      <Testimonials />
      <Gallery />
      <Location />
      <BookingCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
