function Proyectos() {
  const lista = [
    { nombre: "Contador en React", link: "https://github.com/Alfredo20207/ContadorReact" },
    { nombre: "Proyecto Python + SQL", link: "https://github.com/Alfredo20207/ProyectoSQL" },
  ];

  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-semibold">Mis Proyectos 📂</h2>
      <ul className="mt-6 space-y-3">
        {lista.map((p, i) => (
          <li key={i}>
            <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              {p.nombre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Proyectos;
