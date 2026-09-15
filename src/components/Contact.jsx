import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import RevealText from './RevealText'
import Magnetic from './Magnetic'
import { useInViewOnce } from '../hooks/useInViewOnce'
import { profile } from '../data/portfolio'

const links = [
  { label: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
]

export default function Contact() {
  const [ref, inView] = useInViewOnce(0.15)

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-6 sm:px-10 py-28 sm:py-40 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />

      <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
        Contact
      </p>

      <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-heading leading-[1.05]">
        <RevealText text="Let's work" />
        <br />
        <RevealText text="together" delay={0.1} />
      </h2>

      <motion.p
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 text-lg text-text-dim max-w-lg"
      >
        I'm currently available for freelance projects and open to entry-level AI
        Engineering and Full-Stack Development roles.
      </motion.p>

      <motion.div
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.92 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className="mt-10"
      >
        <Magnetic strength={0.25}>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 font-serif text-2xl sm:text-4xl text-heading link-underline transition-[text-shadow] hover:text-glow"
          >
            {profile.email}
            <FiArrowUpRight className="text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Magnetic>
      </motion.div>

      <motion.div
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest"
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
            className="link-underline text-text-dim hover:text-heading transition-colors"
          >
            {l.label}
          </a>
        ))}
      </motion.div>
    </section>
  )
}
