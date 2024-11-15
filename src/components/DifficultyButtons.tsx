import React from "react";
import { Button } from "@nextui-org/react";

export default function DifficultyButtons() {
  // Tipos permitidos para los colores de los botones
  type ButtonColor = "primary" | "secondary" | "danger";

  // Configuración de los botones con textos y colores
  const difficulties: { label: string; color: ButtonColor }[] = [
    { label: "Fácil", color: "danger" },    // Blanco
    { label: "Intermedio", color: "primary" }, // Azul
    { label: "Difícil", color: "secondary" },  // Gris
  ];

  return (
    <div className="flex flex-col sm:grid-cols-4 gap-4">
      {difficulties.map((difficulty, index) => (
        <Button
          key={index}
          type="submit"
          color={difficulty.color}
          size="lg"
          className="text-lg font-bold"
        >
          {difficulty.label}
        </Button>
      ))}
    </div>
  );
}
