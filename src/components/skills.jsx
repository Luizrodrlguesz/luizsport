import { useState, useRef, useEffect } from "react";
import "./skills.css";
import reactLogo from "/src/assets/skills/react.png";
import jsLogo from "/src/assets/skills/js.png";
import htmlcssLogo from "/src/assets/skills/htmlcss.png";
import tailwindLogo from "/src/assets/skills/tailwind.png";
import laravelLogo from "/src/assets/skills/laravel.png";
import gitLogo from "/src/assets/skills/git.png";
import figmaLogo from "/src/assets/skills/figma.png";
import bootstrapLogo from "/src/assets/skills/bootstrap.png";
import nodeLogo from "/src/assets/skills/node.png";
import jiraLogo from "/src/assets/skills/jira.png";
import vercelLogo from "/src/assets/skills/vercel.png";
import notionLogo from "/src/assets/skills/notion.png";
import voyajatoImg from "../assets/voyajato.png";
import { useLanguage } from "../LanguageContext";
import translations from "../i18n";

// Skill base
const allSkills = {
  front: [
    {
      id: "htmlcss",
      name: {
        pt: "HTML5 & CSS3",
        en: "HTML5 & CSS3",
        fr: "HTML5 & CSS3"
      },
      logo: htmlcssLogo,
      description: {
        pt: "Base para construção de sites. Crio estruturas semânticas com HTML e estilizações modernas com CSS, inclusive responsivo.",
        en: "Foundation for building websites. I create semantic structures with HTML and modern styling with CSS, including responsive design.",
        fr: "Base pour la création de sites. Je crée des structures sémantiques avec HTML et des styles modernes avec CSS, y compris le responsive."
      },
    },
    {
      id: "react",
      name: {
        pt: "React",
        en: "React",
        fr: "React"
      },
      logo: reactLogo,
      description: {
        pt: "Biblioteca JavaScript para construir interfaces de usuário modernas e reativas. Tenho domínio de componentes, hooks e integração com APIs.",
        en: "JavaScript library to build modern and reactive user interfaces. I master components, hooks, and API integration.",
        fr: "Bibliothèque JavaScript pour créer des interfaces utilisateur modernes et réactives. Maîtrise des composants, hooks et intégration d'APIs."
      },
    },
    {
      id: "tailwind",
      name: {
        pt: "Tailwind CSS",
        en: "Tailwind CSS",
        fr: "Tailwind CSS"
      },
      logo: tailwindLogo,
      description: {
        pt: "Framework CSS utilitário que me permite criar layouts rápidos e responsivos com classes diretas no HTML.",
        en: "Utility CSS framework that allows me to create fast and responsive layouts with direct classes in HTML.",
        fr: "Framework CSS utilitaire qui me permet de créer des mises en page rapides et responsives avec des classes directes dans le HTML."
      },
    },
    {
      id: "bootstrap",
      name: {
        pt: "Bootstrap",
        en: "Bootstrap",
        fr: "Bootstrap"
      },
      logo: bootstrapLogo,
      description: {
        pt: "Framework popular para desenvolvimento front-end com componentes prontos e sistema de grid responsivo.",
        en: "Popular framework for front-end development with ready-made components and responsive grid system.",
        fr: "Framework populaire pour le développement front-end avec des composants prêts à l'emploi et un système de grille responsive."
      },
    },
  ],
  back: [
    {
      id: "js",
      name: {
        pt: "JavaScript (ES6+)",
        en: "JavaScript (ES6+)",
        fr: "JavaScript (ES6+)"
      },
      logo: jsLogo,
      description: {
        pt: "Linguagem de programação essencial para web. Utilizo recursos modernos como arrow functions, async/await, e manipulação de DOM.",
        en: "Essential programming language for the web. I use modern features like arrow functions, async/await, and DOM manipulation.",
        fr: "Langage de programmation essentiel pour le web. J'utilise des fonctionnalités modernes comme les arrow functions, async/await et la manipulation du DOM."
      },
    },
    {
      id: "laravel",
      name: {
        pt: "Laravel (PHP)",
        en: "Laravel (PHP)",
        fr: "Laravel (PHP)"
      },
      logo: laravelLogo,
      description: {
        pt: "Framework PHP para back-end. Experiência com rotas, autenticação, validação de formulários e integração com banco de dados.",
        en: "PHP framework for back-end. Experience with routes, authentication, form validation, and database integration.",
        fr: "Framework PHP pour le back-end. Expérience avec les routes, l'authentification, la validation de formulaires et l'intégration de bases de données."
      },
    },
    {
      id: "node",
      name: {
        pt: "Node.js",
        en: "Node.js",
        fr: "Node.js"
      },
      logo: nodeLogo,
      description: {
        pt: "Ambiente de execução JavaScript no servidor. Experiência com APIs REST, Express e integração com bancos de dados.",
        en: "JavaScript runtime environment on the server. Experience with REST APIs, Express, and database integration.",
        fr: "Environnement d'exécution JavaScript côté serveur. Expérience avec les APIs REST, Express et l'intégration de bases de données."
      },
    },
  ],
  outros: [
    {
      id: "git",
      name: {
        pt: "Git & GitHub",
        en: "Git & GitHub",
        fr: "Git & GitHub"
      },
      logo: gitLogo,
      description: {
        pt: "Versionamento de código com Git e colaboração via GitHub. Branches, commits e pull requests fazem parte do meu fluxo diário.",
        en: "Code versioning with Git and collaboration via GitHub. Branches, commits, and pull requests are part of my daily workflow.",
        fr: "Gestion de versions avec Git et collaboration via GitHub. Branches, commits et pull requests font partie de mon flux quotidien."
      },
    },
    {
      id: "figma",
      name: {
        pt: "Figma (básico)",
        en: "Figma (basic)",
        fr: "Figma (basique)"
      },
      logo: figmaLogo,
      description: {
        pt: "Ferramenta de design que uso para entender, adaptar e colaborar em interfaces e protótipos.",
        en: "Design tool I use to understand, adapt, and collaborate on interfaces and prototypes.",
        fr: "Outil de design que j'utilise pour comprendre, adapter et collaborer sur des interfaces et prototypes."
      },
    },
    {
      id: "notion",
      name: {
        pt: "Notion",
        en: "Notion",
        fr: "Notion"
      },
      logo: notionLogo,
      description: {
        pt: "Ferramenta de produtividade que utilizo para organização pessoal e profissional. Crio páginas, listas, calendários e bancos de dados customizados para planejar estudos, tarefas e projetos.",
        en: "Productivity tool I use for personal and professional organization. I create pages, lists, calendars, and custom databases to plan studies, tasks, and projects.",
        fr: "Outil de productivité que j'utilise pour l'organisation personnelle et professionnelle. Je crée des pages, des listes, des calendriers et des bases de données personnalisées pour planifier études, tâches et projets."
      },
    },
    {
      id: "jira",
      name: {
        pt: "Jira",
        en: "Jira",
        fr: "Jira"
      },
      logo: jiraLogo,
      description: {
        pt: "Ferramenta de gestão ágil de tarefas e sprints. Uso básico para organização de demandas em equipe.",
        en: "Agile task and sprint management tool. Basic use for team demand organization.",
        fr: "Outil de gestion agile des tâches et sprints. Utilisation basique pour l'organisation des demandes en équipe."
      },
    },
    {
      id: "vercel",
      name: {
        pt: "Vercel",
        en: "Vercel",
        fr: "Vercel"
      },
      logo: vercelLogo,
      description: {
        pt: "Plataforma de deploy com foco em front-end moderno. Uso para publicar projetos de forma rápida e prática.",
        en: "Deployment platform focused on modern front-end. I use it to quickly and easily publish projects.",
        fr: "Plateforme de déploiement axée sur le front-end moderne. Je l'utilise pour publier des projets rapidement et facilement."
      },
    },
  ],
};

export default function SkillsSection() {
  const [category, setCategory] = useState("front");
  const [selectedSkillId, setSelectedSkillId] = useState(allSkills.front[0].id);
  const [animatingCategory, setAnimatingCategory] = useState(false);
  const [animatingSkill, setAnimatingSkill] = useState(false);
  const timeoutRef = useRef(null);
  const [bgVisible, setBgVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].skills;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setSkillsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setTimeout(() => setBgVisible(true), 300);
  }, []);

  const skills = allSkills[category];
  const selectedSkill = skills.find((s) => s.id === selectedSkillId);

  // Animação ao trocar categoria
  function handleCategoryChange(newCategory) {
    if (category === newCategory) return;
    setAnimatingCategory(true);
    setTimeout(() => {
      setCategory(newCategory);
      setSelectedSkillId(allSkills[newCategory][0].id);
      setAnimatingCategory(false);
    }, 350);
  }

  // Animação ao trocar skill
  function handleSkillChange(skillId) {
    if (selectedSkillId === skillId) return;
    setAnimatingSkill(true);
    setTimeout(() => {
      setSelectedSkillId(skillId);
      setAnimatingSkill(false);
    }, 300);
  }

  return (
    <section className="section skills" ref={sectionRef}>
      {/* Imagem decorativa voyajato no bottom right */}
      <img
        src={voyajatoImg}
        alt="Voyajato"
        className={`voyajato-bg-img-skills${skillsVisible ? " visible" : ""}`}
        aria-hidden="true"
      />
      <h2 className={`text-center text-2xl font-bold mb-6 section-title-animate${skillsVisible ? " visible" : ""}`}>{t.title}</h2>
      <div className={`skills-wrapper animated-section ${animatingCategory ? "fade-slide-out" : "fade-slide-in"}`}> 
        {/* Coluna da imagem e descrição */}
        <div className={`skill-preview animated-preview ${animatingSkill ? "fade-zoom-out" : "fade-zoom-in"}`}> 
          <img
            src={selectedSkill?.logo}
            alt={selectedSkill?.name[language]}
            className="preview-image"
          />
          <p className="preview-description">{selectedSkill?.description[language]}</p>
        </div>
        {/* Coluna da lista + botões */}
        <div className="skills-content">
          <div className="category-buttons">
            <button
              className={category === "front" ? "active" : ""}
              onClick={() => handleCategoryChange("front")}
            >
              {t.front}
            </button>
            <button
              className={category === "back" ? "active" : ""}
              onClick={() => handleCategoryChange("back")}
            >
              {t.back}
            </button>
            <button
              className={category === "outros" ? "active" : ""}
              onClick={() => handleCategoryChange("outros")}
            >
              {t.others}
            </button>
          </div>
          <ul className="skills-list">
            {skills.map((skill, idx) => (
              <li
                key={skill.id}
                className={`skill-card ${selectedSkillId === skill.id ? "active" : ""} skill-card-animate`}
                style={{ animationDelay: `${idx * 60}ms` }}
                onClick={() => handleSkillChange(skill.id)}
              >
                <img src={skill.logo} alt={skill.name[language]} />
                <span>{skill.name[language]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
