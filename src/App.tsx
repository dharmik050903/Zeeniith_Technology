import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme } = useTheme()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <Router>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
        <Header />
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-0 sm:px-0 md:px-0 lg:px-0 flex flex-1 justify-center pt-16 xs:pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-5">
            <div className="layout-content-container flex flex-col w-full max-w-[1400px] flex-1 px-4 sm:px-10 md:px-20 lg:px-40">
              <main className="flex flex-col flex-1 page-transition">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

