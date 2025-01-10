import { useState } from "react";
import { useGlobalContext } from "../context/context";
import DOMPurify from "dompurify";
import { configDomPurify } from "../config/domPurifyConfig";
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
  const cleanAnser = item
    ? DOMPurify.sanitize(item, configDomPurify)
        .replace(/classname/g, "class")
        .replace(/className/g, "class")
    : "";
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
      key={idx}
      onClick={onClickHandler}
      disabled={isAnswered || isSelected}
    >
      {cleanAnser}
    </button>
  );
}

export default Answer;
