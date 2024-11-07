'use client'
import ButtonModal from "@/components/ButtonModal";
import CardExercise from "@/components/CardExercise";
import RolltheDice from "@/components/RolltheDice";
import React, { useState, useEffect } from "react";
import { useGameTurn } from "@/hooks/useGameTurn";
import PlayerScore from "@/components/PlayerScore";

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
  
      // Invertir turno para manejar el desfase
      const adjustedTurnoJugador = 
        turnoJugadorRetornado === 1 ? numJugadores : turnoJugadorRetornado - 1;
  
      if (numJugadores === 2) {
        // Para 2 jugadores, ajustamos los índices directamente
        playerIndex = adjustedTurnoJugador === 1 ? 0 : 1;
      } else {
        // Cálculo cíclico para más de 2 jugadores
        playerIndex = (adjustedTurnoJugador - 1 + numJugadores) % numJugadores;
      }
  
  
      // Validación del índice
      if (playerIndex >= 0 && playerIndex < players.length) {
        // Actualizar puntajes
        const updatedPlayers = [...players];
        updatedPlayers[playerIndex].score += currentPoints;
  
        // Guardar en localStorage
        localStorage.setItem("players", JSON.stringify(updatedPlayers));
  
        // Actualizar estado
        setPlayers(updatedPlayers);
  
        // Resetear estado después de asignar puntos
        setCurrentPoints(null);
        setScoreMessage("");
      } else {
        alert("Índice de jugador fuera de rango.");
      }
  
      
    }
  }, [turnoJugadorRetornado, currentPoints, players, numJugadores]);  
    
  return (
    <div className="flex flex-col w-full h-full gap-16">
      <div className="flex w-full h-full items-center justify-center">
        <RolltheDice turnoJugador={turnoJugadorRetornado} numJugadores={numJugadores} />
      </div>
      <div className="flex w-full h-full items-center justify-center">
        <PlayerScore players={players} />
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
