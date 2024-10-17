'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function PrincipalButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/no-players");
  };

  return (
    <>
      <Button color="primary" size="lg" className="text-xl" onClick={handleClick}>
        Juega ya!
      </Button>
    </>
  );
}
