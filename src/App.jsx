import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Mail, BookOpen, Zap, Target, Award, Code2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    name: 'Thierry Amiot',
    tagline: 'Payment Technology Leader & Innovator',
    hero: {
      title: 'Payment Technology',
      titleHighlight: 'Leader & Innovator',
      subtitle: '13+ years delivering complex, high-impact international payment solutions across Europe. Multilingual specialist in card payments, fraud prevention, and fintech innovation.',
      viewWork: 'View Work',
      downloadCV: 'Download CV',
      connectLinkedIn: 'Connect on LinkedIn'
    },
    achievements: {
      title: 'Why',
      titleHighlight: 'Work Together',
      items: [
        { title: 'Industry Leader', description: '13+ years in payment technology, leading complex EMEA projects with Tier 1 institutions.' },
        { title: 'Full-Stack Builder', description: 'From Python pipelines to React frontends. Entrepreneur with multiple live products.' },
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
      email: 'Email'
    },
    footer: {
      tagline: 'Payment technology leader, fintech innovator, and practical problem solver',
      copyright: '© 2026 Thierry Amiot. All rights reserved.'
    }
  },
  fr: {
    name: 'Thierry Amiot',
    tagline: 'Leader en Technologie des Paiements & Innovateur',
    hero: {
      title: 'Leader en Technologie',
      titleHighlight: 'des Paiements & Innovateur',
      subtitle: '13+ ans à délivrer des solutions de paiement complexes et à fort impact à travers l\'Europe. Spécialiste multilingue en paiements par carte, prévention de la fraude et innovation fintech.',
      viewWork: 'Voir Mes Travaux',
      downloadCV: 'Télécharger CV',
      connectLinkedIn: 'Me Connecter sur LinkedIn'
    },
    achievements: {
      title: 'Pourquoi',
      titleHighlight: 'Travailler Ensemble',
      items: [
        { title: 'Leader Industriel', description: '13+ ans en technologie des paiements, dirigeant des projets complexes en EMEA avec des institutions Tier 1.' },
        { title: 'Constructeur Full-Stack', description: 'Des pipelines Python aux frontends React. Entrepreneur avec plusieurs produits en direct.' },
        { title: 'Rigueur Académique', description: 'MSc Birkbeck, recherche publiée sur l\'adoption de la blockchain dans les systèmes de paiement.' },
        { title: 'Multilingue', description: 'Français et portugais natifs, anglais et espagnol courants.' }
      ]
    },
    projects: {
      title: 'Projets',
      titleHighlight: 'en Vedette'
    },
    expertise: {
      title: 'Expertise',
      titleHighlight: 'Compétences & Connaissances'
    },
    experience: {
      title: 'Leadership',
      titleHighlight: 'Professionnel'
    },
    academic: {
      title: 'Académique',
      titleHighlight: '& Recherche'
    },
    about: {
      title: 'Me',
      titleHighlight: 'Contacter',
      email: 'Email'
    },
    footer: {
      tagline: 'Leader en technologie des paiements, innovateur fintech et résolveur de problèmes pratiques',
      copyright: '© 2026 Thierry Amiot. Tous droits réservés.'
    }
  },
  es: {
    name: 'Thierry Amiot',
    tagline: 'Líder en Tecnología de Pagos e Innovador',
    hero: {
      title: 'Líder en Tecnología',
      titleHighlight: 'de Pagos e Innovador',
      subtitle: '13+ años entregando soluciones de pago complejas y de alto impacto en toda Europa. Especialista multilingüe en pagos con tarjeta, prevención de fraude e innovación fintech.',
      viewWork: 'Ver Mis Trabajos',
      downloadCV: 'Descargar CV',
      connectLinkedIn: 'Conectarme en LinkedIn'
    },
    achievements: {
      title: 'Por Qué',
      titleHighlight: 'Trabajar Juntos',
      items: [
        { title: 'Líder Industria', description: '13+ años en tecnología de pagos, liderando proyectos complejos en EMEA con instituciones Tier 1.' },
        { title: 'Constructor Full-Stack', description: 'Desde pipelines Python hasta frontends React. Emprendedor con múltiples productos en directo.' },
        { title: 'Rigor Académico', description: 'MSc Birkbeck, investigación publicada sobre adopción de blockchain en sistemas de pagos.' },
        { title: 'Multilingüe', description: 'Francés y portugués nativos, inglés y español fluidos.' }
      ]
    },
    projects: {
      title: 'Proyectos',
      titleHighlight: 'Destacados'
    },
    expertise: {
      title: 'Experiencia',
      titleHighlight: 'Habilidades y Conocimientos'
    },
    experience: {
      title: 'Liderazgo',
      titleHighlight: 'Profesional'
    },
    academic: {
      title: 'Académico',
      titleHighlight: '& Investigación'
    },
    about: {
      title: 'Ponte en',
      titleHighlight: 'Contacto',
      email: 'Email'
    },
    footer: {
      tagline: 'Líder en tecnología de pagos, innovador fintech y resolvedor de problemas prácticos',
      copyright: '© 2026 Thierry Amiot. Todos los derechos reservados.'
    }
  },
  pt: {
    name: 'Thierry Amiot',
    tagline: 'Líder em Tecnologia de Pagamentos & Inovador',
    hero: {
      title: 'Líder em Tecnologia',
      titleHighlight: 'de Pagamentos & Inovador',
      subtitle: '13+ anos entregando soluções complexas de pagamento de alto impacto em toda a Europa. Especialista multilingue em pagamentos com cartão, prevenção de fraude e inovação fintech.',
      viewWork: 'Ver Meus Trabalhos',
      downloadCV: 'Descarregar CV',
      connectLinkedIn: 'Conectar-me no LinkedIn'
    },
    achievements: {
      title: 'Por Que',
      titleHighlight: 'Trabalhar Juntos',
      items: [
        { title: 'Líder do Setor', description: '13+ anos em tecnologia de pagamentos, liderando projetos complexos na EMEA com instituições Tier 1.' },
        { title: 'Construtor Full-Stack', description: 'De pipelines Python a frontends React. Empreendedor com múltiplos produtos em produção.' },
        { title: 'Rigor Académico', description: 'MSc Birkbeck, pesquisa publicada sobre adoção de blockchain em sistemas de pagamento.' },
        { title: 'Multilingue', description: 'Francês e português nativos, inglês e espanhol fluentes.' }
      ]
    },
    projects: {
      title: 'Projetos',
      titleHighlight: 'em Destaque'
    },
    expertise: {
      title: 'Experiência',
      titleHighlight: 'Competências e Conhecimento'
    },
    experience: {
      title: 'Liderança',
      titleHighlight: 'Profissional'
    },
    academic: {
      title: 'Académico',
      titleHighlight: '& Pesquisa'
    },
    about: {
      title: 'Entre em',
      titleHighlight: 'Contacto',
      email: 'Email'
    },
    footer: {
      tagline: 'Líder em tecnologia de pagamentos, inovador fintech e solucionador de problemas práticos',
      copyright: '© 2026 Thierry Amiot. Todos os direitos reservados.'
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
      title: language === 'en' ? 'London School Directory' : language === 'fr' ? 'Annuaire des Écoles de Londres' : language === 'es' ? 'Directorio de Escuelas de Londres' : 'Diretório de Escolas de Londres',
      description: language === 'en' ? 'Comprehensive directory of London schools with advanced filtering, admissions data, and school performance metrics.' : language === 'fr' ? 'Répertoire complet des écoles de Londres avec filtrage avancé, données d\'admission et métriques de performance.' : language === 'es' ? 'Directorio completo de escuelas de Londres con filtrado avanzado, datos de admisión y métricas de rendimiento.' : 'Diretório completo de escolas de Londres com filtragem avançada, dados de admissão e métricas de desempenho.',
      link: 'https://londonschool.directory',
      highlights: ['DfE Data', 'Advanced Filtering', 'Real-time Updates'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      title: language === 'en' ? 'London GP Directory' : language === 'fr' ? 'Annuaire des Médecins de Londres' : language === 'es' ? 'Directorio de Médicos de Londres' : 'Diretório de Médicos de Londres',
      description: language === 'en' ? 'NHS GP surgery finder with location-based search and appointment booking information.' : language === 'fr' ? 'Moteur de recherche de cabinets médicaux NHS avec recherche géolocalisée et informations de prise de rendez-vous.' : language === 'es' ? 'Buscador de clínicas médicas del NHS con búsqueda basada en ubicación e información de citas.' : 'Localizador de consultórios médicos do NHS com busca baseada em localização e informações de agendamento.',
      link: 'https://londongp.directory',
      highlights: ['NHS Data', 'Location Search', 'Healthcare'],
      color: 'from-green-600 to-green-400'
    },
    {
      title: language === 'en' ? 'Card Payment Dev Docs' : language === 'fr' ? 'Docs Paiement par Carte' : language === 'es' ? 'Documentación de Pagos con Tarjeta' : 'Documentação de Pagamentos com Cartão',
      description: language === 'en' ? 'Developer documentation for payment systems covering ISO 8583, EMV standards, and PCI DSS.' : language === 'fr' ? 'Documentation pour développeurs pour les systèmes de paiement couvrant les normes ISO 8583, EMV et PCI DSS.' : language === 'es' ? 'Documentación para desarrolladores de sistemas de pagos que cubren estándares ISO 8583, EMV y PCI DSS.' : 'Documentação para desenvolvedores de sistemas de pagamento cobrindo padrões ISO 8583, EMV e PCI DSS.',
      link: 'https://thierry0303.github.io/paydev-docs/',
      highlights: ['Standards', 'Technical', 'Developer'],
      color: 'from-purple-600 to-purple-400'
    }
  ];

  const achievements = [
    {
      title: language === 'en' ? 'Industry Leader' : language === 'fr' ? 'Leader Industriel' : language === 'es' ? 'Líder Industria' : 'Líder do Setor',
      description: t.achievements.items[0].description,
      icon: Award,
      color: 'bg-amber-500/20 text-amber-300'
    },
    {
      title: language === 'en' ? 'Full-Stack Builder' : language === 'fr' ? 'Constructeur Full-Stack' : language === 'es' ? 'Constructor Full-Stack' : 'Construtor Full-Stack',
      description: t.achievements.items[1].description,
      icon: Code2,
      color: 'bg-blue-500/20 text-blue-300'
    },
    {
      title: language === 'en' ? 'Academic Rigor' : language === 'fr' ? 'Rigueur Académique' : language === 'es' ? 'Rigor Académico' : 'Rigor Académico',
      description: t.achievements.items[2].description,
      icon: BookOpen,
      color: 'bg-purple-500/20 text-purple-300'
    },
    {
      title: language === 'en' ? 'Multilingual' : language === 'fr' ? 'Multilingue' : language === 'es' ? 'Multilingüe' : 'Multilingue',
      description: t.achievements.items[3].description,
      icon: Zap,
      color: 'bg-green-500/20 text-green-300'
    }
  ];

  const skills = [
    { 
      category: language === 'en' ? 'Payment Systems' : language === 'fr' ? 'Systèmes de Paiement' : language === 'es' ? 'Sistemas de Pago' : 'Sistemas de Pagamento',
      skills: ['ISO 8583', 'EMV', 'NFC', '3DS 2.0', 'PCI DSS', 'Tokenization'] 
    },
    { 
      category: language === 'en' ? 'Technical Leadership' : language === 'fr' ? 'Leadership Technique' : language === 'es' ? 'Liderazgo Técnico' : 'Liderança Técnica',
      skills: ['Project Management', 'Team Leadership', 'Agile', 'Cross-functional'] 
    },
    { 
      category: language === 'en' ? 'Frontend' : language === 'fr' ? 'Frontend' : language === 'es' ? 'Frontend' : 'Frontend',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'] 
    },
    { 
      category: language === 'en' ? 'Backend' : language === 'fr' ? 'Backend' : language === 'es' ? 'Backend' : 'Backend',
      skills: ['Python', 'Data Pipelines', 'GitHub Actions', 'Automation'] 
    }
  ];

  const experiences = [
    {
      title: language === 'en' ? 'Customer Success Manager (CSM)' : language === 'fr' ? 'Responsable du Succès Client (CSM)' : language === 'es' ? 'Gerente de Éxito del Cliente (CSM)' : 'Gestor de Sucesso do Cliente (CSM)',
      company: 'Outseer (RSA Security)',
      period: 'November 2021 – Present',
      focus: language === 'en' ? '3DS Fraud Prevention Solutions' : language === 'fr' ? 'Solutions de Prévention de Fraude 3DS' : language === 'es' ? 'Soluciones de Prevención de Fraude 3DS' : 'Soluções de Prevenção de Fraude 3DS',
      highlights: [
        language === 'en' ? 'Strategic account management of Tier 1 clients across EMEA' : language === 'fr' ? 'Gestion stratégique des comptes clients Tier 1 dans toute l\'EMEA' : language === 'es' ? 'Gestión estratégica de cuentas de clientes Tier 1 en toda la EMEA' : 'Gestão estratégica de contas de clientes Tier 1 em toda a EMEA',
        language === 'en' ? 'Lead complex API integrations and 3DS 2.0 implementations' : language === 'fr' ? 'Diriger les intégrations API complexes et les implémentations 3DS 2.0' : language === 'es' ? 'Liderar integraciones API complejas e implementaciones 3DS 2.0' : 'Liderar integrações de API complexas e implementações 3DS 2.0',
        language === 'en' ? 'Coordinate cross-functional teams on fraud prevention' : language === 'fr' ? 'Coordonner les équipes interfonctionnelles sur la prévention de la fraude' : language === 'es' ? 'Coordinar equipos multifuncionales en prevención de fraude' : 'Coordenar equipes multifuncionais sobre prevenção de fraude',
        language === 'en' ? 'Maintain high customer satisfaction metrics' : language === 'fr' ? 'Maintenir des métriques élevées de satisfaction client' : language === 'es' ? 'Mantener métricas altas de satisfacción del cliente' : 'Manter métricas altas de satisfação do cliente'
      ]
    },
    {
      title: language === 'en' ? 'Senior Project Manager' : language === 'fr' ? 'Chef de Projet Senior' : language === 'es' ? 'Gerente de Proyecto Senior' : 'Gerente de Projeto Sênior',
      company: 'Diners Club / Discover Financial Services',
      period: 'May 2017 – November 2021',
      focus: language === 'en' ? 'Global Acquirer Onboarding' : language === 'fr' ? 'Intégration Globale des Acquéreurs' : language === 'es' ? 'Integración Global de Adquirentes' : 'Integração Global de Adquirentes',
      highlights: [
        language === 'en' ? 'Led Credit Mutuel Arkea partnership (NASDAQ listed)' : language === 'fr' ? 'Partenariat Credit Mutuel Arkea (listé NASDAQ)' : language === 'es' ? 'Lideró asociación Credit Mutuel Arkea (cotizada en NASDAQ)' : 'Liderou parceria Credit Mutuel Arkea (listada em NASDAQ)',
        language === 'en' ? 'Enabled La Banque Postale Discover acceptance' : language === 'fr' ? 'Activé l\'acceptation Discover de La Banque Postale' : language === 'es' ? 'Habilitó aceptación de Discover de La Banque Postale' : 'Ativou aceitação do Discover da La Banque Postale',
        language === 'en' ? 'Led onboarding of 4 Tier 1 acquirers' : language === 'fr' ? 'Dirigé l\'intégration de 4 acquéreurs Tier 1' : language === 'es' ? 'Lideró incorporación de 4 adquirentes Tier 1' : 'Liderou integração de 4 adquirentes Tier 1',
        language === 'en' ? 'Managed strategic partnerships across Europe' : language === 'fr' ? 'Partenariats stratégiques gérés en Europe' : language === 'es' ? 'Partnerships estratégicos gestionados en toda Europa' : 'Parcerias estratégicas gerenciadas em toda a Europa'
      ]
    }
  ];

  const academic = [
    {
      title: language === 'en' ? 'MSc International Management' : language === 'fr' ? 'MSc Gestion Internationale' : language === 'es' ? 'MSc Gestión Internacional' : 'MSc Gestão Internacional',
      institution: 'Birkbeck, University of London',
      year: '2016–2018',
      details: language === 'en' ? 'Dissertation on blockchain adoption in digital payments.' : language === 'fr' ? 'Dissertation sur l\'adoption de la blockchain dans les paiements numériques.' : language === 'es' ? 'Disertación sobre adopción de blockchain en pagos digitales.' : 'Dissertação sobre adoção de blockchain em pagamentos digitais.',
      highlights: ['Innovation Theory', 'PSD2/GDPR', 'Industry Research']
    },
    {
      title: language === 'en' ? 'BA Management + Languages' : language === 'fr' ? 'BA Gestion + Langues' : language === 'es' ? 'BA Gestión + Idiomas' : 'BA Gestão + Idiomas',
      institution: language === 'en' ? 'Portugal' : language === 'fr' ? 'Portugal' : language === 'es' ? 'Portugal' : 'Portugal',
      year: '2005–2010',
      details: language === 'en' ? 'Business and language studies with Erasmus exchange.' : language === 'fr' ? 'Études commerciales et linguistiques avec échange Erasmus.' : language === 'es' ? 'Estudios comerciales e idiomas con intercambio Erasmus.' : 'Estudos comerciais e linguísticos com intercâmbio Erasmus.',
      highlights: ['International Education', 'Language Fluency']
    }
  ];

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
                className={`capitalize font-semibold transition ${
                  activeSection === item ? 'text-amber-300' : 'text-gray-400 hover:text-amber-300'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
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
                className="block w-full text-left py-2 capitalize text-gray-400 hover:text-amber-300"
              >
                {item}
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
              href="https://drive.google.com/uc?export=download&id=1qNKxVuf7t0ft31dUjH_bUu88CdHnVLuF"
              target="_blank"
              rel="noopener noreferrer"
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
                <h3 className="text-xl font-bold mb-3 text-white hover:text-amber-300 transition">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
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
                <h3 className="text-xl font-bold mb-4 text-amber-300">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      {skill}
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
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-amber-300 font-semibold text-sm md:text-base">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm md:text-base">{exp.period}</span>
                </div>
                
                <p className="text-gray-400 mb-4 italic text-sm md:text-base">{exp.focus}</p>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
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
            <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">{t.academic.title}</span>
          </motion.h2>
          
          <div className="space-y-8">
            {academic.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-purple-300 font-semibold">{item.institution}</p>
                  <p className="text-gray-500">{item.year}</p>
                </div>
                
                <p className="text-gray-400 mb-4">{item.details}</p>
                
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
              <p className="text-gray-400 mt-2">{language === 'en' ? 'Connect with me on LinkedIn' : language === 'fr' ? 'Connectez-vous avec moi sur LinkedIn' : language === 'es' ? 'Conéctate conmigo en LinkedIn' : 'Conecte-se comigo no LinkedIn'}</p>
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
              <p className="text-gray-400 mt-2">{language === 'en' ? 'View my projects' : language === 'fr' ? 'Voir mes projets' : language === 'es' ? 'Ver mis proyectos' : 'Ver meus projetos'}</p>
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