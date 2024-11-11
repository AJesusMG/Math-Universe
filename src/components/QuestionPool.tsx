// QuestionPool.tsx
import React from "react";

interface Question {
  question: string;
  answer: number;
}

interface QuestionPoolProps {
  numQuestions: number;
}

const questionData = {
  sumas: [
    { question: "¿Cuánto es 2 + 5?", answer: 7 },
    { question: "¿Cuánto es 5 + 3?", answer: 8 },
    { question: "¿Cuánto es 10 + 4?", answer: 14 },
    // Agrega más preguntas
  ],
  restas: [
    { question: "¿Cuánto es 10 - 6?", answer: 4 },
    { question: "¿Cuánto es 15 - 9?", answer: 6 },
    { question: "¿Cuánto es 20 - 7?", answer: 13 },
    // Agrega más preguntas
  ],
  multiplicaciones: [
    { question: "¿Cuánto es 3 * 4?", answer: 12 },
    { question: "¿Cuánto es 5 * 2?", answer: 10 },
    { question: "¿Cuánto es 6 * 7?", answer: 42 },
    // Agrega más preguntas
  ],
  divisiones: [
    { question: "¿Cuánto es 12 / 4?", answer: 3 },
    { question: "¿Cuánto es 20 / 5?", answer: 4 },
    { question: "¿Cuánto es 9 / 3?", answer: 3 },
    // Agrega más preguntas
  ],
};

export default function QuestionPool({ numQuestions }: QuestionPoolProps) {
  const allQuestions = [
    ...questionData.sumas,
    ...questionData.restas,
    ...questionData.multiplicaciones,
    ...questionData.divisiones,
  ];

  // Seleccionar aleatoriamente `numQuestions` de todas las categorías
  const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, numQuestions);

  return shuffledQuestions;
}
