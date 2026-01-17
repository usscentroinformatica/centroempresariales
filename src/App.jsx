import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    {
      id: 'ingles',
      title: 'Inglés',
      color: 'verde',
      icon: '🌐',
      description: 'Domina el idioma global',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-verde/10 rounded-xl">
            <h4 className="font-bold text-verde mb-2">Cursos disponibles:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">✅ Opción1</li>
              <li className="flex items-center gap-2">✅ Opción2</li>
              <li className="flex items-center gap-2">✅ Opción3</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'computacion',
      title: 'Computación',
      color: 'celeste',
      icon: '💻',
      description: 'Tecnologías del futuro',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-celeste/10 rounded-xl">
            <h4 className="font-bold text-celeste mb-2">Cursos disponibles:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">✅ Opción1</li>
              <li className="flex items-center gap-2">✅ Opción2</li>
              <li className="flex items-center gap-2">✅ Opción3</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'emprendimiento',
      title: 'Emprendimiento',
      color: 'morado',
      icon: '🚀',
      description: 'Convierte ideas en negocios',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-morado/10 rounded-xl">
            <h4 className="font-bold text-morado mb-2">Cursos disponibles:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">✅ Opción1</li>
              <li className="flex items-center gap-2">✅ Opción2</li>
              <li className="flex items-center gap-2">✅ Opción3</li>
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
      {/* Navbar Animada */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-morado to-celeste bg-clip-text text-transparent"
            >
              CINF
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`font-medium hover:scale-105 transition-transform ${
                    activeCategory === cat.id 
                      ? cat.color === 'verde' ? 'text-verde' : 
                        cat.color === 'celeste' ? 'text-celeste' : 'text-morado'
                      : 'text-gray-700'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section con Animaciones */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16">
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

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Frase Principal con efecto máquina de escribir */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block text-gray-800">TU FUTURO</span>
              <span className="bg-gradient-to-r from-verde via-celeste to-morado bg-clip-text text-transparent">
                COMIENZA AQUÍ
              </span>
            </motion.h1>

            {/* Subtítulo con animación de aparición */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 mb-12"
            >
              Domina <span className="text-verde font-bold">Inglés</span>,{' '}
              <span className="text-celeste font-bold">Computación</span> y{' '}
              <span className="text-morado font-bold">Emprendimiento</span>
            </motion.p>

            {/* Flecha animada indicando scroll */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-20"
            >
              <div className="text-gray-400">Explora nuestras áreas</div>
              <div className="text-2xl mt-2 text-gray-300">↓</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Categorías con Animaciones */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Descubre nuestras{' '}
            <span className="bg-gradient-to-r from-verde to-celeste bg-clip-text text-transparent">
              áreas de aprendizaje
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                {/* Card Principal */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  {/* Barra superior con gradiente */}
                  <div className={`h-2 ${
                    category.color === 'verde' ? 'bg-gradient-to-r from-verde to-verde/80' :
                    category.color === 'celeste' ? 'bg-gradient-to-r from-celeste to-celeste/80' :
                    'bg-gradient-to-r from-morado to-morado/80'
                  }`}></div>
                  
                  <div className="p-8">
                    {/* Icono animado */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`text-5xl mb-6 ${
                        category.color === 'verde' ? 'text-verde' :
                        category.color === 'celeste' ? 'text-celeste' :
                        'text-morado'
                      }`}
                    >
                      {category.icon}
                    </motion.div>
                    
                    {/* Título */}
                    <h3 className={`text-2xl font-bold mb-3 ${
                      category.color === 'verde' ? 'text-verde' :
                      category.color === 'celeste' ? 'text-celeste' :
                      'text-morado'
                    }`}>
                      {category.title}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    
                    {/* Botón para expandir */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleCategory(category.id)}
                      className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                        category.color === 'verde' ? 'bg-verde/10 text-verde hover:bg-verde hover:text-white' :
                        category.color === 'celeste' ? 'bg-celeste/10 text-celeste hover:bg-celeste hover:text-white' :
                        'bg-morado/10 text-morado hover:bg-morado hover:text-white'
                      }`}
                    >
                      {activeCategory === category.id ? 'Ocultar detalles' : 'Ver detalles'}
                      {activeCategory === category.id ? <FiChevronUp /> : <FiChevronDown />}
                    </motion.button>
                    
                    {/* Contenido expandible */}
                    <AnimatePresence>
                      {activeCategory === category.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 overflow-hidden"
                        >
                          {category.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Efecto de sombra al hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{
                    background: category.color === 'verde' 
                      ? 'linear-gradient(135deg, #63ed12, transparent)' 
                      : category.color === 'celeste'
                      ? 'linear-gradient(135deg, #11acd3, transparent)'
                      : 'linear-gradient(135deg, #5a2290, transparent)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 CINF - Prueba de diseño con animaciones</p>
        </div>
      </footer>
    </div>
  );
}

export default App;