import * as S from './styles'

import { removeProduct } from '../../redux/cart/slice'
import { useDispatch } from 'react-redux'

import removeIcon from '../../assets/images/lixeira-de-reciclagem 1.png'

type CartItemProps = {
  id: number
  image: string
  name: string
  price: number
}

const CartItem = ({ id, image, name, price }: CartItemProps) => {
  const dispatch = useDispatch()

  const handleRemoveClick = () => {
    dispatch(removeProduct(id)) // Passa o id do item ao dispatch
    console.log(id)
  }

  return (
    <S.CartItemContainer>
      <S.CartItemImage src={image} alt={name} />
      <S.CartItemInfo>
        <h3>{name}</h3>
        <p>R$ {price.toFixed(2)}</p>
      </S.CartItemInfo>
      <S.CartRemove onClick={handleRemoveClick}>
        <img src={removeIcon} alt="Remover item" />
      </S.CartRemove>
    </S.CartItemContainer>
  )
}

export default CartItem
