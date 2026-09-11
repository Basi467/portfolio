import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import profileImg from '../assets/profile1.jpg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grid-bg"
    >
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan/20 blur-[120px]" />
      <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet/20 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto w-full px-6 grid md:grid-cols-[1.2fr_0.8fr] items-center gap-12"
      >
        <div>
          <motion.p
            variants={item}
            className="font-mono text-sm text-cyan mb-4 flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-cyan animate-pulse" />
            Available for freelance &amp; full-time roles
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-[1.1] tracking-tight"
          >
            Hi, I&apos;m {profile.name} —
            <br />
            <span className="text-gradient inline-block min-h-[1.1em]">
              {role}
              <span className="text-cyan animate-pulse">_</span>
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-lg text-text-dim max-w-xl">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan to-violet px-6 py-3 text-sm font-semibold text-bg hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-heading hover:border-cyan hover:text-cyan transition-colors"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-text-dim hover:text-cyan transition-colors text-xl"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-text-dim hover:text-cyan transition-colors text-xl"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-text-dim hover:text-cyan transition-colors text-xl"
            >
              <FiMail />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="justify-self-center">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan to-violet opacity-70 blur-md animate-spin-slow" />
            <div className="absolute inset-1.5 rounded-full bg-bg overflow-hidden">
              <img
                src={profileImg}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-dim hover:text-cyan transition-colors animate-bounce"
        aria-label="Scroll to About"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
