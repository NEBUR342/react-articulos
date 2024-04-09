import React, { useState } from "react";

export default function Buscar({ onSearch }) {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="search" className="form-label">
        Buscar:
      </label>
      <input
        type="text"
        className="form-control"
        id="search"
        value={busqueda}
        onChange={handleChange}
        placeholder="Buscar por nombre..."
      />
    </div>
  );
}
