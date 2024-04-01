const { SchemaTypes } = require("mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const userSchema = new mongoose.Schema(
  {
    nombreUsuario: { type: String, unique:true, required: true, trim: true },
    password: { type: String, required: true, trim: true },

  
  },
  { timeStamps: true }
);

userSchema.pre("save", (next) => {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
