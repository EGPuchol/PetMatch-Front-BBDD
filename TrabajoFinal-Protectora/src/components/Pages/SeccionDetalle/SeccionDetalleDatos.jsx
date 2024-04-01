import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../Core/Nav/Nav";

function SeccionDetalleDatos() {
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
      <div className="detalleDatos">
        <div className="detallesespecie">
          <img
            className="fotopatita"
            src="https://i.pinimg.com/originals/ba/f0/6f/baf06f35c1f7b474b0ab7e54de1a3f3c.png"
            alt="patita"
          ></img>
          <div className="detalleespecie2">
            <strong>Especie:</strong> <p>{animals.especie}</p>
          </div>
        </div>

        <div className="detallesNacimiento">
          <img
            className="fotopatita"
            src="https://i.pinimg.com/originals/ba/f0/6f/baf06f35c1f7b474b0ab7e54de1a3f3c.png"
            alt="patita"
          ></img>
          <div className="detallenacimiento2">
            <strong>Nacimiento:</strong>
            <p>{animals.nacimiento}</p>
          </div>
        </div>

        <div className="detallesexo">
          <img
            className="fotopatita"
            src="https://i.pinimg.com/originals/ba/f0/6f/baf06f35c1f7b474b0ab7e54de1a3f3c.png"
            alt="patita"
          ></img>
          <div className="detallesexo2">
            <strong>Sexo:</strong>
            <p>{animals.sexo}</p>
          </div>
        </div>

        <div className="detalletamano">
          <img
            className="fotopatita"
            src="https://i.pinimg.com/originals/ba/f0/6f/baf06f35c1f7b474b0ab7e54de1a3f3c.png"
            alt="patita"
          ></img>
          <div className="detallesexo2">
            <strong>Tamaño:</strong>
            <p>{animals.tamaño}</p>
          </div>
        </div>

        <div className="detallepeso">
          <img
            className="fotopatita"
            src="https://i.pinimg.com/originals/ba/f0/6f/baf06f35c1f7b474b0ab7e54de1a3f3c.png"
            alt="patita"
          ></img>
          <div className="detallesexo2">
            <strong>Peso:</strong>
            <p>{animals.peso} kg</p>
          </div>
        </div>

        <div className="personalidad">
          <strong className="detallepersonalidad">Personalidad:</strong>
          <div className="personalidad2">
            {animals.personalidad.map((personalidad, index) => (
              <div className="interior2" key={index}>
                <p className="personalidad3">{personalidad}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="historia">
          <strong className="detallehistoria">Historia:</strong>{" "}
          {animals.historia}
        </p>
      </div>
      <Nav></Nav>
    </div>
  );
}

export default SeccionDetalleDatos;
