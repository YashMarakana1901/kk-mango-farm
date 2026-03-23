import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import Shop from '@/components/Shop'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import OrderCTA from '@/components/OrderCTA'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Shop />
        <About />
        <Reviews />
        <OrderCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
