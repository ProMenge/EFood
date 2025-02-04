import background from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

const HeroHeader = () => {
  return (
    <S.HeaderBar style={{ backgroundImage: `url(${background})` }}>
      <S.EfoodLogo src={logo} />

      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </S.HeaderBar>
  )
}

export default HeroHeader
