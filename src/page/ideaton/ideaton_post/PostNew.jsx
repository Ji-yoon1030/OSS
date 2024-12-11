import React, { useState } from "react";
import styles from "./PostNew.module.css";

const PostNew = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Handle post submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>✏️ 새 글 작성</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              required
              className={styles.textarea}
              rows="10"
            />
          </div>
          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={() => window.history.back()}
              className={`${styles.button} ${styles.cancelButton}`}
              disabled={isSubmitting}
            >
              취소
            </button>
            <button
              type="submit"
              className={`${styles.button} ${styles.submitButton}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className={styles.spinner}>등록 중...</span>
              ) : (
                "등록하기"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostNew;
