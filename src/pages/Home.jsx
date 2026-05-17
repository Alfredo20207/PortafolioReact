function Home() {
  return (
    <div className="flex flex-col items-center text-center mt-10 px-4">
      {/* Imagen de presentación */}
      <img
        src="/src/assets/perfil.jpeg"
        alt="Foto de Alfredo"
        className="w-40 h-40 rounded-full shadow-lg mb-6"
      />

      {/* Título y descripción */}
      <h1 className="text-4xl font-bold mb-4">¡Hola! Soy Alfredo 👋</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Analista de datos e n formacion apasionado por, Power BI, SQL, NoSQL, Python, R, Excel, Estadistica y matematicas.
        Este portafolio es mi carta de presentación, donde muestro mis proyectos y aprendizajes.
      </p>

      {/* Botón para ver proyectos */}
      <a
        href="/proyectos"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Ver mis proyectos 🚀
      </a>
    </div>
  );
}

export default Home;
