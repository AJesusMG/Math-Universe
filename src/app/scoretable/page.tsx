'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PlayerScore from "@/components/PlayerScore";

interface PageProps {
  searchParams: { 
    turnoJugador?: string; 
    numJugadores?: string; 
  };
}

interface Player {
  id: number;
  score: number;
}

export default function Page({ searchParams }: PageProps) {
  const router = useRouter();
  const numJugadores = parseInt(searchParams.numJugadores || "9", 10);
  const turnoJugador = parseInt(searchParams.turnoJugador || "1", 10);

  const [players, setPlayers] = useState<Player[]>(() => {
    const savedPlayers = localStorage.getItem("players");
    return savedPlayers 
      ? JSON.parse(savedPlayers) 
      : Array.from({ length: numJugadores }, (_, i) => ({ id: i + 1, score: 0 }));
  });

  // Obtener el puntaje objetivo (scoreWinner) del localStorage
  const [scoreWinner, setScoreWinner] = useState<number | null>(null);

  useEffect(() => {
    // Obtener el puntaje objetivo desde localStorage y convertirlo a número
    const scoreConfig = localStorage.getItem("scoreWinner");
    if (scoreConfig) {
      setScoreWinner(Number(scoreConfig)); // Convertir el valor a número
    } else {
      setScoreWinner(1000); // Valor por defecto si no se encuentra en localStorage
    }
  }, []);

  useEffect(() => {
    // Redirigir a rolldice después de 10 segundos para que el siguiente jugador tenga su turno
    const timer = setTimeout(() => {
      router.push(`/rolldice?turnoJugador=${turnoJugador}&numJugadores=${numJugadores}`);
    }, 10000); // 10 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, [turnoJugador, numJugadores, router]);

  return (
    <div className="flex flex-col w-full min-h-full gap-16 sm:gap-8 px-4">
      <div className="flex w-full h-full items-center justify-center">
        <PlayerScore players={players} scoreWinner={scoreWinner || 1000} />
      </div>
    </div>
  );
}
