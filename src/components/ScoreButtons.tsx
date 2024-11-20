import React from "react";
import { Button } from "@nextui-org/react";

type ScoreButtonsProps = {
  onScoreSelect: (score: number) => void;
};

export default function ScoreButtons({ onScoreSelect }: ScoreButtonsProps) {
  type ButtonColor = "primary" | "secondary" | "default" | "success" | "warning" | "danger";

  const scores: { value: number; color: ButtonColor }[] = [
    { value: 250, color: "primary" },
    { value: 400, color: "secondary" },
    { value: 600, color: "secondary" },
    { value: 850, color: "primary" },
    { value: 900, color: "primary" },
    { value: 1000, color: "secondary" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {scores.map((score, index) => (
        <Button
          key={index}
          type="button"
          color={score.color}
          size="lg"
          className="text-lg font-bold"
          onClick={() => onScoreSelect(score.value)} // Llama a la función al hacer clic
        >
          {score.value}
        </Button>
      ))}
    </div>
  );
}
