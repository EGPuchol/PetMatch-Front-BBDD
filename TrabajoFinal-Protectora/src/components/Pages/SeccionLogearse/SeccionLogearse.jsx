import React from 'react'
import "./SeccionLogearse.css"
import { Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import { JwtContext } from '../../../shared/contextos/JwtContext'
import { API } from "../../../shared/servicios/api";
import { useContext } from 'react';

export const SeccionLogearse = () => {

  const {
    register,
    handleSubmit
} = useForm()

const { setJwt } = useContext(JwtContext);

const onSubmit = formData => {
  API.post('authenticate', formData).then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      setJwt(true);
  })
}
console.log(API.post);
  return (
    <div className='todoRegistro'>
      <div className='registrarse'>

      <img className='huella' src="images/images_bienvenida/huella_logo.png" alt="fotodePetMatch" />

      <h2 className='textoRegistro'>Bienvenido a PetMatch. Para continuar, inicia sesion </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
            
            <label className='logearse'>
  
            <input type="text" placeholder='nombre de usuario' {...register("nombreUsuario", {required:true})}/>

            <input type="string" placeholder='abcd1234'{...register("contraseña", {required:true, minLength: {value: 8, message: "la contraseña tiene que ser de minimo 8 caracteres e incluir numeros y letras"}})} />
            </label>

        </form>

        <div className='botonesRegistro'>
        <Link to={"/Home"} className='iniciar'><button className='accederHome'>Acceder</button>  </Link>
     
        </div>
      </div>
    </div>
  )
}
