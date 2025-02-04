import RestaurantList from '../../components/RestaurantList'
import Footer from '../../components/Footer'
import HeroHeader from '../../components/HeroHeader'
import { useGetRestaurantListQuery } from '../../services/api'
import Loader from '../../components/Loader'

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
  const { data: restaurants, isLoading, isError } = useGetRestaurantListQuery()

  if (isLoading) {
    return <Loader />
  }

  if (isError || !restaurants) {
    return <h4>Error loading restaurants</h4>
  }

  if (restaurants) {
    return (
      <>
        <HeroHeader />
        <RestaurantList isLoading={isLoading} restaurants={restaurants} />
        <Footer />
      </>
    )
  }
  return <h4>Loading</h4>
}

export default Hero
