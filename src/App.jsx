import React from "react";
import BoilerplatePage from "./pages/BoilerplatePage";
import { Typewriter } from "react-simple-typewriter";

export default function App() {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
          Boilerplate App
        </h1>

        <p className="text-gray-700 text-xl md:text-2xl mb-6">
          Browse boilerplates for different languages & frameworks
        </p>

        {/* Typewriter Effect */}
        <p className="text-indigo-600 text-2xl md:text-3xl font-semibold">
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
        <p className="mt-6 text-gray-500 text-sm">Created by Aman</p>
      </header>

      {/* Boilerplate Page */}
      <div className="w-full">
        <BoilerplatePage />
      </div>
    </div>
  );
}
