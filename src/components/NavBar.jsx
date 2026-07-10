import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-800/50 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">Ing. Alfredo Resendiz</h1>

          {/* Botón hamburguesa (móvil) */}
          <div className="sm:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>

          {/* Links en escritorio */}
          <div className="hidden sm:flex space-x-6">
            <Link to="/" className="hover:text-yellow-400">Inicio</Link>
            <Link to="/proyectos" className="hover:text-yellow-400">Proyectos</Link>
            <Link to="/contacto" className="hover:text-yellow-400">Contacto</Link>
          </div>
        </div>
      </div>

      {/* Links en móvil */}
      {open && (
        <div className="sm:hidden px-4 pb-3 space-y-2 bg-slate-800/80 backdrop-blur-md border-b border-white/10">
          <Link to="/" className="block hover:text-yellow-400">Inicio</Link>
          <Link to="/proyectos" className="block hover:text-yellow-400">Proyectos</Link>
          <Link to="/contacto" className="block hover:text-yellow-400">Contacto</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
