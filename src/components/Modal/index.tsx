import { Wrapper } from './styles'

const Modal = () => {
  return (
    <Wrapper>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="overlay" onClick={() => undefined} />
    </Wrapper>
  )
}

export default Modal
