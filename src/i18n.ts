type Language = 'pt' | 'en' | 'fr';

interface Translations {
  pt: TranslationSet;
  en: TranslationSet;
  fr: TranslationSet;
}

interface TranslationSet {
  header: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  footer: {
    copyright: string;
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
    instagram: string;
  };
  intro: {
    title: string;
    subtitle: string;
    description: string;
    acessar: string;
  };
  about: {
    title: string;
    description: string;
    capacitations: string;
    capacitationsList: string[];
    experience: string;
    experience1: string;
    experience2: string;
  };
  skills: {
    title: string;
    front: string;
    back: string;
    others: string;
  };
  projects: {
    title: string;
    subtitle: string;
    techs: string;
    visit: string;
    figma: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    github: string;
    linkedin: string;
    resume: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
}

const translations: Translations = {
  pt: {
    header: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    footer: {
      copyright: 'Todos os direitos reservados.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
    },
    intro: {
      title: 'Eu sou Luiz Henrique',
      subtitle: 'Desenvolvedor Júnior Front-end | React | Node.js | Tailwind',
      description: 'Olá, sou Luiz Rodrigues, Desenvolvedor Júnior Front-end. Comecei minha jornada no desenvolvimento em 2023 e desde então venho aprendendo e aplicando minhas habilidades em projetos reais, com foco em JavaScript moderno, desenvolvimento de interfaces web e otimização de performance.',
      acessar: 'Acessar',
    },
    about: {
      title: 'Sobre mim',
      description: 'Estudante de Engenharia de Software pela universidade Unicesumar, meu objetivo profissional é impulsionado pelo gosto da sensação de saber mais sobre a área e poder contribuir com cada vez mais as pessoas que me acompanham nessa jornada. Acredito que o desenvolvimento de software vai além do código, sendo uma ferramenta poderosa para resolver problemas reais e criar soluções que impactem positivamente a vida das pessoas. Busco constantemente aprimorar minhas habilidades técnicas e soft skills para contribuir de forma significativa em projetos colaborativos.',
      capacitations: 'Capacitações',
      capacitationsList: [
        '🔹 Front-end: Proficiente em HTML, CSS, JavaScript, Tailwind CSS e React. Tenho experiência na criação de interfaces responsivas e interativas, garantindo uma excelente experiência para os usuários.',
        '🔹 Back-end: Conhecimento em Node.js e PHP(Laravel). Participei de projetos com foco em integrações, formulários e segurança, proporcionando uma visão abrangente do ciclo de desenvolvimento.',
        '🔹 Controle de Versão e Colaboração: Experiência com Git e metodologias ágeis, permitindo uma integração eficaz em equipes de desenvolvimento.',
        '🔹 Comunicação Global: Certificado em curso de inglês, possibilitando uma colaboração eficiente em projetos internacionais.'
      ],
      experience: 'Experiência Profissional',
      experience1: 'Trabalhei durante 7 meses em uma startup, atuando principalmente no desenvolvimento Front-end. Minha experiência incluiu a criação de sites, manutenção e correção de bugs em interfaces de sistemas, utilizando HTML, CSS e JavaScript. Além disso, tive a oportunidade de aprender e aplicar conceitos de Back-end, trabalhando com PHP e Laravel em tarefas como desenvolvimento de formulários e validação de usuários.',
      experience2: 'Atualmente, desde o inicio de 2024, trabalho como desenvolvedor Front-end na empresa BuskTraffic, onde tenho a função de desenvolvedor Front-end. Por ventura, arrisco em tarefas de design, complementando, consequentemente, minhas habilidades técnicas tanto com estrutura de código e também na habilidade de criação e desenvolvimento de interfaces e design em geral. Também acabo tendo que lidar com tarefas de back-end, por ventura, aonde também é muito utilizado a liguagem de php, usando o framework Laravel.'
    },
    skills: {
      title: 'Habilidades',
      front: 'Front-end',
      back: 'Back-end',
      others: 'Outros',
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Conheça alguns dos meus trabalhos mais recentes e relevantes',
      techs: 'Tecnologias Utilizadas',
      visit: 'Visitar Projeto',
      figma: 'Ver no Figma',
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos criar algo incrível juntos! Estou sempre aberto a novas oportunidades e colaborações.',
      email: 'Envie uma mensagem direta',
      github: 'Veja meus projetos e contribuições',
      linkedin: 'Conecte-se profissionalmente',
      resume: 'Baixar meu currículo',
      ctaTitle: 'Pronto para começar?',
      ctaSubtitle: 'Vamos transformar suas ideias em realidade digital',
      ctaButton: 'Iniciar Conversa',
    }
  },
  en: {
    header: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    footer: {
      copyright: 'All rights reserved.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
    },
    intro: {
      title: 'I am Luiz Henrique',
      subtitle: 'Junior Front-end Developer | React | Node.js | Tailwind',
      description: 'Hi, I am Luiz Rodrigues, Junior Front-end Developer. I started my journey in development in 2023 and since then I have been learning and applying my skills in real projects, focusing on modern JavaScript, web interface development, and performance optimization.',
      acessar: 'Access',
    },
    about: {
      title: 'About me',
      description: "Software Engineering student at Unicesumar University, my professional goal is driven by the desire to learn more about the field and to contribute more and more to the people who accompany me on this journey. I believe that software development goes beyond code, being a powerful tool to solve real problems and create solutions that positively impact people's lives. I constantly seek to improve my technical and soft skills to contribute significantly to collaborative projects.",
      capacitations: 'Capacitations',
      capacitationsList: [
        '🔹 Front-end: Proficient in HTML, CSS, JavaScript, Tailwind CSS, and React. I have experience creating responsive and interactive interfaces, ensuring an excellent user experience.',
        '🔹 Back-end: Knowledge in Node.js and PHP (Laravel). I have participated in projects focused on integrations, forms, and security, providing a broad view of the development cycle.',
        '🔹 Version Control & Collaboration: Experience with Git and agile methodologies, enabling effective integration in development teams.',
        '🔹 Global Communication: Certified in English courses, enabling efficient collaboration in international projects.'
      ],
      experience: 'Professional Experience',
      experience1: 'I worked for 7 months at a startup, mainly in Front-end development. My experience included creating websites, maintaining and fixing bugs in system interfaces using HTML, CSS, and JavaScript. I also had the opportunity to learn and apply Back-end concepts, working with PHP and Laravel on tasks such as form development and user validation.',
      experience2: 'Currently, since the beginning of 2024, I have been working as a Front-end developer at BuskTraffic, where I also take on design tasks, further complementing my technical skills both in code structure and in the ability to create and develop interfaces and design in general. I also end up dealing with back-end tasks, often using PHP with the Laravel framework.'
    },
    skills: {
      title: 'Skills',
      front: 'Front-end',
      back: 'Back-end',
      others: 'Others',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Check out some of my most recent and relevant works',
      techs: 'Technologies Used',
      visit: 'Visit Project',
      figma: 'View on Figma',
    },
    contact: {
      title: 'Contact Me',
        subtitle: "Let's create something amazing together! I am always open to new opportunities and collaborations.",
      email: 'Send a direct message',
      github: 'See my projects and contributions',
      linkedin: 'Connect professionally',
      resume: 'Download my resume',
      ctaTitle: 'Ready to get started?',
        ctaSubtitle: "Let's turn your ideas into digital reality",
      ctaButton: 'Start Conversation',
    }
  },
  fr: {
    header: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    footer: {
      copyright: 'Tous droits réservés.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
    },
    intro: {
      title: 'Je suis Luiz Henrique',
      subtitle: 'Développeur Front-end Junior | React | Node.js | Tailwind',
      description: "Bonjour, je suis Luiz Rodrigues, Développeur Front-end Junior. J'ai commencé mon parcours dans le développement en 2023 et depuis, j'apprends et applique mes compétences dans des projets réels, en me concentrant sur JavaScript moderne, le développement d'interfaces web et l'optimisation des performances.",
      acessar: 'Accéder',
    },
    about: {
      title: 'À propos de moi',
      description: "Étudiant en ingénierie logicielle à l'université Unicesumar, mon objectif professionnel est motivé par le désir d'en savoir plus sur le domaine et de pouvoir contribuer de plus en plus aux personnes qui m'accompagnent dans ce parcours. Je crois que le développement logiciel va au-delà du code, étant un outil puissant pour résoudre des problèmes réels et créer des solutions qui ont un impact positif sur la vie des gens. Je cherche constamment à améliorer mes compétences techniques et relationnelles pour contribuer de manière significative à des projets collaboratifs.",
      capacitations: 'Formations',
      capacitationsList: [
        "🔹 Front-end : Compétent en HTML, CSS, JavaScript, Tailwind CSS et React. Expérience dans la création d'interfaces réactives et responsives, garantissant une excellente expérience utilisateur.",
        '🔹 Back-end : Connaissances en Node.js et PHP (Laravel). Participation à des projets axés sur les intégrations, formulaires et sécurité, offrant une vision globale du cycle de développement.',
        '🔹 Contrôle de version & Collaboration : Expérience avec Git et les méthodologies agiles, permettant une intégration efficace dans les équipes de développement.',
        '🔹 Communication globale : Certifié en anglais, permettant une collaboration efficace sur des projets internationaux.'
      ],
      experience: 'Expérience Professionnelle',
      experience1: "J'ai travaillé pendant 7 mois dans une startup, principalement dans le développement Front-end. Mon expérience comprenait la création de sites, la maintenance et la correction de bugs dans les interfaces systèmes, en utilisant HTML, CSS et JavaScript. J'ai également eu l'occasion d'apprendre et d'appliquer des concepts de Back-end, en travaillant avec PHP et Laravel sur des tâches telles que le développement de formulaires et la validation des utilisateurs.",
        experience2: "Actuellement, depuis début 2024, je travaille comme développeur Front-end chez BuskTraffic, où j'assume également des tâches de design, complétant ainsi mes compétences techniques tant dans la structure du code que dans la capacité à créer et développer des interfaces et du design en général. Je finis également par gérer des tâches de back-end, utilisant souvent PHP avec le framework Laravel."
    },
    skills: {
      title: 'Compétences',
      front: 'Front-end',
      back: 'Back-end',
      others: 'Autres',
    },
    projects: {
      title: 'Projets',
      subtitle: 'Découvrez quelques-uns de mes travaux les plus récents et pertinents',
      techs: 'Technologies utilisées',
      visit: 'Voir le projet',
      figma: 'Voir sur Figma',
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: "Créons quelque chose d'incroyable ensemble ! Je suis toujours ouvert à de nouvelles opportunités et collaborations.",
      email: 'Envoyer un message direct',
      github: 'Voir mes projets et contributions',
      linkedin: 'Connectez-vous professionnellement',
      resume: 'Télécharger mon CV',
      ctaTitle: 'Prêt à commencer ?',
      ctaSubtitle: 'Transformons vos idées en réalité digitale',
      ctaButton: 'Démarrer la conversation',
    }
  }
};

export default translations;
export type { Language, TranslationSet, Translations };

