import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const Logo = () => (
  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="size-6">
    <g clipPath="url(#clip0_6_330)">
      <path
        clipRule="evenodd"
        d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_330">
        <rect fill="white" height="48" width="48" />
      </clipPath>
    </defs>
  </svg>
)

const Header = () => {
  const location = useLocation()
  const { toggleTheme, theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-1 sm:top-1.5 md:top-2 lg:top-4 left-1/2 -translate-x-1/2 z-[100] w-[98%] xs:w-[96%] sm:w-[92%] md:w-[85%] lg:w-[80%] max-w-[1400px] flex items-center justify-between transition-all duration-300 rounded-lg sm:rounded-xl md:rounded-[20px] ${
        scrolled
          ? 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl border border-gray-200/30 dark:border-[#282e39]/30 shadow-2xl py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-6'
          : 'bg-background-light/60 dark:bg-background-dark/60 backdrop-blur-sm border border-gray-200/20 dark:border-[#282e39]/20 shadow-md py-2 xs:py-2.5 sm:py-3 md:py-4 lg:py-7'
      }`}
    >
      <div className="w-full px-2 xs:px-3 sm:px-4 md:px-8 lg:px-10 flex items-center justify-between gap-1.5 xs:gap-2 sm:gap-3 md:gap-4">
        <Link to="/" className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 group min-w-0 flex-1 sm:flex-initial">
          <div className="size-6 xs:size-7 sm:size-8 flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors flex-shrink-0">
            <Logo />
          </div>
          <div className="flex flex-col min-w-0 max-w-[140px] xs:max-w-[180px] sm:max-w-none">
            <h2 className="text-slate-900 dark:text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-primary dark:group-hover:text-primary transition-colors truncate">
              <span className="hidden xs:inline sm:hidden">Macrocosm</span>
              <span className="hidden sm:inline">MacrocosmTech</span>
              <span className="xs:hidden">MT</span>
            </h2>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-4 lg:gap-6 items-center min-w-0">
          <nav className="flex items-center gap-0.5 lg:gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-xs lg:text-sm font-medium leading-normal px-2 lg:px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-primary dark:text-primary font-bold'
                    : 'text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></span>
                )}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2 items-center ml-2 lg:ml-4 pl-2 lg:pl-4 border-l border-gray-200 dark:border-[#282e39]">
            <Link to="/contact">
              <button className="flex min-w-[90px] lg:min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-9 lg:h-10 px-3 lg:px-5 bg-gradient-to-r from-primary to-primary/80 text-white text-xs lg:text-sm font-bold leading-normal tracking-[0.015em] hover:from-primary/90 hover:to-primary/70 transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
                <span className="truncate">Get a Quote</span>
              </button>
            </Link>
            <button
              onClick={toggleTheme}
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-9 lg:h-10 w-9 lg:w-10 bg-slate-200 dark:bg-[#282e39] text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-[#1e2533] transition-all hover:scale-110 active:scale-95 flex-shrink-0"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined text-lg lg:text-xl dark:hidden">dark_mode</span>
              <span className="material-symbols-outlined text-lg lg:text-xl hidden dark:inline">light_mode</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 xs:h-9 sm:h-10 w-8 xs:w-9 sm:w-10 bg-slate-200 dark:bg-[#282e39] text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-[#1e2533] transition-all active:scale-95 flex-shrink-0 ml-1 xs:ml-0"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-symbols-outlined text-base xs:text-lg sm:text-xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-80 max-w-sm bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl z-[100] shadow-2xl md:hidden transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4 sm:p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200 dark:border-[#282e39]">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="size-7 sm:size-8 flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 flex-shrink-0">
                <Logo />
              </div>
              <div className="flex flex-col min-w-0">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">MacrocosmTech</h2>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors flex-shrink-0"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">close</span>
            </button>
          </div>

          <nav className="flex flex-col gap-1.5 sm:gap-2 mb-6 sm:mb-8" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`relative text-sm sm:text-base font-medium leading-normal py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'text-primary dark:text-primary font-bold bg-primary/10 dark:bg-primary/20'
                    : 'text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 sm:h-6 rounded-r-full bg-primary"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 sm:gap-3 mt-auto pt-4 sm:pt-6 border-t border-gray-200 dark:border-[#282e39]">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 sm:h-12 px-4 bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-primary/90 hover:to-primary/70 transition-all shadow-md hover:shadow-lg">
                <span className="truncate">Get a Quote</span>
              </button>
            </Link>
            <button
              onClick={toggleTheme}
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 sm:h-12 px-4 bg-slate-200 dark:bg-[#282e39] text-slate-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 dark:hover:bg-[#1e2533] transition-colors"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl dark:hidden">dark_mode</span>
              <span className="material-symbols-outlined text-lg sm:text-xl hidden dark:inline">light_mode</span>
              <span className="text-xs sm:text-sm">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

