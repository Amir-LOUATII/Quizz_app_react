import { useGlobalContext } from "../context/context";

function QuizHeader() {
  const { currentQuestionIndex, questions, score } = useGlobalContext();
  return (
    <header className="score">
      <div className="score-item">
        Question:
        <span>{` ${currentQuestionIndex + 1} / ${questions?.length}`}</span>
      </div>
      <div className="score-item">
        Score: <span>{`${score} / ${questions.length}`}</span>
      </div>
    </header>
  );
}

export default QuizHeader;
