import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navbar Super Simple */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-morado">
              CINF
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-morado">Inicio</Link>
              <Link to="/ingles" className="text-gray-700 hover:text-verde">Inglés</Link>
              <Link to="/computacion" className="text-gray-700 hover:text-celeste">Computación</Link>
              <Link to="/emprendimiento" className="text-gray-700 hover:text-morado">Emprendimiento</Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Simple */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-2">
            <Link to="/" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
            <Link to="/ingles" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Inglés</Link>
            <Link to="/computacion" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Computación</Link>
            <Link to="/emprendimiento" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Emprendimiento</Link>
          </div>
        )}
      </nav>

      {/* Contenido */}
      <main className="pt-14">
        {children}
      </main>

      {/* Footer Mínimo */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 CINF - Prueba piloto</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;