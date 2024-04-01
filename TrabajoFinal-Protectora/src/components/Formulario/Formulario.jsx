import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Formulario.css";
import BarraProgreso from "./BarraProgreso";

export const Formulario = ({ statusAdop }) => {
  
  /* El estado inicial con el que guardamos la info */

  const initialState = {
    NombreYapellidos: "",
    Email: "",
    Telefono: "",
    DNI: "",
    CalleNumeroPiso: "",
    CodigoPostal: "",
    Ciudad: "",
    AceptaTerminos: false
  };

  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();
  
  /* recuperamos el _id del estado de navegación si está disponible */
  const { _id } = location.state || {};

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setState({ ...state, [id]: value });
  };

  const handleCheckboxChange = (ev) => {
    setState({ ...state, AceptaTerminos: ev.target.checked });
  };

  const submit = (ev) => {
    ev.preventDefault();

   
    console.log("Estado del formulario:", state);
    console.log("ID del animal:", _id);

   
    navigate("/Formulario2", { state: { ...state, _id } });

    /*  Opcional: limpiar el formulario una vez enviado */
    /* setState(initialState); */
  };

  return (
    <div className="formulario">
      <form onSubmit={submit}>
        <h5>Formulario de Adopción</h5>
        <BarraProgreso currentStep={1} totalSteps={3} />
        <h3>Tus datos</h3>
        <input
          type="text"
          id="NombreYapellidos"
          placeholder="Nombre y apellidos"
          value={state.NombreYapellidos}
          onChange={handleInput}
        />
        <input
          type="text"
          id="Email"
          placeholder="Email"
          value={state.Email}
          onChange={handleInput}
        />
        <input
          type="number"
          id="Telefono"
          placeholder="Teléfono"
          value={state.Telefono}
          onChange={handleInput}
        />
        <input
          type="text"
          id="DNI"
          placeholder="DNI"
          value={state.DNI}
          onChange={handleInput}
        />
        <h3>Dirección</h3>
        <input
          type="text"
          id="CalleNumeroPiso"
          placeholder="Calle, número, piso"
          value={state.CalleNumeroPiso}
          onChange={handleInput}
        />
        <input
          type="text"
          id="CodigoPostal"
          placeholder="Código Postal"
          value={state.CodigoPostal}
          onChange={handleInput}
        />
        <input
          type="text"
          id="Ciudad"
          placeholder="Ciudad"
          value={state.Ciudad}
          onChange={handleInput}
        />
        <label htmlFor="AceptaTerminos">
          <input
            type="checkbox"
            id="AceptaTerminos"
            checked={state.AceptaTerminos}
            onChange={handleCheckboxChange}
          />
          Acepto los términos y condiciones de la adopción
        </label>
        <button type="submit" disabled={!state.AceptaTerminos}>Continuar</button>
      </form>
    </div>
  );
};

export default Formulario;