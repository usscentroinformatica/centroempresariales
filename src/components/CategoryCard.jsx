import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiCheck, FiArrowRight } from 'react-icons/fi';

const CategoryCard = ({ category, title, description, features, color, icon }) => {
  const [expanded, setExpanded] = useState(false);

  const getColorClass = (type) => {
    switch (color) {
      case 'verde':
        return {
          bg: 'bg-verde',
          bgLight: 'bg-verde/10',
          text: 'text-verde',
          border: 'border-verde',
          gradient: 'from-verde to-verde-claro'
        };
      case 'celeste':
        return {
          bg: 'bg-celeste',
          bgLight: 'bg-celeste/10',
          text: 'text-celeste',
          border: 'border-celeste',
          gradient: 'from-celeste to-celeste-claro'
        };
      case 'morado':
        return {
          bg: 'bg-morado',
          bgLight: 'bg-morado/10',
          text: 'text-morado',
          border: 'border-morado',
          gradient: 'from-morado to-morado-claro'
        };
      default:
        return {
          bg: 'bg-verde',
          bgLight: 'bg-verde/10',
          text: 'text-verde',
          border: 'border-verde',
          gradient: 'from-verde to-verde-claro'
        };
    }
  };

  const colorClass = getColorClass(color);

  const courses = {
    ingles: [
      { name: 'Inglés Básico A1-A2', duration: '8 semanas' },
      { name: 'Inglés Intermedio B1-B2', duration: '12 semanas' },
      { name: 'Inglés Avanzado C1-C2', duration: '16 semanas' },
      { name: 'Preparación TOEFL/IELTS', duration: '10 semanas' },
    ],
    computacion: [
      { name: 'Programación Web FullStack', duration: '20 semanas' },
      { name: 'Inteligencia Artificial', duration: '16 semanas' },
      { name: 'Diseño UI/UX', duration: '12 semanas' },
      { name: 'Ciberseguridad', duration: '18 semanas' },
    ],
    emprendimiento: [
      { name: 'Plan de Negocios', duration: '6 semanas' },
      { name: 'Marketing Digital', duration: '10 semanas' },
      { name: 'Finanzas para Startups', duration: '8 semanas' },
      { name: 'Innovación Disruptiva', duration: '12 semanas' },
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col"
    >
      {/* Header con gradiente */}
      <div className={`h-2 bg-gradient-to-r ${colorClass.gradient}`}></div>
      
      <div className="p-8 flex-1 flex flex-col">
        {/* Icono y título */}
        <div className="flex items-center mb-6">
          <div className={`text-4xl mr-4 ${colorClass.text}`}>
            {icon}
          </div>
          <h3 className={`text-2xl font-bold ${colorClass.text}`}>
            {title}
          </h3>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 mb-6 flex-1">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center">
              <FiCheck className={`mr-3 ${colorClass.text}`} />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-3 mt-auto">
          <Link
            to={`/${category}`}
            className={`${colorClass.bg} text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-2`}
          >
            Ver página completa
            <FiArrowRight />
          </Link>
          
          <button
            onClick={() => setExpanded(!expanded)}
            className={`${colorClass.bgLight} ${colorClass.text} font-bold py-3 rounded-xl hover:${colorClass.bg} hover:text-white transition-all flex items-center justify-center gap-2`}
          >
            {expanded ? 'Ver menos cursos' : 'Ver cursos disponibles'}
            {expanded ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>

        {/* Cursos desplegables */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-gray-100"
            >
              <h4 className="font-bold text-gray-800 mb-4">Cursos disponibles:</h4>
              <div className="space-y-3">
                {courses[category]?.map((course, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-800">{course.name}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClass.bgLight} ${colorClass.text}`}>
                      {course.duration}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CategoryCard;