import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
}

export const AnimatedCard = ({ icon: Icon, title, children }: AnimatedCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-blue-800 transition-all hover:shadow-xl hover:shadow-blue-900/20 relative group h-full"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <Icon className="text-blue-500 mb-4 h-8 w-8 animate-pulse" />
      <h3 className="text-xl font-semibold mb-2 text-zinc-100">{title}</h3>
      <p className="text-zinc-400 relative z-10">{children}</p>
    </motion.div>
  )
}