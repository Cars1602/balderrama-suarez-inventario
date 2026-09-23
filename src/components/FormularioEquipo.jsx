import { useState } from "react";

function FormularioEquipo({ agregarEquipo }) {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [disponible, setDisponible] = useState(true);

  // Estados para alertas en la interfaz
  const [mensajeError, setMensajeError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  const categorias = ["Laptop", "Monitor", "Periférico", "Impresora", "Red", "Otros"];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones de la Parte VI
    const numPrecio = Number(precio);
    const numStock = Number(stock);

    if (
      !nombre.trim() ||
      !marca.trim() ||
      !categoria ||
      precio === "" ||
      stock === "" ||
      numPrecio <= 0 ||
      numStock < 0
    ) {
      setMensajeError("Complete correctamente los campos obligatorios.");
      setMensajeExito("");
      return;
    }

    const nuevoEquipo = {
      id: Date.now(),
      nombre: nombre.trim(),
      marca: marca.trim(),
      categoria,
      precio: numPrecio,
      stock: numStock,
      disponible: Boolean(disponible),
    };

    agregarEquipo(nuevoEquipo);

    // Mensaje de éxito y limpieza de campos
    setMensajeExito("Equipo registrado correctamente.");
    setMensajeError("");
    setNombre("");
    setMarca("");
    setCategoria("");
    setPrecio("");
    setStock("");
    setDisponible(true);
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="card-title mb-3">Registrar Equipo</h4>

        {/* Mensajes de validación en la interfaz */}
        {mensajeError && (
          <div className="alert alert-danger py-2" role="alert">
            {mensajeError}
          </div>
        )}
        {mensajeExito && (
          <div className="alert alert-success py-2" role="alert">
            {mensajeExito}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Marca</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ej. Lenovo"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Categoría</label>
            <select
              className="form-select"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">-- Seleccione una categoría --</option>
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Precio (Bs)</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              placeholder="Mayor a 0"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Stock</label>
            <input
              type="number"
              className="form-control"
              placeholder="Igual o mayor a 0"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Estado</label>
            <select
              className="form-select"
              value={disponible ? "true" : "false"}
              onChange={(e) => setDisponible(e.target.value === "true")}
            >
              <option value="true">Disponible</option>
              <option value="false">No disponible</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Registrar equipo
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioEquipo;