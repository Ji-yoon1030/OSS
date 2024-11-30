// src/context/CodeContext.js
import React, { createContext, useContext, useState } from 'react';

// Context 생성
const CodeContext = createContext();

// Provider 컴포넌트
export const CodeProvider = ({ children }) => {
  const [code, setCode] = useState('// Write your code here...'); // 코드 상태

  return (
    <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
};

// Context 사용을 위한 커스텀 훅
export const useCode = () => useContext(CodeContext);
