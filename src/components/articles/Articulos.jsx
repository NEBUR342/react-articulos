// Articulos.jsx
import React, { useState, useEffect } from "react";
import Buscar from "./Buscar";
import jsonData from "../json/data.json"; // Importar el JSON aquí

export default function Articulos() {
  let [articulos, setArticulos] = useState([]);
  let [filtrarArticulos, setFiltrarArticulos] = useState([]);
  let [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    //cargar los datos de los artículos desde el archivo JSON
    // Usar el JSON importado
    let data = jsonData.articulos;
    setArticulos(data);
    // mostra todos los artículos sin filtrar
    setFiltrarArticulos(data);
  }, []);

  useEffect(() => {
    // Filtrar los artículos cuando cambie el término de búsqueda
    let filtered = articulos.filter((articulo) =>
      articulo.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setFiltrarArticulos(filtered);
  }, [busqueda, articulos]);

  let handleSearch = (term) => {
    setBusqueda(term);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Catálogo de Artículos</h2>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <Buscar onSearch={handleSearch} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <ul className="list-group">
            {filtrarArticulos.map((articulo) => (
              <li key={articulo.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{articulo.nombre}</h3>
                  <span className="text-white rounded p-1  bg-primary">
                    {articulo.tipo}
                  </span>
                </div>
                <p>Cantidad: {articulo.cantidad}</p>
                <p>Precio: ${articulo.precio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
