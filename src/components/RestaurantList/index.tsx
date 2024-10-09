import { Restaurante } from '../../types/Restaurante'
import RestaurantCard from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <List>
        {restaurantes.map((restaurante) => (
          <RestaurantCard key={restaurante.id} restaurante={restaurante} />
        ))}
      </List>
    </Container>
  )
}

export default RestaurantList
