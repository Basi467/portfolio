import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="Languages, frameworks, and tools I use to design, build, and ship AI-powered products."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: gi * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-heading font-semibold mb-4">{group.category}</h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-text hover:border-cyan hover:text-cyan transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
