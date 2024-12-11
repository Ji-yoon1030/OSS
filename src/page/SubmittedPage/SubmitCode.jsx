import React from "react";
import { useLocation } from "react-router-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import submit from "./SubmitCode.module.css";
import Vote from "../Vote/vote";

const SubmittedPage = () => {
  const location = useLocation();
  const { code, language } = location.state || {};

  return (
    <>
      <div className={submit.top_section}>
        <span className={submit.title}>My Code</span>
        <div className={submit.editor_section}>
          <AceEditor
            mode={language || "java"}
            theme="monokai"
            name="output-viewer"
            value={code || "No code submitted."}
            readOnly={true}
            fontSize={20}
            width="80vw"
            height="60vh"
            style={{
              borderRadius: "5px",
              marginBottom: "20px",
            }}
            setOptions={{
              showPrintMargin: false,
              showGutter: true,
              readOnly: true,
              highlightActiveLine: false,
              wrapEnabled: true,
            }}
          />
          <Vote submissionId="1" userId="1" />
        </div>
      </div>
    </>
  );
};

export default SubmittedPage;
