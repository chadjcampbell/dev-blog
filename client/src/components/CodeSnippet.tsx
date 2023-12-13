import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { IoIosCopy, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

type CodeSnippetProps = {
  code: string;
  lang: string;
};

const CodeSnippet = ({ code, lang }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);
  const notify = () => {
    toast("Copied to clipboard!");
    copy();
  };

  const copy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="relative">
      <div className="absolute flex flex-row items-center top-0 right-0 pr-1">
        <span className="m-1 basis-3/4 text-xs">{lang}</span>
        <button>
          <CopyToClipboard text={code} onCopy={notify}>
            {copied ? (
              <IoIosCheckmarkCircleOutline
                size="1.5rem"
                className="m-1 text-green-500 basis-1/4"
              />
            ) : (
              <IoIosCopy
                size="1.5rem"
                className="m-1 basis-1/4 hover:text-white"
              />
            )}
          </CopyToClipboard>
        </button>
      </div>
      <SyntaxHighlighter className="" language={lang} style={a11yDark}>
        {code}
      </SyntaxHighlighter>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        theme="dark"
      />
    </div>
  );
};
export default CodeSnippet;
