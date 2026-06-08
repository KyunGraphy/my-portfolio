import Section from '../components/Section'
import { profile } from '../data/profile'
import introImg from '../assets/intro.jpeg'

export default function Introduction() {
  const { heading, body } = profile.intro

  const background = (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <img
        src={introImg}
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '62%',
          objectFit: 'cover',
          opacity: 0.85,
          // fade the LEFT edge of the image into the beige background
          maskImage:
            'linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 95%)',
          WebkitMaskImage:
            'linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 95%)',
        }}
      />
    </div>
  )

  return (
    <Section id="intro" tone="beige" background={background}>
      <p className="eyebrow">01 — About</p>
      <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', margin: '0.5rem 0 1.5rem' }}>
        {heading}
      </h2>
      <p
        style={{
          maxWidth: 640,
          fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
          lineHeight: 1.5,
          whiteSpace: 'pre-line',
        }}
      >
        {body}
      </p>
    </Section>
  )
}
