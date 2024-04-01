import React from "react";
import { useNavigate } from "react-router-dom";

function SeccionDetallepopup({ isOpen, onClose, children, _id }) {
  const navigate = useNavigate();

  const handleAdoptarClick = () => {
    console.log('ID al hacer clic en Adoptar:', _id); // Esto te ayudará a verificar si el _id está llegando correctamente
    if (_id) {
      navigate('/Formulario', { state: { _id: _id } }); // Asegúrate de que el objeto state esté correctamente formado
    } else {
      console.error('El _id no está definido');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}></button>
        {children}

        <img
          className="fotomodal"
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple18/v4/46/2d/23/462d2304-1bc8-fbd6-5fa6-186dbf6b58dd/source/512x512bb.jpg"
          alt="adopta tu mascota"
        ></img>

        <h4 className="preguntaadopcion2">
          ¿Quieres continuar con el proceso de adopción?
        </h4>
        <div className="cancelaradoptar">
          <button className="detallesbuttonadoptar" onClick={onClose}>Cancelar</button>
          {/* Usar un botón en lugar de Link para aplicar el manejo del clic */}
          <button className="detallesbuttonadoptar" onClick={handleAdoptarClick}>Adoptar</button>
        </div>
      </div>
    </div>
  );
}

export default SeccionDetallepopup;

