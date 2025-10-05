// import Link from 'next/link'
// import Image from 'next/image'

// export default function Header() {
//   return (
//     <header className="absolute top-0 left-0 right-0 z-50 bg-red-600">
//       <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <Link href="/" className="flex items-center">
//           <Image 
//             src="/logo.png" 
//             alt="Logo" 
//             width={40} 
//             height={40}
//             className="h-10 w-auto"
//           />
//         </Link>
        
//         <div className="flex items-center gap-8">
//           <Link 
//             href="/" 
//             className="text-white font-semibold hover:text-gray-200 transition"
//           >
//             Home
//           </Link>
//           <Link 
//             href="/service" 
//             className="text-white font-semibold hover:text-gray-200 transition"
//           >
//             Service
//           </Link>
//           <Link 
//             href="/about" 
//             className="text-white font-semibold hover:text-gray-200 transition"
//           >
//             About us
//           </Link>
//         </div>
//       </nav>
//     </header>
//   )
// }



'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-red-600">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={40} 
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className={`font-semibold transition ${
              pathname === '/' 
                ? 'text-white border-b-2 border-white' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/service" 
            className={`font-semibold transition ${
              pathname === '/service' 
                ? 'text-white border-b-2 border-white' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Service
          </Link>
          <Link 
            href="/about" 
            className={`font-semibold transition ${
              pathname === '/about' 
                ? 'text-white border-b-2 border-white' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            About us
          </Link>
        </div>
      </nav>
    </header>
  )
}