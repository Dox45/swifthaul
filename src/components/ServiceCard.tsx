// import Image from 'next/image'

// interface ServiceCardProps {
//   title: string
//   description: string
//   image: string
// }

// export default function ServiceCard({ title, description, image }: ServiceCardProps) {
//   return (
//     <div className="bg-white rounded-lg text-black overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
//       <div className="relative h-64 w-full">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover"
//         />
//       </div>
      
//       <div className="p-6 text-center">
//         <h3 className="text-xl font-bold mb-3">{title}</h3>
//         <p className="text-gray-600 text-sm leading-relaxed">
//           {description}
//         </p>
//       </div>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  image: string
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-white rounded-lg text-black overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Hover Effects */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 transform ${
            isHovered 
              ? 'scale-110 brightness-75 rotate-2' 
              : 'scale-100 brightness-100 rotate-0'
          }`}
        />
        
        {/* Gradient Overlay on Hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-red-600/80 via-red-600/20 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Animated Border */}
        <div 
          className={`absolute inset-0 border-4 border-red-600 transition-all duration-500 ${
            isHovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        />
        
        {/* Corner Accent */}
        <div 
          className={`absolute top-0 right-0 w-16 h-16 bg-red-600 transform rotate-45 translate-x-8 -translate-y-8 transition-all duration-500 ${
            isHovered ? 'translate-x-4 -translate-y-4 opacity-30' : 'opacity-0'
          }`}
        />
      </div>
      
      {/* Content Section */}
      <div className="p-6 text-center relative">
        {/* Title with Color Change */}
        <h3 
          className={`text-xl font-bold mb-3 transition-all duration-500 ${
            isHovered ? 'text-red-600 scale-105' : 'text-gray-900 scale-100'
          }`}
        >
          {title}
        </h3>
        
        {/* Description with Slide Animation */}
        <p 
          className={`text-gray-600 text-sm leading-relaxed transition-all duration-500 transform ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-80'
          }`}
        >
          {description}
        </p>
        
        {/* "Learn More" Button that Appears on Hover */}
        <div 
          className={`mt-4 inline-flex items-center text-red-600 font-semibold text-sm transition-all duration-500 transform ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <span>Learn More</span>
          <svg 
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : 'translate-x-0'
            }`}
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
        </div>
      </div>
      
      {/* Pulsing Glow Effect */}
      {isHovered && (
        <div 
          className="absolute inset-0 rounded-lg pointer-events-none animate-pulse-glow"
        />
      )}
      
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(220, 38, 38, 0.6);
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}