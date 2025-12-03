import { Link, useParams } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import SEO from '../components/SEO'

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
      content: `
        <p class="mb-4">The landscape of web development continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly. As we move through 2025, several key trends are shaping how developers build and deploy web applications.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">AI-Powered Development Tools</h2>
        <p class="mb-4">Artificial intelligence is revolutionizing the development workflow. AI-powered code generators, intelligent debugging assistants, and automated testing tools are becoming standard in modern development environments. These tools not only speed up development but also help maintain code quality and reduce errors.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Progressive Web Apps (PWAs)</h2>
        <p class="mb-4">PWAs continue to gain traction as they bridge the gap between web and mobile applications. With offline capabilities, push notifications, and app-like experiences, PWAs offer the best of both worlds without the complexity of native app development.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Serverless Architecture</h2>
        <p class="mb-4">Serverless computing is transforming how applications are built and deployed. By abstracting away server management, developers can focus on writing code while cloud providers handle scaling, maintenance, and infrastructure concerns.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">WebAssembly (WASM)</h2>
        <p class="mb-4">WebAssembly is enabling high-performance applications to run in browsers. From gaming to data visualization, WASM is opening new possibilities for web applications that require near-native performance.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Conclusion</h2>
        <p class="mb-4">Staying current with these trends is essential for developers who want to build cutting-edge applications. The future of web development is exciting, with tools and technologies that make development faster, more efficient, and more accessible than ever before.</p>
      `,
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
      content: `
        <p class="mb-4">Building mobile applications that can scale effectively requires careful planning and the right architectural decisions. Here are the key strategies to ensure your mobile app can grow with your business.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Choose the Right Architecture</h2>
        <p class="mb-4">Selecting the appropriate architecture pattern is crucial. Whether you choose MVC, MVVM, or Clean Architecture, the pattern should support modularity and testability. This makes it easier to add features and maintain code as your app grows.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Optimize for Performance</h2>
        <p class="mb-4">Performance optimization is critical for scalability. Implement lazy loading, efficient caching strategies, and optimize image handling. Consider using CDNs for static assets and implement proper data pagination to handle large datasets.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Backend Scalability</h2>
        <p class="mb-4">Your backend infrastructure must be designed to handle increasing loads. Implement horizontal scaling, use load balancers, and consider microservices architecture for complex applications. Database optimization and caching are also essential.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Monitoring and Analytics</h2>
        <p class="mb-4">Implement comprehensive monitoring and analytics from day one. Track performance metrics, user behavior, and error rates. This data will help you identify bottlenecks and optimize your app proactively.</p>
      `,
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
      content: `
        <p class="mb-4">Great UI/UX design is the foundation of successful digital products. Understanding and applying core design principles ensures your applications are not only beautiful but also intuitive and user-friendly.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">User-Centered Design</h2>
        <p class="mb-4">Always prioritize the user's needs and goals. Conduct user research, create personas, and design with empathy. Every design decision should answer the question: "How does this help the user achieve their goal?"</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Consistency is Key</h2>
        <p class="mb-4">Maintain visual and functional consistency throughout your application. Use a design system with standardized components, colors, typography, and spacing. Consistency reduces cognitive load and makes your app easier to learn and use.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Simplicity and Clarity</h2>
        <p class="mb-4">Less is often more in design. Remove unnecessary elements and focus on what's essential. Clear visual hierarchy guides users' attention to the most important information and actions.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Accessibility Matters</h2>
        <p class="mb-4">Design for everyone. Ensure your applications are accessible to users with disabilities. This includes proper color contrast, keyboard navigation, screen reader support, and clear error messages.</p>
      `,
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
      content: `
        <p class="mb-4">Optimizing cloud infrastructure requires a balance between performance, reliability, and cost. Here's how to achieve optimal results across all three dimensions.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Right-Sizing Resources</h2>
        <p class="mb-4">Regularly review and adjust your resource allocation. Use monitoring tools to identify underutilized resources and scale down when appropriate. Over-provisioning wastes money, while under-provisioning impacts performance.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Auto-Scaling Strategies</h2>
        <p class="mb-4">Implement intelligent auto-scaling based on actual demand patterns. Configure scaling policies that respond to CPU, memory, network, or custom metrics. This ensures you have resources when needed without paying for idle capacity.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Cost Optimization Techniques</h2>
        <p class="mb-4">Leverage reserved instances for predictable workloads, use spot instances for non-critical tasks, and implement proper tagging for cost allocation. Regular cost audits help identify optimization opportunities.</p>
      `,
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
      content: `
        <p class="mb-4">Artificial intelligence is transforming software development in unprecedented ways, from code generation to automated testing and intelligent debugging.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">AI-Powered Code Generation</h2>
        <p class="mb-4">AI coding assistants are becoming indispensable tools for developers. They can generate boilerplate code, suggest optimizations, and even write entire functions based on natural language descriptions. This significantly speeds up development while maintaining code quality.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Intelligent Testing</h2>
        <p class="mb-4">AI can automatically generate test cases, identify edge cases, and predict potential bugs. Machine learning models analyze code patterns to suggest improvements and catch issues before they reach production.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Predictive Analytics</h2>
        <p class="mb-4">AI helps predict project timelines, identify potential bottlenecks, and optimize resource allocation. This leads to more accurate planning and better project outcomes.</p>
      `,
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
      content: `
        <p class="mb-4">Security should be a priority from the first line of code. Implementing security best practices protects your applications and users from threats.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Input Validation</h2>
        <p class="mb-4">Always validate and sanitize user input on both client and server sides. This prevents injection attacks, XSS vulnerabilities, and other input-based exploits. Never trust user input, even from authenticated users.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Authentication and Authorization</h2>
        <p class="mb-4">Implement robust authentication mechanisms using industry-standard protocols like OAuth 2.0 or JWT. Use strong password policies, enable multi-factor authentication, and implement proper session management.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">HTTPS Everywhere</h2>
        <p class="mb-4">Encrypt all data in transit using HTTPS. This protects sensitive information from interception and ensures data integrity. Use secure headers like HSTS to enforce HTTPS connections.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">Regular Security Audits</h2>
        <p class="mb-4">Conduct regular security audits, vulnerability assessments, and penetration testing. Keep dependencies updated and monitor for known vulnerabilities in your tech stack.</p>
      `,
    },
  ]

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

