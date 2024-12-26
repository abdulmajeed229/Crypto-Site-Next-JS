'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
       
        <div className="space-y-8" data-aos="fade-right">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Free Your Money & Invest With Confident
          </h1>
          <p className="text-gray-400 text-lg">
            With Cryptor Trade, you can be sure your trading skills are matched
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="100">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="w-4 h-4 text-white"
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">Buy, Sell, And Trade On The Go</h3>
                <p className="text-gray-400">Manage Your Holdings From Your Mobile Device</p>
              </div>
            </div>

            <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="200">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="w-4 h-4 text-white"
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">Take Control Of Your Wealth</h3>
                <p className="text-gray-400">Rest Assured You (And Only You) Have Access To Your Funds</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="300">
        
                    <a href="#" className="block w-[140px]">
              <Image
                src="/image/apple.png?height=40&width=140"
                alt="Download on the App Store"
                width={140}
                height={40}
                className="h-[40px] w-[140px]"
              />
            </a>
          </div>
        </div>

        
        <div className="relative" data-aos="fade-left">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="relative">

           
            <div className="relative z-10">
              <Image
                src="/image/mob.png?height=600&width=300"
                alt="App Screenshot"
                width={1000}
                height={1000}
                className="w-full max-w-[500px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

