import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useParallax } from "../../hooks/useScrollAnimation";
import styles from "./Hero.module.css";

export default function Hero() {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const subtitleRef = useRef(null);
  const scrollHintRef = useRef(null);
  const bgRef = useParallax(-25);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      [line1Ref.current, line2Ref.current, line3Ref.current],
      { yPercent: 110, skewY: 4 },
      {
        yPercent: 0,
        skewY: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.12,
      },
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        scrollHintRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
        },
        "-=0.2",
      );
  }, []);

  useEffect(() => {
    gsap.to(scrollHintRef.current, {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.4,
      ease: "power1.inOut",
      delay: 2,
    });
  }, []);

  return (
    <section ref={containerRef} className={styles.hero}>
      <div ref={bgRef} className={styles.bg}>
        <div className={styles.bgGrid} />
        <div className={styles.bgGlow} />
      </div>

      <div className={styles.decorLine} />

      <div className={styles.content}>
        <div className={styles.tagline}>
          <span>Design Studio</span>
          <span className={styles.dot}>.</span>
          <span>Cairo - 2024</span>
        </div>

        <h1 className={styles.heading}>
          <span className={styles.lineWrap}>
            <span ref={line1Ref}>WE CRAFT</span>
          </span>
          <span className={styles.lineWrap}>
            <span ref={line2Ref} className={styles.outlineText}>
              DIGITAL
            </span>
          </span>
          <span className={styles.lineWrap}>
            <span ref={line3Ref}>EXPERIENCES</span>
          </span>
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
          Bridging the space between brand vision
          <br />
          and exceptional user experience.
        </p>
      </div>

      <div ref={scrollHintRef} className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
