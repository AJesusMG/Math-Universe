'use client'

import React, { useEffect, useRef } from 'react';
import { Button } from '@nextui-org/react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

export default function ScoreBars() {
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(bar1Ref.current, { scaleY: 0 }, { scaleY: 1, height: '25vh', duration: 1.5, ease: 'power4.out' });
    tl.fromTo(bar2Ref.current, { scaleY: 0 }, { scaleY: 1, height: '50vh', duration: 1.5, ease: 'power4.out' }, '-=1');
    tl.fromTo(bar3Ref.current, { scaleY: 0 }, { scaleY: 1, height: '15vh', duration: 1.5, ease: 'power4.out' }, '-=1');
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <Button
        color="primary"
        size="lg"
        className="text-xl py-8"
        onClick={() => router.push('/no-players')}
      >
        Volver a Jugar
      </Button>
      <div className="flex w-full justify-center items-end h-full">
        <div className="flex flex-col items-center w-1/3">
          <span className="mb-2 font-bold text-text">Jugador 2</span>
          <div
            ref={bar1Ref}
            className="bg-secondary w-full transform origin-bottom text-white text-lg flex items-center justify-center p-2"
          >
            50 pts
          </div>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <span className="mb-2 font-bold text-text">Jugador 1</span>
          <div
            ref={bar2Ref}
            className="bg-primary-500 w-full transform origin-bottom text-white text-lg flex items-center justify-center p-2"
          >
            100 pts
          </div>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <span className="mb-2 font-bold text-text">Jugador 3</span>
          <div
            ref={bar3Ref}
            className="bg-accent w-full transform origin-bottom text-white text-lg flex items-center justify-center p-2"
          >
            30 pts
          </div>
        </div>
      </div>
    </div>
  );
}
