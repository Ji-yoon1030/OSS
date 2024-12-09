import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Login_page from "./page/LoginPage/Login_page";
import Problem_page from "./page/ProblemPage/Problem_page";

import Main from "../src/page/Main/Main";
import SubmittedPage from "./page/SubmittedPage/SubmitCode";
import CodeOutput from "./component/CodeCompiler/CodeOutput";

import Navbar from "./component/NavComp/Navbar";

const ChangeBodyColor = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/problem") {
      document.body.style.backgroundColor = "#e9ebf8"; // 원하는 색상
    } else if (location.pathname === "/signup" || "/submit") {
      document.body.style.backgroundColor = "white"; // 원하는 색상
    } else if (location.pathname === "/question_page" || "/answer_page") {
      document.body.style.backgroundColor = "#EFF1E3"; // 원하는 색상
    }

    // 컴포넌트 언마운트 시 원래 색상 복구
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [location]);

  return null;
};

function App() {
  const location = useLocation();
  return (
    <>
      <ChangeBodyColor />
      {location.pathname !== "/main" && location.pathname !== "/login" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/login" element={<Login_page />}></Route>
        <Route path="/problem" element={<Problem_page />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/submit" element={<SubmittedPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
