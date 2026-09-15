const words = [
  'AI Engineer',
  'Full-Stack Developer',
  'Agentic Systems',
  'RAG Pipelines',
  'Computer Vision',
  'React',
  'FastAPI',
  'OpenAI API',
  'Docker',
]

export default function TechMarquee() {
  const loop = [...words, ...words]

  return (
    <div className="relative border-y border-border py-6 overflow-hidden bg-surface/40">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />
      <div className="flex animate-marquee">
        {loop.map((w, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-text-dim whitespace-nowrap"
          >
            {w} <span className="text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
