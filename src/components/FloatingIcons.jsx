import { motion, useTransform } from 'framer-motion'
import {
  SiPython,
  SiReact,
  SiTypescript,
  SiFastapi,
  SiHuggingface,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiTensorflow,
} from 'react-icons/si'

const icons = [
  { Icon: SiPython, top: '6%', left: '3%', speed: 0.5, duration: 6, delay: 0, tone: 'accent' },
  { Icon: SiReact, top: '12%', left: '95%', speed: 0.8, duration: 7, delay: 0.4, tone: 'accent-2' },
  { Icon: SiHuggingface, top: '46%', left: '1%', speed: 0.35, duration: 5.5, delay: 1, tone: 'accent' },
  { Icon: SiTypescript, top: '60%', left: '97%', speed: 0.6, duration: 6.5, delay: 0.7, tone: 'accent-2' },
  { Icon: SiFastapi, top: '78%', left: '5%', speed: 0.45, duration: 5, delay: 1.4, tone: 'accent' },
  { Icon: SiDocker, top: '86%', left: '90%', speed: 0.7, duration: 6.2, delay: 0.2, tone: 'accent-2' },
  { Icon: SiGit, top: '28%', left: '99%', speed: 0.55, duration: 5.8, delay: 1.7, tone: 'accent' },
  { Icon: SiTailwindcss, top: '94%', left: '45%', speed: 0.4, duration: 6.8, delay: 0.9, tone: 'accent-2' },
  { Icon: SiTensorflow, top: '34%', left: '8%', speed: 0.65, duration: 6.3, delay: 1.1, tone: 'accent' },
]

const toneStyles = {
  accent: {
    border: 'border-accent/40',
    text: 'text-accent',
    shadow: '0 0 16px -2px rgba(255, 122, 69, 0.55)',
  },
  'accent-2': {
    border: 'border-accent-2/40',
    text: 'text-accent-2',
    shadow: '0 0 16px -2px rgba(255, 46, 136, 0.55)',
  },
}

function FloatingIcon({ Icon, top, left, speed, duration, delay, tone, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -260 * speed])
  const style = toneStyles[tone]

  return (
    <motion.div
      style={{ top, left, y }}
      className="hidden lg:block absolute pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
        style={{ boxShadow: style.shadow }}
        className={`w-12 h-12 rounded-full border ${style.border} bg-surface/80 backdrop-blur-sm flex items-center justify-center ${style.text}`}
      >
        <Icon size={20} />
      </motion.div>
    </motion.div>
  )
}

export default function FloatingIcons({ scrollYProgress }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {icons.map((cfg, i) => (
        <FloatingIcon key={i} {...cfg} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  )
}
