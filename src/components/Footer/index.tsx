import Face from '../../assets/images/Face.svg'
import Insta from '../../assets/images/Insta.svg'
import X from '../../assets/images/X.svg'
import logo from '../../assets/images/logo.png'
import { EfoodLogo, FooterBar, Logo, Logos } from './styles'

const Footer = () => {
  return (
    <FooterBar>
      <EfoodLogo src={logo} />
      <Logos>
        <Logo src={Insta} />
        <Logo src={Face} />
        <Logo src={X} />
      </Logos>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </FooterBar>
  )
}

export default Footer
