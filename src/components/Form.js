import React from "react";
import { useGlobalContext } from "../context/context";

function Form() {
  const {
    amount,
    changeAmount,
    changeCategory,
    changeDifficulty,
    endSetting,
    fetchQuestions,
  } = useGlobalContext();

  const clickHandler = () => {
    endSetting();
    fetchQuestions();
  };
  return (
    <section className="section">
      <div className="container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1>Setup Quiz</h1>
          <div className="form-control">
            <label htmlFor="number">Number Of Questions</label>
            <input
              type="number"
              name="number"
              id="number"
              className="form-input"
              value={amount}
              onChange={(e) => {
                changeAmount(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              onChange={(e) => {
                changeCategory(e.currentTarget.value);
              }}
            >
              <option value="21">Sports</option>
              <option value="23">History</option>
              <option value="24">Politic</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">Select Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              onChange={(e) => {
                changeDifficulty(e.currentTarget.value);
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button className="submit-btn" onClick={clickHandler}>
            Start
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
