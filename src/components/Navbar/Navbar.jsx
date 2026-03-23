import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -80 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.5 },
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 100) {
        gsap.to(navRef.current, { y: -80, duration: 0.4, ease: "power2.in" });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav ref={navRef} className={styles.nav}>
      <div className={styles.logo}>Design</div>
      <ul className={styles.links}>
        {["about", "work", "process", "contact"].map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => scrollTo(item)}
              className={styles.link}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
