import { useNavigate } from "react-router";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";

const Result = () => {
  const { startSetting, score, numberOfQuestions, gaveUp, reset, isFinished } =
    useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!gaveUp && !isFinished()) {
      navigate("/");
    }
  }, [gaveUp, isFinished, navigate]);

  function clickHandler() {
    reset();
    navigate("/start");
  }

  const percentage = Math.floor(
    (parseInt(score) / parseInt(numberOfQuestions())) * 100
  );

  let resultMessage = "";
  let scoreClass = "";

  if (gaveUp) {
    resultMessage = "You gave up! Better luck next time.";
    scoreClass = "score-gave-up";
  } else if (percentage === 100) {
    resultMessage = "Excellent work! You got every question correct!";
    scoreClass = "score-excellent";
  } else if (percentage >= 70) {
    resultMessage = "Great job! You performed really well.";
    scoreClass = "score-good";
  } else if (percentage > 0) {
    resultMessage = "You answered some questions correctly. Keep practicing!";
    scoreClass = "score-fair";
  } else {
    resultMessage = "Don't worry, you can try again to improve your score.";
    scoreClass = "score-poor";
  }

  return (
    <div className="result-container">
      <h1 className={percentage && !gaveUp > 0 ? "success" : "try-again"}>
        {percentage && !gaveUp > 0 ? "Well Done!" : "Try Again!"}
      </h1>
      <p className="result-message">{resultMessage}</p>
      <p className={`score ${scoreClass}`}>{`Your score: ${percentage} %`}</p>
      <button className="btn" onClick={clickHandler}>
        Play Again
      </button>
      <button
        className="btn"
        onClick={() => {
          startSetting();
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Result;
