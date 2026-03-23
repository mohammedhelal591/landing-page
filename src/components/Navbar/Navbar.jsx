import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [active, setActive] = useState("");
  const navRef = useRef(null);

  useEffect(() => {
    const sections = ["about", "work", "process", "contact"];

    const triggers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      return ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => setActive(id),
        onEnterBack: () => setActive(id),
        onLeave: () => {},
        onLeaveBack: () => {},
      });
    });

    // 🔥 force recalculation after everything mounts
    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((t) => t?.kill());
    };
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
          <li key={item} className={`${styles.listItem} `}>
            <button
              type="button"
              onClick={() => scrollTo(item)}
              className={`${styles.link} ${
                active === item ? styles.active : ""
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
