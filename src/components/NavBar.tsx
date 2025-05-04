import { Terminal as TerminalIcon, Github, Moon, Sun } from 'lucide-react'
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

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  return (
    <nav className='fixed w-full top-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 z-50 transition-colors duration-300 ease-in-out'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <TerminalIcon className='text-blue-500' />
          <span className='font-bold text-slate-800 dark:text-zinc-100'>
            bro
          </span>
        </div>
        <div className='flex items-center gap-6'>
          <a
            href='#features'
            className='text-slate-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors hidden sm:inline'
          >
            Features
          </a>
          <a
            href='#installation'
            className='text-slate-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors hidden sm:inline'
          >
            Install
          </a>
          <a
            href='#usage'
            className='text-slate-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors hidden sm:inline'
          >
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
    </nav>
  )
}
