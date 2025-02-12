import { Terminal, Github, Download, Command, Settings, RefreshCw, Trash2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <Terminal size={64} className="text-emerald-500" />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-300 text-transparent bg-clip-text">Command R+ AI Assistant</h1>
        <p className="text-xl text-zinc-400 mb-8">Your intelligent CLI companion powered by Cohere</p>
        <div className="flex justify-center gap-4">
          <a href="#installation" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
            <Download size={20} />
            Installation Guide
          </a>
          <a href="https://github.com/oovaa/bro" className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
            <Github size={20} />
            View on GitHub
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-emerald-800 transition-colors">
              <Command className="text-emerald-500 mb-4 h-8 w-8" />
              <h3 className="text-xl font-semibold mb-2 text-zinc-100">Interactive Mode</h3>
              <p className="text-zinc-400">Engage in natural conversations with the AI assistant through an intuitive command-line interface.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-emerald-800 transition-colors">
              <Settings className="text-emerald-500 mb-4 h-8 w-8" />
              <h3 className="text-xl font-semibold mb-2 text-zinc-100">Easy Configuration</h3>
              <p className="text-zinc-400">Simple setup with your Cohere API key and automatic environment configuration.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-emerald-800 transition-colors">
              <RefreshCw className="text-emerald-500 mb-4 h-8 w-8" />
              <h3 className="text-xl font-semibold mb-2 text-zinc-100">Quick Updates</h3>
              <p className="text-zinc-400">Stay up-to-date with the latest features through our simple update mechanism.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">Installation Guide</h2>
          <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">1. Clone the Repository</h3>
                <pre className="bg-zinc-950 p-4 rounded-md overflow-x-auto border border-zinc-800 font-mono">
                  <code>git clone https://github.com/oovaa/bro.git</code>
                </pre>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">2. Navigate to Project</h3>
                <pre className="bg-zinc-950 p-4 rounded-md overflow-x-auto border border-zinc-800 font-mono">
                  <code>cd bro</code>
                </pre>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">3. Install with API Key</h3>
                <pre className="bg-zinc-950 p-4 rounded-md overflow-x-auto border border-zinc-800 font-mono">
                  <code>. ./install &lt;COHERE_API_KEY&gt;</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">Usage Examples</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">Interactive Mode</h3>
              <pre className="bg-zinc-950 p-4 rounded-md overflow-x-auto border border-zinc-800 font-mono">
                <code>$ bro 
You: Tell me about Palestine
AI: Palestine has a rich history...</code>
              </pre>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">Direct Mode</h3>
              <pre className="bg-zinc-950 p-4 rounded-md overflow-x-auto border border-zinc-800 font-mono">
                <code>$ bro tell me about Palestine</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-400 bg-zinc-950">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Omar. Released under the MIT License.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/oovaa/bro" className="text-emerald-500 hover:text-emerald-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;