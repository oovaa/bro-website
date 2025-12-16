import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
}

export const AnimatedCard = ({
  icon: Icon,
  title,
  children,
}: AnimatedCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.03, y: -5 }}
      className='bg-white dark:bg-zinc-800 p-6 rounded-lg border border-slate-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-600/30 relative group h-full flex flex-col cursor-pointer'
    >
      {/* Enhanced gradient overlay with animation */}
      <div className='absolute inset-0 rounded-lg bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50 dark:from-blue-600/10 dark:via-teal-500/10 dark:to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      {/* Animated glow effect on hover */}
      <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300' 
           style={{ backgroundSize: '200% 100%' }} />
      {/* Icon with enhanced animation */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className='text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-4 h-8 w-8 relative z-10 shrink-0 transition-colors duration-300' />
      </motion.div>
      {/* Title with gradient on hover */}
      <h3 className='text-xl font-semibold mb-2 text-slate-800 dark:text-zinc-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 dark:group-hover:from-blue-400 dark:group-hover:to-teal-400 group-hover:text-transparent group-hover:bg-clip-text relative z-10 transition-all duration-300'>
        {title}
      </h3>
      {/* Text content */}
      <p className='text-slate-600 dark:text-zinc-400 relative z-10 flex-grow'>
        {children}
      </p>
    </motion.div>
  )
}
