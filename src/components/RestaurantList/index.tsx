import Restaurant from '../Restaurant/index.tsx'
import * as S from './styles.ts'
import { Restaurante } from '../../pages/Hero/index.tsx'
import Loader from '../Loader/index.tsx'

export type Props = {
  restaurants: Restaurante[]
  isLoading: boolean
}

const RestaurantList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }
  return (
    <S.Container>
      <S.List>
        {restaurants.map(
          ({ id, descricao, capa, tipo, titulo, avaliacao, destacado }) => (
            <Restaurant
              key={id}
              id={id}
              description={descricao}
              image={capa}
              info={tipo}
              title={titulo}
              stars={avaliacao}
              destacado={destacado}
            />
          )
        )}
      </S.List>
    </S.Container>
  )
}

export default RestaurantList
