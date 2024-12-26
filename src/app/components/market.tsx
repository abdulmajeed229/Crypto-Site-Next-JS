'use client'

import { useState } from 'react'
import { FaBitcoin, FaEthereum, FaFeather } from 'react-icons/fa'
import { JSX } from 'react/jsx-runtime'

interface MarketData {
  id: number
  name: string
  symbol: string
  lastPrice: string
  change24h: string
  marketCap: string
  trend: 'up' | 'down'
}

export default function MarketUpdate() {
  const [activeCategory, setActiveCategory] = useState('View All')

  const categories = ['View All', 'Metaverse', 'Entertainment', 'Energy', 'NFT', 'Gaming', 'Music']

  const marketData: MarketData[] = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      lastPrice: '$56,623.54',
      change24h: '+1.45%',
      marketCap: '$880,423,640,582',
      trend: 'up'
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      lastPrice: '$3,212.54',
      change24h: '-5.12%',
      marketCap: '$400,423,640,582',
      trend: 'down'
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      lastPrice: '$1.00',
      change24h: '+0.02%',
      marketCap: '$68,423,640,582',
      trend: 'up'
    }
  ]

  const iconMap: Record<string, JSX.Element> = {
    BTC: <FaBitcoin className="text-yellow-500 w-5 h-5" />,
    ETH: <FaEthereum className="text-blue-400 w-5 h-5" />,
    USDT: <FaFeather className="text-green-500 w-5 h-5" /> // Placeholder for Tether
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8" data-aos="fade-up" data-aos-delay="200">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Market Update</h2>
        <button className="text-blue-500 hover:text-blue-400 text-sm mt-2 sm:mt-0">
          See All Coins
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-[#1e2230] text-gray-400 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] sm:min-w-full">
          <thead>
            <tr className="text-left text-gray-400 text-xs sm:text-sm">
              <th className="pb-4 pl-4">#</th>
              <th className="pb-4">Name</th>
              <th className="pb-4">Last Price</th>
              <th className="pb-4">24h %</th>
              <th className="pb-4">Market Cap</th>
              <th className="pb-4">Last 7 Days</th>
              <th className="pb-4"></th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((coin) => (
              <tr
                key={coin.id}
                className="border-t border-gray-800 text-white hover:bg-[#1e2230] transition-colors"
              >
                <td className="py-4 pl-4">{coin.id}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    {iconMap[coin.symbol]}
                    <div>
                      <div className="font-medium text-sm">{coin.name}</div>
                      <div className="text-xs text-gray-400">{coin.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-sm">{coin.lastPrice}</td>
                <td
                  className={`py-4 text-sm ${
                    coin.change24h.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {coin.change24h}
                </td>
                <td className="py-4 text-sm">{coin.marketCap}</td>
                <td className="py-4">
                  <div
                    className={`w-24 h-8 ${
                      coin.trend === 'up' ? 'bg-green-500/20' : 'bg-red-500/20'
                    } rounded`}
                  ></div>
                </td>
                <td className="py-4">
                  <button className="px-4 py-1 bg-[#1e2230] text-white rounded hover:bg-gray-700 transition-colors">
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
