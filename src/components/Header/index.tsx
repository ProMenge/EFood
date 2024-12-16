import background from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { CartButton, EfoodLogo, HeaderBar } from './styles'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { StyledLink } from '../Restaurant/styles'

type HeaderProps = {
  onCartToggle: () => void
}

const HeroHeader = ({ onCartToggle }: HeaderProps) => {
  const { items } = useSelector((state: RootState) => state.cartReducer)

  return (
    <HeaderBar style={{ backgroundImage: `url(${background})` }}>
      <div className="header-container">
        <StyledLink to="/">Restaurantes</StyledLink>
        <EfoodLogo src={logo} />
        <CartButton onClick={onCartToggle}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </div>
    </HeaderBar>
  )
}

export default HeroHeader
