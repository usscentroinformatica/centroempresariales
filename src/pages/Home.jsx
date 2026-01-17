import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section - Frase grande */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">TU FUTURO</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-verde via-celeste to-morado">
              COMIENZA AQUÍ
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Aprende Inglés, Computación y Emprendimiento
          </p>
        </div>
      </div>

      {/* Sección de Categorías - 3 Botones */}
      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Elige tu área
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Inglés */}
            <a href="/ingles" className="block group">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-verde hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Inglés</h3>
                <div className="px-6 py-3 bg-verde text-white font-semibold rounded-full inline-block">
                  Ver más
                </div>
              </div>
            </a>

            {/* Computación */}
            <a href="/computacion" className="block group">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-celeste hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Computación</h3>
                <div className="px-6 py-3 bg-celeste text-white font-semibold rounded-full inline-block">
                  Ver más
                </div>
              </div>
            </a>

            {/* Emprendimiento */}
            <a href="/emprendimiento" className="block group">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-morado hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Emprendimiento</h3>
                <div className="px-6 py-3 bg-morado text-white font-semibold rounded-full inline-block">
                  Ver más
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;