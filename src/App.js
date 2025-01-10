import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Welcome from "./components/Welcome";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ErrorBoundary } from "react-error-boundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary fallback={<ErrorPage />}>
        <HomePage />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
