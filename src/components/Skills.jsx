import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useInViewOnce } from '../hooks/useInViewOnce'
import { skills } from '../data/portfolio'

export default function Skills() {
  const [ref, inView] = useInViewOnce(0.05)

  return (
    <section id="skills" className="px-6 sm:px-10 py-24 sm:py-32 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        subtitle="Languages, frameworks, and tools I use to design, build, and ship AI-powered products."
      />

      <div ref={ref}>
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.94 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: Math.min(gi * 0.06, 0.3) }}
            className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8 py-6 border-b border-border items-baseline origin-left"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-dim">
              {group.category}
            </h3>
            <p className="text-lg text-heading leading-relaxed">
              {group.items.map((skill, i) => (
                <span key={skill}>
                  {skill}
                  {i < group.items.length - 1 && (
                    <span className="text-text-dim"> / </span>
                  )}
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
