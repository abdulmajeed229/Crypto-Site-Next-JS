'use client'

import { useState } from 'react'
import { FaBitcoin, FaEthereum, FaCircle } from 'react-icons/fa'
import { JSX } from 'react/jsx-runtime'

interface CryptoPrice {
  name: string
  symbol: string
  price: string
  change: string
  changeColor: string
}

export default function PriceTicker() {
  const [prices] = useState<CryptoPrice[]>([
    {
      name: 'Bitcoin',
      symbol: 'BTC/USD',
      price: '46,168.95',
      change: '-0.78%',
      changeColor: 'bg-red-500',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH/USD',
      price: '3,480.04',
      change: '+0.55%',
      changeColor: 'bg-green-500',
    },
    {
      name: 'Tether',
      symbol: 'USDT/USD',
      price: '1.00',
      change: '-0.01%',
      changeColor: 'bg-red-500',
    },
    {
      name: 'BNB',
      symbol: 'BNB/USD',
      price: '443.56',
      change: '-1.24%',
      changeColor: 'bg-red-500',
    },
  ])

  
  const iconMap: Record<string, JSX.Element> = {
    BTC: <FaBitcoin className="w-8 h-8 text-yellow-500" />,
    ETH: <FaEthereum className="w-8 h-8 text-blue-400" />,
    USDT: <FaCircle className="w-8 h-8 text-gray-400" />,
    BNB: <FaCircle className="w-8 h-8 text-yellow-600" />,
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4" data-aos="fade-up">
      {prices.map((crypto) => (
        <div
          key={crypto.symbol}
          className="bg-[#1e2230] p-4 rounded-lg border border-gray-800 shadow-md transition-transform transform hover:scale-105"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
           
              {iconMap[crypto.symbol.split('/')[0]]}
            </div>
            <div>
              <div className="text-sm text-gray-400 font-medium">{crypto.name}</div>
              <div className="text-xs text-gray-500">{crypto.symbol}</div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">
              USD {crypto.price}
            </div>
            <div
              className={`text-sm px-2 py-1 rounded-lg font-semibold ${crypto.changeColor} text-white`}
            >
              {crypto.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
