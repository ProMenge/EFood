import MenuItemOBJ from '../../models/MenuItems'
import MenuItem from '../MenuItem'
import { Container, List } from './styles'

type Props = {
  menuItems: MenuItemOBJ[]
}

const Menu = ({ menuItems }: Props) => {
  return (
    <Container>
      <List>
        {menuItems.map((menuItem) => (
          <MenuItem item={menuItem} key={menuItem.id} />
        ))}
      </List>
    </Container>
  )
}

export default Menu
