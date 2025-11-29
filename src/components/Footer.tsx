import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-[#0f1419] w-full">
      <div className="w-full px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-12 xs:py-14 sm:py-16 md:py-20">
        {/* Top Section - Logo and Description */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 xs:gap-8 sm:gap-10 mb-10 xs:mb-12 sm:mb-14 md:mb-16">
          <Link to="/" className="flex items-center justify-start group flex-shrink-0">
            <div className="h-10 xs:h-12 sm:h-14 md:h-16 lg:h-20 w-auto flex items-center justify-center">
              <img 
                src="/logo-v2.png" 
                alt="Zeeniith Logo" 
                className="h-full w-auto max-w-full object-contain group-hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>
          <p className="text-left text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl flex-1 leading-relaxed">
            Building digital universes with innovative software solutions and data-driven marketing strategies.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-10 sm:gap-12 mb-10 xs:mb-12 sm:mb-14 md:mb-16">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Company
            </h3>
            <div className="flex flex-col gap-3 text-xs xs:text-sm text-gray-600 dark:text-gray-300">
              <Link to="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/blog" className="hover:text-primary transition-colors">
                Insights
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Address
            </h3>
            <div className="flex flex-col gap-2 text-xs xs:text-sm text-gray-600 dark:text-gray-300">
              <p className="leading-relaxed">
                120 Narayan Empire, A.V. Road,<br />
                Anand, Gujarat 388120,<br />
                India
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-xs xs:text-sm text-gray-600 dark:text-gray-300">
              <p>Phone: [ADD YOUR PHONE NUMBER]</p>
              <p>Email: [ADD YOUR EMAIL]</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3 xs:gap-4">
              <a
                href="https://instagram.com/[YOUR_HANDLE]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-95"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-lg xs:text-xl sm:text-2xl">photo_camera</span>
              </a>
              <a
                href="https://linkedin.com/company/[YOUR_HANDLE]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-95"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined text-lg xs:text-xl sm:text-2xl">work</span>
              </a>
              <a
                href="https://facebook.com/[YOUR_HANDLE]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-95"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-lg xs:text-xl sm:text-2xl">facebook</span>
              </a>
              <a
                href="https://twitter.com/[YOUR_HANDLE]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-95"
                aria-label="Twitter"
              >
                <span className="material-symbols-outlined text-lg xs:text-xl sm:text-2xl">chat</span>
              </a>
              <a
                href="https://github.com/[YOUR_HANDLE]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-95"
                aria-label="GitHub"
              >
                <span className="material-symbols-outlined text-lg xs:text-xl sm:text-2xl">code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Links and Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 xs:pt-10 sm:pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 xs:gap-6">
            <div className="flex flex-wrap items-center justify-center gap-4 xs:gap-6 text-xs xs:text-sm text-gray-600 dark:text-gray-300">
              <Link to="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/blog" className="hover:text-primary transition-colors">
                Insights
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-center text-xs xs:text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} ZEENIITH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

