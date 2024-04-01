import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"; /* Instalar axios */
import BarraProgreso from "./BarraProgreso";
import "./Formulario.css";

export const Formulario3 = () => {
  const initialState = {
    DondeVives: "",
    VivesAlquiler: "",
    PermiteAnimales: "",
    Mudarte: "",
    TieneJardin: "",
    VivesOtrasPersonas: "",
    AcuerdoAdopcion: "",
    VisitaCasa: "",
  };

  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();
  const _id = location.state?._id; /* Con esto comprobamos el id */
  const [showPopup, setShowPopup] = useState(false);

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setState({ ...state, [id]: value });
  };

  const submitForm = async (ev) => {
    ev.preventDefault();

    try {
      /* Usamos axios para enviar una peticion al post */
      const response = await axios.patch(
        `http://localhost:3300/animals/${_id}`,
        {
          ...state,
          estadoAdopcion: "En proceso", 
        }
      );

      if (response.status === 200) {
        console.log("Formulario enviado y estado de adopción actualizado");
        setShowPopup(true);
        /* Programa la redirección después de un breve retardo */
        setTimeout(() => {
          navigate('/estadoAdopcion');
        }, 5000); /* Ajusta el tiempo de espera */
      } else {
        console.error("Hubo un error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <>
      <div className="formulario">
        <form onSubmit={submitForm}>
          <h5>Formulario de Adopción</h5>
          <BarraProgreso currentStep={3} totalSteps={3} />
          <h3> Familia y hogar </h3>

          <label htmlFor="DondeVives"> ¿Dónde vives? </label>
          <input
            type="text"
            id="DondeVives"
            placeholder="piso, casa, chalet"
            value={state.DondeVives}
            onChange={handleInput}
          ></input>

          <div className="radio-group">
            <div className="radio-question">
              <span>¿Vives de alquiler?</span>
            </div>
            <div className="radio-option">
              <label htmlFor="VivesAlquilerSi" className="radio-label">
                Si
              </label>
              <input
                type="radio"
                id="VivesAlquilerSi"
                value="True"
                onChange={() => setState({ ...state, VivesAlquiler: "True" })}
                checked={state.VivesAlquiler === "True"}
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="VivesAlquilerNo" className="radio-label">
                No
              </label>
              <input
                type="radio"
                id="VivesAlquilerNo"
                value="False"
                onChange={() => setState({ ...state, VivesAlquiler: "False" })}
                checked={state.VivesAlquiler === "False"}
              ></input>
            </div>
          </div>

          <div className="radio-group">
            <div className="radio-question">
              <span>¿Tú casero permite animales?</span>
            </div>
            <div className="radio-option">
              <label htmlFor="PermiteAnimalesSi" className="radio-label">
                Si
              </label>
              <input
                type="radio"
                id="PermiteAnimalesSi"
                value="True"
                onChange={() => setState({ ...state, PermiteAnimales: "True" })}
                checked={state.PermiteAnimales === "True"}
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="PermiteAnimalesNo" className="radio-label">
                No
              </label>
              <input
                type="radio"
                id="PermiteAnimalesNo"
                value="False"
                onChange={() =>
                  setState({ ...state, PermiteAnimales: "False" })
                }
                checked={state.PermiteAnimales === "False"}
              ></input>
            </div>
          </div>

          <div className="radio-group">
            <div className="radio-question">
              <span>¿Crees que podrías mudarte pronto?</span>
            </div>
            <div className="radio-option">
              <label htmlFor="MudarteSi" className="radio-label">
                Si
              </label>
              <input
                type="radio"
                id="MudarteSi"
                value="True"
                onChange={() => setState({ ...state, Mudarte: "True" })}
                checked={state.Mudarte === "True"}
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="MudarteNo" className="radio-label">
                No
              </label>
              <input
                type="radio"
                id="MudarteNo"
                value="False"
                onChange={() => setState({ ...state, Mudarte: "False" })}
                checked={state.Mudarte === "False"}
              ></input>
            </div>
          </div>

          <div className="radio-group">
            <div className="radio-question">
              <span>¿Tienes jardin?</span>
            </div>
            <div className="radio-option">
              <label htmlFor="TieneJardinSi" className="radio-label">
                Si
              </label>
              <input
                type="radio"
                id="TieneJardinSi"
                value="True"
                onChange={() => setState({ ...state, TieneJardin: "True" })}
                checked={state.TieneJardin === "True"}
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="TieneJardinNo" className="radio-label">
                No
              </label>
              <input
                type="radio"
                id="TieneJardinNo"
                value="False"
                onChange={() => setState({ ...state, TieneJardin: "False" })}
                checked={state.TieneJardin === "False"}
              ></input>
            </div>
          </div>

          <div className="radio-group">
            <div className="radio-question">
              <span>¿Vives con otras personas?</span>
            </div>
            <div className="radio-option">
              <label htmlFor="VivesOtrasPersonasSi" className="radio-label">
                Si
              </label>
              <input
                type="radio"
                id="VivesOtrasPersonasSi"
                value="True"
                onChange={() =>
                  setState({ ...state, VivesOtrasPersonas: "True" })
                }
                checked={state.VivesOtrasPersonas === "True"}
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="VivesOtrasPersonasNo" className="radio-label">
                No
              </label>
              <input
                type="radio"
                id="VivesOtrasPersonasNo"
                value="False"
                onChange={() =>
                  setState({ ...state, VivesOtrasPersonas: "False" })
                }
                checked={state.VivesOtrasPersonas === "False"}
              ></input>
            </div>
          </div>

          <div className="radio-group">
            <div className="radio-question">
              <span>¿Están todos de acuerdo con la adopción?</span>
            </div>
            <div className="radio-option">
              <label htmlFor="AcuerdoAdopcionSi" className="radio-label">
                Si
              </label>
              <input
                type="radio"
                id="AcuerdoAdopcionSi"
                value="True"
                onChange={() => setState({ ...state, AcuerdoAdopcion: "True" })}
                checked={state.AcuerdoAdopcion === "True"}
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="AcuerdoAdopcionNo" className="radio-label">
                No
              </label>
              <input
                type="radio"
                id="AcuerdoAdopcionNo"
                value="False"
                onChange={() =>
                  setState({ ...state, AcuerdoAdopcion: "False" })
                }
                checked={state.AcuerdoAdopcion === "False"}
              ></input>
            </div>
          </div>

          <div className="radio-group">
            <div className="radio-question">
              <span>¿Estás de acuerdo con que visitemos tu casa?</span>
            </div>
            <div className="radio-option">
              <label htmlFor="VisitaCasaSi" className="radio-label">
                Si
              </label>
              <input
                type="radio"
                id="VisitaCasaSi"
                value="True"
                onChange={() => setState({ ...state, VisitaCasa: "True" })}
                checked={state.VisitaCasa === "True"}
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="VisitaCasaNo" className="radio-label">
                No
              </label>
              <input
                type="radio"
                id="VisitaCasaNo"
                value="False"
                onChange={() => setState({ ...state, VisitaCasa: "False" })}
                checked={state.VisitaCasa === "False"}
              ></input>
            </div>
          </div>

          <button type="submit"> Enviar </button>
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={() => setShowPopup(false)}>
              X
            </button>
            <h2>¡Enviado!</h2>
            <p>
              Hemos enviado tu formulario a la protectora. si quieres ponerte en
              contacto con ellos puedes hacerlo vía email o WhatsApp.{" "}
            </p>

            <p>
              {" "}
              Recuerda que la protectora se pondrá en contacto contigo para
              poder hacer la entrevista personal.
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/images/undrawPlayfulCatRchv2x.png`}
              alt="Ilustración"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Formulario3;
