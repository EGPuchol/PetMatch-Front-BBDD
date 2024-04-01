import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom'
import "./Carrousel.css" 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from 'react';



const options = {
    items: 1,
    loop:true,
    autoplay: false,
    autoplayTimeout: 4000,
    animateOut:'slideOutUp',
    nav:false,
    dots:true,
    center:true,
    margin:10,
    responsive:{
        1100:{
            items:1,
        },
        724:{
            items:1,
        },
        500: {
            items:1,
        },
        
        370:{
            items:1,
            innerWidth: "100%",
            outerWidth: "100%",
        },
    }
}

export const Carrousel = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          // Simula un retraso de 2 segundos
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          // Después de la operación, establece loading a false
          setLoading(false);
        };
    
        fetchData();
      }, []);

    return (
       
        
        <div>
            {loading ? (
            <div>
                 {/* <img className='petmatch__logo' src="images\images_bienvenida\huella_logo.png" alt="" /> */}
                {/* <h2 className='petmatch__title'>PETMATCH</h2> */}
            <div class="loader">
         <div class="dog">
            <div class="dog-body">
               <div class="dog-tail">
                  <div class="dog-tail">
                     <div class="dog-tail">
                        <div class="dog-tail">
                           <div class="dog-tail">
                              <div class="dog-tail">
                                 <div class="dog-tail">
                                    <div class="dog-tail"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="dog-torso"></div>
            <div class="dog-head">
               <div class="dog-ears">
                  <div class="dog-ear"></div>
                  <div class="dog-ear"></div>
               </div>
               <div class="dog-eyes">
                  <div class="dog-eye"></div>
                  <div class="dog-eye"></div>
               </div>
               <div class="dog-muzzle">
                  <div class="dog-tongue"></div>
               </div>
            </div>
         </div>
      </div>

            </div>
        ) : (
            <div className='general'>
        <OwlCarousel className='owl-theme' {...options}>
    <div className='item1'>
        <img className='imagenCarrusel' src="images/images_bienvenida/servicio-animal.png" alt="img1" />
            <div className='divTexto1'>
                <h4 className='texto1'>Encuentra todo tipo de servicios que tienes cerca de ti</h4>
            </div>
    </div>
    <div className='item2'>
        <img className='imagenCarrusel' src="images/images_bienvenida/movil_animal.png" alt="img2" />
        <h4 className='texto2'>Adopta desde tu movil</h4>
            <div className='divParrafo2'>
                <p className='parrafo2'>Puedes acceder al perfil de muchos animales que estan en adopcion y filtrarlos para encontrar el que mejor se adapte a ti</p>
            </div>
    </div>
    <div className='item3'>
        <img className='imagenCarrusel' src="images/images_bienvenida/cajita_animal.png" alt="img3" />
        <h4 className='texto3'>Si eres una asociacion sube a tus peludos para darles más difusion</h4>

       

        <Link to= {"/Acceder"}><button className='button__acceder'>Acceder</button></Link>

    </div>
        </OwlCarousel>
        </div>
        )
    }

        </div>
        
        
    )
  }