const Noticias = require('../models/noticias.models');
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
 
// get all
const getNoticias = async (request, response) => {
    try {
        console.log(response)
        const noticias = await Noticias.find();
        response.status(200).json(noticias);
        
 
    } catch (error) {
        console.log(error.message);
        response.status(404).json({ message: HTTPSTATUSCODE[400],});
    }
}
 
// get 1
const getNoticia = async (request, response) => {
    try {
        const id = request.params.id;
        const noticia = await Noticias.findById(id);
        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: noticia
        });
 
    } catch (error) {
        response.status(404).json({message: error.message});
    }
}
 
// post
const createNoticia = async (request, response) => {
    const noticia = new Noticias(request.body);
    try {
        await noticia.save();
        response.status(201).json({
            status: 201,
            message: HTTPSTATUSCODE[201], 
            noticia: noticia});
 
    } catch (error) {
        response.status(400).json({message: error.message});
    }
 
}
 
// patch
const updateNoticia = async (request, response) => {
    try {
        const {id}= request.params;
        const body = new Noticias(request.body);
        body._id = id    
        const noticia = await Noticias.findByIdAndUpdate(id, body, {new: true});
        if (!noticia) {
            return response.status(404).json({ 
                status: 404,
                message: HTTPSTATUSCODE[404], 
            });
        }
        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: noticia
        });

    } catch (error) {
        console.error(error.message);
        response.status(400).json({ message: error.message });
    }
};
 

// delete
const deleteNoticia = async (request, response) => {
    try {
        const id = request.params.id;
        const noticia = await Noticias.findByIdAndDelete(id);

        if (!noticia) {
            return response.status(404).json({ message: 'noticia no encontrada' });
        }

        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: noticia
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).json({
            status: 500,
            message: HTTPSTATUSCODE[500],
            data: noticia
        });
    }
};

 
 
module.exports = {
    getNoticias,
    getNoticia,
    createNoticia,
    updateNoticia,
    deleteNoticia
}