import React, { useState } from "react";
import styles from "./Ideaton.module.css";
import { useNavigate } from "react-router-dom";

const Ideaton = () => {
  const navigate = useNavigate();

  const handleNewPost = () => {
    navigate("/ideaton/new");
  };

  // Sample data - in a real app, this would come from an API/database
  const [posts] = useState([
    {
      id: 1,
      title: "2024 오픈소스 아이디어톤",
      date: "2024-03-15",
      author: "관리자",
      preview: "오픈소스 프로젝트 아이디어톤에 참여하세요!",
    },
    {
      id: 2,
      title: "아이디어톤 참가 신청 안내",
      date: "2024-03-14",
      author: "운영진",
      preview: "아이디어톤 참가 방법 및 주의사항을 확인하세요.",
    },
    // Add more posts as needed
  ]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>아이디어톤</h1>
        <button className={styles.newPostButton} onClick={handleNewPost}>
          새 글 작성
        </button>
      </header>

      <div className={styles.postList}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postHeader}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span className={styles.postDate}>{post.date}</span>
            </div>
            <p className={styles.postPreview}>{post.preview}</p>
            <div className={styles.postFooter}>
              <span className={styles.postAuthor}>작성자: {post.author}</span>
              <button className={styles.readMoreButton}>자세히 보기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideaton;
