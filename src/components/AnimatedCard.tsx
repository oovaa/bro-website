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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }} // Adjusted duration slightly for snappier feel
      className='bg-white dark:bg-zinc-800 p-6 rounded-lg border border-slate-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-600/20 relative group h-full flex flex-col' // Added flex flex-col
    >
      {/* Adjusted gradient overlay */}
      <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50/50 to-teal-50/50 dark:from-blue-600/10 dark:to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      {/* Icon color remains blue */}
      <Icon className='text-blue-500 mb-4 h-8 w-8 relative z-10 shrink-0' />{' '}
      {/* Added shrink-0 */}
      {/* Adjusted text colors */}
      <h3 className='text-xl font-semibold mb-2 text-slate-800 dark:text-zinc-100 relative z-10'>
        {title}
      </h3>
      {/* Adjusted text colors */}
      <p className='text-slate-600 dark:text-zinc-400 relative z-10 flex-grow'>
        {' '}
        {/* Added flex-grow */}
        {children}
      </p>
    </motion.div>
  )
}
