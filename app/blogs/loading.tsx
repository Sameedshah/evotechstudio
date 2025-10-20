export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-12 bg-muted rounded-lg animate-pulse mb-6 max-w-md mx-auto"></div>
          <div className="h-6 bg-muted rounded-lg animate-pulse max-w-2xl mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-muted animate-pulse"></div>
              <div className="p-6">
                <div className="flex gap-4 mb-3">
                  <div className="h-4 bg-muted rounded animate-pulse w-20"></div>
                  <div className="h-4 bg-muted rounded animate-pulse w-24"></div>
                </div>
                <div className="h-6 bg-muted rounded animate-pulse mb-3"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-6 bg-muted rounded-full animate-pulse w-16"></div>
                  <div className="h-6 bg-muted rounded-full animate-pulse w-20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}