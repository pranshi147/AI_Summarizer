import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>AI Summarizer</h2>

        <p>
          Summarize documents quickly and efficiently using AI.
        </p>

        <div className="social-links">

          <a
            href="https://github.com/pranshi147"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/pranshimittal"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <span>
          © 2026 Pranshi Mittal. All rights reserved.
        </span>

      </div>

    </footer>
  );
}

export default Footer;