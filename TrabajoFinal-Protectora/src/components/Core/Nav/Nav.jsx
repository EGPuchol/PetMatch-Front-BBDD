import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
export const Nav = () => {
  return (
    <div className="Nav">
      <Link to={"/Home"} className="botonNav" src="/iconos">
        <img className="img__nav" src="iconos\primarios\refugio-de-animales.png"></img>
      </Link>
      <Link to={"/Mapa"} className="botonNav">
        <img className="img__nav" src="iconos\primarios\localizacion.png"></img>
      </Link>
      <Link to={"/Adopcion"} className="botonNav">
        <img className="img__nav" src="iconos\primarios\amor.png"></img>
      </Link>
      <Link to={"/Perfil"} className="botonNav">
        <img className="img__nav" src="iconos\primarios\usuario.png"></img>
      </Link>
      <Link to={"/OtrosServicios"} className="botonNav">
        <img className="img__nav--circle" src="iconos\secundarios\tres-puntos.png"></img>
      </Link>
    </div>
  );
};

export default Nav;