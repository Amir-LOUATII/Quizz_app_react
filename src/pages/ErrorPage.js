import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate.push("/");
  };

  return (
    <div className="error-page">
      <h1>Error</h1>
      <p>{message || "An unexpected error occurred."}</p>
      <button onClick={handleGoHome} className="btn">
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
