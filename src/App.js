import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Welcome from "./components/Welcome";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { index: true, element: <Welcome /> },
      {
        path: "start",
        element: <Form />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
