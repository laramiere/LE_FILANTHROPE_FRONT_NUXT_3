export interface Category {
  id: string
  title: string
  subtitle?: string
  itemsCategory?: BoardItem[]
  subCategory?: Category[]
}

export interface BoardSection {
  info?: string
  category: Category[]
}

export interface BoardItem {
  title: string
  subtitle?: string
  price: Price
}

export interface Price {
  amount: number
  currency: string
}

export interface Filter {
  id: string
  title: string
  actif: boolean
}

export interface Board {
  title: string
  subtitle: string
  category: Category[]
}
