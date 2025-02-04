import { useDispatch } from 'react-redux'
import MenuItemOBJ from '../../models/MenuItems'
import { addProduct } from '../../redux/cart/slice'
import * as S from './styles'

type MenuItemProps = {
  item: MenuItemOBJ
}

const MenuItem = ({ item }: MenuItemProps) => {
  const dispacth = useDispatch()
  const handdleProductClick = () => {
    dispacth(addProduct(item))
  }

  return (
    <S.Card>
      <S.ItemImage style={{ backgroundImage: `url(${item.image})` }} />
      <S.ItemInfo>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </S.ItemInfo>
      <S.ItemButton onClick={handdleProductClick}>Adicionar</S.ItemButton>
    </S.Card>
  )
}

export default MenuItem
