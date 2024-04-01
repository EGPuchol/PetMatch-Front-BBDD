import React, { useState } from 'react'

function SeccionFiltros({ FiltroSubmit }) {


    const [categoria, setCategoria] = useState('');

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pasa las opciones del filtro al componente padre
    FiltroSubmit(categoria);
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="categoria">Selecciona una categoría:</label>
      <select name="categoria" id="categoria" value={categoria} onChange={handleCategoriaChange}>
        <option value="mamiferos">Mamíferos</option>
        <option value="aves">Aves</option>
        {/* Otras opciones de filtro */}
      </select>
      <button type="submit">Aplicar filtro</button>
    </form>
    </div>
  )
}}

export default SeccionFiltros;
