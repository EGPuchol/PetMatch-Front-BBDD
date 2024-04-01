const express = require("express");

const cors = require("cors");

const mongoSanitize = require("express-mongo-sanitize");

const HTTPSTATUSCODE = require("./utils/httpStatusCode");
const connectMongo = require("./utils/db");
const corsOptions = {
  origin: "*",
};

require("dotenv").config();
const usersRouter = require("./src/routes/users.routes")
const animalRouter = require("./src/routes/animals.routes");
const noticiasRouter = require("./src/routes/noticias.routes");
connectMongo();

const app = express();

app.use(mongoSanitize());
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(logger("dev"));
app.set("secretKey", "nodeRestApi");

app.use("/animals", animalRouter);
app.use("/noticias", noticiasRouter);
app.use("/user", usersRouter);

app.get("/", (request, response) => {
  response.status(200).json({
    message: "Welcome to server",
    app: "My App",
  });
});

app.post("/", (request, response, next) => {
  response.status(200).json({
    status: 200,
    data: { method: "POST", message: "Bienvenido a la app (POST)" },
  });
});

app.use((request, response, next) => {
  let error = new Error();
  error.status = 404;
  error.message = HTTPSTATUSCODE[404];
  next(error);
});

app.use((error, request, response, next) => {
  return response
    .status((error.status = 500))
    .json((error.message = "Unexpected error"));
});

app.listen(process.env.PORT, () => {
  console.log("app running in port ${process.env.PORT}");
});

// hola
