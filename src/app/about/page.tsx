// import Header from '@/components/Header'
// import Image from 'next/image'
// import Footer from '@/components/Footer'

// import React from 'react';
// import { Package, Clock, Shield, FastForward, MessageSquare, Handshake,Users, Bike, MapPin } from 'lucide-react';



// // Hero Section Component
// const HeroSection = () => (
//   <section className="relative h-screen bg-gray-900 text-white">
//     <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
//     <img 
//       src="who-we-are.jpg" 
//       alt="Delivery rider" 
//       className="absolute inset-0 w-full h-full object-cover"
//     />
//     <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
//       <div className="max-w-2xl">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6">
//           Who We Are
//         </h1>
//         <p className="text-xl md:text-2xl mb-8 text-gray-200">
//          Swifthaul Logistics is a pre-launch delivery startup serving Lagos and 
//          Kwara. We are building a logistics solution that blends speed, reliability, and affordability. Our goal is 
//          to make delivery services seamless for individuals, businesses, and  
//          communities that depend on movement every day.
//         </p>
//         <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
//           Get Started
//         </button>
//       </div>
//     </div>
//   </section>
// );

// // Why We Lead Section Component
// const WhyWeLeadSection = () => (
//   <section className="py-20 bg-white">
//     <div className="container mx-auto px-6">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <img 
//             src="why-we-exist.jpg" 
//             alt="Customer receiving delivery" 
//             className="rounded-lg shadow-2xl"
//           />
//         </div>
//         <div>
//           <h2 className="text-4xl font-bold mb-6 text-gray-900">Why We Exist</h2>
//           <p className="text-lg text-gray-700 mb-6">
//             In a world where delays and uncertainty in logisticsare common, Swifthaul was created to be different. We exist to  
//             give customers confidence knowing their goods are in safe hands and will arrive when promised.
//           </p>
         
//           <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // Our Mission Section Component
// const MissionVisionSection = () => (
//   <section className="py-20 bg-red-600 text-white">
//     <div className="container mx-auto px-6">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Column - Mission & Vision */}
//         <div>
//           {/* Our Mission */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
//             <p className="text-base leading-relaxed opacity-95">
//               To redefine logistics in Nigeria by creating a system that is transparent, 
//               affordable, and built for growth. We want to remove the stress and uncertainty around
//               deliveries, making it easier for people and businesses to connect.
//             </p>
//           </div>

//           {/* Our Vision */}
//           <div>
//             <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
//             <p className="text-base leading-relaxed opacity-95">
//               To become Nigeria's most trusted logistics partner, connecting people and 
//               businesses across all borders, One package at a time. Beyond Boundaries, Within Time.
//             </p>
//           </div>
//         </div>

//         {/* Right Column - Logo */}
//         <div className="flex items-center justify-center">
//           <div className="text-center">
//             <div className="mb-6">
//               {/* Delivery Scooter Icon */}
//               <svg className="w-48 h-48 mx-auto" viewBox="0 0 200 200" fill="none">
//                 {/* Speed lines */}
//                 <path d="M20 60 L60 60 M10 75 L50 75 M15 90 L55 90" 
//                       stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
                
//                 {/* Scooter body */}
//                 <rect x="80" y="70" width="60" height="35" rx="8" fill="white"/>
                
//                 {/* Seat */}
//                 <path d="M85 70 Q90 55 110 55 Q130 55 135 70" fill="white"/>
                
//                 {/* Handlebars */}
//                 <path d="M140 65 L155 50 M155 50 L160 55 M155 50 L150 55" 
//                       stroke="white" strokeWidth="3" strokeLinecap="round"/>
                
//                 {/* Front wheel */}
//                 <circle cx="150" cy="115" r="18" fill="white"/>
//                 <circle cx="150" cy="115" r="10" fill="#DC2626"/>
                
//                 {/* Back wheel */}
//                 <circle cx="90" cy="115" r="18" fill="white"/>
//                 <circle cx="90" cy="115" r="10" fill="#DC2626"/>
                
//                 {/* Delivery box */}
//                 <rect x="70" y="75" width="25" height="25" rx="3" fill="white" opacity="0.9"/>
//                 <path d="M75 87.5 L90 87.5 M82.5 80 L82.5 95" 
//                       stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </div>
//             <h1 className="text-4xl font-bold mb-2">SWIFTHAUL</h1>
//             <p className="text-lg font-semibold tracking-wider">LOGISTICS SERVICES</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // Our Values Section Component
// const OurValuesSection = () => (
//   <section className="py-20 bg-gray-50">
//     <div className="container mx-auto px-6">
//       <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Values</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//           <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
//             <FastForward className="w-7 h-7 text-red-600" />
//           </div>
//           <h3 className="text-xl font-bold mb-3 text-gray-900">Speed</h3>
//           <p className="text-gray-700 text-sm">
//             We deliver fast without compromising safety and quality.
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//           <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
//             <Shield className="w-7 h-7 text-red-600" />
//           </div>
//           <h3 className="text-xl font-bold mb-3 text-gray-900">Reliability</h3>
//           <p className="text-gray-700 text-sm">
//             Count on us for every delivery, on time, every time.
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//           <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
//             <MessageSquare className="w-7 h-7 text-red-600" />
//           </div>
//           <h3 className="text-xl font-bold mb-3 text-gray-900">Transparency</h3>
//           <p className="text-gray-700 text-sm">
//             Clear communication and honest pricing at all times
//               </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//           <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
//             <Handshake className="w-7 h-7 text-red-600" />
//           </div>
//           <h3 className="text-xl font-bold mb-3 text-gray-900">Customer satisfaction</h3>
//           <p className="text-gray-700 text-sm">
//             Your happiness is our success. We go the extra mile for you.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // The Future Section Component
// const TheFutureSection = () => (
//   <section className="py-20 bg-white">
//     <div className="container mx-auto px-6">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <h2 className="text-4xl font-bold mb-6 text-gray-900">The Future</h2>
//           <p className="text-lg text-gray-700 mb-6">
//             We are starting small, in Lagos and Kwara, but out ambition is much bigger. With phased expansion, technology integration,  
//             and strong partnerships, Swifthaul aims to become a household name in logistics across Nigeria.
//           </p>
         
//           <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
//             View Roadmap
//           </button>
//         </div>
//         <div>
//           <img 
//             src="final-image.jpg" 
//             alt="Highway and future" 
//             className="rounded-lg shadow-2xl"
//           />
//         </div>
//       </div>
//     </div>
//   </section>
// );


     


// export default function AboutPage() {
//   return (
//     <main className="min-h-screen">
//       <Header />
//        <HeroSection />
//       <WhyWeLeadSection />
//       <MissionVisionSection />
//        <TheFutureSection />
//       <OurValuesSection />
//       {/*<CoreValuesSection />*/}

//       <Footer />
//     </main>
//   )
// }




"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { FastForward, Shield, MessageSquare, Handshake } from "lucide-react"
import Link from 'next/link'

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
}

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
}

// Hero Section
const HeroSection = () => (
  <section className="relative h-screen bg-gray-900 text-white overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"
    />
    <motion.img
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      src="who-we-are.jpg"
      alt="Delivery rider"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Who We Are</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Swifthaul Logistics is a pre-launch delivery startup serving Lagos and
          Kwara. We blend speed, reliability, and affordability to make every
          delivery seamless for individuals and businesses alike.
        </p>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSexrsTPglYdx_5CaRuU6lHFvNqniMlt7D0eARDL2prvHpzbbQ/viewform?usp=header">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
        >
          Get Started
        </motion.button>
        </Link>
      </motion.div>
    </div>
  </section>
)

// Why We Lead Section
const WhyWeLeadSection = () => (
  <section className="py-20 bg-white overflow-hidden">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="why-we-exist.jpg"
          alt="Customer receiving delivery"
          className="rounded-lg shadow-2xl"
        />
      </motion.div>
      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Why We Exist</h2>
        <p className="text-lg text-gray-700 mb-6">
          In a world of delays and uncertainty, Swifthaul was created to be
          different — to give customers confidence that their goods are safe and
          arrive right on time.
        </p>
      <Link href="https://wa.me/+2347057576394">  
      <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Learn More
        </motion.button>
        </Link>

      </motion.div>
    </div>
  </section>
)

// Mission & Vision Section
const MissionVisionSection = () => (
  <section className="py-20 bg-red-600 text-white overflow-hidden">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="opacity-95">
            To redefine logistics in Nigeria with a system that’s transparent,
            affordable, and built for growth — connecting people and businesses
            effortlessly.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="opacity-95">
            To become Nigeria’s most trusted logistics partner — connecting
            people across borders, one package at a time.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ rotate: -5, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img src="/mission-txt.png" alt="Scooter" className="w-56" />
        </motion.div>
      </motion.div>
    </div>
  </section>
)

// Our Values Section
const OurValuesSection = () => {
  const values = [
    { icon: FastForward, title: "Speed", desc: "We deliver fast without compromising safety and quality." },
    { icon: Shield, title: "Reliability", desc: "Count on us for every delivery, on time, every time." },
    { icon: MessageSquare, title: "Transparency", desc: "Clear communication and honest pricing always." },
    { icon: Handshake, title: "Customer Satisfaction", desc: "Your happiness is our success. We go the extra mile." },
  ]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-gray-900"
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all group"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="bg-red-100 w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
              >
                <val.icon className="w-7 h-7 text-red-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {val.title}
              </h3>
              <p className="text-gray-700 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// The Future Section
const TheFutureSection = () => (
  <section className="py-20 bg-white overflow-hidden">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900">The Future</h2>
        <p className="text-lg text-gray-700 mb-6">
          Starting small in Lagos and Kwara, our ambition is much bigger. With
          phased expansion, technology, and strong partnerships, Swifthaul aims
          to become a household name in logistics across Nigeria.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          View Roadmap
        </motion.button>
      </motion.div>

      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.img
          src="final-image.jpg"
          alt="Highway and future"
          className="rounded-lg shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  </section>
)

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroSection />
      <WhyWeLeadSection />
      <MissionVisionSection />
      <OurValuesSection />
      <TheFutureSection />
      <Footer />
    </main>
  )
}
