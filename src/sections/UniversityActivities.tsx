import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../components/Section'
import { profile } from '../data/profile'
import actTeaching from '../assets/act-teaching.jpg'
import actAmbassador from '../assets/act-ambassador.jpg'
import actPass from '../assets/act-pass.jpg'

type Activity = (typeof profile.activities)[number]

// Activity name -> photo
const activityImages: Record<string, string> = {
  'Calculus & Physics Teaching Assistant': actTeaching,
  'IU Ambassador': actAmbassador,
  'PASS Community': actPass,
}

export default function UniversityActivities() {
  const { activities } = profile
  const [selected, setSelected] = useState<Activity | null>(null)

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <Section id="activities" tone="beige">
      <p className="eyebrow">05 — Beyond the classroom</p>
      <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', margin: '0.5rem 0 2rem' }}>
        University <span className="accent">Activities</span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {activities.map((a) => {
          const img = activityImages[a.name]
          return (
            <div
              key={a.name}
              onClick={() => setSelected(a)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelected(a)
                }
              }}
              style={{
                cursor: 'pointer',
                border: '1px solid var(--muted)',
                borderRadius: 16,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)'
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.borderColor = 'var(--muted)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {img && (
                <img
                  src={img}
                  alt={a.name}
                  style={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              )}
              <div style={{ padding: '1.4rem 1.5rem' }}>
                <div style={{ fontWeight: 700, fontSize: '1.15rem' }}>{a.name}</div>
                <div style={{ color: 'var(--gold)', marginTop: '0.4rem' }}>{a.role}</div>
                {a.period && (
                  <div style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                    {a.period}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal — portaled to body so the fixed backdrop covers the whole viewport */}
      {createPortal(
        <AnimatePresence>
          {selected && (
          <motion.div
            data-modal-open
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0,0,0,0.72)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 880,
                minHeight: '60dvh',
                maxHeight: '88dvh',
                overflowY: 'auto',
                background: 'var(--beige-soft)',
                color: 'var(--ink)',
                borderRadius: 20,
                border: '1px solid var(--gold)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  zIndex: 2,
                  width: '2.4rem',
                  height: '2.4rem',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'rgba(0,0,0,0.55)',
                  color: '#fff',
                  fontSize: '1.2rem',
                  lineHeight: 1,
                }}
              >
                ×
              </button>

              <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '60dvh', alignItems: 'stretch' }}>
                {/* Left: image + title */}
                <div style={{ flex: '1 1 320px', minWidth: 280, display: 'flex', flexDirection: 'column' }}>
                  {activityImages[selected.name] && (
                    <img
                      src={activityImages[selected.name]}
                      alt={selected.name}
                      style={{
                        width: '100%',
                        flex: 1,
                        minHeight: 240,
                        objectFit: 'cover',
                        display: 'block',
                        borderTopLeftRadius: 20,
                      }}
                    />
                  )}
                  <div style={{ padding: '1.5rem 1.75rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>
                      {selected.name}
                    </h3>
                    <div style={{ color: 'var(--gold)', fontWeight: 600, marginTop: '0.35rem' }}>
                      {selected.role}
                      {selected.period ? ` · ${selected.period}` : ''}
                    </div>
                  </div>
                </div>

                {/* Right: skills */}
                <div
                  style={{
                    flex: '1 1 280px',
                    minWidth: 260,
                    padding: '1.75rem',
                    borderLeft: '1px solid rgba(0,0,0,0.12)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.78rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      marginBottom: '0.9rem',
                    }}
                  >
                    Skills I achieved
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.7rem' }}>
                    {selected.skills.map((s) => (
                      <li
                        key={s}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}
                      >
                        <span
                          aria-hidden
                          style={{
                            flex: 'none',
                            width: '1.6rem',
                            height: '1.6rem',
                            borderRadius: '50%',
                            background: 'var(--gold)',
                            color: 'var(--black)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                        <span style={{ fontWeight: 500 }}>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </Section>
  )
}
