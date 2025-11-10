'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServiceHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with Zoom and Fade Animation */}
      <div className="absolute inset-0">
        <div 
          className={`w-full h-full transition-all duration-2000 ease-out transform ${
            isVisible 
              ? 'scale-100 opacity-60' 
              : 'scale-110 opacity-0'
          }`}
        >
          <Image
            src="/service-hero.jpg"
            alt="Delivery rider"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Animated Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent transition-opacity duration-1500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-red-600 rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-40 animate-float' : 'opacity-0'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center pt-40 pb-12">
        <div className="max-w-xl">
          {/* Animated Heading */}
          <h1 
            className={`text-white text-5xl font-bold mb-6 transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <span className="inline-block animate-slide-in-bounce">
              Services
            </span>
          </h1>
          
          {/* Animated Paragraph with Line-by-Line Animation */}
          <div 
            className={`text-white text-lg mb-8 transition-all duration-1000 delay-300 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p 
              className={`transition-all duration-700 delay-400 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              Explore the range of logistics
            </p>
            <p 
              className={`font-semibold transition-all duration-700 delay-600 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              solutions we offer for individuals
            </p>
            <p 
              className={`transition-all duration-700 delay-800 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              and businesses.
            </p>
          </div>
          
          {/* Animated Button with Hover Effects */}
          <Link href="https://wa.me/+2347057576394">
          <button 
            className={`relative bg-red-600 text-white px-8 py-3 rounded-md font-semibold 
              overflow-hidden group
              transition-all duration-500 delay-1000 transform
              hover:bg-red-700 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50
              active:scale-95 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
          >
            {/* Button Shine Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <span className="relative flex items-center gap-2">
              Book Now
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </span>
          </button>
          </Link>

          {/* Decorative Animated Line */}
          <div 
            className={`mt-8 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full transition-all duration-1500 delay-1200 ${
              isVisible ? 'w-48 opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-5px);
          }
          75% {
            transform: translateY(-20px) translateX(15px);
          }
        }
        
        @keyframes slide-in-bounce {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          60% {
            transform: translateX(10px);
            opacity: 1;
          }
          80% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-slide-in-bounce {
          animation: slide-in-bounce 1s ease-out forwards;
        }
        
        .duration-2000 {
          transition-duration: 2000ms;
        }
      `}</style>
    </section>
  )
}