import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useInViewOnce } from '../hooks/useInViewOnce'
import { education, profile } from '../data/portfolio'

export default function About() {
  const [ref, inView] = useInViewOnce(0.2)

  return (
    <section id="about" className="px-6 sm:px-10 py-24 sm:py-32 max-w-6xl mx-auto">
      <SectionHeading eyebrow="About" title="A bit about my background" />

      <div ref={ref} className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20">
        <motion.p
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -40 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="text-xl sm:text-2xl font-serif text-heading leading-relaxed"
        >
          I'm a recent B.Tech graduate in Artificial Intelligence and Data Science with
          hands-on experience building full-stack AI applications — from training and
          wiring up ML models to shipping the React and FastAPI apps that put them in
          front of real users. I'm looking for entry-level roles in{' '}
          <span className="text-accent">AI Engineering</span> or{' '}
          <span className="text-accent">Full-Stack Development</span> — or freelance work
          in either.
        </motion.p>

        <motion.div
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 40 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.15 }}
          className="border-t border-border pt-6 space-y-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-dim mb-1.5">
              Location
            </p>
            <p className="text-heading">{profile.location}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-dim mb-1.5">
              Education
            </p>
            <p className="text-heading">{education.degree}</p>
            <p className="text-text-dim text-sm mt-1">
              {education.school} · {education.years}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
