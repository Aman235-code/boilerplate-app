import React from "react";
import BoilerplatePage from "./pages/BoilerplatePage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Boilerplate App</h1>
        <BoilerplatePage />
      </main>
    </div>
  );
}
