import { Button } from '../Food/styles'
import { Wrapper, ModalContent, ModalInfo } from './styles'

import { ItemCardapio } from '../../types/Restaurante'
import { formatPrice } from '../../utils/formatPrice'

import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

import close from '../../assets/images/close.svg'

type Props = {
  item: ItemCardapio
  isVisible: boolean
  onClose: () => void
}

const Modal = ({ item, isVisible, onClose }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    dispatch(open())
    onClose()
  }

  return (
    <Wrapper className={isVisible ? 'isOpen' : ''}>
      <ModalContent>
        <img src={item.foto} alt={item.nome} className="photo" />
        <ModalInfo>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <p className="porcoes">Serve: de {item.porcao}</p>
          <Button onClick={addToCart}>
            Adicionar ao carrinho - {formatPrice(item.preco)}
          </Button>
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
