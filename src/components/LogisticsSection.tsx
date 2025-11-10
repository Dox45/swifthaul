"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function LogisticsSection() {
  return (
    <section className="bg-red-600 text-white py-20 overflow-hidden relative">
      {/* Floating animated circles for visual depth */}
      <motion.div
        className="absolute -top-20 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        animate={{ y: [0, -15, 0], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text content with animations */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Ready to move your package?
            </motion.h2>

            <motion.p
              className="text-white/90 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              At <span className="font-semibold text-white">Swifthaul Logistics</span>, we don’t just deliver packages — we deliver <span className="text-yellow-300 font-semibold">peace of mind</span>.  
              Track your shipments in real-time and enjoy smooth, reliable delivery every time.
            </motion.p>

           <Link href="https://wa.me/+2347057576394"> 
           <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100 transition-all"
            >
              Book Now
            </motion.button>
            </Link>
          </motion.div>

          {/* Van Image with floating + entry animation */}
          <motion.div
            className="relative h-80 lg:h-96"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/delivery-van.png"
                alt="Delivery van"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
