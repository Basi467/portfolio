import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiArrowRight } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { useInViewOnce } from '../hooks/useInViewOnce'
import RevealText from './RevealText'
import FloatingIcons from './FloatingIcons'
import Magnetic from './Magnetic'
import profileImg from '../assets/profile1.jpg'

function fade(inView, delay = 0, y = 20) {
  return {
    animate: { opacity: inView ? 1 : 0, y: inView ? 0 : y },
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay },
  }
}

export default function Hero() {
  const role = useTypewriter(profile.roles)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -100])

  const [contentRef, contentIn] = useInViewOnce(0.1)
  const [photoRef, photoIn] = useInViewOnce(0.1)

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent/25 blur-[120px]"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-accent-2/20 blur-[130px]"
      />

      {/* Large side portrait — desktop only */}
      <motion.div
        ref={photoRef}
        style={{ y: imageY }}
        animate={{ opacity: photoIn ? 1 : 0 }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        className="hidden md:block absolute inset-y-0 right-0 w-[46%] lg:w-[40%]"
      >
        <img
          src={profileImg}
          alt={profile.name}
          className="w-full h-full object-cover grayscale-[35%]"
          style={{ objectPosition: 'center 25%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
      </motion.div>

      <FloatingIcons scrollYProgress={scrollYProgress} />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-10">
        <div ref={contentRef} className="max-w-xl">
          <motion.p
            {...fade(contentIn, 0)}
            className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim mb-6 flex items-center gap-2"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            Available for freelance &amp; full-time roles
          </motion.p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-heading leading-[1.05] tracking-tight">
            <RevealText text={profile.name} />
          </h1>

          <p className="mt-4 font-mono text-lg sm:text-xl text-accent min-h-[1.6em]">
            {role}
            <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle animate-pulse" />
          </p>

          <motion.p
            {...fade(contentIn, 0.1)}
            className="mt-6 text-lg text-text max-w-lg leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(contentIn, 0.2)} className="mt-9 flex flex-wrap items-center gap-8">
            <Magnetic strength={0.4}>
              <a
                href="#projects"
                className="group glow-sm inline-flex items-center gap-2 bg-ink text-bg px-6 py-3.5 rounded-sm text-sm font-medium hover:gap-3 transition-all"
              >
                View Work
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <a
              href={profile.resumeUrl}
              download
              className="link-underline text-sm font-medium text-heading"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div {...fade(contentIn, 0.3)} className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-text-dim hover:text-accent transition-colors text-lg"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-text-dim hover:text-accent transition-colors text-lg"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-text-dim hover:text-accent transition-colors text-lg"
            >
              <FiMail />
            </a>
          </motion.div>

          {/* Small simple photo — mobile only */}
          <motion.div
            animate={{ opacity: contentIn ? 1 : 0, scale: contentIn ? 1 : 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:hidden mt-12 w-32 h-32 rounded-full overflow-hidden border border-border"
          >
            <img src={profileImg} alt={profile.name} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-text-dim hover:text-accent transition-colors animate-bounce z-10"
        aria-label="Scroll to About"
      >
        <FiArrowDown size={18} />
      </a>
    </section>
  )
}
