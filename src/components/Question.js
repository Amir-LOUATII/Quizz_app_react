import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router";
import DOMPurify from "dompurify";
import { configDomPurify } from "../config/domPurifyConfig";
function Questions() {
  const { getNextQuestion, questions, currentQuestionIndex, givingUp } =
    useGlobalContext();
  const [isAnswered, setIsAnswered] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let counter = setTimeout(() => {
      if (isAnswered) {
        getNextQuestion();
        if (currentQuestionIndex === questions?.length - 1) {
          navigate("/result");
        }
      }
    }, 2000);
    return () => clearTimeout(counter);
  }, [isAnswered]);

  const question =
    questions && questions instanceof Array && questions[currentQuestionIndex];
  const cleanQuestion =
    questions && questions instanceof Array && questions[currentQuestionIndex]
      ? DOMPurify.sanitize(
          questions[currentQuestionIndex]?.question,
          configDomPurify
        )
          .replace(/classname/g, "class")
          .replace(/className/g, "class")
      : "";
  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: cleanQuestion }}></h2>
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
      <div className="actions-container">
        <button
          className="btn skip-btn"
          onClick={() => {
            getNextQuestion();
            if (currentQuestionIndex === questions?.length - 1) {
              navigate("/result");
            }
          }}
        >
          Skip
        </button>

        <button
          className="btn give-up-btn"
          onClick={() => {
            givingUp();
            navigate("/result");
          }}
        >
          Give Up
        </button>
      </div>
    </div>
  );
}

export default Questions;
