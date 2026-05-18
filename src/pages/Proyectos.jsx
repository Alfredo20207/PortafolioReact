import { FaGithub, FaReact, FaPython, FaDatabase } from "react-icons/fa";

function Proyectos() {
  const lista = [
    { 
      nombre: "Contador en React", 
      descripcion: "Aplicación interactiva desarrollada para practicar el manejo de estado (useState) y la creación de componentes en React.",
      link: "https://github.com/Alfredo20207/ContadorReact",
      iconos: [<FaReact key="react" className="text-blue-400 text-2xl" title="React" />]
    },
    { 
      nombre: "Proyecto Python + SQL", 
      descripcion: "Análisis y gestión de datos automatizado. Conecta un script de Python con una base de datos relacional para procesar información eficientemente.",
      link: "https://github.com/Alfredo20207/ProyectoSQL",
      iconos: [
        <FaPython key="py" className="text-blue-500 text-2xl" title="Python" />, 
        <FaDatabase key="db" className="text-green-400 text-2xl" title="SQL" />
      ]
    },
  ];

  return (
    <div className="flex flex-col items-center flex-grow py-16 px-4 w-full">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">Mis Proyectos 📂</h2>
      
      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {lista.map((p, i) => (
          <div 
            key={i} 
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl flex flex-col justify-between hover:bg-white/20 hover:-translate-y-2 transition-all duration-300"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">{p.nombre}</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                {p.descripcion}
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
              {/* Iconos de tecnologías */}
              <div className="flex space-x-3">
                {p.iconos}
              </div>
              
              {/* Botón de GitHub */}
              <a 
                href={p.link} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center space-x-2 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-[1.03] transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                <span>Ver Código</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
