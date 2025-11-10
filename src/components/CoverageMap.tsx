import Image from 'next/image'
import Link from 'next/link'

export default function CoverageMap() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-black">
        <h2 className="text-3xl font-bold mb-8">Coverage Map</h2>
        
        <div className="bg-red-600 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            {/* Text Content */}
            <div className="text-white">
              <h3 className="text-4xl font-bold mb-6">
                Nationwide Delivery,
                <br />
                Simplified
              </h3>
              
              <p className="text-white/90 mb-8 leading-relaxed">
                Securely move cities apart fast,
                <br />
                reliable logistics for parcels of
                <br />
                all sizes.
              </p>
              
            <Link href="/coverage-map">
              <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                View Coverage Map
              </button>
              </Link>
            </div>

            {/* Map Image */}
            <div className="relative h-64 lg:h-80">
              <Image
                src="/coverage-map.png"
                alt="Nigeria coverage map"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}