export type BeerItem = {
  id: number,
  name: string,
  tagline: string,
  image_url: string,
  description: string,
  abv?: 4.1,
  food_pairing?: []
}

export type BeerSearch = {
  page: number,
  text: string
}