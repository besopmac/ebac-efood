import { Restaurante } from '../../types/Restaurante'
import Food from '../Food'

import { Container, List } from './styles'

export type Props = {
  cardapio: Restaurante['cardapio']
}

const Cardapio = ({ cardapio }: Props) => {
  return (
    <Container>
      <List>
        {cardapio.map((item) => (
          <Food key={item.id} item={item} />
        ))}
      </List>
    </Container>
  )
}

export default Cardapio
