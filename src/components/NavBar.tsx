import { Terminal as TerminalIcon, Github, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <nav className="fixed w-full top-0 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="text-blue-500" />
          <span className="font-bold">Groq AI</span>
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