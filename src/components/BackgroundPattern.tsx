"use client";

import { memo } from "react";

type Props = {
  className?: string;
  size?: number; // grid cell size in px
  colorOpacity?: number; // opacity for the grid color 0..1
};

// Full-viewport grid background using CSS gradients.
// Colors are derived from the existing design tokens: --background and --border.
const BackgroundPattern = memo(function BackgroundPattern({ className, size = 75, colorOpacity = 0.20 }: Props) {
  const gridSize = `${size}px ${size}px`;
  const gridColor = `hsl(var(--border) / ${colorOpacity})`;
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-0 ${className ?? ""}`}
      style={{
        backgroundImage: `linear-gradient(0deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent)`,
        backgroundSize: gridSize,
      }}
    />
  );
});

export default BackgroundPattern;


