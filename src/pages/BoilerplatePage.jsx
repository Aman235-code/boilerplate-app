import React, { useState, useEffect } from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";

// Import all markdown files under boilerplates
const files = import.meta.glob("/boilerplates/**/*.md", { as: "raw" });

export default function BoilerplatePage() {
  const [content, setContent] = useState("");
  const [fileList, setFileList] = useState([]);
  const [activeFile, setActiveFile] = useState("");

  useEffect(() => {
    // Extract a file list from the glob
    const entries = Object.keys(files).map((path) => {
      const parts = path.split("/");
      const language = parts[2]; // e.g., 'javascript'
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
    <div className="flex gap-6">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow rounded-xl p-4 space-y-2 h-[80vh] overflow-y-auto">
        <h2 className="font-bold text-lg mb-2">Boilerplates</h2>
        {fileList.map((file) => (
          <button
            key={file.path}
            onClick={() => loadFile(file.path)}
            className={`block w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-100 transition ${
              activeFile === file.path ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            {file.language} / {file.name}
          </button>
        ))}
      </aside>

      {/* Content */}
      <main className="flex-1 prose max-w-none bg-white p-6 rounded-xl shadow overflow-y-auto h-[80vh]">
        {content ? (
          <MarkdownRenderer content={content} />
        ) : (
          <p className="text-gray-500">
            Select a boilerplate from the sidebar.
          </p>
        )}
      </main>
    </div>
  );
}
