import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiExternalLink, FiFileText, FiTarget, FiGlobe, FiCode, FiZap } from 'react-icons/fi';

// Importa las imágenes
import CEP from './assets/CEP.png';
import CI from './assets/CI.png';
import CIS from './assets/CIS.png';
import LogoCentro from './assets/logo_centro_empresariales.png';
import Logo8 from './assets/EMPRENDE_TECH.png';
import Logo7 from './assets/7.png';
import Logito from './assets/logito.png';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [generalidadesOpen, setGeneralidadesOpen] = useState(false);

  // URL del formulario de registro
  const registroUrl = 'https://forms.gle/FdNnMwMAvLhMJ8sf6';

  const categories = [
    {
      id: 'ingles',
      title: 'Inglés',
      icon: <FiGlobe className="w-6 h-6" />,
      color: 'rosa',
      subtitle: 'Centro de Idiomas',
      logo: CI,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-br from-[#FE2577]/10 to-white rounded-xl border border-[#FE2577]/20 shadow-lg">
            <h4 className="font-bold text-[#FE2577] mb-4 text-lg flex items-center gap-2">
              <FiGlobe className="w-5 h-5" />
              Opciones disponibles:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#FE2577]/5 rounded-lg border border-[#FE2577]/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
                <div className="w-2 h-2 rounded-full bg-[#FE2577] animate-pulse"></div>
                <span>Opción 1 - Inglés Técnico</span>
              </li>
              <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#FE2577]/5 rounded-lg border border-[#FE2577]/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
                <div className="w-2 h-2 rounded-full bg-[#FE2577] animate-pulse"></div>
                <span>Opción 2 - Comunicación Avanzada</span>
              </li>
              <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#FE2577]/5 rounded-lg border border-[#FE2577]/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
                <div className="w-2 h-2 rounded-full bg-[#FE2577] animate-pulse"></div>
                <span>Opción 3 - Presentaciones Ejecutivas</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'computacion',
      title: 'Informática',
      icon: <FiCode className="w-6 h-6" />,
      color: 'celeste',
      subtitle: 'Centro de Informática',
      logo: CIS,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-br from-celeste/10 to-white rounded-xl border border-celeste/20 shadow-lg">
            <h4 className="font-bold text-celeste mb-4 text-lg flex items-center gap-2">
              <FiCode className="w-5 h-5" />
              Opciones disponibles:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm p-3 hover:bg-celeste/5 rounded-lg border border-celeste/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
                <div className="w-2 h-2 rounded-full bg-celeste animate-pulse"></div>
                <span>Opción 1 - Desarrollo Web</span>
              </li>
              <li className="flex items-center gap-2 text-sm p-3 hover:bg-celeste/5 rounded-lg border border-celeste/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
                <div className="w-2 h-2 rounded-full bg-celeste animate-pulse"></div>
                <span>Opción 2 - Inteligencia Artificial</span>
              </li>
              <li className="flex items-center gap-2 text-sm p-3 hover:bg-celeste/5 rounded-lg border border-celeste/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
                <div className="w-2 h-2 rounded-full bg-celeste animate-pulse"></div>
                <span>Opción 3 - Ciberseguridad</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'emprendimiento',
      title: 'Emprendimiento',
      icon: <FiZap className="w-6 h-6" />,
      color: 'verde',
      subtitle: 'Empresarialmente y Producción',
      logo: CEP,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-br from-[#00B65A]/10 to-white rounded-xl border border-[#00B65A]/20 shadow-lg">
            <h4 className="font-bold text-[#00B65A] mb-4 text-lg flex items-center gap-2">
              <FiZap className="w-5 h-5" />
              Opciones disponibles:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#00B65A]/5 rounded-lg border border-[#00B65A]/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
                <div className="w-2 h-2 rounded-full bg-[#00B65A] animate-pulse"></div>
                <span>Opción 1 - Modelos de Negocio</span>
              </li>
              <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#00B65A]/5 rounded-lg border border-[#00B65A]/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
                <div className="w-2 h-2 rounded-full bg-[#00B65A] animate-pulse"></div>
                <span>Opción 2 - Finanzas para Startups</span>
              </li>
              <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#00B65A]/5 rounded-lg border border-[#00B65A]/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
                <div className="w-2 h-2 rounded-full bg-[#00B65A] animate-pulse"></div>
                <span>Opción 3 - Marketing Digital</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const emprendeTech = {
    id: 'emprende-tech',
    title: 'Emprende Tech',
    icon: <FiExternalLink className="w-6 h-6" />,
    color: 'azul',
    subtitle: 'U-LEARNING',
    logo: Logo7,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-gradient-to-br from-[#3A86FF]/10 to-white rounded-xl border border-[#3A86FF]/20 shadow-lg">
          <h4 className="font-bold text-[#3A86FF] mb-4 text-lg text-center flex items-center justify-center gap-2">
            <FiExternalLink className="w-5 h-5" />
            Aula Virtual
          </h4>
          <div className="space-y-4">
            <div className="text-center">
              <motion.a 
                href="https://ulearning.com.pe/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3A86FF] to-[#2D6CD6] text-white rounded-xl hover:shadow-xl transition-all duration-300 font-medium w-full shadow-lg hover:shadow-[#3A86FF]/30"
              >
                <FiExternalLink className="w-5 h-5" />
                <span>Ir al Aula Virtual</span>
              </motion.a>
            </div>
            <p className="text-xs text-gray-600 text-center mt-2">
              Accede a recursos, materiales y actividades del programa
            </p>
          </div>
        </div>
      </div>
    )
  };

  // Opciones para Generalidades
  const generalidadesOptions = {
    id: 'generalidades',
    title: 'Generalidades',
    color: 'azul-oscuro',
    logo: null,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-gradient-to-br from-[#012c65]/10 to-white rounded-xl border border-[#012c65]/20 shadow-lg">
          <h4 className="font-bold text-[#012c65] mb-4 text-lg">Opciones disponibles:</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#012c65]/5 rounded-lg border border-[#012c65]/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
              <div className="w-2 h-2 rounded-full bg-[#012c65] animate-pulse"></div>
              <span>Opción 1 - Información General</span>
            </li>
            
            <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#012c65]/5 rounded-lg border border-[#012c65]/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
              <div className="w-2 h-2 rounded-full bg-[#012c65] animate-pulse"></div>
              <span>Opción 2 - Calendario</span>
            </li>
            
            <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#012c65]/5 rounded-lg border border-[#012c65]/10 bg-white/50 backdrop-blur-sm transition-all hover:translate-x-1">
              <div className="w-2 h-2 rounded-full bg-[#012c65] animate-pulse"></div>
              <span>Opción 3 - Contacto</span>
            </li>
          </ul>
        </div>
      </div>
    )
  };

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const toggleGeneralidades = () => {
    setGeneralidadesOpen(!generalidadesOpen);
    if (!generalidadesOpen) {
      setActiveCategory(null);
    }
  };

  const handleRegistroClick = () => {
    window.open(registroUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50/30 min-h-screen">
      {/* Navbar mejorado */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-white/95 backdrop-blur-lg z-50 shadow-lg border-b border-gray-200/50"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-16 md:h-20 flex items-center"
            >
              <img 
                src={LogoCentro} 
                alt="Centros Empresariales" 
                className="h-full w-auto object-contain max-w-[200px] md:max-w-[280px] hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
              />
            </motion.div>

            <div className="hidden md:flex space-x-3 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRegistroClick}
                className="font-medium px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-[#012c65] to-[#1e4a8a] hover:from-[#1e4a8a] hover:to-[#012c65] shadow-lg hover:shadow-xl transition-all duration-300 text-sm shadow-[#012c65]/20"
              >
                Registro
              </motion.button>

              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleCategory(cat.id)}
                  className={`font-medium px-5 py-2.5 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm ${
                    activeCategory === cat.id 
                      ? cat.color === 'rosa' 
                        ? 'bg-gradient-to-r from-[#FE2577] to-[#D81B60] shadow-[#FE2577]/30' 
                        : cat.color === 'celeste' 
                          ? 'bg-gradient-to-r from-celeste to-[#2563EB] shadow-celeste/30' 
                          : 'bg-gradient-to-r from-[#00B65A] to-[#059669] shadow-[#00B65A]/30'
                      : cat.color === 'rosa' 
                        ? 'bg-gradient-to-r from-[#FE2577]/90 to-[#D81B60]/90 hover:from-[#FE2577] hover:to-[#D81B60]' 
                        : cat.color === 'celeste' 
                          ? 'bg-gradient-to-r from-celeste/90 to-[#2563EB]/90 hover:from-celeste hover:to-[#2563EB]' 
                          : 'bg-gradient-to-r from-[#00B65A]/90 to-[#059669]/90 hover:from-[#00B65A] hover:to-[#059669]'
                  }`}
                >
                  {cat.title}
                </motion.button>
              ))}
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-xl z-50 transition-colors border border-gray-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t shadow-xl"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-3">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      handleRegistroClick();
                      setMobileMenuOpen(false);
                    }}
                    className="font-medium text-center px-4 py-3 rounded-xl text-white bg-gradient-to-r from-[#012c65] to-[#1e4a8a] hover:from-[#1e4a8a] hover:to-[#012c65] transition-all shadow-lg text-sm"
                  >
                    Registro
                  </motion.button>

                  {categories.map((cat) => (
                    <motion.button
                      key={cat.id}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        toggleCategory(cat.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`font-medium text-center px-4 py-3 rounded-xl text-white transition-all shadow-lg text-sm ${
                        activeCategory === cat.id 
                          ? cat.color === 'rosa' 
                            ? 'bg-gradient-to-r from-[#FE2577] to-[#D81B60]' 
                            : cat.color === 'celeste' 
                              ? 'bg-gradient-to-r from-celeste to-[#2563EB]' 
                              : 'bg-gradient-to-r from-[#00B65A] to-[#059669]'
                          : cat.color === 'rosa' 
                            ? 'bg-gradient-to-r from-[#FE2577]/90 to-[#D81B60]/90' 
                            : cat.color === 'celeste' 
                              ? 'bg-gradient-to-r from-celeste/90 to-[#2563EB]/90' 
                              : 'bg-gradient-to-r from-[#00B65A]/90 to-[#059669]/90'
                      }`}
                    >
                      {cat.title}
                    </motion.button>
                  ))}
                  
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      toggleGeneralidades();
                      setMobileMenuOpen(false);
                    }}
                    className="font-medium text-center px-4 py-3 rounded-xl text-white bg-gradient-to-r from-[#012c65]/90 to-[#1e4a8a]/90 hover:from-[#012c65] hover:to-[#1e4a8a] transition-all shadow-lg text-sm"
                  >
                    Generalidades
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Contenido principal */}
      <main className="flex-grow pt-28 md:pt-36 relative">
        {/* Logo Emprende Tech */}
        <section className="pt-6 md:pt-8 pb-0 overflow-visible">
          <div className="container mx-auto px-4 overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex flex-col items-center justify-center overflow-visible"
            >
              <img 
                src={Logo8} 
                alt="Logo principal" 
                className="w-full max-w-3xl h-auto max-h-48 md:max-h-[350px] object-contain mx-auto mb-2 md:mb-4 filter drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Sección DESAFÍO mejorada con diseño unificado */}
        <section className="py-6 md:py-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-white to-gray-50/30 rounded-2xl border border-gray-200/50 shadow-2xl p-6 md:p-8 backdrop-blur-sm"
              >
                {/* Grid unificado con diseño mejorado */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Logo Logito con diseño mejorado */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="lg:col-span-2 flex justify-center"
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#012c65]/10 to-[#1e4a8a]/10 rounded-2xl blur-xl"></div>
                      <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-xl border-2 border-[#012c65]/20 shadow-lg">
                        <img 
                          src={Logito} 
                          alt="Desafío" 
                          className="w-16 h-16 md:w-20 md:h-20 object-contain filter drop-shadow-md"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Título DESAFÍO con diseño mejorado */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="lg:col-span-3 flex justify-center lg:justify-start"
                  >
                    <div className="text-center lg:text-left">
                      <div className="flex items-center gap-3">
                        <FiTarget className="w-8 h-8 text-[#012c65]" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#012c65] via-[#1e4a8a] to-[#012c65] bg-clip-text text-transparent tracking-tight">
                          DESAFÍO
                        </h2>
                      </div>
                      <div className="mt-3 h-1.5 w-24 md:w-32 bg-gradient-to-r from-[#012c65] to-[#1e4a8a] rounded-full mx-auto lg:mx-0 shadow-lg"></div>
                      <p className="mt-2 text-sm text-[#012c65]/70 font-medium">
                        Innovación y Tecnología
                      </p>
                    </div>
                  </motion.div>

                  {/* Texto descriptivo con diseño mejorado */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="lg:col-span-7 flex items-center"
                  >
                    <div className="w-full">
                      <div className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border border-gray-200/50 shadow-inner">
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center lg:text-left">
                          <span className="font-semibold text-[#012c65]">Desarrollar una solución tecnológica innovadora</span> que resuelva un problema real, con una propuesta de valor clara, comunicada en inglés y defendida en español ante un jurado especializado.
                        </p>
                        <div className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-[#00B65A] animate-pulse"></div>
                            <span>Innovación</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-celeste animate-pulse"></div>
                            <span>Tecnología</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-[#FE2577] animate-pulse"></div>
                            <span>Comunicación</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Cursos con diseño mejorado */}
        <section className="pt-4 pb-20 md:pb-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="relative group"
                    onMouseEnter={() => setActiveCategory(category.id)}
                    onMouseLeave={() => setActiveCategory(null)}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        toggleCategory(category.id);
                      }
                    }}
                  >
                    {/* Card principal */}
                    <div className="relative w-full flex flex-col items-center">
                      {/* Efecto de fondo */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-gray-200/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      
                      {/* Contenedor de logo */}
                      <div className={`relative w-36 h-36 md:w-40 md:h-40 mx-auto rounded-2xl flex items-center justify-center transition-all duration-500 border-2 overflow-hidden shadow-2xl group-hover:shadow-3xl ${
                        activeCategory === category.id 
                          ? category.color === 'rosa' 
                            ? 'bg-gradient-to-br from-[#FE2577]/20 via-white to-[#FE2577]/5 border-[#FE2577]/40' 
                            : category.color === 'celeste'
                              ? 'bg-gradient-to-br from-celeste/20 via-white to-celeste/5 border-celeste/40'
                              : 'bg-gradient-to-br from-[#00B65A]/20 via-white to-[#00B65A]/5 border-[#00B65A]/40'
                          : 'bg-gradient-to-br from-white via-gray-50/50 to-white border-gray-300/50 group-hover:border-gray-400/50'
                      }`}>
                        {/* Efecto de brillo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                        
                        <motion.img
                          animate={activeCategory === category.id ? { 
                            scale: [1, 1.15, 1]
                          } : {}}
                          transition={{ duration: 0.6 }}
                          src={category.logo}
                          alt={category.title}
                          className="relative w-full h-full object-contain p-6 filter drop-shadow-lg"
                        />
                      </div>

                      {/* Contenido textual */}
                      <div className="mt-5 text-center space-y-2 relative">
                        <h3 className={`font-bold text-lg md:text-xl flex items-center justify-center gap-2 ${
                          category.color === 'rosa' ? 'text-[#FE2577]' :
                          category.color === 'celeste' ? 'text-celeste' :
                          'text-[#00B65A]'
                        }`}>
                          {category.icon}
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Contenido emergente */}
                    <AnimatePresence>
                      {activeCategory === category.id && (
                        <motion.div
                          initial={{ 
                            opacity: 0, 
                            y: 30,
                            scale: 0.95
                          }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            scale: 1
                          }}
                          exit={{ 
                            opacity: 0, 
                            y: -10,
                            scale: 0.95
                          }}
                          transition={{ 
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            mass: 0.6
                          }}
                          className="absolute top-full left-0 right-0 mt-6 z-40 px-2"
                        >
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-200/50 backdrop-blur-sm"
                          >
                            <div className="mb-5">
                              {category.content}
                            </div>

                            <button
                              className="mt-4 w-full py-2.5 rounded-xl font-medium text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 md:hidden border border-gray-300 transition-all hover:shadow-md"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveCategory(null);
                              }}
                            >
                              Cerrar
                            </button>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Card Emprende Tech */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(emprendeTech.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      toggleCategory(emprendeTech.id);
                    }
                  }}
                >
                  <div className="relative w-full flex flex-col items-center">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#3A86FF]/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    
                    <div className={`relative w-36 h-36 md:w-40 md:h-40 mx-auto rounded-2xl flex items-center justify-center transition-all duration-500 border-2 overflow-hidden shadow-2xl group-hover:shadow-3xl ${
                      activeCategory === emprendeTech.id 
                        ? 'bg-gradient-to-br from-[#3A86FF]/20 via-white to-[#3A86FF]/5 border-[#3A86FF]/40' 
                        : 'bg-gradient-to-br from-white via-gray-50/50 to-white border-gray-300/50 group-hover:border-gray-400/50'
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                      
                      <motion.img
                        animate={activeCategory === emprendeTech.id ? { 
                          scale: [1, 1.15, 1]
                        } : {}}
                        transition={{ duration: 0.6 }}
                        src={emprendeTech.logo}
                        alt={emprendeTech.title}
                        className="relative w-full h-full object-contain p-6 filter drop-shadow-lg"
                      />
                    </div>

                    <div className="mt-5 text-center space-y-2 relative">
                      <h3 className="font-bold text-lg md:text-xl text-[#3A86FF] flex items-center justify-center gap-2">
                        {emprendeTech.icon}
                        {emprendeTech.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm">
                        {emprendeTech.subtitle}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeCategory === emprendeTech.id && (
                      <motion.div
                        initial={{ 
                          opacity: 0, 
                          y: 30,
                          scale: 0.95
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          scale: 1
                        }}
                        exit={{ 
                          opacity: 0, 
                          y: -10,
                          scale: 0.95
                        }}
                        transition={{ 
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                          mass: 0.6
                        }}
                        className="absolute top-full left-0 right-0 mt-6 z-40 px-2"
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.4 }}
                          className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-200/50 backdrop-blur-sm"
                        >
                          <div className="mb-5">
                            {emprendeTech.content}
                          </div>

                          <button
                            className="mt-4 w-full py-2.5 rounded-xl font-medium text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 md:hidden border border-gray-300 transition-all hover:shadow-md"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCategory(null);
                            }}
                          >
                            Cerrar
                          </button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Botón Generalidades mejorado */}
        <div className="fixed bottom-8 md:bottom-10 left-6 md:left-8 z-40">
          <div className="relative">
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleGeneralidades}
              className={`flex items-center gap-3 px-5 py-3.5 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-sm md:text-base backdrop-blur-sm ${
                generalidadesOpen 
                  ? 'bg-gradient-to-r from-[#1e4a8a] via-[#012c65] to-[#1e4a8a] shadow-[#012c65]/30' 
                  : 'bg-gradient-to-r from-[#012c65] via-[#1e4a8a] to-[#012c65] hover:from-[#1e4a8a] hover:via-[#012c65] hover:to-[#1e4a8a] shadow-[#012c65]/20'
              }`}
            >
              <div className="relative">
                <FiFileText className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
              </div>
              <span>Generalidades</span>
            </motion.button>

            <AnimatePresence>
              {generalidadesOpen && (
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    y: 20,
                    scale: 0.95
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 10,
                    scale: 0.95
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.6
                  }}
                  className="absolute bottom-full left-0 mb-4 z-50 min-w-[260px] md:min-w-[300px]"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-200/50"
                  >
                    <div className="mb-6">
                      {generalidadesOptions.content}
                    </div>

                    <button
                      className="mt-2 w-full py-3 rounded-xl font-medium text-sm text-gray-700 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 border border-gray-300 transition-all hover:shadow-md"
                      onClick={() => setGeneralidadesOpen(false)}
                    >
                      Cerrar
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
      
      {/* Footer mejorado */}
      <footer className="bg-gradient-to-r from-gray-900 via-[#012c65] to-gray-900 text-white py-8 w-full mt-auto flex-shrink-0">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <p className="text-sm font-light">
              © 2026 Centros Empresariales - Todos los derechos reservados
            </p>
            <p className="text-xs text-gray-400">
              Innovando en educación tecnológica y emprendimiento
            </p>
          </motion.div>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --color-celeste: #3B82F6;
        }
        
        .text-celeste {
          color: var(--color-celeste);
        }
        
        .bg-celeste {
          background-color: var(--color-celeste);
        }
        
        .border-celeste {
          border-color: var(--color-celeste);
        }
        
        html, body, #root {
          height: 100%;
          min-height: 100%;
        }
        
        body {
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
        }
        
        #root {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* Mejoras en scroll */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #012c65, #1e4a8a);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #1e4a8a, #012c65);
        }

        /* Asegurar que el botón no se sobreponga en móviles */
        @media (max-width: 768px) {
          main {
            padding-bottom: 100px;
          }
          
          .fixed.bottom-8 {
            bottom: 90px;
          }

          /* Mejoras en la sección DESAFÍO para móviles */
          section.py-6.md\\:py-8.px-4 .grid {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          section.py-6.md\\:py-8.px-4 .lg\\:col-span-2,
          section.py-6.md\\:py-8.px-4 .lg\\:col-span-3,
          section.py-6.md\\:py-8.px-4 .lg\\:col-span-7 {
            width: 100%;
          }

          /* Centrar todo en móviles */
          section.py-6.md\\:py-8.px-4 .text-center.lg\\:text-left {
            text-align: center;
          }

          section.py-6.md\\:py-8.px-4 .mx-auto.lg\\:mx-0 {
            margin-left: auto;
            margin-right: auto;
          }

          /* Ajustar tamaño de cards en móviles */
          .relative.group .w-36 {
            width: 8rem;
            height: 8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
