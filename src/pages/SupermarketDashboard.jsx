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
        <div className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed max-w-5xl text-justify space-y-4">
            <p>
              Este proyecto es una aplicación web analítica desarrollada íntegramente en Python utilizando <span className="font-semibold text-green-400">Streamlit, Pandas y Plotly</span>. Su objetivo principal es transformar datos transaccionales crudos de una cadena minorista en información estratégica para la toma de decisiones.
            </p>
            <p>
              A través de este dashboard interactivo, es posible:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-6 text-gray-300">
              <li><strong className="text-white">Filtrar dinámicamente</strong> los datos por Región, Categoría y Segmento de cliente.</li>
              <li><strong className="text-white">Monitorear KPIs cruciales</strong> como las Ventas Totales, el Ticket Promedio y el número de Clientes Únicos.</li>
              <li><strong className="text-white">Analizar tendencias mensuales</strong> mediante gráficos de líneas y descubrir la distribución de ventas por subcategorías.</li>
              <li><strong className="text-white">Identificar oportunidades</strong> a través del ranking interactivo de los 10 productos más vendidos.</li>
            </ul>
        </div>

        {/* Contenedor del Dashboard */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-8 shadow-2xl min-h-[600px] flex items-center justify-center flex-col relative overflow-hidden">
          
          <div className="text-center z-10 w-full">
            <h3 className="text-2xl font-semibold text-white mb-4">Análisis de Supermercado</h3>
            <p className="text-gray-400 mb-6">Desarrollado con Python, Streamlit y Plotly</p>
            
            <div className="w-full h-[600px] sm:h-[800px] rounded-xl overflow-hidden shadow-2xl border border-white/20 transition-transform hover:scale-[1.01] duration-500">
              
              <iframe 
                src="https://supermarket-sales-dashboard-01ij.onrender.com/" 
                title="Supermarket Dashboard"
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="w-full h-full bg-white"
                allowFullScreen
              ></iframe>
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
