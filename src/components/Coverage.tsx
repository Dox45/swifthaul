'use client';

import React from 'react';
import { MapPin, Package, Home, Edit3, Share2, MessageCircle } from 'lucide-react';
import Image from 'next/image'
import Link from "next/link"

export default function Coverage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-red-600 text-white pt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Ilorin, Kwara State, Expanding Nationwide Soon!
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                  We're currently serving Kwara State, with plans to cover all of Nigeria. Stay tuned as we grow to serve you better.
                </p>
               <Link href="/">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto lg:mx-0">
                  <Home className="w-5 h-5" />
                  Home
                </button>
                </Link>
              </div>

              {/* Right Image - Package Hand */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Placeholder for package hand image */}
                  <Image
                      src="/location-red.png"
                      alt="Delivery person"
                      fill
                      className="object-cover opacity-70"
                      priority
                    />
                  <div className="absolute -top-4 -right-4 bg-red-700 text-white p-3 rounded-full">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Map Image */}
              <div className="order-2 lg:order-1">
                {/* Placeholder for Nigeria map image */}
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 md:h-full min-h-96 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <Image
                          src="/coverage-map.png"
                          alt="Delivery person"
                          fill
                          className="object-cover opacity-70"
                          priority
                        />
                  </div>
                  {/* Red pin on Ilorin (approximate position) */}
                  <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Currently Available in:
                </h2>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-red-600">
                    Ilorin, Kwara State
                  </p>
                  <p className="text-lg text-gray-600">
                    Coming Soon:
                  </p>
                  <p className="text-xl font-semibold text-gray-700">
                    Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
       
      </div>
    </>
  );
}