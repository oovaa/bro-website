import { useState } from 'react'
import { Copy, Check, Terminal as TerminalIcon } from 'lucide-react'

interface TerminalProps {
  command: string
  output?: React.ReactNode
  animate?: boolean
  showCopy?: boolean
}

export const Terminal = ({
  command,
  output,
  animate = true,
  showCopy = true,
}: TerminalProps) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
      // Optionally, provide user feedback here if copy fails
    }
  }

  return (
    <div className='w-full bg-slate-100 dark:bg-zinc-850 p-4 sm:p-6 rounded-lg border border-slate-300 dark:border-zinc-700 font-mono text-xs sm:text-sm relative group transition-all duration-300 ease-in-out shadow-md shadow-slate-200/70 dark:shadow-xl dark:shadow-zinc-900/30 hover:shadow-lg hover:shadow-slate-300/80 dark:hover:shadow-2xl dark:hover:shadow-zinc-900/50 hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:-translate-y-1'>
      {/* Subtle glow effect on hover */}
      <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      <div className='absolute top-2.5 left-3 sm:top-3 sm:left-4 flex gap-1.5 sm:gap-2 relative z-10'>
        <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/90 dark:bg-red-500/70 group-hover:animate-pulse' />
        <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/90 dark:bg-yellow-500/70 group-hover:animate-pulse animation-delay-100' />
        <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/90 dark:bg-green-500/70 group-hover:animate-pulse animation-delay-200' />
      </div>

      <div className='mt-6 sm:mt-8'>
        {' '}
        {/* Increased top margin for content */}
        <div className='flex items-center'>
          <div className='flex items-center shrink-0'>
            {' '}
            {/* Prevent prompt from shrinking */}
            <TerminalIcon className='h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600 dark:text-emerald-400 mr-1.5 sm:mr-2' />
            <span className='text-emerald-600 dark:text-emerald-400'>$</span>
          </div>
          {/* Added overflow-x-auto and scrollbar styling */}
          <span className='ml-2 text-slate-800 dark:text-zinc-200 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-slate-400 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent pr-2'>
            {command}
          </span>

          {showCopy && (
            <button
              onClick={copyToClipboard}
              className={`ml-auto flex items-center shrink-0 gap-1 pl-3 pr-2 py-1 rounded text-xs ${
                // Added shrink-0
                copied
                  ? 'text-emerald-700 dark:text-emerald-400'
                  : 'text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-zinc-200 opacity-50 group-hover:opacity-100 focus:opacity-100'
              } transition-all duration-200`}
              aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span className='hidden sm:inline'>Copied</span>{' '}
                  {/* "Copied" text hidden on small screens */}
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span className='hidden sm:inline'>Copy</span>{' '}
                  {/* "Copy" text hidden on small screens */}
                </>
              )}
            </button>
          )}
        </div>
        {output && (
          <div
            className={`mt-3 text-slate-700 dark:text-zinc-300 ${
              animate ? 'animate-fade-in' : ''
            }`}
          >
            {output}
            {animate &&
              output /* Only show cursor if there's output and animation is enabled */ && (
                <span className='inline-block ml-1 w-2 h-3.5 sm:h-4 bg-slate-800 dark:bg-zinc-200 animate-blink align-text-bottom' /> // Adjusted cursor size and alignment
              )}
          </div>
        )}
      </div>
    </div>
  )
}
