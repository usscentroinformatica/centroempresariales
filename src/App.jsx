import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiExternalLink, FiFileText, FiCalendar, FiClock, FiVideo, FiUsers, FiAward, FiEdit, FiTrendingUp, FiTarget } from 'react-icons/fi';

// Importa las imágenes
import CEP from './assets/CEP.png';
import CI from './assets/CI.png';
import CIS from './assets/CIS.png';
import LogoCentro from './assets/logo_centro_empresariales.png';
import Logo8 from './assets/EMPRENDE_TECH.png';
import Logo7 from './assets/7.png';
import Logito from './assets/logito.png';
import Nino from './assets/nino.png';
// Importa el PDF
import BasesPDF from './assets/Bases - Challenge.pdf';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [generalidadesOpen, setGeneralidadesOpen] = useState(false);

  const registroUrl = 'https://forms.gle/FdNnMwMAvLhMJ8sf6';
  const verdePrincipal = '#00B65A';

  const categories = [
    {
      id: 'ingles',
      title: 'Inglés',
      color: 'rosa',
      logo: CI,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-[#FE2577]/10 rounded-xl border border-[#FE2577]/20">
            <h4 className="font-bold text-[#FE2577] mb-4 text-lg">Opciones disponibles:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm p-2 hover:bg-[#FE2577]/5 rounded-lg">
                ✅ Opción1
              </li>
              <li className="flex items-center gap-2 text-sm p-2 hover:bg-[#FE2577]/5 rounded-lg">
                ✅ Opción2
              </li>
              <li className="flex items-center gap-2 text-sm p-2 hover:bg-[#FE2577]/5 rounded-lg">
                ✅ Opción3
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'computacion',
      title: 'Informática',
      color: 'celeste',
      logo: CIS,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-celeste/10 rounded-xl border border-celeste/20">
            <h4 className="font-bold text-celeste mb-4 text-lg">Opciones disponibles:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm p-2 hover:bg-celeste/5 rounded-lg">
                ✅ Opción1
              </li>
              <li className="flex items-center gap-2 text-sm p-2 hover:bg-celeste/5 rounded-lg">
                ✅ Opción2
              </li>
              <li className="flex items-center gap-2 text-sm p-2 hover:bg-celeste/5 rounded-lg">
                ✅ Opción3
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'emprendimiento',
      title: 'Emprendimiento',
      color: 'verde',
      logo: CEP,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-[#00B65A]/10 rounded-xl border border-[#00B65A]/20">
            <h4 className="font-bold text-[#00B65A] mb-4 text-lg">Opciones disponibles:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm p-2 hover:bg-[#00B65A]/5 rounded-lg">
                ✅ Opción1
              </li>
              <li className="flex items-center gap-2 text-sm p-2 hover:bg-[#00B65A]/5 rounded-lg">
                ✅ Opción2
              </li>
              <li className="flex items-center gap-2 text-sm p-2 hover:bg-[#00B65A]/5 rounded-lg">
                ✅ Opción3
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const aulaVirtual = {
    id: 'aula-virtual',
    title: 'Aula Virtual',
    color: 'azul',
    logo: Logo7,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-[#3A86FF]/10 rounded-xl border border-[#3A86FF]/20">
          <h4 className="font-bold text-[#3A86FF] mb-4 text-lg text-center">Aula Virtual</h4>
          <div className="space-y-4">
            <div className="text-center">
              <a 
                href="https://aula.ulearning.pe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3A86FF] text-white rounded-lg hover:bg-[#3A86FF]/90 transition-colors font-medium w-full"
              >
                <FiExternalLink className="w-5 h-5" />
                <span>Ir al Aula Virtual</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  };

  // Combinamos todas las tarjetas para la sección superior
  const allCards = [...categories, aulaVirtual];

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
    
    setTimeout(() => {
      const element = document.getElementById(`content-${categoryId}`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
      }
    }, 50);
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
    <div className="flex flex-col bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-16 md:h-20 flex items-center"
              >
                <img 
                  src={LogoCentro} 
                  alt="Centros Empresariales" 
                  className="h-full w-auto object-contain max-w-[200px] md:max-w-[280px] hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              
              {/* Logo del Challenge más grande */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-20 md:h-24 flex items-center border-l-2 border-gray-300 pl-6"
              >
                <img 
                  src={Logo8} 
                  alt="Emprende Tech" 
                  className="h-full w-auto object-contain max-w-[180px] md:max-w-[250px]"
                />
              </motion.div>
            </div>

            <div className="hidden md:flex space-x-3 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRegistroClick}
                className="font-medium px-4 py-2 rounded-lg text-white bg-[#012c65] hover:bg-[#012c65]/90 shadow-md hover:shadow-lg transition-all duration-300 text-sm"
              >
                Registro
              </motion.button>

              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleCategory(cat.id)}
                  className={`font-medium px-4 py-2 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300 text-sm ${
                    activeCategory === cat.id 
                      ? cat.color === 'rosa' 
                        ? 'bg-[#FE2577] hover:bg-[#FE2577]/90' 
                        : cat.color === 'celeste' 
                          ? 'bg-celeste hover:bg-celeste/90' 
                          : 'bg-[#00B65A] hover:bg-[#00B65A]/90'
                      : cat.color === 'rosa' 
                        ? 'bg-[#FE2577]/90 hover:bg-[#FE2577]' 
                        : cat.color === 'celeste' 
                          ? 'bg-celeste/90 hover:bg-celeste' 
                          : 'bg-[#00B65A]/90 hover:bg-[#00B65A]'
                  }`}
                >
                  {cat.title}
                </motion.button>
              ))}
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t shadow-lg"
            >
              <div className="container mx-auto px-4 py-3">
                <div className="flex flex-col space-y-3">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      handleRegistroClick();
                      setMobileMenuOpen(false);
                    }}
                    className="font-medium text-center px-4 py-3 rounded-lg text-white bg-[#012c65] hover:bg-[#012c65]/90 transition-all shadow-md text-sm"
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
                      className={`font-medium text-center px-4 py-3 rounded-lg text-white transition-all shadow-md text-sm ${
                        cat.color === 'rosa' 
                          ? 'bg-[#FE2577]/90 hover:bg-[#FE2577]' 
                          : cat.color === 'celeste' 
                            ? 'bg-celeste/90 hover:bg-celeste' 
                            : 'bg-[#00B65A]/90 hover:bg-[#00B65A]'
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
                    className="font-medium text-center px-4 py-3 rounded-lg text-white bg-[#012c65]/90 hover:bg-[#012c65] transition-all shadow-md text-sm"
                  >
                    Generalidades
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Contenido principal - TODO con fondo azul */}
      <main className="flex-grow pt-28 md:pt-36 relative bg-[#012c65]">
        {/* Hero Section */}
        <div className="pt-8 md:pt-12 pb-16 md:pb-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Columna Izquierda - Imagen del niño */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
              >
                {/* Imagen del niño */}
                <div className="relative w-full flex justify-center lg:justify-start">
                  <div className="relative w-64 md:w-80">
                    <img 
                      src={Nino} 
                      alt="Estudiante" 
                      className="w-full h-auto object-contain rounded-2xl shadow-xl"
                    />
                    {/* Efectos decorativos sutiles */}
                    <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#00B65A]/20 rounded-full blur-xl"></div>
                    <div className="absolute -top-3 -left-3 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  </div>
                </div>
              </motion.div>

              {/* Columna Derecha - Desafío y cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                {/* Título DESAFÍO con fondo blanco y texto azul - CENTRADO */}
                <div className="relative inline-block w-full mb-6 text-center">
                  <div 
                    className="absolute inset-0 bg-white rounded-2xl"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)',
                      maskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)'
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl pointer-events-none" 
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(1,44,101,0.1) 1px, transparent 1px)',
                      backgroundSize: '18px 18px'
                    }}>
                  </div>
                  <div className="relative py-6 px-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#012c65] tracking-tight">
                      DESAFÍO
                    </h2>
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: '120px' }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="h-1 bg-[#00B65A] mx-auto rounded-full mt-4"
                    />
                  </div>
                </div>

                {/* Descripción - texto blanco sobre fondo azul */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-white/90 leading-relaxed mb-8"
                >
                  Desarrollar una solución tecnológica innovadora que resuelva un problema real, con una propuesta de valor clara, comunicada en inglés y defendida en español ante un jurado.
                </motion.p>

                {/* Cards de categorías en grid - 4 columnas (incluye Ulearning) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {allCards.map((card) => (
                    <motion.div
                      key={card.id}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleCategory(card.id)}
                      className="cursor-pointer group"
                    >
                      <div className={`w-full aspect-square rounded-2xl flex items-center justify-center transition-all duration-300 border-2 bg-white shadow-md hover:shadow-xl ${
                        activeCategory === card.id
                          ? card.color === 'rosa' 
                            ? 'border-[#FE2577] shadow-[#FE2577]/20' 
                            : card.color === 'celeste'
                              ? 'border-celeste shadow-celeste/20'
                              : card.color === 'verde'
                                ? 'border-[#00B65A] shadow-[#00B65A]/20'
                                : 'border-[#3A86FF] shadow-[#3A86FF]/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <img 
                          src={card.logo} 
                          alt={card.title} 
                          className="w-16 h-16 md:w-20 md:h-20 object-contain p-3"
                        />
                      </div>
                      <p className={`text-center mt-2 font-medium text-sm text-white ${
                        activeCategory === card.id
                          ? card.color === 'rosa' 
                            ? 'text-[#FE2577]' 
                            : card.color === 'celeste'
                              ? 'text-celeste'
                              : card.color === 'verde'
                                ? 'text-[#00B65A]'
                                : 'text-[#3A86FF]'
                          : 'text-white/80'
                      }`}>
                        {card.title}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Sección de Contenido de Cards */}
            <div className="mt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="container mx-auto">
                  {/* Contenedor para mostrar el contenido de la tarjeta activa */}
                  <AnimatePresence mode="wait">
                    {activeCategory && (
                      <motion.div
                        key={activeCategory}
                        id={`content-${activeCategory}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 border border-gray-200"
                      >
                        {allCards.find(c => c.id === activeCategory)?.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sección BASES DEL CHALLENGE */}
        <div className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="relative inline-block w-full max-w-4xl mx-auto">
                <div 
                  className="absolute inset-0 bg-white rounded-2xl"
                  style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)',
                    maskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)'
                  }}
                />
                <div className="absolute inset-0 rounded-2xl pointer-events-none" 
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(1,44,101,0.1) 1px, transparent 1px)',
                    backgroundSize: '18px 18px'
                  }}>
                </div>

                <div className="relative py-8 px-8">
                  <h2 className="text-4xl md:text-5xl font-black text-[#012c65] tracking-tight">
                    LO QUE NECESITAS SABER
                  </h2>
                  <div className="w-24 h-1 bg-[#00B65A] mx-auto rounded-full mt-4"></div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card: El Reto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative inline-block">
                      <div 
                        className="absolute inset-0 bg-[#00B65A] rounded-xl"
                        style={{
                          WebkitMaskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)',
                          maskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)'
                        }}
                      />
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">El Reto</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Desarrollar una solución tecnológica innovadora que resuelva un problema real, con una propuesta de valor clara. Comunicación en inglés y defensa en español.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">#Innovación</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">#Tecnología</span>
                  </div>
                </div>
              </motion.div>

              {/* Card: Participación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative inline-block">
                      <div 
                        className="absolute inset-0 bg-[#00B65A] rounded-xl"
                        style={{
                          WebkitMaskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)',
                          maskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)'
                        }}
                      />
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Participación</h3>
                  </div>
                  <div className="space-y-3 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold text-xs">3+</span>
                      <span>Equipos por institución</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold text-xs">3-5</span>
                      <span>Estudiantes por equipo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold text-xs">1</span>
                      <span>Docente tutor acompañante</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card: Premios */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative inline-block">
                      <div 
                        className="absolute inset-0 bg-[#00B65A] rounded-xl"
                        style={{
                          WebkitMaskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)',
                          maskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)'
                        }}
                      />
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Premios</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-xs text-gray-500">1° Puesto</p>
                      <p className="font-bold text-gray-800 text-lg">S/1,500</p>
                      <p className="text-[10px] text-gray-500">+ S/300 tutor</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-xs text-gray-500">2° Puesto</p>
                      <p className="font-bold text-gray-800 text-lg">S/1,000</p>
                      <p className="text-[10px] text-gray-500">+ S/200 tutor</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-xs text-gray-500">3° Puesto</p>
                      <p className="font-bold text-gray-800 text-lg">S/500</p>
                      <p className="text-[10px] text-gray-500">+ S/100 tutor</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-xs text-gray-500">4° Puesto</p>
                      <p className="font-bold text-gray-800 text-lg">S/300</p>
                      <p className="text-[10px] text-gray-500">+ S/100 tutor</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card: Fechas Clave */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative inline-block">
                      <div 
                        className="absolute inset-0 bg-[#00B65A] rounded-xl"
                        style={{
                          WebkitMaskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)',
                          maskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)'
                        }}
                      />
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Fechas clave</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-[#00B65A] text-white rounded-lg flex items-center justify-center font-bold shadow-md">16</div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Inscripciones</p>
                        <p className="text-xs text-gray-500">16 feb - 1 abr</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-[#00B65A] text-white rounded-lg flex items-center justify-center font-bold shadow-md">13</div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Pitch Final</p>
                        <p className="text-xs text-gray-500">13 de noviembre</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sección CRONOGRAMA - Timeline Layout con fondo azul */}
        <div className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="relative inline-block w-full max-w-4xl mx-auto">
                <div 
                  className="absolute inset-0 bg-white rounded-2xl"
                  style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)',
                    maskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)'
                  }}
                />
                <div className="absolute inset-0 rounded-2xl pointer-events-none" 
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(1,44,101,0.1) 1px, transparent 1px)',
                    backgroundSize: '18px 18px'
                  }}>
                </div>
                <div className="relative py-8 px-8">
                  <h2 className="text-4xl md:text-5xl font-black text-[#012c65] tracking-tight flex items-center justify-center gap-3">            
                    CRONOGRAMA OFICIAL
                  </h2>
                  <div className="w-24 h-1 bg-[#00B65A] mx-auto rounded-full mt-4"></div>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Línea vertical central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#00B65A] rounded-full hidden md:block"></div>

              {/* Eventos */}
              <div className="space-y-12 md:space-y-0 relative">
                {/* Evento 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 md:flex-row mb-12 md:mb-0"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#00B65A] z-10 hidden md:block"></div>
                  <div className="w-full md:w-5/12 md:text-right">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 md:justify-end">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#00B65A]/20 shadow-lg shadow-[#00B65A]/20">
                          <FiEdit className="w-7 h-7 text-[#00B65A]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,182,90,0.5)]">
                          Periodo de inscripción
                        </h3>
                      </div>
                      <p className="text-white/90 font-semibold mb-3 drop-shadow-[0_0_8px_rgba(0,182,90,0.3)]">
                        🗓 16 feb - 1 abr
                      </p>
                      <p className="text-white/80 drop-shadow-[0_0_5px_rgba(0,182,90,0.2)]">
                        Registro mediante formulario oficial
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>

                {/* Evento 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 md:flex-row-reverse mb-12 md:mb-0"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#00B65A] z-10 hidden md:block"></div>
                  <div className="w-full md:w-5/12 md:text-left">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#00B65A]/20 shadow-lg shadow-[#00B65A]/20">
                          <FiTrendingUp className="w-7 h-7 text-[#00B65A]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,182,90,0.5)]">
                          Desarrollo del Challenge
                        </h3>
                      </div>
                      <p className="text-white/90 font-semibold mb-3 drop-shadow-[0_0_8px_rgba(0,182,90,0.3)]">
                        📆 Durante el año académico
                      </p>
                      <p className="text-white/80 drop-shadow-[0_0_5px_rgba(0,182,90,0.2)]">
                        Acompañamiento formativo continuo
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>

                {/* Evento 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 md:flex-row mb-12 md:mb-0"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#00B65A] z-10 hidden md:block"></div>
                  <div className="w-full md:w-5/12 md:text-right">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 md:justify-end">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#00B65A]/20 shadow-lg shadow-[#00B65A]/20">
                          <FiVideo className="w-7 h-7 text-[#00B65A]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,182,90,0.5)]">
                          Entrega de video final
                        </h3>
                      </div>
                      <p className="text-white/90 font-semibold mb-3 drop-shadow-[0_0_8px_rgba(0,182,90,0.3)]">
                        🗓 Mes de octubre
                      </p>
                      <p className="text-white/80 drop-shadow-[0_0_5px_rgba(0,182,90,0.2)]">
                        Video en inglés (máx. 3 minutos)
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>

                {/* Evento 4 */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 md:flex-row-reverse mb-12 md:mb-0"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#00B65A] z-10 hidden md:block"></div>
                  <div className="w-full md:w-5/12 md:text-left">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#00B65A]/20 shadow-lg shadow-[#00B65A]/20">
                          <FiUsers className="w-7 h-7 text-[#00B65A]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,182,90,0.5)]">
                          Pitch Final presencial
                        </h3>
                      </div>
                      <p className="text-white/90 font-semibold mb-3 drop-shadow-[0_0_8px_rgba(0,182,90,0.3)]">
                        🗓 13 de noviembre
                      </p>
                      <p className="text-white/80 drop-shadow-[0_0_5px_rgba(0,182,90,0.2)]">
                        Presentación en español ante jurado
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>
              </div>
            </div>

            {/* Mensaje final */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <FiTarget className="w-12 h-12 text-[#00B65A] mx-auto mb-4 drop-shadow-[0_0_15px_rgba(0,182,90,0.5)]" />
              <p className="text-lg text-white drop-shadow-[0_0_10px_rgba(0,182,90,0.3)]">
                ¡No te pierdas ninguna fecha importante!
              </p>
            </motion.div>
          </div>
        </div>

        {/* Botón Generalidades */}
        <div className="fixed bottom-6 md:bottom-8 left-4 md:left-6 z-40">
          <div className="relative">
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleGeneralidades}
              className={`flex items-center gap-2 px-4 py-3 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm md:text-base ${
                generalidadesOpen 
                  ? 'bg-gradient-to-r from-[#00B65A] to-[#2FA84F]' 
                  : 'bg-gradient-to-r from-[#2FA84F] to-[#00B65A]'
              }`}
            >
              <FiFileText className="w-4 h-4 md:w-5 md:h-5" />
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
                  className="absolute bottom-full left-0 mb-4 z-50 min-w-[240px] md:min-w-[280px]"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-200"
                  >
                    <div className="mb-5">
                      <h4 className="font-bold text-[#012c65] text-lg mb-3">Documentos disponibles:</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {/* Card - Bases del Challenge */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.02, y: -4 }}
                          transition={{ duration: 0.3 }}
                          className="bg-gradient-to-br from-[#012c65]/10 to-[#3A86FF]/5 rounded-xl border border-[#012c65]/30 p-4 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex gap-3 flex-1">
                              <div className="w-12 h-12 rounded-lg bg-[#012c65]/20 flex items-center justify-center flex-shrink-0">
                                <FiFileText className="w-6 h-6 text-[#012c65]" />
                              </div>
                              <div className="flex-1">
                                <h5 className="font-semibold text-[#012c65] mb-1">Bases del Challenge</h5>
                                <p className="text-xs text-gray-600">Documento oficial con todas las reglas y requisitos</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 flex gap-2">
                            <a 
                              href={BasesPDF}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#012c65] text-white rounded-lg hover:bg-[#1e4a8a] transition-all font-medium text-sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiExternalLink className="w-4 h-4" />
                              <span>Ver PDF</span>
                            </a>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <button
                      className="mt-4 w-full py-2.5 rounded-lg font-medium text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300"
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
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 w-full mt-auto flex-shrink-0">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Centros Empresariales - Todos los derechos reservados
          </p>
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
        }
        
        #root {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        @media (max-width: 768px) {
          main {
            padding-bottom: 80px;
          }
          
          .fixed.bottom-6 {
            bottom: 80px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
