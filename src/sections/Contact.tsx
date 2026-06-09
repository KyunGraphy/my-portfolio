import type { IconType } from 'react-icons'
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'
import Section from '../components/Section'
import { profile } from '../data/profile'
import profileImg from '../assets/profile.jpeg'

export default function Contact() {
  const { email, location, linkedin, github, phone } = profile.contact

  const links = [
    email && { label: 'Email', icon: FiMail, href: `mailto:${email}` },
    phone && { label: 'Phone', icon: FiPhone, href: `tel:${phone}` },
    linkedin && { label: 'LinkedIn', icon: FiLinkedin, href: linkedin },
    github && { label: 'GitHub', icon: FiGithub, href: github },
  ].filter(Boolean) as { label: string; icon: IconType; href: string }[]

  return (
    <Section
      id="contact"
      tone="beige"
      background={
        <img
          src={profileImg}
          alt={profile.cover.name}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: 'clamp(45%, 50vw, 60%)',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
            // Soft fade on the image's left edge so it blends into the slide
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 28%)',
            maskImage: 'linear-gradient(to right, transparent 0%, #000 28%)',
          }}
        />
      }
    >
      <div style={{ maxWidth: 560 }}>
        <p className="eyebrow">07 — Contact me</p>
        <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', margin: '0.5rem 0 1.5rem' }}>
          Let&apos;s work <span className="accent">together</span>.
        </h2>
        {location && (
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>{location}</p>
        )}

        <div className="contact-links">
          {links.map((l) => {
          const Icon = l.icon
          return (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              title={l.label}
              aria-label={l.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                border: '2px solid var(--gold)',
                // Gold fills from left to right on hover via background-position sweep
                backgroundImage:
                  'linear-gradient(to right, var(--gold) 50%, transparent 50%)',
                backgroundSize: '200% 100%',
                backgroundPosition: 'right center',
                transition: 'background-position 0.35s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = 'left center'
                e.currentTarget.style.color = 'var(--black)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = 'right center'
                e.currentTarget.style.color = 'inherit'
              }}
            >
              <Icon size="1.5rem" aria-hidden />
            </a>
          )
        })}
        </div>
      </div>
    </Section>
  )
}
