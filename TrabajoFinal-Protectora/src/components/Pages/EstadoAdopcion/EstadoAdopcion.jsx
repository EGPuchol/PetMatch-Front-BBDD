import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../../Core/Nav/Nav";
import FilterPopup from "./EstadoAdopcionPopUp";
import "./EstadoAdopcion.css";

// ESTADOS
export const EstadoAdopcion = () => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showAdopted, setShowAdopted] = useState(true);
  const [showNotAdopted, setShowNotAdopted] = useState(true);

  // SOLICITUD GET
  useEffect(() => {
    axios
      .get("http://localhost:3300/animals")
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        setError(error);
        console.error("Error al cargar los datos:", error);
      });
  }, []);

  // FILTROS USUARIO
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleApplyFilters = (showAdoptedParam, showNotAdoptedParam) => {
    setShowAdopted(showAdoptedParam);
    setShowNotAdopted(showNotAdoptedParam);
    setShowFilters(false);
  };

  const filteredAnimals = animals.filter((animal) => {
    const nameMatch = animal.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const adoptionStatusMatch = (animal.estadoAdopcion === "En proceso" && showAdopted) || !animal.estadoAdopcion || (animal.estadoAdopcion !== "En proceso" && showNotAdopted);
    return nameMatch && adoptionStatusMatch;
  });

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  return (
    <>
    {/* FILTROS */}
      <div className="screen_container">
        <div className="header_nav">
          <Link to="/Adopcion" className="volver_btn">
            Volver
          </Link>
          <div className="buscador2">
            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Buscar por nombre..." />
          </div>
          <div className="filter_btn" onClick={() => setShowFilters(true)}>
            <img src={`${process.env.PUBLIC_URL}/iconos/secundarios/controles-deslizantes.png`} alt="Filtros" className="btn_filtro" />
          </div>
          <FilterPopup isOpen={showFilters} onClose={() => setShowFilters(false)} handleApplyFilters={handleApplyFilters} />
        </div>

        {/* LISTA DE ANIMALES */}
        <ul className="main_animal_container_estadoAdopcion">
          {filteredAnimals.map((animal) => (
            <li key={animal._id} className="individual_animal_container_estadoAdopcion">
              <div className="procesoAdopcion1">
                <h2 className="animal_name_estadoAdopcion">Adopción de {animal.nombre}</h2>
                <p style={{ color: animal.estadoAdopcion === "En proceso" ? "orange" : "red" }}>{animal.estadoAdopcion === "En proceso" ? "En proceso" : "No Adoptado"}</p>
              </div>
              <div className="procesoAdopcion2">
                <div className="animal_photo_estadoAdopcion">
                  <img src={animal.imagen} alt={animal.nombre} />
                </div>
                <div className="animal_data_estadoAdopcion">
                  <p>
                    <strong>Nombre:</strong> {animal.nombre}
                  </p>
                  <p>
                    <strong>Ciudad:</strong> {animal.ciudad}
                  </p>
                  <p>
                    <strong>Sexo:</strong> {animal.sexo}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Nav></Nav>
    </>
  );
};

export default EstadoAdopcion;
