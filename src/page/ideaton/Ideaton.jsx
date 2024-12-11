import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Ideaton.module.css";

const Ideaton = () => {
  const navigate = useNavigate();
  const [posts] = useState([
    /* ... existing posts ... */
  ]);

  const handleNewPost = () => {
    navigate("/ideaton/new");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>아이디어톤</h1>
        <button className={styles.newPostButton} onClick={handleNewPost}>
          새 글 작성
        </button>
      </header>
      {/* ... rest of the component ... */}
    </div>
  );
};

export default Ideaton;
