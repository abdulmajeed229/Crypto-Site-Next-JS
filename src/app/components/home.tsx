"use client"
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function HomeContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#111827]">
      <div className="relative pt-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-20">
            
          <div className="lg:flex items-center justify-between flex-wrap">
       
            <div className="lg:w-1/2 w-full text-center lg:text-left" data-aos="fade-right">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Buy & Sell Digital Assets In The Cryptex
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors">
                  Get started now
                </button>
              </div>
            </div>

   
   
            <div className="lg:w-1/2 w-full mt-12 lg:mt-0" data-aos="fade-left">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">

                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
                <div className="relative">

                  <Image
                    src="/image/home.png"
                    alt="Crypto trading illustration"
                    width={800}
                    height={800}
                    className="relative z-10 w-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

