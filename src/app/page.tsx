// Home.tsx
import React from "react";
import Image from "next/image";
import PrincipalButton from "@/components/PrincipalButton";
import MeteorRain from "@/components/MeteorRain";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full h-full gap-8 z-10">
      <MeteorRain /> {/* La lluvia de meteoros no afectará la disposición */}
      <div className="flex items-center justify-center w-full h-full mt-16 z-10">
        <Image
          src="/Logo-1.webp"
          width={350}
          height={350}
          alt="Picture of the author"
        />
      </div>
      <div className="flex items-center justify-center w-full h-full mt-16 z-10">
        <PrincipalButton />
      </div>
    </div>
  );
}
