import { Button } from '../Food/styles'
import { Wrapper, ModalContent, ModalInfo } from './styles'

import { ItemCardapio } from '../../types/Restaurante'
import { formatPrice } from '../../utils/formatPrice'

import close from '../../assets/images/close.svg'

type Props = {
  item: ItemCardapio
  isVisible: boolean
  onClose: () => void
}

const Modal = ({ item, isVisible, onClose }: Props) => {
  return (
    <Wrapper className={isVisible ? 'visible' : ''}>
      <ModalContent>
        <img src={item.foto} alt={item.nome} className="photo" />
        <ModalInfo>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <p className="porcoes">Serve: de {item.porcao}</p>
          <Button>Adicionar ao carrinho - {formatPrice(item.preco)}</Button>
        </ModalInfo>
        <img
          src={close}
          alt="Fechar"
          className="close"
          onClick={() => onClose()}
        />
      </ModalContent>

      <div className="overlay" onClick={() => onClose()} />
    </Wrapper>
  )
}

export default Modal
