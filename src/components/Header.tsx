import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const Header = () => {
  const location = useLocation()
  const { toggleTheme, theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Work' },
    { path: '/blog', label: 'Insights' },
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
    <>
      <header
        className={`fixed top-2 left-1/2 -translate-x-1/2 z-[100] w-[98%] xs:w-[96%] sm:w-[92%] md:w-[90%] lg:w-[88%] xl:w-[85%] max-w-[1400px] flex items-center justify-between transition-all duration-300 rounded-2xl sm:rounded-[32px] ${
          scrolled
            ? 'bg-slate-600/60 dark:bg-slate-700/60 backdrop-blur-xl border border-gray-400/30 dark:border-gray-300/30 shadow-2xl py-2.5 sm:py-4 md:py-4 lg:py-5'
            : 'bg-slate-600/55 dark:bg-slate-700/55 backdrop-blur-lg border border-gray-400/20 dark:border-gray-300/20 shadow-xl py-3 sm:py-4 md:py-5 lg:py-6'
        }`}
      >
        <div className="w-full px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-9 flex items-center justify-between gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 xs:gap-2 sm:gap-2 md:gap-2 lg:gap-2.5 xl:gap-3 group flex-shrink-0 max-w-[80px] xs:max-w-[100px] sm:max-w-[110px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-none overflow-hidden">
            <div className="h-6 xs:h-7 sm:h-8 md:h-9 lg:h-10 xl:h-11 2xl:h-12 w-auto flex items-center justify-center flex-shrink-0">
              <img 
                src={theme === 'dark' ? "/white-01.svg" : "/black-01.-01.svg"} 
                alt="Zeeniith Logo" 
                className={`h-full w-auto max-w-full object-contain object-left transition-opacity ${
                  theme === 'dark' ? 'dark-logo group-hover:opacity-90' : 'group-hover:opacity-90'
                }`}
                style={{ maxWidth: '100%' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-1.5 lg:gap-2 min-w-0">
            <nav className="flex items-center gap-0.5 lg:gap-1" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm lg:text-base xl:text-lg font-medium leading-normal px-2 lg:px-3 xl:px-4 py-2 lg:py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-primary font-semibold'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                  )}
                </Link>
              ))}
            </nav>
            <div className="flex gap-2 lg:gap-3 items-center ml-2 lg:ml-4 pl-2 lg:pl-4 border-l border-gray-600/50 dark:border-gray-500/50">
              <Link to="/contact">
                <button className="flex min-w-[110px] lg:min-w-[120px] xl:min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 lg:h-11 xl:h-12 px-3 lg:px-4 xl:px-5 bg-primary text-white text-sm lg:text-base xl:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  <span className="truncate">Get a Quote</span>
                </button>
              </Link>
              <button
                onClick={toggleTheme}
                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12 bg-gray-700/80 dark:bg-gray-600/80 text-white hover:bg-gray-600 dark:hover:bg-gray-500 transition-all hover:scale-110 active:scale-95 flex-shrink-0 border border-gray-600/50"
                aria-label="Toggle dark mode"
              >
                <span className="material-symbols-outlined text-lg lg:text-xl xl:text-2xl dark:hidden">dark_mode</span>
                <span className="material-symbols-outlined text-lg lg:text-xl xl:text-2xl hidden dark:inline">light_mode</span>
              </button>
            </div>
          </div>


          {/* Mobile/Tablet Menu Button - Shows on screens below lg */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 xs:h-10 sm:h-11 md:h-10 w-9 xs:w-10 sm:w-11 md:w-10 bg-gray-700/80 dark:bg-gray-600/80 text-white hover:bg-gray-600 dark:hover:bg-gray-500 transition-all active:scale-95 flex-shrink-0 border border-gray-600/50"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-xl xs:text-2xl sm:text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-80 max-w-sm bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-xl z-[100] shadow-2xl lg:hidden transform transition-transform duration-300 border-l border-gray-700/50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4 sm:p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-700/50">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="h-8 sm:h-9 w-auto flex items-center justify-center flex-shrink-0">
                <img 
                  src={theme === 'dark' ? "/white-01.svg" : "/black-01.-01.svg"} 
                  alt="Zeeniith Logo" 
                  className={`h-full w-auto max-w-full object-contain ${
                    theme === 'dark' ? 'dark-logo' : ''
                  }`}
                />
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-white hover:bg-gray-800/80 dark:hover:bg-gray-700/80 transition-colors flex-shrink-0 border border-gray-700/50"
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
                    ? 'text-primary font-semibold bg-primary/20 dark:bg-primary/30'
                    : 'text-white/90 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 sm:h-6 rounded-r-full bg-primary"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 sm:gap-3 mt-auto pt-4 sm:pt-6 border-t border-gray-700/50">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 sm:h-12 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                <span className="truncate">Get a Quote</span>
              </button>
            </Link>
            <button
              onClick={toggleTheme}
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 sm:h-12 px-4 bg-gray-800/80 dark:bg-gray-700/80 text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors border border-gray-700/50"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl dark:hidden">dark_mode</span>
              <span className="material-symbols-outlined text-lg sm:text-xl hidden dark:inline">light_mode</span>
              <span className="text-xs sm:text-sm">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

