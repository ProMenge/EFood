import { useDispatch } from 'react-redux'
import MenuItemOBJ from '../../models/MenuItems'
import { addProduct } from '../../redux/cart/slice'
import { Card, ItemButton, ItemImage, ItemInfo } from './styles'

type MenuItemProps = {
  item: MenuItemOBJ
}

const MenuItem = ({ item }: MenuItemProps) => {
  const dispacth = useDispatch()
  const handdleProductClick = () => {
    dispacth(addProduct(item))
  }

  return (
    <Card>
      <ItemImage style={{ backgroundImage: `url(${item.image})` }} />
      <ItemInfo>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </ItemInfo>
      <ItemButton onClick={handdleProductClick}>Adicionar</ItemButton>
    </Card>
  )
}

export default MenuItem
