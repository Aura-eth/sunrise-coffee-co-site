"use client";

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children: React.ReactNode;
}

function ShineBorder({ borderRadius = 8, borderWidth = 1, duration = 14, color = "#000", className = "", children }: ShineBorderProps) {
  const colorStr = Array.isArray(color) ? color.join(",") : color;
  return (
    <div className={`shine-border-wrapper ${className}`} style={{ "--sb-radius": `${borderRadius}px`, "--sb-width": `${borderWidth}px`, "--sb-duration": `${duration}s`, "--sb-gradient": `radial-gradient(transparent, transparent, ${colorStr}, transparent, transparent)` } as React.CSSProperties}>
      {children}
    </div>
  );
}

export { ShineBorder };
export default ShineBorder;
