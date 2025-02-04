import background from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { StyledLink } from '../Restaurant/styles'

type HeaderProps = {
  onCartToggle: () => void
}

const HeroHeader = ({ onCartToggle }: HeaderProps) => {
  const { items } = useSelector((state: RootState) => state.cartReducer)

  return (
    <S.HeaderBar style={{ backgroundImage: `url(${background})` }}>
      <div className="header-container">
        <StyledLink to="/">Restaurantes</StyledLink>
        <S.EfoodLogo src={logo} />
        <S.CartButton onClick={onCartToggle}>
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBar>
  )
}

export default HeroHeader
