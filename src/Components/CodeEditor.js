import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/components/prism-jsx";

const initialContent = `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`;

const CodeEditor = (props) => {
  const [content, setContent] = useState(initialContent);
  const textareaRef = useRef(null);
  const preRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [props.language, content]);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;

    const pre = preRef.current;
    pre.style.height = "auto";
    pre.style.height = `${pre.scrollHeight}px`;
  }, [content]);

  return (
    <div className="parent-code-container">
      <div className="code-editor-heading">react-simple-code-editor</div>
      <div className="code-editor-subheading">
        A simple no-frills code editor with syntax highlighting.
      </div>
      <button type="submit" className="github-button">
        <a
          href="https://github.com/sagar888299/React-Code-Highlighter"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          GitHub
        </a>
      </button>
      <div className="code-edit-container">
        <textarea
          ref={textareaRef}
          className="code-input"
          placeholder="Type Some Code...."
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
          spellCheck="false"
        />
        <pre ref={preRef} className="code-output">
          <code className={`language-${props.language}`}>{content}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
