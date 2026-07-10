import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import F1Dashboard from "./pages/F1Dashboard";
import SpotifyDashboard from "./pages/SpotifyDashboard";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col organic-bg text-white">
        <div className="organic-blob-3"></div>
        <div className="glass-content min-h-screen flex flex-col w-full">
          <Navbar />
          <main className="flex-grow z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/f1-dashboard" element={<F1Dashboard />} />
              <Route path="/spotify-dashboard" element={<SpotifyDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

