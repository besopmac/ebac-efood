import FoodModel from '../../models/Food'
import Food from '../Food'

import { Container, List } from './styles'

export type Props = {
  foods: FoodModel[]
}

const FoodList = ({ foods }: Props) => {
  return (
    <Container>
      <List>
        {foods.map((food) => (
          <Food key={food.id} {...food} />
        ))}
      </List>
    </Container>
  )
}

export default FoodList
