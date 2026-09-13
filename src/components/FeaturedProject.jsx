import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiPlayCircle, FiClock, FiArrowUpRight } from 'react-icons/fi'

function ComingSoon({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-text-dim">
      <Icon /> {label} <FiClock className="text-xs opacity-60" />
    </span>
  )
}

function VideoShowcase({ videos }) {
  const [active, setActive] = useState(0)
  const current = videos[active]

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2 mb-4">
        {videos.map((v, i) => (
          <button
            key={v.label}
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              i === active
                ? 'bg-gradient-to-r from-cyan to-violet text-bg'
                : 'border border-border text-text-dim hover:text-heading hover:border-cyan'
            }`}
          >
            <FiPlayCircle /> {v.label}
          </button>
        ))}
      </div>

      <div className="relative aspect-video w-full rounded-2xl border border-border bg-surface-2 overflow-hidden">
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

export default function FeaturedProject({ project: p }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative rounded-3xl border border-border bg-surface p-8 sm:p-12 mb-16 overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-violet/10 blur-[100px] pointer-events-none" />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[10px] font-mono uppercase tracking-wider text-bg bg-gradient-to-r from-cyan to-violet px-3 py-1 rounded-full">
            {p.badge || 'Featured Project'}
          </span>
          <span className="text-xs font-mono text-text-dim">{p.year}</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-heading">{p.title}</h3>
        <p className="mt-3 text-lg text-gradient font-medium max-w-3xl">{p.tagline}</p>

        <p className="mt-6 text-text leading-relaxed max-w-3xl">{p.fullDescription}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {p.github ? (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-heading hover:border-cyan hover:text-cyan transition-colors"
            >
              <FiGithub /> View Repo
            </a>
          ) : (
            <ComingSoon icon={FiGithub} label="Repo coming soon" />
          )}

          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-5 py-2.5 text-sm font-semibold text-bg hover:opacity-90 transition-opacity"
            >
              Live Demo <FiArrowUpRight />
            </a>
          )}
        </div>

        {p.demoNote && <p className="mt-3 text-xs text-text-dim italic">{p.demoNote}</p>}

        {p.videos && p.videos.length > 0 && <VideoShowcase videos={p.videos} />}

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {p.highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-border bg-surface-2 p-5 hover:border-cyan/50 transition-colors"
            >
              <h4 className="text-heading font-semibold text-sm flex items-center gap-2">
                <span className="text-cyan">▹</span> {h.title}
              </h4>
              <p className="mt-2 text-sm text-text-dim leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs font-mono text-text-dim uppercase tracking-wider mb-4">
            Tech Stack
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {p.techGroups.map((group) => (
              <div key={group.category}>
                <p className="text-sm text-heading font-medium mb-2">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono text-text-dim bg-surface border border-border rounded px-2 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
