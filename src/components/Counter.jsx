import { useEffect, useState } from 'react'
import { useInViewOnce } from '../hooks/useInViewOnce'

export default function Counter({ value, suffix = '', duration = 1.2, trigger }) {
  const [ref, inViewAuto] = useInViewOnce(0.3)
  const inView = trigger !== undefined ? trigger : inViewAuto
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const stepMs = 20
    const totalSteps = Math.max(1, Math.round((duration * 1000) / stepMs))
    let count = 0
    const id = setInterval(() => {
      count += 1
      const progress = Math.min(count / totalSteps, 1)
      setDisplay(Math.round(progress * value))
      if (progress >= 1) clearInterval(id)
    }, stepMs)
    return () => clearInterval(id)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
