import {
  Terminal as TerminalIcon,
  Github,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react' // Added Menu and X icons
import { useState, useEffect } from 'react'

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode')
      if (savedMode !== null) return savedMode === 'true'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true // Default to dark if window is not available
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    // Cleanup function to restore scroll on component unmount or when menu closes
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navLinkClasses =
    'block text-slate-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors py-3 border-b border-slate-200 dark:border-zinc-700 w-full text-left px-4' // Added px-4 for mobile links
  const desktopNavLinkClasses =
    'text-slate-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors'

  return (
    <nav className='fixed w-full top-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 z-50 transition-colors duration-300 ease-in-out'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <a
          href='#' // Link to top of page
          onClick={closeMobileMenu}
          className='flex items-center gap-2'
          aria-label='Homepage'
        >
          <TerminalIcon className='text-blue-500' />
          <span className='font-bold text-slate-800 dark:text-zinc-100'>
            bro
          </span>
        </a>

        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors text-slate-600 dark:text-zinc-400'
            aria-label='Toggle menu'
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className='hidden md:flex items-center gap-6'>
          <a href='#features' className={desktopNavLinkClasses}>
            Features
          </a>
          <a href='#installation' className={desktopNavLinkClasses}>
            Install
          </a>
          <a href='#usage' className={desktopNavLinkClasses}>
            Usage
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors text-slate-600 dark:text-zinc-400'
            aria-label='Toggle dark mode'
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href='https://github.com/oovaa/bro'
            className='p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors text-slate-600 dark:text-zinc-400'
            aria-label='GitHub repository'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md pb-4 absolute top-full left-0 w-full border-b border-slate-200 dark:border-zinc-800 shadow-lg'>
          <div className='flex flex-col'>
            <a
              href='#features'
              className={navLinkClasses}
              onClick={closeMobileMenu}
            >
              Features
            </a>
            <a
              href='#installation'
              className={navLinkClasses}
              onClick={closeMobileMenu}
            >
              Install
            </a>
            <a
              href='#usage'
              className={navLinkClasses}
              onClick={closeMobileMenu}
            >
              Usage
            </a>
            <div className='px-4 py-3 border-b border-slate-200 dark:border-zinc-700 w-full flex justify-between items-center'>
              <span className='text-slate-600 dark:text-zinc-400'>Theme</span>
              <button
                onClick={() => {
                  setDarkMode(!darkMode)
                  // Optionally close menu on theme change: closeMobileMenu()
                }}
                className='p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors text-slate-600 dark:text-zinc-400'
                aria-label='Toggle dark mode'
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <a
              href='https://github.com/oovaa/bro'
              className={`${navLinkClasses} border-b-0`} // Remove border for last item
              onClick={closeMobileMenu}
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
