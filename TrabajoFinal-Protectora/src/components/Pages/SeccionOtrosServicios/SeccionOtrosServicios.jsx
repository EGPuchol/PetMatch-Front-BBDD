



import React from 'react'
import Nav from '../../Core/Nav/Nav'
import './SeccionOtrosServicios.css'
import { Link } from 'react-router-dom'

export const SeccionOtrosServicios = () => {
  return (
   <>
    <div className="layout__plus--1">
        <div className="plus__items">
          <img className="plus__img" src="iconos\primarios\refugio-de-animales.png" alt="" />
          <p className="plus__text">Asociacion protectoras</p>
          <div>
            <img className="plus__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
        <div className="plus__items">
          <img className="plus__img" src="iconos\secundarios\calendario (1).png" alt="" />
          <p className="plus__text">Eventos</p>
          <div>
            <img className="plus__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
        <Link to={'/'} className="plus__items">
          <img className="plus__img" src="iconos\secundarios\blogging.png" alt="" />
          <p className="plus__text">Curiosidades</p>
          <div>
            <img className="plus__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
         </Link> 
          <div className="plus__items">
          <img className="plus__img" src="iconos\secundarios\informacion.png" alt="" />
          <p className="plus__text">Ayuda</p>
          <div>
            <img className="plus__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
        <div className="plus__items">
          <img className="plus__img" src="iconos\secundarios\apoyo-tecnico.png" alt="" />
          <p className="plus__text">Configuración</p>
          <div>
            <img className="plus__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
        </div>
    

     <div className="layout__plus--2">
        <div className="plus__items">
          <img className="plus__img" src="iconos\secundarios\salida.png" alt="" />
          <p className="plus__text">Cerrar sesión</p>
          <div>
            <img className="plus__icon" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
      </div>    
    <Nav></Nav>
    </>
  )
}
