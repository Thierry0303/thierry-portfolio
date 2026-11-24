import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Mail, BookOpen, Zap, Target, Award, Code2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const translations = {
  en: {
    name: 'Thierry Amiot',
    tagline: 'Payment Technology Leader & Innovator',
    seo: {
      title: 'Thierry Amiot - Payment Technology Leader | 3DS & Fintech Expert',
      description: 'Payment Technology Leader with 13+ years in card payments, 3DS and fraud prevention. CSM at Outseer. Based in London, working across EMEA.'
    },
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
      titleHighlight: 'Leadership',
      pressLabel: 'In the press'
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
    seo: {
      title: 'Thierry Amiot - Expert en Technologies de Paiement | 3DS & Fintech',
      description: 'Expert en technologies de paiement : plus de 13 ans en paiements par carte, 3DS et prévention de la fraude. CSM chez Outseer. Basé à Londres, actif dans toute la zone EMEA.'
    },
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
      titleHighlight: 'Professionnelle',
      pressLabel: 'Dans la presse'
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
    seo: {
      title: 'Thierry Amiot - Experto en Tecnología de Pagos | 3DS & Fintech',
      description: 'Experto en tecnología de pagos: más de 13 años en pagos con tarjeta, 3DS y prevención de fraude. CSM en Outseer. Con base en Londres, activo en toda la región EMEA.'
    },
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
      titleHighlight: 'Profesional',
      pressLabel: 'En la prensa'
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
    seo: {
      title: 'Thierry Amiot - Especialista em Tecnologias de Pagamento | 3DS & Fintech',
      description: 'Especialista em tecnologias de pagamento: mais de 13 anos em pagamentos com cartão, 3DS e prevenção de fraude. CSM na Outseer. Baseado em Londres, activo em toda a EMEA.'
    },
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
      titleHighlight: 'Profissional',
      pressLabel: 'Na imprensa'
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
  const SUPPORTED_LANGS = ['en', 'fr', 'es', 'pt'];

  const getInitialLanguage = () => {
    // 1. URL ?lang= parameter (shared and indexed links)
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (SUPPORTED_LANGS.includes(urlLang)) return urlLang;
    // 2. Language previously chosen by the visitor
    const saved = localStorage.getItem('preferredLanguage');
    if (SUPPORTED_LANGS.includes(saved)) return saved;
    // 3. Browser language
    const candidates = [navigator.language, ...(navigator.languages || [])];
    for (const lang of candidates) {
      const code = (lang || '').split('-')[0].toLowerCase();
      if (SUPPORTED_LANGS.includes(code)) return code;
    }
    return 'en';
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
    const url = new URL(window.location.href);
    if (lang === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.replaceState({}, '', url);
  };

  // Keep <html lang> in sync (accessibility + SEO)
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
    },
    {
      titleEn: '3DS Flow Simulator',
      titleFr: 'Simulateur de Flux 3DS',
      titleEs: 'Simulador de Flujo 3DS',
      titlePt: 'Simulador de Fluxo 3DS',
      descEn: 'Interactive simulator demonstrating 3D Secure payment authentication flows, risk assessment, and fraud prevention mechanisms.',
      descFr: 'Simulateur interactif démontrant les flux d\'authentification de paiement 3D Secure, l\'évaluation des risques et les mécanismes de prévention de la fraude.',
      descEs: 'Simulador interactivo que demuestra flujos de autenticación de pago 3D Secure, evaluación de riesgos y mecanismos de prevención de fraude.',
      descPt: 'Simulador interactivo demonstrando fluxos de autenticação de pagamento 3D Secure, avaliação de risco e mecanismos de prevenção de fraude.',
      link: 'https://thierry0303.github.io/Simulator/',
      highlights: ['3DS 2.0', 'Fraud Prevention', 'Simulator'],
      color: 'from-rose-600 to-rose-400'
    },
    {
      titleEn: 'Card Payment Training',
      titleFr: 'Formation aux Paiements par Carte',
      titleEs: 'Capacitación en Pagos con Tarjeta',
      titlePt: 'Formação em Pagamentos com Cartão',
      descEn: 'Interactive training program covering card payment systems, ISO 8583, EMV protocols, and payment processing workflows.',
      descFr: 'Programme de formation interactif couvrant les systèmes de paiement par carte, ISO 8583, protocoles EMV et flux de traitement des paiements.',
      descEs: 'Programa de capacitación interactivo que cubre sistemas de pago con tarjeta, ISO 8583, protocolos EMV y flujos de procesamiento de pagos.',
      descPt: 'Programa de formação interactiva cobrindo sistemas de pagamento com cartão, ISO 8583, protocolos EMV e fluxos de processamento de pagamentos.',
      link: 'https://thierry0303.github.io/Card.training/',
      highlights: ['Educational', 'Card Systems', 'Interactive'],
      color: 'from-indigo-600 to-indigo-400'
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
      focusEn: '3DS & Fraud Prevention · Renewals & Growth',
      focusFr: 'Prévention de la fraude 3DS · Renouvellements et croissance',
      focusEs: 'Prevención de fraude 3DS · Renovaciones y crecimiento',
      focusPt: 'Prevenção de fraude 3DS · Renovações e crescimento',
      highlightsEn: [
        'Renewed all five accounts that came up for renewal over five years, protecting £5m in combined ARR',
        'Grew the portfolio by roughly £600k in annual recurring revenue through cross-sell, led by behavioural biometrics',
        'Led 3DS 2.0 rollouts and API integrations for Tier 1 issuers, growing transaction volumes 20% as they scaled into production',
        'Sustained CSAT above 90% through quarterly surveys, product training and technical documentation',
        'Built the commercial tooling the team runs on: a 3DS simulator, a 34-lesson training portal and an ROI/competitor model'
      ],
      highlightsFr: [
        'Renouvelé la totalité des cinq comptes arrivés à échéance en cinq ans, préservant 5 M£ de revenus récurrents',
        'Développé le portefeuille d\'environ 600 k£ de revenus récurrents annuels par ventes additionnelles, portées par la biométrie comportementale',
        'Piloté les déploiements 3DS 2.0 et les intégrations API pour des émetteurs de premier rang, avec une hausse de 20 % des volumes de transactions en production',
        'Maintenu une satisfaction client supérieure à 90 % grâce aux enquêtes trimestrielles, à la formation produit et à la documentation technique',
        'Conçu les outils commerciaux utilisés par l\'équipe : simulateur 3DS, portail de formation de 34 leçons et modèle de retour sur investissement'
      ],
      highlightsEs: [
        'Renové la totalidad de las cinco cuentas que vencieron en cinco años, protegiendo 5 M£ de ingresos recurrentes',
        'Amplié la cartera en unos 600 k£ de ingresos recurrentes anuales mediante venta cruzada, impulsada por la biometría conductual',
        'Dirigí despliegues 3DS 2.0 e integraciones de API para emisores de primer nivel, con un aumento del 20 % en los volúmenes de transacciones',
        'Mantuve una satisfacción del cliente superior al 90 % mediante encuestas trimestrales, formación de producto y documentación técnica',
        'Construí las herramientas comerciales que usa el equipo: simulador 3DS, portal formativo de 34 lecciones y modelo de retorno de inversión'
      ],
      highlightsPt: [
        'Renovei a totalidade das cinco contas que chegaram a renovação em cinco anos, protegendo 5 M£ de receita recorrente',
        'Ampliei a carteira em cerca de 600 k£ de receita recorrente anual através de venda cruzada, impulsionada pela biometria comportamental',
        'Liderei implementações 3DS 2.0 e integrações de API para emissores de topo, com um aumento de 20 % nos volumes de transacções',
        'Mantive uma satisfação do cliente acima de 90 % através de inquéritos trimestrais, formação de produto e documentação técnica',
        'Construí as ferramentas comerciais que a equipa utiliza: simulador 3DS, portal de formação com 34 lições e modelo de retorno do investimento'
      ]
    },
    {
      titleEn: 'Project Manager',
      titleFr: 'Chef de Projet',
      titleEs: 'Gerente de Proyecto',
      titlePt: 'Gestor de Projecto',
      company: 'Diners Club / Discover Financial Services',
      periodEn: 'May 2017 – November 2021',
      periodFr: 'Mai 2017 – Novembre 2021',
      periodEs: 'Mayo 2017 – Noviembre 2021',
      periodPt: 'Maio 2017 – Novembro 2021',
      focusEn: 'Acquirer Onboarding & Acceptance',
      focusFr: 'Intégration d\'acquéreurs et acceptation',
      focusEs: 'Integración de adquirentes y aceptación',
      focusPt: 'Integração de adquirentes e aceitação',
      highlightsEn: [
        'Led two Discover Global Network agreements to signature: Crédit Mutuel Arkéa (2019) and FrenchSys (2021)',
        'The Arkéa agreement opened POS, mobile, e-commerce and ATM acceptance across the Crédit Mutuel de Bretagne, Sud-Ouest and Massif Central networks',
        'The FrenchSys partnership established a technical standard letting French acquirers and merchants accept Discover alongside the other major schemes',
        'Grew merchant acceptance: La Banque Postale 60,000 merchants; BNP Paribas 5,000 to 30,000 in year two; Arkéa 3,000 to 7,000 over two years',
        'Owned the Quality of Acceptance programme network-wide, lifting acceptance to near 100% through routing-table updates and mystery-shopping campaigns'
      ],
      highlightsFr: [
        'Mené deux accords Discover Global Network jusqu\'à la signature : Crédit Mutuel Arkéa (2019) et FrenchSys (2021)',
        'L\'accord Arkéa a ouvert l\'acceptation en magasin, sur mobile, en ligne et aux distributeurs des réseaux Crédit Mutuel de Bretagne, Sud-Ouest et Massif Central',
        'Le partenariat FrenchSys a établi un standard technique permettant aux acquéreurs et commerçants français d\'accepter Discover aux côtés des autres grands réseaux',
        'Développé l\'acceptation commerçants : La Banque Postale 60 000 commerçants ; BNP Paribas de 5 000 à 30 000 la deuxième année ; Arkéa de 3 000 à 7 000 en deux ans',
        'Piloté le programme Quality of Acceptance à l\'échelle du réseau, portant l\'acceptation à près de 100 % via les tables de routage et des campagnes de visites mystère'
      ],
      highlightsEs: [
        'Llevé dos acuerdos de Discover Global Network hasta la firma: Crédit Mutuel Arkéa (2019) y FrenchSys (2021)',
        'El acuerdo con Arkéa abrió la aceptación en tienda, móvil, comercio electrónico y cajeros en las redes Crédit Mutuel de Bretagne, Sud-Ouest y Massif Central',
        'La alianza con FrenchSys estableció un estándar técnico que permite a adquirentes y comercios franceses aceptar Discover junto a las demás grandes redes',
        'Amplié la aceptación: La Banque Postale 60 000 comercios; BNP Paribas de 5 000 a 30 000 el segundo año; Arkéa de 3 000 a 7 000 en dos años',
        'Dirigí el programa Quality of Acceptance en toda la red, elevando la aceptación a casi el 100 % mediante tablas de enrutamiento y campañas de comprador misterioso'
      ],
      highlightsPt: [
        'Conduzi dois acordos da Discover Global Network até à assinatura: Crédit Mutuel Arkéa (2019) e FrenchSys (2021)',
        'O acordo com o Arkéa abriu a aceitação em loja, telemóvel, comércio electrónico e caixas automáticas nas redes Crédit Mutuel de Bretagne, Sud-Ouest e Massif Central',
        'A parceria com a FrenchSys estabeleceu um padrão técnico que permite a adquirentes e comerciantes franceses aceitar Discover a par das outras grandes redes',
        'Aumentei a aceitação: La Banque Postale 60 000 comerciantes; BNP Paribas de 5 000 para 30 000 no segundo ano; Arkéa de 3 000 para 7 000 em dois anos',
        'Liderei o programa Quality of Acceptance em toda a rede, elevando a aceitação para perto de 100 % através de tabelas de encaminhamento e campanhas de cliente mistério'
      ],
      press: [
        { label: 'Crédit Mutuel Arkéa × Discover Global Network (2019)', url: 'https://www.nasdaq.com/press-release/credit-mutuel-arkea1-and-discoverr-global-network-sign-an-agreement-2019-08-29' },
        { label: 'FrenchSys × Discover Global Network (2021)', url: 'https://www.frenchsys.com/en/discover-global-network-increases-card-acceptance-in-france-through-its-partnership-with-frenchsys-security/' }
      ],
    },
    {
      titleEn: 'Technical Account Manager',
      titleFr: 'Responsable Technique de Comptes',
      titleEs: 'Gerente Técnico de Cuentas',
      titlePt: 'Gestor Técnico de Contas',
      company: 'Visa Inc. (Business Support Operations)',
      periodEn: 'August 2013 – April 2017',
      periodFr: 'Août 2013 – Avril 2017',
      periodEs: 'Agosto 2013 – Abril 2017',
      periodPt: 'Agosto 2013 – Abril 2017',
      focusEn: 'Digital Wallets & Tokenisation',
      focusFr: 'Portefeuilles numériques et tokenisation',
      focusEs: 'Carteras digitales y tokenización',
      focusPt: 'Carteiras digitais e tokenização',
      highlightsEn: [
        'Supported the Apple Pay launch and the V.me digital wallet programme as client-facing technical contact',
        'Subject-matter expert for Visa Token Service, digital wallets and Payment Stop',
        'Drove client adoption of newly launched products across major financial institutions',
        'Delivered high-volume technical support to Tier 1 issuers, consistently meeting SLAs'
      ],
      highlightsFr: [
        'Accompagné le lancement d\'Apple Pay et le programme de portefeuille numérique V.me comme interlocuteur technique client',
        'Expert de référence pour Visa Token Service, les portefeuilles numériques et le service Payment Stop',
        'Favorisé l\'adoption des nouveaux produits auprès des grandes institutions financières',
        'Assuré un support technique à fort volume pour des émetteurs de premier rang, dans le respect constant des engagements de service'
      ],
      highlightsEs: [
        'Acompañé el lanzamiento de Apple Pay y el programa de cartera digital V.me como contacto técnico con el cliente',
        'Experto de referencia en Visa Token Service, carteras digitales y el servicio Payment Stop',
        'Impulsé la adopción de productos recién lanzados en grandes instituciones financieras',
        'Presté soporte técnico de alto volumen a emisores de primer nivel, cumpliendo siempre los acuerdos de servicio'
      ],
      highlightsPt: [
        'Acompanhei o lançamento do Apple Pay e o programa de carteira digital V.me como contacto técnico junto do cliente',
        'Especialista de referência em Visa Token Service, carteiras digitais e serviço Payment Stop',
        'Impulsionei a adopção de produtos recém-lançados junto de grandes instituições financeiras',
        'Prestei apoio técnico de elevado volume a emissores de topo, cumprindo sempre os acordos de serviço'
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
      
      <Helmet>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <meta name="author" content="Thierry Amiot" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={language === 'en' ? 'https://thierryamiot.com/' : `https://thierryamiot.com/?lang=${language}`} />

        {/* Hreflang for multilingual */}
        <link rel="alternate" hrefLang="en" href="https://thierryamiot.com/" />
        <link rel="alternate" hrefLang="fr" href="https://thierryamiot.com/?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://thierryamiot.com/?lang=es" />
        <link rel="alternate" hrefLang="pt" href="https://thierryamiot.com/?lang=pt" />
        <link rel="alternate" hrefLang="x-default" href="https://thierryamiot.com/" />

        {/* Open Graph */}
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:url" content={language === 'en' ? 'https://thierryamiot.com/' : `https://thierryamiot.com/?lang=${language}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thierryamiot.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={{ en: 'en_GB', fr: 'fr_FR', es: 'es_ES', pt: 'pt_PT' }[language]} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        <meta name="twitter:image" content="https://thierryamiot.com/og-image.png" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Thierry Amiot",
            "url": "https://thierryamiot.com",
            "image": "https://thierryamiot.com/og-image.png",
            "jobTitle": "Payment Technology Leader",
            "worksFor": { "@type": "Organization", "name": "Outseer (RSA Security)" },
            "alumniOf": { "@type": "CollegeOrUniversity", "name": "Birkbeck, University of London" },
            "knowsLanguage": ["en", "fr", "es", "pt"],
            "knowsAbout": ["Card Payments", "3D Secure", "Fraud Prevention", "EMV", "ISO 8583", "PCI DSS", "Fintech"],
            "email": "mailto:thierry@thierryamiot.com",
            "address": { "@type": "PostalAddress", "addressLocality": "London", "addressCountry": "GB" },
            "sameAs": [
              "https://www.linkedin.com/in/thierry-amiot-b92a7437",
              "https://github.com/thierry0303"
            ]
          })}
        </script>
      </Helmet>
      
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
                  onClick={() => changeLanguage(lang)}
                  lang={lang}
                  aria-pressed={language === lang}
                  aria-label={`Switch language to ${lang.toUpperCase()}`}
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
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
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

                {exp.press && (
                  <div className="mt-5 pt-4 border-t border-slate-700">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">{t.experience.pressLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.press.map((item, i) => (
                        <a
                          key={i}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs md:text-sm text-amber-300 hover:text-amber-200 border border-amber-400/30 hover:border-amber-400/60 rounded-full px-3 py-1.5 transition"
                        >
                          {item.label}
                          <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
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
            href="mailto:thierry@thierryamiot.com"
            variants={fadeInUp}
            className="block text-center p-8 rounded-xl bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border border-amber-400/50"
          >
            <Mail className="text-amber-300 mb-4 mx-auto" size={40} />
            <h3 className="text-xl font-bold text-white mb-2">{t.about.email}</h3>
            <p className="text-amber-300 hover:text-amber-200">thierry@thierryamiot.com</p>
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
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-amber-300 transition cursor-pointer p-2 rounded-lg hover:bg-amber-400/10"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href="https://github.com/thierry0303"
                aria-label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-amber-300 transition cursor-pointer p-2 rounded-lg hover:bg-amber-400/10"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="mailto:thierry@thierryamiot.com"
                aria-label="Send an email"
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
