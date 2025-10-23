import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Get the secret token from the request
    const body = await request.json()
    const { secret, path } = body

    // Check for secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate the blog pages
    revalidatePath('/blogs')
    revalidatePath('/blogs/[slug]', 'page')
    
    // If a specific path is provided, revalidate that too
    if (path) {
      revalidatePath(path)
    }

    return NextResponse.json({ 
      revalidated: true, 
      message: 'Blog pages revalidated successfully',
      timestamp: new Date().toISOString()
    })
  } catch (err) {
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Also allow GET requests for manual testing
export async function GET() {
  try {
    revalidatePath('/blogs')
    return NextResponse.json({ 
      message: 'Blog page revalidated',
      timestamp: new Date().toISOString()
    })
  } catch (err) {
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 })
  }
}