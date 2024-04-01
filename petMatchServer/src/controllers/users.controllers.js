const User = require("../models/users.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const createUser = async (request, response, next) => {
  try {
    const user = new User();
    user.nombreUsuario = request.body.nombreUsuario;
   
    
    // Hash de la contraseña antes de guardarla en la base de datos
    const saltRounds = 10;  // Número de rondas para generar el salt
    user.password = await bcrypt.hash(request.body.password, saltRounds);

    //Verificar si ya existe el usuario
    if (await User.findOne({ nombreUsuario: request.body.nombreUsuario })) {
      return response.status(409).json({
        status: 409,
        message: HTTPSTATUSCODE[409],
        data: null
      });
    }

    // Guardar el usuario en la base de datos
    const userDb = await user.save();
    
    return response.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: null
    });
  } catch (error) {
    next(error);
  }
};

const authenticate = async (request, response, next) => {
  try {
    const userInfo = await User.findOne({ nombreUsuario: request.body.nombreUsuario });
    if (userInfo && bcrypt.compareSync(request.body.password, userInfo.password)) {
      userInfo.password = null;
      const token = jwt.sign(
        {
          id: userInfo._id,
          nombreUsuario: userInfo.nombreUsuario,
        },
        request.app.get("secretKey"),
        { expiresIn: "1d" }
      );

      return response.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { user: userInfo, token: token },
      });
    } else {
      return response.json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const logout = (request, response, next) => {
  try {
    return response.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      token: null,
    });
  } catch (error) {
    return next(error);
  }
};

const getUsers = async (request, response, next) => {
  try {
      const users = await User.find();
      response.status(200).json({
          status: 200,
          message: HTTPSTATUSCODE[200],
          data: users
      });

  } catch (error) {
      next(error)
  }
}


module.exports = {
  createUser,
  authenticate,
  logout,
  getUsers
};
