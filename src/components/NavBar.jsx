import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white" }}>Inicio</Link>
      <Link to="/proyectos" style={{ margin: "0 10px", color: "white" }}>Proyectos</Link>
      <Link to="/contacto" style={{ margin: "0 10px", color: "white" }}>Contacto</Link>
    </nav>
  );
}

export default Navbar;
