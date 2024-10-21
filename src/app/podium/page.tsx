import React from "react";
import ScoreBar from "@/components/ScoreBar";

export default function Page() {
    return (
        <div className="flex flex-col items-center gap-8 h-screen w-full px-4 sm:gap-4">
            <header>
                <h1 className="text-3xl sm:text-2xl font-bold text-text">Podio</h1>
            </header>
            <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center">
                <ScoreBar />
            </div>
        </div>
    );
}
