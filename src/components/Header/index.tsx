import background from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { CartButton, EfoodLogo, HeaderBar } from './styles'

import { StyledLink } from '../Restaurant/styles'

type HeaderProps = {
  onCartToggle: () => void
}

const HeroHeader = ({ onCartToggle }: HeaderProps) => {
  return (
    <HeaderBar style={{ backgroundImage: `url(${background})` }}>
      <StyledLink to="/">Restaurantes</StyledLink>
      <EfoodLogo src={logo} />
      <CartButton onClick={onCartToggle}>0-produto(s) no carrinho</CartButton>
    </HeaderBar>
  )
}

export default HeroHeader
