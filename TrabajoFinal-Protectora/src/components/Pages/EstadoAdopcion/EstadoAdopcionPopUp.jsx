import React, { useState } from "react";
import "./EstadoAdopcionPopUp.css";

function EstadoAdopcionPopUp({ isOpen, onClose, handleApplyFilters }) {
  const [showAdopted, setShowAdopted] = useState(true);
  const [showNotAdopted, setShowNotAdopted] = useState(true);

  const handleApply = () => {
    handleApplyFilters(showAdopted, showNotAdopted);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fondo-overlay">
      <div className="main_popup_screen">
      <div>
        <button
          className={`filter_button ${showAdopted ? 'selected' : ''}`}
          onClick={() => setShowAdopted(!showAdopted)}
        >
          En proceso
        </button>
        <button
          className={`filter_button ${showNotAdopted ? 'selected' : ''}`}
          onClick={() => setShowNotAdopted(!showNotAdopted)}
        >
          No Adoptados
        </button>
        </div>
        <div>
        <button className="filter_apply_button" onClick={handleApply}>Aplicar</button>
        </div>      
      </div>
    </div>
  );
}

export default EstadoAdopcionPopUp;
