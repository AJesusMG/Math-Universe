'use client'
import ButtonModal from "@/components/ButtonModal";
import CardExercise from "@/components/CardExercise";
import RolltheDice from "@/components/RolltheDice";
import React, { useState, useEffect } from "react";
import { useGameTurn } from "@/hooks/useGameTurn";
import { useRouter } from 'next/navigation';

interface PageProps {
  searchParams: { 
    turnoJugador?: string; 
    numJugadores?: string; 
    exercises?: string; 
  };
}

interface Player {
  id: number;
  score: number;
}

export default function Page({ searchParams }: PageProps) {
  const router = useRouter();
  const numJugadores = parseInt(searchParams.numJugadores || "9", 10);
  const initialTurnoJugador = parseInt(searchParams.turnoJugador || "1", 10);
  const numQuestions = parseInt(searchParams.exercises || "0", 10);

  const { turnoJugadorRetornado, nextTurno } = useGameTurn(initialTurnoJugador, numJugadores);

  const [players, setPlayers] = useState<Player[]>(() => {
    const savedPlayers = localStorage.getItem("players");
    return savedPlayers 
      ? JSON.parse(savedPlayers) 
      : Array.from({ length: numJugadores }, (_, i) => ({ id: i + 1, score: 0 }));
  });

  const [currentPoints, setCurrentPoints] = useState<number | null>(null);
  const [scoreMessage, setScoreMessage] = useState<string>("");

  const handlePointsCalculated = (points: number) => {
    setCurrentPoints(points);
    setScoreMessage(`El puntaje resultante se le va a asignar al jugador ${turnoJugadorRetornado}`);
  };

  useEffect(() => {
    if (currentPoints !== null) {
      let playerIndex;
  
      // Ajustamos el turno del jugador para corregir el desfase en la asignación de puntaje
      const adjustedTurnoJugador = turnoJugadorRetornado === 1 ? numJugadores : turnoJugadorRetornado - 1;
  
      if (numJugadores === 2) {
        playerIndex = adjustedTurnoJugador === 1 ? 0 : 1;
      } else {
        playerIndex = (adjustedTurnoJugador - 1 + numJugadores) % numJugadores;
      }
  
      if (playerIndex >= 0 && playerIndex < players.length) {
        const updatedPlayers = [...players];
        updatedPlayers[playerIndex].score += currentPoints;
  
        // Guardamos los jugadores actualizados en localStorage y el estado
        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        setPlayers(updatedPlayers);
  
        // Reset del puntaje calculado
        setCurrentPoints(null);
        setScoreMessage("");
  
        // Redirige a la página de puntuaciones con el turno actual del jugador
        router.push(`/scoretable?turnoJugador=${turnoJugadorRetornado}&numJugadores=${numJugadores}`);
      }
    }
  }, [turnoJugadorRetornado, currentPoints, players, numJugadores, router]);
  
  return (
    <div className="flex flex-col w-full min-h-screen gap-16 sm:gap-8 px-4">
      <div className="flex w-full h-full items-center justify-center">
        <RolltheDice turnoJugador={turnoJugadorRetornado} numJugadores={numJugadores} />
      </div>
      <div className="flex w-full h-full justify-center items-center">
        <CardExercise 
          turnoJugador={turnoJugadorRetornado} 
          numJugadores={numJugadores} 
          numQuestions={numQuestions} 
          onNextTurn={nextTurno} 
          onPointsCalculated={handlePointsCalculated}
        />
      </div>
      {scoreMessage && (
        <h1 className="text-xl text-center">{scoreMessage}</h1>
      )}
      <footer className="flex w-full h-full justify-end">
        <ButtonModal />
      </footer>
    </div>
  );
}
