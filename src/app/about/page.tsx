import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Learn more about our mission to provide swift, reliable delivery services across the nation.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the delivery industry, we've grown from a small local service to a nationwide logistics provider.
                </p>
                <p>
                  Our commitment to excellence, speed, and reliability has made us the trusted choice for thousands of customers across the country.
                </p>
                <p>
                  Today, we continue to innovate and expand our services to meet the evolving needs of our customers, always staying true to our core values of reliability, speed, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/about-team.jpg"
                alt="Our team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Speed</h3>
              <p className="text-gray-600">
                We understand the urgency of your deliveries and ensure fast, efficient service every time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                Trust is earned through consistent performance. We deliver on our promises, every single time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">♥</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Care</h3>
              <p className="text-gray-600">
                Your packages are handled with the utmost care and attention, from pickup to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Experience the difference with our reliable delivery services
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}