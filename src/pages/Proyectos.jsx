import { FaGithub, FaReact, FaChartBar } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiPython, SiMysql, SiPowerbi, SiMicrosoftexcel } from "react-icons/si";
import { Link } from "react-router-dom";
function Proyectos() {
  const lista = [
    {
      nombre: "Portafolio personal",
      descripcion: "Pagina web interactiva desarrollada en React, y publicada en GitHub Pages.",
      link: "https://github.com/Alfredo20207/PortafolioReact",
      iconos: [
        <FaReact key="react" className="text-blue-400 text-2xl" title="React" />,
        <FaGithub key="github" className="text-gray-400 text-2xl" title="GitHub" />,
        <SiJavascript key="js" className="text-yellow-400 text-2xl" title="JavaScript" />,
        <SiTailwindcss key="css" className="text-blue-400 text-2xl" title="Tailwind CSS" />
      ],
    },
    {
      nombre: "Análisis Estratégico y de Rendimiento: La anatomía del Overcut vs. Undercut (Enfoque SQL + Power BI)",
      descripcion: "En la F1, las carreras se ganan o pierden por décimas de segundo en los boxes. El objetivo de este proyecto fue analizar el rendimiento estratégico de las paradas en boxes para responder: ¿Cuáles escuderías son más consistentes y cómo impacta cada circuito en sus tiempos de respuesta?",
      link: "https://github.com/Alfredo20207/Telemetry-F1.git",
      dashboardLink: "/f1-dashboard",
      iconos: [
        <SiPython key="python" className="text-blue-500 text-2xl" title="Python" />,
        <SiMysql key="mysql" className="text-blue-600 text-2xl" title="MySQL" />,
        <SiPowerbi key="powerbi" className="text-yellow-500 text-2xl" title="Power BI" />,
        <SiMicrosoftexcel key="excel" className="text-green-600 text-2xl" title="Excel" />,
        <FaGithub key="github2" className="text-gray-400 text-2xl" title="GitHub" />
      ],
    }
  ];

  return (
    <div className="flex flex-col items-center flex-grow py-16 px-4 w-full">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">Mis Proyectos 📂</h2>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {lista.map((p, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl flex flex-col justify-between hover:bg-white/20 hover:-translate-y-2 transition-all duration-300">
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

              {/* Botones */}
              <div className="flex gap-2 justify-end flex-wrap">
                {p.dashboardLink && (
                  <Link
                    to={p.dashboardLink}
                    className="flex items-center space-x-2 bg-blue-500 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-[1.03] transition-all duration-300">
                    <FaChartBar className="text-xl" />
                    <span className="hidden sm:inline">Dashboard</span>
                  </Link>
                )}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 bg-yellow-400 text-black font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-[1.03] transition-all duration-300">
                  <FaGithub className="text-xl" />
                  <span className="hidden sm:inline">Código</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
