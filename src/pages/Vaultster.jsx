import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../Data/Data";
import CodeSnippet from "../components/CodeSnippet";

function Vaultster() {
  const { id } = useParams();
  const item = Data.find((item) => item.id === Number(id));
  const [copied, setCopied] = useState(false);


  useEffect(()=>{
    console.log(id)
  })
  const handleCopyChange = (value) => {
    setCopied(value);
  };

  return (
    <>
      <div className="row">
        <h1 className="vaultster-title">{item.name}</h1>
        <div
          className="productbox-tag"
          style={{ backgroundColor: item.background }}
        >
          <h1>{item.tag}</h1>
        </div>
      </div>
      <div
        className="row | gray-bg | border-primary | vaultster-row"
        style={{
          height: "calc(100% - 3em)",
          overflowY: "auto",
          padding: "1em",
          borderRadius: "1em",
          display: "flex", 
          flexDirection: "column" 
        }}
      >
        {item.context.map((contextItem, index) => (
          <div key={index}>
            {contextItem.text && <p>{contextItem.text}</p>}
            {contextItem.snippet && <CodeSnippet text={contextItem.snippet} OnCopy={handleCopyChange} />}
          </div>
        ))}
      </div>
      {copied && <TextCopied />}
    </>
  );
}

function TextCopied() {
  return (
    <div className="TextCopied">
      <h1>Text Copied✅</h1>
    </div>
  );
}

export default Vaultster;
