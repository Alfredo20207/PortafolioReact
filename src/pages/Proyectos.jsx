function Proyectos() {
  const lista = [
    { nombre: "Contador en React", link: "https://github.com/Alfredo20207/ContadorReact" },
    { nombre: "Proyecto Python + SQL", link: "https://github.com/Alfredo20207/ProyectoSQL" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Mis Proyectos 📂</h2>
      <ul>
        {lista.map((p, i) => (
          <li key={i}>
            <a href={p.link} target="_blank" rel="noreferrer">{p.nombre}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Proyectos;
