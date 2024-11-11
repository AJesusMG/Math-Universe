'use client'

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface DiceProps {
  turnoJugador: number;
  numJugadores: number; 
}

export default function RolltheDice({ turnoJugador, numJugadores }: DiceProps) {
  const [result, setResult] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); 
  const router = useRouter(); 

  const [currentTurn, setCurrentTurn] = useState<number>(turnoJugador);

  const rollDice = () => {
    gsap.to(".dice", {
      rotation: "+=1080",
      duration: 3,
      ease: "power2.inOut",
      onComplete: () => {
        const randomResult = Math.floor(Math.random() * 6) + 1;
        setResult(randomResult);
      },
    });
  };

  const handleClick = () => {
    if (currentTurn === turnoJugador && result === null) { 
      rollDice();
    }
  };

  const handleStartGame = () => {
    if (result !== null) {
      // Pasar los valores por query parameters, incluyendo `result`
      router.push(`/gamescreen?numJugadores=${numJugadores}&turnoJugador=${turnoJugador}&exercises=${result}`);
    }
  };

  useEffect(() => {
    if (result !== null && buttonRef.current) {
      gsap.fromTo(buttonRef.current, 
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }
      );
    }
  }, [result]);

  return (
    <div className="flex flex-col items-center gap-16">
      <div
        className={`dice w-24 h-24 bg-gradient-to-br from-primary-600 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl shadow-lg cursor-pointer transform transition-transform duration-300 ${result === null ? 'hover:scale-105' : ''}`}
        onClick={handleClick}
        style={{ pointerEvents: result === null ? 'auto' : 'none' }}
      >
        {result || "🎲"}
      </div>
      {result && (
        <>
          <div className="mt-4 text-center text-xl font-light text-gray-800">
            Jugador {turnoJugador} - {result} ejercicios
          </div>
          <Button 
            ref={buttonRef}
            type="submit"
            color="primary"
            size="lg"
            className="text-xl"
            onClick={handleStartGame}
          >
            Comenzar juego!
          </Button>
        </>
      )}
    </div>
  );
}
