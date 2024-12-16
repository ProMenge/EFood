import {
  CartButton,
  CartContainer,
  CartInfos,
  CartItemsContainer
} from './styles'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'

import CartItem from '../CartItem'

type CartProps = {
  onClose: () => void
}

const Cart = ({ onClose }: CartProps) => {
  const { items } = useSelector((state: RootState) => state.cartReducer)

  const totalPrice = items.reduce((sum, product) => sum + product.price, 0)

  return (
    <CartContainer>
      <CartItemsContainer>
        {items.map((product) => (
          <CartItem
            image={product.image}
            name={product.title}
            price={product.price}
            key={product.id}
            id={product.id}
          />
        ))}
      </CartItemsContainer>
      <CartInfos>
        <p>Valor Total: </p>
        <p>R$: {totalPrice.toFixed(2)} </p>
      </CartInfos>
      <CartButton>Finalizar Compra</CartButton>
      <CartButton onClick={onClose}>Fechar</CartButton>
    </CartContainer>
  )
}

export default Cart
