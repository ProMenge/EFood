import RestaurantList from '../../components/RestaurantList'

import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import HeroHeader from '../../components/HeroHeader'

export type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Hero = () => {
  const [restaurant, setRestaurant] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurant(res))
    )
  }, [])

  return (
    <>
      <HeroHeader />
      <RestaurantList restaurants={restaurant} />
      <Footer />
    </>
  )
}
export default Hero
