'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '@nextui-org/react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

interface Player {
  id: number;
  score: number;
}

interface ScoreBarsProps {
  players?: Player[]; // Hacer que players sea opcional
}

export default function ScoreBars({ players }: ScoreBarsProps) {
  const barRefs = useRef<(HTMLDivElement | null)[]>([]); // Referencias a las barras de puntuación
  const router = useRouter();

  useEffect(() => {
    if (!players || players.length === 0) return; // No ejecutar la animación si no hay jugadores

    const tl = gsap.timeline();

    // Limitar la altura máxima de las barras
    const maxBarHeight = 70; // Límite en vh

    players.forEach((player, index) => {
      const barRef = barRefs.current[index];
      if (barRef) {
        tl.fromTo(
          barRef,
          { scaleY: 0 },
          {
            scaleY: 1,
            height: `${Math.min(player.score / 10, maxBarHeight)}vh`, // Aplica el límite
            duration: 1.5,
            ease: 'power4.out',
          }
        );
      }
    });
  }, [players]); // Vuelve a ejecutar si players cambia

  const handleResetGame = () => {
    localStorage.removeItem('players');
    localStorage.removeItem('scoreWinner');
    localStorage.removeItem('selectedDifficulty');
    router.push('/no-players');
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <Button
        color="primary"
        size="lg"
        className="text-xl py-8"
        onClick={handleResetGame} // Llamar a la función para reiniciar el juego
      >
        Volver a Jugar
      </Button>
      <div className="flex w-full justify-center items-end h-full">
        {(!players || players.length === 0) ? (
          // Mostrar mensaje si no hay jugadores
          <p className="text-center text-lg font-semibold text-gray-500">
            No hay puntuaciones que mostrar.
          </p>
        ) : (
          // Mostrar las barras de puntuación si hay jugadores
          players.map((player, index) => (
            <div key={player.id} className="flex flex-col items-center w-1/3">
              <span className="mb-2 font-bold text-text">Jugador {player.id}</span>
              <div
                ref={(el) => { barRefs.current[index] = el }} // Asignamos la referencia
                className={`w-full transform origin-bottom text-white text-lg flex items-center justify-center p-2 ${
                  player.id === 1 ? 'bg-primary-500' : 
                  player.id === 2 ? 'bg-secondary' : 
                  'bg-accent'
                }`}
              >
                {player.score} pts
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
