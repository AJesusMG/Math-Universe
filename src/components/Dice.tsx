'use client'

import React, { useState } from "react";
import { gsap } from "gsap";

interface DiceProps {
  turnoJugador: number;
}

export default function Dice({ turnoJugador }: DiceProps) {
  const [result, setResult] = useState<number | null>(null);

  const rollDice = () => {
    gsap.to(".dice", {
      rotation: "+=1080", // Gira 3 veces (360 * 3)
      duration: 2, // Aumenta la duración de la animación a 2 segundos
      ease: "power2.inOut",
      onComplete: () => {
        const randomResult = Math.floor(Math.random() * 6) + 1;
        setResult(randomResult);
      },
    });
  };

  const handleClick = () => {
    if (turnoJugador === 1) { // Solo el Jugador 1 puede lanzar
      setResult(null); // Reiniciar el resultado
      rollDice();
    }
  };

  return (
    <div className="flex flex-col items-center gap-16">
      <div
        className="dice w-24 h-24 bg-gradient-to-br from-primary-600 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={handleClick}
      >
        {result || "🎲"}
      </div>
      {result && (
        <div className="mt-4 text-center text-xl font-light text-gray-800">
          Jugador {turnoJugador} - {result} ejercicios
        </div>
      )}
    </div>
  );
}
