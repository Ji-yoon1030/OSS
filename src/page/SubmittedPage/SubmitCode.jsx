import React from 'react';
import { useLocation } from 'react-router-dom';
import AceEditor from 'react-ace';
import submit from './SubmitCode.module.css';

const SubmittedPage = () => {
  const location = useLocation(); // 경로로 전달된 상태 가져오기
  const { code } = location.state || {}; // 전달된 state에서 code 추출

  return (
    <>
      <div className={submit.top_section}>
        <span className={submit.title}>My Code</span>
        <div className={submit.editor_section}>
          <AceEditor
            mode="text" // 출력용이므로 특정 언어 모드가 필요 없음
            theme="monokai"
            name="output-viewer"
            value={code || 'No code submitted.'}
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
              showLineNumbers: true, // 줄 번호 제거
              showGutter: true, // 여백 제거
              highlightGutterLine: false,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SubmittedPage;
