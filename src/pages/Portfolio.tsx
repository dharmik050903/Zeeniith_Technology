import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import SEO from '../components/SEO'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects')
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

  const filters = ['All Projects']

  const projects = [
    {
      title: 'EasyGo Overseas',
      category: 'Website & CRM Software',
      alt: 'EasyGo Overseas - Education consultancy website and CRM',
      url: '/Easy-go-logo.jpg',
      link: 'https://www.easygo-overseas.in/',
      description: 'Comprehensive digital solution including a professional education consultancy website and a custom CRM for managing student applications and services.',
      challenge: 'To streamline the complex process of study abroad counseling and application management while maintaining a strong public-facing digital presence for students.',
      solution: 'Developed a dual-solution system: A responsive, SEO-optimized website for student engagement and a robust internal CRM for managing leads, applications, and visa processes efficiently.',
      technologies: ['Custom CRM Development', 'Web Development', 'Database Management', 'Secure Data Handling'],
      features: [
        'Student Lead Management',
        'Application Tracking System',
        'Visa Processing Workflow',
        'Document Management',
        'Multi-Country Service Showcase'
      ],
      results: [
        'Streamlined internal operations',
        'Improved lead conversion rates',
        'Better student data organization',
        'Enhanced service delivery efficiency'
      ],
      client: 'Easy Go Overseas Advisor',
      industry: 'Education Consultancy',
      year: '2024'
    },
    {
      title: 'Digital Devas',
      category: 'Software & Website',
      alt: 'Digital Devas - CRM and Task Management Software',
      url: '/Digital_Devas.svg',
      link: 'https://www.digitaldevas.in/',
      description: 'An integrated software ecosystem combining CRM and Task Management capabilities, alongside a professional corporate website.',
      challenge: 'The client needed a centralized platform to manage client relationships and internal tasks simultaneously, replacing disjointed tools.',
      solution: 'Built a custom CRM integrated with a Task Management System to unify business operations. Also developed a modern website to showcase their digital services to the world.',
      technologies: ['Custom Software Development', 'Task Management Logic', 'CRM Architecture', 'Modern Web Frameworks'],
      features: [
        'Unified Dashboard',
        'Task Assignment & Tracking',
        'Client Relationship Tools',
        'Performance Analytics',
        'Corporate Website'
      ],
      results: [
        'Unified operational workflow',
        'Increased team productivity',
        'Better project oversight',
        'Professional digital footprint'
      ],
      client: 'Digital Devas',
      industry: 'Digital Services',
      year: '2024'
    },
    {
      title: 'Hir Sports',
      category: 'Student Management Software',
      alt: 'Hir Sports - Student Management System',
      url: '/Hir_Sports.png',
      link: '',
      description: 'Specialized Student Management Software designed to handle administrative tasks, tracking, and management for a sports academy.',
      challenge: 'To digitize the manual management of student records, attendance, and performance tracking in a sports training environment.',
      solution: 'Developed a dedicated software solution tailored for student management, enabling easy tracking of attendance, progress, and administrative details for coaches and administrators.',
      technologies: ['Software Development', 'Database Design', 'User Access Control', 'Reporting Tools'],
      features: [
        'Student Profile Management',
        'Attendance Tracking',
        'Performance Records',
        'Fee Management',
        'Batch Scheduling'
      ],
      results: [
        'Reduced administrative workload',
        'Accurate student records',
        'Streamlined fee collection',
        'Improved communication'
      ],
      client: 'Hir Sports',
      industry: 'Sports Education',
      year: '2024'
    },
    {
      title: 'Syla',
      category: 'E-commerce Website',
      alt: 'Syla - E-commerce Platform',
      url: '/Syla.svg',
      link: 'https://www.sylaindia.com/',
      description: 'A dedicated E-commerce website built to provide a seamless online shopping experience for the brand\'s customers.',
      challenge: 'To create an online store that reflects the brand\'s aesthetic while offering robust e-commerce functionality like secure checkout and inventory management.',
      solution: 'Designed and developed a custom e-commerce web platform. Focused on user experience, mobile responsiveness, and secure payment integration to drive online sales.',
      technologies: ['E-commerce Development', 'Secure Payment Gateway', 'Inventory Management', 'UI/UX Design'],
      features: [
        'Product Catalog',
        'Shopping Cart & Checkout',
        'Secure Payment Processing',
        'Order Management System',
        'Mobile-Responsive Design'
      ],
      results: [
        'Established direct-to-consumer sales channel',
        'Enhanced customer shopping experience',
        'Improved brand reach',
        'Secure transaction processing'
      ],
      client: 'Syla',
      industry: 'Retail',
      year: '2024'
    },
    {
      title: 'Raaso',
      category: 'SEO, Website & Software',
      alt: 'Raaso - Digital Solutions',
      url: '/Raaso_logo.jpeg',
      link: 'https://raaso.in/',
      description: 'A comprehensive digital engagement including high-performance SEO, a corporate website, and a custom confidential software solution.',
      challenge: 'The client required a multi-faceted digital approach: visibility in search engines, a public web presence, and a secure internal tool for specific business logic.',
      solution: 'Delivered a top-tier SEO strategy to boost ranking, a modern website for brand presence, and developed a proprietary software solution (Confidential) tailored to unique business needs.',
      technologies: ['Advanced SEO', 'Web Development', 'Confidential Software Architecture', 'Security Protocols'],
      features: [
        'Search Engine Ranking Optimization',
        'Corporate Web Presence',
        'Secure Internal Software',
        'Data Privacy Implementation',
        'Custom Business Logic'
      ],
      results: [
        'Top search engine rankings',
        'Robust online presence',
        'Secure handling of proprietary processes',
        'Integrated digital strategy'
      ],
      client: 'Raaso',
      industry: 'Technology / Confidential',
      year: '2024'
    },
    {
      title: 'Royals Sports',
      category: 'Digital Marketing',
      alt: 'Royals Sports - Digital Marketing',
      url: '/Royals_logo.png',
      link: '',
      description: 'Targeted digital marketing campaigns designed to elevate the brand and engage the sports community.',
      challenge: 'To build a strong digital presence and community around the brand through strategic marketing efforts.',
      solution: 'Executed comprehensive digital marketing campaigns comprising social media management, content strategy, and audience engagement techniques.',
      technologies: ['Digital Marketing', 'Social Media Strategy', 'Content Creation', 'Audience Analytics'],
      features: [
        'Social Media Campaigns',
        'Audience Engagement Strategy',
        'Content Marketing',
        'Brand Visibility Growth',
        'Analytics & Reporting'
      ],
      results: [
        'Grew online community',
        'Increased brand awareness',
        'Higher engagement rates',
        'Improved digital reach'
      ],
      client: 'Royals Sports',
      industry: 'Sports Marketing',
      year: '2024'
    },
    {
      title: 'House of Ish (HOI)',
      category: 'Digital Marketing & Website',
      alt: 'HOI - Digital Marketing and Web Presence',
      url: '/HOI.png',
      link: '',
      description: 'A dual-focus project delivering a stunning website alongside a strategic digital marketing campaign for brand growth.',
      challenge: 'To launch the brand digitally with a strong website and simultaneously drive traffic and awareness through marketing.',
      solution: 'Developed an elegant website to serve as the brand hub and complemented it with a digital marketing strategy to attack and retain customers.',
      technologies: ['Web Design & Development', 'Digital Marketing Strategy', 'SEO', 'Content Management'],
      features: [
        'Brand Website',
        'Digital Marketing Campaigns',
        'Traffic Growth Strategy',
        'User Engagement Tools',
        'Visual Identity Showcase'
      ],
      results: [
        'Successful digital launch',
        'Establishment of brand identity',
        'Growth in website traffic',
        'Cohesive digital presence'
      ],
      client: 'House of Ish (HOI)',
      industry: 'Lifestyle / Marketing',
      year: '2024'
    },
  ]

  /* State for the currently selected project for the modal view */
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

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
            <div className={`flex flex-col gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto items-center text-center transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              <div className="flex flex-col gap-3 sm:gap-4">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg px-2">
                  Our Projects - Explore the Impact We've Created
                </h1>
                <h2 className="text-white/90 dark:text-white/80 text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md px-2">
                  Take a look at how our custom software and digital marketing solutions have helped businesses achieve remarkable results.
                </h2>
              </div>
              <button
                onClick={() => {
                  const grid = document.getElementById('portfolio-grid');
                  grid?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex min-w-[100px] sm:min-w-[120px] w-fit max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 sm:h-12 px-4 sm:px-6 bg-primary text-white text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span className="truncate">View Work</span>
              </button>
            </div>
          </div>
        </div>

        <div id="portfolio-grid" className="flex flex-col gap-6 scroll-mt-24">
          <div className="flex gap-3 p-3 flex-wrap items-center justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 cursor-pointer transition-colors ${activeFilter === filter
                  ? 'bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary'
                  : 'bg-slate-200 dark:bg-[#282e39] text-slate-700 dark:text-slate-300 hover:bg-primary/10 dark:hover:bg-primary/10'
                  }`}
              >
                <p className="text-xs font-medium leading-normal">{filter}</p>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto w-full">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col gap-3 rounded-xl overflow-hidden bg-white dark:bg-[#1C2333] border border-gray-200 dark:border-[#282e39] cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`w-full bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110 ${project.title === 'EasyGo Overseas' || project.url.endsWith('.svg') || project.url.endsWith('.png') ? 'bg-contain bg-gray-50 dark:bg-gray-800 p-8 aspect-[3/2]' : 'bg-cover aspect-[3/2]'
                    }`}
                  style={{
                    backgroundImage: `url("${project.url}")`,
                  }}
                  role="img"
                  aria-label={project.alt}
                />
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">
                      {project.category.split(' ')[0]}...
                    </span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 mt-2 font-medium">
                    View Details
                    <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && createPortal(
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedProject(null)}
            ></div>
            <div className="relative bg-white dark:bg-[#101622] w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto animate-[fadeIn_0.3s_ease-out]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="flex flex-col gap-8 md:gap-12 px-6 py-8 md:px-10 md:py-12">
                <div className="max-w-6xl mx-auto w-full">
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-primary text-sm font-bold px-3 py-1 bg-primary/10 rounded-full">
                          {selectedProject.category}
                        </span>
                        {selectedProject.year && (
                          <span className="text-gray-500 dark:text-gray-400 text-sm">{selectedProject.year}</span>
                        )}
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {selectedProject.title}
                      </h2>
                      {selectedProject.description && (
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                          {selectedProject.description}
                        </p>
                      )}
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold mt-6 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                          Visit Live Website
                          <span className="material-symbols-outlined text-lg">open_in_new</span>
                        </a>
                      )}
                    </div>
                    <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
                      <div
                        className={`w-full rounded-xl bg-center bg-no-repeat border border-gray-100 dark:border-gray-800 shadow-sm ${selectedProject.title === 'EasyGo Overseas' || selectedProject.url.endsWith('.svg') || selectedProject.url.endsWith('.png') ? 'bg-contain bg-gray-50 dark:bg-gray-800 p-6 aspect-[3/2]' : 'bg-cover aspect-video'
                          }`}
                        style={{
                          backgroundImage: `url("${selectedProject.url}")`,
                        }}
                        role="img"
                        aria-label={selectedProject.alt}
                      />
                    </div>
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Challenge & Solution */}
                    <div className="lg:col-span-2 space-y-8">
                      {selectedProject.challenge && (
                        <div className="bg-gray-50 dark:bg-[#161d2a] p-6 rounded-xl border border-gray-100 dark:border-gray-800/50">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">help_outline</span>
                            Challenge
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {selectedProject.challenge}
                          </p>
                        </div>
                      )}
                      {selectedProject.solution && (
                        <div className="bg-blue-50/50 dark:bg-primary/5 p-6 rounded-xl border border-blue-100 dark:border-primary/10">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">lightbulb</span>
                            Solution
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {selectedProject.solution}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Project Info Sidebar */}
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-[#1C2333] p-6 rounded-xl border border-gray-200 dark:border-[#282e39] shadow-sm">
                        <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-2">Project info</h4>
                        <div className="space-y-4">
                          {selectedProject.client && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">Client</p>
                              <p className="text-base font-medium text-gray-900 dark:text-white">{selectedProject.client}</p>
                            </div>
                          )}
                          {selectedProject.industry && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">Industry</p>
                              <p className="text-base font-medium text-gray-900 dark:text-white">{selectedProject.industry}</p>
                            </div>
                          )}
                          {selectedProject.technologies && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Technologies</p>
                              <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-[#282e39] text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">star</span>
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-[#161d2a] hover:bg-gray-100 dark:hover:bg-[#1C2333] transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                          >
                            <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
                            <span className="text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Results Section */}
                  {selectedProject.results && selectedProject.results.length > 0 && (
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 md:p-8">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">trending_up</span>
                        Results & Impact
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.results.map((result, i) => (
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
            </div>
          </div>,
          document.body
        )}

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
      </main >
    </>
  )
}

export default Portfolio

