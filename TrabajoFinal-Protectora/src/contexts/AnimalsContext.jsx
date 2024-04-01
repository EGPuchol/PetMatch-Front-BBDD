import React, { createContext, useState, useContext } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado

// Crear el contexto
const AnimalsContext = createContext();

// Función para utilizar el contexto
export const useAnimals = () => useContext(AnimalsContext);

// Crear el proveedor
export const AnimalsProvider = ({ children }) => {
    const [animals, setAnimals] = useState([]);

    // Función para cargar los animales desde la API
    const fetchAnimals = async () => {
        try {
            const response = await axios.get('http://localhost:3300/animals');
            setAnimals(response.data); // Ajusta según la estructura de tu respuesta
        } catch (error) {
            console.error("Error al cargar los animales:", error);
        }
    };

    // Función para actualizar el estado de adopción de un animal
    const updateAdoptionStatus = async (id, status) => {
        try {
            await axios.patch(`http://localhost:3300/animals/${id}/adopt`, { estadoAdopcion: status });
            fetchAnimals(); // Recargar los animales para reflejar los cambios
        } catch (error) {
            console.error("Error al actualizar el estado de adopción:", error);
        }
    };

    // Proporcionar el estado y las funciones a los componentes hijos
    return (
        <AnimalsContext.Provider value={{ animals, fetchAnimals, updateAdoptionStatus }}>
            {children}
        </AnimalsContext.Provider>
    );
};