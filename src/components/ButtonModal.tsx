'use client';

import React, { useEffect, useRef } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import gsap from "gsap";

export default function ButtonModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const buttonRef = useRef(null);

  // Tiempo en segundos después del cual se activará la animación
  const tiempoParaAnimacion = 10;

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Animación con GSAP para que el botón brille
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

  return (
    <>
      <Button ref={buttonRef} onPress={onOpen} isIconOnly color="primary" size="lg">
        <span className="material-symbols-outlined">rocket_launch</span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Consejo para Resolver el Ejercicio</ModalHeader>
              <ModalBody>
                <p>
                  ¡No te preocupes, aquí va un consejo para que puedas resolver este tipo de ejercicio en el universo!
                </p>
                <p>
                  Si tienes que sumar estrellas como <strong>3 + 5 estrellas</strong>, intenta esto:
                </p>
                <ul className="list-disc ml-4">
                  <li>Imagina que encuentras 3 estrellas en una galaxia y luego ves 5 estrellas más, ¿cuántas estrellas hay en total? <strong>3 + 5 = 8</strong>.</li>
                  <li>Cuenta las estrellas en el cielo nocturno usando tus dedos o un papel para visualizarlo mejor.</li>
                  <li>Piensa en cómo contar estrellas puede ayudarte a sumar, ¡es como viajar por el espacio sumando luces!</li>
                </ul>
                <p>
                  <strong>Dato curioso:</strong> ¿Sabías que en nuestra galaxia, la Vía Láctea, hay más de 100 mil millones de estrellas?
                </p>
                <p>
                  ¡Practica y sigue sumando como un verdadero explorador del espacio!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
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
