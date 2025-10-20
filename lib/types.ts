export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt?: string
  mainImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  body?: any[]
  author?: string
  categories?: string[]
}

export interface Author {
  name: string
  image?: {
    asset: {
      _ref: string
    }
  }
}