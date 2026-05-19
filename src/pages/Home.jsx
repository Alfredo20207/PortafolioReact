import { FaReact, FaPython, FaDatabase, FaGitAlt, FaBitbucket } from "react-icons/fa";
import { 
  SiJavascript, 
  SiR,    
  SiPowerbi,
  SiMongodb,
  SiRailway
} from "react-icons/si";
import perfil from "../assets/perfil.jpeg";


function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow py-16">
      {/* Imagen de perfil */}
      <img 
        src={perfil} 
        alt="Foto de Alfredo" 
        className="w-32 h-32 rounded-full shadow-2xl border-4 border-white hover:scale-110 hover:rotate-6 transition-transform duration-500 cursor-pointer object-cover" 
      />

      {/* Texto de presentación */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">¡Hola! Soy Alfredo 👋</h1>
      <p className="text-base sm:text-lg max-w-xl text-center mb-6">
        Analista de datos en formación apasionado por Power BI, SQL, NoSQL, Python, R, Excel, Estadística y Matemáticas.
      </p>

      {/* Íconos de tecnologías animadas */}
      <div className="flex flex-wrap justify-center gap-6 text-4xl sm:text-5xl mb-10">
        {[
          { Icon: FaReact, color: "text-blue-400", title: "React", shadow: "hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" },
          { Icon: SiR, color: "text-sky-400", title: "R", shadow: "hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]" },
          { Icon: FaDatabase, color: "text-green-400", title: "Bases de Datos", shadow: "hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]" },
          { Icon: SiMongodb, color: "text-green-400", title: "MongoDB", shadow: "hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]" },
          { Icon: SiRailway, color: "text-white", title: "Railway", shadow: "hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" },
          { Icon: SiJavascript, color: "text-yellow-300", title: "JavaScript", shadow: "hover:drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]" },
          { Icon: FaGitAlt, color: "text-orange-500", title: "Git", shadow: "hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]" },
          { Icon: FaBitbucket, color: "text-blue-400", title: "Bitbucket", shadow: "hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" },
          { Icon: FaPython, color: "text-blue-500", title: "Python", shadow: "hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" },
          { Icon: SiPowerbi, color: "text-yellow-400", title: "Power BI", shadow: "hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]" }
        ].map(({ Icon, color, title, shadow }, index) => (
          <div key={index} title={title} className={`transition-all duration-300 hover:scale-125 hover:-translate-y-3 cursor-pointer ${shadow}`}>
            <Icon className={color} />
          </div>
        ))}
      </div>

      {/* Botón de proyectos */}
      <a
        href="/proyectos"
        className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg shadow-xl hover:bg-yellow-500 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
      >
        Ver mis proyectos 🚀
      </a>
    </div>
  );
}

export default Home;
