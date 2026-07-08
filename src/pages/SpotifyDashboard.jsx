import React from 'react';
import { Link } from 'react-router-dom';

function SpotifyDashboard() {
  return (
    <div className="flex flex-col items-center flex-grow py-16 px-4 w-full">
      <div className="max-w-6xl w-full">
        <Link to="/proyectos" className="text-gray-300 hover:text-white mb-6 inline-block transition-colors font-semibold">
          &larr; Volver a Proyectos
        </Link>
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
          Spotify Data Analytics Dashboard
        </h2>
        <p className="text-xl text-gray-200 mb-6 leading-relaxed max-w-4xl text-justify">
            El objetivo central de este tablero es transformar datos brutos de la industria musical en insights estratégicos e interactivos. En lugar de leer una tabla plana de Excel, el usuario puede entender de un vistazo el comportamiento, el rendimiento y las características de las canciones dentro de la plataforma de streaming más grande del mundo.
        </p>
        <div className="text-lg text-gray-300 mb-10 max-w-4xl">
          <p className="mb-4 font-semibold text-white">El dashboard está diseñado para representar tres pilares analíticos principales:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>El Éxito Cuantitativo <span className="text-gray-400">(Análisis de Popularidad)</span></li>
            <li>Anatomía de la Canción <span className="text-gray-400">(Métricas de Duración)</span></li>
            <li>Calidad y Consistencia de los Datos</li>
          </ol>
        </div>

        {/* Contenedor del Dashboard interactivo */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 sm:p-4 shadow-2xl min-h-[600px] flex items-center justify-center flex-col relative overflow-hidden">
          <div className="z-10 w-full h-[700px]">
            <iframe 
              src="https://alfredo20207.github.io/Dashboard-Spotify/" 
              title="Spotify Dashboard Interactivo"
              className="w-full h-full rounded-xl border-none shadow-2xl bg-[#020617]"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

export default SpotifyDashboard;
