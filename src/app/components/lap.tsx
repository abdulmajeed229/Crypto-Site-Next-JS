'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function CryptexSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,
      easing: 'ease-out', 
    })
  }, [])

  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        <div 
          className="w-full max-w-xl mx-auto md:mx-0"
          data-aos="fade-right"
          data-aos-delay="100" 
        >
          <Image
            src="/image/lap.png"
            alt="Cryptex Trading Platform Interface"
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        <div className="text-white space-y-8">
          <h2 
            className="text-4xl md:text-5xl font-bold leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            What Is Cryptex
          </h2>

          <p 
            className="text-gray-400 text-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Experience a variety of trading on Bitcost. You can use various 
            types of coin transactions such as Spot Trade, Futures Trade, 
            P2P, Staking, Mining, and margin.
          </p>

          <div 
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                {/* Removed SVG, replaced with simple text */}
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  View real-time cryptocurrency prices
                </h3>
                <p className="text-gray-400">
                  Experience a variety of trading on Bitcost. You can use various types of 
                  coin transactions such as Spot Trade, Futures Trade, P2P, Staking, 
                  Mining, and margin.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                {/* Removed SVG, replaced with simple text */}
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Buy and sell BTC, ETH, XRP, OKB, Etc...
                </h3>
                <p className="text-gray-400">
                  Experience a variety of trading on Bitcost. You can use various types of 
                  coin transactions such as Spot Trade, Futures Trade, P2P, Staking, 
                  Mining, and margin.
                </p>
              </div>
            </div>
          </div>

          <button 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  )
}
