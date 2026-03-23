import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./Contact.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const headingRef = useRef(null);
  const subRef = useScrollAnimation(
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
  );
  const ctaRef = useScrollAnimation(
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)" },
    { start: "top 85%" },
  );

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <span className={styles.sectionLabel}>04 / Contact</span>

        <div className={styles.headingWrap}>
          <h2 ref={headingRef} className={styles.heading}>
            Leat's build
            <br />
            something
            <br />
            <span className={styles.outlineText}>remarkable.</span>
          </h2>
        </div>

        <div ref={subRef} className={styles.sub}>
          <p>
            We take on a limited number of projects each quarter.
            <br />
            If your timeline aligns, we'd love to hear from you.
          </p>
        </div>

        <div ref={ctaRef} className={styles.cta}>
          <a
            href="mailto:hello@landing-page.studio"
            className={styles.ctaButton}
          >
            <span>Start a project</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className={styles.socials}>
            {["Twitter", "Dribbble", "LinkedIn"].map((s) => (
              <a key={s} href="#" className={styles.socialLink}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className={styles.footer}>
        <span>© 2024 Design Studio</span>
        <span>Cairo, Egypt</span>
      </footer>
    </section>
  );
}
