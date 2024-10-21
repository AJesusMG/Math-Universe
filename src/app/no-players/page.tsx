import NoJugadores from "@/components/NoJugadores";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen gap-8 items-center">
      {/* Contenedor de la imagen */}
      <div className="flex items-center justify-center w-full mt-12 sm:mt-4">
        <Image
          src="/Logo-2.webp"
          width={250}
          height={250}
          alt="Math Universe Logo"
          className="sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
        />
      </div>

      {/* Contenedor del título y del componente NoJugadores */}
      <div className="flex flex-col gap-12 items-center justify-center w-full mt-8 sm:mt-4">
        <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-text-900 text-center">
          Ingresa el número de <br /> jugadores
        </h1>
        <div className="w-full sm:w-3/4 h-full sm:h-auto">
          <NoJugadores />
        </div>
      </div>
    </div>
  );
}
