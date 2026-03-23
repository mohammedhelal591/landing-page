import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
        clearProps: "all",
      },
    );
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
    setTimeout(() => ScrollTrigger.refresh(), 600);
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
