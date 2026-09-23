function Equipo({ equipo, eliminarEquipo }) {
  const { id, nombre, marca, categoria, precio, stock, disponible } = equipo;

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-1 text-dark">{nombre}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {marca} — <span className="badge bg-secondary">{categoria}</span>
          </h6>
          <p className="card-text mb-1">
            Precio: <strong>Bs {precio}</strong> | Stock: <strong>{stock}</strong>
          </p>
          <div>
            {/* Renderizado condicional del estado */}
            {disponible ? (
              <span className="badge bg-success">Disponible</span>
            ) : (
              <span className="badge bg-danger">No disponible</span>
            )}
          </div>
        </div>

        {eliminarEquipo && (
          <div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => eliminarEquipo(id)}
            >
              Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Equipo;