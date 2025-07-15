import { useState } from "react";
import lunarbotImg from "/src/assets/lunar.png";
import haberImg from "/src/assets/haber.png";
import portfolioImg from "/src/assets/portifolio.png";
import htmlcssLogo from "/src/assets/skills/htmlcss.png";
import reactLogo from "/src/assets/skills/react.png";
import laravelLogo from "/src/assets/skills/laravel.png";
import tailwindLogo from "/src/assets/skills/tailwind.png";
import figmaLogo from "/src/assets/skills/figma.png";
import vercelLogo from "/src/assets/skills/vercel.png";
import "./project.css";

const projects = [
  {
    id: 1,
    title: "Dashboard LunarBot",
    subtitle: "Dashboard Administrativo",
    description:
      "Dashboard moderno com estilo glassmorfismo e integração completa com Telegram. Interface intuitiva para gerenciamento de dados em tempo real.",
    image: lunarbotImg,
    themeColor: "#0ea5e9",
    liveLink: "https://lunarbot.vercel.app",
    figmaLink: "#",
    skills: [reactLogo, tailwindLogo, vercelLogo],
    category: "Dashboard"
  },
  {
    id: 2,
    title: "Haber Contabilidade",
    subtitle: "Landing Page Profissional",
    description:
      "Landing page elegante focada em captação de leads para serviços contábeis. Design responsivo com foco em conversão e experiência do usuário.",
    image: haberImg,
    themeColor: "#f43f5e",
    liveLink: "https://haber.vercel.app",
    figmaLink: "#",
    skills: [htmlcssLogo, laravelLogo, figmaLogo],
    category: "Landing Page"
  },
  {
    id: 3,
    title: "Portfólio Pessoal",
    subtitle: "Portfólio Interativo",
    description: "Portfólio moderno desenvolvido com Vite + React, apresentando projetos e habilidades de forma elegante e profissional.",
    image: portfolioImg,
    themeColor: "#22c55e",
    liveLink: "https://meuport.vercel.app",
    figmaLink: "#",
    skills: [reactLogo, tailwindLogo, vercelLogo],
    category: "Portfólio"
  },
];

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleProjectChange = (index) => {
    if (isAnimating || index === active) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setIsAnimating(false);
    }, 300);
  };

  const currentProject = projects[active];

  return (
    <section className="section project-carousel project-bg-shared">
      <div className="projects-container">
        {/* Header da seção */}
        <div className="projects-header">
          <h2 className="projects-title">Projetos</h2>
          <p className="projects-subtitle">
            Conheça alguns dos meus trabalhos mais recentes e relevantes
          </p>
        </div>

        {/* Navegação dos projetos */}
        <div className="projects-nav">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`project-nav-btn ${index === active ? "active" : ""}`}
              onClick={() => handleProjectChange(index)}
              style={{ '--theme-color': project.themeColor }}
            >
              <span className="project-nav-number">0{index + 1}</span>
              <span className="project-nav-title">{project.title}</span>
              <span className="project-nav-category">{project.category}</span>
            </button>
          ))}
        </div>

        {/* Conteúdo principal do projeto */}
        <div className="project-showcase">
          <div className={`project-content-wrapper ${isAnimating ? "animating" : ""}`}>
            {/* Imagem do projeto */}
            <div className="project-image-section">
              <div className="project-image-container">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="project-main-image"
                />
                <div 
                  className="project-image-overlay"
                  style={{ background: `linear-gradient(135deg, ${currentProject.themeColor}15 0%, transparent 100%)` }}
                />
              </div>
            </div>

            {/* Informações do projeto */}
            <div className="project-info-section">
              <div className="project-info-content">
                <div className="project-header-info">
                  <span className="project-category" style={{ color: currentProject.themeColor }}>
                    {currentProject.category}
                  </span>
                  <h3 className="project-title">{currentProject.title}</h3>
                  <p className="project-subtitle-info">{currentProject.subtitle}</p>
                </div>

                <p className="project-description">
                  {currentProject.description}
                </p>

                {/* Tecnologias utilizadas */}
                <div className="project-technologies">
                  <h4>Tecnologias Utilizadas</h4>
                  <div className="tech-stack">
                    {currentProject.skills.map((skill, i) => (
                      <div key={i} className="tech-item">
                        <img src={skill} alt="Tech" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botões de ação */}
                <div className="project-actions">
                  <a
                    href={currentProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary"
                    style={{ '--theme-color': currentProject.themeColor }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13V19A2 2 0 0 1 16 21H5A2 2 0 0 1 3 19V8A2 2 0 0 1 5 6H11M15 3H21V9M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Visitar Projeto
                  </a>
                  <a
                    href={currentProject.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn secondary"
                    style={{ '--theme-color': currentProject.themeColor }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Ver no Figma
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de progresso */}
        <div className="project-indicators">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === active ? "active" : ""}`}
              onClick={() => handleProjectChange(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
