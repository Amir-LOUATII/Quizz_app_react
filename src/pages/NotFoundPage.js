import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate("/");

  const handleReload = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate.push("/");
  };

  return (
    <div className="not-found">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div className="button-container">
        <button onClick={handleReload} className="btn">
          Reload
        </button>
        <button onClick={handleGoHome} className="btn">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
