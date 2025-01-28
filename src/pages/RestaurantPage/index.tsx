import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import { useGetRestaurantQuery } from '../../services/api'
import { useState } from 'react'

const RestaurantPage = () => {
  const { id } = useParams() // Obtém o ID do restaurante da URL
  const {
    data: restaurant,
    isLoading,
    isError,
    error
  } = useGetRestaurantQuery(id!)

  const [isCartOpen, setCartOpen] = useState(false)
  const handleToggleCart = () => setCartOpen(!isCartOpen)

  // Tratamento de loading
  if (isLoading) {
    return <p>Carregando...</p>
  }

  // Tratamento de erro
  if (isError) {
    const errorMessage =
      error && 'data' in error
        ? (error.data as { message: string }).message || 'Erro desconhecido'
        : 'Erro ao buscar os dados do restaurante.'
    return <p>Erro: {errorMessage}</p>
  }

  // Verifica se o restaurante foi encontrado
  if (!restaurant) {
    return <p>Restaurante não encontrado.</p>
  }

  // Renderiza os componentes com os dados do restaurante
  return (
    <>
      <Header onCartToggle={handleToggleCart} />
      <Banner
        name={restaurant.titulo}
        type={restaurant.tipo}
        url={restaurant.capa}
      />
      <Menu
        menuItems={restaurant.cardapio.map((item) => ({
          title: item.nome,
          description: item.descricao,
          image: item.foto,
          id: item.id,
          modalDescription: `${item.descricao} Serve: ${item.porcao}`,
          price: item.preco
        }))}
      />
      <Footer />
      {/* Renderiza o carrinho condicionalmente */}
      {isCartOpen && <Cart onClose={handleToggleCart} />}
    </>
  )
}

export default RestaurantPage
