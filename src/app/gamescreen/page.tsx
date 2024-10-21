import ButtonModal from "@/components/ButtonModal";
import CardExercise from "@/components/CardExercise";
import RolltheDice from "@/components/RolltheDice";
import React from "react";

interface PageProps {
  searchParams: { turnoJugador?: string };
}

export default function Page({ searchParams }: PageProps) {
  const turnoJugador = parseInt(searchParams.turnoJugador || "1", 10);

  return (
    <div className="flex flex-col w-full min-h-screen gap-16 sm:gap-8 px-4">
      {/* Contenedor de RolltheDice */}
      <div className="flex w-full h-full items-center justify-center">
        <RolltheDice turnoJugador={turnoJugador} />
      </div>

      {/* Contenedor de CardExercise */}
      <div className="flex w-full h-full justify-center items-center">
        <CardExercise />
      </div>

      {/* Footer responsivo */}
      <footer className="flex w-full justify-end sm:justify-center items-center mt-4 sm:mt-2">
        <ButtonModal />
      </footer>
    </div>
  );
}
