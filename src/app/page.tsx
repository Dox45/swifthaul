// import Hero from '@/components/Hero'
// import ServicesSection from '@/components/ServicesSection'

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Hero />
//       <ServicesSection />
//     </main>
//   )
// }


import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'
import CoverageMap from '@/components/CoverageMap'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <ServicesSection />
      <CoverageMap />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}