import React, { useEffect, useState } from "react";
import logoImg from "../assets/64-logo.png";
import { useLanguage } from "../LanguageContext";
import translations from "../i18n";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].header;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave para âncoras
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <img src={logoImg} alt="Logo" />
        <nav className="nav">
          <a href="#home" onClick={e => handleNavClick(e, 'home')}>{t.home}</a>
          <a href="#about" onClick={e => handleNavClick(e, 'about')}>{t.about}</a>
          <a href="#skills" onClick={e => handleNavClick(e, 'skills')}>{t.skills}</a>
          <a href="#projects" onClick={e => handleNavClick(e, 'projects')}>{t.projects}</a>
          <a href="#contact" onClick={e => handleNavClick(e, 'contact')}>{t.contact}</a>
          <select className="lang-select" value={language} onChange={e => setLanguage(e.target.value)}>
            <option value="pt">PT-BR</option>
            <option value="en">EN-US</option>
            <option value="fr">FR-FR</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Header;
