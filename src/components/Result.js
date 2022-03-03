import React from "react";
import { useGlobalContext } from "../context/context";
import Modal from "../UI/Modal";

const Result = () => {
  const { setShowResult, startSetting, setScore, showResult } =
    useGlobalContext();
  function clickHandler() {
    setScore(0);
    startSetting();
    setShowResult(false);
    console.log(showResult);
  }
  const { score, numberOfQuestions } = useGlobalContext();
  return (
    <Modal>
      <div className="result">
        <h1>Congrats!</h1>
        <p>{`You answered  ${Math.floor(
          (parseInt(score) / parseInt(numberOfQuestions)) * 100
        )} % of questions correctly`}</p>
        <button onClick={clickHandler}>Play Again</button>
      </div>
    </Modal>
  );
};

export default Result;
