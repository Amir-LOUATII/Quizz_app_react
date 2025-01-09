// path/to/your/Quiz.js
import React from "react";
import { useGlobalContext } from "../context/context";
import Loading from "../UI/Loading";
import Questions from "./Question";
import QuizHeader from "./QuizHeader";

const Quiz = () => {
  const { isLoading, questions, currentQuestionIndex } = useGlobalContext();

  if (isLoading || questions.length < 1) return <Loading />;

  return (
    <section className="section">
      {!isLoading && questions.length > 0 && (
        <article className="form">
          <QuizHeader />
          <Questions key={`question-${currentQuestionIndex}`} />
        </article>
      )}
    </section>
  );
};

export default Quiz;
