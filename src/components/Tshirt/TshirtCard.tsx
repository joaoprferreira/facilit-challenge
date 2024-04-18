import React from 'react'
import { TshirtCardProps } from './types'
import Image from 'next/image'
import Link from 'next/link'

const TshirtCard: React.FC<TshirtCardProps> = ({ tshirt }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white max-w-md">
      <div className="relative w-full h-48">
        <Image
          src={tshirt.image}
          alt={tshirt.name}
          height={100}
          objectFit="contain"
          className="mx-auto"
        />
      </div>
      <div className="p-4">
        <h2 className="text-gray-700 text-lg font-semibold mb-2">
          {tshirt.name}
        </h2>
        <p className="text-gray-600 mb-2">R$: {tshirt.price}</p>
        <div className="flex flex-wrap mb-2">
          <p className="text-gray-600 mr-2 font-semibold">Tamanhos:</p>
          {tshirt.sizes.map((size, index) => (
            <span
              key={index}
              className="mr-2 text-gray-600 border rounded-lg shadow-md min-w-4 cursor-pointer hover:text-blue-500 mb-2"
            >
              {size}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap">
          <p className="text-gray-600 mr-2 font-semibold">Cores:</p>
          {tshirt.colors.map((color, index) => (
            <span key={index} className="mr-2 text-gray-600 mb-2">
              {color}
            </span>
          ))}
        </div>
        <Link href={`/ShirtDetails/${tshirt.id}`}>
          <p className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded block">
            Ver detalhes
          </p>
        </Link>
      </div>
    </div>
  )
}

export default TshirtCard
