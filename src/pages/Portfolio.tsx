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
      title: 'EasyGo Overseas',
      category: 'Website Development',
      alt: 'EasyGo Overseas - Education consultancy website for study abroad services',
      url: '/Easy-go-logo.jpg',
      link: 'https://www.easygo-overseas.in/',
      description: 'Professional education consultancy website helping students pursue study abroad opportunities across multiple countries.',
      challenge: 'Develop a comprehensive, user-friendly website to help students navigate study abroad opportunities. The website needed to showcase services for multiple countries (USA, UK, Canada, Australia, New Zealand, Singapore, Europe, Cyprus) and provide clear information about counseling, university applications, visa assistance, loan support, and accommodation guidance.',
      solution: 'Created a modern, responsive website with intuitive navigation, comprehensive service pages, and clear call-to-action elements. Implemented mobile-first design ensuring seamless experience across all devices. The website features detailed information about study destinations, services offered, and easy contact methods.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO Optimization', 'Modern Web Standards'],
      features: [
        'Free Counseling Services',
        'Visa Guidance & Support',
        'Accommodation Support',
        'Multi-Country Information',
        'Mobile-Responsive Design',
        'Fast Loading Performance',
        'SEO Optimized',
        'Contact Forms & Inquiry System'
      ],
      results: [
        'Professional online presence established',
        'Enhanced student engagement and inquiries',
        'Streamlined service information delivery',
        'Improved user experience across all devices',
        'Better visibility in search engines'
      ],
      client: 'Easy Go Overseas Advisor',
      industry: 'Abroad Consultancy',
      year: '2024'
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

          <div className="grid grid-cols-1 gap-6 p-4 max-w-xs mx-auto">
            {filteredProjects.map((project, index) => (
              <a
                key={index}
                href={project.link || '#'}
                target={project.link ? '_blank' : undefined}
                rel={project.link ? 'noopener noreferrer' : undefined}
                className="flex flex-col gap-3 rounded-xl overflow-hidden bg-white dark:bg-[#1C2333] border border-gray-200 dark:border-[#282e39] cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
              >
                <div
                  className={`w-full bg-center bg-no-repeat ${
                    project.title === 'EasyGo Overseas' ? 'bg-contain bg-gray-50 dark:bg-gray-800 p-4 aspect-[3/1]' : 'bg-cover aspect-[3/4]'
                  }`}
                  style={{
                    backgroundImage: project.title === 'EasyGo Overseas' 
                      ? `url("${project.url}")`
                      : `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%), url("${project.url}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: project.title === 'EasyGo Overseas' ? 'contain' : 'cover',
                  }}
                  role="img"
                  aria-label={project.alt}
                />
                <div className="px-3 pb-3">
                  <p className="text-base font-bold leading-tight text-gray-900 dark:text-white line-clamp-2">
                    {project.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Detailed Project Showcase */}
        {filteredProjects.map((project, index) => (
          <div key={index} className="flex flex-col gap-8 md:gap-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto w-full">
              {/* Project Header */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary text-sm font-bold px-3 py-1 bg-primary/10 rounded-full">
                      {project.category}
                    </span>
                    {project.year && (
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{project.year}</span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h2>
                  {project.description && (
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:underline"
                    >
                      Visit Live Website
                      <span className="material-symbols-outlined text-lg">open_in_new</span>
                    </a>
                  )}
                </div>
                <div className="w-full md:w-80 flex-shrink-0">
                  <div
                    className={`w-full rounded-xl bg-center bg-no-repeat ${
                      project.title === 'EasyGo Overseas' ? 'bg-contain bg-gray-50 dark:bg-gray-800 p-6 aspect-[3/1]' : 'bg-cover aspect-video'
                    }`}
                    style={{
                      backgroundImage: `url("${project.url}")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: project.title === 'EasyGo Overseas' ? 'contain' : 'cover',
                    }}
                    role="img"
                    aria-label={project.alt}
                  />
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Challenge & Solution */}
                <div className="lg:col-span-2 space-y-8">
                  {project.challenge && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">help_outline</span>
                        Challenge
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  )}
                  {project.solution && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">lightbulb</span>
                        Solution
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>

                {/* Project Info Sidebar */}
                <div className="space-y-6">
                  {project.client && (
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Client</p>
                      <p className="text-base font-medium text-gray-900 dark:text-white">{project.client}</p>
                    </div>
                  )}
                  {project.industry && (
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Industry</p>
                      <p className="text-base font-medium text-gray-900 dark:text-white">{project.industry}</p>
                    </div>
                  )}
                  {project.technologies && (
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Technologies Used</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-[#282e39] text-gray-700 dark:text-gray-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Features Section */}
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">star</span>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#282e39] rounded-lg"
                      >
                        <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span>
                        <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results Section */}
              {project.results && project.results.length > 0 && (
                <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">trending_up</span>
                    Results & Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">verified</span>
                        <p className="text-gray-700 dark:text-gray-300">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Project Stats */}
        <div className="py-12 md:py-20 bg-gray-100/50 dark:bg-white/5 rounded-xl mx-4">
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
            Portfolio Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {[
              { number: '50+', label: 'Projects Completed', icon: 'folder' },
              { number: '10+', label: 'Industries Served', icon: 'business' },
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

