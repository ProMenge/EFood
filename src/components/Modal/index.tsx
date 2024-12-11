import { ModalContainer, ModalImage, ModalInfos, ModalButton } from './styles'
import Pizza from '../../assets/images/Pizza.png'

const Modal = () => {
  return (
    <>
      <ModalContainer>
        <ModalImage style={{ backgroundImage: `url(${Pizza})` }} />
        <ModalInfos>
          <h3>Pizza Marguerita</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, magni
            natus. Asperiores ipsam itaque adipisci, id animi architecto
            eligendi aspernatur voluptatem doloribus quo laudantium numquam iure
            sint. Perferendis, reprehenderit nesciunt!
          </p>
          <ModalButton>Adicionar ao carrinho</ModalButton>
        </ModalInfos>
      </ModalContainer>
    </>
  )
}

export default Modal
