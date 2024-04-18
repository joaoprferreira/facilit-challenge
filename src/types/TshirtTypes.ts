import { StaticImageData } from 'next/image'

export interface Tshirt {
  id: number
  name: string
  price: number
  image: StaticImageData
  sizes: string[]
  colors: string[]
}
