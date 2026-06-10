import { motion } from 'framer-motion'
import Section from '../components/Section'
import cfvn1 from '../assets/cfvn-1.jpg'
import cfvn2 from '../assets/cfvn-2.jpg'
import cfvn3 from '../assets/cfvn-3.jpg'
import cfvn4 from '../assets/cfvn-4.jpg'

// Brand colors sampled from the codeforce & resales-online logos
const CODEFORCE_BLUE = '#67c8f3'
const RESALES_RED = '#cc0915'

const gallery = [
  { src: cfvn1, alt: 'Year-end party' },
  { src: cfvn2, alt: 'Team at the office' },
  { src: cfvn3, alt: 'Team dinner' },
  { src: cfvn4, alt: 'Football match' },
]

export default function CodeforceVinaResales() {
  return (
    <Section id="resales-online" tone="beige">
      <p className="eyebrow">05 — Professional work</p>
      <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', margin: '0.5rem 0 2rem' }}>
        Code<span style={{ color: CODEFORCE_BLUE }}>force</span>{' '}
        — <span style={{ color: RESALES_RED }}>Re</span>sales{' '}
        <span style={{ color: RESALES_RED }}>Online</span>
      </h2>

      {/* TODO: text content provided later */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {gallery.map((img) => (
          <motion.div
            key={img.src}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              overflow: 'hidden',
              borderRadius: 16,
              border: '1px solid var(--muted)',
              aspectRatio: '4 / 3',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
