import React from "react";
import { Button } from "@nextui-org/react";

export default function ScoreButtons() {
  
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
          type="submit"
          color={score.color}
          size="lg"
          className="text-lg font-bold"
        >
          {score.value}
        </Button>
      ))}
    </div>
  );
}
