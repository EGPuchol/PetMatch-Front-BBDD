import { Accordion, AccordionTab } from "primereact/accordion";
import "./Home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../Core/Nav/Nav";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from '../../../shared/contextos/JwtContext';

const options = {
  items: 1,
  loop: true,
  autoplay: false,
  autoplayTimeout: 4000,
  animateOut: "fadeOut",
  nav: false,
  dots: true,
  center: true,
  margin: 10,
  responsive: {
    1100: {
      items: 1,
    },
    724: {
      items: 1,
    },
    500: {
      items: 1,
    },

    370: {
      items: 1,
      innerWidth: "100%",
      outerWidth: "100%",
    },
  },
};

export const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);

  // const {jwt, setJwt} = useContext(JwtContext);
  //   let navigate = useNavigate();
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   const signOut = () => {
  //       localStorage.removeItem('token');
  //       localStorage.removeItem('user');
  //       setJwt(null);
  //       navigate("/");
  //   }

  useEffect(() => {
    axios
      .get("http://localhost:3300/noticias")
      .then((response) => {
        console.log(response.data);

        setNoticias(response.data);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  


  return ( 
    <>
    

    

      <div>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="card__item">
            <div className="item__image1">
              <img className="image__home--slide"  src="https://cdn-icons-png.flaticon.com/128/5871/5871891.png" alt="img2" />
            </div>
            <div className="item__text">
              <h4 className="card__title">Siguenos en eventos</h4>
              <p className="card__subtitle">Acompañanos a cada lugar que vayamos, vente con nosotros</p>
            </div>
          </div>
          <div className="card__item">
            <div className="item__image2">
              <img className="image__home--slide"  src="https://cdn-icons-png.flaticon.com/512/3769/3769065.png" alt="img2" />
            </div>
            <div className="item__text">
              <h4 className="card__title">Estado de la adopción</h4>
              <p className="card__subtitle">Revisa el proceso de tus adopciones</p>
            </div>
          </div>
          <div className="card__item">
            <div className="item__image3">
              <img className="image__home--slide"  src="https://cdn-icons-png.flaticon.com/128/3659/3659265.png" alt="img2" />
            </div> 
            <div className="item__text">
              <h4 className="card__title">Descúbrenos</h4>
              <p className="card__subtitle">Conoce nuestras protectoras y empresas asociadas</p>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div className="layout__articles">
        <h3 className="articles__title">¡Curiosidades!</h3>
        <ul className="articles__list">
          {noticias.map((noticia) => (
            <li className="article__item" key={noticia._id}>
              <div className="article__img">
                <img
                  className="img__item"
                  src={noticia.imagen}
                  alt={noticia.titulo}
                />
              </div>
              <div className="article__text">
                <Accordion className="article__title" activeIndex={1}>
                  <AccordionTab header={noticia.titulo}>
                    <p className="article__subtitle">
                      {noticia.articulo}
                    </p>
                  </AccordionTab>
                </Accordion>
              </div>
            </li>
          ))}
        </ul>
<Nav></Nav>
      </div>

     
    </>
  
    );
}

        

