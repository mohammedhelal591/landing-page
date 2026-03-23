import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(
  fromVars = { opacity: 0, y: 60 },
  toVars = { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  triggerOptions = {},
) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          toggleActions: "play none none none",
          ...triggerOptions,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useStaggerAnimation(
  childSelector = ".stagger-item",
  staggerAmount = 0.15,
) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(childSelector),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: staggerAmount,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useParallax(speed = -30) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElment,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
