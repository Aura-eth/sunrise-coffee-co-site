"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

function FadeInUp({ children, delay = 0, className = "" }: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) setTimeout(() => setVisible(true), delay);
          else setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => { observer.unobserve(element); };
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in-up ${visible ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export { FadeInUp };
export default FadeInUp;
