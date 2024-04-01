const mongoose = require("mongoose")
const Animal = require("../models/users.models");
const User = require("../models/users.models");
require("dotenv").config();

const arrayUsers = [
    {
      "_id": "65d28d9a9dbddcb0e977667c",
      "nombreUsuario": "joel",
      "password": "$2b$10$g/mVqM/nrVI0B2sY3DXeNuc9qnaOyJ1iZkswhzANGleo.0vhBVhFO",
      "__v": 0
    },
    {
      "_id": "65d28da69dbddcb0e977667f",
      "nombreUsuario": "fer",
      "password": "$2b$10$b2bqBJh/zCaQPIpB9Muf.e2vz8rOvdUxDRuBji8l9AN.E5gT5Qzji",
      "__v": 0
    },
    {
      "_id": "65d28db59dbddcb0e9776682",
      "nombreUsuario": "enrique",
      "password": "$2b$10$3E0e0bOUxAVNocc6BZ/3Zew9104fVy9iJfikX0.X6.IaWwJSyVfjm",
      "__v": 0
    },
    {
      "_id": "65d28dc09dbddcb0e9776685",
      "nombreUsuario": "guille",
      "password": "$2b$10$c06BVVyQsv8o/ZD/ld6/NeCc6Kkm.XIU46mW1uCfpa6qzg9sA83KS",
      "__v": 0
    },
    {
      "_id": "65d28dc89dbddcb0e9776688",
      "nombreUsuario": "mario",
      "password": "$2b$10$eZy9IEy9DWt.k6YlTtSXKeYrMyz43xD12d.A8nFLvV7NIOt.oLsQ2",
      "__v": 0
    }
  ]


mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const allUsers = await User.find();
    if(allUsers > 0){
        await User.collection.drop();
        console.log(" Usuarios borrados");
    }
  })

.catch((error) => console.log("error al borrar usuarios", error))
.then(async () => {
const usersMap = arrayUsers.map((user)=> new Animal(user));
await User.insertMany(usersMap);
console.log("Usuarios insertados correctamente");

})
.catch((error) => console.log("error al insertar Usuarios", error))
.finally(()=> mongoose.disconnect());