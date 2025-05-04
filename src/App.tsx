import { Analytics } from '@vercel/analytics/react'
import { motion } from 'framer-motion'
import {
  Terminal as TerminalIcon,
  Github,
  Download,
  Command,
  Settings,
  RefreshCw,
  Moon,
  Sun,
} from 'lucide-react'
import { Terminal } from './components/Terminal'
import { NavBar } from './components/NavBar'
import { ParticlesBackground } from './components/ParticlesBackground'
import { AnimatedCard } from './components/AnimatedCard'

export default function App() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 dark:bg-gradient-to-b dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 dark:text-zinc-100 transition-colors duration-300 ease-in-out'>
      <ParticlesBackground />
      <NavBar />

      {/* Hero Section */}
      <header className='container mx-auto px-4 py-32 text-center relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-teal-50/30 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-60 dark:opacity-40' />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='relative'
        >
          <div className='animate-float inline-block'>
            <TerminalIcon size={64} className='text-blue-500' />
          </div>
          <h1 className='text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500 dark:from-blue-400 dark:via-teal-300 dark:to-purple-400 text-transparent bg-clip-text animate-gradient'>
            bro CLI Tool
          </h1>
          <p className='text-xl text-slate-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto'>
            Your powerful command-line assistant for developer productivity
          </p>
          <p className='text-lg text-slate-500 dark:text-zinc-500 mb-8'>
            Announcing version 3.0 with enhanced features and performance
            improvements!
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <a
              href='#installation'
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors hover:shadow-lg hover:shadow-blue-500/20'
            >
              <Download size={20} />
              Installation Guide
            </a>
            <a
              href='https://github.com/oovaa/bro'
              className='bg-slate-700 hover:bg-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-slate-600 dark:border-zinc-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors hover:shadow-lg hover:shadow-slate-500/10 dark:hover:shadow-zinc-500/10'
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </header>

      {/* Demo Video Section */}
      <section id='demo' className='py-16 relative'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400'
          >
            Demo Video
          </motion.h2>
          <div className='flex justify-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='w-full max-w-4xl'
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                src='/demo.webm'
                className='rounded-lg border border-slate-300 dark:border-zinc-800 w-full shadow-xl shadow-slate-300/30 dark:shadow-xl'
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id='features'
        className='py-16 bg-slate-100 dark:bg-zinc-900 relative'
      >
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400'
          >
            Key Features
          </motion.h2>
          <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            <AnimatedCard icon={Command} title='Interactive Mode'>
              Engage in natural conversations with the AI assistant through an
              intuitive command-line interface.
            </AnimatedCard>
            <AnimatedCard icon={Settings} title='Easy Configuration'>
              Simple setup with your Groq API key and automatic environment
              configuration.
            </AnimatedCard>
            <AnimatedCard icon={RefreshCw} title='Quick Updates'>
              Stay up-to-date with the latest features through our simple update
              mechanism.
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id='installation' className='py-16 relative'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400'
          >
            Installation Guide
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='max-w-3xl mx-auto bg-slate-800 dark:bg-zinc-900 p-8 rounded-lg border border-slate-700 dark:border-zinc-800 shadow-xl shadow-slate-500/10 dark:shadow-xl'
          >
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-zinc-100'>
                  1. Clone the Repository
                </h3>
                <Terminal command='git clone https://github.com/oovaa/bro.git' />
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-zinc-100'>
                  2. Navigate to Project
                </h3>
                <Terminal command='cd bro' />
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-zinc-100'>
                  3. Install with API Key
                </h3>
                <Terminal command='./install <GROQ_API_KEY>' />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usage Section */}
      <section
        id='usage'
        className='py-16 bg-slate-100 dark:bg-zinc-900 relative'
      >
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400'
          >
            Usage Examples
          </motion.h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-slate-800 dark:text-zinc-100'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className='text-xl font-semibold mb-4'>Interactive Mode</h3>
              <Terminal
                command='bro'
                output={
                  <>
                    <div>You: Explain quantum computing</div>
                    <div className='text-sky-600 dark:text-cyan-400'>
                      <p className='text-slate-500 dark:text-zinc-500'>
                        the user is asking about quantum computing which is...
                      </p>
                      Quantum computing uses qubits to perform...
                    </div>
                  </>
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className='text-xl font-semibold mb-4'>Direct Mode</h3>
              <Terminal
                command='bro "What is Groq?"'
                output={
                  <>
                    <div className='text-sky-600 dark:text-cyan-400'>
                      <p className='text-slate-500 dark:text-zinc-500'>
                        ok so I need to tell him...
                      </p>
                      Groq is a hardware company specializing in...
                    </div>
                  </>
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className='text-xl font-semibold mb-4'>
                Direct Mode (silent)
              </h3>
              <Terminal
                command='bro -s What is Groq?'
                output={
                  <>
                    <div className='text-sky-600 dark:text-cyan-400'>
                      Groq is a hardware company specializing in...
                    </div>
                  </>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-12 text-center text-slate-500 bg-slate-100 dark:text-zinc-400 dark:bg-zinc-950 relative'>
        <div className='container mx-auto px-4'>
          <p className='mb-4'>
            © {new Date().getFullYear()} Omar. Released under the MIT License.
          </p>
          <div className='flex justify-center gap-6'>
            <a
              href='https://github.com/oovaa/bro'
              className='text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 transition-colors'
              aria-label='GitHub Repository'
              target='_blank'
              rel='noopener noreferrer'
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
