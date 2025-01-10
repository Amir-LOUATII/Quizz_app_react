import React from "react";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} QuizMaster | Built by
          <strong>
            <a
              href="https://portfolio-amir-louati.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Amir Louati
            </a>
          </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
