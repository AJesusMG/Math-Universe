// components/RolltheDice.tsx
"use client";

import React from "react";

interface RolltheDiceProps {
  turnoJugador: number;
  numJugadores: number;  
}

export default function RolltheDice({ turnoJugador, numJugadores }: RolltheDiceProps) {
  return (
    <h2 className="text-3xl text-text-900 text-center">
      Turno del <br /> 
      <span className="font-bold text-text-900">Jugador {turnoJugador} de {numJugadores}</span>
    </h2>
  );
}
