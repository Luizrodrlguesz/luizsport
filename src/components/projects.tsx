import { useState, useEffect, useRef } from "react";
import lunarbotImg from "/src/assets/lunar.png";
import haberImg from "/src/assets/haber.png";
import aprovaImg from "/src/assets/aprova.png";
import htmlcssLogo from "/src/assets/skills/htmlcss.png";
import reactLogo from "/src/assets/skills/react.png";
import laravelLogo from "/src/assets/skills/laravel.png";
import postLogo from "/src/assets/skills/postman.png";
import tailwindLogo from "/src/assets/skills/tailwind.png";
import bootstrapLogo from "/src/assets/skills/bootstrap.png";
import javascriptLogo from "/src/assets/skills/js.png";
import figmaLogo from "/src/assets/skills/figma.png";
import notionLogo from "/src/assets/skills/notion.png";
import vercelLogo from "/src/assets/skills/vercel.png";
import boyImg from "../assets/boy.png";
import "./project.css";
import { useLanguage } from "../LanguageContext";
import translations from "../i18n";

interface Project {
  id: number;
  title: {
    pt: string;
    en: string;
    fr: string;
  };
  subtitle: {
    pt: string;
    en: string;
    fr: string;
  };
  description: {
    pt: string;
    en: string;
    fr: string;
  };
  image: string;
  themeColor: string;
  liveLink: string;
  figmaLink: string;
  skills: string[];
  category: {
    pt: string;
    en: string;
    fr: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: {
      pt: "LunarBot.io",
      en: "LunarBot.io",
      fr: "LunarBot.io"
    },
    subtitle: {
      pt: "Dashboard Administrativo e Landing Page",
      en: "Admin Dashboard and Landing Page",
      fr: "Tableau de bord Administratif et Landing Page"
    },
    description: {
      pt: "Sistema de gerenciamento para bot do Telegram com interface intuitiva. Inclui controle de usuários, mensagens, comandos, grupos e monitoramento de estatísticas, configurações e logs. Desenvolvido com foco na usabilidade e eficiência operacional.",
      en: "Telegram bot management system with intuitive interface. Includes user control, messages, commands, groups and monitoring of statistics, settings and logs. Developed with focus on usability and operational efficiency.",
      fr: "Système de gestion pour bot Telegram avec interface intuitive. Comprend le contrôle des utilisateurs, messages, commandes, groupes et surveillance des statistiques, configurations et logs. Développé avec un focus sur l'utilisabilité et l'efficacité opérationnelle."
    },
    image: lunarbotImg,
    themeColor: "#8b5cf6",
    liveLink: "https://lunarbot.com.br/",
    figmaLink: "https://www.figma.com/design/0gHgezIDrlEidd1cYQymAY/lunarbot?node-id=8-134&t=9CtnBgcuyuGNeN0I-0",
    skills: [htmlcssLogo, bootstrapLogo, javascriptLogo, laravelLogo, postLogo, notionLogo, figmaLogo],
    category: {
      pt: "Sistema e Landing Page",
      en: "System and Landing Page",
      fr: "Système et Landing Page"
    }
  },
  {
    id: 2,
    title: {
      pt: "Aprova Legal",
      en: "Aprova Legal",
      fr: "Aprova Legal"
    },
    subtitle: {
      pt: "Sistema de Seguro Imobiliário",
      en: "Real Estate Insurance System",
      fr: "Système d'assurance immobilière"
    },
    description: {
      pt: "Sistema de Seguro Imobiliário com interface intuitiva e funcionalidades avançadas. Inclui controle de clientes, apólices, sinistros, relatórios e muito mais.",
      en: "Real estate insurance system with intuitive interface and advanced features. Includes customer control, policies, claims, reports and more.",
      fr: "Système d'assurance immobilière avec interface intuitive et fonctionnalités avancées. Inclut le contrôle des clients, des polices, des sinistres, des rapports et bien plus encore."
    },
    image: aprovaImg,
    themeColor: "#22c55e",
    liveLink: "#",
    figmaLink: "https://www.figma.com/design/3RdM5hEbL9989k5AhNRTIe/Aprova-Legal?t=xAN2eKZc5v8n3KAc-0",
    skills: [htmlcssLogo, bootstrapLogo, javascriptLogo, laravelLogo, figmaLogo],
    category: {
      pt: "Sistema",
      en: "System",
      fr: "Système"
    }
  },
  {
    id: 3,
    title: {
      pt: "Haber Contabilidade",
      en: "Haber Accounting",
      fr: "Haber Comptabilité"
    },
    subtitle: {
      pt: "Landing Page Profissional e micro-sistema de controle de contabilidade",
      en: "Professional Landing Page and accounting control system",
      fr: "Landing Page Professionnelle et système de contrôle de comptabilité"
    },
    description: {
      pt: "Landing Page profissional desenvolvida com foco em captação de leads para serviços contábeis. Micro-sistema de controle de contabilidade desenvolvido com foco em usabilidade e eficiência operacional.",
      en: "Professional landing page focused on lead generation for accounting services. Accounting control system developed with focus on usability and operational efficiency.",
      fr: "Landing Page professionnelle axée sur la génération de leads pour les services comptables. Système de contrôle de comptabilité développé avec un focus sur l'utilisabilité et l'efficacité opérationnelle."
    },
    image: haberImg,
    themeColor: "#0ea5e9",
    liveLink: "https://haber.vercel.app",
    figmaLink: "#",
    skills: [reactLogo, tailwindLogo, vercelLogo],
    category: {
      pt: "Sistema e Landing Page",
      en: "System and Landing Page",
      fr: "Système et Landing Page"
    }
  },
];

export default function ProjectCarousel() {
  const [active, setActive] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [fade, setFade] = useState<"in" | "out">("in");
  const [projectsVisible, setProjectsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
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


  const handleProjectChange = (index: number) => {
    if (isAnimating || index === active) return;
    setIsAnimating(true);
    setFade("out");
    setTimeout(() => {
      setActive(index);
      setFade("in");
      setTimeout(() => {
        setIsAnimating(false);
      }, 350);
    }, 350);
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
              style={{ '--theme-color': project.themeColor } as React.CSSProperties}
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
                    style={{ '--theme-color': currentProject.themeColor } as React.CSSProperties}
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
                    style={{ '--theme-color': currentProject.themeColor } as React.CSSProperties}
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

