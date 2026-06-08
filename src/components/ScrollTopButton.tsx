import { useEffect, useState } from 'react'

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const root = document.getElementById('root')
    if (!root) return
    const onScroll = () => setVisible(root.scrollTop > window.innerHeight * 0.5)
    root.addEventListener('scroll', onScroll)
    onScroll()
    return () => root.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    document.getElementById('root')?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={toTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      style={{
        position: 'fixed',
        right: 'clamp(1rem, 3vw, 2rem)',
        bottom: 'clamp(1rem, 3vw, 2rem)',
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '1px solid var(--black)',
        background: 'var(--gold)',
        color: 'var(--black)',
        fontSize: '1.2rem',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        opacity: visible ? 0.6 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        zIndex: 60,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
    >
      ↑
    </button>
  )
}
