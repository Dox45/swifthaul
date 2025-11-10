import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={50} 
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted partner for fast, reliable, and secure delivery services across Nigeria. We handle your packages with care.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition text-sm">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-white/80 hover:text-white transition text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/+2347057576394" className="text-white/80 hover:text-white transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://tiktok.com/@swifthaul.logisti?_t=ZS-8yXTTMktoH6&_r=1" className="text-white/80 hover:text-white transition text-sm">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="https://x.com/swifthaull?s=21" className="text-white/80 hover:text-white transition text-sm">
                  X
                </a>
              </li>
              <li>
                <a href="https://www.Instagram.com/swifthaul_logistics?igsh=ZDMzZDJkajVwZm85&utm_source=gr" className="text-white/80 hover:text-white transition text-sm">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white transition text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white transition text-sm">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Location: Abuja, Lagos, Nigeria</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Phone: +234 7057576394</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Email: swifthuallogisticsservices@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Swifthual Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  )
}