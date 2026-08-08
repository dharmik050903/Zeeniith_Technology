import { Link, useParams } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import SEO from '../components/SEO'
import { blogPosts } from '../data/blogPosts'

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()
  const postRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    if (postRef.current) {
      observer.observe(postRef.current)
    }

    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current)
      }
    }
  }, [])

  const post = blogPosts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <>
        <SEO
          title="Post Not Found - Zeeniith Blog"
          description="The blog post you're looking for doesn't exist."
          path="/blog"
        />
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-primary font-semibold hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SEO
        title={`${post.title} - Zeeniith Blog`}
        description={post.excerpt}
        path={`/blog/${post.id}`}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <div
          ref={postRef}
          className="relative w-screen left-1/2 -translate-x-1/2 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[60vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
            style={{
              backgroundImage: `url("${post.image}")`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
            role="img"
            aria-label={post.title}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 dark:from-black/70 dark:via-black/80 dark:to-black/90 z-10"></div>
          
          {/* Content */}
          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className={`flex flex-col gap-6 max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-4 w-fit">
                <span className="material-symbols-outlined">arrow_back</span>
                <span className="text-sm font-medium">Back to Blog</span>
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-white/80 backdrop-blur-md rounded-full w-fit border-2 border-white/50 shadow-lg mb-4">
                <span className="text-primary text-sm font-bold">{post.category}</span>
              </div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <article className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div 
              className="blog-content text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Related Posts */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16 bg-gray-100/50 dark:bg-white/5">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group flex flex-col bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative w-full h-40 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                      <span className="text-xs text-primary font-bold">{relatedPost.category}</span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Back to Blog CTA */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-12">
          <div className="max-w-[1400px] mx-auto text-center">
            <Link to="/blog">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                <span className="material-symbols-outlined">arrow_back</span>
                <span>Back to All Posts</span>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost

