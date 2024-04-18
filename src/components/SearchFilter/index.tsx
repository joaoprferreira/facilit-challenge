import React, { useState, ChangeEvent } from 'react'

interface SearchFilterProps {
  onChange: (filters: Filters) => void
  onReset: () => void
}

interface Filters {
  name: string
  price: string
  size: string
  color: string
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onChange, onReset }) => {
  const [filters, setFilters] = useState<Filters>({
    name: '',
    price: '',
    size: '',
    color: '',
  })

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }))
    onChange({ ...filters, [name]: value })
  }

  const handleReset = () => {
    setFilters({ name: '', price: '', size: '', color: '' })
    onReset()
  }

  return (
    <div className="mb-4">
      <input
        type="text"
        name="name"
        placeholder="Busca por nome.."
        value={filters.name}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
      />
      <input
        type="number"
        name="price"
        placeholder="Preço até..."
        value={filters.price}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
      />
      <select
        name="size"
        value={filters.size}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mb-2 border rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Filtrar por tamanho...</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <select
        name="color"
        value={filters.color}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mb-2 border rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Filtrar por cor...</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
      </select>
      <button
        onClick={handleReset}
        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md"
      >
        Limpar filtros
      </button>
    </div>
  )
}

export default SearchFilter
