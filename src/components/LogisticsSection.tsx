import Image from 'next/image'

export default function LogisticsSection() {
  return (
    <section className="bg-red-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to move your package?
            </h2>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              At Swifthirri Logistics, we aren't just another package — we deliver peace of mind. Whether you're sending a gift, important documents, or business supplies, our goal is to make every delivery as smooth and reliable as possible. With our advanced tracking system, you can monitor your delivery in real-time, knowing exactly when your package will arrive.
            </p>
            
            <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Book Now
            </button>
          </div>

          {/* Van Image */}
          <div className="relative h-80 lg:h-96">
            <Image
              src="/delivery-van.png"
              alt="Delivery van"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}