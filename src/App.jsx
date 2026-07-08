import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import F1Dashboard from "./pages/F1Dashboard";
import SpotifyDashboard from "./pages/SpotifyDashboard";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white">
        <Navbar />
        <main className="flex-grow">
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
    </HashRouter>
  );
}

export default App;

