import { useNavigate } from "react-router-dom";
import { useOutput } from "./Compiler";
import React, { useState, useEffect } from "react";
import compiler from "../CodeCompiler/CodeCompiler.module.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

const languageMap = {
  java: "java",
  python3: "python3",
  c: "c",
  cpp: "cpp",
};

const modeMap = {
  java: "java",
  python3: "python",
  c: "c_cpp",
  cpp: "c_cpp",
};

const CodeCompiler = () => {
  const { setOutput } = useOutput();
  const [code, setCode] = useState("Select a language to start coding...");
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();

  const defaultCode = {
    java: "// Write your Java code here...",
    python3: "# Write your Python code here...",
    c: "// Write your C code here...",
    cpp: "// Write your C++ code here...",
  };

  useEffect(() => {
    setCode(defaultCode[language]);
  }, [language]);

  const handleSaveCode = () => {
    // /submit 경로로 이동하면서 code 전달
    navigate("/submit", { state: { code } });
  };

  const compileCode = async () => {
    const apiUrl = "http://127.0.0.1:5000/api/execute";
    const mappedLanguage = languageMap[language];

    const requestData = {
      script: code,
      language: mappedLanguage,
      versionIndex: "0",
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response:", result);
      setOutput(result.output || "No output");
    } catch (error) {
      console.error("Error:", error.message);
      setOutput("Error: " + error.message);
    }
  };
  return (
    <div className={compiler.container}>
      <div className={compiler.head_section}>
        <h1 className={compiler.title}>My Code</h1>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={compiler.select}
        >
          <option className={compiler.option} value="" disabled hidden>
            Select Language
          </option>
          <option className={compiler.option} value="java">
            Java
          </option>
          <option className={compiler.option} value="python3">
            Python3
          </option>
          <option className={compiler.option} value="c">
            C
          </option>
          <option className={compiler.option} value="cpp">
            C++
          </option>
        </select>
      </div>
      <div className={compiler.editor_section}>
        <AceEditor
          mode={modeMap[language]}
          theme="monokai"
          name="code-editor"
          value={code}
          onChange={(value) => setCode(value)}
          fontSize={20}
          width="80vw"
          height="80vh"
          style={{
            borderRadius: "5px",
          }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
          }}
        />
      </div>

      <div className={compiler.bottom_section}>
        <div className={compiler.btn_section}>
          <button
            onClick={handleSaveCode}
            className={compiler.btn}
            id={compiler.btn}
          >
            Save Code
          </button>
          <button onClick={compileCode} className={compiler.btn}>
            Run Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeCompiler;
