import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/component/ui/button'
import { notFound } from 'next/navigation'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  mainImage?: any
  publishedAt: string
  body: any
  author?: {
    name: string
    image?: any
    bio?: any
  }
  categories?: Array<{
    title: string
    slug: { current: string }
  }>
}

async function getPost(slug: string): Promise<Post | null> {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      body,
      author->{
        name,
        image,
        bio
      },
      categories[]->{
        title,
        slug
      }
    }
  `
  
  return client.fetch(query, { slug })
}

export async function generateStaticParams() {
  // Return empty array for now to allow build to complete
  // You can add blog posts later and rebuild
  return []
}

const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).height(600).url()}
          alt={value.alt || 'Blog image'}
          width={800}
          height={600}
          className="rounded-lg"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/blogs">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <header className="mb-8">
          {post.mainImage && (
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1200).height(600).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
            </div>
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author.name}
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
          )}

          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.categories.map((category) => (
                <span
                  key={category.slug.current}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <PortableText value={post.body} components={components} />
        </div>

        {post.author && (
          <div className="mt-12 p-6 bg-card rounded-lg">
            <h3 className="text-xl font-semibold mb-4">About the Author</h3>
            <div className="flex items-start gap-4">
              {post.author.image && (
                <Image
                  src={urlFor(post.author.image).width(80).height(80).url()}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              )}
              <div>
                <h4 className="font-semibold mb-2">{post.author.name}</h4>
                {post.author.bio && (
                  <div className="text-muted-foreground">
                    <PortableText value={post.author.bio} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}