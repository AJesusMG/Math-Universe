type Difficulty = "Fácil" | "Intermedio" | "Difícil";

interface Question {
  question: string;
  answer: number;
  category: "sumas" | "restas" | "multiplicaciones" | "divisiones";
}

const questionData: {
  [key in Difficulty]: {
    sumas: Question[];
    restas: Question[];
    multiplicaciones: Question[];
    divisiones: Question[];
  };
} = {
  Fácil: {
    sumas: [
      { question: "¿Cuánto es 2 + (-3)?", answer: -1, category: "sumas" },
      { question: "¿Cuánto es 5 + 2?", answer: 7, category: "sumas" },
      { question: "¿Cuánto es (-4) + 6?", answer: 2, category: "sumas" },
    ],
    restas: [
      { question: "¿Cuánto es 7 - (-3)?", answer: 10, category: "restas" },
      { question: "¿Cuánto es (-8) - 4?", answer: -12, category: "restas" },
    ],
    multiplicaciones: [
      { question: "¿Cuánto es 2 x 3?", answer: 6, category: "multiplicaciones" },
      { question: "¿Cuánto es 4 x 1?", answer: 4, category: "multiplicaciones" },
      { question: "¿Cuánto es (-3) x 2?", answer: -6, category: "multiplicaciones" },
    ],    
    divisiones: [
      { question: "¿Cuánto es 6 ÷ 3?", answer: 2, category: "divisiones" },
      { question: "¿Cuánto es 8 ÷ 2?", answer: 4, category: "divisiones" },
      { question: "¿Cuánto es (-6) ÷ 3?", answer: -2, category: "divisiones" },
    ],    
  },
  Intermedio: {
    sumas: [
      { question: "¿Cuánto es 25 + (-15) + 10?", answer: 20, category: "sumas" },
      { question: "¿Cuánto es (-30) + 50?", answer: 20, category: "sumas" },
      { question: "¿Cuánto es 48 + (-16) + (-8)?", answer: 24, category: "sumas" },
    ],
    restas: [
      { question: "¿Cuánto es 100 - (-25)?", answer: 125, category: "restas" },
      { question: "¿Cuánto es (-50) - (-30)?", answer: -20, category: "restas" },
      { question: "¿Cuánto es 90 - (-10)?", answer: 100, category: "restas" },
    ],
    multiplicaciones: [
      { question: "¿Cuánto es (-4) x 3 x 2?", answer: -24, category: "multiplicaciones" },
      { question: "¿Cuánto es 5 x (-2) x (-3)?", answer: 30, category: "multiplicaciones" },
      { question: "¿Cuánto es (-6) x (-7)?", answer: 42, category: "multiplicaciones" },
    ],
    divisiones: [
      { question: "¿Cuánto es (-144) ÷ 12?", answer: -12, category: "divisiones" },
      { question: "¿Cuánto es 180 ÷ (-9)?", answer: -20, category: "divisiones" },
      { question: "¿Cuánto es (-60) ÷ (-5)?", answer: 12, category: "divisiones" },
    ],
  },
  Difícil: {
    sumas: [
      { question: "¿Cuánto es (-25) + 30 - (-15)?", answer: 70, category: "sumas" },
      { question: "¿Cuánto es 100 + (-50) + (-30)?", answer: 20, category: "sumas" },
      { question: "¿Cuánto es 120 + (-40) - 80?", answer: 0, category: "sumas" },
    ],
    restas: [
      { question: "¿Cuánto es 200 - (-100) + (-50)?", answer: 250, category: "restas" },
      { question: "¿Cuánto es (-300) - (-150)?", answer: -150, category: "restas" },
      { question: "¿Cuánto es (-400) - 200?", answer: -600, category: "restas" },
    ],
    multiplicaciones: [
      { question: "¿Cuánto es (-5) x 4 x (-3)?", answer: 60, category: "multiplicaciones" },
      { question: "¿Cuánto es (-6) x (-7) x (-2)?", answer: -84, category: "multiplicaciones" },
      { question: "¿Cuánto es 15 x (-2) x 3?", answer: -90, category: "multiplicaciones" },
    ],
    divisiones: [
      { question: "¿Cuánto es (-1800) ÷ 60?", answer: -30, category: "divisiones" },
      { question: "¿Cuánto es 320 ÷ (-8)?", answer: -40, category: "divisiones" },
      { question: "¿Cuánto es (-360) ÷ (-12)?", answer: 30, category: "divisiones" },
    ],
  },
};

export default function QuestionPool({
  numQuestions,
  selectedDifficulty,
}: {
  numQuestions: number;
  selectedDifficulty: Difficulty;
}) {
  const selectedCategory = questionData[selectedDifficulty];

  // Combinar preguntas de todas las categorías
  const allQuestions = [
    ...selectedCategory.sumas,
    ...selectedCategory.restas,
    ...selectedCategory.multiplicaciones,
    ...selectedCategory.divisiones,
  ];

  // Barajar preguntas y seleccionar el número solicitado
  const shuffledQuestions = allQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, numQuestions);

  return shuffledQuestions;
}
