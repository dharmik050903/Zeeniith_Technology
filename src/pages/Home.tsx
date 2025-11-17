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
        title="MacrocosmTech - We Build Digital Universes"
        description="We build digital universes. UI/UX Design, Web Apps, Mobile Experiences, and Branding. Explore our work and let's create something amazing together."
        path="/"
      />
      <div
        ref={heroRef}
        className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 xs:-mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pt-16 xs:pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-20 md:pb-32 min-h-screen flex items-center justify-center overflow-hidden z-0"
        style={{ minHeight: '100vh' }}
      >
        {/* Video Background with Zoom Effect */}
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-screen h-full object-cover z-0 ${
            isVisible ? 'video-zoom-in' : 'scale-[1.3]'
          }`}
          style={{ height: '100%' }}
        >
          <source src="/bg-home.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 dark:bg-black/60 z-10"></div>
        {/* Content */}
        <div
          className={`relative z-20 flex min-h-[480px] flex-col gap-6 items-center justify-center text-center p-4 ${
            isVisible ? 'content-fade-in' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold leading-tight tracking-[-0.033em] md:text-6xl text-white drop-shadow-lg">
              We Build Digital Universes.
            </h1>
            <div className="h-8 md:h-10 text-center overflow-hidden">
              <div className="animate-ticker flex flex-col items-center">
                <h2 className="text-base font-normal leading-normal md:text-lg h-8 md:h-10 flex items-center text-white/90 drop-shadow-md">
                  UI/UX Design
                </h2>
                <h2 className="text-base font-normal leading-normal md:text-lg h-8 md:h-10 flex items-center text-white/90 drop-shadow-md">
                  Web Apps
                </h2>
                <h2 className="text-base font-normal leading-normal md:text-lg h-8 md:h-10 flex items-center text-white/90 drop-shadow-md">
                  Mobile Experiences
                </h2>
                <h2 className="text-base font-normal leading-normal md:text-lg h-8 md:h-10 flex items-center text-white/90 drop-shadow-md">
                  Branding
                </h2>
                <h2 className="text-base font-normal leading-normal md:text-lg h-8 md:h-10 flex items-center text-white/90 drop-shadow-md">
                  UI/UX Design
                </h2>
              </div>
            </div>
          </div>
          <Link to="/portfolio">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 md:h-14 md:px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg">
              <span className="truncate">Explore Our Work</span>
            </button>
          </Link>
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

      <div className="py-12 md:py-20">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 pt-5 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {[
            {
              alt: 'Abstract colorful gradient with sharp lines',
              url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU4yMBR_ekopvLmx8wyvjJ56bpT3XduiciMokV4nY8PVan2s9IZhpnFj8jxo_oO3r3daLvHedq5xgLpUi1wVvUThf0eMt5OkaPsEhKHEa7TChQ5B5H2arNh5VCEMEmxFQCwYrwWe8Z7vgz50mhhw0Mmbgm4xF-lLIrVqWDb6FFhqPv4fSPSFhe3NDqc3P7ZZsYLici736CfQodS2QEeIMq_cmEUGBlrWhev2MBv3_Nwtu_oFOtoXFegAIqF59MPBEL7zhQglrkoUHV',
            },
            {
              alt: 'A dark 3D render of crystalline structures',
              url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn6F7aTYSMeLpsPRQty9H__lXFkQL8kCpiKDmeWsPq7_fPLiszsGEHxuYgYRWvvLL8AK9Mms9jefP5ivdffVy_e2MNh7E1EZgH2s--VHf1Sodr8y1gfUR7fNbCsmONxI-6TYSyLd__FSMWe220btDoScDNZHY80gCWI3aibsw0QuALS-LylOPt22ucZffzFUTyvf8LTjKH5Uq74ko4VrHTidK_6QM48Z1Xpjp9l-oMzVbl6KGpbIolJJ21Po3geUVX7ucP-6jC7HN_',
            },
            {
              alt: 'Holographic liquid texture with waves of pink and blue',
              url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpBbNKvId8tdFWgzHMgXO62-rsgWVKYLRyVHjTbosy74QtY61_fD5I8r62U2QMoECYMi8wqa__iEzk1Sx6CAkVUQ-JHJhSr2V7pTn3avShgTSmi3mw5tg_vaR_DcqkvhWTakjf60yCkkHcypqwyaYynclw4oKd3nNivIjrKXbHn9epxf8X8DSrYKLiReJuSyBb3rcQo451pFTziPnVSJCEgK2eDPvVeN4w7deFfcMPFh6tgofoHsHkonf2e6vLK54nFy6R3dNE5Qkh',
            },
            {
              alt: 'Blue and purple neon lines on a dark background',
              url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPnZ-wAkcV_YlN9ISVpCm4fRTpBhvCF8BuugwfME5RVEBI7a_ohH6IHr6jPDRB5LbSMeTz9u_cqEr318qnT5Nfk3fR5r6ObLE44ASWh_mvqWrEnPdexukSahT0R3buJY0-zIZoGAJls9ewxCZPacDsQNkaFDmdVo6cSrIy_nQHVlmv4ElozpADNSVmVJPgwEHZ4hfnvekGGRY-ygpZX0mVdM6ZNqPRU2aH8_pGNSHnv7UOmmNJklLPD8Y7lxHUHar5C1AwuwmkZXOS',
            },
            {
              alt: 'Abstract white wavy geometric pattern',
              url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBA40UASiufYE_ZYv3OOYaxCCFPSePZ257mmQRII_Y9NdyJycYeiahQgZjFDlUhnm7U8GRgt8he-UDS9wcAmSKqxjmnpAVIKOxEF3w4znFEUzklRcB6kIiMNDzPoaAlcu_U-noWvQhKQY8lBPaDYqn1hlSIva2tqxkXGYl5VZ1E0-gvdF4RVMR0pwpbVH9j9KzDmy2p8UGYZEXpyf0TPdlD5XSxk9BxjKWqZ8BQ-mZwdYPsfly_3DQWQcgDjuKo5eEMPaA4b-LivoF',
            },
            {
              alt: 'Minimalist render of pink and purple spheres',
              url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjgo5jkZ42_xBva3VbrjZNjK1e14gVEZYKiULfG81bk9fidpmqfod0rEsvNUc38Trst30R1LlDAaund0yW4j-6-OiLXIDzQeOs3muVUawvlCLc-IyX6JS9GHlR1MbOpzsgdKF9W-LdJhNV_u-s1bF9QBuvIc_vQejO-kP_SkwWvVRImb2xsX1XljoXV5nHOdrxCCHYdczNpiJOATU8lZl4YRfNoUx4UR6Xw3TB2muzn6ZWYMYGo0DALcow9hESr3QHQQBsxruTzETw',
            },
          ].map((project, index) => (
            <div key={index} className="flex flex-col gap-3 group">
              <Link to="/portfolio">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url("${project.url}")` }}
                  role="img"
                  aria-label={project.alt}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center pt-8">
          <Link to="/portfolio">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mx-auto">
              <span className="truncate">View All Projects</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="py-12 md:py-20 bg-gray-100/50 dark:bg-white/5 rounded-xl mx-4 my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {[
            { number: 200, suffix: '+', label: 'Projects Delivered' },
            { number: 150, suffix: '+', label: 'Happy Clients' },
            { number: 50, suffix: '+', label: 'Team Members' },
            { number: 10, suffix: '+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} duration={2000} shouldAnimate={shouldAnimateStats} />
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="py-12 md:py-20">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
            What We Do
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We transform ideas into powerful digital experiences that drive results and exceed expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {[
            {
              icon: 'devices',
              title: 'Web Development',
              description: 'Custom web applications built with modern frameworks and best practices.',
            },
            {
              icon: 'phone_iphone',
              title: 'Mobile Apps',
              description: 'Native and cross-platform mobile solutions for iOS and Android.',
            },
            {
              icon: 'design_services',
              title: 'UI/UX Design',
              description: 'User-centered designs that combine aesthetics with functionality.',
            },
            {
              icon: 'cloud_sync',
              title: 'Cloud Solutions',
              description: 'Scalable cloud infrastructure and DevOps services.',
            },
            {
              icon: 'neurology',
              title: 'AI & ML',
              description: 'Intelligent solutions powered by artificial intelligence.',
            },
            {
              icon: 'rocket_launch',
              title: 'Digital Strategy',
              description: 'Strategic consulting to help you achieve your digital goals.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">
                {service.icon}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center pt-8">
          <Link to="/services">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mx-auto">
              <span className="truncate">Explore All Services</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12 md:py-20 bg-primary/5 dark:bg-primary/10 rounded-xl mx-4 my-8">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
            Why Choose MacrocosmTech
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're not just developers—we're your partners in digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
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
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
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
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 md:py-20">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {[
            {
              quote: "MacrocosmTech transformed our business with their innovative approach. The team's expertise and dedication are unmatched.",
              author: 'Sarah Johnson',
              role: 'CEO, TechStart Inc.',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqpQqF66IwQIaIrIO73eMBSFTweSiRXQ1Ez3AkCheIy7lrQs4lZI8vCvrbdyRKCKdIBmmbtilT9jBx1SETh9c4lxNZO90Nbr1x7UUBznn7vKDlQWzVWOzQRg4Gj4TZkHoJogGNdpFUIoy8o0vk1aFrHrmc7C6cYZ38elWPXlNb0bqjJkPvvI6WykpJSGy1vQrCdetStv904u9AjsA5nbykMlShhJh54yhIvOVzGFr7wTv9rm64ZdlcgcTCrbFHlR1V87OL-BpiJLlG',
            },
            {
              quote: "Working with MacrocosmTech was a game-changer. They delivered beyond our expectations and continue to support us every step of the way.",
              author: 'Michael Chen',
              role: 'CTO, InnovateLabs',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUJCPHqoaSKTPucwg5Hu9K91-lFhT--r-S6F6upjVgTfIaMeYLOH_pm_VDhJD-mJ1bK9B_mOuuX9RIdsDZcsuSD1mFSKbvd0chPYXm5yqq51gG_Er0i_rCAyRrLUvOSz74iapwLe-OlxBv9jFEVnRkLA56d5mX-PQO1fM_TdAfTVVTElzPjnwbBGinmUywQKH4c3JNNd0UHjangcSvoHvcNTLtsgAMY0g4Rq1DMIfi7qnHzuABg1e1S_wfxV74-KzXOtSLrDq46STU',
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-primary text-white rounded-xl mx-4 my-8">
        <div className="text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-[-0.015em] mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Let's discuss your project and turn your vision into reality. We're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                <span className="truncate">Get Started Today</span>
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

export default Home

