import { Briefcase, Code, Mail, User } from 'lucide-react'; // Si quieres usar iconos

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-5xl font-extrabold text-red-500 bg-yellow-400">Alfredo.dev</h1>
          <div className="space-x-6 text-slate-600 font-medium">
            <a href="#proyectos" className="hover:text-indigo-600">Proyectos</a>
            <a href="#sobre-mi" className="hover:text-indigo-600">Sobre mí</a>
            <a href="#contacto" className="hover:text-indigo-600">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-4 text-center bg-white border-b border-slate-100">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">
          Data <span className="text-indigo-600">Science</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Bienvenido a mi portafolio profesional. 
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200">
          Descargar CV
        </button>
      </header>

      {/* Grid de Proyectos */}
      <main id="proyectos" className="max-w-6xl mx-auto py-20 px-4">
        <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Proyectos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Tarjeta de ejemplo (puedes repetir esto o usar un .map) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:scale-[1.02] transition-transform">
            <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
              [Imagen del Proyecto]
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2">E-commerce App</h4>
              <p className="text-slate-600 text-sm mb-4">Una tienda online completa con carrito y pagos integrados.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded">React</span>
                <span className="px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded">Tailwind</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;