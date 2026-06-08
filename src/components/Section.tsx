import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  id: string
  children: ReactNode
  /** Alternate background tone per section for rhythm */
  tone?: 'dark' | 'beige'
  /** Optional full-bleed background layer rendered behind content */
  background?: ReactNode
}

const bg: Record<NonNullable<Props['tone']>, string> = {
  dark: 'var(--black)',
  beige: 'var(--beige-soft)',
}

const fg: Record<NonNullable<Props['tone']>, string> = {
  dark: 'var(--beige)',
  beige: 'var(--ink)',
}

export default function Section({ id, children, tone = 'dark', background }: Props) {
  return (
    <section
      id={id}
      className="section"
      style={{ background: bg[tone], color: fg[tone], overflow: 'hidden' }}
    >
      {background}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%', maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
