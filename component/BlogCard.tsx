'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { format } from 'date-fns'
import { Calendar, User } from 'lucide-react'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  mainImage?: any
  publishedAt: string
  author?: {
    name: string
    image?: any
  }
  categories?: Array<{
    title: string
    slug: { current: string }
  }>
}

interface BlogCardProps {
  post: Post
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/blogs/${post.slug.current}`}>
        <div className="relative aspect-video overflow-hidden">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).width(600).height(400).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/30">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
            </div>
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author.name}
              </div>
            )}
          </div>
          
          <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h2>
          
          {post.excerpt && (
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          )}
          
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.categories.slice(0, 3).map((category) => (
                <span
                  key={category.slug.current}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  )
}