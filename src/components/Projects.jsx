import SectionHeading from './SectionHeading'
import ProjectAccordion from './ProjectAccordion'

export default function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-10 py-24 sm:py-32 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        subtitle="A selection of AI and full-stack projects, from RAG pipelines to computer vision systems. Click a project to expand it."
      />

      <ProjectAccordion />
    </section>
  )
}
