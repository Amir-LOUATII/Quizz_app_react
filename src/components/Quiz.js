import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import Loading from "../UI/Loading";

const Quiz = () => {
  const { isLoading, questions, score, setScore, setShowResult } =
    useGlobalContext();
  const [index, setIndex] = useState(0);

  function clickHandler(e) {
    const newIndex = index + 1;
    if (newIndex < questions.length) {
      setIndex(newIndex);
    } else {
      setShowResult(true);
    }

    if (e.currentTarget.dataset.answer === questions[index].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function skipClickHandler() {
    const newIndex = index + 1;
    if (newIndex < questions.length) {
      setIndex(newIndex);
    } else {
      setShowResult(true);
    }
  }

  if (isLoading || questions.length < 1) return <Loading />;
  return (
    <section>
      {!isLoading && questions.length > 0 && (
        <main>
          <div className="container">
            <article className="quiz">
              <div className="score">
                <div>
                  Question:
                  <span>{` ${index + 1} / ${questions.length}`}</span>
                </div>
                <div>
                  score: <span>{`${score} / ${questions.length}`}</span>
                </div>
              </div>
              <h2
                dangerouslySetInnerHTML={{ __html: questions[index].question }}
              />
              <div className="btn-container">
                {questions[index].answers.map((item, index) => {
                  return (
                    <button
                      className="answer-btn"
                      data-answer={item}
                      key={index}
                      onClick={clickHandler}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  );
                })}
              </div>
              <button className="skip" onClick={skipClickHandler}>
                Skip
              </button>
            </article>
          </div>
        </main>
      )}
    </section>
  );
};

export default Quiz;
