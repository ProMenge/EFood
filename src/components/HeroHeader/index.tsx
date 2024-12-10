import background from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { EfoodLogo, HeaderBar } from './styles'

const HeroHeader = () => {
  return (
    <HeaderBar style={{ backgroundImage: `url(${background})` }}>
      <EfoodLogo src={logo} />

      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </HeaderBar>
  )
}

export default HeroHeader
