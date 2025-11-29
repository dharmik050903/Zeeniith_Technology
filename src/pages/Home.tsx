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

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Play video when it comes into view
            if (videoRef.current && !isPlaying) {
              videoRef.current.play().catch((error) => {
                console.log('Video play error:', error)
              })
              setIsPlaying(true)
            }
          } else {
            // Optional: Pause when out of view
            // if (videoRef.current && isPlaying) {
            //   videoRef.current.pause()
            //   setIsPlaying(false)
            // }
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    // Play video on initial load if already in viewport
    if (videoRef.current && heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
      if (isInViewport) {
        videoRef.current.play().catch((error) => {
          console.log('Video play error:', error)
        })
        setIsPlaying(true)
        setIsVisible(true)
      }
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [isPlaying])

  // Stats animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimateStats(true)
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <>
      <SEO
        title="Zeeniith - We Build Digital Universes"
        description="We build digital universes. UI/UX Design, Web Apps, Mobile Experiences, and Branding. Explore our work and let's create something amazing together."
        path="/"
      />
      <div
        ref={heroRef}
        className="hero-section relative -mx-4 xs:-mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 2xl:-mx-24 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-20 md:pb-32 min-h-screen flex items-center justify-center overflow-hidden z-0"
        style={{ 
          minHeight: '100vh',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
        }}
      >
        {/* Video Background with Zoom Effect */}
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none ${
            isVisible ? 'video-zoom-in' : 'scale-[1.3]'
          }`}
          style={{ 
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <source src="/bg-home.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 dark:bg-black/60 z-10 pointer-events-none"></div>
        {/* Content */}
        <div
          className={`relative z-20 flex min-h-[400px] xs:min-h-[480px] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[650px] xl:min-h-[700px] flex-col gap-4 xs:gap-5 sm:gap-6 md:gap-8 items-center justify-center text-center p-4 xs:p-6 sm:p-8 md:p-10 ${
            isVisible ? 'content-fade-in' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-[-0.033em] text-white drop-shadow-lg px-2">
              Custom Software Development and ROI-Driven Digital Marketing Solutions
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-normal text-white/90 drop-shadow-md px-2 max-w-4xl mx-auto">
              We design and develop custom software, websites, mobile apps, Run result-driven digital marketing campaigns tailored to your business growth. Transform your vision into reality with India's trusted software development company.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-5">
            <Link to="/contact">
              <button className="flex min-w-[120px] xs:min-w-[140px] sm:min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 px-4 xs:px-5 sm:px-6 md:px-8 bg-primary text-white text-xs xs:text-sm sm:text-base md:text-lg font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg">
                <span className="truncate">Get a Free Consultation Today!</span>
              </button>
            </Link>
            <Link to="/contact">
              <button className="flex min-w-[120px] xs:min-w-[140px] sm:min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 px-4 xs:px-5 sm:px-6 md:px-8 bg-transparent border-2 border-white text-white text-xs xs:text-sm sm:text-base md:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-white/10 transition-colors shadow-lg">
                <span className="truncate">Book a Free Call Now!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Client Logos Section - Commented out for now, will be used later when we have clients to display */}
      {/* <div className="w-full py-12">
        <h4 className="text-center text-sm font-bold uppercase leading-normal tracking-widest text-text-light/50 dark:text-text-dark/50 px-4 py-2">
          Trusted by innovative companies worldwide
        </h4>
        <div className="relative w-full overflow-hidden mt-6">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex w-full justify-around items-center gap-16 mx-8">
              <img
                className="h-8 grayscale opacity-60"
                alt="Client logo 1, abstract geometric shape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW7Gl8Z0rnTb0UaotEPYzmWksJyYoEXAHF9lZ3linaDHm1H7wCiraO4ch6KgX-jqfym2qqPoRM88viCyA9Qgm1t8KM4TL5adA8elkj8UT2Tw1KrP7VQV_UhP0acEPFFT5YsYIMvtG33k-ngYMhj9fcLLMdr3csRPV-8rjGyI3YKJlT8TpxWBFA-1ILBnjbe1HjADEH9ybgAKy29ukSxk8AJ6G1jS2jMKXFaAGqHdBHXQvmMM7Qdps4y-m7N1JNMgBPvN3z5Bmmjf7v"
                loading="lazy"
              />
              <img
                className="h-8 grayscale opacity-60"
                alt="Client logo 2, abstract geometric shape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPtFt8Vn6tuoFBvllCDDvhkgPvF8rmCXBFqONeUwQdwzxR-6WNjWlQ8ynCu7_FEf5u9SWuAzW4icCzOCz3r67y9qSoNIxTS7rb4VTJckwZ2rcPj0B4jGAthYRND-ic-l8EBlcb52yYF_qIibv_bVlkcmAq2fwadAJmBSAEwdE195PUBcqbLRsC6kbKhIEEiihMLM60U2eB4hxqOqVM1EbGxks3QxjpVrrDQhtFw8eEzUpaAOOvjnGlh7dh-EumQ1INct1KQd1ihQqE"
                loading="lazy"
              />
              <img
                className="h-8 grayscale opacity-60"
                alt="Client logo 3, abstract geometric shape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVz3YSPjkERDpJibYvfG-apBRCfui3pOnoqC-t6dRXU-v3SBfO22xB5kEhEOO11-I8iJlnvaCSNkJfqDyDTtVGxWg6cdRyGPVzYnpAKxYIPox1l1T3WjX5Sk-SE7dWPU6l4p0xrAmnG7wjW8c6eOXviTFkR9rpyDD2ikLMDu0fsYkHjXTuYwn2t3CLFDXk5n6X8oyae3mboKWIvMj1hcmxGmGErkxvXLblEEgBo4EUJrKwc9FB3miM3h0NZteV54SczVDk-cAhHnp1"
                loading="lazy"
              />
              <img
                className="h-8 grayscale opacity-60"
                alt="Client logo 4, abstract geometric shape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlxzzuj8qBi5-EbdNRteobygYJo7CF-MPPTDe96RTaYR_yoejkixGO33oQa5KyFL1CNxNmqeTUd6143-F_7mWx3BSBK5NtQls-B-aT4F04Oxvb66dThkFUAuOxrjbf_n8jBCNt_btF-nZY4EoPoYGMbRD3ZyK_VPNuAikYw8aoaUBAn5IUtAh6bKFM-_R22A6q3g6rMm-XOPaHQuem4DuK9k5ya3cW9-pHSopnuOZjOO5k0S_K5SufzDAAgx4W3nGVXBFJtVcgxY9z"
                loading="lazy"
              />
              <img
                className="h-8 grayscale opacity-60"
                alt="Client logo 5, abstract geometric shape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNH6hKrZOonjFHyxTC_bnUJYZIvOe7SQbG7-GC6qYUoMDqEjywtk8J6h0jX4fwOGOdECPwaM7ZxL3ldULK6N7zX3fBhwJaeq8ftqkj-XP22AXXG2FysBIkQ_v5dxi3TsA_93HAtqjVL2ir4ZAg6hV9I_NNwjw3XhwzSDGE6_Q1yVCYdQ388jlpch6_pBABo7YMXRu3RCRiVMQ9qSbjz1KYEeGCo2YWGk0AisJOLOjT5wQ8W1zwGa-EGYD60a6MRmCrRbmi79Ln2k_d"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
            <div className="flex w-full justify-around items-center gap-16 mx-8">
              <img
                className="h-8 grayscale opacity-60"
                alt="Client logo 1, abstract geometric shape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMEFoF77m_fHjmjvz0h_dy7ON7eb5SHO7pDz9toIoXKYmxECmVjYiyFscLV4hoWFlzmgnrtnJU3GdpxIDKNRWqUl3Xciy0VMbRCwJa3FP3AvRkd5opsKnD6nuFp54tiRm99eCYMxuQzezk4FF6iJb_9ogqi530HHLD_fwVRfwRk7ErN1TZgZ5X3C88kikWj4-mOoe6JzKyI26NX9Tq7leInMh8oF5TiSA_AH-deX1d8sIZjIMmaXQKgXgfrRzEgBKbrKpf-B5F3ll0"
                loading="lazy"
              />
              <img
                className="h-8 grayscale opacity-60"
                alt="Client logo 2, abstract geometric shape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb2CdqO4fb23RdmmzyznmmPCqtQH32Wj6t2ttHoo86aHWUOsVxbNGJuNHNTUw6oQgSFRIvAFxwJ6uDvzl52ODIUMnN7lCGkQLMN5CRg906kDWu1C2N4-K24EgP-M_jsQVSIPBiT9Ptr0kgP8yKa7boe7dhp12ryNzP-o4elkEZqrPLMF0qeJIcQf93_7vmSM0eZ6sNGXJTLtrjr9tsX3E6Jl17S29DEpybvU6sq_pJLN0Zl1moEyVhi2bo7Ob4ceaU8ob-6yMaGgd_"
                loading="lazy"
              />
              <img
                className="h-8 grayscale opacity-60"
                alt="Client logo 3, abstract geometric shape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVk5ime3suQZuJdsvaGeZfwnPCM5xWdXjca-0PxP7Y5PI9yBOJO2nngxe5yHflUq9b45jU0OnjP4wxmNXZszGf1G-GM4Jx7aPNR_9A37GZb5FwMCLpWrpJhQqmZRu1cfA5KN7tPbuGdduj20FGZ69YCdONPEg_7FCePpt5-suBKtzvWvyObIvftiTN_sFJzL9m-HyheqdKfp1Uc_ZdXGSSK2IUi2Iy8RU2C8F8IzLHPlUQo0xLKnIWpTQ38czHyffe8qtAjnEw2Vj8"
                loading="lazy"
              />
              <img
                className="h-8 grayscale opacity-60"
                alt="Client logo 4, abstract geometric shape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEGYVjkM-ZK3GXuEHEqnwmqZ8k7q9JmIi1UIGdP1egCE1LHU4M8OM8hXlLtPO3mljKA407DukD0o4K-LYmDbicva0V9Aa-GLCuw4HiHG4TtqDKnxUoKPGwuhKdm_qB9bm31SQ64at7_nlK9Q0frcHit9Oz5jAwiu_S0v8FIpKC8FLHGKuwGT12YngrlFoTRZyj3Z8pAhFlyTPd5A2UcgicGzTf99v3Cjc0oBoxy2IL-DXmuy24PanXshipY9bScUOZBs5NySRld1x"
                loading="lazy"
              />
              <img
                className="h-8 grayscale opacity-60"
                alt="Client logo 5, abstract geometric shape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSNH3PTesURDMLvdUqpBiNjQUilIfKnPmiD5amp0ygpJTVHgZLmD6pKxnCOiFwP5I24-i_Xiu0VxEdEZQayiRQiUqO8JLKMhARz2MD2fvzZLeqnkLsr4GI3dqcgsrwYyn4f9JmtoyJx421livLflAQo4Ds7eHVQaW5sMP_CjBg5Iwzo7DDuRDnC5CVldHjoAhBK8A5J6k17YWF0d2dSpyhIOebLNTW0RzvMURLIx2AFxD4IK9B7C3hQ0y4VCPdnkjRITXtLCC0yy5v"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* About ZEENIITH Section */}
      <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 px-2 xs:px-4 sm:px-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] mb-2 xs:mb-3 sm:mb-4">
            About ZEENIITH - Your Trusted Technology Partner
          </h2>
          <div className="max-w-6xl mx-auto text-left px-2 xs:px-4 sm:px-6 space-y-4 text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
            <p className="text-justify">
              ZEENIITH is a leading software development and digital marketing company based in Anand, Gujarat, committed to delivering innovative technology solutions that drive business growth. As one of the top software development companies in Anand, we combine technical expertise with strategic digital marketing to transform your business.
            </p>
            <p className="text-justify">
              We provide end-to-end custom software services utilizing advanced technology platforms tailored precisely to your specific business requirements. Whether you're a startup seeking your first product or an enterprise undergoing digital transformation, we deliver solutions that scale with your ambitions.
            </p>
            <p className="text-justify">
              Beyond development, we deliver a full spectrum of digital marketing services, from comprehensive SEO to targeted Meta Ads campaigns, ensuring your brand achieves maximum visibility and consistent rankings on search engines.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mt-8 xs:mt-10 sm:mt-12 text-center px-2 xs:px-4 sm:px-6">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 xs:mb-8 sm:mb-10 text-gray-900 dark:text-white">Why Businesses Trust ZEENIITH</h3>
            <ul className="space-y-3 xs:space-y-4 text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 list-disc list-inside text-left max-w-4xl mx-auto">
              <li>Proven expertise in custom software development</li>
              <li>Comprehensive services across software and marketing</li>
              <li>Client-centric approach with transparent communication</li>
              <li>Latest technology stack and industry best practices</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-4 xs:py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] px-2 xs:px-4 sm:px-6 pb-4 xs:pb-6 sm:pb-8 pt-2 xs:pt-4 sm:pt-5 text-center">
          Our Projects - Explore the Impact We've Created
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2 xs:px-3 sm:px-4 md:px-6">
          {[
            {
              title: 'E-Commerce Platform Redesign',
              category: 'Website Development',
              description: 'Complete redesign and rebuilding of e-commerce platform to handle increased traffic and improve user experience.',
              result: '250% increase in conversions, 40% reduction in cart abandonment, 3x transaction capacity',
              technologies: 'React, Node.js, MongoDB, AWS, Stripe',
              alt: 'E-Commerce Platform Project',
              url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU4yMBR_ekopvLmx8wyvjJ56bpT3XduiciMokV4nY8PVan2s9IZhpnFj8jxo_oO3r3daLvHedq5xgLpUi1wVvUThf0eMt5OkaPsEhKHEa7TChQ5B5H2arNh5VCEMEmxFQCwYrwWe8Z7vgz50mhhw0Mmbgm4xF-lLIrVqWDb6FFhqPv4fSPSFhe3NDqc3P7ZZsYLici736CfQodS2QEeIMq_cmEUGBlrWhev2MBv3_Nwtu_oFOtoXFegAIqF59MPBEL7zhQglrkoUHV',
            },
            {
              title: 'Healthcare Management System',
              category: 'Custom Software Development',
              description: 'Comprehensive healthcare management solution for hospitals with patient records, appointment scheduling, and billing.',
              result: '60% reduction in administrative time, 99.9% uptime, 5000+ daily active users',
              technologies: 'React, Node.js, PostgreSQL, AWS, Docker',
              alt: 'Healthcare Management System',
              url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn6F7aTYSMeLpsPRQty9H__lXFkQL8kCpiKDmeWsPq7_fPLiszsGEHxuYgYRWvvLL8AK9Mms9jefP5ivdffVy_e2MNh7E1EZgH2s--VHf1Sodr8y1gfUR7fNbCsmONxI-6TYSyLd__FSMWe220btDoScDNZHY80gCWI3aibsw0QuALS-LylOPt22ucZffzFUTyvf8LTjKH5Uq74ko4VrHTidK_6QM48Z1Xpjp9l-oMzVbl6KGpbIolJJ21Po3geUVX7ucP-6jC7HN_',
            },
            {
              title: 'FinTech Mobile App',
              category: 'Mobile App Development',
              description: 'Secure mobile banking application with biometric authentication, real-time transactions, and investment tracking.',
              result: '500K+ downloads, 4.8 star rating, 150% increase in user engagement',
              technologies: 'React Native, Node.js, MongoDB, AWS, Stripe API',
              alt: 'FinTech Mobile App',
              url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpBbNKvId8tdFWgzHMgXO62-rsgWVKYLRyVHjTbosy74QtY61_fD5I8r62U2QMoECYMi8wqa__iEzk1Sx6CAkVUQ-JHJhSr2V7pTn3avShgTSmi3mw5tg_vaR_DcqkvhWTakjf60yCkkHcypqwyaYynclw4oKd3nNivIjrKXbHn9epxf8X8DSrYKLiReJuSyBb3rcQo451pFTziPnVSJCEgK2eDPvVeN4w7deFfcMPFh6tgofoHsHkonf2e6vLK54nFy6R3dNE5Qkh',
            },
          ].map((project, index) => (
            <Link key={index} to="/portfolio" className="group w-full">
              <div className="flex flex-col h-full bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url("${project.url}")` }}
                  role="img"
                  aria-label={project.alt}
                />
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-md mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed text-justify">
                    {project.description}
                  </p>
                  <div className="pt-3 border-t border-gray-200 dark:border-[#282e39] space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Result:</p>
                      <p className="text-xs font-bold text-primary">{project.result}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Technologies:</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{project.technologies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center pt-4 xs:pt-6 sm:pt-8 md:pt-10">
          <Link to="/portfolio">
            <button className="flex min-w-[120px] xs:min-w-[140px] sm:min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 xs:h-11 sm:h-12 md:h-14 px-4 xs:px-5 sm:px-6 md:px-8 bg-primary text-white text-xs xs:text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mx-auto">
              <span className="truncate">View All Projects</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-100/50 dark:bg-white/5 rounded-xl mx-2 xs:mx-3 sm:mx-4 md:mx-6 lg:mx-8 my-4 xs:my-6 sm:my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-2 xs:px-3 sm:px-4 md:px-6">
          {[
            { number: 200, suffix: '+', label: 'Projects Delivered' },
            { number: 150, suffix: '+', label: 'Happy Clients' },
            { number: 50, suffix: '+', label: 'Team Members' },
            { number: 10, suffix: '+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 xs:mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} duration={2000} shouldAnimate={shouldAnimateStats} />
              </h3>
              <p className="text-xs xs:text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 px-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 px-2 xs:px-4 sm:px-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] mb-2 xs:mb-3 sm:mb-4">
            What We Do
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            We transform ideas into powerful digital experiences that drive results and exceed expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 px-2 xs:px-3 sm:px-4 md:px-6">
          {[
            {
              icon: 'devices',
              title: 'Software Development',
              description: 'From custom solutions to mobile apps—we build technology that scales with your business.',
              buttonText: 'Learn More →',
            },
            {
              icon: 'campaign',
              title: 'Digital Marketing',
              description: 'Strategic marketing campaigns that drive visibility, traffic, and conversions.',
              buttonText: 'Learn More →',
            },
            {
              icon: 'cloud_sync',
              title: 'Cloud & AI Solutions',
              description: 'Modernize your infrastructure with cloud computing and AI-powered automation.',
              buttonText: 'Learn More →',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg group h-full"
            >
              <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform flex-shrink-0">
                {service.icon}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-grow text-justify">{service.description}</p>
              <Link to="/services" className="mt-auto">
                <button className="text-primary font-semibold hover:underline text-xs">
                  {service.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center pt-8">
          <Link to="/services">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mx-auto">
              <span className="truncate">Explore All Services</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-primary/5 dark:bg-primary/10 rounded-xl mx-2 xs:mx-3 sm:mx-4 md:mx-6 lg:mx-8 my-4 xs:my-6 sm:my-8">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 px-2 xs:px-4 sm:px-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] mb-2 xs:mb-3 sm:mb-4">
            Why Choose ZEENIITH
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            We're not just developers—we're your partners in digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 px-2 xs:px-3 sm:px-4 md:px-6">
          {[
            {
              icon: 'speed',
              title: 'Fast Delivery',
              description: 'We deliver high-quality solutions on time, every time. Our agile methodology ensures rapid iteration and quick results.',
            },
            {
              icon: 'verified',
              title: 'Proven Track Record',
              description: 'With hundreds of successful projects under our belt, we have the experience to handle any challenge.',
            },
            {
              icon: 'support_agent',
              title: '24/7 Support',
              description: 'Our dedicated support team is always ready to help you, ensuring your projects run smoothly.',
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4 flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 text-justify">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Overview */}
      <div className="py-12 md:py-20">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
            Our Process
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven methodology that ensures success from concept to launch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {[
            { number: '01', title: 'Discover', desc: 'We understand your goals and requirements' },
            { number: '02', title: 'Design', desc: 'We create beautiful, functional designs' },
            { number: '03', title: 'Develop', desc: 'We build with clean, efficient code' },
            { number: '04', title: 'Deploy', desc: 'We launch and support your solution' },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 flex-shrink-0">
                <span className="text-primary text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 px-2 xs:px-4 sm:px-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] mb-2 xs:mb-3 sm:mb-4">
            Loved by Businesses Worldwide
          </h2>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 px-2 xs:px-3 sm:px-4 md:px-6">
          {[
            {
              quote: "Working with ZEENIITH transformed our entire business. They didn't just develop our software - they understood our vision and delivered a solution that exceeded our expectations. The team's professionalism, communication, and dedication to quality are exceptional. Our operational efficiency improved by 60% and we've already recommended ZEENIITH to multiple business partners.",
              author: 'Rajesh Kumar',
              role: 'CEO',
              company: 'TechVenture Solutions',
              rating: 5,
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqpQqF66IwQIaIrIO73eMBSFTweSiRXQ1Ez3AkCheIy7lrQs4lZI8vCvrbdyRKCKdIBmmbtilT9jBx1SETh9c4lxNZO90Nbr1x7UUBznn7vKDlQWzVWOzQRg4Gj4TZkHoJogGNdpFUIoy8o0vk1aFrHrmc7C6cYZ38elWPXlNb0bqjJkPvvI6WykpJSGy1vQrCdetStv904u9AjsA5nbykMlShhJh54yhIvOVzGFr7wTv9rm64ZdlcgcTCrbFHlR1V87OL-BpiJLlG',
            },
            {
              quote: "We needed a robust e-commerce platform to handle our growing business. ZEENIITH delivered a scalable, fast-loading solution that helped us increase conversions by 150% in the first quarter. Their support team is incredibly responsive and helpful. Best investment we've made for our business.",
              author: 'Priya Sharma',
              role: 'CTO',
              company: 'Digital Innovations Pvt Ltd',
              rating: 5,
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUJCPHqoaSKTPucwg5Hu9K91-lFhT--r-S6F6upjVgTfIaMeYLOH_pm_VDhJD-mJ1bK9B_mOuuX9RIdsDZcsuSD1mFSKbvd0chPYXm5yqq51gG_Er0i_rCAyRrLUvOSz74iapwLe-OlxBv9jFEVnRkLA56d5mX-PQO1fM_TdAfTVVTElzPjnwbBGinmUywQKH4c3JNNd0UHjangcSvoHvcNTLtsgAMY0g4Rq1DMIfi7qnHzuABg1e1S_wfxV74-KzXOtSLrDq46STU',
            },
            {
              quote: "The digital marketing expertise at ZEENIITH is outstanding. They took our online presence from non-existent to first-page Google rankings in just 4 months. We went from 0 organic leads to 50+ qualified leads monthly. Highly recommended!",
              author: 'Amit Patel',
              role: 'Marketing Director',
              company: 'GrowthHub India',
              rating: 5,
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqpQqF66IwQIaIrIO73eMBSFTweSiRXQ1Ez3AkCheIy7lrQs4lZI8vCvrbdyRKCKdIBmmbtilT9jBx1SETh9c4lxNZO90Nbr1x7UUBznn7vKDlQWzVWOzQRg4Gj4TZkHoJogGNdpFUIoy8o0vk1aFrHrmc7C6cYZ38elWPXlNb0bqjJkPvvI6WykpJSGy1vQrCdetStv904u9AjsA5nbykMlShhJh54yhIvOVzGFr7wTv9rm64ZdlcgcTCrbFHlR1V87OL-BpiJLlG',
            },
            {
              quote: "ZEENIITH's team built our mobile app from scratch. Not only is the app beautiful and user-friendly, but their continued support has been invaluable. We've already hit 10,000 downloads and they're helping us scale. Great partner!",
              author: 'Sneha Mehta',
              role: 'Founder',
              company: 'StartupNest',
              rating: 5,
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUJCPHqoaSKTPucwg5Hu9K91-lFhT--r-S6F6upjVgTfIaMeYLOH_pm_VDhJD-mJ1bK9B_mOuuX9RIdsDZcsuSD1mFSKbvd0chPYXm5yqq51gG_Er0i_rCAyRrLUvOSz74iapwLe-OlxBv9jFEVnRkLA56d5mX-PQO1fM_TdAfTVVTElzPjnwbBGinmUywQKH4c3JNNd0UHjangcSvoHvcNTLtsgAMY0g4Rq1DMIfi7qnHzuABg1e1S_wfxV74-KzXOtSLrDq46STU',
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] h-full"
            >
              <div className="flex items-center gap-4 flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 dark:text-white truncate">{testimonial.author}</h4>
                  <p className="text-sm text-primary truncate">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 truncate">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
                      <p className="text-xs text-gray-700 dark:text-gray-300 italic flex-grow">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Preview Section */}
      <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 px-2 xs:px-4 sm:px-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] mb-2 xs:mb-3 sm:mb-4">
            Insights - Actionable Perspectives from Experts
          </h2>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 px-2 xs:px-3 sm:px-4 md:px-6">
          {[
            {
              title: 'How Custom Software Helps Businesses Grow',
              excerpt: 'Discover how tailored software solutions streamline operations, reduce costs, and accelerate business growth. Learn why custom software delivers 3x better ROI than off-the-shelf solutions.',
              buttonText: 'Read More →',
            },
            {
              title: 'Future of Software Development in India',
              excerpt: 'Explore emerging trends, technologies, and opportunities shaping the Indian software development landscape. What\'s next in 2025? AI integration, cloud-native development, and more.',
              buttonText: 'Read More →',
            },
            {
              title: 'Why Mobile Apps Are Important for Startups in 2025',
              excerpt: 'Learn how a strategic mobile app can help startups acquire customers, build engagement, and scale faster. Statistics show 87% of time on phones is spent in apps.',
              buttonText: 'Read More →',
            },
            {
              title: 'Best Digital Marketing Strategies to Grow Your Business in 2025',
              excerpt: 'From AI-powered SEO to performance marketing, discover the strategies that deliver maximum ROI. Learn what\'s working and what\'s not in 2025.',
              buttonText: 'Read More →',
            },
          ].map((post, index) => (
            <div key={index} className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{post.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">{post.excerpt}</p>
              <Link to="/blog">
                        <button className="text-primary font-semibold hover:underline text-xs mt-auto">
                  {post.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-primary text-white rounded-xl mx-4 my-8">
        <div className="text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-[-0.015em] mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
                  <p className="text-base md:text-lg text-white/90 mb-8">
            Let's build something amazing together. Whether you need custom software, a stunning website, a mobile app, or a powerful digital marketing strategy - we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
                      <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-white text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                <span className="truncate">Grow Your Business Now!</span>
              </button>
            </Link>
            <Link to="/portfolio">
                      <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-transparent border-2 border-white text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white/10 transition-colors">
                <span className="truncate">View Our Work</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

