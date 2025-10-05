// import Image from 'next/image'

// export default function ServiceHero() {
//   return (
//     <section className="relative h-[60vh] bg-black pt-50">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/service-hero.jpg"
//           alt="Delivery rider"
//           fill
//           className="object-cover opacity-60"
//           priority
//         />
//       </div>

//       {/* Content */}
//       <div className="relative container mx-auto px-4 h-full flex flex-col justify-center pb-32">
//         <div className="max-w-xl">
//           <h1 className="text-white text-5xl font-bold mb-6">
//             Services
//           </h1>
          
//           <p className="text-white text-lg mb-8">
//             Explore the range of logistics
//             <br />
//             <span className="font-semibold">solutions we offer for individuals</span>
//             <br />
//             and businesses.
//           </p>
          
//           <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

import Image from 'next/image'

export default function ServiceHero() {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/service-hero.jpg"
          alt="Delivery rider"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center pt-40 pb-12">
        <div className="max-w-xl">
          <h1 className="text-white text-5xl font-bold mb-6">
            Services
          </h1>
          
          <p className="text-white text-lg mb-8">
            Explore the range of logistics
            <br />
            <span className="font-semibold">solutions we offer for individuals</span>
            <br />
            and businesses.
          </p>
          
          <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  )
}