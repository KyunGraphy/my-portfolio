import Section from '../components/Section'
import { profile } from '../data/profile'
import profileImg from '../assets/profile.jpeg'

export default function Cover() {
  const { name, nickname, role, tagline } = profile.cover
  return (
    <Section id="cover" tone="dark">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 'clamp(2.5rem, 8vw, 7rem)',
        }}
      >
        {/* Text */}
        <div style={{ flex: '1 1 360px', minWidth: 300 }}>
          <p className="eyebrow">Portfolio</p>
          <h1
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
              fontWeight: 800,
              margin: '0.5rem 0',
            }}
          >
            {name}
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
            aka <span className="accent">{nickname}</span>
          </p>
          <h2
            className="accent"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 700 }}
          >
            {role}
          </h2>
          <p
            style={{
              marginTop: '1.5rem',
              maxWidth: 540,
              fontSize: '0.98rem',
              lineHeight: 1.55,
              whiteSpace: 'pre-line',
              color: 'var(--muted)',
            }}
          >
            {tagline}
          </p>
        </div>

        {/* Portrait */}
        <div style={{ flex: '1 1 320px', minWidth: 280, display: 'flex', justifyContent: 'center' }}>
          <img
            src={profileImg}
            alt={name}
            style={{
              width: '100%',
              maxWidth: 420,
              aspectRatio: '4 / 5',
              objectFit: 'cover',
              borderRadius: 16,
              border: '1px solid var(--gold)',
            }}
          />
        </div>
      </div>

      <p
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: 'var(--section-pad)',
          fontSize: '0.8rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}
      >
        Scroll ↓
      </p>
    </Section>
  )
}
