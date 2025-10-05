import { Clock, DollarSign, MapPin, Shield } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Timely deliveries across major cities'
  },
  {
    icon: DollarSign,
    title: 'Affordable Rates',
    description: 'Cost-effective pricing for every budget'
  },
  {
    icon: MapPin,
    title: 'Time Tracking',
    description: 'Easily monitor package across major cities'
  },
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'Your items are handled with quality care'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-black px-4">
        <h2 className="text-3xl font-bold mb-12">Why choose us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 mb-4">
                <feature.icon className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}