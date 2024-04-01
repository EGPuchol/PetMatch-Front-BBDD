import React from "react";
import Nav from "../../Core/Nav/Nav";
import "./SeccionPerfil.css"

export const SeccionPerfil = () => {
  return (
    <>
      <div className="persona__img">
        <img className="img__person" src="https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-hombre-sonriendo.jpg?resize=500%2C500&ssl=1" alt="" />
      </div>
      <div className="layout__perfil--1">
        <div className="perfil__items">
          <img className="perfil__img" src="iconos\secundarios\mujer.png" alt="" />
          <p className="perfil__text">Mi Perfil</p>
          <div>
            <img className="perfil__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
        <div className="perfil__items">
          <img className="perfil__img" src="iconos\secundarios\mapa.png" alt="" />
          <p className="perfil__text">Direcciones</p>
          <div>
            <img className="perfil__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
        <div className="perfil__items">
          <img className="perfil__img" src="iconos\secundarios\amor.png" alt="" />
          <p className="perfil__text">Favoritos</p>
          <div>
            <img className="perfil__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
        <div className="perfil__items">
          <img className="perfil__img" src="iconos\primarios\notificacion.png" alt="" />
          <p className="perfil__text">Notificaciones</p>
          <div>
            <img className="perfil__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
      </div>
      <div className="layout__perfil--2">
        <div className="perfil__items">
          <img className="perfil__img" src="iconos\tamaño\pata.png" alt="" />
          <p className="perfil__text">Estado de la adopción</p>
          <div>
            <img className="perfil__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
        <div className="perfil__items">
          <img className="perfil__img" src="iconos\servicios\guarderia.png" alt="" />
          <p className="perfil__text">Apadrinar</p>
          <div>
            <img className="perfil__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
        <div className="perfil__items">
          <img className="perfil__img" src="iconos\primarios\corazon.png" alt="" />
          <p className="perfil__text">Donar</p>
          <div>
            <img className="perfil__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
      </div>
      <Nav></Nav>
    </>
  );
};
