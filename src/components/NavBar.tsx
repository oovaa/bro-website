import { Terminal as TerminalIcon, Github, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference or use system preference
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode')
      if (savedMode !== null) return savedMode === 'true'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })

  useEffect(() => {
    // Apply dark mode class and save preference
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  return (
    <nav className="fixed w-full top-0 bg-zinc-950/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="text-blue-500" />
          <span className="font-bold">bro</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-blue-400 transition-colors hidden sm:inline">Features</a>
          <a href="#installation" className="hover:text-blue-400 transition-colors hidden sm:inline">Install</a>
          <a href="#usage" className="hover:text-blue-400 transition-colors hidden sm:inline">Usage</a>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a 
            href="https://github.com/oovaa/bro" 
            className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="GitHub repository"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}