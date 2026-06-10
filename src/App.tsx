import { useEffect } from 'react'
import NavDots from './components/NavDots'
import ScrollTopButton from './components/ScrollTopButton'
import Cover from './sections/Cover'
import Introduction from './sections/Introduction'
import SkillsEducation from './sections/SkillsEducation'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import CodeforceVinaResales from './sections/CodeforceVinaResales'
import UniversityActivities from './sections/UniversityActivities'
import Interests from './sections/Interests'
import Contact from './sections/Contact'

export default function App() {
  // Arrow / Page keys move between full-screen slides
  useEffect(() => {
    const root = document.getElementById('root')
    if (!root) return

    const onKey = (e: KeyboardEvent) => {
      const next = ['ArrowRight', 'ArrowDown', 'PageDown'].includes(e.key)
      const prev = ['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)
      if (!next && !prev) return

      // Ignore while typing or when a modal/overlay is open
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return
      if (document.querySelector('[data-modal-open]')) return

      const sections = Array.from(document.querySelectorAll<HTMLElement>('.section'))
      if (!sections.length) return

      e.preventDefault()
      const h = root.clientHeight
      const current = Math.round(root.scrollTop / h)
      const target = next
        ? Math.min(current + 1, sections.length - 1)
        : Math.max(current - 1, 0)
      sections[target].scrollIntoView({ behavior: 'smooth' })
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <NavDots />
      <Cover />
      <Introduction />
      <SkillsEducation />
      <Experience />
      <Projects />
      <CodeforceVinaResales />
      <UniversityActivities />
      <Interests />
      <Contact />
      <ScrollTopButton />
    </>
  )
}
