import React, { useState, useEffect } from "react";
import { Card, CardBody, Input } from "@nextui-org/react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import QuestionPool from "./QuestionPool";

// Define la interfaz para el tipo de cada pregunta
interface Question {
  question: string;
  answer: number;
}

interface CardExerciseProps {
  turnoJugador: number;
  numJugadores: number;
  onNextTurn: () => void;
  onPointsCalculated: (points: number) => void;
  numQuestions: number;
}

export default function CardExercise({
  turnoJugador,
  numJugadores,
  onNextTurn,
  onPointsCalculated,
  numQuestions,
}: CardExerciseProps) {
  const [answer, setAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [questions, setQuestions] = useState<Question[]>([]); // Añadimos el tipo Question aquí
  const router = useRouter();

  useEffect(() => {
    const loadedQuestions: Question[] = QuestionPool({ numQuestions });
    setQuestions(loadedQuestions);
  }, [numQuestions]);

  useEffect(() => {
    if (timeLeft > 0 && !isComplete) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleTimeOut();
    }
  }, [timeLeft, isComplete]);

  const calculateTimeAdjustment = () => 10;
  const calculatePoints = () => 50;

  const showPointsAnimation = () => {
    gsap.to(".bonus-points", {
      opacity: 1,
      y: -20,
      duration: 1,
      onComplete: () => {
        gsap.to(".bonus-points", { opacity: 0, y: 0, duration: 1 });
      }
    });
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const correctAnswer = questions[currentQuestion]?.answer;
      const timeAdjustment = calculateTimeAdjustment();

      if (parseInt(answer) === correctAnswer) {
        setTimeLeft((prev) => prev + timeAdjustment);
        const pointsEarned = calculatePoints();
        setTotalPoints((prev) => prev + pointsEarned);
        showPointsAnimation();

        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setIsComplete(true);
          onNextTurn();
        }
      } else {
        setTimeLeft((prev) => Math.max(prev - 5, 0));
      }
      setAnswer("");
    }
  };

  const handleTimeOut = () => {
    setIsComplete(true);
    onNextTurn();
  };

  useEffect(() => {
    if (isComplete) {
      onPointsCalculated(totalPoints);
      const nextTurn = turnoJugador % numJugadores === 0 ? numJugadores : (turnoJugador % numJugadores);
      router.push(`/rolldice/?turnoJugador=${nextTurn}&numJugadores=${numJugadores}`);
    }
  }, [isComplete, totalPoints]);

  return (
    <div className="flex flex-col items-center gap-4 relative">
      <div className="w-full h-full">
        <h1 className="text-center text-secondary font-bold text-3xl">{timeLeft}s</h1>
      </div>

      <div className="bonus-points text-3xl text-yellow-300 absolute z-50">
        {totalPoints > 0 ? `+${totalPoints} pts` : ""}
      </div>

      <Card className="py-4 w-96 h-64 bg-primary-500 z-10">
        <CardBody className="flex flex-col gap-8 py-2 justify-center items-center">
          {isComplete ? (
            <h1 className="text-3xl text-white text-center">
              {timeLeft === 0 ? "Perdiste. Turno del siguiente jugador." : "¡Felicidades! Turno del siguiente jugador."}
            </h1>
          ) : (
            <>
              <h1 className="text-3xl text-white text-center">
                {questions[currentQuestion]?.question}
              </h1>
              <Input
                type="number"
                label="Coloca tu respuesta"
                color="secondary"
                className="max-w-xs"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={handleSubmit}
              />
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
