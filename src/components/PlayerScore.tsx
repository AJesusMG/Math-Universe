import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Importamos el router para redirecciones

interface PlayerScoreProps {
  players: { id: number; score: number }[];
}

export default function PlayerScore({ players }: PlayerScoreProps) {
  const router = useRouter();

  useEffect(() => {
    // Verificar si algún jugador alcanza los 1000 puntos
    const winner = players.find((player) => player.score >= 1000);
    if (winner) {
      alert(`¡Jugador ${winner.id} ha alcanzado los 1000 puntos!`);
      router.push("/podium");
    }
  }, [players, router]); // Dependencias: verificamos en cada cambio de los puntajes

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Puntuación de los Jugadores</h1>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 divide-y divide-secondary">
        {players.map((player) => (
          <li
            key={player.id}
            className="flex justify-between items-center py-4 text-lg font-medium"
          >
            <span className="text-accent">Jugador {player.id}</span>
            <span className="text-primary">{player.score} puntos</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
