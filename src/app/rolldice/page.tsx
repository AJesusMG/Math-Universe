import React from "react";
import RolltheDice from "@/components/RolltheDice";
import Dice from "@/components/Dice";

interface PageProps {
  searchParams: { turnoJugador?: string; numJugadores?: string };
}

export default function Page({ searchParams }: PageProps) {
  const turnoJugador = parseInt(searchParams.turnoJugador || "1", 10);
  const numJugadores = parseInt(searchParams.numJugadores || "0", 10); 
  const nextTurno = turnoJugador % numJugadores === 0 ? numJugadores : (turnoJugador % numJugadores) + 1;

  return (
    <div className="flex flex-col w-full min-h-screen gap-16 sm:gap-8 items-center">
      {/* Contenedor de RolltheDice */}
      <div className="flex w-full h-full items-center justify-center">
        <RolltheDice turnoJugador={turnoJugador} numJugadores={numJugadores} />
      </div>

      {/* Texto "Lanza el dado" */}
      <div className="w-full h-full">
        <h1 className="text-2xl sm:text-xl text-center text-text-900">
          Lanza el dado
        </h1>
      </div>
      <div>
        <Dice turnoJugador={turnoJugador} numJugadores={numJugadores}/>
      </div>
      <div className="mt-8 text-center">  
        <p>Siguiente jugador: {nextTurno}</p>
      </div>
    </div>
  );
}
