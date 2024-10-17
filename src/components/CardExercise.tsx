'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, Input } from "@nextui-org/react";
import { gsap } from "gsap";

export default function CardExercise() {
  const [answer, setAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [bonusPoints, setBonusPoints] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const router = useRouter();

  const questions = [
    { question: "¿Cuánto es 2 + 2?", answer: 4 },
    { question: "¿Cuánto es 5 + 3?", answer: 8 },
    { question: "¿Cuánto es 10 - 6?", answer: 4 },
  ];

  useEffect(() => {
    if (timeLeft > 0 && !isComplete) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        console.log("Tiempo restante:", timeLeft); // Verifica el tiempo restante
      }, 1000);

      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleTimeOut();
    }
  }, [timeLeft, isComplete]);

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const correctAnswer = questions[currentQuestion].answer;
      const timeAdjustment = calculateTimeAdjustment();

      if (parseInt(answer) === correctAnswer) {
        setTimeLeft((prev) => prev + timeAdjustment);
        const pointsEarned = calculatePoints();
        setBonusPoints(pointsEarned);
        showPointsAnimation();

        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setIsComplete(true);
          redirectAfterDelay();
        }
      } else {
        setTimeLeft((prev) => Math.max(prev - 5, 0));
      }

      setAnswer("");
    }
  };

  const calculatePoints = () => {
    const basePoints = 50;
    const bonus = Math.floor(Math.random() * 50);
    return basePoints + bonus;
  };

  const calculateTimeAdjustment = () => {
    const maxBonus = 10;
    const minBonus = 5;
    return timeLeft > 45 ? maxBonus : minBonus;
  };

  const showPointsAnimation = () => {
    const element = document.querySelector(".bonus-points");
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    gsap.fromTo(
      element,
      { opacity: 0, x: randomX, y: randomY, scale: 0.5 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        onComplete: () => {
          gsap.to(element, { opacity: 0, duration: 1, delay: 1 });
        },
      }
    );
  };

  const handleTimeOut = () => {
    setIsComplete(true);
    setTimeout(() => {
      router.push('/rolldice');
    }, 2000);
  };

  const redirectAfterDelay = () => {
    setTimeout(() => {
      router.push('/rolldice');
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4 relative">
      <div className="w-full h-full">
        <h1 className="text-center text-secondary font-bold text-3xl">{timeLeft}s</h1>
      </div>


      <div className="bonus-points text-3xl text-yellow-300 absolute z-50">
        {bonusPoints > 0 ? `+${bonusPoints} pts` : ""}
      </div>

      <Card className="py-4 w-96 h-64 bg-primary-500 z-10">
        <CardBody className="flex flex-col gap-8 py-2 justify-center items-center">
          {isComplete ? (
            <h1 className="text-3xl text-white text-center">
              {timeLeft === 0 ? "Perdiste, es turno del jugador 2." : "¡Felicidades! Terminaste de resolver los ejercicios. Ahora es el turno del Jugador 2."}
            </h1>
          ) : (
            <>
              <h1 className="text-3xl text-white text-center">
                {questions[currentQuestion].question}
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
