import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Mail, BookOpen, Zap, Target, Award, Code2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThierryPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
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

  // Data
  const projects = [
    {
      title: 'London School Directory',
      description: 'Comprehensive directory of London schools with advanced filtering, admissions data, and school performance metrics. Built with Python data pipelines and GitHub Actions automation.',
      link: 'https://londonschool.directory',
      highlights: ['DfE Data Integration', 'Dynamic Filtering', 'Real-time Updates', 'GitHub-powered'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      title: 'London GP Directory',
      description: 'NHS GP surgery finder with location-based search, appointment booking info, and local healthcare services. Leverages NHS data and postcodes.io geolocation.',
      link: 'https://londongp.directory',
      highlights: ['NHS Data', 'Location Search', 'Real-time Updates', 'Accessible Design'],
      color: 'from-green-600 to-green-400'
    },
    {
      title: 'Card Payment Dev Docs',
      description: 'Developer documentation for payment systems. Covers ISO 8583, EMV standards, tokenization, and PCI DSS compliance for fintech engineers.',
      link: 'https://thierry0303.github.io/paydev-docs/',
      highlights: ['Payment Standards', 'Technical Depth', 'Developer-Focused', 'Open Source'],
      color: 'from-purple-600 to-purple-400'
    }
  ];

  const achievements = [
    {
      title: 'Industry Leader',
      description: '13+ years in payment technology, leading complex EMEA projects with Tier 1 financial institutions.',
      icon: Award,
      color: 'bg-amber-500/20 text-amber-300'
    },
    {
      title: 'Full-Stack Builder',
      description: 'From Python data pipelines to React frontends. Entrepreneur with 2 live directory products and 1000s of users.',
      icon: Code2,
      color: 'bg-blue-500/20 text-blue-300'
    },
    {
      title: 'Academic Rigor',
      description: 'MSc Birkbeck, published research on blockchain adoption in payment systems, PSD2/GDPR compliance analysis.',
      icon: BookOpen,
      color: 'bg-purple-500/20 text-purple-300'
    },
    {
      title: 'Multilingual',
      description: 'Native French & Portuguese, fluent English & Spanish. Manages international teams and complex negotiations.',
      icon: Zap,
      color: 'bg-green-500/20 text-green-300'
    }
  ];

  const skills = [
    { category: 'Payment Systems', skills: ['ISO 8583', 'EMV', 'NFC/Contactless', '3DS 2.0', 'PCI DSS', 'Tokenization'] },
    { category: 'Technical Leadership', skills: ['Project Management', 'Team Leadership', 'Stakeholder Management', 'Agile', 'Cross-functional Coordination'] },
    { category: 'Frontend Development', skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Responsive Design', 'Accessibility'] },
    { category: 'Backend Development', skills: ['Python', 'Data Pipelines', 'GitHub Actions', 'Automation'] }
  ];

  const experiences = [
    {
      title: 'Customer Success Manager (CSM)',
      company: 'Outseer (RSA Security)',
      period: 'November 2021 – Present',
      focus: '3DS Fraud Prevention Solutions – Access Control Server (ACS)',
      highlights: [
        'Strategic account management of Tier 1 clients across EMEA',
        'Lead complex API integrations and 3DS 2.0 implementations',
        'Coordinate cross-functional teams on advanced fraud prevention projects',
        'Maintain high customer satisfaction and quarterly success metrics'
      ]
    },
    {
      title: 'Senior Project Manager',
      company: 'Diners Club / Discover Financial Services',
      period: 'May 2017 – November 2021',
      focus: 'Global Acquirer Onboarding & Strategic Partnerships',
      highlights: [
        '[NASDAQ-listed] Credit Mutuel Arkea & Discover Global Network partnership (2019)',
        '[Business Wire] La Banque Postale merchant clients Discover acceptance (2019)',
        'Led onboarding of 4 Tier 1 acquirers (3 France, 1 Spain)',
        'Managed strategic partnerships: Frenchsys, Redsys, STMP, SIBS, Unicre, SIX, Ingenico'
      ]
    }
  ];

  const academic = [
    {
      title: 'MSc International Management',
      institution: 'Birkbeck, University of London',
      year: '2016–2018',
      details: 'Dissertation: "Blockchain: Diffusion of Innovation into Digital Payment" – Examined viability of blockchain as alternative to card payment systems.',
      highlights: ['Rogers\' Innovation Theory', 'PSD2/GDPR Compliance', 'Industry Research', 'Qualitative Analysis']
    },
    {
      title: 'BA Management + BA Languages & Literature',
      institution: 'Portugal (Tomar & Lisbon)',
      year: '2005–2010',
      details: 'Foundational business and language studies. Erasmus exchange in Belgium.',
      highlights: ['International Education', 'Language Fluency', 'Cultural Awareness']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 overflow-x-hidden">
      
      {/* Navigation */}
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
                whileTap={{ scale: 0.95 }}
                className={`capitalize font-semibold transition ${
                  activeSection === item ? 'text-amber-300' : 'text-gray-400 hover:text-amber-300'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-300"
          >
            ☰
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-800/95 border-t border-slate-700 p-4"
          >
            {['projects', 'expertise', 'experience', 'academic', 'about'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-left py-2 capitalize text-gray-400 hover:text-amber-300"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ 
              x: [0, 20, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              x: [0, -20, 0],
              y: [0, -30, 0]
            }}
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
            Payment Technology <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">Leader & Innovator</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            13+ years delivering complex, high-impact international payment solutions across Europe. Data-driven entrepreneur building practical, accessible services. Multilingual specialist in card payments, fraud prevention, and fintech innovation.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button 
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-300 transition transform cursor-pointer"
            >
              View Work
            </motion.button>
            <motion.a 
              href="https://drive.google.com/uc?export=download&id=1qNKxVuf7t0ft31dUjH_bUu88CdHnVLuF"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-amber-400 text-amber-300 font-semibold rounded-lg hover:bg-amber-400/10 transition cursor-pointer flex items-center gap-2"
            >
              Download CV
              <ExternalLink size={18} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/thierry-amiot-b92a7437"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-amber-400 text-amber-300 font-semibold rounded-lg hover:bg-amber-400/10 transition cursor-pointer"
            >
              Connect on LinkedIn
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

      {/* Key Achievements Section */}
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
            Why <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">Work Together</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className={`p-8 rounded-xl border border-slate-700 hover:border-amber-400/50 transition ${item.color.split(' ')[0]} bg-opacity-10`}
                >
                  <Icon className={`mb-4 ${item.color.split(' ')[1]}`} size={32} />
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
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
            Featured <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={scaleIn}
                whileHover={{ y: -15, boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}
                className="group relative p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-amber-400/50 transition overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition duration-300`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Expertise Section */}
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
            <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-amber-400/50 transition"
              >
                <h3 className="text-xl font-bold mb-4 text-amber-300">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="px-4 py-2 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/30 hover:bg-amber-400/20 transition"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
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
            Professional <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">Leadership</span>
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={slideInLeft}
                whileHover={{ x: 10 }}
                className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-amber-400/50 transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-amber-300 font-semibold text-sm md:text-base">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm md:text-base md:whitespace-nowrap">{exp.period}</span>
                </div>
                
                <p className="text-gray-400 mb-4 italic text-sm md:text-base">{exp.focus}</p>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
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

      {/* Academic Section */}
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
            <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">Academic</span> & Research
          </motion.h2>
          
          <div className="space-y-8">
            {academic.map((item, idx) => (
              <motion.div
                key={idx}
                variants={slideInRight}
                whileHover={{ x: -10 }}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-purple-400/50 transition"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-purple-300 font-semibold">{item.institution}</p>
                  <p className="text-gray-500">{item.year}</p>
                </div>
                
                <p className="text-gray-400 mb-4">{item.details}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-xs rounded-full bg-purple-400/20 text-purple-300 border border-purple-400/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
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
            Get in <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="https://www.linkedin.com/in/thierry-amiot-b92a7437"
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-400/50 transition"
            >
              <Linkedin className="text-blue-400 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition">LinkedIn Profile</h3>
              <p className="text-gray-400 mt-2">Connect with me on LinkedIn for updates and opportunities</p>
            </motion.a>

            <motion.a
              href="https://github.com/thierry0303"
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-gray-400/50 transition"
            >
              <Github className="text-gray-400 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition">GitHub</h3>
              <p className="text-gray-400 mt-2">View my projects and technical contributions</p>
            </motion.a>
          </div>

          <motion.a
            href="mailto:thierry1981@protonmail.com"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="block text-center p-8 rounded-xl bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border border-amber-400/50 hover:border-amber-300 transition"
          >
            <Mail className="text-amber-300 mb-4 mx-auto" size={40} />
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-amber-300 hover:text-amber-200">thierry1981@protonmail.com</p>
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-slate-700 py-12 px-6 bg-slate-900/50 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent mb-6 md:mb-0">
              Thierry Amiot
            </div>
            
            <div className="flex gap-8">
              <motion.a
                href="https://www.linkedin.com/in/thierry-amiot-b92a7437"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-amber-300 transition cursor-pointer p-2 rounded-lg hover:bg-amber-400/10"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href="https://github.com/thierry0303"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-amber-300 transition cursor-pointer p-2 rounded-lg hover:bg-amber-400/10"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="mailto:thierry1981@protonmail.com"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-amber-300 transition cursor-pointer p-2 rounded-lg hover:bg-amber-400/10"
              >
                <Mail size={28} />
              </motion.a>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>Payment technology leader, fintech innovator, and practical problem solver</p>
            <p className="mt-2">© 2026 Thierry Amiot. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
