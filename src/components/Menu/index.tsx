import MenuItemOBJ from '../../models/MenuItems'
import MenuItem from '../MenuItem'
import * as S from './styles'

type Props = {
  menuItems: MenuItemOBJ[]
}

const Menu = ({ menuItems }: Props) => {
  return (
    <S.Container>
      <S.List>
        {menuItems.map((menuItem) => (
          <MenuItem item={menuItem} key={menuItem.id} />
        ))}
      </S.List>
    </S.Container>
  )
}

export default Menu
