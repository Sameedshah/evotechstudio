import { client } from '@/lib/sanity'
import { BlogCard } from '@/component/BlogCard'
import { BlogPost } from '@/lib/types'

// Revalidate every 60 seconds
export const revalidate = 60

async function getPosts(): Promise<BlogPost[]> {
  try {
    const query = `
      *[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        _createdAt,
        author->{
          name,
          image
        },
        categories[]->{
          title,
          slug
        }
      }
    `

    // Fetch with cache-busting options
    const posts = await client.fetch(query, {}, {
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    
    // Filter out posts without required fields
    return posts.filter((post: any) => post.title && post.slug?.current)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function BlogsPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on technology, development, and innovation
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post._id} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}