import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-text-dim">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <a href="#top" className="hover:text-cyan transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
