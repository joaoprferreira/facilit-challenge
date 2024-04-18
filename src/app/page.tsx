'use client'
import React, { useState } from 'react'
import SearchFilter from '@/components/SearchFilter'
import TshirtCard from '@/components/Tshirt/TshirtCard'
import { TshirtsData } from '@/data/Tshirt'

interface Tshirt {
  id: number
  name: string
  price: number
  sizes: string[]
  colors: string[]
}

interface Filters {
  name: string
  price: string
  size: string
  color: string
}

export default function Home() {
  const [filteredTshirts, setFilteredTshirts] = useState<Tshirt[]>(TshirtsData)

  const [isLoading, setIsLoading] = useState(false)
  const handleSearch = (filters: Filters) => {
    setIsLoading(true)
    const filtered = TshirtsData.filter((tshirt) => {
      const nameMatch = tshirt.name
        .toLowerCase()
        .includes(filters.name.toLowerCase())
      const priceMatch =
        !filters.price || tshirt.price <= parseFloat(filters.price)
      const sizeMatch = !filters.size || tshirt.sizes.includes(filters.size)
      const colorMatch = !filters.color || tshirt.colors.includes(filters.color)
      return nameMatch && priceMatch && sizeMatch && colorMatch
    })
    setFilteredTshirts(filtered)
    setIsLoading(false)
  }

  const handleReset = () => {
    setFilteredTshirts(TshirtsData)
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SearchFilter onChange={handleSearch} onReset={handleReset} />
        {isLoading ? (
          <p>carregando...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 justify-items-center ">
            {filteredTshirts.map((tshirt) => (
              <div key={tshirt.id} className="max-w-xs sm:max-w-none">
                <TshirtCard tshirt={tshirt} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
