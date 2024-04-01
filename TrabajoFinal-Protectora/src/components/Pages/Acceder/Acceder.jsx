import "./Acceder.css";
import { Link } from 'react-router-dom'

export const Acceder = () => {
  return (
    <div className="todo">
      <img className="imagen" src="images/images_bienvenida/perro_acceder.png" alt="imagen para acceder" />
      <div className="entrar">
        <h2 classname= "quieresentrar">¿Cómo quieres entrar?</h2>
        <div className="botones">
        <Link to= {"/Logearse"}><button className="usuario">Usuario</button></Link>
        </div>
        {/* <Link to={"/"}><p className="">Registrarse en otro momento</p></Link> */}
      </div>
    </div>
  );
};
