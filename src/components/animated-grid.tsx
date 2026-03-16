"use client";
import { useEffect, useId, useRef, useState } from "react";

interface AnimatedGridProps {
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  className?: string;
  color?: string;
}

function AnimatedGrid({ numSquares = 30, maxOpacity = 0.08, duration = 4, className = "", color = "currentColor" }: AnimatedGridProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const size = 40;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setDims({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const squares = Array.from({ length: numSquares }, (_, i) => ({
    x: Math.floor(Math.random() * (dims.w / size)) * size,
    y: Math.floor(Math.random() * (dims.h / size)) * size,
    delay: Math.random() * duration,
  }));

  return (
    <svg ref={containerRef} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}>
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <path d={`M.5 ${size}V.5H${size}`} fill="none" stroke={color} strokeOpacity={0.06} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {dims.w > 0 && squares.map((sq, i) => (
        <rect key={i} x={sq.x} y={sq.y} width={size - 1} height={size - 1} fill={color} opacity={0} style={{ animation: `grid-pulse ${duration}s ${sq.delay}s ease-in-out infinite` }} />
      ))}
    </svg>
  );
}

export { AnimatedGrid };
export default AnimatedGrid;
