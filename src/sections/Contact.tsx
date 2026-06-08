import Section from '../components/Section'
import { profile } from '../data/profile'

export default function Contact() {
  const { email, location, linkedin, github, phone } = profile.contact

  const links = [
    email && { label: 'Email', value: email, href: `mailto:${email}` },
    phone && { label: 'Phone', value: phone, href: `tel:${phone}` },
    linkedin && { label: 'LinkedIn', value: 'in/trungkien1718', href: linkedin },
    github && { label: 'GitHub', value: github, href: github },
  ].filter(Boolean) as { label: string; value: string; href: string }[]

  return (
    <Section id="contact" tone="beige">
      <p className="eyebrow">05 — Say hello</p>
      <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', margin: '0.5rem 0 1.5rem' }}>
        Let&apos;s work <span className="accent">together</span>.
      </h2>
      {location && (
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>{location}</p>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            style={{ borderBottom: '2px solid var(--gold)', paddingBottom: 4 }}
          >
            <div style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              {l.label}
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>{l.value}</div>
          </a>
        ))}
      </div>
    </Section>
  )
}
