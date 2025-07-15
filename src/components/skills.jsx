import { useState, useRef } from "react";
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

// Skill base
const allSkills = {
  front: [
    {
      id: "htmlcss",
      name: "HTML5 & CSS3",
      logo: htmlcssLogo,
      description:
        "Base para construção de sites. Crio estruturas semânticas com HTML e estilizações modernas com CSS, inclusive responsivo.",
    },
    {
      id: "react",
      name: "React",
      logo: reactLogo,
      description:
        "Biblioteca JavaScript para construir interfaces de usuário modernas e reativas. Tenho domínio de componentes, hooks e integração com APIs.",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      logo: tailwindLogo,
      description:
        "Framework CSS utilitário que me permite criar layouts rápidos e responsivos com classes diretas no HTML.",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      logo: bootstrapLogo,
      description:
        "Framework popular para desenvolvimento front-end com componentes prontos e sistema de grid responsivo.",
    },
  ],
  back: [
    {
      id: "js",
      name: "JavaScript (ES6+)",
      logo: jsLogo,
      description:
        "Linguagem de programação essencial para web. Utilizo recursos modernos como arrow functions, async/await, e manipulação de DOM.",
    },
    {
      id: "laravel",
      name: "Laravel (PHP)",
      logo: laravelLogo,
      description:
        "Framework PHP para back-end. Experiência com rotas, autenticação, validação de formulários e integração com banco de dados.",
    },
    {
      id: "node",
      name: "Node.js",
      logo: nodeLogo,
      description:
        "Ambiente de execução JavaScript no servidor. Experiência com APIs REST, Express e integração com bancos de dados.",
    },
  ],
  outros: [
    {
      id: "git",
      name: "Git & GitHub",
      logo: gitLogo,
      description:
        "Versionamento de código com Git e colaboração via GitHub. Branches, commits e pull requests fazem parte do meu fluxo diário.",
    },
    {
      id: "figma",
      name: "Figma (básico)",
      logo: figmaLogo,
      description:
        "Ferramenta de design que uso para entender, adaptar e colaborar em interfaces e protótipos.",
    },
    {
      id: "notion",
      name: "Notion",
      logo: notionLogo,
      description:
        "Ferramenta de produtividade que utilizo para organização pessoal e profissional. Crio páginas, listas, calendários e bancos de dados customizados para planejar estudos, tarefas e projetos.",
    },
    {
      id: "jira",
      name: "Jira",
      logo: jiraLogo,
      description:
        "Ferramenta de gestão ágil de tarefas e sprints. Uso básico para organização de demandas em equipe.",
    },
    {
      id: "vercel",
      name: "Vercel",
      logo: vercelLogo,
      description:
        "Plataforma de deploy com foco em front-end moderno. Uso para publicar projetos de forma rápida e prática.",
    },
  ],
};

export default function SkillsSection() {
  const [category, setCategory] = useState("front");
  const [selectedSkillId, setSelectedSkillId] = useState(allSkills.front[0].id);
  const [animatingCategory, setAnimatingCategory] = useState(false);
  const [animatingSkill, setAnimatingSkill] = useState(false);
  const timeoutRef = useRef(null);

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
    <section className="section skills">
      <h2 className="text-center text-2xl font-bold mb-6 section-title-animate">Habilidades</h2>
      <div className={`skills-wrapper animated-section ${animatingCategory ? "fade-slide-out" : "fade-slide-in"}`}> 
        {/* Coluna da imagem e descrição */}
        <div className={`skill-preview animated-preview ${animatingSkill ? "fade-zoom-out" : "fade-zoom-in"}`}> 
          <img
            src={selectedSkill?.logo}
            alt={selectedSkill?.name}
            className="preview-image"
          />
          <p className="preview-description">{selectedSkill?.description}</p>
        </div>
        {/* Coluna da lista + botões */}
        <div className="skills-content">
          <div className="category-buttons">
            <button
              className={category === "front" ? "active" : ""}
              onClick={() => handleCategoryChange("front")}
            >
              Front-end
            </button>
            <button
              className={category === "back" ? "active" : ""}
              onClick={() => handleCategoryChange("back")}
            >
              Back-end
            </button>
            <button
              className={category === "outros" ? "active" : ""}
              onClick={() => handleCategoryChange("outros")}
            >
              Outros
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
                <img src={skill.logo} alt={skill.name} />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
