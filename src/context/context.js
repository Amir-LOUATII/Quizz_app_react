import { createContext, useContext, useReducer, useState } from "react";
import settingReducer from "./settingReducer";
const AppContext = createContext();
const intialSetting = {
  setting: true,
  category: 21,
  difficulty: "easy",
  amount: 10,
};

const AppContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestion] = useState([]);
  const [isError, setIsError] = useState(false);
  const [score, setScore] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [settingState, dispatchSetting] = useReducer(
    settingReducer,
    intialSetting
  );

  const changeAmount = (value) => {
    dispatchSetting({ type: "CHANGE_AMOUNT", payload: value });
  };

  const changeCategory = (value) => {
    dispatchSetting({ type: "CHANGE_CATEGORY", payload: value });
  };

  const changeDifficulty = (value) => {
    dispatchSetting({ type: "CHANGE_DIFFICULTY", payload: value });
  };

  const endSetting = () => {
    dispatchSetting({ type: "END_SETTING" });
  };

  const startSetting = () => {
    dispatchSetting({ type: "START_SETTING" });
  };

  function fetchQuestions() {
    setIsLoading(true);
    const url = `https://opentdb.com/api.php?amount=${settingState.amount}&category=${settingState.category}&difficulty=${settingState.difficulty}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        const data = responseData.results.map((item) => {
          const { question, correct_answer, incorrect_answers } = item;
          const answers = [...incorrect_answers];
          const tempIndex = Math.floor(Math.random() * answers.length);
          if (tempIndex == answers.length - 1) {
            answers.push(correct_answer);
          } else {
            answers.push(answers[tempIndex]);
            answers[tempIndex] = correct_answer;
          }
          return { question, correct_answer, answers };
        });

        setQuestion(data);
        setNumberOfQuestions(data.length);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(setIsLoading(false));
  }
  return (
    <AppContext.Provider
      value={{
        ...settingState,
        isLoading,
        changeAmount,
        changeCategory,
        changeDifficulty,
        endSetting,
        fetchQuestions,
        questions,
        score,
        setScore,
        numberOfQuestions,
        showResult,
        setShowResult,
        startSetting,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContextProvider };
