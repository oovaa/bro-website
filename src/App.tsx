import { Analytics } from '@vercel/analytics/react'
import {
  Terminal as TerminalIcon,
  Github,
  Download,
  Command,
  Settings,
  RefreshCw,
} from 'lucide-react'

interface TerminalProps {
  command: string
  output?: React.ReactNode
}

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

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100'>
      {/* Hero Section */}
      <header className='container mx-auto px-4 py-16 text-center'>
        <div className='flex justify-center mb-6'>
          <TerminalIcon size={64} className='text-blue-500' />
        </div>
        <h1 className='text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text'>
          Groq & DeepSeek AI Assistant
        </h1>
        <p className='text-xl text-zinc-400 mb-8'>
          Your intelligent CLI companion powered by Groq and DeepSeek
        </p>
        <p className='text-lg text-zinc-300/50 mb-8'>
          Announcing version 3.0 with enhanced features and performance
          improvements!
        </p>
        <div className='flex justify-center gap-4'>
          <a
            href='#installation'
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors'
          >
            <Download size={20} />
            Installation Guide
          </a>
          <a
            href='https://github.com/oovaa/bro'
            className='bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors'
          >
            <Github size={20} />
            View on GitHub
          </a>
        </div>
      </header>

      {/* Demo Video Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-8 text-blue-400'>
            Demo Video
          </h2>
          <div className='flex justify-center'>
            <video
              width='640'
              height='360'
              autoPlay
              loop
              muted
              controls
              src='/demo.webm'
              className='rounded-lg border border-zinc-800'
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-zinc-900/50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12 text-blue-400'>
            Key Features
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-blue-800 transition-colors'>
              <Command className='text-blue-500 mb-4 h-8 w-8' />
              <h3 className='text-xl font-semibold mb-2 text-zinc-100'>
                Interactive Mode
              </h3>
              <p className='text-zinc-400'>
                Engage in natural conversations with the AI assistant through an
                intuitive command-line interface.
              </p>
            </div>
            <div className='bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-blue-800 transition-colors'>
              <Settings className='text-blue-500 mb-4 h-8 w-8' />
              <h3 className='text-xl font-semibold mb-2 text-zinc-100'>
                Easy Configuration
              </h3>
              <p className='text-zinc-400'>
                Simple setup with your Groq API key and automatic environment
                configuration.
              </p>
            </div>
            <div className='bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-blue-800 transition-colors'>
              <RefreshCw className='text-blue-500 mb-4 h-8 w-8' />
              <h3 className='text-xl font-semibold mb-2 text-zinc-100'>
                Quick Updates
              </h3>
              <p className='text-zinc-400'>
                Stay up-to-date with the latest features through our simple
                update mechanism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id='installation' className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12 text-blue-400'>
            Installation Guide
          </h2>
          <div className='max-w-3xl mx-auto bg-zinc-900 p-8 rounded-lg border border-zinc-800'>
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-zinc-100'>
                  1. Clone the Repository
                </h3>
                <pre className='bg-zinc-950 p-4 rounded-md overflow-x-auto border border-zinc-800 font-mono'>
                  <code>git clone https://github.com/oovaa/bro.git</code>
                </pre>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-zinc-100'>
                  2. Navigate to Project
                </h3>
                <pre className='bg-zinc-950 p-4 rounded-md overflow-x-auto border border-zinc-800 font-mono'>
                  <code>cd bro</code>
                </pre>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-zinc-100'>
                  3. Install with API Key
                </h3>
                <pre className='bg-zinc-950 p-4 rounded-md overflow-x-auto border border-zinc-800 font-mono'>
                  <code>./install &lt;GROQ_API_KEY&gt;</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className='py-16 bg-zinc-900/50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12 text-blue-400'>
            Usage Examples
          </h2>
          <div className='flex flex-col md:flex-row md:flex-wrap gap-8 max-w-4xl mx-auto'>
            <div className='flex-1'>
              <h3 className='text-xl font-semibold mb-4 text-zinc-100'>
                Interactive Mode
              </h3>
              <Terminal
                command='bro'
                output={
                  <>
                    <div>You: Explain quantum computing</div>
                    <div style={{ color: 'cyan' }}>
                      <p style={{ color: 'gray' }}>
                        {' '}
                        the user is asking about quantum computing which is
                        ......
                      </p>
                      Quantum computing uses qubits to perform...
                    </div>
                  </>
                }
              />
            </div>
            <div className='flex-1'>
              <h3 className='text-xl font-semibold mb-4 text-zinc-100'>
                Direct Mode
              </h3>
              <Terminal
                command='bro "What is Groq?"'
                output={
                  <>
                    <div style={{ color: 'cyan' }}>
                      <p style={{ color: 'gray' }}>
                        {' '}
                        ok so i need to tell him ......
                      </p>
                      Groq is a hardware company specializing in...
                    </div>
                  </>
                }
              />
            </div>
            <div className='flex-1'>
              <h3 className='text-xl font-semibold mb-4 text-zinc-100'>
                Direct Mode (silent)
              </h3>
              <Terminal
                command='bro -s What is Groq?'
                output={
                  <>
                    <div style={{ color: 'cyan' }}>
                      Groq is a hardware company specializing in...
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 text-center text-zinc-400 bg-zinc-950'>
        <div className='container mx-auto px-4'>
          <p>
            © {new Date().getFullYear()} Omar. Released under the MIT License.
          </p>
          <div className='flex justify-center gap-4 mt-4'>
            <a
              href='https://github.com/oovaa/bro'
              className='text-blue-500 hover:text-blue-400 transition-colors'
            >
              <Github className='h-6 w-6' />
            </a>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}

export default App
