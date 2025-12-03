import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import SEO from '../components/SEO'

const Blog = () => {
  const blogRef = useRef<HTMLDivElement>(null)
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

    if (blogRef.current) {
      observer.observe(blogRef.current)
    }

    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current)
      }
    }
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI-powered tools to progressive web apps and beyond.',
      author: 'Aditya Valaki',
      date: 'January 15, 2025',
      category: 'Web Development',
      readTime: '5 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9IfUe8kIKhQGvfjaXXc2o3ET39FoHcpI5tq_aQg8UKTpy3AzUI9YAe1jWoXK3r17xt1QnTNyzwSPmbcCmOuz4dTqyoLNQ8eO921bbSBpRgZ5N2b3B5a19ZlXOI1wqrbSo4cV__Bg0oRt4TNUOuYt_8eyV0CW4UEuNulRsWDWanWaUNFUQ3e8igh9o1pmO_kFj7n-XpV-UjJ7q4jkuL0e0VAOjXQx1mEhzRqx58JqL4m-0W3qTLLxcxCRXfJubhIFTxQHXifonJtrA',
    },
    {
      id: 2,
      title: 'Building Scalable Mobile Apps: Best Practices',
      excerpt: 'Learn the essential strategies for building mobile applications that can scale with your business growth and user base.',
      author: 'David Chen',
      date: 'January 10, 2025',
      category: 'Mobile Development',
      readTime: '7 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSzptqPerihEzmaFGncnl9eN1k0u0kFnkVCitHQZ2K55tPDcRoBvwqCeAYTbFreBg7CgEE9yG6k2rpn1LueJ6o8Fmtp9UD58IUOtag_rWfnWQCciUTP4D_MqkLuYh1-xpfgOU5p1AUDxwuEyJqHnIZp0WkJuGJRU-AiTtSDejRypHEYj-kGIJklvzjfVceVioXTWcoRouqic9nWe6yHcxtZMqPXHHP2EnLXGtrxk672b7qLG1V0ac7HMYYQm8DUrN5mUoKYOmWrPrE',
    },
    {
      id: 3,
      title: 'UI/UX Design Principles for Modern Applications',
      excerpt: 'Discover the fundamental design principles that create exceptional user experiences in today\'s digital landscape.',
      author: 'Samantha Carter',
      date: 'January 5, 2025',
      category: 'Design',
      readTime: '6 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP10_ez_rfoOUCoS3C3sVBjtPso3nIsv5RsU_zUnklaHO8B632snpPMou_SGAYqhAFDIfnwH2c8civo3fQ7lkTl_dz5x26XPuwD4VcvXoxdSM81HF9g1ohPJFEkymx0de1dEbRkK5ltYom2vF_qgetDVEHCWl9c44S7h5yVJfAUtX7f2qEg1Mw62yibLFk6AGydnR5-1kGZRx6_ngMQ0cb8Wh1oJMT06PR4XDbkzGyvHiCJhuRh-pwnsCHjT7aeWYqx6KmlAi_Fyli',
    },
    {
      id: 4,
      title: 'Cloud Infrastructure: Optimizing Performance and Costs',
      excerpt: 'A comprehensive guide to optimizing your cloud infrastructure for better performance while managing costs effectively.',
      author: 'Aditya Valaki',
      date: 'December 28, 2024',
      category: 'Cloud & DevOps',
      readTime: '8 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQmYISSztUNhS-i1ehuYvnKIYnN1TUGzOwmnpoIDXjL5YNY-HGp_G49WzDzfMuNg3xiy7PlE4G6Dl5e4xKT8IMwE5fs3i-DHeygiZi1twHL9bttWGXp1xYIviBkuQyhjHqZnu_44DbMp8xiyAh1w5dopLvEMF0G6zrpHFoAfIUB5x7dygH--m3TPV9tEgabpSD58-z67cPAhrxG8G_BV7mgpB68Ojf7rAQ14-EljKRKVXVjQBc6xb5ZfXi_GtEvr2zDx9ZBaLyvFwj',
    },
    {
      id: 5,
      title: 'The Role of AI in Modern Software Development',
      excerpt: 'How artificial intelligence is revolutionizing software development processes and enabling developers to build better products faster.',
      author: 'David Chen',
      date: 'December 20, 2024',
      category: 'AI & ML',
      readTime: '9 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCinT7mNfT_BBQ5qJd9Opx2JYL-YkNucOcRPg77GWFRBrHaiS24R-sXzhFkHxCylph0n0xH8FYMjlWwyPbyEmhqXfvqm37_ufzDd6sDOOHn7GrzP3RKPsdja42yLVKOeXBd5in5aAJKd8u4rRi5aFq42hLFxoFCkagXpQABXZqlH6ggIgnM9HfGGWav2GRBfS8R3i2Kq8AE4E2UqORsoX2Mvy1O8mk1kUsnpC7HiI-wz_te8iJsPiygJKrPbFuZ5rZPx1L69yX9amo4',
    },
    {
      id: 6,
      title: 'Security Best Practices for Web Applications',
      excerpt: 'Essential security measures every developer should implement to protect web applications from common vulnerabilities and threats.',
      author: 'Aditya Valaki',
      date: 'December 15, 2024',
      category: 'Security',
      readTime: '6 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrOtu2XbHeGH3BF9j8a2r1w8EW6YY-m9wYXqonMIiqqVp9aqnviZFl4WrCNxP9TnSCiIoPAoT-Lsj4X_-AbxXzzkSQWJi0jYnW9qpqwBhrVvPM9fr5xSW_56pfMycKG8O7ykIOcOq3jdmCAgX87QKfVi2qXjmd6EC85worCo93ljTfg9mRlMlzlRS_vpPeLWDQvT6l4KSBj-uPyvjj9UrMf2dbzTZMu2tS8g3Js62oy806exLCQAf7s_5If-zgpH7NdK570WXFFPks',
    },
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'Design', 'Cloud & DevOps', 'AI & ML', 'Security']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <>
      <SEO
        title="Blog - Zeeniith | Insights & Updates"
        description="Stay updated with the latest insights, trends, and updates from Zeeniith. Read about web development, mobile apps, design, cloud solutions, and more."
        path="/blog"
      />
      <main className="flex flex-col gap-16 md:gap-24">
        {/* Hero Section */}
        <div
          ref={blogRef}
          className="relative w-screen left-1/2 -translate-x-1/2 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
          style={{ minHeight: '100vh' }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
            style={{
              backgroundImage: `url("/80060.jpg")`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
            role="img"
            aria-label="Blog hero background"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 dark:from-black/40 dark:via-black/50 dark:to-black/60 z-10"></div>
          
          {/* Content */}
          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className={`flex flex-col gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto items-center text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-white/80 backdrop-blur-md rounded-full w-fit border-2 border-white/50 shadow-lg">
                  <span className="material-symbols-outlined text-primary text-lg">article</span>
                  <span className="text-primary text-xs font-bold">Our Blog</span>
                </div>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg px-2">
                  Insights & Updates
                </h1>
                <h2 className="text-white/90 dark:text-white/80 text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md px-2">
                  Stay updated with the latest trends, insights, and updates from the world of software development, design, and technology.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-3 flex-wrap items-center justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 ${
              filteredPosts.length === 4 ? 'grid-4-items' : 
              filteredPosts.length === 5 ? 'grid-5-items' : 
              filteredPosts.length === 6 ? 'grid-6-items' : ''
            }`}>
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-[border-color,box-shadow,transform] duration-300 hover:shadow-xl overflow-hidden h-full"
                >
                  <div className="group-hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                    <div className="relative w-full h-48 overflow-hidden rounded-t-xl flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 flex-1 min-h-0">
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">calendar_today</span>
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-semibold text-xs hover:gap-3 transition-all group/link">
                        Read More
                        <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl mx-4 p-8 sm:p-12 md:p-16 text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-white text-3xl">mail</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-[-0.015em]">
            Stay Updated
          </h2>
          <p className="max-w-xl text-white/90 text-sm md:text-base">
            Subscribe to our newsletter and never miss an update. Get the latest insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 rounded-xl bg-white text-primary font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Blog

