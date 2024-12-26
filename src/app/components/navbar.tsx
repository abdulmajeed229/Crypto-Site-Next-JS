'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiHexagon, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111827]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 text-blue-500">
                <FiHexagon className="w-full h-full" />

              </div>
              <span className="text-white text-xl font-bold">Cryptex</span>
            </Link>
          </div>


          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">

              <Link href="/" className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium">Homepage</Link>
              <Link href="/buy" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Buy Crypto</Link>
              <Link href="/markets" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Markets</Link>
              <Link href="/sell" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sell Crypto</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
              <Link href="/bitusdt" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">BITUSDT</Link>
            </div>

          </div>

          <div className="hidden md:block">
            <button className="bg-transparent hover:bg-white/10 text-white px-4 py-2 rounded-md text-sm font-medium border border-white/20">
              Wallet
            </button>
          </div>

          <div className="md:hidden">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium">Homepage</Link>
            <Link href="/buy" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Buy Crypto</Link>
            <Link href="/markets" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Markets</Link>
            <Link href="/sell" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sell Crypto</Link>
            <Link href="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link href="/bitusdt" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">BITUSDT</Link>
            <button className="w-full text-left bg-transparent hover:bg-white/10 text-white px-3 py-2 rounded-md text-base font-medium border border-white/20">
              Wallet
            </button>
            
          </div>
        </div>
      )}
    </nav>
  )
}
