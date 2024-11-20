'use client'
import ScoreButtons from "@/components/ScoreButtons";
import Image from "next/image";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const numJugadores = parseInt(searchParams.get("numJugadores") || "9", 10);

  const handleScoreSelect = (score: number) => {
    // Guardar el scoreWinner en localStorage
    localStorage.setItem("scoreWinner", JSON.stringify(score));

    // Redirigir a la pantalla de dificultad con el parámetro numJugadores
    router.push(`/difficultyscreen?numJugadores=${numJugadores}`);
  };

  return (
    <div className="flex flex-col w-full h-screen items-center px-4 gap-8 lg:gap-16">
      {/* Contenedor de la imagen */}
      <div className="flex items-center justify-center w-full mt-12 sm:mt-4">
        <Image
          src="/Logo_3.png"
          width={250}
          height={250}
          alt="Math Universe Logo"
          className="sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
        />
      </div>

      {/* Contenedor del título y del componente ScoreButtons */}
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-text-900 text-center">
          Escoge la puntuación <br /> máxima
        </h1>
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <ScoreButtons onScoreSelect={handleScoreSelect} />
        </div>
      </div>
      <footer className="text-sm text-gray-500 text-center">
        El primer jugador en alcanzar la puntuación establecida será el ganador
      </footer>
    </div>
  );
}
