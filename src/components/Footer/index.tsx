import Face from '../../assets/images/Face.svg'
import Insta from '../../assets/images/Insta.svg'
import X from '../../assets/images/X.svg'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterBar>
      <S.EfoodLogo src={logo} />
      <S.Logos>
        <S.Logo src={Insta} />
        <S.Logo src={Face} />
        <S.Logo src={X} />
      </S.Logos>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </S.FooterBar>
  )
}

export default Footer
