import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiExternalLink, FiFileText } from 'react-icons/fi';

// Importa las imágenes
import CEP from './assets/CEP.png';
import CI from './assets/CI.png';
import CIS from './assets/CIS.png';
import LogoCentro from './assets/logo_centro_empresariales.png';
import Logo8 from './assets/EMPRENDE_TECH.png';
import Logo7 from './assets/7.png';
import Logito from './assets/logito.png'; // Asegúrate de tener este archivo

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
      color: 'rosa',
      logo: CI,
      subtitle: 'Centro de Idiomas',
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
      subtitle: 'Centro de Informática',
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
      subtitle: 'Empresarialmente y Producción',
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

  const emprendeTech = {
    id: 'emprende-tech',
    title: 'Emprende Tech',
    color: 'azul',
    logo: Logo7,
    subtitle: 'U-LEARNING',
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-[#3A86FF]/10 rounded-xl border border-[#3A86FF]/20">
          <h4 className="font-bold text-[#3A86FF] mb-4 text-lg text-center">Aula Virtual</h4>
          <div className="space-y-4">
            <div className="text-center">
              <a 
                href="https://ulearning.com.pe/" 
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

  // Opciones para Generalidades
  const generalidadesOptions = {
    id: 'generalidades',
    title: 'Generalidades',
    color: 'azul-oscuro',
    logo: null,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-[#012c65]/10 rounded-xl border border-[#012c65]/20">
          <h4 className="font-bold text-[#012c65] mb-4 text-lg">Opciones disponibles:</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#012c65]/5 rounded-lg border border-gray-200/50">
              ✅ Opción1
            </li>
            
            <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#012c65]/5 rounded-lg border border-gray-200/50">
              ✅ Opción2
            </li>
            
            <li className="flex items-center gap-2 text-sm p-3 hover:bg-[#012c65]/5 rounded-lg border border-gray-200/50">
              ✅ Opción3
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
    // Si se abre generalidades, cerramos cualquier otra categoría activa
    if (!generalidadesOpen) {
      setActiveCategory(null);
    }
  };

  // Función para abrir el formulario de registro
  const handleRegistroClick = () => {
    window.open(registroUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Navbar - REDUCIDO en altura */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm"
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
                className="h-full w-auto object-contain max-w-[200px] md:max-w-[280px] hover:scale-110 transition-transform duration-300"
              />
            </motion.div>

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
                  
                  {/* Botón Generalidades en menú móvil */}
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

      {/* Contenido principal */}
      <main className="flex-grow pt-28 md:pt-36 relative">
        {/* Sección del Logo Emprende Tech */}
        <section className="pt-6 md:pt-8 pb-0 bg-gradient-to-r from-gray-50/50 to-white/50 overflow-visible">
          <div className="container mx-auto px-4 overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center overflow-visible"
            >
              {/* Logo EMPRENDE_TECH */}
              <img 
                src={Logo8} 
                alt="Logo principal" 
                className="w-full max-w-3xl h-auto max-h-48 md:max-h-[350px] object-contain mx-auto mb-2 md:mb-4"
              />
            </motion.div>
          </div>
        </section>

        {/* Sección DESAFÍO con Logo, Título y Texto - CORREGIDO */}
        <section className="py-4 md:py-6 px-4">
          <div className="container mx-auto">
            <div className="max-w-7xl mx-auto">
              {/* Grid con 4 columnas iguales */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 md:gap-6 items-center">
                
                {/* Logo Logito - Columna 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="sm:col-span-1 flex justify-center items-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                    <img 
                      src={Logito} 
                      alt="Desafío" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                {/* Título DESAFÍO - Columna 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="sm:col-span-1 flex justify-center md:justify-start items-center"
                >
                  <div className="text-center md:text-left">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#012c65] to-[#1e4a8a] bg-clip-text text-transparent tracking-tight">
                      DESAFÍO
                    </h2>
                    <div className="mt-1 h-1 w-16 md:w-20 bg-gradient-to-r from-[#012c65] to-[#1e4a8a] rounded-full mx-auto md:mx-0"></div>
                  </div>
                </motion.div>

                {/* Texto descriptivo - Columnas 3 y 4 (col-span-2) */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="sm:col-span-2 flex items-center"
                >
                  <div className="w-full">
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed text-center md:text-left">
                      Desarrollar una solución tecnológica innovadora que resuelva un problema real, con una propuesta de valor clara, comunicada en inglés y defendida en español ante un jurado.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Cursos - CON 4 COLUMNAS IGUALES */}
        <section className="pt-2 pb-16 md:pb-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="container mx-auto">
              {/* Grid de 4 columnas con responsividad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -8
                    }}
                    className="relative group flex flex-col items-center"
                    onMouseEnter={() => setActiveCategory(category.id)}
                    onMouseLeave={() => setActiveCategory(null)}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        toggleCategory(category.id);
                      }
                    }}
                  >
                    <div className="relative w-full flex flex-col items-center">
                      <div className={`w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-3xl flex items-center justify-center transition-all duration-300 border-2 border-gray-300 overflow-hidden ${
                        activeCategory === category.id 
                          ? category.color === 'rosa' 
                            ? 'bg-gradient-to-br from-[#FE2577]/20 to-[#FE2577]/5 shadow-2xl shadow-[#FE2577]/30 border-[#FE2577]/30' 
                            : category.color === 'celeste'
                              ? 'bg-gradient-to-br from-celeste/20 to-celeste/5 shadow-2xl shadow-celeste/30 border-celeste/30'
                              : 'bg-gradient-to-br from-[#00B65A]/20 to-[#00B65A]/5 shadow-2xl shadow-[#00B65A]/30 border-[#00B65A]/30'
                          : 'bg-white shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all'
                      }`}>
                        <motion.img
                          animate={activeCategory === category.id ? { 
                            scale: [1, 1.1, 1]
                          } : {}}
                          transition={{ duration: 0.5 }}
                          src={category.logo}
                          alt={category.title}
                          className="w-full h-full object-contain p-4 md:p-5"
                        />
                      </div>
                    </div>

                    {/* Título debajo del logo */}
                    <div className="mt-3 text-center w-full px-2">
                      <h3 className="font-semibold text-sm md:text-base text-gray-800">
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 min-h-[2.5rem]">
                        {category.subtitle}
                      </p>
                    </div>

                    <AnimatePresence>
                      {activeCategory === category.id && (
                        <motion.div
                          initial={{ 
                            opacity: 0, 
                            y: 30,
                            scale: 0.9
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
                          className="absolute top-full left-0 right-0 mt-4 z-40 px-2 w-full"
                        >
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200"
                          >
                            <div className="mb-4">
                              {category.content}
                            </div>

                            <button
                              className="mt-3 w-full py-2 rounded-lg font-medium text-xs text-gray-700 bg-gray-100 hover:bg-gray-200 md:hidden border border-gray-300"
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

                {/* Logo 7.png - Aula Virtual - Columna 4 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8
                  }}
                  className="relative group flex flex-col items-center"
                  onMouseEnter={() => setActiveCategory(emprendeTech.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      toggleCategory(emprendeTech.id);
                    }
                  }}
                >
                  <div className="relative w-full flex flex-col items-center">
                    <div className={`w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-3xl flex items-center justify-center transition-all duration-300 border-2 border-gray-300 overflow-hidden ${
                      activeCategory === emprendeTech.id 
                        ? 'bg-gradient-to-br from-[#3A86FF]/20 to-[#3A86FF]/5 shadow-2xl shadow-[#3A86FF]/30 border-[#3A86FF]/30' 
                        : 'bg-white shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all'
                    }`}>
                      <motion.img
                        animate={activeCategory === emprendeTech.id ? { 
                          scale: [1, 1.1, 1]
                        } : {}}
                        transition={{ duration: 0.5 }}
                        src={emprendeTech.logo}
                        alt={emprendeTech.title}
                        className="w-full h-full object-contain p-4 md:p-5"
                      />
                    </div>
                  </div>

                  {/* Título debajo del logo */}
                  <div className="mt-3 text-center w-full px-2">
                    <h3 className="font-semibold text-sm md:text-base text-gray-800">
                      {emprendeTech.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 min-h-[2.5rem]">
                      {emprendeTech.subtitle}
                    </p>
                  </div>

                  <AnimatePresence>
                    {activeCategory === emprendeTech.id && (
                      <motion.div
                        initial={{ 
                          opacity: 0, 
                          y: 30,
                          scale: 0.9
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
                        className="absolute top-full left-0 right-0 mt-4 z-40 px-2 w-full"
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.4 }}
                          className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200"
                        >
                          <div className="mb-4">
                            {emprendeTech.content}
                          </div>

                          <button
                            className="mt-3 w-full py-2 rounded-lg font-medium text-xs text-gray-700 bg-gray-100 hover:bg-gray-200 md:hidden border border-gray-300"
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

        {/* Botón Generalidades con submenú - POSICIÓN FIJADA RESPONSIVE */}
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
                  ? 'bg-gradient-to-r from-[#1e4a8a] to-[#012c65]' 
                  : 'bg-gradient-to-r from-[#012c65] to-[#1e4a8a]'
              }`}
            >
              <FiFileText className="w-4 h-4 md:w-5 md:h-5" />
              <span>Generalidades</span>
            </motion.button>

            {/* Submenú de Generalidades */}
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
                      {generalidadesOptions.content}
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

        /* Asegurar que el botón no se sobreponga en móviles */
        @media (max-width: 768px) {
          main {
            padding-bottom: 80px;
          }
          
          .fixed.bottom-6 {
            bottom: 80px;
          }

          /* En móviles, la sección DESAFÍO se muestra en columnas */
          section.py-4.md\\:py-6.px-4 .grid {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          section.py-4.md\\:py-6.px-4 .sm\\:col-span-1,
          section.py-4.md\\:py-6.px-4 .sm\\:col-span-2 {
            width: 100%;
          }

          /* Centrar todo en móviles */
          section.py-4.md\\:py-6.px-4 .text-center.md\\:text-left {
            text-align: center;
          }

          section.py-4.md\\:py-6.px-4 .mx-auto.md\\:mx-0 {
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* Para tablets medianas (sm) */
        @media (min-width: 640px) and (max-width: 767px) {
          section.py-4.md\\:py-6.px-4 .grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
