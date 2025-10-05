import ServiceCard from './ServiceCard'

const services = [
  {
    id: 1,
    title: 'Out of State Delivery',
    description: 'Reliable cross-country deliveries with our dedicated vans.',
    image: '/service-van.jpg',
  },
  {
    id: 2,
    title: 'Citywide Bike Delivery',
    description: 'Quick and efficient service within the city',
    image: '/service-bike.png',
  },
  {
    id: 3,
    title: 'Eco-Friendly Bicycle Delivery',
    description: 'Perfect for short distances with zero emissions',
    image: '/service-bicycle.jpg',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-black font-bold mb-12">Our Service</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}