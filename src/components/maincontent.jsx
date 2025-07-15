import React from "react";
import "../index.css";
import SkillsSection from "../components/skills";
import ProjectCarousel from "./projects";

function Portfolio() {
  return (
    <main className="portfolio">
      {/* Apresentação */}
      <section className="section intro">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="/src/assets/bg-video.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>

        <div className="gradient-overlay"></div>

        <div className="intro-overlay">
          <div className="intro-left">
            <img
              src="/src/assets/profile.png"
              alt="Luiz Henrique"
              className="profile-pic"
            />
            <h1>Eu sou Luiz Henrique</h1>
            <p>Desenvolvedor Júnior Front-end | React | Node.js | Tailwind</p>
          </div>

          <div className="intro-right">
            <p>
              Olá, sou Luiz Rodrigues, Desenvolvedor Júnior Front-end. Comecei
              minha jornada no desenvolvimento em 2023 e desde então venho
              aprendendo e aplicando minhas habilidades em projetos reais, com
              foco em tecnologias como React e Node.js.
            </p>
            <button className="img-btn">
              <img src="/src/assets/btn.png" alt="Acessar" />
            </button>
          </div>
        </div>
      </section>

      {/* Sobre mim */}
      <section className="section about">
        <div className="about-div">
          {/* Introdução Centralizada */}
          <div className="about-intro about-section">
            <h2>Sobre mim</h2>
            <p>
              Estudante de Engenharia de Software, pela universidade Unicesumar,
              meu objetivo profissional é impulsionado pelo gosto da sensação de
              saber mais sobre a área e poder ajudar cada vez mais as pessoas
              que me acompanham nessa jornada.
            </p>
          </div>

          {/* Imagem central com animação */}
          <div className="about-section image-only">
            <img
              src="/src/assets/guitar.png"
              alt="Guitarra"
              className="guitar-animated"
            />
          </div>

          {/* Capacitações com summary */}
          <div className="about-section center-text">
            <details>
              <summary>Capacitações</summary>
              <ul>
                <li>
                  🔹 Front-end: Proficiente em HTML, CSS, JavaScript, SASS e
                  React. Tenho experiência na criação de interfaces responsivas
                  e interativas, garantindo uma excelente experiência para os
                  usuários.
                </li>
                <li>
                  🔹 Back-end: Conhecimento em PHP e Laravel. Participei de
                  projetos com foco em integrações, formulários e segurança,
                  proporcionando uma visão abrangente do ciclo de
                  desenvolvimento.
                </li>
                <li>
                  🔹 Controle de Versão e Colaboração: Experiência com Git e
                  metodologias ágeis, permitindo uma integração eficaz em
                  equipes de desenvolvimento.
                </li>
                <li>
                  🔹 Comunicação Global: Certificado em curso de inglês,
                  possibilitando uma colaboração eficiente em projetos
                  internacionais.
                </li>
              </ul>
            </details>
          </div>

          {/* Experiência Profissional com summary */}
          <div className="about-section center-text">
            <details>
              <summary>Experiência Profissional</summary>
              <p>
                Trabalhei durante 5 meses em uma startup, atuando principalmente
                no desenvolvimento Front-end. Minha experiência incluiu a
                criação de sites, manutenção e correção de bugs em interfaces de
                sistemas, utilizando HTML, CSS e JavaScript. Além disso, tive a
                oportunidade de aprender e aplicar conceitos de Back-end,
                trabalhando com PHP e Laravel em tarefas como desenvolvimento de
                formulários e validação de usuários.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <SkillsSection />

      {/* Projetos */}
      <ProjectCarousel />

      {/* Contato */}
      <section className="section contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Entre em Contato</h2>
            <p className="contact-subtitle">
              Vamos criar algo incrível juntos! Estou sempre aberto a novas oportunidades e colaborações.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card email-card">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>Envie uma mensagem direta</p>
              <a 
                href="mailto:luizh4321@gmail.com" 
                className="contact-link email-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                luizh4321@gmail.com
              </a>
            </div>

            <div className="contact-card github-card">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 21.9627 5.7812 22.796 4.61C22.216 3.331 21.216 3.331 21.216 3.331C20.016 2.978 18.716 3.278 17.86 4.11C16.5 3.83 15.1 3.83 13.74 4.11C12.884 3.278 11.584 2.978 10.384 3.331C10.384 3.331 9.384 3.331 8.804 4.61C9.63725 5.7812 10.1003 7.12383 10.1 8.52C10.1 13.97 13.4 15.16 16.54 15.55C16.21 15.89 15.96 16.3 15.8 16.75C15.64 17.2 15.58 17.68 15.62 18.16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>GitHub</h3>
              <p>Veja meus projetos e contribuições</p>
              <a 
                href="https://github.com/Luizrodrlguesz" 
                className="contact-link github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Luizrodrlguesz
              </a>
            </div>

            <div className="contact-card linkedin-card">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>LinkedIn</h3>
              <p>Conecte-se profissionalmente</p>
              <a 
                href="https://linkedin.com/in/seu-link" 
                className="contact-link linkedin-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                /seu-link
              </a>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-content">
              <h3>Pronto para começar?</h3>
              <p>Vamos transformar suas ideias em realidade digital</p>
              <a 
                href="mailto:luizh4321@gmail.com" 
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iniciar Conversa
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
