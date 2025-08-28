import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // you can change theme

// Custom CodeBlock renderer with Copy button
function CodeBlock({ node, inline, className, children, ...props }) {
  const language = className ? className.replace("language-", "") : "";
  const code = String(children).replace(/\n$/, "");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return !inline ? (
    <div className="relative group">
      <pre className="p-3 rounded-xl bg-gray-900 text-gray-100 overflow-auto">
        <code className={className} {...props}>
          {code}
        </code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded"
      >
        Copy
      </button>
      {language && (
        <span className="absolute bottom-2 right-2 text-xs text-gray-400">
          {language}
        </span>
      )}
    </div>
  ) : (
    <code className="bg-gray-100 text-red-500 px-1 py-0.5 rounded">
      {children}
    </code>
  );
}

export default function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{ code: CodeBlock }}
    >
      {content}
    </ReactMarkdown>
  );
}
