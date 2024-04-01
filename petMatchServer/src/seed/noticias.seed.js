const mongoose = require("mongoose")
const Noticias = require("../models/noticias.models")
require("dotenv").config();

const arrayNoticias = [
    
    {
        "titulo": "El animal más hermoso del mundo",
        "articulo": "Determinar cuál es el animal más atractivo del mundo no es tarea sencilla, ya que la belleza es algo subjetivo. Nos hemos roto los sesos para encontrar la respuesta. ¿Cuál ha sido? Ninguno. Nos resulta imposible decidirnos, así que te dejamos nuestro top 3 final:\n\nGuacamayo. Estas aves cuentan con plumas la mar de coloridas y suelen vivir en bandadas, por lo que cuando alzan el vuelo se convierte en todo un espectáculo.\n\nTigre de bengala blanco. Los tigres son de por sí unos animales imponentes y muy nobles. Si has visto uno con el pelaje blanco, no te quepa duda: has estado ante uno de los animales más bellos del mundo.\n\nCisne blanco. A lo largo de toda la historia, se ha relacionado este animal con la idea de la belleza. Sus plumas blancas y su largo cuello le dotan del estilo y la elegancia que conocemos en nuestro ideario popular.",
        "imagen": "https://cdn0.ecologiaverde.com/es/posts/9/6/3/caracteristicas_del_tigre_blanco_y_su_origen_2369_0_600.jpg"
      },
  
      {
        "titulo": "Algunos animales respiran por la piel",
        "articulo": "Este tipo de respiración es propia de los anfibios, los anélidos, algunos equinodermos y los cnidarios. ¿Conocías estas curiosidades de animales? En el caso particular de los anfibios, su respiración puede llegar a variar a lo largo de la vida en función de los distintos estadios de su evolución. Estos son los animales que pueden respirar por la piel:\n\nLombriz.\nSanguijuela.\nLos erizos de mar.\nMedusas.\nRanas.\nEl ajolote.",
        "imagen": "https://s1.eestatic.com/2022/12/13/enclave-ods/historias/725688188_229454555_1706x960.jpg"
      },

      {
        "titulo": "El animal más peligroso del mundo",
        "articulo": "Ni leones, ni serpientes, ni tarántulas. El animal más peligroso del mundo es… ¡El mosquito! Parece mentira que un animal tan común y pequeño pueda representar el mayor riesgo para los humanos, pero así es. Y es que el mosquito, como bien sabrás, se alimenta de sangre. Con su picadora, este animal puede transmitir graves enfermedades como la malaria, el dengue o la fiebre amarilla, provocando que 200 millones de personas enfermen, de las cuales cerca de unas 600 mil mueren.",
        "imagen": "https://s1.eestatic.com/2018/08/01/ciencia/biologia-ciencia_326980043_91846652_1706x960.jpg"
      },

      {
        "titulo": "El animal más grande del mundo",
        "articulo": "Si otras curiosidades de animales te han sorprendido, esta puedes haberla imaginado: la ballena azul es el animal más grande del mundo. Puede llegar a pesar hasta 180 toneladas y medir hasta 30 metros de largo. ¡Toda una proeza de la naturaleza!",
        "imagen": "https://www.ngenespanol.com/wp-content/uploads/2022/10/ballena-azul-770x462.jpg"
      },

      {
        "titulo": " El animal más viejo de la historia",
        "articulo": "Esta historia tiene miga. En 2006 un equipo de investigadores encontró una almeja a 80 metros bajo las heladas aguas de la costa norte de Islandia. La llamaron Ming, y tenía 507 años de edad. Este tipo de almejas se caracteriza por su longevidad, pero Ming era un caso excepcional; doblaba la edad media de estos animales. ¿Sabes qué hicimos los humanos cuando nos topamos con ella? La sometimos a una esclerocronología para conocer su edad que acabó con su vida. Sin duda, una de las curiosidades de animales más desafortunadas.",
        "imagen": "https://s2.abcstatics.com/Media/201311/14/arctica-islandica--644x460.jpg"
      },

      {
        "titulo": "Especies de animales que duermen de pie",
        "articulo": "Aunque puede parecer que son pocos los animales que duermen de pie, nada más lejos de la realidad. Hay una amplia mayoría de las aves que descansa de pie, y muchas otras especies entre las que se incluyen los caballos, las gallinas, las vacas, los flamencos, las palomas, los alces, las jirafas o los patos, por ejemplo.",
        "imagen": "https://parabienoparamal.com/wp-content/uploads/2022/06/Junio-Semana-2-Quiz-930x620.jpg"
      }

]


mongoose.connect(process.env.MONGO_URI)
.then(async () => {
  const allNoticias = await Noticias.find();
  if(allNoticias > 0){
      await Noticias.collection.drop();
      console.log(" Noticias borradas");
  }
})

.catch((error) => console.log("error al borrar Noticias", error))
.then(async () => {
const noticiasMap = arrayNoticias.map((noticias)=> new Noticias(noticias));
await Noticias.insertMany(noticiasMap);
console.log("Noticias insertadas correctamente");

})
.catch((error) => console.log("error al insertar noticias", error))
.finally(()=> mongoose.disconnect());