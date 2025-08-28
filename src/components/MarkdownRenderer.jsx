import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw"; // <-- import this to parse HTML
import { Copy } from "lucide-react";
import "highlight.js/styles/atom-one-dark.css";

// Helper to extract plain text from ReactMarkdown children
function getText(children) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getText).join("");
  if (children.props && children.props.children)
    return getText(children.props.children);
  return "";
}

function CodeBlock({ node, inline, children }) {
  const classProp = node?.properties?.className || [];
  const className = Array.isArray(classProp)
    ? classProp.join(" ")
    : classProp || "";
  const language = className.replace(/^language-/, "");
  const code = getText(children);

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  if (!inline) {
    // Determine if single line
    const isSingleLine = code.split("\n").length === 1;

    return (
      <div className="relative group my-4 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <pre
          className={`overflow-auto ${
            isSingleLine ? "p-2" : "p-6"
          } rounded-2xl`}
        >
          <code className={className}>{code}</code>
        </pre>

        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 hidden group-hover:flex items-center gap-1 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg shadow-md transition"
          aria-label="Copy code"
        >
          <Copy size={14} />
          {copied ? "Copied!" : "Copy"}
        </button>

        {language && (
          <span className="absolute bottom-2 right-2 text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
            {language}
          </span>
        )}
      </div>
    );
  }

  return (
    <code className="bg-gray-700 text-red-400 px-1.5 py-0.5 rounded-md">
      {code}
    </code>
  );
}

export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose max-w-none text-white">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{ code: CodeBlock }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
