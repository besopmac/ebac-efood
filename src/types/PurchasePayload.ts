export type Product = {
  id: number
  price: number
}

export type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      city: string
      number: number
      zipCode: string
      complement: string
      description: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}
