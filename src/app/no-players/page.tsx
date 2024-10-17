import NoJugadores from "@/components/NoJugadores";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="flex items-center justify-center w-full h-full mt-16">
        <Image
          src="/Logo-2.webp"
          width={250}
          height={250}
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col gap-16 items-center justify-center w-full h-full mt-16">
        <h1 className="text-3xl text-text-900 text-center">Ingresa el número de <br /> jugadores</h1>
        <div className="w-full h-full ">
          <NoJugadores />
        </div>
      </div>
    </div>
  )
}