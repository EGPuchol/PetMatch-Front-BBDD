// Nombre
// Imagen
// Personalidad
// Peso
// Fecha de nacimiento
// Historia
// Ciudad
// Especies
// Raza
// Edad
// Sexo
// Tamaño
//Vacunado
// Desparasitado
// Sano
// Esterilizado

// Microchip

const mongoose= require("mongoose");

const animalSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },

  imagen: { type: String, required: true, trim: true },

  personalidad: { type: Array, required: true, trim: true },

  peso: { type: Number, required: true, trim: true },

  tamaño: {type: String, required: false, trim:true},

  nacimiento: { type: String, required: true, trim: true },

  historia: { type: String, required: true, trim: true },

  ciudad: { type: String, required: true, trim: true },

  especie: { type: String, required: true, trim: true },

  raza: { type: String, required: false, trim: true },

  sexo: { type: String, required: false, trim: true },

  vacunado: { type: Boolean, required: false, trim: true },

  desparasitado: { type: Boolean, required: false, trim: true },

  sano: { type: Boolean, required: false, trim: true },

  esterilizado: { type: Boolean, required: false, trim: true },

  microchip: { type: Boolean, required: false, trim: true },

  adoptado: { type: Boolean, required: false, trim: true },

  estadoAdopcion: { type: String, required: false, trim: true },

},
{timeStamps:true}
)

const Animal = mongoose.model('animal', animalSchema)

module.exports=Animal;

