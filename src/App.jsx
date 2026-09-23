import { useState } from "react";
import Encabezado from "./components/Encabezado";
import FormularioEquipo from "./components/FormularioEquipo";
import Equipo from "./components/Equipo";

function App() {
  // Estado principal de equipos (Parte IV)
  const [equipos, setEquipos] = useState([
    {
      id: 1,
      nombre: "Legion 5",
      marca: "Lenovo",
      categoria: "Laptop",
      precio: 6500,
      stock: 10,
      disponible: true,
    },
    {
      id: 2,
      nombre: "G502 Hero",
      marca: "Logitech",
      categoria: "Periférico",
      precio: 350,
      stock: 20,
      disponible: true,
    },
  ]);

  // Agregar conservando los anteriores con spread operator (Parte IV)
  const agregarEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, nuevoEquipo]);
  };

  // Función opcional para eliminar equipo
  const eliminarEquipo = (id) => {
    if (window.confirm("¿Deseas eliminar este registro?")) {
      setEquipos(equipos.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container mt-4 mb-5">
      {/* Encabezado con props requeridas (Parte II) */}
      <Encabezado
        titulo="Inventario Tecnológico"
        subtitulo="Control de equipos disponibles"
      />

      <div className="row mt-4">
        {/* Formulario de registro (Parte III) */}
        <div className="col-md-5">
          <FormularioEquipo agregarEquipo={agregarEquipo} />
        </div>

        {/* Listado dinámico de equipos (Parte V) */}
        <div className="col-md-7">
          <h3 className="mb-3">Equipos en Inventario</h3>

          {equipos.length === 0 ? (
            <div className="alert alert-info" role="alert">
              No existen equipos registrados.
            </div>
          ) : (
            equipos.map((equipo) => (
              <Equipo
                key={equipo.id}
                equipo={equipo}
                eliminarEquipo={eliminarEquipo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;