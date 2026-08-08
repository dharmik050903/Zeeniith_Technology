import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found - Zeeniith"
        description="The page you're looking for doesn't exist or may have been moved."
        path="/404"
        noindex
      />
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-20 text-center">
        <div className="flex flex-col items-center gap-6">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">404 Error</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved. Head back to the homepage or explore our services.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link to="/">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
                Back to Home
              </button>
            </Link>
            <Link to="/contact" className="text-primary font-semibold hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
