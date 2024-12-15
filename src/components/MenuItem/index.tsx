import MenuItemOBJ from '../../models/MenuItems'
import { Card, ItemButton, ItemImage, ItemInfo } from './styles'

type MenuItemProps = {
  item: MenuItemOBJ
}

const MenuItem = ({ item }: MenuItemProps) => {
  // const dispatch = useDispatch()

  return (
    <Card>
      <ItemImage style={{ backgroundImage: `url(${item.image})` }} />
      <ItemInfo>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </ItemInfo>
      <ItemButton>Adicionar</ItemButton>
    </Card>
  )
}

export default MenuItem
