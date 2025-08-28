import React, { useState, useEffect } from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";

// grab all md files under /boilerplates
const files = import.meta.glob("/boilerplates/**/*.md", { as: "raw" });

export default function BoilerplatePage() {
  const [content, setContent] = useState("");

  // Example: load a specific boilerplate
  useEffect(() => {
    async function loadFile() {
      const path = "/boilerplates/nodejs/basic-server.md";
      const file = files[path];
      if (file) {
        const raw = await file();
        setContent(raw);
      }
    }
    loadFile();
  }, []);

  return (
    <div className="prose max-w-none">
      {content ? <MarkdownRenderer content={content} /> : <p>Loading...</p>}
    </div>
  );
}
