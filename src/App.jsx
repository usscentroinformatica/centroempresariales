import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiExternalLink, FiFileText, FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Importa las imágenes
import CEP from './assets/CEP.png';
import CI from './assets/CI.png';
import CIS from './assets/CIS.png';
import LogoCentro from './assets/logo_centro_empresariales.png';
import Logo8 from './assets/EMPRENDE_TECH.png';
import Logo7 from './assets/7.png';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [generalidadesOpen, setGeneralidadesOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Datos para los documentos PDF
  const documentos = [
    {
      id: 1,
      titulo: 'Manual del Participante',
      descripcion: 'Guía completa para participantes del programa',
      url: '/documentos/manual-participante.pdf'
    },
    {
      id: 2,
      titulo: 'Reglamento Interno',
      descripcion: 'Normas y reglas del centro empresarial',
      url: '/documentos/reglamento-interno.pdf'
    },
    {
      id: 3,
      titulo: 'Cronograma de Actividades',
      descripcion: 'Calendario de eventos y talleres',
      url: '/documentos/cronograma-actividades.pdf'
    },
    {
      id: 4,
      titulo: 'Formatos de Inscripción',
      descripcion: 'Documentos para registro de participantes',
      url: '/documentos/formatos-inscripcion.pdf'
    },
    {
      id: 5,
      titulo: 'Guía de Buenas Prácticas',
      descripcion: 'Recomendaciones para el éxito en el programa',
      url: '/documentos/guias-buenas-practicas.pdf'
    },
    {
      id: 6,
      titulo: 'Información General del Programa',
      descripcion: 'Detalles sobre objetivos y metodología',
      url: '/documentos/informacion-programa.pdf'
    }
  ];

  // Función para abrir PDF
  const abrirPDF = (url, titulo) => {
    setSelectedDocument({ url, titulo });
    // En un entorno real, aquí podrías:
    // 1. Abrir el PDF en una nueva pestaña
    window.open(url, '_blank');
    
    // 2. O mostrar un visor de PDF integrado
    // setMostrarVisorPDF(true);
    
    // 3. O descargar el archivo
    // const link = document.createElement('a');
    // link.href = url;
    // link.download = titulo + '.pdf';
    // link.click();
  };

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

  const emprendeTech = {
    id: 'emprende-tech',
    title: 'Emprende Tech',
    color: 'azul',
    logo: Logo7,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-[#3A86FF]/10 rounded-xl border border-[#3A86FF]/20">
          <div className="space-y-3 text-sm text-gray-700">
            <p className="leading-relaxed">
              En esta aula virtual podrás ir subiendo las actividades de acuerdo con las distintas etapas de desarrollo del Challenge – 1G.
            </p>
            <p className="leading-relaxed">
              Una vez que el tutor se registre, se le asignará un usuario y contraseña, y será el responsable de subir las evidencias en las fechas establecidas según nuestro cronograma.
            </p>
            <p className="leading-relaxed font-medium">
              Sé parte de Emprende Tech USS: domina la tecnología, comunica en inglés y emprende con impacto 🚀
            </p>
            <div className="mt-4 pt-3 border-t border-gray-300/50">
              <a 
                href="https://ulearning.com.pe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#3A86FF] text-white rounded-lg hover:bg-[#3A86FF]/90 transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Visitar LINK: https://ulearning.com.pe/</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  };

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const handleFormularioClick = () => {
    alert('Abrir formulario de contacto');
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-50 to-white min-h-screen">
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
              className="h-24 md:h-32 flex items-center"
            >
              <img 
                src={LogoCentro} 
                alt="Centros Empresariales" 
                className="h-full w-auto object-contain max-w-[300px] md:max-w-[400px] hover:scale-110 transition-transform duration-300"
              />
            </motion.div>

            <div className="hidden md:flex space-x-4 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFormularioClick}
                className="font-medium px-5 py-2.5 rounded-lg text-white bg-[#012c65] hover:bg-[#012c65]/90 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Formulario
              </motion.button>

              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleCategory(cat.id)}
                  className={`font-medium px-5 py-2.5 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300 ${
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
                      handleFormularioClick();
                      setMobileMenuOpen(false);
                    }}
                    className="font-medium text-center px-4 py-3.5 rounded-lg text-white bg-[#012c65] hover:bg-[#012c65]/90 transition-all shadow-md"
                  >
                    Formulario
                  </motion.button>

                  {categories.map((cat) => (
                    <motion.button
                      key={cat.id}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        toggleCategory(cat.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`font-medium text-center px-4 py-3.5 rounded-lg text-white transition-all shadow-md ${
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Botón Generalidades - Posición fija en esquina inferior izquierda */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          {/* Botón principal */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setGeneralidadesOpen(!generalidadesOpen)}
            className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#012c65] to-[#1e4a8a] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            <FiFileText className="w-5 h-5" />
            <span>Generalidades</span>
            {generalidadesOpen ? (
              <FiChevronUp className="w-4 h-4" />
            ) : (
              <FiChevronDown className="w-4 h-4" />
            )}
          </motion.button>

          {/* Menú desplegable */}
          <AnimatePresence>
            {generalidadesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ type: "spring", damping: 25 }}
                className="absolute bottom-full left-0 mb-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
              >
                <div className="p-3 bg-gradient-to-r from-[#012c65] to-[#1e4a8a]">
                  <h3 className="text-white font-semibold text-sm">Documentos Disponibles</h3>
                  <p className="text-white/80 text-xs mt-1">Haz clic para abrir o descargar</p>
                </div>
                
                <div className="max-h-80 overflow-y-auto">
                  {documentos.map((doc) => (
                    <motion.button
                      key={doc.id}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => abrirPDF(doc.url, doc.titulo)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <FiFileText className="w-4 h-4 text-[#012c65]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 text-sm group-hover:text-[#012c65] transition-colors">
                            {doc.titulo}
                          </h4>
                          <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                            {doc.descripcion}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="p-3 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-500 text-xs text-center">
                    Total: {documentos.length} documentos
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Visor de PDF (opcional - puedes implementarlo después) */}
      <AnimatePresence>
        {selectedDocument && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDocument(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 bg-gradient-to-r from-[#012c65] to-[#1e4a8a] text-white flex justify-between items-center">
                <h3 className="font-semibold">{selectedDocument.titulo}</h3>
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className="p-4 h-[70vh]">
                <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50">
                  <FiFileText className="w-16 h-16 text-gray-400 mb-4" />
                  <p className="text-gray-600 font-medium">Vista previa del PDF</p>
                  <p className="text-gray-500 text-sm mt-2">{selectedDocument.titulo}</p>
                  <div className="mt-6 flex gap-3">
                    <a
                      href={selectedDocument.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#012c65] text-white rounded-lg hover:bg-[#012c65]/90 transition-colors"
                    >
                      Abrir en nueva pestaña
                    </a>
                    <button
                      onClick={() => {
                        // Simular descarga
                        const link = document.createElement('a');
                        link.href = selectedDocument.url;
                        link.download = selectedDocument.titulo + '.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="px-4 py-2 border border-[#012c65] text-[#012c65] rounded-lg hover:bg-[#012c65]/10 transition-colors"
                    >
                      Descargar PDF
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
      <main className="flex-grow pt-36 md:pt-44">
        {/* Sección del Logo Emprende Tech - GRANDE Y DESTACADO */}
        <section className="pt-6 md:pt-8 pb-0 bg-gradient-to-r from-gray-50/50 to-white/50 overflow-visible">
          <div className="container mx-auto px-4 overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center overflow-visible"
            >
              <img 
                src={Logo8} 
                alt="Logo principal" 
                className="w-full max-w-3xl h-auto max-h-48 md:max-h-[350px] object-contain mx-auto mb-2 md:mb-4"
              />
            </motion.div>
          </div>
        </section>

        {/* Sección de Cursos */}
        <section className="pt-2 md:pt-4 pb-32 md:pb-48 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="container mx-auto">

              {/* Grid de 4 LOGOS - 3 cursos + Emprende Tech */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">
                {/* Cursos principales - 3 columnas */}
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
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
                    {/* Contenedor del logo */}
                    <div className="relative w-full flex flex-col items-center">
                      <div className={`w-40 h-40 md:w-48 md:h-48 mx-auto rounded-3xl flex items-center justify-center transition-all duration-300 border-2 border-gray-300 overflow-hidden ${
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
                          className="w-full h-full object-contain p-6"
                        />
                      </div>
                    </div>

                    {/* Información que aparece al hacer hover/tap */}
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
                          className="relative left-0 right-0 mt-6 z-40 px-2 w-full"
                        >
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-200"
                          >
                            <div className="mb-5">
                              {category.content}
                            </div>

                            <button
                              className="mt-4 w-full py-2.5 rounded-lg font-medium text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 md:hidden border border-gray-300"
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

                {/* Emprende Tech - Columna especial a la derecha */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
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
                  {/* Contenedor del logo */}
                  <div className="relative w-full flex flex-col items-center">
                    <div className={`w-40 h-40 md:w-48 md:h-48 mx-auto rounded-3xl flex items-center justify-center transition-all duration-300 border-2 border-gray-300 overflow-hidden ${
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
                        className="w-full h-full object-contain p-6"
                      />
                    </div>
                  </div>

                  {/* Información que aparece al hacer hover/tap */}
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
                        className="relative left-0 right-0 mt-6 z-40 px-2 w-full"
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.4 }}
                          className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-200"
                        >
                          <div className="mb-5">
                            {emprendeTech.content}
                          </div>

                          <button
                            className="mt-4 w-full py-2.5 rounded-lg font-medium text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 md:hidden border border-gray-300"
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
      </main>
      
      {/* Footer - Siempre al fondo */}
      <footer className="bg-gray-900 text-white py-6 w-full mt-auto flex-shrink-0">
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;
