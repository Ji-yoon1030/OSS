import React, { useState, useEffect, useCallback } from "react";
import styles from "./Vote.module.css";

const Vote = ({ submissionId, userId }) => {
  const [voteCount, setVoteCount] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);

  const fetchVoteCount = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/vote/count/${submissionId}`
      );
      const data = await response.json();
      setVoteCount(data.votes);
    } catch (err) {
      setError("Failed to fetch vote count");
    }
  }, [submissionId]);

  useEffect(() => {
    fetchVoteCount();
  }, [submissionId, fetchVoteCount]);

  const handleVote = async () => {
    if (hasVoted) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/vote/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submissionId: submissionId,
          voterId: userId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setVoteCount(data.votes);
        setHasVoted(true);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to submit vote");
    }
  };

  return (
    <div className={styles.voteContainer}>
      <button
        onClick={handleVote}
        disabled={hasVoted}
        className={`${styles.voteButton} ${hasVoted ? styles.voted : ""}`}
      >
        👍 투표하기 ({voteCount})
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Vote;
