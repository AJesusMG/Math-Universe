// MeteorRain.tsx
'use client'

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function MeteorRain() {
  useEffect(() => {
    const meteors = gsap.utils.toArray<HTMLElement>('.meteor');
    meteors.forEach((meteor) => {
      animateMeteor(meteor);
    });
  }, []);

  const animateMeteor = (meteor: HTMLElement) => {
    gsap.fromTo(
      meteor,
      {
        x: 'random(-200, 1200)',
        y: 'random(-200, -50)',
        opacity: 0,
        scale: 'random(0.4, 0.7)',
        filter: 'brightness(0.5)',
      },
      {
        x: 'random(-200, 1200)',
        y: 'random(600, 800)',
        opacity: 1,
        scale: 'random(0.8, 1.2)',
        filter: 'brightness(2.5)',
        duration: 'random(1.5, 3.5)',
        ease: 'power1.inOut',
        onComplete: () => animateMeteor(meteor),
      }
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className="meteor absolute w-1 h-12 bg-gradient-to-b from-yellow-400 via-red-500 to-transparent opacity-70 transform rotate-45"
          style={{
            transform: `rotate(${Math.random() * 45}deg)`,
            boxShadow: '0 0 8px rgba(255, 215, 0, 0.5)',
          }}
        />
      ))}
    </div>
  );
}
