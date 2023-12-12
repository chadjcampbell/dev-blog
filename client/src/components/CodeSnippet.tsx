// CodeSnippet.js
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ClipboardJS from "clipboard";

type CodeSnippetProps = {
  code: string;
  lang: string;
};

const CodeSnippet = ({ code, lang }: CodeSnippetProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const clipboard = new ClipboardJS(".copy-button");

    clipboard.on("success", () => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
      clipboard.destroy();
    });

    clipboard.on("error", () => {
      console.error("Unable to copy to clipboard.");
      clipboard.destroy();
    });
  };

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={lang}
        style={a11yDark}
        customStyle={{ fontSize: "1.2rem" }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        className="absolute top-2 right-2 px-2 py-1 bg-gray-800 text-white rounded hover:bg-gray-600 focus:outline-none"
        onClick={handleCopyClick}
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CodeSnippet;
