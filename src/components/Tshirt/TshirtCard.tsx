import React from 'react'
import { TshirtCardProps } from './types'

const TshirtCard: React.FC<TshirtCardProps> = ({ tshirt }) => {
  return (
    <div className="border p-4 mb-4">
      <img src={tshirt.image} alt={tshirt.name} className="w-full mb-2" />
      <h2 className="text-lg font-semibold mb-1">{tshirt.name}</h2>
      <p className="text-gray-600 mb-2">${tshirt.price}</p>
      <p className="text-gray-600 mb-2">Sizes: {tshirt.sizes.join(', ')}</p>
      <p className="text-gray-600">Colors: {tshirt.colors.join(', ')}</p>
    </div>
  )
}

export default TshirtCard
