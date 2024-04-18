import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'
import { TshirtsData } from '@/data/Tshirt'
import TshirtDetails from '@/components/Tshirt/TshirtCard'
import Image, { StaticImageData } from 'next/image'

interface Tshirt {
  id: number
  name: string
  price: number
  image: StaticImageData
  sizes: string[]
  colors: string[]
}

const TshirtDetailsPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [selectedTshirt, setSelectedTshirt] = useState<Tshirt | null>(null)

  useEffect(() => {
    if (id) {
      const tshirt = TshirtsData.find(
        (tshirt) => tshirt.id === parseInt(id as string)
      )
      setSelectedTshirt(tshirt || null)
    }
  }, [id])

  return (
    <div className="container mx-auto py-8">
      {selectedTshirt && (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={selectedTshirt.image}
            alt={selectedTshirt.name}
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4">
              {selectedTshirt.name}
            </h1>
            <p className="text-gray-700 text-lg mb-2">
              R$: {selectedTshirt.price.toFixed(2)}
            </p>
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Tamanhos:</p>
              <div className="flex flex-wrap space-x-2">
                {selectedTshirt.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Cores:</p>
              <div className="flex space-x-2">
                {selectedTshirt.colors.map((color, index) => (
                  <span
                    key={index}
                    className="w-6 h-6 bg-gray-200 rounded-full"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TshirtDetailsPage
