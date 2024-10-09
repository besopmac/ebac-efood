import { useState } from 'react'
import { ItemCardapio } from '../../types/Restaurante'
import { shortDescription } from '../../utils/formatString'
import { Card, Title, Image, Button, Description } from './styles'

import Modal from '../Modal'

type Props = {
  item: ItemCardapio
}

const Food = ({ item }: Props) => {
  const [modal, setModal] = useState({
    item: item,
    isVisible: false
  })

  return (
    <>
      <Card>
        <Image src={item.foto} title={item.nome} />
        <Title>{item.nome}</Title>
        <Description>{shortDescription(item.descricao, 140)}</Description>
        <Button onClick={() => setModal({ isVisible: true, item })}>
          Adicionar ao carrinho
        </Button>
      </Card>

      <Modal
        item={modal.item}
        isVisible={modal.isVisible}
        onClose={() => setModal({ isVisible: false, item })}
      />
    </>
  )
}

export default Food
