import React from "react";
import ScoreBar from "@/components/ScoreBar";

export default function Page() {
    return (
        <div className="flex flex-col items-center gap-8 h-screen w-full">
            <header>
                <h1 className="text-3xl font-bold text-text">Podio</h1>
            </header>
            <div className="w-full h-full flex">
                <ScoreBar/>
            </div>
        </div>
    );
}
