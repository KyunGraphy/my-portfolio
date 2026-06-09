import type { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiGo,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiTypeorm,
} from 'react-icons/si'
import { FaProjectDiagram } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'
import Section from '../components/Section'
import { profile } from '../data/profile'

// Tech skill name -> brand icon. Names match profile.ts skills items.
const skillIcons: Record<string, IconType> = {
  ReactJS: SiReact,
  NextJS: SiNextdotjs,
  'Redux Toolkit': SiRedux,
  TypeScript: SiTypescript,
  Golang: SiGo,
  Microservices: FaProjectDiagram,
  'RESTful API': TbApi,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  TypeORM: SiTypeorm,
}

const col: React.CSSProperties = { flex: '1 1 260px', minWidth: 260 }
const cardLabel: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.4rem',
  marginBottom: '1rem',
  color: 'var(--gold)',
}

export default function SkillsEducation() {
  const { skills, education, certificates } = profile
  return (
    <Section id="skills" tone="dark">
      <p className="eyebrow">02 — What I bring</p>
      <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', margin: '0.5rem 0 2rem' }}>
        Skills, Education &amp; Certificates
      </h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
        {/* Skills */}
        <div style={{ flex: '1 1 320px', minWidth: 280 }}>
          <h3 style={cardLabel}>Main Skills</h3>
          {skills.map((cat) => (
            <div key={cat.group} style={{ marginBottom: '1.1rem' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '0.5rem',
                }}
              >
                {cat.group}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {cat.items.map((s) => {
                  const Icon = skillIcons[s.name]
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      title={`Learn about ${s.name}`}
                      aria-label={s.name}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        border: '1px solid var(--muted)',
                        borderRadius: 999,
                        padding: '0.35rem 0.8rem',
                        fontSize: '0.85rem',
                        transition: 'border-color 0.25s ease, color 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold)'
                        e.currentTarget.style.color = 'var(--gold)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--muted)'
                        e.currentTarget.style.color = 'inherit'
                      }}
                    >
                      {Icon && <Icon size="1.1em" aria-hidden />}
                      {s.name}
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={col}>
          <h3 style={cardLabel}>Education</h3>
          {education.map((e) => (
            <div key={e.school} style={{ marginBottom: '1rem' }}>
              <div style={{ fontWeight: 600 }}>{e.school}</div>
              <div style={{ color: 'var(--muted)' }}>{e.degree}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                {e.period}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div style={col}>
          <h3 style={cardLabel}>Certificates</h3>
          {certificates.map((c) => (
            <div key={c.name} style={{ marginBottom: '1rem' }}>
              <div style={{ fontWeight: 600 }}>{c.name}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                {c.issuer} · {c.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
