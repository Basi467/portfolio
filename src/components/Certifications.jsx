import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-surface/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Certifications" title="Courses & Certifications" />

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-surface p-6 flex gap-4 items-start"
            >
              <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-cyan to-violet flex items-center justify-center text-bg text-lg">
                <FiAward />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-heading font-semibold">{cert.title}</h3>
                  <span className="text-xs font-mono text-text-dim">{cert.period}</span>
                </div>
                <p className="text-sm text-cyan mt-0.5">
                  {cert.org} · {cert.mode}
                </p>
                <p className="text-sm text-text-dim mt-2">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
