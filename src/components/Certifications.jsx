import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useInViewOnce } from '../hooks/useInViewOnce'
import { certifications } from '../data/portfolio'

export default function Certifications() {
  const [ref, inView] = useInViewOnce(0.1)

  return (
    <section id="certifications" className="px-6 sm:px-10 py-24 sm:py-32 max-w-6xl mx-auto">
      <SectionHeading eyebrow="Certifications" title="Courses & certifications" />

      <div ref={ref}>
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: Math.min(i * 0.08, 0.32) }}
            className="py-8 border-b border-border grid sm:grid-cols-[200px_1fr] gap-x-10 gap-y-2"
          >
            <span className="font-mono text-xs text-text-dim">{cert.period}</span>
            <div>
              <h3 className="font-serif text-xl text-heading">{cert.title}</h3>
              <p className="text-accent text-sm mt-1">
                {cert.org} · {cert.mode}
              </p>
              <p className="text-text-dim text-sm mt-2 max-w-xl">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
