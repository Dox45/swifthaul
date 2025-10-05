import Header from '@/components/Header'
import ServiceHero from '@/components/ServiceHero'
import ServicesOverview from '@/components/ServicesOverview'
import LogisticsSection from '@/components/LogisticsSection'
import SameDayDelivery from '@/components/SameDayDelivery'
import IntercitDelivery from '@/components/IntercitDelivery'
import Ecommerce from '@/components/Ecommerce'
import Footer from '@/components/Footer'
export default function ServicePage() {
  return (
    <main className="">
      <Header />
      <ServiceHero />
      <ServicesOverview />
      <LogisticsSection />
      <SameDayDelivery />
      <Ecommerce />
      <IntercitDelivery />
      <Footer />
    </main>
  )
}