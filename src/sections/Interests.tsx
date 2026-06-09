import type { IconType } from 'react-icons'
import { FiCode, FiMusic, FiCompass, FiBarChart2 } from 'react-icons/fi'
import { TbLanguage, TbBrain, TbBallFootball, TbPresentation } from 'react-icons/tb'
import { FaAws } from 'react-icons/fa'
import Section from '../components/Section'
import { profile } from '../data/profile'

const interestIcons: Record<string, IconType> = {
  linguistics: TbLanguage,
  music: FiMusic,
  journey: FiCompass,
  ml: TbBrain,
  data: FiBarChart2,
  code: FiCode,
  aws: FaAws,
  sport: TbBallFootball,
  presentation: TbPresentation,
}

export default function Interests() {
  const { interests } = profile
  return (
    <Section id="interests" tone="dark">
      <p className="eyebrow">06 — Outside work</p>
      <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', margin: '0.5rem 0 2rem' }}>
        My <span className="accent">Interests</span>
      </h2>

      <div className="interests-grid">
        {interests.map((it) => {
          const Icon = interestIcons[it.icon]
          return (
            <div
              key={it.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.9rem',
                border: '2px solid var(--gold)',
                borderRadius: 16,
                padding: '1.1rem 1.25rem',
                // Gold fills left -> right on hover (same as last-slide icons)
                backgroundImage:
                  'linear-gradient(to right, var(--gold) 50%, transparent 50%)',
                backgroundSize: '200% 100%',
                backgroundPosition: 'right center',
                transition: 'background-position 0.4s ease, color 0.3s ease',
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
              {Icon && <Icon size="1.6rem" aria-hidden />}
              <span style={{ fontWeight: 600 }}>{it.name}</span>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
