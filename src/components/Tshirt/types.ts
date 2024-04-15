export interface Tshirt {
  id: number
  name: string
  price: number
  image: string
  sizes: string[]
  colors: string[]
}

export interface TshirtCardProps {
  tshirt: Tshirt
}
