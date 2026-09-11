import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { education, profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="About Me" title="A bit about my background" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl border border-border bg-surface p-8 sm:p-10"
        >
          <p className="text-text leading-relaxed">
            I'm a recent B.Tech graduate in Artificial Intelligence and Data Science with
            hands-on experience building full-stack AI applications. I work across the
            stack — from training and wiring up ML models to shipping the React and
            FastAPI apps that put them in front of real users. I've built projects
            spanning multimodal RAG systems, computer-vision pipelines, and ML-driven
            decision support tools, and I'm looking for entry-level roles in{' '}
            <span className="text-cyan">AI Engineering</span> or{' '}
            <span className="text-violet">Full-Stack Development</span>.
          </p>

          <div className="mt-8 flex items-center gap-2 text-text-dim text-sm">
            <FiMapPin />
            <span>{profile.location}</span>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs font-mono text-text-dim uppercase tracking-wider mb-2">
              Education
            </p>
            <p className="text-heading font-medium">{education.degree}</p>
            <p className="text-text-dim text-sm mt-1">
              {education.school} · {education.years}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
