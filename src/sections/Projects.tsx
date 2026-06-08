import Section from '../components/Section'
import { profile } from '../data/profile'

export default function Projects() {
  const { projects } = profile
  return (
    <Section id="projects" tone="dark">
      <p className="eyebrow">04 — Selected work</p>
      <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', margin: '0.5rem 0 2rem' }}>
        Personal Projects
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link || undefined}
            target={p.link ? '_blank' : undefined}
            rel="noreferrer"
            style={{
              border: '1px solid var(--muted)',
              borderRadius: 14,
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              transition: 'border-color 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--muted)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <h3 style={{ fontSize: '1.25rem' }}>{p.name}</h3>
            <div style={{ color: 'var(--gold)', fontSize: '0.78rem', letterSpacing: '0.05em' }}>
              {p.period}
            </div>
            <p style={{ color: 'var(--muted)', flex: 1, fontSize: '0.92rem', lineHeight: 1.45 }}>
              {p.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="accent"
                  style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}
                >
                  #{t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
