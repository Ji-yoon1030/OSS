import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import profile from '../../img/profile.svg';
import password from '../../img/password.svg';
import login from '../LoginPage/LoginPage.module.css';
import React from 'react';

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
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
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
