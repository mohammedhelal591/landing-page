import {
  useScrollAnimation,
  useStaggerAnimation,
  useParallax,
} from "../../hooks/useScrollAnimation";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "Deep immersion into your brand, audience, and goals. We ask uncomfortable questions.",
  },
  {
    number: "02",
    title: "Define",
    desc: "Distilling research into a clear create direction. Strategy before aesthetics.",
  },
  {
    number: "03",
    title: "Design",
    desc: "Crafting interfaces where every detail earns its place. Iterative, obsessive.",
  },
  {
    number: "04",
    title: "Deliver",
    desc: "Pixel-perfect implemenation with performance built in, not bolted on.",
  },
];

export default function Process() {
  const headingRef = useScrollAnimation(
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  );
  const stepsRef = useStaggerAnimation(".stagger-item", -0.18);
  const bgRef = useParallax(20);

  return (
    <section id="process" className={styles.process}>
      <div ref={bgRef} className={styles.bg} />

      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <span className={styles.sectionLabel}>03 / Process</span>
          <h2 ref={headingRef} className={styles.heading}>
            How we
            <br />
            <em>work</em>
          </h2>
        </div>

        <div ref={stepsRef} className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={`${styles.step} stagger-item`}>
              <span className={styles.stepNumber}>{step.number}</span>
              <div className={styles.stepDivider} />
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.decorText} aria-hidden="true">
          PROCESS
        </div>
      </div>
    </section>
  );
}
