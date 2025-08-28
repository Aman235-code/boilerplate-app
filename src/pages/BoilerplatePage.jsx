import React, { useState, useEffect } from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Sidebar from "../components/Sidebar";

// Import all markdown files
const files = import.meta.glob("../boilerplates/**/*.md", { as: "raw" });

export default function BoilerplatePage() {
  const [content, setContent] = useState("");
  const [fileList, setFileList] = useState([]);
  const [activeFile, setActiveFile] = useState("");

  useEffect(() => {
    const entries = Object.keys(files).map((path) => {
      const parts = path.split("/");
      const language = parts[2];
      const name = parts[3].replace(".md", "");
      return { path, language, name };
    });
    setFileList(entries);
  }, []);

  const loadFile = async (path) => {
    const file = files[path];
    if (file) {
      const raw = await file();
      setContent(raw);
      setActiveFile(path);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
      {/* Sidebar */}
      <Sidebar files={fileList} onSelect={loadFile} activeFile={activeFile} />

      {/* Content panel */}
      <main className="flex-1 prose max-w-none bg-[#322f4a] p-4 sm:p-6 rounded-xl shadow overflow-y-auto h-[80vh]">
        {content ? (
          <MarkdownRenderer content={content} />
        ) : (
          <p className="text-gray-500 text-lg text-center sm:text-left">
            Select a boilerplate from the sidebar.
          </p>
        )}
      </main>
    </div>
  );
}
