import { FaReact, FaPython, FaDatabase, FaGitAlt, FaBitbucket } from "react-icons/fa";
import { 
  SiJavascript, 
  SiR,   
  SiMicrosoftexcel 
} from "react-icons/si";
import perfil from "../assets/perfil.jpeg";


function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white flex flex-col items-center justify-center px-4">
      {/* Imagen de perfil */}
      <img 
        src={perfil} 
        alt="Foto de Alfredo" 
        className="w-32 h-32 rounded-full shadow-lg border-4 border-white" 
      />

      {/* Texto de presentación */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">¡Hola! Soy Alfredo 👋</h1>
      <p className="text-base sm:text-lg max-w-xl text-center mb-6">
        Analista de datos en formación apasionado por Power BI, SQL, NoSQL, Python, R, Excel, Estadística y Matemáticas.
      </p>

      {/* Íconos de tecnologías */}
      <div className="flex flex-wrap justify-center gap-6 text-4xl sm:text-5xl mb-10">
        
        <FaReact className="text-blue-400" title="React" />
        <SiR className="text-sky-400" title="R" />
        <SiMicrosoftexcel className="text-green-600" title="Excel" />
        <FaDatabase className="text-green-400" title="Bases de Datos" />
        <SiJavascript className="text-yellow-300" title="JavaScript" />
        <FaGitAlt className="text-orange-500" title="Git" />
        <FaPython className="text-blue-500" title="Python" />
        <FaBitbucket className="text-blue-400" title="Bitbucket" />
      </div>

      {/* Botón de proyectos */}
      <a
        href="/proyectos"
        className="bg-yellow-400 text-black px-6 py-2 rounded-lg shadow hover:bg-yellow-500 transition"
      >
        Ver mis proyectos 🚀
      </a>
    </div>
  );
}

export default Home;
