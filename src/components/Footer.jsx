import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs uppercase tracking-widest text-text-dim">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="link-underline hover:text-accent transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
