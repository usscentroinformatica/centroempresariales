import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';

// Importa las imágenes
import CEP from './assets/CEP.png';
import CI from './assets/CI.png';
import CIS from './assets/CIS.png';
import LogoCentro from './assets/logo_centro_empresariales.png';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      title: 'Computación',
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

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-14 flex items-center"
            >
              <img 
                src={LogoCentro} 
                alt="Centros Empresariales" 
                className="h-full w-auto object-contain max-w-[160px] hover:scale-110 transition-transform duration-300"
              />
            </motion.div>

            <div className="hidden md:flex space-x-6 items-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`font-medium hover:scale-105 transition-transform px-4 py-2 rounded-lg ${
                    activeCategory === cat.id 
                      ? cat.color === 'rosa' 
                        ? 'text-white bg-[#FE2577] shadow-md shadow-[#FE2577]/30' 
                        : cat.color === 'celeste' 
                          ? 'text-white bg-celeste shadow-md shadow-celeste/30' 
                          : 'text-white bg-[#00B65A] shadow-md shadow-[#00B65A]/30'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat.title}
                </button>
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
                <div className="flex flex-col space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        toggleCategory(cat.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`font-medium text-left px-4 py-3 rounded-lg transition-all ${
                        activeCategory === cat.id 
                          ? cat.color === 'rosa' 
                            ? 'text-white bg-[#FE2577]' 
                            : cat.color === 'celeste' 
                              ? 'text-white bg-celeste' 
                              : 'text-white bg-[#00B65A]'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
        {/* Elementos flotantes animados */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-20 left-10 w-40 h-40 bg-[#FE2577]/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [360, 0, 360] }}
          transition={{ repeat: Infinity, duration: 10, delay: 1 }}
          className="absolute bottom-20 right-10 w-60 h-60 bg-[#00B65A]/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ x: [-50, 50, -50], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-celeste/10 rounded-full blur-xl"
        />

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Grid de 3 LOGOS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-5xl mx-auto">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5
                  }}
                  className="relative group flex flex-col items-center mb-12 md:mb-0"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      toggleCategory(category.id);
                    }
                  }}
                >
                  {/* Contenedor del logo */}
                  <div className="relative w-full flex flex-col items-center">
                    {/* Logo grande */}
                    <div className={`w-36 h-36 md:w-48 md:h-48 mx-auto rounded-3xl flex items-center justify-center transition-all duration-300 border-2 border-gray-300 overflow-hidden ${
                      activeCategory === category.id 
                        ? category.color === 'rosa' 
                          ? 'bg-gradient-to-br from-[#FE2577]/20 to-[#FE2577]/5 shadow-2xl shadow-[#FE2577]/30 border-[#FE2577]/30' 
                          : category.color === 'celeste'
                            ? 'bg-gradient-to-br from-celeste/20 to-celeste/5 shadow-2xl shadow-celeste/30 border-celeste/30'
                            : 'bg-gradient-to-br from-[#00B65A]/20 to-[#00B65A]/5 shadow-2xl shadow-[#00B65A]/30 border-[#00B65A]/30'
                        : 'bg-white/80 shadow-lg backdrop-blur-sm hover:shadow-xl hover:scale-[1.02] transition-all'
                    }`}>
                      <motion.img
                        animate={activeCategory === category.id ? { 
                          scale: [1, 1.08, 1]
                        } : {}}
                        transition={{ duration: 0.5 }}
                        src={category.logo}
                        alt={category.title}
                        className="w-full h-full object-contain p-6"
                      />
                    </div>
                  </div>

                  {/* Información que aparece al hacer hover/tap - SOLUCIÓN SIMPLE */}
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
                        className="relative md:absolute md:top-full left-0 right-0 mt-4 z-40 px-2 w-full"
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.4 }}
                          className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200"
                        >
                          {/* Contenido de opciones */}
                          <div className="mb-4">
                            {category.content}
                          </div>
                          
                          {/* Botón Más información - CON MÁRGEN ADECUADO */}
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`w-full py-3 rounded-xl font-medium text-base ${
                              category.color === 'rosa' 
                                ? 'bg-[#FE2577] text-white hover:bg-[#FE2577]/90 shadow-lg shadow-[#FE2577]/30' 
                                : category.color === 'celeste' 
                                  ? 'bg-celeste text-white hover:bg-celeste/90 shadow-lg shadow-celeste/30' 
                                  : 'bg-[#00B65A] text-white hover:bg-[#00B65A]/90 shadow-lg shadow-[#00B65A]/30'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            Más información
                          </motion.button>

                          {/* Botón Cerrar en móvil - CON MÁRGEN */}
                          <button
                            className="mt-3 w-full py-2 rounded-lg font-medium text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 md:hidden border border-gray-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCategory(null);
                            }}
                          >
                            Cerrar
                          </button>
                        </motion.div>
                        
                        {/* Flecha decorativa */}
                        <div className="hidden md:block w-4 h-4 bg-white transform rotate-45 absolute -top-2 left-1/2 -translate-x-1/2 border-l border-t border-gray-200"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Centro Empresariales - Todos los derechos reservados
          </p>
        </div>
      </footer>

      {/* Estilos CSS para los colores */}
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
      `}</style>
    </div>
  );
}

export default App;