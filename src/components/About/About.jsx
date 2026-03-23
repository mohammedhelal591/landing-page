import {
  useScrollAnimation,
  useParallax,
} from "../../hooks/useScrollAnimation";
import styles from "./About.module.css";

const stats = [
  { value: "08", label: "Years of craft" },
  { value: "140+", label: "Projects shipped" },
  { value: "3", label: "Continents reached" },
];

export default function About() {
  const textRef = useScrollAnimation(
    { opacity: 0, x: -80 },
    { opacity: 1, x: 0, duration: 1.1, ease: "power3.out" },
  );

  const imageRef = useScrollAnimation(
    { opacity: 0, x: 80 },
    { opacity: 1, x: 0, duration: 1.1, ease: "power3.out" },
  );

  const statsRef = useScrollAnimation(
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
    { start: "top 85%" },
  );

  const bgParallaxRef = useParallax(-20);

  return (
    <section id="about" className={styles.about}>
      <div ref={bgParallaxRef} className={styles.bgAccent} />

      <div className={styles.inner}>
        {/* left text column */}
        <div ref={textRef} className={styles.textCol}>
          <span className={styles.sectionLabel}>01 / About</span>
          <h2 className={styles.heading}>
            We turn ideas
            <br />
            into <em>libing</em>
            <br />
            interfaces.
          </h2>
          <p className={styles.body}>
            We are a design-driven studio obsessed with intersection of motion,
            typography, and interaction. We work with founders, brands, and
            agencies who refuse to settle for ordinary.
          </p>
          <p className={styles.body}>
            Every pixel has a reason. Every animation has a purpose. We belive
            digital experiences should feel as good as they look.
          </p>
        </div>

        {/* right visual column */}
        <div ref={imageRef} className={styles.visualCol}>
          <div className={styles.imageBox}>
            <div className={styles.imageFill} />
            <div className={styles.imageOverlay} />
            <span className={styles.imageCaption}>Studio, Cairo</span>
          </div>
        </div>
      </div>

      {/* stats row */}
      <div ref={statsRef} className={styles.statsRow}>
        {stats.map((s, i) => (
          <div key={i} className={`${styles.stat} stagger-item`}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
