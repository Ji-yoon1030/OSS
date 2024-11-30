import React from 'react';
import problem from './Problem.module.css';
import CodeCompiler from '../../component/CodeCompiler/CodeCompiler';
import CodeOutput from '../../component/CodeCompiler/CodeOutput';
import { OutputProvider } from '../../component/CodeCompiler/Compiler';

const Problem_page = () => {
  return (
    <>
      <div className={problem.container}>
        <div className={problem.box}>
          <p className={problem.title}>오늘의 문제</p>
          <a
            className={problem.problem}
            href="https://www.acmicpc.net/problem/1000"
          >
            https://www.acmicpc.net/problem/1000
          </a>
          <a
            className={problem.problem}
            href="https://www.acmicpc.net/problem/1000"
          >
            https://www.acmicpc.net/problem/1000
          </a>
        </div>
      </div>
      <div className={problem.container_code}>
        <OutputProvider>
          <CodeCompiler />
          <CodeOutput />
        </OutputProvider>
      </div>
    </>
  );
};

export default Problem_page;
