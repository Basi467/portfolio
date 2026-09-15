import { motion } from 'framer-motion'
import { useInViewOnce } from '../hooks/useInViewOnce'

export default function RevealText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.035,
}) {
  const [ref, visible] = useInViewOnce(0.4)
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            animate={{ y: visible ? '0%' : '110%' }}
            transition={{
              duration: 0.7,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
