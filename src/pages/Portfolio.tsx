import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const heroRef = useRef<HTMLDivElement>(null)
  const [isHeroVisible, setIsHeroVisible] = useState(false)

  // Hero animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeroVisible(true)
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  const filters = ['All Projects', 'Website Development', 'Mobile App Development', 'Custom Software Development', 'SEO & Digital Marketing', 'AI & Automation Solutions']

  const projects = [
    {
      title: 'Project Nova',
      category: 'Web App',
      alt: 'A futuristic dashboard UI for Project Nova',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9IfUe8kIKhQGvfjaXXc2o3ET39FoHcpI5tq_aQg8UKTpy3AzUI9YAe1jWoXK3r17xt1QnTNyzwSPmbcCmOuz4dTqyoLNQ8eO921bbSBpRgZ5N2b3B5a19ZlXOI1wqrbSo4cV__Bg0oRt4TNUOuYt_8eyV0CW4UEuNulRsWDWanWaUNFUQ3e8igh9o1pmO_kFj7n-XpV-UjJ7q4jkuL0e0VAOjXQx1mEhzRqx58JqL4m-0W3qTLLxcxCRXfJubhIFTxQHXifonJtrA',
    },
    {
      title: 'Project Helios',
      category: 'Mobile',
      alt: 'A sleek mobile app interface for a music streaming service called Project Helios',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSzptqPerihEzmaFGncnl9eN1k0u0kFnkVCitHQZ2K55tPDcRoBvwqCeAYTbFreBg7CgEE9yG6k2rpn1LueJ6o8Fmtp9UD58IUOtag_rWfnWQCciUTP4D_MqkLuYh1-xpfgOU5p1AUDxwuEyJqHnIZp0WkJuGJRU-AiTtSDejRypHEYj-kGIJklvzjfVceVioXTWcoRouqic9nWe6yHcxtZMqPXHHP2EnLXGtrxk672b7qLG1V0ac7HMYYQm8DUrN5mUoKYOmWrPrE',
    },
    {
      title: 'Project Orion',
      category: 'Branding',
      alt: 'Branding mockups for a modern tech company named Project Orion',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQmYISSztUNhS-i1ehuYvnKIYnN1TUGzOwmnpoIDXjL5YNY-HGp_G49WzDzfMuNg3xiy7PlE4G6Dl5e4xKT8IMwE5fs3i-DHeygiZi1twHL9bttWGXp1xYIviBkuQyhjHqZnu_44DbMp8xiyAh1w5dopLvEMF0G6zrpHFoAfIUB5x7dygH--m3TPV9tEgabpSD58-z67cPAhrxG8G_BV7mgpB68Ojf7rAQ14-EljKRKVXVjQBc6xb5ZfXi_GtEvr2zDx9ZBaLyvFwj',
    },
    {
      title: 'Project Lyra',
      category: 'UI/UX',
      alt: 'Elegant user interface design for a finance app, Project Lyra',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP10_ez_rfoOUCoS3C3sVBjtPso3nIsv5RsU_zUnklaHO8B632snpPMou_SGAYqhAFDIfnwH2c8civo3fQ7lkTl_dz5x26XPuwD4VcvXoxdSM81HF9g1ohPJFEkymx0de1dEbRkK5ltYom2vF_qgetDVEHCWl9c44S7h5yVJfAUtX7f2qEg1Mw62yibLFk6AGydnR5-1kGZRx6_ngMQ0cb8Wh1oJMT06PR4XDbkzGyvHiCJhuRh-pwnsCHjT7aeWYqx6KmlAi_Fyli',
    },
    {
      title: 'Project Vega',
      category: 'Web App',
      alt: 'Web application UI on a laptop screen for Project Vega',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCinT7mNfT_BBQ5qJd9Opx2JYL-YkNucOcRPg77GWFRBrHaiS24R-sXzhFkHxCylph0n0xH8FYMjlWwyPbyEmhqXfvqm37_ufzDd6sDOOHn7GrzP3RKPsdja42yLVKOeXBd5in5aAJKd8u4rRi5aFq42hLFxoFCkagXpQABXZqlH6ggIgnM9HfGGWav2GRBfS8R3i2Kq8AE4E2UqORsoX2Mvy1O8mk1kUsnpC7HiI-wz_te8iJsPiygJKrPbFuZ5rZPx1L69yX9amo4',
    },
    {
      title: 'Project Cygnus',
      category: 'Mobile',
      alt: 'A vibrant mobile game interface for Project Cygnus',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrOtu2XbHeGH3BF9j8a2r1w8EW6YY-m9wYXqonMIiqqVp9aqnviZFl4WrCNxP9TnSCiIoPAoT-Lsj4X_-AbxXzzkSQWJi0jYnW9qpqwBhrVvPM9fr5xSW_56pfMycKG8O7ykIOcOq3jdmCAgX87QKfVi2qXjmd6EC85worCo93ljTfg9mRlMlzlRS_vpPeLWDQvT6l4KSBj-uPyvjj9UrMf2dbzTZMu2tS8g3Js62oy806exLCQAf7s_5If-zgpH7NdK570WXFFPks',
    },
  ]

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <>
      <SEO
        title="Portfolio - Zeeniith | Our Work & Projects"
        description="We build stunning, high-performance web and mobile applications that captivate users and drive results. Explore our portfolio of work including web apps, mobile apps, and branding projects."
        path="/portfolio"
      />
      <main className="flex flex-col gap-10 md:gap-16 lg:gap-20">
        {/* Hero Section */}
        <div 
          ref={heroRef}
          className="relative w-screen left-1/2 -translate-x-1/2 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
          style={{ minHeight: '100vh' }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
            style={{
              backgroundImage: `url("/close-up-keyboard-used-by-software-engineer-programming-home.jpg")`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
            role="img"
            aria-label="Portfolio hero background - Close-up keyboard used by software engineer programming"
          />
          {/* Overlay for better text readability - Different opacity for light and dark mode */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 dark:from-black/40 dark:via-black/50 dark:to-black/60 z-10"></div>
          
          {/* Content */}
          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className={`flex flex-col gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto items-center text-center transition-all duration-1000 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex flex-col gap-3 sm:gap-4">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg px-2">
                  Our Projects - Explore the Impact We've Created
                </h1>
                <h2 className="text-white/90 dark:text-white/80 text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md px-2">
                  Take a look at how our custom software and digital marketing solutions have helped businesses achieve remarkable results.
                </h2>
              </div>
              <button className="flex min-w-[100px] sm:min-w-[120px] w-fit max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 sm:h-12 px-4 sm:px-6 bg-primary text-white text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                <span className="truncate">Our Work</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-3 p-3 flex-wrap items-center justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 cursor-pointer transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary'
                    : 'bg-slate-200 dark:bg-[#282e39] text-slate-700 dark:text-slate-300 hover:bg-primary/10 dark:hover:bg-primary/10'
                }`}
              >
                <p className="text-xs font-medium leading-normal">{filter}</p>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-4">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-[3/4] cursor-pointer transform hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%), url("${project.url}")`,
                }}
                role="img"
                aria-label={project.alt}
              >
                <p className="text-white text-lg font-bold leading-tight w-full line-clamp-2">
                  {project.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl bg-slate-100 dark:bg-[#282e39]/50 @xl:flex-row-reverse @xl:items-center">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl @xl:rounded-l-none @xl:rounded-r-xl"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAni234zV2kycBUJg0r9GGZX2iSatBO8fhLPtvxMOzQDGqnC1YRcjOe2xEv-8K3orjQLFbIJ1gcNNcOU6L6J--MmiU8M8XlJFPa4No8za_sAqaU-nIjWJbx4aqMZZFZ6jUEl9nt8Ri03A70wAqKTpi6AOsVDU59XkR1W2ZlqZSXM932-NlAUlxncwqu3B3tzquNF--bYWjalBI3uvNkYz9YSx_3zfaVDEPMGNTfC--3vyjuzN9uEU2QeYUkbo-gEYLNYkaf3n_WgOjK")`,
              }}
              role="img"
              aria-label="Portrait of Jane Doe, CEO of Starlight Inc."
            />
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-6 @xl:px-8">
              <p className="text-primary dark:text-primary text-xs font-bold leading-normal uppercase tracking-widest">
                Client Testimonial
              </p>
              <p className="text-slate-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] @[480px]:text-xl">
                "ZEENIITH didn't just build a product; they crafted an experience. Their attention to detail is exceptional and the results speak for themselves."
              </p>
              <div className="flex items-end gap-3 justify-between pt-2">
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
                  Vikram Singh, CEO at Starlight Inc.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="py-12 md:py-20 bg-gray-100/50 dark:bg-white/5 rounded-xl mx-4">
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
            Portfolio Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {[
              { number: '150+', label: 'Projects Completed', icon: 'folder' },
              { number: '50+', label: 'Industries Served', icon: 'business' },
              { number: '98%', label: 'Client Satisfaction', icon: 'star' },
              { number: '24/7', label: 'Support Available', icon: 'support_agent' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="py-12 md:py-20">
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
            Featured Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {[
              {
                title: 'E-Commerce Platform Redesign',
                category: 'Website Development',
                challenge: 'Build a comprehensive e-commerce platform to handle increased traffic and improve user experience for a fashion retail company.',
                solution: 'Developed a scalable React-based platform with real-time inventory management, optimized checkout process, and mobile-first responsive design.',
                results: ['250% increase in conversions', '40% reduction in cart abandonment', '3x transaction capacity'],
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9IfUe8kIKhQGvfjaXXc2o3ET39FoHcpI5tq_aQg8UKTpy3AzUI9YAe1jWoXK3r17xt1QnTNyzwSPmbcCmOuz4dTqyoLNQ8eO921bbSBpRgZ5N2b3B5a19ZlXOI1wqrbSo4cV__Bg0oRt4TNUOuYt_8eyV0CW4UEuNulRsWDWanWaUNFUQ3e8igh9o1pmO_kFj7n-XpV-UjJ7q4jkuL0e0VAOjXQx1mEhzRqx58JqL4m-0W3qTLLxcxCRXfJubhIFTxQHXifonJtrA',
              },
              {
                title: 'FinTech Mobile Banking App',
                category: 'Mobile App Development',
                challenge: 'Create a secure mobile banking application with biometric authentication and real-time transaction capabilities.',
                solution: 'Built a native iOS and Android app with React Native, implementing secure authentication, real-time transaction processing, and investment tracking features.',
                results: ['500K+ downloads', '4.8 star rating', '150% increase in user engagement'],
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSzptqPerihEzmaFGncnl9eN1k0u0kFnkVCitHQZ2K55tPDcRoBvwqCeAYTbFreBg7CgEE9yG6k2rpn1LueJ6o8Fmtp9UD58IUOtag_rWfnWQCciUTP4D_MqkLuYh1-xpfgOU5p1AUDxwuEyJqHnIZp0WkJuGJRU-AiTtSDejRypHEYj-kGIJklvzjfVceVioXTWcoRouqic9nWe6yHcxtZMqPXHHP2EnLXGtrxk672b7qLG1V0ac7HMYYQm8DUrN5mUoKYOmWrPrE',
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] overflow-hidden h-full"
              >
                <div
                  className="w-full h-48 bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url("${caseStudy.image}")` }}
                  role="img"
                  aria-label={caseStudy.title}
                />
                <div className="p-6 flex flex-col gap-4 flex-grow min-h-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{caseStudy.title}</h3>
                    <span className="text-primary text-xs font-bold px-3 py-1 bg-primary/10 rounded-full">
                      {caseStudy.category}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Challenge:</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 text-justify">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Solution:</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 text-justify">{caseStudy.solution}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-200 dark:border-[#282e39]">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Results:</p>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Grid */}
        <div className="py-12 md:py-20">
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {[
              {
                quote: 'Zeeniith exceeded our expectations. The team was professional, responsive, and delivered exactly what we needed.',
                author: 'Emily Rodriguez',
                role: 'Product Manager',
                company: 'TechCorp',
              },
              {
                quote: 'Working with Zeeniith was seamless. They understood our vision and brought it to life beautifully.',
                author: 'James Wilson',
                role: 'Founder',
                company: 'StartupHub',
              },
              {
                quote: 'The quality of work and attention to detail is outstanding. Highly recommend Zeeniith for any project.',
                author: 'Lisa Anderson',
                role: 'CTO',
                company: 'InnovateLabs',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] h-full"
              >
                <div className="flex items-center gap-1 text-primary flex-shrink-0">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-xl">star</span>
                  ))}
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 italic flex-grow">"{testimonial.quote}"</p>
                <div className="pt-2 border-t border-gray-200 dark:border-[#282e39] flex-shrink-0">
                  <p className="font-bold text-gray-900 dark:text-white truncate">{testimonial.author}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-primary text-white p-10 md:p-16 flex flex-col items-center justify-center text-center gap-6 mx-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Have an idea? Let's build it together.
          </h2>
          <p className="max-w-xl text-slate-200">
            Your vision deserves the best digital execution. Let's team up to create something extraordinary that stands out in the digital cosmos.
          </p>
          <Link to="/contact">
            <button className="flex items-center justify-center h-12 px-8 rounded-lg bg-white text-primary font-bold text-base mt-2 hover:opacity-90 transition-opacity">
              Start a Project
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Portfolio

