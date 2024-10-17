'use client'

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation"; // Para redirigir al usuario

interface DiceProps {
  turnoJugador: number;
}

export default function Dice({ turnoJugador }: DiceProps) {
  const [result, setResult] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); // Referencia al botón
  const router = useRouter(); // Inicializa el hook de router

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
    if (turnoJugador === 1 && result === null) { // Solo el Jugador 1 puede lanzar y si el dado no ha sido lanzado aún
      rollDice();
    }
  };

  const handleStartGame = () => {
    router.push("/gamescreen"); // Redirige a la página 'gamescreen'
  };

  useEffect(() => {
    if (result !== null && buttonRef.current) {
      // Animar la aparición del botón con gsap
      gsap.fromTo(buttonRef.current, 
        { opacity: 0, scale: 0.5 }, // Estado inicial: transparente y pequeño
        { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" } // Estado final: visible y tamaño original con elasticidad
      );
    }
  }, [result]); // Ejecuta la animación cuando cambia el resultado

  return (
    <div className="flex flex-col items-center gap-16">
      <div
        className={`dice w-24 h-24 bg-gradient-to-br from-primary-600 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl shadow-lg cursor-pointer transform transition-transform duration-300 ${result === null ? 'hover:scale-105' : ''}`}
        onClick={handleClick}
        style={{ pointerEvents: result === null ? 'auto' : 'none' }} // Deshabilitar el dado después de lanzarlo
      >
        {result || "🎲"}
      </div>
      {result && (
        <>
          <div className="mt-4 text-center text-xl font-light text-gray-800">
            Jugador {turnoJugador} - {result} ejercicios
          </div>
          <Button 
            ref={buttonRef} // Asignamos la referencia al botón
            type="submit" 
            color="primary" 
            size="lg" 
            className="text-xl"
            onClick={handleStartGame} // Ejecuta la función para redirigir
          >
            Comenzar juego!
          </Button>
        </>
      )}
    </div>
  );
}
