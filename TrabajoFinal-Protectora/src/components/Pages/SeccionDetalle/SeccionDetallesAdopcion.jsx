import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SeccionDetallesAdopcion() {
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
      <div className="detallesadopcion">
        <div className="rectangulopreguntas">
          <h5 className="preguntaadopcion">Requsitos para la adopción</h5>
          <p className="respuestaadopcion">
            No hay requisitos especiales para adoptar a {animals.nombre}
          </p>
        </div>
        <div className="rectangulopreguntas">
          <h5 className="preguntaadopcion">Tasa de adopción</h5>
          <p className="respuestaadopcion">125 Euros</p>
        </div>
        <div className="rectangulopreguntas">
          <h5 className="preguntaadopcion">¿Se envia a otra ciudad?</h5>
          <p className="respuestaadopcion">No se envia a otra ciudad</p>
        </div>
      </div>
    </div>
  );
}

export default SeccionDetallesAdopcion;
