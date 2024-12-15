import {
  ModalButton,
  ModalClose,
  ModalContainer,
  ModalDescription,
  ModalImage,
  ModalInfos,
  ModalTitle
} from './styles'

import close from '../../assets/images/close.png'

type Props = {
  image: string
  title: string
  description: string
  onClose: () => void
  price: number
}

const Modal = ({ image, title, description, onClose, price }: Props) => {
  return (
    <ModalContainer>
      <ModalImage style={{ backgroundImage: `url(${image})` }} />
      <ModalInfos>
        <ModalTitle>{title}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>
        <ModalButton onClick={onClose}>
          Adicionar ao carrinho - R${price}
        </ModalButton>
      </ModalInfos>
      <ModalClose src={close} onClick={onClose} />
    </ModalContainer>
  )
}

export default Modal
