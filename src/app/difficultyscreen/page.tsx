import DifficultyButtons from "@/components/DifficultyButtons";
import NoJugadores from "@/components/NoJugadores";
import ScoreButtons from "@/components/ScoreButtons";
import Image from "next/image";
import React from "react";

export default function Page() {
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
          Escoga la dificultad
        </h1>
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <DifficultyButtons />
        </div>
      </div>
    </div>
  );
}
