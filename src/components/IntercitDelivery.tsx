import Image from 'next/image'

export default function IntercitDelivery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96">
            <Image
              src="/service-bike.png"
              alt="Warehouse delivery"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl text-black font-bold mb-6">
              Intercit Delivery
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold">Need to move goods between Lagos and Kwara?</span>
              </p>
              
              <p>
               Swifthaul provides reliable intercity delivery, bridging two major hubs with speed and security. Whether personal items or bulk supplies, we guarantee safe transit every time.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8">
              <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <span className="text-white text-xl">f</span>
              </button>
              <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <span className="text-white text-xl">in</span>
              </button>
              <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <span className="text-white text-xl">ig</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}