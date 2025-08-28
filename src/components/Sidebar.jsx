import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy } from "lucide-react";

export default function Sidebar({ files, onSelect, activeFile }) {
  const [search, setSearch] = useState("");
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (lang) => {
    setOpenSections((prev) => ({ ...prev, [lang]: !prev[lang] }));
  };

  // Group files by language
  const grouped = files.reduce((acc, file) => {
    acc[file.language] = acc[file.language] || [];
    acc[file.language].push(file);
    return acc;
  }, {});

  // Apply search filter
  const filtered = Object.fromEntries(
    Object.entries(grouped).map(([lang, items]) => [
      lang,
      items.filter((file) =>
        file.name.toLowerCase().includes(search.toLowerCase())
      ),
    ])
  );

  return (
    <aside className="w-72 bg-white shadow-xl rounded-2xl p-4 h-[80vh] overflow-y-auto">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search boilerplates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {Object.entries(filtered).map(([lang, items]) => (
        <div key={lang} className="mb-3">
          {/* Accordion header */}
          <button
            onClick={() => toggleSection(lang)}
            className="flex justify-between items-center w-full font-semibold px-2 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
          >
            {lang.toUpperCase()}
            <span>{openSections[lang] ? "−" : "+"}</span>
          </button>

          {/* Accordion content */}
          <AnimatePresence initial={false}>
            {openSections[lang] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="pl-2 mt-2 space-y-2"
              >
                {items.map((file) => (
                  <div
                    key={file.path}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
                      activeFile === file.path
                        ? "bg-blue-50 border-blue-400 shadow-md"
                        : "bg-white border-gray-200 hover:shadow"
                    }`}
                    onClick={() => onSelect(file.path)}
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {file.name}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(file.path);
                      }}
                      className="p-1 text-gray-500 hover:text-gray-800"
                      title="Copy file path"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </aside>
  );
}
