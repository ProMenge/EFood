import Star from '../../assets/images/Star.png'
import Tag from '../Tag'
import {
  Button,
  Card,
  Description,
  Details,
  ImageContainer,
  Infos,
  MainDetails,
  StyledLink,
  Title
} from './styles'

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
    <Card>
      <ImageContainer>
        <img src={image} alt={title} width={472} />
        <Infos>
          {destacado && <Tag>Destacado</Tag>}
          <Tag>{info}</Tag>
        </Infos>
      </ImageContainer>
      <Details>
        <MainDetails>
          <Title>{title}</Title>
          <div className="stars">
            <p>{stars}</p>
            <img src={Star} alt="Stars" />
          </div>
        </MainDetails>
        <Description>{description}</Description>
        <Button>
          <StyledLink to={`/restaurant/${id}`}>Saiba Mais</StyledLink>
        </Button>
      </Details>
    </Card>
  )
}

export default Restaurant
