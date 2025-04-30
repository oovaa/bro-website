import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface TerminalProps {
  command: string
  output?: React.ReactNode
}

export const Terminal = ({ command, output }: TerminalProps) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800 font-mono text-sm relative group">
      <div className="absolute top-3 left-3 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      
      <div className="flex items-center mt-6">
        <span className="text-green-400">$</span>
        <span className="ml-2 text-zinc-100">{command}</span>
        <button 
          onClick={copyToClipboard}
          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-100 flex items-center gap-1"
        >
          {copied ? (
            <>
              <Check size={16} /> Copied
            </>
          ) : (
            <>
              <Copy size={16} /> Copy
            </>
          )}
        </button>
      </div>
      {output && (
        <div className="mt-2 text-zinc-300 animate-fade-in">
          {output}
          <div className="inline-block ml-2 w-2 h-4 bg-zinc-100 animate-blink" />
        </div>
      )}
    </div>
  )
}