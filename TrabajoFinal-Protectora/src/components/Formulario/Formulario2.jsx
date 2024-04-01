import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Formulario.css";
import BarraProgreso from "./BarraProgreso";

export const Formulario2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  /* Esto es para recuperar el id y pasarlo con el fomrulario */
  const { _id, ...previousState } = location.state || {};

 /* Extiende los datos a traves del formulario y coge los nuevos campos */
  const initialState = {
    ...previousState, 
    OtrosAnimales: "",
    CualesAnimales: "",
    SeLlevaBien: "",
    EleccionAdoptar: "",
    NecesidadesAnimal: "",
    GastosAnimal: "",
    AlimentacionAnimal: "",
  };

  const [state, setState] = useState(initialState);

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setState({ ...state, [id]: value });
  };

  const submit = (ev) => {
    ev.preventDefault();

   
    console.log("Formulario2 estado:", state);
    
    /* para navegar a Formulario3 pasando el estado actual junto con _id */
    navigate("/Formulario3", { state: { ...state, _id } });

    setState(initialState); /*  esta funcion limpia el formulario una vez submiteado */
  };

  return (
    <>
    <div className="formulario">
      <form onSubmit={submit}>
        <h5> Formulario de Adopción </h5>
        <BarraProgreso currentStep={2} totalSteps={3}/>
        <h3> Sobre las mascotas </h3>
        <div className="formulario-container">
        <div className="radio-group">
          <div className="radio-question">
            <span>¿Tienes otros animales?</span>
            </div>
          <div className="radio-option">
          <label htmlFor="OtrosAnimalesSi" className="radio-label">Si</label>
          <input
            type="radio"
            id="OtrosAnimalesSi"
            value="True"
            onChange={() => setState({ ...state, OtrosAnimales: "True" })}
            checked={state.OtrosAnimales === "True"}
          ></input>
          </div>
          <div className="radio-option">
          <label htmlFor="OtrosAnimalesNo" className="radio-label">No</label>
          <input
            type="radio"
            id="OtrosAnimalesNo"
            value="False"
            onChange={() => setState({ ...state, OtrosAnimales: "False" })}
            checked={state.OtrosAnimales === "False"}
          ></input>
          </div>
        </div>
        </div>
      
        {/* este es el condicional para que si pulsas te aparezcan las dos siguiente  */}

        {state.OtrosAnimales === "True" && (
          <>
            <label htmlFor="CualesAnimales"> </label>
            <input
              type="text"
              id="CualesAnimales"
              placeholder="¿Cuáles?"
              value={state.CualesAnimales}
              onChange={handleInput}
            ></input>

            <label htmlFor="SeLlevaBien"></label>
            <input
              type="text"
              id="SeLlevaBien"
              placeholder="¿Se lleva bien con otros animales?"
              value={state.SeLlevaBien}
              onChange={handleInput}
            ></input>
          </>
        )}

        <label htmlFor="EleccionAdoptar"> ¿Por qué has elegido adoptar? </label>
        <input
          type="text"
          id="EleccionAdoptar"
          value={state.EleccionAdoptar}
          onChange={handleInput}
        ></input>

        <label htmlFor="NecesidadesAnimal">
          {" "}
          ¿Conoces las necesidades del animal?{" "}
        </label>
        <input
          type="text"
          id="NecesidadesAnimal"
          value={state.NecesidadesAnimal}
          onChange={handleInput}
        ></input>

        <label htmlFor="GastosAnimal"> ¿Conoces sus gastos? </label>
        <input
          type="text"
          id="GastosAnimal"
          value={state.GastosAnimal}
          onChange={handleInput}
        ></input>

        <label htmlFor="AlimentacionAnimal"> ¿Conoces su alimentación? </label>
        <input
          type="text"
          id="AlimentacionAnimal"
          value={state.AlimentacionAnimal}
          onChange={handleInput}
        ></input>

        <button type="submit"> Continuar </button>
      </form>
      </div>
    </>
  );
};

export default Formulario2;