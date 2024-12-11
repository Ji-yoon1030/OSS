import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import profile from "../../img/profile.svg";
import password from "../../img/password.svg";
import login from "../LoginPage/LoginPage.module.css";
import React from "react";

import axios from "axios";

const handleSignup = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await axios.post("http://127.0.0.1:5000/signup", {
      email: email,
      password: password,
    });

    console.log(response.data); // 성공 메시지 출력
    alert("Signup successful!");
  } catch (error) {
    console.error(error.response.data); // 에러 메시지 출력
    alert("Signup failed: " + error.response.data.error);
  }
};

function LoginForm() {
  return (
    <>
      <InputGroup size="lg" id={login.inputSection}>
        <InputGroup.Text id={login.inputGroup} className={login.input1}>
          <img src={profile} alt="profile"></img>
        </InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="lg" id={login.inputSection}>
        <InputGroup.Text id={login.inputGroup} className={login.input1}>
          <img src={password} alt="password"></img>
        </InputGroup.Text>
        <Form.Control />
      </InputGroup>
    </>
  );
}

const Login_page = () => {
  return (
    <>
      <div className={login.box}>
        <div className={login.header}>로그인</div>
        <div className={login.section}>
          <LoginForm></LoginForm>
          <button className={login.btn}>로그인</button>
        </div>
      </div>
    </>
  );
};

export default Login_page;
