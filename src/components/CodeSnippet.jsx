import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

function CodeSnippet(props) {
  const text = props.text;
  const OnCopy = props.OnCopy

  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      OnCopy(true);

      setTimeout(() => {
        setCopied(false);
        OnCopy(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div className="code-block">
      <div className="top" onClick={handleClick}>
      <FontAwesomeIcon icon={faClipboard} size="xl" style={{color: "#ffffff",}} />
      </div>
      <code>{text}</code>

    </div>
  );
}

export default CodeSnippet;
