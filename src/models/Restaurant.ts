class RestaurantOBJ {
  description: string
  image: string
  stars: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    stars: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.stars = stars
  }
}

export default RestaurantOBJ
