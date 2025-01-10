import React from "react";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router";

function Form() {
  const {
    amount,
    changeAmount,
    changeCategory,
    changeDifficulty,
    endSetting,
    fetchQuestions,
  } = useGlobalContext();

  const clickHandler = async () => {
    endSetting();
    fetchQuestions().then(() => navigate("/quiz"));
  };
  const navigate = useNavigate();
  return (
    <section className="game-container">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="form-title">Quiz Setup</h1>

        {/* Number of Questions */}
        <div className="form-control">
          <label htmlFor="number" className="form-label">
            Number of Questions
          </label>
          <input
            type="number"
            id="number"
            name="number"
            className="form-input"
            value={amount}
            onChange={(e) => changeAmount(e.target.value)}
            placeholder="Enter number of questions"
            aria-label="Enter the number of questions for the quiz"
            min="1"
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label htmlFor="category" className="form-label">
            Select a Category
          </label>
          <select
            id="category"
            name="category"
            className="form-input"
            onChange={(e) => changeCategory(e.currentTarget.value)}
            defaultValue=""
            aria-label="Select quiz category"
          >
            <option value="21">Sports</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
          </select>
        </div>

        {/* Difficulty */}
        <div className="form-control">
          <label htmlFor="difficulty" className="form-label">
            Select Difficulty Level
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="form-input"
            onChange={(e) => changeDifficulty(e.currentTarget.value)}
            defaultValue=""
            aria-label="Select difficulty level"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="form-footer">
          <button
            type="button"
            className="btn"
            onClick={clickHandler}
            aria-label="Start the quiz"
          >
            Start Quiz
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
