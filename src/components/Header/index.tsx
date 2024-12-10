import background from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { EfoodLogo, HeaderBar } from './styles'

import { StyledLink } from '../Restaurant/styles'

const HeroHeader = () => {
  return (
    <HeaderBar style={{ backgroundImage: `url(${background})` }}>
      <StyledLink to="/">Restaurantes</StyledLink>
      <EfoodLogo src={logo} />
      <StyledLink to="/">0 produto(s) no carrinho</StyledLink>
    </HeaderBar>
  )
}

export default HeroHeader
