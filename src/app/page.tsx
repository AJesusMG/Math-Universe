import React from "react";
import Image from "next/image";
import PrincipalButton from "@/components/PrincipalButton";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="flex items-center justify-center w-full h-full mt-16">
        <Image
          src="/Logo-1.webp"
          width={350}
          height={350}
          alt="Picture of the author"
        />
      </div>
      <div className="flex items-center justify-center w-full h-full mt-16">
        <PrincipalButton />
      </div>
    </div>
  );
}
