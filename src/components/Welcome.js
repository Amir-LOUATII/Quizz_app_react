import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <section className="welcome-screen">
      <div className="container">
        <h1>Welcome to QuizMaster!</h1>
        <p>
          Dive into a world of fun quizzes and test your knowledge. Choose your
          favorite subjects like Sports, Culture, History, and more!
        </p>
        <button
          className="btn"
          onClick={() => {
            navigate("/start");
          }}
          aria-label="Start Quiz"
        >
          Start Quiz
        </button>
      </div>
    </section>
  );
};

export default Welcome;
