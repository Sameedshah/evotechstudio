import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section
}: SEOProps): Metadata {
  const baseUrl = 'https://evotechstudio.dev'
  const fullUrl = `${baseUrl}${url}`
  const fullTitle = title ? `${title} | EvoTech Studio` : 'EvoTech Studio - Innovative Web Development & Digital Solutions'
  const defaultDescription = 'EvoTech Studio delivers cutting-edge web development, mobile apps, and digital solutions. Transform your business with our expert development team.'
  
  return {
    title: fullTitle,
    description: description || defaultDescription,
    keywords: [
      ...keywords,
      'web development',
      'mobile app development',
      'digital solutions',
      'EvoTech Studio'
    ],
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: fullUrl,
      title: fullTitle,
      description: description || defaultDescription,
      siteName: 'EvoTech Studio',
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title || 'EvoTech Studio',
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || defaultDescription,
      images: [`${baseUrl}${image}`],
      creator: '@evotechstudio',
    },
  }
}

// Usage example for blog posts
export function generateBlogSEO({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  author = 'EvoTech Studio',
  category,
  tags = []
}: {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  author?: string
  category?: string
  tags?: string[]
}): Metadata {
  return generateSEOMetadata({
    title,
    description,
    keywords: [...tags, category].filter(Boolean) as string[],
    url: `/blogs/${slug}`,
    type: 'article',
    publishedTime: publishedAt,
    modifiedTime: updatedAt || publishedAt,
    author,
    section: category,
  })
}