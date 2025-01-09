import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import { useGlobalContext } from "../context/context";

function Questions() {
  const { getNextQuestion, questions, currentQuestionIndex } =
    useGlobalContext();
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    let counter = setTimeout(() => {
      if (isAnswered) {
        getNextQuestion();
      }
    }, 2000);
    return () => clearTimeout(counter);
  }, [isAnswered]);

  const question =
    questions && questions instanceof Array && questions[currentQuestionIndex];
  return (
    <div>
      <h2>{question?.question}</h2>
      <div className="btn-container" key={question?.question}>
        {question?.answers?.map((item) => {
          return (
            <Answer
              isAnswered={isAnswered}
              onClick={() => setIsAnswered(true)}
              item={item}
              key={item}
              isCorrect={
                question.correct_answer?.toLowerCase() === item.toLowerCase()
              }
            />
          );
        })}
      </div>
      <button className="skip" onClick={getNextQuestion}>
        Skip
      </button>
    </div>
  );
}

export default Questions;
