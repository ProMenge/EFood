import Restaurant from '../Restaurant/index.tsx'
import { Container, List } from './styles.ts'
import { Restaurante } from '../../pages/Hero/index.tsx'

export type Props = {
  restaurants: Restaurante[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <Container>
      <List>
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
      </List>
    </Container>
  )
}

export default RestaurantList
