import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Process from "./components/Process/Process";
import Contact from "./components/Contact/Contact";

gsap.registerPlugin(ScrollTrigger);

function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const follower = followerRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMove = (e) => {
      mouseX = e.ClientX;
      mouseY = e.ClientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: "none" });
    };

    const tick = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      gsap.set(follower, { x: followerX, y: followerY });
      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    const rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Process />
        <Contact />
      </main>
    </>
  );
}
