import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Pages/Home/Home';
import SeccionMapa  from './components/Pages/SeccionMapa/SeccionMapa';
// import { SeccionAnimales } from './components/Pages/SeccionAnimales/SeccionAnimales';
import SeccionAnimales from './components/Pages/SeccionAnimales/SeccionAnimales';
import { SeccionPerfil } from './components/Pages/SeccionPerfil/SeccionPerfil';
import { SeccionOtrosServicios } from './components/Pages/SeccionOtrosServicios/SeccionOtrosServicios';
import { Carrousel } from './components/Pages/Carrousel/Carrousel';
import EstadoAdopcion from './components/Pages/EstadoAdopcion/EstadoAdopcion';

import { Formulario } from './components/Formulario/Formulario';
import { Formulario2 } from './components/Formulario/Formulario2';
import { Formulario3 } from './components/Formulario/Formulario3';
import { Acceder } from './components/Pages/Acceder/Acceder';

//import { SeccionRegistro } from './components/Pages/SeccionRegistro/SeccionRegistro';
import SeccionDetalle from './components/Pages/SeccionDetalle/SeccionDetalle';

import { SeccionLogearse } from './components/Pages/SeccionLogearse/SeccionLogearse';
import { Registrarse } from './components/Pages/Registrarse/Registrarse';

import { useState } from 'react';
import { JwtContext } from './shared/contextos/JwtContext';
import { AnimalsProvider } from './contexts/AnimalsContext';




function App() {

  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);
  return (
    <>
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <AnimalsProvider>
      <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Carrousel/>}/>
        <Route path= "/Acceder" element= {<Acceder/>}/>
        <Route path= "/Logearse" element= {<SeccionLogearse/>}/>
        <Route path= "/Registrarse" element= {<Registrarse/>}/>
        <Route path= "/Home" element= {<Home/>}/>
        <Route path = "/Mapa" element= {<SeccionMapa/>} />
        <Route path = "/Adopcion" element= {<SeccionAnimales/>} />
        <Route path = "/Perfil" element= {<SeccionPerfil/>} />
        <Route path = "/OtrosServicios" element= {<SeccionOtrosServicios/>} />
        <Route path = "/estadoAdopcion" element= {<EstadoAdopcion/>} />
        <Route path='/Adopcion/:_id' element={<SeccionDetalle/>} />
        <Route path = "/Formulario" element= {<Formulario/>}/> 
        <Route path = "/Formulario2" element= {<Formulario2/>}/>
        <Route path = "/Formulario3" element= {<Formulario3/>}/>
        </Routes> 
      </BrowserRouter>
      </AnimalsProvider>
      </JwtContext.Provider>
    </>
  );
}

export default App;
