const Animal = require('../models/animals.models');
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
 
// get all
const getAnimals = async (request, response) => {
    try {
        console.log(response)
        const animals = await Animal.find();
        response.status(200).json(animals);
        
 
    } catch (error) {
        console.log(error.message);
        response.status(404).json({ message: HTTPSTATUSCODE[400],});
    }
}
 
// get 1
const getAnimal = async (request, response) => {
    try {
        const { id }  = request.params;
        const animal = await Animal.findById(id);
      
        console.log(animal);
        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: animal
        });
 
    } catch (error) {
        response.status(404).json({message: error.message});
    }
}
 
// post
const createAnimal = async (request, response) => {
    const animal = new Animal(request.body);
    try {
        await animal.save();
        response.status(201).json({
            status: 201,
            message: HTTPSTATUSCODE[201], 
            movie: animal});
 
    } catch (error) {
        response.status(400).json({message: error.message});
    }
 
}
 
// patch
const updateAnimal = async (request, response) => {
    try {
        const {id}= request.params;
        const body = new Animal(request.body);
        body._id = id    
        const animal = await Animal.findByIdAndUpdate(id, body, {new: true});
        if (!animal) {
            return response.status(404).json({ 
                status: 404,
                message: HTTPSTATUSCODE[404], 
            });
        }
        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: animal
        });

    } catch (error) {
        console.error(error.message);
        response.status(400).json({ message: error.message });
    }
};
 

// delete
const deleteAnimal = async (request, response) => {
    try {
        const id = request.params.id;
        const animal = await Animal.findByIdAndDelete(id);

        if (!animal) {
            return response.status(404).json({ message: 'Animal no encontrada' });
        }

        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: animal
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).json({
            status: 500,
            message: HTTPSTATUSCODE[500],
            data: animal
        });
    }
};

 
 
module.exports = {
    getAnimals,
    getAnimal,
    createAnimal,
    updateAnimal,
    deleteAnimal
}