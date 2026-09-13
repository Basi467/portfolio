import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import FeaturedProject from './FeaturedProject'
import { projects, spotlightProjects } from '../data/portfolio'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-border bg-surface p-7 flex flex-col h-full overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan/10 to-violet/10 pointer-events-none" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {project.featured && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-bg bg-gradient-to-r from-cyan to-violet px-2 py-0.5 rounded-full">
                Featured
              </span>
            )}
            <span className="text-xs font-mono text-text-dim">{project.year}</span>
          </div>
          <h3 className="text-xl font-semibold text-heading">{project.title}</h3>
          <p className="text-sm text-text-dim mt-1">{project.tagline}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="shrink-0 text-text-dim hover:text-cyan transition-colors text-xl mt-1"
        >
          <FiGithub />
        </a>
      </div>

      <ul className="relative mt-4 space-y-2 text-sm text-text">
        {project.description.map((line, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-cyan mt-1.5 shrink-0">▹</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-text-dim bg-surface-2 border border-border rounded px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:gap-2.5 transition-all w-fit"
          >
            Live Demo <FiArrowUpRight />
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:gap-2.5 transition-all w-fit"
        >
          View on GitHub <FiArrowUpRight />
        </a>
      </div>

      {project.demoNote && (
        <p className="relative mt-3 text-xs text-text-dim italic">{project.demoNote}</p>
      )}
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of AI and full-stack projects, from RAG pipelines to computer vision systems."
        />

        {spotlightProjects.map((project) => (
          <FeaturedProject project={project} key={project.title} />
        ))}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
