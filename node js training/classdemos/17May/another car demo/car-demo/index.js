
const express = require('express');
const bodyParser = require('body-parser');
const cars = require('./carsData');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//  Get All Cars
app.get('/cars', (req, res) => {
  res.json(cars);
});

//  Get Car by ID
app.get('/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  car ? res.json(car) : res.status(404).send('Car not found');
});

//  Add a New Car
app.post('/cars', (req, res) => {
  const newCar = {
    id: req,
    make: req.body.make,
    color: req.body.color,
    price: req.body.price
  };
  
  cars.push(newCar);
  res.status(201).json(newCar);
});

//  Update Car by ID
app.put('/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  if (car) {
    car.make = req.body.make;
    car.color = req.body.color;
    car.price = req.body.price;
    res.json(car);
  } else {
    res.status(404).send('Car not found');
  }
});

//  Delete Car by ID
app.delete('/cars/:id', (req, res) => {
  const index = cars.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    cars.splice(index, 1);
    res.send('Car deleted');
  } else {
    res.status(404).send('Car not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
