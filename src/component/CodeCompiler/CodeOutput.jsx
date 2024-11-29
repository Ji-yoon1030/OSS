import { useOutput } from './Compiler';
import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';
import compiler from '../CodeCompiler/CodeCompiler.module.css';

const CodeOutput = () => {
  const { output } = useOutput();
  return (
    <>
      <div className={compiler.editor_section}>
        <AceEditor
          mode="text" // 출력용이므로 특정 언어 모드가 필요 없음
          theme="monokai"
          name="output-viewer"
          value={output}
          fontSize={20}
          width="80vw"
          height="20vh"
          readOnly={true} // 읽기 전용
          highlightActiveLine={false} // 활성화된 줄 강조 제거
          style={{
            borderRadius: '5px',
            marginBottom: '10%',
          }}
          setOptions={{
            showLineNumbers: false, // 줄 번호 제거
            showGutter: false, // 여백 제거
            highlightGutterLine: false,
          }}
        />
      </div>
    </>
  );
};

export default CodeOutput;

// import React from 'react';
//  // Context 사용
// import AceEditor from 'react-ace';
// import 'ace-builds/src-noconflict/theme-monokai';

// const CodeOutput = () => {
//    // Context에서 output 가져오기

//   return (
//     <div>
//       <h2>Output</h2>
//       <AceEditor
//         mode="text"
//         theme="monokai"
//         value={output} // Context의 output 사용
//         fontSize={16}
//         width="100%"
//         height="150px"
//         readOnly={true}
//         setOptions={{
//           showLineNumbers: false,
//           highlightActiveLine: false,
//           highlightGutterLine: false,
//         }}
//       />
//     </div>
//   );
// };

// export default CodeOutput;
