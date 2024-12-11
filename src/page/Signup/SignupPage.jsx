import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import emailIcon from "../../img/email.svg";
import profileIcon from "../../img/profile.svg";
import passwordIcon from "../../img/password.svg";
import sign from "../Signup/Signup.module.css";
import axios from "axios";

function SignupForm({ emailRef, passwordRef }) {
  return (
    <>
      <InputGroup size="lg" id={sign.inputSection}>
        <InputGroup.Text id={sign.inputGroup} className={sign.input1}>
          <img src={emailIcon} alt="email" />
        </InputGroup.Text>
        <Form.Control
          ref={emailRef}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="이메일을 입력하세요"
        />
      </InputGroup>
      <InputGroup size="lg" id={sign.inputSection}>
        <InputGroup.Text id={sign.inputGroup} className={sign.input1}>
          <img src={profileIcon} alt="profile" />
        </InputGroup.Text>
        <Form.Control
          aria-describedby="inputGroup-sizing-sm"
          placeholder="아이디를 입력하세요"
        />
      </InputGroup>
      <InputGroup size="lg" id={sign.inputSection}>
        <InputGroup.Text id={sign.inputGroup} className={sign.input1}>
          <img src={passwordIcon} alt="password" />
        </InputGroup.Text>
        <Form.Control ref={passwordRef} placeholder="비밀번호를 입력하세요" />
      </InputGroup>
    </>
  );
}

const Signuppage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  // 상태로 성공/실패 메시지 관리
  const [message, setMessage] = useState(""); // 메시지 상태
  const [isSuccess, setIsSuccess] = useState(false); // 성공 여부 상태

  const handleSignup = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/signup",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json", // Content-Type 설정
          },
        }
      );

      // 성공 시 메시지 업데이트
      setMessage("회원가입에 성공했습니다!");
      setIsSuccess(true);
    } catch (error) {
      if (error.response) {
        // 실패 시 메시지 업데이트
        setMessage(error.response.data.error || "회원가입에 실패했습니다.");
      } else if (error.request) {
        setMessage("서버에서 응답이 없습니다. 다시 시도해주세요.");
      } else {
        setMessage(`오류 발생: ${error.message}`);
      }
      setIsSuccess(false);
    }
  };

  return (
    <>
      <div className={sign.box}>
        <div className={sign.header}>회원가입</div>
        <div className={sign.section}>
          <SignupForm emailRef={emailRef} passwordRef={passwordRef} />
          <button className={sign.btn} onClick={handleSignup}>
            회원가입
          </button>
          {/* 메시지 표시 */}
          {message && (
            <div
              style={{
                marginTop: "20px",
                color: isSuccess ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Signuppage;
