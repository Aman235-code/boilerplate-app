import React from "react";
import BoilerplatePage from "./pages/BoilerplatePage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Boilerplate App</h1>
        <p className="text-sm text-gray-600">
          Browse boilerplates for different languages & frameworks
        </p>
      </header>
      <BoilerplatePage />
    </div>
  );
}
