import React from 'react';
import { Link } from 'react-router-dom';

function SupermarketDashboard() {
  return (
    <div className="flex flex-col items-center flex-grow py-16 px-4 w-full">
      <div className="max-w-6xl w-full">
        <Link to="/proyectos" className="text-gray-300 hover:text-white mb-6 inline-block transition-colors font-semibold">
          &larr; Volver a Proyectos
        </Link>
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Dashboard Interactivo de Ventas y Rendimiento Comercial
        </h2>
        <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-4xl text-justify">
            Tablero analítico e interactivo desarrollado en Python (con Pandas, Plotly y Streamlit) para explorar, filtrar y visualizar el rendimiento comercial de una cadena minorista. Incluye análisis de tendencias de ventas, métricas clave (KPIs) y distribución por regiones.
        </p>

        {/* Contenedor del Dashboard */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-8 shadow-2xl min-h-[600px] flex items-center justify-center flex-col relative overflow-hidden">
          
          <div className="text-center z-10 w-full">
            <h3 className="text-2xl font-semibold text-white mb-4">Análisis de Supermercado</h3>
            <p className="text-gray-400 mb-6">Desarrollado con Python, Streamlit y Plotly</p>
            
            <div className="w-full rounded-xl flex items-center justify-center transition-transform hover:scale-[1.01] duration-500 bg-gray-800/50 min-h-[400px] border border-dashed border-gray-500 p-8">
             {/* 
                NOTA: Cuando tomes una captura de pantalla de tu aplicación de Streamlit, 
                guárdala en la carpeta 'assets' y reemplaza este div con una etiqueta <img> 
                así como lo hiciste en F1Dashboard.
             */}
             <div className="flex flex-col items-center justify-center space-y-4">
               <span className="text-5xl">📊</span>
               <span className="text-gray-400 text-lg sm:text-xl font-medium">
                 Aquí puedes colocar la captura de pantalla de tu Dashboard
               </span>
             </div>
            </div>
          </div>
          
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

export default SupermarketDashboard;
