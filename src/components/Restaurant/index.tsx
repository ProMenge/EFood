import Star from '../../assets/images/Star.png'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  id: number
  title: string
  description: string
  info: string
  image: string
  stars: number
  destacado: boolean
}

const Restaurant = ({
  id,
  title,
  description,
  info,
  image,
  stars,
  destacado
}: Props) => {
  return (
    <S.Card>
      <S.ImageContainer>
        <img src={image} alt={title} width={472} />
        <S.Infos>
          {destacado && <Tag>Destacado</Tag>}
          <Tag>{info}</Tag>
        </S.Infos>
      </S.ImageContainer>
      <S.Details>
        <S.MainDetails>
          <S.Title>{title}</S.Title>
          <div className="stars">
            <p>{stars}</p>
            <img src={Star} alt="Stars" />
          </div>
        </S.MainDetails>
        <S.Description>{description}</S.Description>
        <S.Button>
          <S.StyledLink to={`/restaurant/${id}`}>Saiba Mais</S.StyledLink>
        </S.Button>
      </S.Details>
    </S.Card>
  )
}

export default Restaurant
