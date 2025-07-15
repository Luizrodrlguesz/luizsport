import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Luiz Henrique. Todos os direitos
          reservados.
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com/Luizrodrlguesz"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/luiz-henrique-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:luizh4321@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
