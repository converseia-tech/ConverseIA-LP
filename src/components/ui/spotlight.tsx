"use client";
import React, { useEffect, useRef, useState } from "react";

export const Spotlight = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!divRef.current) return;
    
    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    // Check if hovering over an interactive element
    const target = e.target as HTMLElement;
    const isInteractive = 
      target.closest("button") || 
      target.closest("a") || 
      target.closest("[role='button']") ||
      target.tagName === "BUTTON" ||
      target.tagName === "A";

    setOpacity(isInteractive ? 0 : 1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity,
        background: `radial-gradient(80px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.08), transparent 50%)`,
        mixBlendMode: "screen"
      }}
    />
  );
};
