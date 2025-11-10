'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 animate-zoom-in">
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
          {/* Animated Heading */}
          <h1 
            className={`text-white text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}
          >
            <span className="inline-block animate-bounce-in delay-100">
              Swift, Reliable Deliveries
            </span>
            <br />
            <span className="inline-block animate-bounce-in delay-300">
              Within And Across
            </span>
            <br />
            <span className="inline-block animate-bounce-in delay-500">
              States
            </span>
          </h1>
          
          {/* Animated Paragraph */}
          <p 
            className={`text-white text-lg mb-8 transition-all duration-1000 delay-700 transform ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            From your city to the next, trust
            <br />
            us with your deliveries
          </p>
          
          {/* Animated Button */}
         <div className="flex items-center gap-x-4 mt-4">
          <Link href="https://wa.me/+2347057576394">
            <button 
              className={`bg-red-600 text-white px-8 py-3 rounded-md font-semibold 
                hover:bg-red-700 hover:scale-105 hover:shadow-2xl
                active:scale-95
                transition-all duration-300 delay-1000 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }
                animate-pulse-slow`}
            >
              Book Now
            </button>
          </Link>

          <Link href="/service">
            <button 
              className={`bg-transparent border-red text-white px-8 py-3 rounded-md font-semibold 
                hover:bg-red-700 hover:scale-105 hover:shadow-2xl
                active:scale-95
                transition-all duration-300 delay-1000 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }
                animate-pulse-slow`}
            >
              Learn More
            </button>
          </Link>
        </div>


        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes zoom-in {
          from {
            transform: scale(1.2);
          }
          to {
            transform: scale(1);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(220, 38, 38, 0);
          }
        }
        
        .animate-zoom-in {
          animation: zoom-in 1.5s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}