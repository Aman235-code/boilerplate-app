import React from "react";
import BoilerplatePage from "./pages/BoilerplatePage";
import { Typewriter } from "react-simple-typewriter";

export default function App() {
  return (
    <div className="min-h-screen p-4 sm:p-6 flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-900">
      {/* Glassmorphism Header */}
      <header className="mb-12 text-center w-full max-w-full sm:max-w-3xl md:max-w-4xl p-6 sm:p-8 rounded-3xl bg-[#322f4a] backdrop-blur-lg border border-white/20 shadow-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Boilerplate App
        </h1>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-6">
          Browse boilerplates for different languages & frameworks
        </p>

        {/* Typewriter Effect */}
        <p className="text-indigo-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
          <Typewriter
            words={["Node.js", "React.js", "Python", "Tailwind CSS"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        {/* Creator */}
        <p className="mt-4 text-gray-300 sm:text-sm md:text-sm lg:text-sm">
          Created by Aman
        </p>
      </header>

      {/* Boilerplate Page */}
      <div className="w-full px-2 sm:px-4">
        <BoilerplatePage />
      </div>
    </div>
  );
}
