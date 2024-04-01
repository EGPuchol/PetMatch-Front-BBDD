const express = require("express")

const noticiasRouter = express.Router();
const { getNoticias, getNoticia, createNoticia, updateNoticia, deleteNoticia} = require("../controllers/noticias.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

noticiasRouter.get("/", getNoticias );
noticiasRouter.get("/:id", getNoticia );
noticiasRouter.post("/",  createNoticia);
noticiasRouter.patch("/:id", updateNoticia,);
noticiasRouter.delete("/:id",  deleteNoticia);

module.exports = noticiasRouter;
