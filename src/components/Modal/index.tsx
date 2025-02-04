import * as S from './styles'

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
    <S.ModalContainer>
      <S.ModalImage style={{ backgroundImage: `url(${image})` }} />
      <S.ModalInfos>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalDescription>{description}</S.ModalDescription>
        <S.ModalButton onClick={onClose}>
          Adicionar ao carrinho - R${price}
        </S.ModalButton>
      </S.ModalInfos>
      <S.ModalClose src={close} onClick={onClose} />
    </S.ModalContainer>
  )
}

export default Modal
