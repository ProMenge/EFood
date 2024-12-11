class MenuItemOBJ {
  description: string
  image: string
  title: string
  id: number
  constructor(id: number, description: string, title: string, image: string) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
  }
}

export default MenuItemOBJ
