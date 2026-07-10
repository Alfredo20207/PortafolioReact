import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-800/50 backdrop-blur-md border-t border-white/10 text-white py-6 mt-10 w-full">
      {/* Contenedor flexible */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 text-2xl">
        <a href="https://github.com/Alfredo20207" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-yellow-400" />
        </a>
        <a href="https://www.linkedin.com/in/alfredo-resendiz-ing" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-yellow-400" />
        </a>
        
      </div>

      {/* Texto responsivo */}
      <p className="text-center mt-4 text-gray-400 text-sm">
        © 2026 Alfredo - Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
