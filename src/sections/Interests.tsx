import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiCode, FiMusic, FiCompass, FiBarChart2 } from "react-icons/fi";
import { TbLanguage, TbBrain, TbBallFootball, TbCamera } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import Section from "../components/Section";
import { profile } from "../data/profile";
import interestsImg from "../assets/interests-camera.jpg";
import interestsImg2 from "../assets/interests-camera-2.jpg";

type Interest = (typeof profile.interests)[number];

// Small decorative balloons, colored from each photo's palette.
// `top/right` anchored near image 1 (top-right), `bottom/left` near image 2.
type Balloon = {
  color: string;
  size: number;
  pos: React.CSSProperties;
  delay: number;
};

const balloons: Balloon[] = [
  // Around image 1 (warm: gold / amber / cream)
  { color: "var(--gold)", size: 18, pos: { top: "6%", right: "30%" }, delay: 0 },
  { color: "#e0b878", size: 12, pos: { top: "3%", right: "12%" }, delay: 0.6 },
  { color: "#efe2c8", size: 10, pos: { top: "22%", right: "6%" }, delay: 1.1 },
  { color: "#caa15a", size: 14, pos: { top: "38%", right: "26%" }, delay: 0.3 },
  // Around image 2 (denim blue / forest green / earth orange / sky gray)
  { color: "#3b5b7a", size: 16, pos: { bottom: "8%", left: "30%" }, delay: 0.9 },
  { color: "#4a7a4f", size: 12, pos: { bottom: "26%", left: "8%" }, delay: 0.2 },
  { color: "#c98a4b", size: 10, pos: { bottom: "4%", left: "14%" }, delay: 1.3 },
  { color: "#9fb0bd", size: 14, pos: { bottom: "40%", left: "26%" }, delay: 0.5 },
];

const interestIcons: Record<string, IconType> = {
  linguistics: TbLanguage,
  music: FiMusic,
  journey: FiCompass,
  ml: TbBrain,
  data: FiBarChart2,
  code: FiCode,
  aws: FaAws,
  sport: TbBallFootball,
  photograph: TbCamera,
};

export default function Interests() {
  const { interests } = profile;
  const [selected, setSelected] = useState<Interest | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const background = (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <img
        src={interestsImg}
        alt=""
        style={{
          position: "absolute",
          top: "clamp(2rem, 8vh, 6rem)",
          right: "clamp(2rem, 6vw, 6rem)",
          width: "clamp(220px, 30vw, 420px)",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.5,
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
        }}
      />
      <img
        src={interestsImg2}
        alt=""
        style={{
          position: "absolute",
          bottom: "clamp(2rem, 8vh, 6rem)",
          left: "clamp(2rem, 6vw, 6rem)",
          width: "clamp(220px, 30vw, 420px)",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.5,
          transform: "scaleX(-1)",
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
        }}
      />
      {balloons.map((b, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3 + b.delay,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: b.size,
            height: b.size,
            borderRadius: "50%",
            background: b.color,
            opacity: 0.65,
            boxShadow: `0 0 ${b.size}px ${b.color}`,
            ...b.pos,
          }}
        />
      ))}
    </div>
  );

  return (
    <Section id="interests" tone="dark" background={background}>
      <p className="eyebrow">07 — Outside work</p>
      <h2
        style={{ fontSize: "clamp(2rem, 6vw, 4rem)", margin: "0.5rem 0 2rem" }}
      >
        My <span className="accent">Interests</span>
      </h2>

      <div className="interests-grid">
        {interests.map((it) => {
          const Icon = interestIcons[it.icon];
          return (
            <div
              key={it.name}
              onClick={() => setSelected(it)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(it);
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
                border: "2px solid var(--gold)",
                borderRadius: 16,
                padding: "1.1rem 1.25rem",
                cursor: "pointer",
                // Gold fills left -> right on hover (same as last-slide icons)
                backgroundImage:
                  "linear-gradient(to right, var(--gold) 50%, transparent 50%)",
                backgroundSize: "200% 100%",
                backgroundPosition: "right center",
                transition: "background-position 0.4s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = "left center";
                e.currentTarget.style.color = "var(--black)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = "right center";
                e.currentTarget.style.color = "inherit";
              }}
            >
              {Icon && <Icon size="1.6rem" aria-hidden />}
              <span style={{ fontWeight: 600 }}>{it.name}</span>
            </div>
          );
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
                position: "fixed",
                inset: 0,
                zIndex: 100,
                background: "rgba(0,0,0,0.72)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5rem",
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 560,
                  maxHeight: "88dvh",
                  overflowY: "auto",
                  background: "var(--beige-soft)",
                  color: "var(--ink)",
                  borderRadius: 20,
                  border: "1px solid var(--gold)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
                  padding: "2rem",
                }}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    width: "2.4rem",
                    height: "2.4rem",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "rgba(0,0,0,0.55)",
                    color: "#fff",
                    fontSize: "1.2rem",
                    lineHeight: 1,
                  }}
                >
                  ×
                </button>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    marginBottom: "1rem",
                  }}
                >
                  {(() => {
                    const Icon = interestIcons[selected.icon];
                    return Icon ? (
                      <Icon size="2rem" color="var(--gold)" aria-hidden />
                    ) : null;
                  })()}
                  <h3
                    style={{ fontSize: "1.6rem", fontWeight: 800, margin: 0 }}
                  >
                    {selected.name}
                  </h3>
                </div>

                {/* TODO: per-item info provided later */}
                <p style={{ lineHeight: 1.7, margin: 0 }}>
                  {selected.description || "More details coming soon."}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </Section>
  );
}
