export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt?: string
  _createdAt?: string
  excerpt?: string
  mainImage?: any
  body?: any[]
  author?: {
    name: string
    image?: any
  }
  categories?: Array<{
    title: string
    slug: { current: string }
  }>
}

export interface Author {
  name: string
  image?: {
    asset: {
      _ref: string
    }
  }
}