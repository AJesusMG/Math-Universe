'use client';
import ButtonModal from "@/components/ButtonModal";
import CardExercise from "@/components/CardExercise";
import RolltheDice from "@/components/RolltheDice";
import React, { useState, useEffect } from "react";
import { useGameTurn } from "@/hooks/useGameTurn";
import { useRouter } from "next/navigation";

type Difficulty = "Fácil" | "Intermedio" | "Difícil";

interface PageProps {
  searchParams: { 
    turnoJugador?: string; 
    numJugadores?: string; 
    exercises?: string; 
    selectedDifficulty?: string; 
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
  const [categories, setCategories] = useState<string[]>([]); 
  const validDifficulties: Difficulty[] = ["Fácil", "Intermedio", "Difícil"];

  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(() => {
    const savedDifficulty = localStorage.getItem("selectedDifficulty");
    if (savedDifficulty && validDifficulties.includes(savedDifficulty as Difficulty)) {
      return savedDifficulty as Difficulty;
    }

    if (searchParams.selectedDifficulty && validDifficulties.includes(searchParams.selectedDifficulty as Difficulty)) {
      return searchParams.selectedDifficulty as Difficulty;
    }
    return "Fácil";
  });

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
      const adjustedTurnoJugador = turnoJugadorRetornado === 1 ? numJugadores : turnoJugadorRetornado - 1;

      if (numJugadores === 2) {
        playerIndex = adjustedTurnoJugador === 1 ? 0 : 1;
      } else {
        playerIndex = (adjustedTurnoJugador - 1 + numJugadores) % numJugadores;
      }

      if (playerIndex >= 0 && playerIndex < players.length) {
        const updatedPlayers = [...players];
        updatedPlayers[playerIndex].score += currentPoints;

        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        setPlayers(updatedPlayers);

        setCurrentPoints(null);
        setScoreMessage("");

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
          selectedDifficulty={selectedDifficulty} 
          onNextTurn={nextTurno} 
          onPointsCalculated={handlePointsCalculated}
          onCategoriesExtracted={setCategories} 
        />
      </div>
      {scoreMessage && (
        <h1 className="text-xl text-center">{scoreMessage}</h1>
      )}
      <footer className="flex w-full h-full justify-end">
          <ButtonModal categories={categories} selectedDifficulty={selectedDifficulty} /> 
      </footer>
    </div>
  );
}
