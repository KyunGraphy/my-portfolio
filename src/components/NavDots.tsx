import { useEffect, useState } from 'react'

const sections = [
  { id: 'cover', label: 'Cover' },
  { id: 'intro', label: 'Introduction' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'resales-online', label: 'Codeforcevina — Resales Online' },
  { id: 'activities', label: 'University Activities' },
  { id: 'interests', label: 'My Interests' },
  { id: 'contact', label: 'Contact' },
]

export default function NavDots() {
  const [active, setActive] = useState('cover')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.6 },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        right: 'clamp(0.75rem, 2vw, 1.5rem)',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        zIndex: 50,
      }}
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={s.label}
          title={s.label}
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: active === s.id ? 'var(--gold)' : 'transparent',
            border: `1.5px solid ${active === s.id ? 'var(--gold)' : 'var(--muted)'}`,
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </nav>
  )
}
