import { Card, ItemImage, ItemInfo, ItemButton } from './styles'
// import Modal from '../Modal'
// import { useState } from 'react'

type Props = {
  image: string
  title: string
  description: string
}

const MenuItem = ({ image, title, description }: Props) => {
  // const [isModalOpen, setModalOpen] = useState(false)
  // const handleOpenModal = () => setModalOpen(true)
  // const handleCloseModal = () => setModalOpen(false)
  return (
    <>
      <Card>
        <ItemImage style={{ backgroundImage: `url(${image})` }} />
        <ItemInfo>
          <h3>{title}</h3>
          <p>{description}</p>
        </ItemInfo>
        <ItemButton>Mais Detalhes</ItemButton>
        {/* onClick={handleOpenModal} */}
      </Card>
    </>
  )
}

export default MenuItem
