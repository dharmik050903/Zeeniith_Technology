import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import SEO from '../components/SEO'

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = '', duration = 2000, shouldAnimate = false }: { target: number; suffix?: string; duration?: number; shouldAnimate?: boolean }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldAnimate) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (target - startValue) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [shouldAnimate, target, duration])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [shouldAnimateAchievements, setShouldAnimateAchievements] = useState(false)
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])

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

  // Achievements animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimateAchievements(true)
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current)
    }

    return () => {
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current)
      }
    }
  }, [])

  // Timeline animation observer
  useEffect(() => {
    const milestones = [
      { year: '2025', title: 'Founded', desc: 'Zeeniith is born from a shared passion for code and innovation.', align: 'left' },
      { year: '2025', title: 'First Major Client', desc: 'Partnered with a Fortune company, marking our entry into enterprise solutions.', align: 'right' },
      { year: '2025', title: 'Key Product Comming Soon', desc: 'Launched our first proprietary SaaS platform, revolutionizing how businesses manage their digital presence.', align: 'left' },
    ]

    setVisibleItems(new Array(milestones.length).fill(false))

    const observers = timelineItemsRef.current.map((itemRef, index) => {
      if (!itemRef) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }
          })
        },
        {
          threshold: 0.5,
        }
      )

      observer.observe(itemRef)
      return observer
    })

    return () => {
      observers.forEach((observer, index) => {
        if (observer && timelineItemsRef.current[index]) {
          observer.unobserve(timelineItemsRef.current[index]!)
        }
      })
    }
  }, [])

  return (
    <>
      <SEO
        title="About Zeeniith - Building the Future, One Line of Code at a Time"
        description="We are a software agency dedicated to creating innovative solutions and ensuring client success through cutting-edge technology. Learn about our story, mission, values, and team."
        path="/about"
      />
      <main className="flex flex-col gap-16 md:gap-24">
        {/* Enhanced Hero Section */}
        <div
          ref={heroRef}
          className="relative w-screen left-1/2 -translate-x-1/2 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
          style={{ minHeight: '100vh' }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
            style={{
              backgroundImage: `url("/diverse-businesspeople-having-meeting.jpg")`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
            role="img"
            aria-label="About hero background - Diverse businesspeople having a meeting"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 dark:from-black/40 dark:via-black/50 dark:to-black/60 z-10"></div>
          
          {/* Content */}
          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className={`flex flex-col gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto items-center text-center transition-all duration-1000 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-white/80 backdrop-blur-md rounded-full w-fit border-2 border-white/50 shadow-lg">
                  <span className="material-symbols-outlined text-primary text-lg">groups</span>
                  <span className="text-primary text-xs font-bold">About Us</span>
                </div>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg px-2">
                  About ZEENIITH - Your Trusted Digital Partner
                </h1>
                <h2 className="text-white/90 dark:text-white/80 text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md px-2">
                  We're here to answer your questions and discuss how we can help your business grow.
                </h2>
              </div>
              <Link to="/contact">
                <button className="flex min-w-[100px] sm:min-w-[120px] w-fit max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 sm:h-12 px-4 sm:px-6 bg-primary text-white text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  <span className="truncate">Get in Touch</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-6">
              Our Story
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-sm md:text-base font-normal leading-relaxed text-gray-800 dark:text-gray-300 mb-4 text-justify">
                  Founded with a vision to transform businesses through innovative technology, ZEENIITH has emerged as a trusted partner for 20+ companies across India. Our journey began with a simple belief: high-quality software development and digital marketing should be accessible to businesses of all sizes.
                </p>
                <p className="text-sm md:text-base font-normal leading-relaxed text-gray-800 dark:text-gray-300 text-justify">
                  Our team brings together expertise from companies and successful startups, each member bringing unique perspectives that fuel our innovation and client success.
                </p>
              </div>
              <div className="flex-1 w-full h-64 md:h-80 rounded-2xl overflow-hidden">
                <img
                  src="/About_our_story.jpg"
                  alt="Zeeniith Technology - Our Story"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

                {/* Mission & Values Section */}
                <section className="px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-[-0.015em] mb-6 xs:mb-8 sm:mb-10 md:mb-12">
                      Our Mission & Values
                    </h2>
                    <div className="max-w-6xl mx-auto mb-8 text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-8 text-justify">
                        To empower businesses through innovative technology solutions and data-driven digital marketing strategies that drive sustainable growth and competitive advantage.
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 text-justify">
                        To be India's most trusted technology and marketing partner for businesses seeking digital transformation and exceptional growth.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10">
              {[
                { icon: 'groups', title: 'Client Success', desc: 'Your success is our success. We\'re deeply invested in delivering exceptional results and long-term value.' },
                { icon: 'lightbulb', title: 'Innovation', desc: 'We stay at the forefront of technology and marketing trends to provide cutting-edge solutions.' },
                { icon: 'visibility', title: 'Transparency', desc: 'We believe in open communication, honest feedback, and clear timelines.' },
                { icon: 'verified', title: 'Quality', desc: 'We never compromise on quality. Every project receives our full attention and expertise.' },
                { icon: 'handshake', title: 'Collaboration', desc: 'We work as an extension of your team, fostering strong partnerships based on mutual respect.' },
                { icon: 'school', title: 'Continuous Learning', desc: 'We\'re committed to staying updated with the latest technologies and best practices.' },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-grow text-justify">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* Journey Timeline Section */}
                <section ref={timelineRef} className="px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-[-0.015em] mb-6 xs:mb-8 sm:mb-10 md:mb-12">
                      The ZEENIITH Journey
                    </h2>
            <div className="relative flex flex-col items-center w-full">
              {/* Animated connecting line - Desktop */}
              <div className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 hidden md:block" style={{ height: '100%' }}>
                {/* Base line (faded) */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-300/30 via-gray-300/20 to-transparent dark:from-gray-600/30 dark:via-gray-600/20"></div>
                {/* Animated progress line */}
                <div 
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary/80 to-primary transition-all duration-1000 ease-out"
                  style={{
                    height: visibleItems.filter(Boolean).length === 0 
                      ? '0%' 
                      : visibleItems.filter(Boolean).length === 1
                      ? '33%'
                      : visibleItems.filter(Boolean).length === 2
                      ? '66%'
                      : '100%',
                  }}
                ></div>
              </div>
              
              {[
                 { year: '2025', title: 'Founded', desc: 'Zeeniith is born from a shared passion for code and innovation.', align: 'left' },
                 { year: '2025', title: 'First Major Client', desc: 'Partnered with a Fortune company, marking our entry into enterprise solutions.', align: 'right' },
                 { year: '2026', title: 'Key Product Comming Soon', desc: 'Launching our first proprietary SaaS platform, revolutionizing how businesses manage their digital presence.', align: 'left' },
              ].map((milestone, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    timelineItemsRef.current[index] = el
                  }}
                  className={`relative z-10 w-full flex ${milestone.align === 'left' ? 'justify-start md:justify-start' : 'justify-end md:justify-end'} mb-12 group transition-all duration-700 ${
                    visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${milestone.align === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-left`}>
                    <div className={`bg-white dark:bg-[#1C2333] p-6 rounded-xl border transition-all hover:shadow-lg group-hover:scale-105 ${
                      visibleItems[index] 
                        ? 'border-primary/50 dark:border-primary/50 shadow-md' 
                        : 'border-gray-200 dark:border-[#282e39]'
                    }`}>
                      <p className="font-bold text-primary text-lg mb-2">{milestone.year}</p>
                      <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">{milestone.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className={`absolute left-1/2 top-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-[#1C2333] -translate-x-1/2 -translate-y-1/2 z-20 group-hover:scale-125 transition-all duration-500 ${
                    visibleItems[index] 
                      ? 'bg-primary scale-110 shadow-lg shadow-primary/50' 
                      : 'bg-gray-300 dark:bg-gray-600 scale-100'
                  }`}></div>
                  {/* Mobile vertical line - animated */}
                  {index < 2 && (
                    <div 
                      className="md:hidden absolute left-1/2 top-full w-0.5 -translate-x-1/2 transition-all duration-700"
                      style={{
                        height: visibleItems[index] ? '3rem' : '0',
                        background: visibleItems[index] 
                          ? 'linear-gradient(to bottom, rgb(37, 106, 244), rgba(37, 106, 244, 0.6))' 
                          : 'transparent',
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12">
              Our Constellation
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 max-w-4xl mx-auto">
              {[
                { name: 'Dharmik Suthar', role: 'Founder & CEO', img: '/Dharmik_Suthar.png' },
                { name: 'Aditya Valaki', role: 'Marketing & Sales Head', img: '/Aditya_Valaki.jpg' },
              ].map((member, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-2 w-full sm:w-auto sm:min-w-[280px] sm:max-w-[320px]"
                >
                  <div className="relative mb-4 flex-shrink-0">
                    <img
                      className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-[#282e39] group-hover:border-primary transition-colors"
                      alt={`Photo of ${member.name}`}
                      src={member.img}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-12 md:py-20 bg-gray-100/50 dark:bg-white/5 rounded-xl mx-4">
          <div className="px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12">
                Our Culture
              </h2>
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10">
                {[
                  { icon: 'diversity_3', title: 'Diverse & Inclusive', desc: 'We celebrate diversity and believe that different perspectives lead to better solutions. Our team comes from various backgrounds, bringing unique insights to every project.' },
                  { icon: 'school', title: 'Continuous Learning', desc: 'Technology evolves rapidly, and so do we. We invest in our team\'s growth through training, conferences, and knowledge sharing sessions.' },
                  { icon: 'work_history', title: 'Work-Life Balance', desc: 'We believe in sustainable productivity. Our flexible work arrangements and wellness programs ensure our team stays healthy and motivated.' },
                  { icon: 'celebration', title: 'Celebrate Success', desc: 'We recognize and celebrate both big wins and small victories. Every milestone matters, and every team member\'s contribution is valued.' },
                ].map((culture, index) => (
                  <div
                    key={index}
                    className="group flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-4xl">{culture.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{culture.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-grow text-justify">{culture.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section with Animation */}
        <section ref={achievementsRef} className="py-12 md:py-20 bg-primary/5 dark:bg-primary/10 rounded-xl mx-4">
          <div className="px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12">
                Our Achievements
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: 50, suffix: '+', label: 'Projects Completed', icon: 'check_circle' },
                  { number: 98, suffix: '%', label: 'Client Satisfaction Rating', icon: 'favorite' },
                  { number: 10, suffix: '+', label: 'Employees & Contractors', icon: 'groups' },
                  { number: 20, suffix: '+', label: 'Industries Served', icon: 'business' },
                ].map((achievement, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4 group-hover:bg-primary/30 transition-colors group-hover:scale-110">
                      <span className="material-symbols-outlined text-3xl">{achievement.icon}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      <AnimatedCounter target={achievement.number} suffix={achievement.suffix} duration={2000} shouldAnimate={shouldAnimateAchievements} />
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12">
              Our Office
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="group flex flex-col gap-6 p-8 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-4xl">business</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-1">Zeeniith Office</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400">Visit us at our office</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-[#282e39]">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl mt-1">location_on</span>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">Anand, Gujarat, India</h4>
                      <p className="text-base text-gray-600 dark:text-gray-400">120 Narayan Empire, A.V. Road, Anand, Gujarat 388120, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships Section - Commented out until we have partners */}
        {/* <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Our Partners
            </h2>
            <p className="text-center text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12">
              We collaborate with leading technology companies and platforms to deliver the best solutions for our clients.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="group flex items-center justify-center p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg h-24"
                >
                  <span className="text-gray-400 dark:text-gray-600 text-sm group-hover:text-primary transition-colors">Partner Logo</span>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl mx-4 p-8 sm:p-12 md:p-16 text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-white text-3xl">handshake</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-[-0.015em]">
            Let's Work Together
          </h2>
          <p className="max-w-xl text-white/90 text-base md:text-lg">
            Ready to partner with us? We're here to help your business succeed.
          </p>
          <Link to="/contact">
            <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              <span className="truncate">Start a Conversation</span>
            </button>
          </Link>
        </section>
      </main>
    </>
  )
}

export default About
