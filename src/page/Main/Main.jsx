import React from 'react';
import styles from '../Main/Main.module.css'; // CSS 모듈 파일 import
import { useNavigate } from 'react-router-dom';
import logo from '../../img/Logo_light.png';

const MainPage = () => {
  const navigate = useNavigate(); // React Router의 useNavigate 훅 사용

  const handleButtonClick = () => {
    navigate('/login'); // 경로를 /login으로 변경
  };
  return (
    <div className={styles.mainContainer}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>
          <img src={logo} alt="logo" height={'200px'}></img>
        </h1>
        <p className={styles.subtitle}>: Orbiting Around Success</p>
      </header>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>✨ 주요 기능</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <h3>🚀 함께 푸는 알고리즘</h3>
            <p>매일매일 새로운 문제를 풀며 함께 성장하세요.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>💬 코드 공유 및 커뮤니티 평가</h3>
            <p>
              문제를 풀이한 코드를 공유하고 팀원들과 함께 최고의 코드를
              생각해보세요.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>🏆 MVP 시스템</h3>
            <p>투표를 통해 이번 문제의 최고 코더가 되어 보세요!</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.cta}>
        <h2>지금 바로 시작하세요!</h2>
        <p>Orb1t에서 학습 목표를 달성하고 커뮤니티의 스타가 되세요.</p>
        <button className={styles.ctaButton} onClick={handleButtonClick}>
          회원가입하기
        </button>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 컴퓨터공학과 23학번 박지윤</p>
      </footer>
    </div>
  );
};

export default MainPage;
