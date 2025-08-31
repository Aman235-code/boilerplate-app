import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import {
  SiTailwindcss,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiHtml5,
  SiExpress,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const languageIcons = {
  nodejs: <SiNodedotjs size={18} className="text-green-500" />,
  react: <SiReact size={18} className="text-blue-500" />,
  python: <SiPython size={18} className="text-yellow-500" />,
  tailwindcss: <SiTailwindcss size={18} className="text-teal-500" />,
  html: <SiHtml5 size={18} className="text-orange-500" />,
  expressjs: <SiExpress size={18} className="text-black" />,
  css: <SiCss3 size={18} className="text-blue-500" />,
  javascript: <SiJavascript size={18} className="text-yellow-400" />,
};

export default function Sidebar({ files, onSelect, activeFile }) {
  const [search, setSearch] = useState("");
  const [openSections, setOpenSections] = useState({});
  const [isOpen, setIsOpen] = useState(false); // Drawer state

  const toggleSection = (lang) => {
    setOpenSections((prev) => ({ ...prev, [lang]: !prev[lang] }));
  };

  const grouped = files.reduce((acc, file) => {
    acc[file.language] = acc[file.language] || [];
    acc[file.language].push(file);
    return acc;
  }, {});

  const filtered = Object.fromEntries(
    Object.entries(grouped).map(([lang, items]) => [
      lang,
      items.filter((file) =>
        file.name.toLowerCase().includes(search.toLowerCase())
      ),
    ])
  );

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        className="fixed hover:cursor-pointer top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-lg shadow-md sm:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar for desktop */}
      <aside className="hidden sm:block w-72 bg-[#322f4a] shadow-2xl rounded-2xl p-4 h-[80vh] overflow-y-auto">
        <SidebarContent
          filtered={filtered}
          openSections={openSections}
          toggleSection={toggleSection}
          activeFile={activeFile}
          onSelect={onSelect}
        />
      </aside>

      {/* Drawer for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-72 bg-[#322f4a] shadow-2xl p-4 z-50 overflow-y-auto sm:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Close button */}
            <button
              className="mb-4 p-2 hover:cursor-pointer bg-gray-800 text-white rounded-lg shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>

            <SidebarContent
              filtered={filtered}
              openSections={openSections}
              toggleSection={toggleSection}
              activeFile={activeFile}
              onSelect={onSelect}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Sidebar content extracted to reuse for desktop and drawer
function SidebarContent({
  filtered,
  openSections,
  toggleSection,
  activeFile,
  onSelect,
}) {
  return (
    <>
      {/* Search bar */}
      {/* <input
        type="text"
        placeholder="Search boilerplates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
      /> */}

      {Object.entries(filtered).map(([lang, items]) => (
        <div key={lang} className="mb-4">
          {/* Accordion header */}
          <button
            onClick={() => toggleSection(lang)}
            className="flex justify-between items-center w-full font-semibold px-3 py-2 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors shadow-sm text-white"
          >
            <div className="flex items-center gap-2 capitalize">
              {languageIcons[lang.toLowerCase()] || (
                <FileText size={16} className="text-gray-300" />
              )}
              {lang}
            </div>
            <span className="text-lg hover:cursor-pointer">
              {openSections[lang] ? "−" : "+"}
            </span>
          </button>

          {/* Accordion content */}
          <AnimatePresence initial={false}>
            {openSections[lang] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="pl-4 mt-2 space-y-2"
              >
                {items.map((file) => (
                  <motion.div
                    key={file.path}
                    layout
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    }}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
                      activeFile === file.path
                        ? "bg-indigo-50 border-indigo-400 shadow-md"
                        : "bg-white border-gray-200"
                    }`}
                    onClick={() => onSelect(file.path)}
                  >
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                      {languageIcons[file.language.toLowerCase()] || (
                        <FileText size={16} />
                      )}
                      <span>{file.name}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
}
