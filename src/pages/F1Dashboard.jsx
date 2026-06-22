import React from 'react';
import { Link } from 'react-router-dom';
import dashboardImg from '../assets/PowerBi_Dashboard.png';

function F1Dashboard() {
  return (
    <div className="flex flex-col items-center flex-grow py-16 px-4 w-full">
      <div className="max-w-6xl w-full">
        <Link to="/proyectos" className="text-gray-300 hover:text-white mb-6 inline-block transition-colors font-semibold">
          &larr; Volver a Proyectos
        </Link>
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Análisis Estratégico y de Rendimiento: "La anatomía del Overcut vs. Undercut" (Enfoque SQL + Power BI)
        </h2>
        <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-4xl text-justify">
            Desarrollo de un dashboard interactivo de inteligencia de carreras enfocado en optimizar las estrategias de paradas en boxes (Pit Stops). A través de la extracción de datos y modelado, se analizó la eficiencia por escudería y la evolución histórica de tiempos para identificar ventajas competitivas críticas en los circuitos.
        </p>

        {/* Contenedor del Dashboard */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-8 shadow-2xl min-h-[600px] flex items-center justify-center flex-col relative overflow-hidden">
          {/* Placeholder para Power BI / Iframe */}
          <div className="text-center z-10 w-full">
            <h3 className="text-2xl font-semibold text-white mb-4">La anatomía del Overcut vs. Undercut</h3>
            <p className="text-gray-400 mb-6"></p>
            
            <div className="w-full rounded-xl flex items-center justify-center transition-transform hover:scale-[1.01] duration-500">
             <img src={dashboardImg} alt="Dashboard F1 Power BI" className="w-full h-auto object-contain rounded-xl shadow-2xl border border-white/20" />
            </div>
          </div>
          
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

export default F1Dashboard;
