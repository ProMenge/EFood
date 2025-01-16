import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import { Restaurante } from '../Hero'

const RestaurantPage = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurante>()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const [isCartOpen, setCartOpen] = useState(false)
  const handleToggleCart = () => setCartOpen(!isCartOpen)

  // Busca os dados do restaurante da API
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do restaurante.')
        }
        const data = await response.json()
        setRestaurant(data)
      } catch (err) {
        if (err instanceof Error) {
          // Verifica se o erro é uma instância de Error e usa sua mensagem
          setError(err.message)
        } else {
          // Caso contrário, define uma mensagem genérica
          setError('Ocorreu um erro desconhecido.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurant()
  }, [id])

  // Tratamento para loading e erro
  if (loading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Erro: {error}</p>
  }

  // Verifica se o restaurante foi encontrado
  if (!restaurant) {
    return <p>Restaurante não encontrado.</p>
  }

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
