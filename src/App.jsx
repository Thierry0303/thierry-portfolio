import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Mail, BookOpen, Zap, Target, Award, Code2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    name: 'Thierry Amiot',
    tagline: 'Payment Technology Leader & Innovator',
    navLinks: {
      projects: 'Projects',
      expertise: 'Expertise',
      experience: 'Experience',
      academic: 'Academic',
      about: 'About'
    },
    hero: {
      title: 'Payment Technology',
      titleHighlight: 'Leader & Innovator',
      subtitle: '13+ years delivering complex, high-impact international payment solutions across Europe. Multilingual specialist in card payments, fraud prevention, and fintech innovation.',
      viewWork: 'View Work',
      downloadCV: 'Download CV',
      connectLinkedIn: 'Connect on LinkedIn',
      cvLink: '/cvs/Thierry_Amiot_CV_EN.pdf'
    },
    achievements: {
      title: 'Why',
      titleHighlight: 'Work Together',
      items: [
        { title: 'Industry Leader', description: '13+ years in payment technology, leading complex EMEA projects with Tier 1 institutions.' },
        { title: 'Full-Stack Developer', description: 'From Python pipelines to React frontends. Entrepreneur with multiple live products.' },
        { title: 'Academic Rigor', description: 'MSc Birkbeck, published research on blockchain adoption in payment systems.' },
        { title: 'Multilingual', description: 'Native French & Portuguese, fluent English & Spanish.' }
      ]
    },
    projects: {
      title: 'Featured',
      titleHighlight: 'Projects'
    },
    expertise: {
      title: 'Expertise',
      titleHighlight: 'Skills & Knowledge'
    },
    experience: {
      title: 'Professional',
      titleHighlight: 'Leadership'
    },
    academic: {
      title: 'Academic',
      titleHighlight: '& Research'
    },
    about: {
      title: 'Get in',
      titleHighlight: 'Touch',
      email: 'Email',
      linkedinDesc: 'Connect with me on LinkedIn',
      githubDesc: 'View my projects'
    },
    footer: {
      tagline: 'Payment technology leader, fintech innovator, and practical problem solver',
      copyright: '© 2026 Thierry Amiot. All rights reserved.'
    },
    skills: {
      paymentSystems: 'Payment Systems',
      technicalLeadership: 'Technical Leadership',
      frontendDev: 'Frontend Development',
      backendDev: 'Backend Development',
      projectManagement: 'Project Management',
      teamLeadership: 'Team Leadership',
      agile: 'Agile',
      crossFunctional: 'Cross-functional',
      react: 'React',
      tailwind: 'Tailwind CSS',
      javascript: 'JavaScript',
      responsiveDesign: 'Responsive Design',
      python: 'Python',
      dataPipelines: 'Data Pipelines',
      githubActions: 'GitHub Actions',
      automation: 'Automation'
    }
  },
  fr: {
    name: 'Thierry Amiot',
    tagline: 'Expert en Technologies de Paiement & Innovateur',
    navLinks: {
      projects: 'Projets',
      expertise: 'Compétences',
      experience: 'Expérience',
      academic: 'Formation',
      about: 'Contact'
    },
    hero: {
      title: 'Expert en Technologie',
      titleHighlight: 'des Paiements & Innovateur',
      subtitle: 'Plus de 13 ans d\'expérience dans la conception et la mise en œuvre de solutions de paiement internationales complexes et stratégiques en Europe. Spécialiste des paiements par carte, de la prévention de la fraude et de l\'innovation fintech.',
      viewWork: 'Voir mes projets',
      downloadCV: 'Télécharger mon CV',
      connectLinkedIn: 'Me connecter sur LinkedIn',
      cvLink: '/cvs/Thierry_Amiot_CV_FR.pdf'
    },
    achievements: {
      title: 'Pourquoi',
      titleHighlight: 'Collaborer avec moi',
      items: [
        { title: 'Expert du secteur', description: 'Plus de 13 ans dans les technologies de paiement, à piloter des projets complexes en EMEA pour des institutions financières de premier plan.' },
        { title: 'Développeur polyvalent', description: 'Développeur full-stack : pipelines de données en Python et interfaces modernes en React. Entrepreneur avec plusieurs produits SaaS en production.' },
        { title: 'Excellence académique', description: 'Master à Birkbeck (Université de Londres) avec une recherche publiée sur l\'adoption de la blockchain dans les systèmes de paiement.' },
        { title: 'Multilingue', description: 'Français et portugais maternels, anglais et espagnol courants.' }
      ]
    },
    projects: {
      title: 'Projets',
      titleHighlight: 'en vedette'
    },
    expertise: {
      title: 'Compétences',
      titleHighlight: 'et Savoir-faire'
    },
    experience: {
      title: 'Expérience',
      titleHighlight: 'Professionnelle'
    },
    academic: {
      title: 'Formation',
      titleHighlight: 'et Recherche'
    },
    about: {
      title: 'Me',
      titleHighlight: 'Contacter',
      email: 'Courriel',
      linkedinDesc: 'Me connecter sur LinkedIn',
      githubDesc: 'Voir mes projets'
    },
    footer: {
      tagline: 'Expert en technologies de paiement, innovateur fintech et résolveur de problèmes concrets',
      copyright: '© 2026 Thierry Amiot. Tous droits réservés.'
    },
    skills: {
      paymentSystems: 'Systèmes de paiement',
      technicalLeadership: 'Leadership technique',
      frontendDev: 'Développement d\'interface',
      backendDev: 'Développement serveur',
      projectManagement: 'Gestion de projets',
      teamLeadership: 'Animation d\'équipes',
      agile: 'Méthode Agile',
      crossFunctional: 'Travail transversal',
      react: 'React',
      tailwind: 'Tailwind CSS',
      javascript: 'JavaScript',
      responsiveDesign: 'Design adaptatif',
      python: 'Python',
      dataPipelines: 'Pipelines de données',
      githubActions: 'GitHub Actions',
      automation: 'Automatisation'
    }
  },
  es: {
    name: 'Thierry Amiot',
    tagline: 'Experto en Tecnología de Pagos e Innovador',
    navLinks: {
      projects: 'Proyectos',
      expertise: 'Competencias',
      experience: 'Experiencia',
      academic: 'Formación',
      about: 'Contacto'
    },
    hero: {
      title: 'Experto en Tecnología',
      titleHighlight: 'de Pagos e Innovador',
      subtitle: 'Más de 13 años diseñando e implementando soluciones de pago internacionales complejas y de alto impacto en Europa. Especialista en pagos con tarjeta, prevención de fraude e innovación fintech.',
      viewWork: 'Ver mis proyectos',
      downloadCV: 'Descargar mi CV',
      connectLinkedIn: 'Conectarme en LinkedIn',
      cvLink: '/cvs/Thierry_Amiot_CV_ES.pdf'
    },
    achievements: {
      title: 'Por qué',
      titleHighlight: 'Trabajar conmigo',
      items: [
        { title: 'Experto del sector', description: 'Más de 13 años en tecnologías de pago, liderando proyectos complejos en EMEA para instituciones financieras de primer nivel.' },
        { title: 'Desarrollador versátil', description: 'Desarrollador full-stack: pipelines de datos en Python e interfaces modernas en React. Emprendedor con varios productos SaaS en producción.' },
        { title: 'Excelencia académica', description: 'Máster por Birkbeck (Universidad de Londres) con investigación publicada sobre la adopción de blockchain en sistemas de pago.' },
        { title: 'Multilingüe', description: 'Francés y portugués nativos, inglés y español con fluidez.' }
      ]
    },
    projects: {
      title: 'Proyectos',
      titleHighlight: 'destacados'
    },
    expertise: {
      title: 'Competencias',
      titleHighlight: 'y Conocimientos'
    },
    experience: {
      title: 'Experiencia',
      titleHighlight: 'Profesional'
    },
    academic: {
      title: 'Formación',
      titleHighlight: 'e Investigación'
    },
    about: {
      title: 'Ponerse en',
      titleHighlight: 'Contacto',
      email: 'Correo electrónico',
      linkedinDesc: 'Conectarme en LinkedIn',
      githubDesc: 'Ver mis proyectos'
    },
    footer: {
      tagline: 'Experto en tecnologías de pago, innovador fintech y solucionador de problemas prácticos',
      copyright: '© 2026 Thierry Amiot. Todos los derechos reservados.'
    },
    skills: {
      paymentSystems: 'Sistemas de pago',
      technicalLeadership: 'Liderazgo técnico',
      frontendDev: 'Desarrollo de interfaz',
      backendDev: 'Desarrollo de servidor',
      projectManagement: 'Gestión de proyectos',
      teamLeadership: 'Liderazgo de equipos',
      agile: 'Metodología Ágil',
      crossFunctional: 'Trabajo transversal',
      react: 'React',
      tailwind: 'Tailwind CSS',
      javascript: 'JavaScript',
      responsiveDesign: 'Diseño responsivo',
      python: 'Python',
      dataPipelines: 'Tuberías de datos',
      githubActions: 'GitHub Actions',
      automation: 'Automatización'
    }
  },
  pt: {
    name: 'Thierry Amiot',
    tagline: 'Especialista em Tecnologias de Pagamento & Inovador',
    navLinks: {
      projects: 'Projectos',
      expertise: 'Competências',
      experience: 'Experiência',
      academic: 'Formação',
      about: 'Contacto'
    },
    hero: {
      title: 'Especialista em Tecnologia',
      titleHighlight: 'de Pagamentos & Inovador',
      subtitle: 'Mais de 13 anos a desenvolver e implementar soluções de pagamento internacionais complexas e de alto impacto em toda a Europa. Especialista em pagamentos com cartão, prevenção de fraude e inovação em tecnologia financeira.',
      viewWork: 'Ver os meus projectos',
      downloadCV: 'Descarregar o meu CV',
      connectLinkedIn: 'Conectar-me no LinkedIn',
      cvLink: '/cvs/Thierry_Amiot_CV_PT.pdf'
    },
    achievements: {
      title: 'Porquê',
      titleHighlight: 'Trabalhar comigo',
      items: [
        { title: 'Especialista do sector', description: 'Mais de 13 anos em tecnologias de pagamento, a liderar projectos complexos na EMEA para instituições financeiras de primeiro nível.' },
        { title: 'Desenvolvedor versátil', description: 'Desenvolvedor completo: pipelines de dados em Python e interfaces modernas em React. Empreendedor com vários produtos SaaS em produção.' },
        { title: 'Excelência académica', description: 'Mestrado na Birkbeck (Universidade de Londres) com investigação publicada sobre a adopção da blockchain nos sistemas de pagamento.' },
        { title: 'Multilingue', description: 'Francês e português maternos, inglês e espanhol fluentes.' }
      ]
    },
    projects: {
      title: 'Projectos',
      titleHighlight: 'em destaque'
    },
    expertise: {
      title: 'Competências',
      titleHighlight: 'e Conhecimentos'
    },
    experience: {
      title: 'Experiência',
      titleHighlight: 'Profissional'
    },
    academic: {
      title: 'Formação',
      titleHighlight: 'e Investigação'
    },
    about: {
      title: 'Entre em',
      titleHighlight: 'Contacto',
      email: 'Correio electrónico',
      linkedinDesc: 'Conectar-me no LinkedIn',
      githubDesc: 'Ver os meus projectos'
    },
    footer: {
      tagline: 'Especialista em tecnologias de pagamento, inovador fintech e resolvedor de problemas práticos',
      copyright: '© 2026 Thierry Amiot. Todos os direitos reservados.'
    },
    skills: {
      paymentSystems: 'Sistemas de pagamento',
      technicalLeadership: 'Liderança técnica',
      frontendDev: 'Desenvolvimento de interface',
      backendDev: 'Desenvolvimento de servidor',
      projectManagement: 'Gestão de projectos',
      teamLeadership: 'Liderança de equipas',
      agile: 'Metodologia Ágil',
      crossFunctional: 'Trabalho transversal',
      react: 'React',
      tailwind: 'Tailwind CSS',
      javascript: 'JavaScript',
      responsiveDesign: 'Design responsivo',
      python: 'Python',
      dataPipelines: 'Pipelines de dados',
      githubActions: 'GitHub Actions',
      automation: 'Automatização'
    }
  }
};

export default function ThierryPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['projects', 'expertise', 'experience', 'academic', 'about'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const projects = [
    {
      titleEn: 'London School Directory',
      titleFr: 'Annuaire des Écoles de Londres',
      titleEs: 'Directorio de Escuelas de Londres',
      titlePt: 'Directório de Escolas de Londres',
      descEn: 'Comprehensive directory of London schools with advanced filtering, admissions data, and school performance metrics.',
      descFr: 'Répertoire complet des écoles de Londres avec filtrage avancé, données d\'admission et métriques de rendement scolaire.',
      descEs: 'Directorio completo de escuelas de Londres con filtrado avanzado, datos de admisión y métriques de rendimiento escolar.',
      descPt: 'Directório completo de escolas de Londres com filtros avançados, dados de admissão e métricas de desempenho escolar.',
      link: 'https://londonschool.directory',
      highlights: ['DfE Data', 'Advanced Filtering', 'Real-time Updates'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      titleEn: 'London GP Directory',
      titleFr: 'Annuaire des Médecins de Londres',
      titleEs: 'Directorio de Médicos de Londres',
      titlePt: 'Directório de Médicos de Londres',
      descEn: 'NHS GP surgery finder with location-based search and appointment booking information.',
      descFr: 'Moteur de recherche de cabinets médicaux NHS avec recherche par localisation et informations de consultation.',
      descEs: 'Buscador de consultorios médicos del NHS con búsqueda por ubicación e información de citas.',
      descPt: 'Localizador de consultórios médicos do NHS com busca por localização e informações de agendamento.',
      link: 'https://londongp.directory',
      highlights: ['NHS Data', 'Location Search', 'Healthcare'],
      color: 'from-green-600 to-green-400'
    },
    {
      titleEn: 'Card Payment Dev Docs',
      titleFr: 'Documentation sur Paiements par Carte',
      titleEs: 'Documentación de Pagos con Tarjeta',
      titlePt: 'Documentação de Pagamentos com Cartão',
      descEn: 'Developer documentation for payment systems covering ISO 8583, EMV standards, and PCI DSS.',
      descFr: 'Documentation pour développeurs de systèmes de paiement couvrant les normes ISO 8583, EMV et PCI DSS.',
      descEs: 'Documentación para desarrolladores de sistemas de pagos que cubren estándares ISO 8583, EMV y PCI DSS.',
      descPt: 'Documentação para programadores de sistemas de pagamentos cobrindo padrões ISO 8583, EMV e PCI DSS.',
      link: 'https://thierry0303.github.io/paydev-docs/',
      highlights: ['Standards', 'Technical', 'Developer'],
      color: 'from-purple-600 to-purple-400'
    }
  ];

  const getProjectTitle = (project) => {
    if (language === 'en') return project.titleEn;
    if (language === 'fr') return project.titleFr;
    if (language === 'es') return project.titleEs;
    if (language === 'pt') return project.titlePt;
  };

  const getProjectDesc = (project) => {
    if (language === 'en') return project.descEn;
    if (language === 'fr') return project.descFr;
    if (language === 'es') return project.descEs;
    if (language === 'pt') return project.descPt;
  };

  const achievements = [
    {
      title: t.achievements.items[0].title,
      description: t.achievements.items[0].description,
      icon: Award,
      color: 'bg-amber-500/20 text-amber-300'
    },
    {
      title: t.achievements.items[1].title,
      description: t.achievements.items[1].description,
      icon: Code2,
      color: 'bg-blue-500/20 text-blue-300'
    },
    {
      title: t.achievements.items[2].title,
      description: t.achievements.items[2].description,
      icon: BookOpen,
      color: 'bg-purple-500/20 text-purple-300'
    },
    {
      title: t.achievements.items[3].title,
      description: t.achievements.items[3].description,
      icon: Zap,
      color: 'bg-green-500/20 text-green-300'
    }
  ];

  const skills = [
    { 
      categoryKey: 'paymentSystems',
      skills: ['ISO 8583', 'EMV', 'NFC', '3DS 2.0', 'PCI DSS', 'Tokenization'] 
    },
    { 
      categoryKey: 'technicalLeadership',
      skillKeys: ['projectManagement', 'teamLeadership', 'agile', 'crossFunctional']
    },
    { 
      categoryKey: 'frontendDev',
      skillKeys: ['react', 'tailwind', 'javascript', 'responsiveDesign']
    },
    { 
      categoryKey: 'backendDev',
      skillKeys: ['python', 'dataPipelines', 'githubActions', 'automation']
    }
  ];

  const experiences = [
    {
      titleEn: 'Customer Success Manager (CSM)',
      titleFr: 'Responsable de Succès Client',
      titleEs: 'Gerente de Éxito del Cliente',
      titlePt: 'Gestor de Sucesso do Cliente',
      company: 'Outseer (RSA Security)',
      periodEn: 'November 2021 – Present',
      periodFr: 'Novembre 2021 – Présent',
      periodEs: 'Noviembre 2021 – Presente',
      periodPt: 'Novembro 2021 – Presente',
      focusEn: '3DS Fraud Prevention Solutions',
      focusFr: 'Solutions de prévention de fraude 3DS',
      focusEs: 'Soluciones de prevención de fraude 3DS',
      focusPt: 'Soluções de prevenção de fraude 3DS',
      highlightsEn: [
        'Strategic account management of Tier 1 clients across EMEA',
        'Lead complex API integrations and 3DS 2.0 implementations',
        'Coordinate cross-functional teams on fraud prevention',
        'Maintain high customer satisfaction metrics'
      ],
      highlightsFr: [
        'Gestion stratégique des comptes clients de premier rang dans toute la région EMEA',
        'Diriger les intégrations API complexes et les implémentations 3DS 2.0',
        'Coordonner les équipes transversales sur la prévention de la fraude',
        'Maintenir des métriques élevées de satisfaction client'
      ],
      highlightsEs: [
        'Gestión estratégica de cuentas de clientes de primer nivel en toda la región EMEA',
        'Liderar integraciones API complejas e implementaciones 3DS 2.0',
        'Coordinar equipos transversales en prevención de fraude',
        'Mantener métricas altas de satisfacción del cliente'
      ],
      highlightsPt: [
        'Gestão estratégica de contas de clientes de topo em toda a região EMEA',
        'Liderar integrações API complexas e implementações 3DS 2.0',
        'Coordenar equipas transversais sobre prevenção de fraude',
        'Manter métricas elevadas de satisfação do cliente'
      ]
    },
    {
      titleEn: 'Senior Project Manager',
      titleFr: 'Chef de Projet Senior',
      titleEs: 'Gerente de Proyecto Senior',
      titlePt: 'Gestor de Projecto Sénior',
      company: 'Diners Club / Discover Financial Services',
      periodEn: 'May 2017 – November 2021',
      periodFr: 'Mai 2017 – Novembre 2021',
      periodEs: 'Mayo 2017 – Noviembre 2021',
      periodPt: 'Maio 2017 – Novembro 2021',
      focusEn: 'Global Acquirer Onboarding',
      focusFr: 'Intégration globale d\'acquéreurs',
      focusEs: 'Integración global de adquirentes',
      focusPt: 'Integração global de adquirentes',
      highlightsEn: [
        'Led Credit Mutuel Arkea partnership (NASDAQ listed)',
        'Enabled La Banque Postale Discover acceptance',
        'Led onboarding of 4 Tier 1 acquirers',
        'Managed strategic partnerships across Europe'
      ],
      highlightsFr: [
        'Partenariat Credit Mutuel Arkea (listé sur NASDAQ)',
        'Activé l\'acceptation Discover de La Banque Postale',
        'Dirigé l\'intégration de 4 acquéreurs de premier rang',
        'Partnerships stratégiques gérés en Europe'
      ],
      highlightsEs: [
        'Lideró asociación Credit Mutuel Arkea (cotizada en NASDAQ)',
        'Habilitó aceptación de Discover de La Banque Postale',
        'Lideró incorporación de 4 adquirentes de primer nivel',
        'Partnerships estratégicos gestionados en toda Europa'
      ],
      highlightsPt: [
        'Liderou parceria Credit Mutuel Arkea (listada em NASDAQ)',
        'Ativou aceitação do Discover da La Banque Postale',
        'Liderou integração de 4 adquirentes de topo',
        'Parcerias estratégicas gerenciadas em toda a Europa'
      ]
    }
  ];

  const getExperiencePeriod = (exp) => {
    if (language === 'en') return exp.periodEn;
    if (language === 'fr') return exp.periodFr;
    if (language === 'es') return exp.periodEs;
    if (language === 'pt') return exp.periodPt;
  };

  const getExperienceTitle = (exp) => {
    if (language === 'en') return exp.titleEn;
    if (language === 'fr') return exp.titleFr;
    if (language === 'es') return exp.titleEs;
    if (language === 'pt') return exp.titlePt;
  };

  const getExperienceFocus = (exp) => {
    if (language === 'en') return exp.focusEn;
    if (language === 'fr') return exp.focusFr;
    if (language === 'es') return exp.focusEs;
    if (language === 'pt') return exp.focusPt;
  };

  const getExperienceHighlights = (exp) => {
    if (language === 'en') return exp.highlightsEn;
    if (language === 'fr') return exp.highlightsFr;
    if (language === 'es') return exp.highlightsEs;
    if (language === 'pt') return exp.highlightsPt;
  };

  const academic = [
    {
      titleEn: 'MSc International Management',
      titleFr: 'Master Gestion Internationale',
      titleEs: 'Máster Gestión Internacional',
      titlePt: 'Mestrado Gestão Internacional',
      institution: 'Birkbeck, University of London',
      year: '2016–2018',
      detailsEn: 'Dissertation on blockchain adoption in digital payments.',
      detailsFr: 'Dissertation sur l\'adoption de la technologie blockchain dans les paiements numériques.',
      detailsEs: 'Disertación sobre adopción de tecnología blockchain en pagos digitales.',
      detailsPt: 'Dissertação sobre adopção de tecnologia blockchain em pagamentos digitais.',
      highlights: ['Innovation Theory', 'PSD2/GDPR', 'Industry Research']
    },
    {
      titleEn: 'BA Management + Languages',
      titleFr: 'Licence Gestion + Langues',
      titleEs: 'Licenciatura Gestión + Idiomas',
      titlePt: 'Licenciatura Gestão + Idiomas',
      institution: 'Portugal',
      year: '2005–2010',
      detailsEn: 'Business and language studies with Erasmus exchange.',
      detailsFr: 'Études commerciales et linguistiques avec échange Erasmus.',
      detailsEs: 'Estudios comerciales e idiomas con intercambio Erasmus.',
      detailsPt: 'Estudos comerciais e linguísticos com intercâmbio Erasmus.',
      highlights: ['International Education', 'Language Fluency']
    }
  ];

  const getAcademicTitle = (item) => {
    if (language === 'en') return item.titleEn;
    if (language === 'fr') return item.titleFr;
    if (language === 'es') return item.titleEs;
    if (language === 'pt') return item.titlePt;
  };

  const getAcademicDetails = (item) => {
    if (language === 'en') return item.detailsEn;
    if (language === 'fr') return item.detailsFr;
    if (language === 'es') return item.detailsEs;
    if (language === 'pt') return item.detailsPt;
  };

  const getSkillLabel = (skillKey) => {
    return t.skills[skillKey] || skillKey;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 overflow-x-hidden">
      
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full backdrop-blur-md bg-slate-900/95 border-b border-slate-700 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent"
          >
            TA
          </motion.div>
          
          <div className="hidden md:flex gap-8">
            {['projects', 'expertise', 'experience', 'academic', 'about'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.1 }}
                className={`font-semibold transition ${
                  activeSection === item ? 'text-amber-300' : 'text-gray-400 hover:text-amber-300'
                }`}
              >
                {t.navLinks[item]}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex gap-2 bg-slate-800/50 rounded-lg p-2 border border-slate-700"
            >
              {['en', 'fr', 'es', 'pt'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 rounded text-xs font-semibold transition ${
                    language === lang
                      ? 'bg-amber-400 text-slate-900'
                      : 'text-gray-400 hover:text-amber-300'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-amber-300"
            >
              ☰
            </motion.button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-800/95 border-t border-slate-700 p-4"
          >
            {['projects', 'expertise', 'experience', 'academic', 'about'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-gray-400 hover:text-amber-300"
              >
                {t.navLinks[item]}
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.nav>

      <section className="relative min-h-screen pt-20 flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
          ></motion.div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-3xl text-center"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {t.hero.title} <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">{t.hero.titleHighlight}</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button 
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-300 transition cursor-pointer"
            >
              {t.hero.viewWork}
            </motion.button>
            <motion.a 
              href={t.hero.cvLink}
              download
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border-2 border-amber-400 text-amber-300 font-semibold rounded-lg hover:bg-amber-400/10 transition cursor-pointer flex items-center gap-2"
            >
              {t.hero.downloadCV}
              <ExternalLink size={18} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/thierry-amiot-b92a7437"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-amber-400 text-amber-300 font-semibold rounded-lg hover:bg-amber-400/10 transition cursor-pointer"
            >
              {t.hero.connectLinkedIn}
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none z-0"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <svg className="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            {t.achievements.title} <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">{t.achievements.titleHighlight}</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-xl border border-slate-700 hover:border-amber-400/50 transition bg-opacity-10"
                >
                  <Icon className="mb-4 text-amber-300" size={32} />
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            {t.projects.title} <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">{t.projects.titleHighlight}</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={scaleIn}
                whileHover={{ y: -15 }}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-amber-400/50 transition"
              >
                <h3 className="text-xl font-bold mb-3 text-white hover:text-amber-300 transition">{getProjectTitle(project)}</h3>
                <p className="text-gray-400 mb-4">{getProjectDesc(project)}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-amber-400/20 text-amber-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="expertise" className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">{t.expertise.title}</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700"
              >
                <h3 className="text-xl font-bold mb-4 text-amber-300">{getSkillLabel(skillGroup.categoryKey)}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills ? skillGroup.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      {skill}
                    </span>
                  )) : skillGroup.skillKeys.map((skillKey, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      {getSkillLabel(skillKey)}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="experience" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            {t.experience.title} <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">{t.experience.titleHighlight}</span>
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-amber-400/50 transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{getExperienceTitle(exp)}</h3>
                    <p className="text-amber-300 font-semibold text-sm md:text-base">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm md:text-base">{getExperiencePeriod(exp)}</span>
                </div>
                
                <p className="text-gray-400 mb-4 italic text-sm md:text-base">{getExperienceFocus(exp)}</p>
                
                <ul className="space-y-2">
                  {getExperienceHighlights(exp).map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-300 text-sm md:text-base flex items-start gap-3"
                    >
                      <span className="text-amber-400 mt-1 flex-shrink-0">›</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="academic" className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">{t.academic.title}</span> {t.academic.titleHighlight}
          </motion.h2>
          
          <div className="space-y-8">
            {academic.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white">{getAcademicTitle(item)}</h3>
                  <p className="text-purple-300 font-semibold">{item.institution}</p>
                  <p className="text-gray-500">{item.year}</p>
                </div>
                
                <p className="text-gray-400 mb-4">{getAcademicDetails(item)}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-purple-400/20 text-purple-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            {t.about.title} <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">{t.about.titleHighlight}</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="https://www.linkedin.com/in/thierry-amiot-b92a7437"
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-400/50"
            >
              <Linkedin className="text-blue-400 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white hover:text-blue-300">LinkedIn</h3>
              <p className="text-gray-400 mt-2">{t.about.linkedinDesc}</p>
            </motion.a>

            <motion.a
              href="https://github.com/thierry0303"
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-gray-400/50"
            >
              <Github className="text-gray-400 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white hover:text-gray-300">GitHub</h3>
              <p className="text-gray-400 mt-2">{t.about.githubDesc}</p>
            </motion.a>
          </div>

          <motion.a
            href="mailto:thierry1981@protonmail.com"
            variants={fadeInUp}
            className="block text-center p-8 rounded-xl bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border border-amber-400/50"
          >
            <Mail className="text-amber-300 mb-4 mx-auto" size={40} />
            <h3 className="text-xl font-bold text-white mb-2">{t.about.email}</h3>
            <p className="text-amber-300 hover:text-amber-200">thierry1981@protonmail.com</p>
          </motion.a>
        </motion.div>
      </section>

      <footer className="border-t border-slate-700 py-12 px-6 bg-slate-900/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent mb-6 md:mb-0">
              {t.name}
            </div>
            
            <div className="flex gap-8">
              <motion.a
                href="https://www.linkedin.com/in/thierry-amiot-b92a7437"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-amber-300 transition cursor-pointer p-2 rounded-lg hover:bg-amber-400/10"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href="https://github.com/thierry0303"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-amber-300 transition cursor-pointer p-2 rounded-lg hover:bg-amber-400/10"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="mailto:thierry1981@protonmail.com"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-amber-300 transition cursor-pointer p-2 rounded-lg hover:bg-amber-400/10"
              >
                <Mail size={28} />
              </motion.a>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>{t.footer.tagline}</p>
            <p className="mt-2">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
