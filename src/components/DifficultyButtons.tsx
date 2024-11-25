import React from "react";
import { Button } from "@nextui-org/react";

interface DifficultyButtonsProps {
  onDifficultySelect: (difficulty: string) => void;
}

export default function DifficultyButtons({
  onDifficultySelect,
}: DifficultyButtonsProps) {
  // Tipos permitidos para los colores de los botones
  type ButtonColor = "primary" | "secondary" | "danger";

  // Configuración de los botones con textos y colores
  const difficulties: { label: string; color: ButtonColor }[] = [
    { label: "Fácil", color: "danger" },
    { label: "Intermedio", color: "primary" },
    { label: "Difícil", color: "secondary" },
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
          onClick={() => onDifficultySelect(difficulty.label)} 
        >
          {difficulty.label}
        </Button>
      ))}
    </div>
  );
}
