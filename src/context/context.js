import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import settingReducer from "./settingReducer";

const AppContext = createContext();
const initialSetting = {
  setting: true,
  category: 21,
  difficulty: "easy",
  amount: 10,
};

const AppContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);
  const [questions, setQuestion] = useState(
    JSON.parse(window.sessionStorage.getItem("questions") || "[]")
  );

  const [isError, setIsError] = useState(false);
  const [score, setScore] = useState(
    +window.sessionStorage.getItem("score") || 0
  );
  const [showResult, setShowResult] = useState(false);
  const [settingState, dispatchSetting] = useReducer(
    settingReducer,
    initialSetting
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    +window.sessionStorage.getItem("currentIndex") || 0
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
    return fetch(url)
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
        window.sessionStorage.setItem("questions", JSON.stringify(data));
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(setIsLoading(false));
  }

  function getNextQuestion() {
    if (
      questions &&
      questions.length > 0 &&
      +currentQuestionIndex < +questions.length - 1
    ) {
      setCurrentQuestionIndex((prevState) => prevState + 1);
    }
  }
  function addPoint() {
    setScore((prevState) => +prevState + 1);
  }

  function isFinished() {
    return currentQuestionIndex === questions.length - 1;
  }

  function givingUp() {
    setGaveUp(true);
  }

  function reset() {
    startSetting();
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuestion([]);
    window.sessionStorage.removeItem("questions");
    window.sessionStorage.removeItem("currentIndex");
    window.sessionStorage.removeItem("score");
  }
  useEffect(() => {
    window.sessionStorage.setItem(
      "currentIndex",
      JSON.stringify(currentQuestionIndex)
    );
  }, [currentQuestionIndex]);
  useEffect(() => {
    window.sessionStorage.setItem("score", JSON.stringify(score));
  }, [currentQuestionIndex]);

  function numberOfQuestions() {
    return questions?.length || 0;
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
        addPoint,
        numberOfQuestions,
        showResult,
        setShowResult,
        startSetting,
        getNextQuestion,
        currentQuestionIndex,
        isFinished,
        gaveUp,
        givingUp,
        reset,
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
