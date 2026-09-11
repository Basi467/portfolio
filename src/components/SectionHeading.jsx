import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12 text-center"
    >
      {eyebrow && (
        <p className="font-mono text-sm text-cyan mb-2 tracking-wide">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-heading">{title}</h2>
      {subtitle && <p className="mt-3 text-text-dim max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  )
}
