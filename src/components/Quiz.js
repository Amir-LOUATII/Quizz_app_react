// path/to/your/Quiz.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../context/context";
import Questions from "./Question";
import QuizHeader from "./QuizHeader";

const Quiz = () => {
  const { isLoading, questions, currentQuestionIndex, isError } =
    useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !!questions === false ||
      (!!questions.length === false && questions.length < 1)
    ) {
      navigate("/");
    }
  }, [questions]);

  if (isError) {
  }
  return (
    <section className="game-container">
      {!isLoading && !!questions && questions.length > 0 && (
        <article className="form">
          <QuizHeader />
          <Questions key={`question-${currentQuestionIndex}`} />
        </article>
      )}
    </section>
  );
};

export default Quiz;
