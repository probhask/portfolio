"use client";
import { SkillsData } from "@/data/skills";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface IconPosition {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const FloatingIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<IconPosition[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Initialize positions with random values
    const initialPositions = SkillsData.map(() => ({
      x: Math.random() * (containerWidth - 100),
      y: Math.random() * (containerHeight - 100),
      vx: (Math.random() - 0.5) * 2, // Faster random velocity
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 30 + 30,
    }));

    setPositions(initialPositions);

    const animate = () => {
      setPositions((prevPositions) => {
        if (!containerRef.current) return prevPositions;
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        // First calculate new positions without collisions
        const newPositions = prevPositions.map((icon) => {
          let newX = icon.x + icon.vx;
          let newY = icon.y + icon.vy;
          let newVx = icon.vx;
          let newVy = icon.vy;

          // Bounce off horizontal edges
          if (newX <= 0 || newX >= containerWidth - icon.size) {
            newVx = -newVx * 0.9; // Slightly reduce velocity on bounce
            newX = newX <= 0 ? 0 : containerWidth - icon.size;
          }

          // Bounce off vertical edges
          if (newY <= 0 || newY >= containerHeight - icon.size) {
            newVy = -newVy * 0.9;
            newY = newY <= 0 ? 0 : containerHeight - icon.size;
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        });

        // Then check for collisions between icons
        for (let i = 0; i < newPositions.length; i++) {
          for (let j = i + 1; j < newPositions.length; j++) {
            const icon1 = newPositions[i];
            const icon2 = newPositions[j];

            // Calculate distance between icons
            const dx = icon2.x - icon1.x;
            const dy = icon2.y - icon1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = (icon1.size + icon2.size) / 2;

            // If icons are colliding
            if (distance < minDistance) {
              // Calculate collision normal
              const nx = dx / distance;
              const ny = dy / distance;

              // Calculate relative velocity
              const relativeVx = icon2.vx - icon1.vx;
              const relativeVy = icon2.vy - icon1.vy;

              // Calculate impulse along normal
              const impulse =
                (2 * (relativeVx * nx + relativeVy * ny)) / (1 + 1); // Assuming equal mass

              // Apply bounce effect
              icon1.vx += impulse * nx * 0.8; // 0.8 is coefficient of restitution
              icon1.vy += impulse * ny * 0.8;
              icon2.vx -= impulse * nx * 0.8;
              icon2.vy -= impulse * ny * 0.8;

              // Separate the icons to prevent sticking
              const overlap = minDistance - distance;
              icon1.x -= overlap * nx * 0.5;
              icon1.y -= overlap * ny * 0.5;
              icon2.x += overlap * nx * 0.5;
              icon2.y += overlap * ny * 0.5;
            }
          }
        }

        return newPositions;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {positions.map((icon, index) => (
        <div
          key={index}
          className="absolute transition-transform duration-300 ease-linear will-change-transform"
          style={{
            transform: `translate(${icon.x}px, ${icon.y}px)`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            opacity: 0.2,
          }}
        >
          <Image
            src={SkillsData[index].imageSrc}
            alt={SkillsData[index].title}
            width={icon.size}
            height={icon.size}
            className="object-contain w-full h-full"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
