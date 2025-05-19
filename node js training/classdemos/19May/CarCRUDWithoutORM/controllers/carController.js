// controllers/carController.js
const carService = require('../services/carService');

exports.getAllCars = (req, res) => {
  carService.getAllCars((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

exports.getCarById = (req, res) => {
  const carId = req.params.id;
  carService.getCarById(carId, (err, car) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!car) return res.status(404).json({ error: 'Car not found' });
    res.status(200).json(car);
  });
};

exports.createCar = (req, res) => {
  const newCar = req.body;
  carService.createCar(newCar, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Car created successfully', id: result.insertId });
  });
};

exports.updateCar = (req, res) => {
  const carId = req.params.id;
  const updatedCar = req.body;
  carService.updateCar(carId, updatedCar, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Car updated successfully' });
  });
};

exports.deleteCar = (req, res) => {
  const carId = req.params.id;
  carService.deleteCar(carId, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(204).send();
  });
};
