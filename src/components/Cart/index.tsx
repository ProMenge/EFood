import {
  CartButton,
  CartContainer,
  CartInfos,
  CartItemsContainer
} from './styles'

import Pizza from '../../assets/images/Pizza.png'
import CartItem from '../CartItem'

type CartProps = {
  onClose: () => void
}

const Cart = ({ onClose }: CartProps) => {
  const items = [
    {
      id: 1,
      name: 'Pizza Marguerita',
      price: 60.9,
      quantity: 1,
      image: Pizza
    }
  ]

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContainer>
      <CartItemsContainer>
        {items.map((item) => (
          <CartItem
            image={item.image}
            name={item.name}
            price={item.price}
            key={item.id}
          />
        ))}
      </CartItemsContainer>
      <CartInfos>
        <p>Valor Total: </p>
        <p>R$ {totalPrice.toFixed(2)}</p>
      </CartInfos>
      <CartButton onClick={() => console.log('Finalizar compra')}>
        Finalizar Compra
      </CartButton>
      <CartButton onClick={onClose}>Fechar</CartButton>
    </CartContainer>
  )
}

export default Cart
