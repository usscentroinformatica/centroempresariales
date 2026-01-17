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
      color: 'verde',
      logo: CI,
      description: 'Domina el idioma global',
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-verde/10 rounded-xl border border-verde/20">
            <h4 className="font-bold text-verde mb-3 text-lg">Opciones disponibles:</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-2 text-sm">
                ✅ Opción1
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-2 text-sm">
                ✅ Opción2
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-2 text-sm">
                ✅ Opción3
              </motion.li>
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
      description: 'Tecnologías del futuro',
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-celeste/10 rounded-xl border border-celeste/20">
            <h4 className="font-bold text-celeste mb-3 text-lg">Opciones disponibles:</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-2 text-sm">
                ✅ Opción1
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-2 text-sm">
                ✅ Opción2
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-2 text-sm">
                ✅ Opción3
              </motion.li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'emprendimiento',
      title: 'Emprendimiento',
      color: 'morado',
      logo: CEP,
      description: 'Convierte ideas en negocios',
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-morado/10 rounded-xl border border-morado/20">
            <h4 className="font-bold text-morado mb-3 text-lg">Opciones disponibles:</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-2 text-sm">
                ✅ Opción1
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-2 text-sm">
                ✅ Opción2
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-2 text-sm">
                ✅ Opción3
              </motion.li>
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
      {/* Navbar Animada - LOGO MÁS GRANDE */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-20 flex items-center"
            >
              <img 
                src={LogoCentro} 
                alt="Centros Empresariales" 
                className="h-full w-auto object-contain max-w-[220px] hover:scale-110 transition-transform duration-300"
              />
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`font-medium hover:scale-105 transition-transform px-4 py-2 rounded-lg ${
                    activeCategory === cat.id 
                      ? cat.color === 'verde' 
                        ? 'text-verde bg-verde/10' 
                        : cat.color === 'celeste' 
                          ? 'text-celeste bg-celeste/10' 
                          : 'text-morado bg-morado/10'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24">
        {/* Elementos flotantes animados */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-20 left-10 w-40 h-40 bg-verde/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [360, 0, 360] }}
          transition={{ repeat: Infinity, duration: 10, delay: 1 }}
          className="absolute bottom-20 right-10 w-60 h-60 bg-morado/10 rounded-full blur-2xl"
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


            {/* Grid de 3 LOGOS - SIN TÍTULOS SUPERIORES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
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
                  className="relative group flex flex-col items-center"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Contenedor del logo */}
                  <div className="relative w-full flex flex-col items-center">
                    {/* Logo grande */}
                    <div className={`w-44 h-44 md:w-48 md:h-48 mx-auto rounded-3xl flex items-center justify-center transition-all duration-300 border-2 border-gray-300 overflow-hidden ${activeCategory === category.id 
                      ? category.color === 'verde' 
                        ? 'bg-gradient-to-br from-verde/20 to-verde/5 shadow-2xl shadow-verde/30' 
                        : category.color === 'celeste'
                          ? 'bg-gradient-to-br from-celeste/20 to-celeste/5 shadow-2xl shadow-celeste/30'
                          : 'bg-gradient-to-br from-morado/20 to-morado/5 shadow-2xl shadow-morado/30'
                      : 'bg-white/80 shadow-lg backdrop-blur-sm'
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

                    {/* Título debajo del logo */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      className={`mt-5 text-2xl font-bold text-center ${category.color === 'verde' ? 'text-verde' :
                        category.color === 'celeste' ? 'text-celeste' :
                        'text-morado'
                      }`}
                    >
                      {category.title}
                    </motion.h3>

                    {/* Descripción pequeña */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      className="mt-2 text-gray-600 text-sm"
                    >
                      {category.description}
                    </motion.p>
                  </div>

                  {/* Información que aparece al hacer hover */}
                  <AnimatePresence>
                    {activeCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute top-full left-0 right-0 mt-4 z-20 px-2"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-200">
                          {category.content}
                          
                          {/* Botón de acción */}
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`mt-4 w-full py-3 rounded-xl font-medium text-base ${category.color === 'verde' ? 'bg-verde text-white hover:bg-verde/90' :
                              category.color === 'celeste' ? 'bg-celeste text-white hover:bg-celeste/90' :
                              'bg-morado text-white hover:bg-morado/90'
                            }`}
                          >
                            Más información
                          </motion.button>
                        </div>
                        
                        {/* Flecha decorativa */}
                        <div className="w-4 h-4 bg-white transform rotate-45 absolute -top-2 left-1/2 -translate-x-1/2 border-l border-t border-gray-200"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Instrucción sutil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 text-gray-500"
            >
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sección para dispositivos móviles */}
      <section className="py-16 px-4 md:hidden">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Nuestras áreas
          </h2>
          
          <div className="space-y-6">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-lg p-5"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 flex items-center justify-center">
                    <div className={`w-full h-full rounded-full flex items-center justify-center p-3 ${
                      category.color === 'verde' ? 'bg-verde/10' :
                      category.color === 'celeste' ? 'bg-celeste/10' :
                      'bg-morado/10'
                    }`}>
                      <img
                        src={category.logo}
                        alt={category.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                  <button className="ml-2 p-1">
                    {activeCategory === category.id ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </button>
                </div>
                
                <AnimatePresence>
                  {activeCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      {category.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
    </div>
  );
}

export default App;