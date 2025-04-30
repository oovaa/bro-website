import { useState } from 'react';
import { Copy, Check, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  command: string;
  output?: React.ReactNode;
  animate?: boolean;
  showCopy?: boolean;
}

export const Terminal = ({ 
  command, 
  output, 
  animate = true,
  showCopy = true 
}: TerminalProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="w-full bg-zinc-100 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-300 dark:border-zinc-700 font-mono text-sm relative group transition-colors duration-300">
      {/* Terminal header */}
      <div className="absolute top-3 left-3 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      
      {/* Terminal content */}
      <div className="mt-6">
        <div className="flex items-center">
          <div className="flex items-center">
            <TerminalIcon className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
            <span className="text-green-600 dark:text-green-400">$</span>
          </div>
          <span className="ml-2 text-zinc-800 dark:text-zinc-100">{command}</span>
          
          {showCopy && (
            <button 
              onClick={copyToClipboard}
              className={`ml-auto flex items-center gap-1 px-2 py-1 rounded text-xs ${
                copied 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100'
              } transition-colors`}
              aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>

        {output && (
          <div className={`mt-3 text-zinc-700 dark:text-zinc-300 ${
            animate ? 'animate-fade-in' : ''
          }`}>
            {output}
            {animate && (
              <span className="inline-block ml-1 w-2 h-4 bg-zinc-800 dark:bg-zinc-200 animate-blink" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};