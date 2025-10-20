import Link from 'next/link'
import { Button } from '@/component/ui/button'
import { ArrowLeft, FileX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="text-center">
        <FileX className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/blogs">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>
    </div>
  )
}