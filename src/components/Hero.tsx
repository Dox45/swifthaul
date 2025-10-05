// import Image from 'next/image'
// import Header from './Header'

// export default function Hero() {
//   return (
//     <section className="relative h-screen bg-black">
//       <Header />
      
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/hero-bg.jpg"
//           alt="Delivery person"
//           fill
//           className="object-cover opacity-70"
//           priority
//         />
//       </div>

//       {/* Content */}
//       <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
//         <div className="max-w-2xl">
//           <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
//             Swift, Reliable Deliveries
//             <br />
//             Within And Across
//             <br />
//             States
//           </h1>
          
//           <p className="text-white text-lg mb-8">
//             From your city to the next, trust
//             <br />
//             us with your deliveries
//           </p>
          
//           <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition">
//             Book Now
//           </button>
//         </div>

//         {/* Bottom Info */}
//         <div className="absolute bottom-8 left-4 right-4 flex items-center justify-between text-white text-sm">
//           <span>Last Updated</span>
//           <span className="text-gray-400">
//             Get instant quotes for all your deliveries
//           </span>
//         </div>
//       </div>
//     </section>
//   )
// }


import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Delivery person"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full text-black flex flex-col justify-center pt-20">
        <div className="max-w-2xl">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Swift, Reliable Deliveries
            <br />
            Within And Across
            <br />
            States
          </h1>
          
          <p className="text-white text-lg mb-8">
            From your city to the next, trust
            <br />
            us with your deliveries
          </p>
          
          <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition">
            Book Now
          </button>
        </div>

        {/* Bottom Info */}
       {/* <div className="absolute bottom-8 left-4 right-4 flex items-center justify-between text-white text-sm">
          <span>Last Updated</span>
          <span className="text-gray-400">
            Get instant quotes for all your deliveries
          </span>
        </div>*/}
      </div>
    </section>
  )
}