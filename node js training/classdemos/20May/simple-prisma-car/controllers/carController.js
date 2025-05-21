// controllers/CarController.js
const carService = require('../services/carService');

const getAllCars = async (req, res) => {
    try {
        const cars = await carService.getAllCars();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCarById = async (req, res) => {
    try {
        const car = await carService.getCarById(parseInt(req.params.id));
        car ? res.status(200).json(car) : res.status(404).json({ error: 'Car not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCar = async (req, res) => {
    try {
        const newCar = await carService.
        createCar(req.body);
        res.status(201).json(newCar);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCar = async (req, res) => {
    try {
        const updatedCar = await carService.updateCar(parseInt(req.params.id), req.body);
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCar = async (req, res) => {
    try {
        await carService.deleteCar(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
};
