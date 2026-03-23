import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useScrollAnimation,
  useParallax,
} from "../../hooks/useScrollAnimation";
import styles from "./Work.module.css";

gsap.registerPlugin(ScrollTrigger);

const projcets = [
  {
    id: "01",
    title: "Kestrel Finance",
    category: "Web App · Branding",
    year: "2024",
    color: "#1a1a2e",
    accent: "#4a9eff",
  },
  {
    id: "02",
    title: "Sands Collective",
    category: "E-Commerce · UX",
    year: "2024",
    color: "#1e1a0e",
    accent: "#c8a96e",
  },
  {
    id: "03",
    title: "Velo Studio",
    category: "Identity · Motion",
    year: "2023",
    color: "#0e1a18",
    accent: "#4ecba0",
  },
  {
    id: "04",
    title: "Halcyon Platform",
    category: "SaaS · Design System",
    year: "2023",
    color: "#1a0e1e",
    accent: "#c46ee8",
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const hoverLineRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: index * 0.12,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, [index]);

  const handleMouseEnter = () => {
    gsap.to(hoverLineRef.current, {
      scaleX: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(cardRef.current, { y: -6, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(hoverLineRef.current, {
      scaleX: 0,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(cardRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ "--card-color": project.color, "--card-accent": project.accent }}
    >
      <div className={styles.cardVisual}>
        <div className={styles.cardBg} />
        <span className={styles.cardNumber}>{project.id}</span>
        <div className={styles.cardGlow} />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardMeta}>
          <span className={styles.cardCategory}>{project.category}</span>
          <span className={styles.cardYear}>{project.year}</span>
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <div ref={hoverLineRef} className={styles.hoverLine} />
      </div>
    </div>
  );
}

export default function Work() {
  const headingRef = useScrollAnimation(
    { opacity: 0, x: -60 },
    { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
  );

  const bgRef = useParallax(-15);

  return (
    <section id="work" className={styles.work}>
      <div ref={bgRef} className={styles.bg} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>02 / Selected Work</span>
          <h2 ref={headingRef} className={styles.heading}>
            Recent
            <br />
            <span className={styles.outlineText}>Projects</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {projcets.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
