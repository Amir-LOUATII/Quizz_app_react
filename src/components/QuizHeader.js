import { useGlobalContext } from "../context/context";

function QuizHeader() {
  const { currentQuestionIndex, questions, score } = useGlobalContext();
  return (
    <header className="score">
      <div>
        Question:
        <span>{` ${currentQuestionIndex + 1} / ${questions?.length}`}</span>
      </div>
      <div>
        Score: <span>{`${score} / ${questions.length}`}</span>
      </div>
    </header>
  );
}

export default QuizHeader;
