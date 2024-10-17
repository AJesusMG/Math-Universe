'use client'

import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NoJugadores() {
  const [numJugadores, setNumJugadores] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(numJugadores) > 0) {
      router.push(`/rolldice?numJugadores=${numJugadores}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 items-center justify-center"
    >
      <Input
        type="number"
        label="Ingresa la cantidad total de jugadores"
        variant="bordered"
        color="secondary"
        className="max-w-sm"
        value={numJugadores}
        onChange={(e) => setNumJugadores(e.target.value)}
      />
      <Button type="submit" color="primary" size="lg" className="text-xl">
        Comenzar juego!
      </Button>
    </form>
  );
}
