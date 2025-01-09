import { useState } from "react";
import { useGlobalContext } from "../context/context";

function Answer({ isCorrect, item, idx, onClick, isAnswered }) {
  const { addPoint } = useGlobalContext();
  const [isSelected, setIsSelected] = useState(false);
  function onClickHandler() {
    setIsSelected(true);
    if (isCorrect) {
      addPoint();
    }
    onClick();
  }

  return (
    <button
      className={`answer-btn ${
        isSelected && isCorrect
          ? "correct"
          : isSelected && !isCorrect
          ? "incorrect"
          : isAnswered && isCorrect
          ? "correct"
          : ""
      }`}
      data-answer={item}
      key={idx}
      onClick={onClickHandler}
      disabled={isAnswered || isSelected}
    >
      {item}
    </button>
  );
}

export default Answer;
