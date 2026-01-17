import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-morado px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          TU FUTURO<br />
          <span className="bg-gradient-to-r from-verde via-celeste to-morado bg-clip-text text-transparent">
            COMIENZA AQUÍ
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-300 mb-8"
        >
          Plataforma educativa #1
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;