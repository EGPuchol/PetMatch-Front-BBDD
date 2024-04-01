const mongoose= require("mongoose");

const noticiasSchema = new mongoose.Schema({
  titulo: { type: String, required: true, trim: true },

  articulo: { type: String, required: true, trim: true },
  
  imagen: { type: String, required: true, trim: true } 
},
{timeStamps:true}
)

const Noticias = mongoose.model('Noticias', noticiasSchema)

module.exports=Noticias;

