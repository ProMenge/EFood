import MenuItem from '../MenuItem'
import { List, Container } from './styles'
import MenuItemOBJ from '../../models/MenuItems'

type Props = {
  menuItems: MenuItemOBJ[]
}

const Menu = ({ menuItems }: Props) => {
  return (
    <Container>
      <List>
        {menuItems.map((menuItem) => (
          <MenuItem
            description={menuItem.description}
            image={menuItem.image}
            title={menuItem.title}
            key={menuItem.id}
          />
        ))}
      </List>
    </Container>
  )
}

export default Menu
