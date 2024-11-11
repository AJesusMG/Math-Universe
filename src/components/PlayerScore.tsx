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
    <div>
      <h1>Puntuación de los Jugadores:</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            Jugador {player.id}: {player.score} puntos
          </li>
        ))}
      </ul>
    </div>
  );
}
