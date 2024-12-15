import trattoria from '../../assets/images/TrattoriaBackground.png'
import { Infos, RestaurantBanner } from './styles'

type Props = {
  name: string
  type: string
}

const Banner = ({ name, type }: Props) => {
  return (
    <>
      <RestaurantBanner style={{ backgroundImage: `url(${trattoria})` }}>
        <Infos>
          <h3>{type}</h3>

          <h2>{name}</h2>
        </Infos>
      </RestaurantBanner>
    </>
  )
}

export default Banner
