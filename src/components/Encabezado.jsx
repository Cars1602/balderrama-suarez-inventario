function Encabezado({ titulo, subtitulo }) {
  return (
    <header className="py-3 mb-4 bg-light text-center border-bottom rounded shadow-sm">
      <h1 className="h2 text-primary mb-1">{titulo}</h1>
      <p className="text-secondary mb-0">{subtitulo}</p>
    </header>
  );
}

export default Encabezado;