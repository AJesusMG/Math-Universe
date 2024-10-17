// components/RolltheDice.tsx
"use client";

import React from "react";

interface RolltheDiceProps {
  turnoJugador: number;
}

export default function RolltheDice({ turnoJugador }: RolltheDiceProps) {
  return <h2 className="text-3xl text-text-900 text-center">Lanza el dado <br /> <span className="font-bold text-text-900">Jugador {turnoJugador}</span></h2>;
}
