import { useState, useEffect, useRef } from "react";
import lunarbotImg from "/src/assets/lunar.png";
import haberImg from "/src/assets/haber.png";
import portfolioImg from "/src/assets/portifolio.png";
import htmlcssLogo from "/src/assets/skills/htmlcss.png";
import reactLogo from "/src/assets/skills/react.png";
import laravelLogo from "/src/assets/skills/laravel.png";
import tailwindLogo from "/src/assets/skills/tailwind.png";
import bootstrapLogo from "/src/assets/skills/bootstrap.png";
import javascriptLogo from "/src/assets/skills/js.png";
import figmaLogo from "/src/assets/skills/figma.png";
import notionLogo from "/src/assets/skills/notion.png";
import vercelLogo from "/src/assets/skills/vercel.png";
import voyajatoImg from "../assets/voyajato.png";
import boyImg from "../assets/boy.png";
import "./project.css";
import { useLanguage } from "../LanguageContext";
import translations from "../i18n";

const projects = [
  {
    id: 1,
    title: {
      pt: "Dashboard LunarBot",
      en: "LunarBot Dashboard",
      fr: "Tableau de bord LunarBot"
    },
    subtitle: {
      pt: "Dashboard Administrativo",
      en: "Admin Dashboard",
      fr: "Tableau de bord Administratif"
    },
    description: {
      pt: "Sistema de gerenciamento para bot do Telegram com interface intuitiva. Inclui controle de usuários, mensagens, comandos, grupos e monitoramento de estatísticas, configurações e logs. Desenvolvido com foco na usabilidade e eficiência operacional.",
      en: "Telegram bot management system with intuitive interface. Includes user control, messages, commands, groups and monitoring of statistics, settings and logs. Developed with focus on usability and operational efficiency.",
      fr: "Système de gestion pour bot Telegram avec interface intuitive. Comprend le contrôle des utilisateurs, messages, commandes, groupes et surveillance des statistiques, configurations et logs. Développé avec un focus sur l'utilisabilité et l'efficacité opérationnelle."
    },
    image: lunarbotImg,
    themeColor: "#0ea5e9",
    liveLink: "https://lunarbot.vercel.app",
    figmaLink: "#",
    skills: [htmlcssLogo, bootstrapLogo, javascriptLogo, laravelLogo, notionLogo, figmaLogo],
    category: {
      pt: "Sistema",
      en: "System",
      fr: "Système"
    }
  },
  {
    id: 2,
    title: {
      pt: "Haber Contabilidade",
      en: "Haber Accounting",
      fr: "Haber Comptabilité"
    },
    subtitle: {
      pt: "Landing Page Profissional",
      en: "Professional Landing Page",
      fr: "Landing Page Professionnelle"
    },
    description: {
      pt: "Landing page elegante focada em captação de leads para serviços contábeis. Design responsivo com foco em conversão e experiência do usuário.",
      en: "Elegant landing page focused on lead generation for accounting services. Responsive design focused on conversion and user experience.",
      fr: "Landing page élégante axée sur la génération de leads pour les services comptables. Design responsive axé sur la conversion et l'expérience utilisateur."
    },
    image: haberImg,
    themeColor: "#f43f5e",
    liveLink: "https://haber.vercel.app",
    figmaLink: "#",
    skills: [reactLogo, htmlcssLogo, javascriptLogo, tailwindLogo, vercelLogo],
    category: {
      pt: "Landing Page",
      en: "Landing Page",
      fr: "Landing Page"
    }
  },
  {
    id: 3,
    title: {
      pt: "Portfólio Pessoal",
      en: "Personal Portfolio",
      fr: "Portfolio Personnel"
    },
    subtitle: {
      pt: "Portfólio Interativo",
      en: "Interactive Portfolio",
      fr: "Portfolio Interactif"
    },
    description: {
      pt: "Portfólio moderno desenvolvido com Vite + React, apresentando projetos e habilidades de forma elegante e profissional.",
      en: "Modern portfolio developed with Vite + React, presenting projects and skills in an elegant and professional way.",
      fr: "Portfolio moderne développé avec Vite + React, présentant des projets et des compétences de manière élégante et professionnelle."
    },
    image: portfolioImg,
    themeColor: "#22c55e",
    liveLink: "https://meuport.vercel.app",
    figmaLink: "#",
    skills: [reactLogo, tailwindLogo, vercelLogo],
    category: {
      pt: "Portfólio",
      en: "Portfolio",
      fr: "Portfolio"
    }
  },
];

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [fade, setFade] = useState("in"); // novo estado para fade
  const [bgVisible, setBgVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].projects;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setProjectsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Efeito de entrada ao montar
    setTimeout(() => setBgVisible(true), 300);
  }, []);

  const handleProjectChange = (index) => {
    if (isAnimating || index === active) return;
    setIsAnimating(true);
    setFade("out"); // inicia fade-out
    setTimeout(() => {
      setActive(index);
      setFade("in"); // inicia fade-in
      setTimeout(() => {
        setIsAnimating(false);
      }, 350); // tempo do fade-in
    }, 350); // tempo do fade-out
  };

  const currentProject = projects[active];

  return (
    <section className="section project-carousel project-bg-shared" ref={sectionRef}>
      {/* Imagem decorativa boy à esquerda */}
      <img
        src={boyImg}
        alt="Boy"
        className={`boy-bg-img${projectsVisible ? " visible" : ""}`}
        aria-hidden="true"
      />
      {/* Imagem decorativa voyajato removida daqui */}
      <div className="projects-container">
        {/* Header da seção */}
        <div className="projects-header">
          <h2 className={`projects-title section-title-animate${projectsVisible ? " visible" : ""}`}>{t.title}</h2>
          <p className="projects-subtitle">
            {t.subtitle}
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
              <span className="project-nav-title">{project.title[language]}</span>
              <span className="project-nav-category">{project.category[language]}</span>
            </button>
          ))}
        </div>

        {/* Conteúdo principal do projeto */}
        <div className={`project-showcase fade-${fade}`}>
          <div className={`project-content-wrapper ${isAnimating ? "animating" : ""}`}>
            {/* Imagem do projeto */}
            <div className="project-image-section">
              <div className="project-image-container">
                <img
                  src={currentProject.image}
                  alt={currentProject.title[language]}
                  className={`project-main-image fade-${fade}`}
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
                    {currentProject.category[language]}
                  </span>
                  <h3 className="project-title">{currentProject.title[language]}</h3>
                  <p className="project-subtitle-info">{currentProject.subtitle[language]}</p>
                </div>

                <p className="project-description">
                  {currentProject.description[language]}
                </p>

                {/* Tecnologias utilizadas */}
                <div className="project-technologies">
                  <h4>{t.techs}</h4>
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
                    {t.visit}
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
                    {t.figma}
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
