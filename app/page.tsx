import Navbar from './components/navbar'
import Hero from './components/hero'
import Features from './components/features'
import About from './components/about'
import Properties from './components/properties'
import Testimonials from './components/testimonials'
import FAQs from './components/faqs'
import Stats from './components/stats'
import Newsletter from './components/newsletter'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Properties />
      <Stats />
      <Testimonials />
      <FAQs />
      <Newsletter />
      <Footer />
    </main>
  )
}
