import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;
