import * as S from './styles'

type Props = {
  name: string
  type: string
  url: string
}

const Banner = ({ name, type, url }: Props) => {
  return (
    <>
      <S.RestaurantBanner style={{ backgroundImage: `url(${url})` }}>
        <S.Infos>
          <h3>{type}</h3>

          <h2>{name}</h2>
        </S.Infos>
      </S.RestaurantBanner>
    </>
  )
}

export default Banner
