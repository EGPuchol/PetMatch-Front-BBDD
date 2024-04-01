const mongoose = require("mongoose");

const connectMongo = async () => {

    try {const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("INFO: conectado a base de datos", conn.connection.name);
    } catch (error) {
        console.log("ERROR: (f connectMongo) ->", error.message);
    }
}

module.exports = connectMongo
