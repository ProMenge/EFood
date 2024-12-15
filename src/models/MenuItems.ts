class MenuItemOBJ {
  description: string
  image: string
  title: string
  id: number
  modalDescription: string
  price: number
  constructor(
    id: number,
    description: string,
    title: string,
    image: string,
    modalDescription: string,
    price: number
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.modalDescription = modalDescription
    this.price = price
  }
}

export default MenuItemOBJ
