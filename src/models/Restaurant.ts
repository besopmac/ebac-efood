class Restaurant {
  id: number
  title: string
  image: string
  rating: number
  description: string
  categories: string[]

  constructor(
    id: number,
    title: string,
    image: string,
    rating: number,
    description: string,
    categories: string[]
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.rating = rating
    this.categories = categories
    this.description = description
  }
}

export default Restaurant
