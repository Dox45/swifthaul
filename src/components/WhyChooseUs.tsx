// import { Clock, DollarSign, MapPin, Shield } from 'lucide-react'

// const features = [
//   {
//     icon: Clock,
//     title: 'Fast Delivery',
//     description: 'Timely deliveries across major cities'
//   },
//   {
//     icon: DollarSign,
//     title: 'Affordable Rates',
//     description: 'Cost-effective pricing for every budget'
//   },
//   {
//     icon: MapPin,
//     title: 'Time Tracking',
//     description: 'Easily monitor package across major cities'
//   },
//   {
//     icon: Shield,
//     title: 'Trusted & Secure',
//     description: 'Your items are handled with quality care'
//   }
// ]

// export default function WhyChooseUs() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto text-black px-4">
//         <h2 className="text-3xl font-bold mb-12">Why choose us?</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 mb-4">
//                 <feature.icon className="w-8 h-8 text-gray-700" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useState, useEffect, useRef } from 'react'
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
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto text-black px-4">
        {/* Animated Heading */}
        <h2 
          className={`text-3xl font-bold mb-12 transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          Why choose us?
        </h2>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                } ${isHovered ? 'scale-105' : 'scale-100'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms` 
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon Container with Multiple Animations */}
                <div className="relative inline-block mb-4">
                  {/* Pulsing Background Ring */}
                  <div 
                    className={`absolute inset-0 rounded-full bg-red-600 transition-all duration-500 ${
                      isHovered 
                        ? 'scale-150 opacity-20 animate-ping' 
                        : 'scale-100 opacity-0'
                    }`}
                  />
                  
                  {/* Main Icon Circle */}
                  <div 
                    className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full border-2 transition-all duration-500 ${
                      isHovered 
                        ? 'border-red-600 bg-red-600 shadow-lg shadow-red-600/50 rotate-12' 
                        : 'border-gray-300 bg-white rotate-0'
                    }`}
                  >
                    <Icon 
                      className={`w-8 h-8 transition-all duration-500 ${
                        isHovered 
                          ? 'text-white scale-110' 
                          : 'text-gray-700 scale-100'
                      }`}
                    />
                  </div>
                  
                  {/* Rotating Border Ring */}
                  <div 
                    className={`absolute inset-0 rounded-full border-2 border-dashed border-red-600 transition-all duration-700 ${
                      isHovered 
                        ? 'scale-125 opacity-100 animate-spin-slow' 
                        : 'scale-100 opacity-0'
                    }`}
                  />
                </div>
                
                {/* Title with Bounce Animation */}
                <h3 
                  className={`text-xl font-bold mb-3 transition-all duration-500 ${
                    isHovered 
                      ? 'text-red-600 scale-105' 
                      : 'text-gray-900 scale-100'
                  }`}
                >
                  {feature.title}
                </h3>
                
                {/* Description with Slide Animation */}
                <p 
                  className={`text-gray-600 text-sm leading-relaxed transition-all duration-500 transform ${
                    isHovered 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-1 opacity-80'
                  }`}
                >
                  {feature.description}
                </p>
                
                {/* Underline Animation */}
                <div 
                  className={`mx-auto mt-4 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-500 ${
                    isHovered 
                      ? 'w-16 opacity-100' 
                      : 'w-0 opacity-0'
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg) scale(1.25);
          }
          to {
            transform: rotate(360deg) scale(1.25);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  )
}