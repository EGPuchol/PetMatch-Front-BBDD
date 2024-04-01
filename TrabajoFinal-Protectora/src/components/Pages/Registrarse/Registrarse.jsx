import React from 'react'
import "./Registrarse.css"
import { Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import { API } from "../../../shared/servicios/api";

export const Registrarse = () => {

    const {
      register,
      handleSubmit
  } = useForm()
  
  const onSubmit = formData => {
    API.post('register', formData).then(res => {
        console.log('Register user',);
    })
}

  //hola
  
    return (
      <div className='todoRegistro'>
        <div className='registrarse'>
  
        <h2 className='textoRegistro'>Debes introducir los sigueintes datos para crear tu cuenta en PetMatch</h2>
  
        <form onSubmit={handleSubmit(onSubmit)}>
              
              <label className='logearse'>
              <input type="text" placeholder='Pepito' {...register("nombre", {required:true})}/>
  
              <input type="text" placeholder='Perez Vivas' {...register("apellidos", {required:true})}/>
  
              <input type="text" placeholder='alguien@gmail.com' {...register("correo", {required:true})}/>
  
              <input type="string" placeholder='abcd1234'{...register("contraseña", {required:true, minLength: {value: 8, message: "la contraseña tiene que ser de minimo 8 caracteres e incluir numeros y letras"}})} />
              </label>
  
              <input type="file" {...register("imagen", {required:true})}/>
  
          </form>
  
          <div className='botonesRegistro'>
          <Link to={"/Home"} className='iniciar'><button>Iniciar sesion</button></Link>
          <Link to={"/Registrarse"} className='registrarse'><button>Crear cuenta</button></Link>
          </div>
        </div>
      </div>
    )
  }
  