import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { useGlobalContext } from "./context/context";
import Loading from "./UI/Loading";

function App() {
  const { setting, showResult } = useGlobalContext();
  return (
    <>
      <Navbar />
      <section id="game-container">
        {setting && <Form />}
        {!setting && <Quiz />}
        {showResult && <Result />}
      </section>
    </>
  );
}

export default App;
