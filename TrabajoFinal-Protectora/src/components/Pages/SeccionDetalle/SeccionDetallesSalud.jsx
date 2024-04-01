import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SeccionDetallesSalud() {
  const [animals, setDetalleAnimals] = useState({
    personalidad: [],
  });

  const [error, setError] = useState(null);

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
    <div>
      <div className="detallesSalud">
        <div className="detallevacunado">
          <img
            className="fotopatita"
            src="https://i.pinimg.com/originals/ba/f0/6f/baf06f35c1f7b474b0ab7e54de1a3f3c.png"
            alt="patita"
          ></img>

          <div className="detallevacunado2">
            <strong>Vacunado:</strong>
            <p>{animals.vacunado ? "Sí" : "No"}</p>
          </div>
        </div>

        <div className="detallesdesparasitado">
          <img
            className="fotopatita"
            src="https://i.pinimg.com/originals/ba/f0/6f/baf06f35c1f7b474b0ab7e54de1a3f3c.png"
            alt="patita"
          ></img>
          <div className="detallesdesparasitado2">
            <strong>Desparasitado:</strong>
            <p> {animals.desparasitado ? "Sí" : "No"}</p>
          </div>
        </div>

        <div className="detallessano">
          <img
            className="fotopatita"
            src="https://i.pinimg.com/originals/ba/f0/6f/baf06f35c1f7b474b0ab7e54de1a3f3c.png"
            alt="patita"
          ></img>
          <div className="detallessano2">
            <strong>Sano:</strong> <p>{animals.sano ? "Sí" : "No"}</p>
          </div>
        </div>

        <div className="detallesestirilizado">
          <img
            className="fotopatita"
            src="https://i.pinimg.com/originals/ba/f0/6f/baf06f35c1f7b474b0ab7e54de1a3f3c.png"
            alt="patita"
          ></img>
          <div className="detallesestirilizado2">
            <strong>Estirilizado:</strong>{" "}
            <p>{animals.estirilizado ? "Sí" : "No"}</p>
          </div>
        </div>

        <div className="detallesmicrochip">
          <img
            className="fotopatita"
            src="https://i.pinimg.com/originals/ba/f0/6f/baf06f35c1f7b474b0ab7e54de1a3f3c.png"
            alt="patita"
          ></img>
          <div className="detallesmicrochip2">
            <strong>Microchip:</strong>
            <p>{animals.microchip ? "Sí" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeccionDetallesSalud;
