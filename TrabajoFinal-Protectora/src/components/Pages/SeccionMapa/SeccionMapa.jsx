
import { useEffect } from "react";
import Nav from "../../Core/Nav/Nav";
import "./SeccionMapa.css";

function SeccionMapa () {


    useEffect(() => {
    const map =  new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 40.41563547927847, lng: -3.7070912426718934 },
            zoom: 14,
        });
    const myLatLng = { lat: 40.41563547927847, lng: -3.7070912426718934 }
    const myLatLng2 = { lat: 40.421130956863124, lng: -3.7023741602024804 }
    const myLatLng3 = { lat: 40.41806594358817, lng: -3.7097578183315028 }
    const myLatLng4 = { lat: 40.41047548900545, lng: -3.708913556227546 }
    const myLatLng5 = { lat: 40.43464544225847, lng: -3.7058157113194534 }
    const myLatLng6 = { lat: 40.428870809489425, lng: -3.686394444005578 }
    const myLatLng7 = { lat:  40.404889230779446,lng: -3.7003534798874265 }
    
    
        new  window.google.maps.Marker({
            position: myLatLng,
            map,
            title: "Hello World!",
          });
          new  window.google.maps.Marker({
            position: myLatLng2,
            map,
            title: "Hello World!",
          });
          new  window.google.maps.Marker({
            position: myLatLng3,
            map,
            title: "Hello World!",
          });
          new  window.google.maps.Marker({
            position: myLatLng4,
            map,
            title: "Hello World!",
          });
          new  window.google.maps.Marker({
            position: myLatLng5,
            map,
            title: "Hello World!",
          });
          new  window.google.maps.Marker({
            position: myLatLng6,
            map,
            title: "Hello World!",
          });
          new  window.google.maps.Marker({
            position: myLatLng7,
            map,
            title: "Hello World!",
          });
    }, [])


    const mapStyleS = {height: '650px'}
    return (
        <>
        <div>
        <div className="tittle_map_section_container">
            <h1 className="map__title">Nuestras Ubicaciones</h1>
        </div>
        <div  className="map_section_container">
            <div className="map__style" style={mapStyleS} id="map"/>  
        </div>
        </div>
        <Nav></Nav>
        </>
        
    );
}

export default SeccionMapa;












  
  
    

