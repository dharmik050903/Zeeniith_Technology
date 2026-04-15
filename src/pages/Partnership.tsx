import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Partnership = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isHeroVisible, setIsHeroVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsHeroVisible(true)
        })
      },
      { threshold: 0.2 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
    }
  }, [])

  const partners = [
    {
      name: 'QuikWink',
      tagline: 'AI & Machine Learning Innovation Partner',
      logo: '/QuikWink.png',
      website: 'https://www.quikwink.com/',
      description:
        'QuikWink is an AI-first technology company specialising in machine learning, intelligent automation, and data-driven products. Under this partnership, QuikWink leads all AI/ML research, model development, and data science, while Zeeniith Technology powers the full-stack software engineering — including MERN/MEAN stack web platforms, cross-platform mobile applications, and scalable backend systems — bringing every AI idea to life as a production-ready product.',
      quikwinkOwns: [
        { icon: 'psychology', title: 'AI/ML Research & Models', desc: 'Model design, training, fine-tuning, and evaluation using Python, TensorFlow, PyTorch, and scikit-learn.' },
        { icon: 'hub', title: 'ML Pipeline Architecture', desc: 'End-to-end data ingestion, preprocessing, feature engineering, and model serving pipelines.' },
        { icon: 'smart_toy', title: 'Intelligent Automation', desc: 'AI-driven workflow automation, recommendation engines, NLP systems, and decision intelligence.' },
        { icon: 'insights', title: 'Data Science & Analytics', desc: 'Advanced analytics, predictive modelling, and data visualisation powered by ML insights.' },
      ],
      zeeniithOwns: [
        { icon: 'code', title: 'MERN & MEAN Stack Development', desc: 'Full-stack web platforms using MongoDB, Express, React/Angular, and Node.js — from APIs to polished UIs.' },
        { icon: 'phone_iphone', title: 'Mobile App Development', desc: 'Cross-platform mobile applications for iOS and Android using React Native and modern app frameworks.' },
        { icon: 'storage', title: 'Backend & API Engineering', desc: 'Robust REST and GraphQL APIs, database architecture, authentication, and cloud-ready server infrastructure.' },
        { icon: 'web', title: 'Web Platforms & Portals', desc: 'Admin dashboards, SaaS platforms, customer portals, and AI-integrated web interfaces.' },
      ],
      techStack: [
        'React.js', 'Node.js', 'MongoDB', 'Express.js',
        'Angular', 'React Native', 'Python', 'FastAPI',
        'REST & GraphQL APIs', 'AWS / GCP', 'PostgreSQL', 'Docker & CI/CD'
      ],
      highlights: [
        'QuikWink handles AI/ML — Zeeniith handles software engineering',
        'End-to-end product delivery from AI model to live application',
        'MERN / MEAN stack web & mobile development by Zeeniith',
        'Joint go-to-market for AI-powered SaaS products',
        'Ongoing active collaboration — 2026 & beyond',
      ],
      partnerSince: '2026',
    },
  ]

  return (
    <>
      <SEO
        title="Partnerships - Zeeniith | Strategic Technology Alliances"
        description="Explore Zeeniith Technology's strategic partnerships with innovative companies. We collaborate with AI-first and technology-driven organizations to co-create scalable, intelligent digital products."
        path="/partnership"
      />
      <main className="flex flex-col gap-0">

        {/* ── Hero Section ── */}
        <div
          ref={heroRef}
          className="relative w-screen left-1/2 -translate-x-1/2 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-24 md:pb-36 min-h-[70vh] flex items-center justify-center overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1b3e] to-[#101622] z-0" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(37,106,244,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(37,106,244,0.4) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl z-0 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-600/15 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '1.5s' }} />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className={`flex flex-col items-center text-center gap-6 transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/40">
                <span className="material-symbols-outlined text-primary text-lg">handshake</span>
                <span className="text-primary text-xs font-bold tracking-widest uppercase">Strategic Partnerships</span>
              </div>
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg max-w-4xl">
                Building the Future,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  Together
                </span>
              </h1>
              <p className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                Zeeniith Technology collaborates with visionary companies to co-create intelligent, scalable, and impactful technology products. Our partnerships go beyond contracts — they are shared missions.
              </p>
              <a href="#partners" className="mt-2">
                <button className="flex items-center gap-2 cursor-pointer overflow-hidden rounded-xl h-12 px-7 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  <span>Explore Partners</span>
                  <span className="material-symbols-outlined text-lg">arrow_downward</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ── Partners Section ── */}
        <div id="partners" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-[1400px] mx-auto">

            {partners.map((partner, idx) => (
              <div key={idx} className="flex flex-col gap-16">

                {/* Partner Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                  {/* Logo card */}
                  <div className="flex-shrink-0 w-52 h-52 bg-white dark:bg-[#1C2333] rounded-2xl border border-gray-200 dark:border-[#282e39] shadow-xl flex items-center justify-center p-6">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  {/* Partner info */}
                  <div className="flex flex-col gap-4 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full w-fit mx-auto md:mx-0">
                      <span className="material-symbols-outlined text-primary text-sm">psychology</span>
                      <span className="text-primary text-xs font-semibold">{partner.tagline}</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">{partner.name}</h2>
                    <p className="text-base text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                      {partner.description}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <a href={partner.website} target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2 cursor-pointer overflow-hidden rounded-xl h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-md">
                          <span>Visit Website</span>
                          <span className="material-symbols-outlined text-base">open_in_new</span>
                        </button>
                      </a>
                      <Link to="/contact">
                        <button className="flex items-center gap-2 cursor-pointer overflow-hidden rounded-xl h-10 px-5 bg-transparent border border-primary text-primary text-sm font-bold hover:bg-primary/10 transition-all">
                          <span>Partner with Us</span>
                        </button>
                      </Link>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Partner since {partner.partnerSince}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                {/* ── Who Does What ── */}
                <div>
                  <div className="text-center mb-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                      Who Does What
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400 max-w-xl mx-auto">
                      A clear division of expertise — each partner focuses on what they do best, delivering the full product together.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* QuikWink Column */}
                    <div className="flex flex-col gap-4 p-6 sm:p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/15 dark:to-blue-900/15 rounded-2xl border border-purple-200/60 dark:border-purple-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-purple-500 dark:text-purple-400 text-xl">psychology</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-purple-500 dark:text-purple-400 uppercase tracking-widest">QuikWink handles</p>
                          <h4 className="text-lg font-black text-slate-900 dark:text-white">AI / Machine Learning</h4>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        {partner.quikwinkOwns.map((item, i) => (
                          <div key={i} className="flex gap-3 p-4 bg-white/70 dark:bg-[#1C2333]/70 rounded-xl border border-purple-100 dark:border-purple-500/10">
                            <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="material-symbols-outlined text-purple-500 dark:text-purple-400 text-lg">{item.icon}</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{item.title}</p>
                              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Zeeniith Column */}
                    <div className="flex flex-col gap-4 p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/15 dark:to-cyan-900/15 rounded-2xl border border-primary/20 dark:border-primary/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-primary text-xl">terminal</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-primary uppercase tracking-widest">Zeeniith handles</p>
                          <h4 className="text-lg font-black text-slate-900 dark:text-white">Software Development</h4>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        {partner.zeeniithOwns.map((item, i) => (
                          <div key={i} className="flex gap-3 p-4 bg-white/70 dark:bg-[#1C2333]/70 rounded-xl border border-primary/10 dark:border-primary/10">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{item.title}</p>
                              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* ── Tech Stack + Highlights ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Tech Stack */}
                  <div className="p-6 sm:p-8 bg-white dark:bg-[#1C2333] rounded-2xl border border-gray-200 dark:border-[#282e39]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">code</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">Combined Tech Stack</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {partner.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="p-6 sm:p-8 bg-white dark:bg-[#1C2333] rounded-2xl border border-gray-200 dark:border-[#282e39]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">star</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">Partnership Highlights</h4>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {partner.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-gray-400">
                          <span className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">check_circle</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* ── Become a Partner CTA ── */}
            <div className="mt-24 py-16 md:py-20 bg-gradient-to-br from-primary to-blue-700 text-white rounded-2xl px-6 sm:px-10 md:px-16 flex flex-col items-center text-center gap-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl">handshake</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-[-0.02em]">
                  Interested in Partnering?
                </h3>
                <p className="text-white/85 text-base md:text-lg max-w-xl leading-relaxed">
                  We're always open to collaborating with forward-thinking companies. If you're building something ambitious in AI, SaaS, or tech — let's talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <button className="flex items-center justify-center gap-2 min-w-[180px] cursor-pointer overflow-hidden rounded-xl h-12 px-7 bg-white text-primary text-sm font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                      <span>Get in Touch</span>
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className="flex items-center justify-center gap-2 min-w-[180px] cursor-pointer overflow-hidden rounded-xl h-12 px-7 bg-transparent border-2 border-white text-white text-sm font-bold hover:bg-white/10 transition-colors">
                      <span>About Zeeniith</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default Partnership
