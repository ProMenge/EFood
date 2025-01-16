import { Infos, RestaurantBanner } from './styles'

type Props = {
  name: string
  type: string
  url: string
}

const Banner = ({ name, type, url }: Props) => {
  return (
    <>
      <RestaurantBanner style={{ backgroundImage: `url(${url})` }}>
        <Infos>
          <h3>{type}</h3>

          <h2>{name}</h2>
        </Infos>
      </RestaurantBanner>
    </>
  )
}

export default Banner
