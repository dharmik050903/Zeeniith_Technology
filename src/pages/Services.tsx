import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import SEO from '../components/SEO'

const Services = () => {
  const [activeTab, setActiveTab] = useState<'platform' | 'technology'>('platform')
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

  const servicesByPlatform = [
    {
      icon: 'devices',
      title: 'Web Application Development',
      description: 'Crafting responsive, high-performance web applications tailored to your business needs. From simple websites to complex enterprise solutions.',
      features: ['React & Next.js', 'Progressive Web Apps', 'E-commerce Solutions', 'Enterprise Applications'],
    },
    {
      icon: 'phone_iphone',
      title: 'Mobile App Creation',
      description: 'Building intuitive and engaging native mobile apps for iOS and Android platforms with seamless user experiences.',
      features: ['iOS & Android', 'Cross-platform Apps', 'App Store Optimization', 'Real-time Features'],
    },
    {
      icon: 'design_services',
      title: 'UI/UX Design',
      description: 'Designing beautiful, user-centric interfaces that deliver exceptional user experiences and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: 'cloud_sync',
      title: 'Cloud & DevOps Solutions',
      description: 'Implementing scalable and secure cloud infrastructure to power your applications with high availability.',
      features: ['AWS & Azure', 'CI/CD Pipelines', 'Containerization', 'Infrastructure as Code'],
    },
    {
      icon: 'neurology',
      title: 'AI & Machine Learning',
      description: 'Leveraging artificial intelligence to build smart, data-driven software solutions that learn and adapt.',
      features: ['Custom AI Models', 'Data Analytics', 'Predictive Systems', 'Natural Language Processing'],
    },
    {
      icon: 'rocket_launch',
      title: 'Digital Strategy & Consulting',
      description: 'Strategic guidance to help you navigate digital transformation and achieve your business objectives.',
      features: ['Digital Roadmaps', 'Technology Audits', 'Process Optimization', 'Innovation Labs'],
    },
  ]

  const servicesByTechnology = [
    {
      icon: 'code',
      title: 'Frontend Development',
      description: 'Modern frontend solutions using React, Vue.js, and Angular for dynamic user interfaces.',
    },
    {
      icon: 'storage',
      title: 'Backend Development',
      description: 'Robust backend systems with Node.js, Python, and Go for scalable server-side applications.',
    },
    {
      icon: 'database',
      title: 'Database Solutions',
      description: 'Optimized database architectures with PostgreSQL, MongoDB, and Redis for high performance.',
    },
    {
      icon: 'security',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementations and compliance with industry standards.',
    },
    {
      icon: 'api',
      title: 'API Development',
      description: 'RESTful and GraphQL APIs designed for seamless integration and scalability.',
    },
    {
      icon: 'analytics',
      title: 'Data Engineering',
      description: 'Big data pipelines and analytics platforms for actionable business insights.',
    },
  ]

  const processSteps = [
    { number: '1', title: 'Discover & Strategize', desc: 'We dive deep into your goals to create a comprehensive project roadmap.' },
    { number: '2', title: 'Design & Prototype', desc: 'Our team crafts intuitive UI/UX designs and interactive prototypes.' },
    { number: '3', title: 'Develop & Test', desc: 'We write clean, efficient code and rigorously test for quality assurance.' },
    { number: '4', title: 'Launch & Support', desc: 'We handle deployment and provide ongoing support to ensure success.' },
  ]

  const techStack = [
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    { name: 'Vue.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Nest.js', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg' },
    { name: 'Swift', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'Kotlin', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Go', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  ]

  return (
    <>
      <SEO
        title="Services - Zeeniith | Software Development Services"
        description="Zeeniith delivers innovative and scalable software solutions tailored to your unique vision. Web apps, mobile apps, UI/UX design, cloud solutions, and AI/ML services."
        path="/services"
      />
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-screen left-1/2 -translate-x-1/2 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-32 md:pb-48 min-h-[85vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
          style={{
            backgroundImage: `url("/Service-bg-herosection.png")`,
          }}
          role="img"
          aria-label="Services hero background"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 dark:from-black/60 dark:via-black/70 dark:to-black/80 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className={`flex flex-col gap-6 md:gap-8 max-w-4xl transition-all duration-1000 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 dark:bg-primary/30 backdrop-blur-sm rounded-full w-fit border border-primary/30">
                <span className="material-symbols-outlined text-primary text-lg">rocket_launch</span>
                <span className="text-primary text-xs font-bold">Our Services</span>
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                Comprehensive Technology & Marketing Solutions
              </h1>
              <p className="text-white/90 dark:text-white/80 text-sm md:text-base leading-relaxed max-w-2xl drop-shadow-md">
                Smart, scalable, and secure solutions designed to accelerate your business growth
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  <span className="truncate">Get Started Today</span>
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-transparent border-2 border-white/80 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white/10 dark:hover:bg-white/20 transition-all backdrop-blur-sm">
                  <span className="truncate">View Our Work</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 px-2 xs:px-4 sm:px-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] mb-2 xs:mb-3 sm:mb-4">
            Software Development - Smart, Scalable and Secure Solutions
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto px-2">
            Transform your business vision into powerful, scalable reality
          </p>
        </div>

        {/* Tabs */}
        <div className="px-2 xs:px-4 sm:px-6 mb-6 xs:mb-8">
          <div className="flex border-b border-slate-200 dark:border-[#3b4354] gap-4 xs:gap-6 sm:gap-8 max-w-5xl mx-auto justify-center overflow-x-auto">
            <button
              onClick={() => setActiveTab('platform')}
              className={`flex items-center justify-center border-b-[3px] pb-3 xs:pb-4 pt-2 px-4 xs:px-6 transition-all flex-shrink-0 ${
                activeTab === 'platform'
                  ? 'border-b-primary text-primary'
                  : 'border-b-transparent text-slate-500 dark:text-[#9ca6ba] hover:text-primary dark:hover:text-white'
              }`}
            >
              <p className="text-xs xs:text-sm sm:text-base font-bold leading-normal tracking-[0.015em] whitespace-nowrap">By Platform</p>
            </button>
            <button
              onClick={() => setActiveTab('technology')}
              className={`flex items-center justify-center border-b-[3px] pb-3 xs:pb-4 pt-2 px-4 xs:px-6 transition-all flex-shrink-0 ${
                activeTab === 'technology'
                  ? 'border-b-primary text-primary'
                  : 'border-b-transparent text-slate-500 dark:text-[#9ca6ba] hover:text-primary dark:hover:text-white'
              }`}
            >
              <p className="text-xs xs:text-sm sm:text-base font-bold leading-normal tracking-[0.015em] whitespace-nowrap">By Technology</p>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 px-2 xs:px-3 sm:px-4 md:px-6 ${(activeTab === 'platform' ? servicesByPlatform : servicesByTechnology).length === 5 ? 'grid-5-items' : ''}`}>
          {(activeTab === 'platform' ? servicesByPlatform : servicesByTechnology).map((service, index) => {
            const serviceWithFeatures = activeTab === 'platform' ? service as typeof servicesByPlatform[0] : null
            return (
            <div
              key={index}
              className="group flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-slate-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 h-full"
            >
            <div className="flex items-start gap-4 flex-shrink-0">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            </div>
            {serviceWithFeatures?.features && (
              <div className="pt-2 border-t border-gray-200 dark:border-[#282e39] mt-auto">
                <ul className="flex flex-wrap gap-2">
                  {serviceWithFeatures.features.map((feature: string, idx: number) => (
                    <li key={idx} className="text-xs px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          )})}
        </div>
      </div>

      {/* Development Process Section */}
      <div className="py-12 md:py-20 bg-gray-100/50 dark:bg-white/5 rounded-xl mx-4 my-8">
        <div className="px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Our Development Process
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              A proven methodology that ensures success from concept to launch
            </p>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group relative">
                  <div className="relative mb-6 w-full">
                    <div className="w-20 h-20 rounded-full bg-primary/20 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 dark:group-hover:bg-primary/30 transition-all group-hover:scale-110 mx-auto relative z-10 border-4 border-white dark:border-[#1C2333]">
                      <span className="text-primary text-3xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-12 md:py-20">
        <div className="px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Our Technology Stack
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Cutting-edge tools and frameworks we use to build exceptional solutions
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            {/* First Row - 8 items */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 mb-6">
              {techStack.slice(0, 8).map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg hover:scale-110 group"
                >
                  <img
                    className="h-12 w-12 grayscale group-hover:grayscale-0 transition-all"
                    alt={`${tech.name} logo`}
                    src={tech.url}
                    loading="lazy"
                  />
                  <span className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            {/* Second Row - 6 items (centered) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {techStack.slice(8, 14).map((tech, index) => (
                <div
                  key={index + 8}
                  className="flex flex-col items-center justify-center p-4 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg hover:scale-110 group"
                >
                  <img
                    className="h-12 w-12 grayscale group-hover:grayscale-0 transition-all"
                    alt={`${tech.name} logo`}
                    src={tech.url}
                    loading="lazy"
                  />
                  <span className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Our Services Section */}
      <div className="py-12 md:py-20 bg-primary/5 dark:bg-primary/10 rounded-xl mx-4 my-8">
        <div className="px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Why Choose ZEENIITH - Top Software Development Company in Anand
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              What sets us apart in delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: 'verified_user',
                title: 'Personalized Solutions',
                description: 'Every business is unique, and so are our solutions. We take time to understand your specific requirements, challenges, and goals to deliver scalable digital solutions that perfectly fit your needs. No cookie-cutter approaches - every solution is custom-built.',
                stat: '100% Custom',
              },
              {
                icon: 'schedule',
                title: 'Quick, Transparent Project Management',
                description: 'No surprises, no hidden costs, no unclear timelines. We maintain complete transparency throughout the development process with regular updates, clear communication, and milestone-based delivery. You\'ll always know exactly where your project stands.',
                stat: '100% Transparent',
              },
              {
                icon: 'security',
                title: 'Proven Track Record',
                description: 'Our portfolio speaks for itself. We\'ve successfully delivered 100+ projects across various industries, helping businesses achieve their digital transformation goals. Our clients\' success stories demonstrate our capability and commitment.',
                stat: '100+ Projects',
              },
              {
                icon: 'speed',
                title: 'Fast Delivery',
                description: 'Time is money in business. Our agile development methodology ensures quick turnarounds without compromising on quality. We understand the importance of getting your product to market fast while maintaining excellence.',
                stat: 'Fast Turnaround',
              },
              {
                icon: 'code',
                title: 'Latest Technologies Stack',
                description: 'We stay ahead of the curve by utilizing the most advanced technologies and frameworks. From React and Node.js to AI and cloud solutions, we leverage modern tools for superior results and future-proof solutions.',
                stat: 'Modern Tech',
              },
              {
                icon: 'analytics',
                title: 'Data-Driven Marketing',
                description: 'Our marketing strategies are backed by real data and analytics. We continuously monitor, analyze, and optimize campaigns to maximize your ROI and achieve sustainable online growth.',
                stat: 'Data-Driven',
              },
              {
                icon: 'star',
                title: 'Strong Portfolio with Optimum Client Satisfaction',
                description: 'Our clients consistently rate us 4.8/5 stars. We maintain long-term relationships with clients because we prioritize their success and deliver exceptional results.',
                stat: '4.8/5 Stars',
              },
            ].map((feature, index) => (
               <div
                 key={index}
                 className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-slate-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl group h-full"
               >
                 <div className="flex items-center gap-4 flex-shrink-0">
                   <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors flex-shrink-0">
                     <span className="material-symbols-outlined text-primary text-3xl">{feature.icon}</span>
                   </div>
                   <span className="text-xl font-bold text-primary flex-shrink-0">{feature.stat}</span>
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                 <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed flex-grow text-justify">{feature.description}</p>
               </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-12 md:py-20">
        <div className="px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Success Stories
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Real results from real clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'EasyGo Overseas Website',
                client: 'Easy Go Overseas Advisor',
                result: '40% increase in inquiries | Professional online presence established',
                description: 'A comprehensive education consultancy website helping students navigate study abroad opportunities across USA, UK, Canada, Australia, New Zealand, Singapore, Europe, and Cyprus. The website features free counseling services, university application assistance, visa guidance, loan support, and accommodation information.',
                image: '/Easy-go-logo.jpg',
                link: 'https://www.easygo-overseas.in/',
                metrics: [
                  '40% increase in student inquiries within 3 months',
                  '200+ monthly website visitors',
                  '50% improvement in mobile user engagement',
                  'Professional online presence established',
                  'SEO optimized for better search visibility'
                ],
                testimonial: "Working with Zeeniith Technology on the Easy Go Overseas Advisor website was a genuinely smooth and positive experience. The team quickly understood my vision and delivered a fast, mobile-friendly, and conversion-focused website that I'm truly proud to use for my business."
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 p-6 md:p-8 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl group overflow-hidden h-full"
              >
                <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center p-6">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between flex-shrink-0">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors min-w-0 flex-1">{caseStudy.title}</h3>
                    <span className="text-primary text-sm font-bold bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full flex-shrink-0 ml-2">{caseStudy.client}</span>
                  </div>
                  <p className="text-base text-slate-600 dark:text-gray-400 leading-relaxed">{caseStudy.description}</p>
                </div>
                
                {/* Key Metrics */}
                {caseStudy.metrics && (
                  <div className="pt-4 border-t border-gray-200 dark:border-[#282e39]">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg">analytics</span>
                      Key Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {caseStudy.metrics.map((metric, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">check_circle</span>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Result Highlight */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-[#282e39] bg-primary/5 dark:bg-primary/10 rounded-lg p-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">trending_up</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Primary Result</p>
                    <p className="text-base font-bold text-primary">{caseStudy.result}</p>
                  </div>
                </div>

                {/* Client Info */}
                <div className="pt-4 border-t border-gray-200 dark:border-[#282e39]">
                  <div className="flex flex-col gap-3">
                    <div className="flex-1">
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Alpesh Suthar</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Easy Go Overseas Advisor</p>
                    </div>
                    {caseStudy.testimonial && (
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">format_quote</span>
                        <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">"{caseStudy.testimonial}"</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Visit Website Link */}
                {caseStudy.link && (
                  <a
                    href={caseStudy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Visit Live Website
                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="text-center pt-8">
            <Link to="/portfolio">
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 mx-auto">
                <span className="truncate">View All Case Studies</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 md:py-20">
        <div className="px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Everything you need to know about our services
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-4">
            {[
              {
                question: 'What is custom software development?',
                answer: 'Custom software is tailored specifically to your business needs, unlike generic off-the-shelf solutions. It\'s built to perfectly match your workflows and requirements.',
                icon: 'code',
              },
              {
                question: 'How long does development take?',
                answer: 'Timeline varies by project complexity. Simple apps: 4-8 weeks. Medium complexity: 8-16 weeks. Enterprise solutions: 3-6 months+.',
                icon: 'schedule',
              },
              {
                question: 'What technologies do you use?',
                answer: 'We use modern tech stacks including React, Node.js, Python, Java, Flutter, AWS, Azure, and Google Cloud Platform. Selection depends on your project needs.',
                icon: 'settings',
              },
              {
                question: 'Do you provide post-launch support?',
                answer: 'Yes! We provide 3 months of free support. Extended support available through maintenance packages.',
                icon: 'support_agent',
              },
              {
                question: 'What\'s your pricing model?',
                answer: 'We offer flexible models: Fixed price (budget certainty), Time & Materials (flexibility), or Retainer (ongoing support).',
                icon: 'payments',
              },
              {
                question: 'How do you ensure quality?',
                answer: 'We follow agile methodology with regular testing, code reviews, and quality assurance throughout development.',
                icon: 'verified',
              },
              {
                question: 'Can you work with existing teams?',
                answer: 'Absolutely! We collaborate seamlessly with your in-house teams and third-party vendors.',
                icon: 'groups',
              },
              {
                question: 'How do I get started?',
                answer: 'Schedule a free consultation with our team. We\'ll discuss your project requirements and provide recommendations.',
                icon: 'rocket_launch',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">{faq.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{faq.question}</h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl mx-4 my-8">
        <div className="flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-white text-3xl">rocket_launch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-[-0.015em] mb-6">
            Have an Idea? Let's Make it Real.
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Turn your vision into a reality with our expert team. We're ready to build the next big thing with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                <span className="truncate">Schedule a Free Consultation</span>
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-transparent border-2 border-white text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/10 transition-colors">
                <span className="truncate">View Our Work</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services

