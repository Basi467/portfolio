import { motion } from 'framer-motion'
import RevealText from './RevealText'
import { useInViewOnce } from '../hooks/useInViewOnce'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  const [ref, inView] = useInViewOnce()

  return (
    <div ref={ref} className="mb-16">
      {eyebrow && (
        <motion.p
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <h2 className="font-serif text-4xl sm:text-5xl text-heading leading-tight">
        <RevealText text={title} />
      </h2>
      {subtitle && (
        <motion.p
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-text-dim max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
