'use client';

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import gsap from "gsap";
import TipsPool from "./TipsPool"; 

interface ButtonModalProps {
  categories: string[];
  selectedDifficulty: "Fácil" | "Intermedio" | "Difícil";
}

export default function ButtonModal({
  categories,
  selectedDifficulty,
}: ButtonModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const buttonRef = useRef(null);
  
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const tiempoParaAnimacion = 10;

  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.to(buttonRef.current, {
        duration: 0.5,
        opacity: 1,
        boxShadow: "0px 0px 10px 5px rgba(255, 255, 0, 0.8)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, tiempoParaAnimacion * 1000);

    return () => clearTimeout(timeout);
  }, []);

  const tip = TipsPool({ categories: [categories[currentCategoryIndex]] });

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < categories.length ? nextIndex : prevIndex;
    });
  };

  return (
    <>
      <Button ref={buttonRef} onPress={onOpen} isIconOnly color="primary" size="lg">
        <span className="material-symbols-outlined">rocket_launch</span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{tip.title}</ModalHeader>
              <ModalBody>
                {tip.body}
                {selectedDifficulty === "Difícil" && (
                  <p>
                    <strong>Nota:</strong> Los ejercicios difíciles requieren mayor atención. ¡Respira hondo y concéntrate en el problema!
                  </p>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                    handleNextCategory(); 
                  }}
                >
                  Entendido
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
