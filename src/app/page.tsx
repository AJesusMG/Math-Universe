import React from "react";
import Image from "next/image";
import PrincipalButton from "@/components/PrincipalButton";
import MeteorRain from "@/components/MeteorRain";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen gap-8 z-10">
      <MeteorRain /> {/* La lluvia de meteoros no afectará la disposición */}
      
      {/* Contenedor de la imagen */}
      <div className="flex items-center justify-center w-full h-full mt-12 sm:mt-4 z-10">
        <Image
          src="/Logo_2.png"
          width={250}    // Tamaño menor en móviles
          height={250}   // Tamaño menor en móviles
          alt="Math Universe Logo"
          className="sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
        />
      </div>

      {/* Contenedor del botón */}
      <div className="flex items-center justify-center w-full h-full mt-8 sm:mt-4 z-10">
        <PrincipalButton />
      </div>
    </div>
  );
}
