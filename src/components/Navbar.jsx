import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'

const links = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#certifications', id: 'certifications', label: 'Certifications' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(links.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass border-b border-accent/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 py-5">
        <a href="#top" className="font-serif text-xl text-heading">
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`link-underline transition-colors ${
                  activeId === l.id ? 'text-accent text-glow' : 'text-text-dim hover:text-heading'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="hidden md:inline-flex link-underline text-xs font-mono uppercase tracking-widest text-heading"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-heading text-2xl leading-none"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-2xl text-heading"
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resumeUrl} download className="font-mono text-xs uppercase tracking-widest text-accent mt-2">
            Download Resume
          </a>
        </div>
      )}
    </motion.header>
  )
}
