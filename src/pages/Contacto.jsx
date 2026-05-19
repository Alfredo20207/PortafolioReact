import { useState } from "react";

function Contacto() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página recargue o te mande a otra URL
    setStatus("loading");
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset(); // Limpia los campos del formulario
        // Ocultar el mensaje de éxito después de 5 segundos
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">Contáctame 📧</h2>
      
      {/* Contenedor del formulario con efecto Glassmorphism */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        
        {/* Alerta Flotante de Éxito */}
        {status === "success" && (
          <div className="absolute top-0 left-0 w-full bg-green-500 border-b border-green-600 text-white px-4 py-3 text-center text-sm font-bold z-10 transition-all shadow-md">
            ¡Tu mensaje ha sido enviado correctamente! 🎉
          </div>
        )}

        {/* Alerta Flotante de Error */}
        {status === "error" && (
          <div className="absolute top-0 left-0 w-full bg-red-500 border-b border-red-600 text-white px-4 py-3 text-center text-sm font-bold z-10 transition-all shadow-md">
            Ocurrió un error al enviar el mensaje.
          </div>
        )}

        <form 
          action="https://formspree.io/f/mzdwzzzq" 
          method="POST"
          className={`flex flex-col space-y-6 ${status !== "" && status !== "loading" ? "mt-6" : ""}`}
          onSubmit={handleSubmit}
        >
          
          {/* Campo Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Nombre
            </label>
            <input 
              type="text" 
              id="name" 
              name="name"
              placeholder="Tu nombre" 
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300 transition"
              required
            />
          </div>
          
          {/* Campo Correo */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Correo Electrónico
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="tu@correo.com" 
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300 transition"
              required
            />
          </div>
          
          {/* Campo Mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
              Mensaje
            </label>
            <textarea 
              id="message" 
              name="message"
              rows="4" 
              placeholder="¿En qué te puedo ayudar?" 
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300 resize-none transition"
              required
            ></textarea>
          </div>
          
          {/* Botón de Enviar */}
          <button 
            type="submit" 
            disabled={status === "loading"}
            className={`w-full bg-yellow-400 text-black font-bold py-3 rounded-lg shadow-lg transition-all duration-300 
              ${status === "loading" ? "opacity-75 cursor-wait" : "hover:bg-yellow-500 hover:scale-[1.02]"}`}
          >
            {status === "loading" ? "Enviando..." : "Enviar Mensaje 🚀"}
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default Contacto;
