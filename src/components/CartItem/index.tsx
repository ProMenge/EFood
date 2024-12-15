import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartRemove
} from './styles'

import removeIcon from '../../assets/images/lixeira-de-reciclagem 1.png'

type CartItemProps = {
  image: string
  name: string
  price: number

  onRemove: () => void
}

const CartItem = ({
  image,
  name,
  price,

  onRemove
}: CartItemProps) => {
  return (
    <CartItemContainer>
      <CartItemImage src={image} alt={name} />
      <CartItemInfo>
        <h3>{name}</h3>
        <p>R$ {price.toFixed(2)}</p>
      </CartItemInfo>
      <CartRemove onClick={onRemove}>
        <img src={removeIcon} />
      </CartRemove>
    </CartItemContainer>
  )
}

export default CartItem
