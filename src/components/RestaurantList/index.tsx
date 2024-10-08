import RestaurantModel from '../../models/Restaurant'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <Container>
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} {...restaurant} />
        ))}
      </List>
    </Container>
  )
}

export default RestaurantList
