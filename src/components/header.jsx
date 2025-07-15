import React, { useEffect, useState } from "react";
import logoImg from "../assets/64-logo.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <a href="#home" onClick={e => handleNavClick(e, 'home')}>Início</a>
          <a href="#about" onClick={e => handleNavClick(e, 'about')}>Sobre</a>
          <a href="#skills" onClick={e => handleNavClick(e, 'skills')}>Habilidades</a>
          <a href="#projects" onClick={e => handleNavClick(e, 'projects')}>Projetos</a>
          <a href="#contact" onClick={e => handleNavClick(e, 'contact')}>Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
