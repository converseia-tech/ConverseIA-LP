"use client";
import { useEffect, useRef } from "react";

export const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let points: { x: number; y: number; age: number }[] = [];
    let mouse = { x: 0, y: 0 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      points.push({ x: mouse.x, y: mouse.y, age: 0 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter out old points
      points = points.filter((p) => p.age < 50);

      // Draw trail
      ctx.beginPath();
      if (points.length > 0) {
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          const p = points[i];
          const prevP = points[i - 1];
          
          // Quadratic bezier curve for smoothness
          const cx = (p.x + prevP.x) / 2;
          const cy = (p.y + prevP.y) / 2;
          ctx.quadraticCurveTo(prevP.x, prevP.y, cx, cy);
          
          p.age++;
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      }

      // Style
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(168, 85, 247, 0.5)"); // Purple
      gradient.addColorStop(1, "rgba(236, 72, 153, 0.5)"); // Pink

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(168, 85, 247, 0.5)";
      ctx.stroke();

      // Draw glowing head
      if (points.length > 0) {
        const lastPoint = points[points.length - 1];
        ctx.beginPath();
        ctx.arc(lastPoint.x, lastPoint.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
        
        // Glow
        ctx.beginPath();
        ctx.arc(lastPoint.x, lastPoint.y, 15, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.2)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.7 }}
    />
  );
};
