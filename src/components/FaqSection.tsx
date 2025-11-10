'use client'
import { useState } from 'react'
import faqs from '@/data/faqs.json'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4 max-w-3xl pt-20">
        <h2 className="text-3xl text-black font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions about our services? We’ve compiled answers to some of the most common ones.
          If you don’t find what you’re looking for, feel free to reach out directly.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              <div
                className={`px-4 pb-4 text-gray-600 transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
