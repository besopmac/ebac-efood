import { ItemCardapio } from '../../types/Restaurante'
import { shortDescription } from '../../utils/formatString'
import { Card, Title, Image, ButtonLink, Description } from './styles'

import Modal from '../Modal'

type Props = {
  item: ItemCardapio
}

const Food = ({ item }: Props) => {
  return (
    <>
      <Card>
        <Image src={item.foto} title={item.nome} />
        <Title>{item.nome}</Title>
        <Description>{shortDescription(item.descricao, 140)}</Description>
        <ButtonLink to={'/'}>Adicionar ao carrinho</ButtonLink>
      </Card>

      <Modal />
    </>
  )
}

export default Food
