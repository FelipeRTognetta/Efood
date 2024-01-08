class Restaurant {
  title: string
  rating: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    title: string,
    rating: string,
    description: string,
    infos: string[],
    image: string,
    id: number
  ) {
    this.title = title
    this.rating = rating
    this.description = description
    this.infos = infos
    this.image = image
    this.id = id
  }
}

export default Restaurant
