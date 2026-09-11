import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 40
const MAX_DIST = 130
const MOUSE_RADIUS = 140

export default function NodeNetworkBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width = 0
    let height = 0
    let particles = []
    let animationId

    const mouse = { x: -9999, y: -9999 }

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    function initParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function handleMouseLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.hypot(dx, dy)
        if (dist < MOUSE_RADIUS && dist > 0.01) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          p.x += (dx / dist) * force
          p.y += (dy / dist) * force
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < MAX_DIST) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.09 * (1 - dist / MAX_DIST)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = 'rgba(167, 139, 250, 0.5)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(step)
    }

    resize()
    initParticles()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    animationId = requestAnimationFrame(step)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
      aria-hidden="true"
    />
  )
}
