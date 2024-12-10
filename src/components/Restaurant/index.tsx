import Tag from '../Tag'
import {
  Card,
  Description,
  Details,
  ImageContainer,
  Infos,
  MainDetails,
  Title,
  Button,
  StyledLink
} from './styles'
import Star from '../../assets/images/Star.png'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  stars: string
}

const Restaurant = ({ title, description, infos, image, stars }: Props) => {
  return (
    <Card>
      <ImageContainer>
        <img src={image} alt={title} width={472} />
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
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
          <StyledLink to="/restaurant">Saiba Mais</StyledLink>
        </Button>
      </Details>
    </Card>
  )
}
export default Restaurant
