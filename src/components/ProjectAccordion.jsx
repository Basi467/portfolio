import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiArrowUpRight, FiClock } from 'react-icons/fi'
import Counter from './Counter'
import { spotlightProjects, projects } from '../data/portfolio'

const allProjects = [
  ...spotlightProjects.map((p) => ({ ...p, kind: 'spotlight' })),
  ...projects.map((p) => ({ ...p, kind: 'basic' })),
]

function VideoShowcase({ videos }) {
  const [active, setActive] = useState(0)
  const current = videos[active]

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 font-mono text-xs uppercase tracking-widest">
        {videos.map((v, i) => (
          <button
            key={v.label}
            onClick={() => setActive(i)}
            className={`link-underline transition-colors ${
              i === active ? 'text-accent' : 'text-text-dim hover:text-heading'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div className="relative aspect-video w-full rounded-sm border border-accent/25 bg-surface-2 overflow-hidden glow-sm">
        {current.youtubeId ? (
          <iframe
            key={current.youtubeId}
            src={`https://www.youtube.com/embed/${current.youtubeId}`}
            title={current.label}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-text-dim">
            <FiClock className="text-2xl opacity-60" />
            <p className="text-sm">{current.label} coming soon</p>
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectItem({ project: p, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button onClick={onToggle} className="w-full flex items-center gap-4 sm:gap-6 py-8 text-left group">
        <span
          className={`font-serif text-3xl sm:text-4xl w-12 sm:w-14 shrink-0 transition-colors ${
            isOpen ? 'text-accent text-glow' : 'text-accent/20'
          }`}
        >
          {String(index).padStart(2, '0')}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            {p.badge && (
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {p.badge}
              </span>
            )}
            <span className="font-mono text-xs text-text-dim">{p.year}</span>
          </div>
          <h3
            className={`font-serif text-2xl sm:text-3xl mt-1 transition-colors ${
              isOpen ? 'text-accent' : 'text-heading group-hover:text-accent'
            }`}
          >
            {p.title}
          </h3>
          {!isOpen && <p className="text-text-dim mt-1 truncate">{p.tagline}</p>}
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-xl sm:text-2xl text-text-dim group-hover:text-accent transition-colors"
        >
          <FiPlus />
        </motion.span>
      </button>

      <div
        className="overflow-hidden"
        style={{
          maxHeight: isOpen ? '5000px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: isOpen
            ? 'max-height 0.6s cubic-bezier(0.33,1,0.68,1), opacity 0.5s ease'
            : 'max-height 0.5s cubic-bezier(0.33,1,0.68,1), opacity 0.3s ease',
        }}
      >
        <div className="pb-10 pl-0 sm:pl-[4.5rem]">
              <p className="text-lg text-heading/80 max-w-2xl">{p.tagline}</p>

              {p.kind === 'spotlight' ? (
                <p className="mt-4 text-text leading-relaxed max-w-2xl">{p.fullDescription}</p>
              ) : (
                <ul className="mt-4 space-y-2 text-text max-w-2xl">
                  {p.description.map((line, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="text-accent shrink-0">—</span>
                      <span className="text-sm sm:text-base">{line}</span>
                    </li>
                  ))}
                </ul>
              )}

              {p.kind === 'spotlight' && p.stats && (
                <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                  {p.stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-serif text-4xl sm:text-5xl text-accent text-glow">
                        <Counter value={s.value} suffix={s.suffix} trigger={isOpen} />
                      </p>
                      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-text-dim">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noreferrer" className="link-underline text-heading">
                    View Repo
                  </a>
                ) : (
                  <span className="text-text-dim">Repo coming soon</span>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-accent inline-flex items-center gap-1.5"
                  >
                    Live Demo <FiArrowUpRight />
                  </a>
                )}
              </div>

              {p.demoNote && <p className="mt-3 text-xs text-text-dim italic">{p.demoNote}</p>}

              {p.kind === 'spotlight' && p.videos && p.videos.length > 0 && (
                <VideoShowcase videos={p.videos} />
              )}

              {p.kind === 'spotlight' && (
                <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8">
                  {p.highlights.map((h) => (
                    <div key={h.title} className="group">
                      <h4 className="text-heading font-medium group-hover:text-accent transition-colors">
                        {h.title}
                      </h4>
                      <p className="mt-1.5 text-sm text-text-dim leading-relaxed">{h.detail}</p>
                    </div>
                  ))}
                </div>
              )}

              {p.kind === 'spotlight' ? (
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="font-mono text-xs uppercase tracking-widest text-text-dim mb-5">
                    Tech Stack
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
                    {p.techGroups.map((group) => (
                      <div key={group.category}>
                        <p className="text-sm text-heading font-medium mb-1.5">{group.category}</p>
                        <p className="text-sm text-text-dim leading-relaxed">
                          {group.items.join(' / ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="mt-6 text-sm text-text-dim">{p.tech.join(' / ')}</p>
              )}
            </div>
          </div>
    </div>
  )
}

export default function ProjectAccordion() {
  const [openTitles, setOpenTitles] = useState(() => new Set())

  function toggle(title) {
    setOpenTitles((prev) => {
      const next = new Set(prev)
      if (next.has(title)) next.delete(title)
      else next.add(title)
      return next
    })
  }

  return (
    <div>
      {allProjects.map((p, i) => (
        <ProjectItem
          key={p.title}
          project={p}
          index={i + 1}
          isOpen={openTitles.has(p.title)}
          onToggle={() => toggle(p.title)}
        />
      ))}
    </div>
  )
}
