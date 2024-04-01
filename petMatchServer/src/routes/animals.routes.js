const express = require("express")

const animalRouter = express.Router();
const { getAnimals, getAnimal, createAnimal, updateAnimal, deleteAnimal} = require("../controllers/animal.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

animalRouter.get("/", getAnimals );
animalRouter.get("/:id", getAnimal );
animalRouter.post("/",  createAnimal);
animalRouter.patch("/:id", updateAnimal);
animalRouter.delete("/:id",  deleteAnimal);

module.exports = animalRouter;

