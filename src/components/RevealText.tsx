import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  trigger?: string | HTMLElement;
  stagger?: number;
}

export const RevealText = ({ 
  text, 
  className = "", 
  delay = 0, 
  trigger,
  stagger = 0.05
}: RevealTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll('.char');
    if (!chars) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { 
          y: "100%", 
          rotateX: -90, 
          opacity: 0 
        },
        {
          y: "0%",
          rotateX: 0,
          opacity: 1,
          duration: 1.2,
          stagger: stagger,
          delay: delay,
          ease: "power4.out",
          scrollTrigger: trigger ? {
            trigger: trigger,
            start: "top 85%",
          } : undefined
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay, trigger, stagger]);

  return (
    <div ref={containerRef} className={`flex flex-wrap overflow-hidden perspective-1000 ${className}`}>
      {text.split("").map((char, i) => (
        <span 
          key={i} 
          className="char inline-block origin-bottom will-change-transform"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};
