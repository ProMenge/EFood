import RestaurantOBJ from '../../models/Restaurant.ts'
import Restaurant from '../Restaurant/index.tsx'

import { Container, List } from './styles.ts'

export type Props = {
  restaurants: RestaurantOBJ[]
}
const RestaurantList = ({ restaurants }: Props) => {
  return (
    <Container>
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
            title={restaurant.title}
            stars={restaurant.stars}
          />
        ))}
      </List>
    </Container>
  )
}

export default RestaurantList
