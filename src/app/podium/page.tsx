'use client'
import React, { useEffect, useState } from "react";
import ScoreBar from "@/components/ScoreBar";

export default function Page() {
  const [players, setPlayers] = useState<{ id: number; score: number }[]>([]);

  useEffect(() => {
    // Obtener datos de jugadores desde localStorage
    const storedPlayers = localStorage.getItem("players");
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 h-screen w-full">
      <header>
        <h1 className="text-3xl font-bold text-text">Podio</h1>
      </header>
      <div className="w-full h-full flex">
        {/* Pasar los datos de los jugadores como props */}
        <ScoreBar players={players} />
      </div>
    </div>
  );
}
