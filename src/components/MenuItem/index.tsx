import { useState } from 'react'
import Modal from '../Modal'
import { Card, ItemButton, ItemImage, ItemInfo } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const MenuItem = ({ image, title, description }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)
  return (
    <>
      <Card>
        <ItemImage style={{ backgroundImage: `url(${image})` }} />
        <ItemInfo>
          <h3>{title}</h3>
          <p>{description}</p>
        </ItemInfo>
        <ItemButton onClick={handleOpenModal}>Mais Detalhes</ItemButton>
        {/* onClick={handleOpenModal} */}
      </Card>

      {isModalOpen && <Modal />}
    </>
  )
}

export default MenuItem
