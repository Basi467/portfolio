import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'

const links = [
  { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: FiGithub, label: 'GitHub', href: profile.github },
  { icon: FiLinkedin, label: 'LinkedIn', href: profile.linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="I'm currently available for freelance projects and open to entry-level AI Engineering and Full-Stack Development roles. Feel free to reach out."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-8 py-3.5 text-sm font-semibold text-bg hover:opacity-90 transition-opacity glow"
          >
            <FiMail /> Say hello
          </a>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text hover:border-cyan hover:text-cyan transition-colors"
              >
                <Icon className="shrink-0" />
                <span className="truncate">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
