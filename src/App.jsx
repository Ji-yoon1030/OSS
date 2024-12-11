import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import LoginPage from "./page/LoginPage/Login_page";
import ProblemPage from "./page/ProblemPage/Problem_page";

import Main from "../src/page/Main/Main";
import SubmittedPage from "./page/SubmittedPage/SubmitCode";
import Ideaton from "./page/ideaton/ideaton_main/Ideaton";
import PostNew from "./page/ideaton/ideaton_post/PostNew";

import Navbar from "./component/NavComp/Navbar";
import Signuppage from "./page/Signup/SignupPage";
import Vote from "./page/Vote/vote";

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
      {location.pathname !== "/" && location.pathname !== "/login" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<Signuppage />}></Route>
        <Route path="/problem" element={<ProblemPage />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/submit" element={<SubmittedPage />}></Route>
        <Route path="/vote" element={<Vote />}></Route>
        <Route path="/ideaton" element={<Ideaton />} />
        <Route path="/ideaton/new" element={<PostNew />} />
      </Routes>
    </>
  );
}

export default App;
