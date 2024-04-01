import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import SeccionDetalleDatos from "./SeccionDetalleDatos";
import SeccionDetallesSalud from "./SeccionDetallesSalud";
import SeccionDetallesAdopcion from "./SeccionDetallesAdopcion";
import "./SeccionDetalles.css";
import "./SeccionDetalleSalud.css";
import "./SeccionDetallesAdopcion.css";
import SeccionDetallepopup from "./SeccionDetallepopup";
import Nav from "../../Core/Nav/Nav";
//hola
function SeccionDetalle({ datos, salud, adopcion }) {
  const [animals, setDetalleAnimals] = useState({});
  const [showDatos, setShowDatos] = useState(true);
  const [showSalud, setShowSalud] = useState(false);
  const [showAdopcion, setShowAdopcion] = useState(false);
  const [error, setError] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { _id } = useParams();

  useEffect(() => {
    const getDetalleAnimal = async () => {
      const detalleAnimalApi = await axios.get(
        `http://localhost:3300/animals/${_id}`
      );
      console.log("Response data:", detalleAnimalApi.data.data);

      setDetalleAnimals(detalleAnimalApi.data.data);
    };

    getDetalleAnimal();
  }, [_id]);
  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  return (
    <>
    <div className="main_screen_details_container">
      <div className="fotonombreciudad">
      <div className="btn_volver_detalle_container">
        <Link to="/Adopcion" className="volver_btn_detalle">
          Volver
        </Link>
          <img className="animalfoto" src={animals.imagen} alt={animals.nombre} />
      </div>
        <div className="nombreCiudad">
          <p>
            <strong>{animals.nombre}</strong>
          </p>
          <p>
            <strong>{animals.ciudad}</strong>{" "}
          </p>
        </div>
      </div>
      <div className="menuDetalle">
      <h3
        className={`custom-btn btn-4 ${showDatos ? "active" : ""}`}
        onClick={() => {
          setShowDatos(true);
          setShowSalud(false);
          setShowAdopcion(false);
        }}
      >
        Datos
      </h3>
      <h3
        className={`custom-btn btn-4 ${showSalud ? "active" : ""}`}
        onClick={() => {
          setShowDatos(false);
          setShowSalud(true);
          setShowAdopcion(false);
        }}
      >
        Salud
      </h3>
      <h3
        className={`custom-btn btn-4 ${showAdopcion ? "active" : ""}`}
        onClick={() => {
          setShowDatos(false);
          setShowSalud(false);
          setShowAdopcion(true);
        }}
      >
        Adopción
      </h3>
    </div>
      <div>
        {showDatos ? (
          <SeccionDetalleDatos datos={datos} />
        ) : showSalud ? (
          <SeccionDetallesSalud salud={salud} />
        ) : showAdopcion ? (
          <SeccionDetallesAdopcion adopcion={adopcion} />
        ) : null}
      </div>
      <div className="detallesbuttonadoptar2">
        <button className="detallesbuttonadoptar" onClick={openModal}>
          Adoptar
        </button>
        <SeccionDetallepopup isOpen={isModalOpen} onClose={closeModal} _id={_id}>
          <h2 className="tituloadopcion">Solicitud de adopción</h2>
          <p className="parrafoadopcion">
            Adoptar es un acto de amor, pero sobre todo una responsabilidad de
            por vida.
          </p>
          <p className="parrafoadopcion">
            Por éste motivo es importante que veas el siguiente vídeo donde te
            explicamos como va a ser todo el proceso de adopción.
          </p>
        </SeccionDetallepopup>
      </div>
    </div>
      <Nav></Nav>
    </>
  );
}

export default SeccionDetalle;
