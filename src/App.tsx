import { Analytics } from '@vercel/analytics/react'
import { motion } from 'framer-motion'
import {
  Terminal as TerminalIcon,
  Github,
  Download,
  Command,
  Settings,
  RefreshCw,
} from 'lucide-react'
import { Terminal } from './components/Terminal'
import { NavBar } from './components/NavBar'
import { ParticlesBackground } from './components/ParticlesBackground'
import { AnimatedCard } from './components/AnimatedCard'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      <ParticlesBackground />
      <NavBar />
      
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent opacity-40" />
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="animate-float inline-block">
            <TerminalIcon size={64} className="text-blue-500" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400 text-transparent bg-clip-text animate-gradient">
            Groq & DeepSeek AI Assistant
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Your intelligent CLI companion powered by Groq and DeepSeek
          </p>
          <p className="text-lg text-zinc-300/50 mb-8">
            Announcing version 3.0 with enhanced features and performance improvements!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#installation"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Download size={20} />
              Installation Guide
            </a>
            <a
              href="https://github.com/oovaa/bro"
              className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors hover:shadow-lg hover:shadow-zinc-500/10"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </header>

      {/* Demo Video Section */}
      <section id="demo" className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 text-blue-400"
          >
            Demo Video
          </motion.h2>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl"
            >
              <video
                autoPlay
                loop
                muted
                controls
                src="/demo.webm"
                className="rounded-lg border border-zinc-800 w-full shadow-xl"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-zinc-900/50 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-400"
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard icon={Command} title="Interactive Mode">
              Engage in natural conversations with the AI assistant through an intuitive command-line interface.
            </AnimatedCard>
            <AnimatedCard icon={Settings} title="Easy Configuration">
              Simple setup with your Groq API key and automatic environment configuration.
            </AnimatedCard>
            <AnimatedCard icon={RefreshCw} title="Quick Updates">
              Stay up-to-date with the latest features through our simple update mechanism.
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-400"
          >
            Installation Guide
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-xl"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                  1. Clone the Repository
                </h3>
                <Terminal command="git clone https://github.com/oovaa/bro.git" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                  2. Navigate to Project
                </h3>
                <Terminal command="cd bro" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                  3. Install with API Key
                </h3>
                <Terminal command="./install <GROQ_API_KEY>" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usage Section */}
      <section id="usage" className="py-16 bg-zinc-900/50 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-400"
          >
            Usage Examples
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">
                Interactive Mode
              </h3>
              <Terminal
                command="bro"
                output={
                  <>
                    <div>You: Explain quantum computing</div>
                    <div className="text-cyan-400">
                      <p className="text-zinc-500">
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
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">
                Direct Mode
              </h3>
              <Terminal
                command='bro "What is Groq?"'
                output={
                  <>
                    <div className="text-cyan-400">
                      <p className="text-zinc-500">
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
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">
                Direct Mode (silent)
              </h3>
              <Terminal
                command="bro -s What is Groq?"
                output={
                  <>
                    <div className="text-cyan-400">
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
      <footer className="py-12 text-center text-zinc-400 bg-zinc-950 relative">
        <div className="container mx-auto px-4">
          <p className="mb-4">
            © {new Date().getFullYear()} Omar. Released under the MIT License.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/oovaa/bro"
              className="text-blue-500 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}