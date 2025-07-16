import React from "react";
import { useLanguage } from "../LanguageContext";
import translations from "../i18n";

function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Luiz Henrique. {t.copyright}
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com/Luizrodrlguesz"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.github}
          </a>
          <a
            href="https://www.linkedin.com/in/luiz-rodrigues-372866256/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.linkedin}
          </a>
          <a href="mailto:luizh4321@gmail.com">{t.email}</a>
          <a href="https://wa.me/5541988657834" target="_blank" rel="noopener noreferrer">
            {t.whatsapp}
          </a>
          <a href="https://www.instagram.com/rodrlguesz/" target="_blank" rel="noopener noreferrer">
            {t.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
