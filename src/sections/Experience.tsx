import { motion } from "framer-motion";
import Section from "../components/Section";
import { profile } from "../data/profile";
import expImg from "../assets/experience.jpeg";

const MONTHS = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

/** Convert a period's start ("Apr 2024 – Present") to a sortable number. */
function periodStart(period: string): number {
  const start = period.split("–")[0].trim().toLowerCase();
  const [mon, year] = start.split(/\s+/);
  const m = MONTHS.indexOf(mon.slice(0, 3));
  return Number(year) * 12 + (m === -1 ? 0 : m);
}

export default function Experience() {
  const { experience, achievements } = profile;
  const sortedExperience = [...experience].sort(
    (a, b) => periodStart(b.period) - periodStart(a.period)
  );

  const background = (
    <div
      aria-hidden
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      <img
        src={expImg}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "45%",
          objectFit: "cover",
          opacity: 0.18,
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)",
        }}
      />
    </div>
  );

  return (
    <Section id="experience" tone="beige" background={background}>
      <p className="eyebrow">03 — Track record</p>
      <h2
        style={{ fontSize: "3rem", margin: "0.5rem 0 2rem" }}
      >
        Work Experience &amp; Achievements
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
        {/* Experience timeline */}
        <div style={{ flex: "2 1 420px", minWidth: 300 }}>
          {sortedExperience.map((job) => (
            <motion.div
              key={job.company}
              whileHover={{ scale: 1.035 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                borderLeft: "2px solid var(--gold)",
                paddingLeft: "1.25rem",
                marginBottom: "1.75rem",
                transformOrigin: "left center",
                cursor: "default",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <strong style={{ fontSize: "1.15rem" }}>{job.role}</strong>
                <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                  {job.period}
                </span>
              </div>
              <div className="accent" style={{ marginBottom: "0.15rem" }}>
                {job.company}
              </div>
              <div
                style={{
                  color: "var(--muted)",
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                }}
              >
                {job.location}
              </div>
              <ul style={{ paddingLeft: "1.1rem", lineHeight: 1.6 }}>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div style={{ flex: "1 1 240px", minWidth: 240 }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              marginBottom: "1rem",
              color: "var(--gold)",
            }}
          >
            Achievements
          </h3>
          <ul style={{ paddingLeft: "1.1rem", lineHeight: 1.7 }}>
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
