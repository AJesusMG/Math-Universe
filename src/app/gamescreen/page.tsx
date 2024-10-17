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
    <div className="flex flex-col w-full h-full gap-16">
      <div className="flex w-full h-full items-center justify-center">
        <RolltheDice turnoJugador={turnoJugador} />
      </div>
      <div className="flex w-full h-full justify-center items-center">
        <CardExercise/>
      </div>
      <footer className="flex w-full h-full justify-end">
        <ButtonModal/>
      </footer>
    </div>
  )
}