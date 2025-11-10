// import Header from '@/components/Header'
// import ServiceHero from '@/components/ServiceHero'
// import ServicesOverview from '@/components/ServicesOverview'
// import LogisticsSection from '@/components/LogisticsSection'
// import SameDayDelivery from '@/components/SameDayDelivery'
// import IntercitDelivery from '@/components/IntercitDelivery'
// import Ecommerce from '@/components/Ecommerce'
// import Footer from '@/components/Footer'
// export default function ServicePage() {
//   return (
//     <main className="">
//       <Header />
//       <ServiceHero />
//       <ServicesOverview />
//       <LogisticsSection />
//       <SameDayDelivery />
//       <Ecommerce />
//       <IntercitDelivery />
//       <Footer />
//     </main>
//   )
// }


"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import ServiceHero from "@/components/ServiceHero"
import ServicesOverview from "@/components/ServicesOverview"
import LogisticsSection from "@/components/LogisticsSection"
import SameDayDelivery from "@/components/SameDayDelivery"
import IntercitDelivery from "@/components/IntercitDelivery"
import Ecommerce from "@/components/Ecommerce"
import Footer from "@/components/Footer"

export default function ServicePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="overflow-hidden">
      <Header />
      <ServiceHero />
      <ServicesOverview />
      <LogisticsSection />

      {/* Same Day Delivery */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SameDayDelivery />
      </motion.div>

      {/* E-commerce */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Ecommerce />
      </motion.div>

      {/* Intercity Delivery */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <IntercitDelivery />
      </motion.div>

      <Footer />
    </main>
  )
}
