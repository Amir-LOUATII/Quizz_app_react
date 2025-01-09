import React from "react";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} QuizMaster | Built by
          <strong>Amir Louati </strong>
        </p>
        <p>Test your knowledge and enjoy learning something new every day!</p>
      </div>
    </footer>
  );
};

export default Footer;
