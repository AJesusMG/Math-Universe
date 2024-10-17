'use client'

import React, { useEffect } from 'react';
import { gsap } from 'gsap';


const MeteorRain: React.FC = () => {
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
        x: 'random(-200, 1000)',
        y: 'random(-200, -50)',
        opacity: 0,
      },
      {
        x: 'random(-100, 800)',
        y: 'random(300, 600)',
        opacity: 1,
        duration: 'random(0.8, 2)',
        ease: 'power1.in',
        onComplete: () => animateMeteor(meteor),
      }
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {Array.from({ length: 20 }).map(() => (
        <div
          className="meteor absolute w-1 h-8 bg-gradient-to-b from-gray-400 to-transparent opacity-50 transform rotate-45"
        />
      ))}
    </div>
  );
};

export default MeteorRain;
