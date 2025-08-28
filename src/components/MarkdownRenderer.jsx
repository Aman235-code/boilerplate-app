import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Copy } from "lucide-react";
import "highlight.js/styles/github-dark.css";

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
    return (
      <div className="relative group my-4 shadow-md rounded-2xl overflow-hidden">
        <pre className="p-4 rounded-2xl bg-gray-900 text-gray-100 overflow-auto">
          <code className={className}>{code}</code>
        </pre>

        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 hidden group-hover:flex items-center gap-1 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg shadow-md transition"
        >
          <Copy size={14} />
          {copied ? "Copied!" : "Copy"}
        </button>

        {/* Language label */}
        {language && (
          <span className="absolute bottom-2 right-2 text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
            {language}
          </span>
        )}
      </div>
    );
  }

  return (
    <code className="bg-gray-200 text-red-600 px-1.5 py-0.5 rounded-md">
      {code}
    </code>
  );
}

export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{ code: CodeBlock }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
