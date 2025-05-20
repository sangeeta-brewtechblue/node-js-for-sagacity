import express from 'express';
import { Router } from 'express';
import { getAllCars,  getCarById ,addCar,deleteCar,updateCar} from './repository.js';
const app=express();
app.use(express.json())
//const router=app.router();
const port=3000;
const carrouter=Router();

//get all cars
carrouter.get('/cars',(req,res)=>{
    getAllCars((err,results)=>{
        if(err){
            res.status(500).send('Error fetching cars');
            return;
        }
        res.json(results);
    });
})
//get car by id
carrouter.get('/cars/:id',(req,res)=>{
    console.log('Fetching car with ID:', req.params.id);
    const carId = req.params.id;
    getCarById(carId, (err, car) => {
        if (err) {
            res.status(500).send('Error fetching car');
            return;
        }
        if (!car) {
            res.status(404).send('Car not found');
            return;
        }
        res.json(car);
    });
})

//add car
carrouter.post('/cars',(req,res)=>{
    const { id, model, color, price } = req.body;
    const newCar = { id, model, color, price };
    addCar(newCar, (err) => {
        if (err) {
            res.status(500).send('Error adding car');
            return;
        }
        res.status(201).json(newCar);
    });         
}
)
//delete car
carrouter.delete('/cars/:id',(req,res)=>{
    const carId = req.params.id;
    console.log('Deleting car with ID:', carId);
    deleteCar(carId, (err) => {
        if (err) {
            res.status(500).send('Error deleting car');
            return;
        }
        res.status(204).send();
    });
}
)  

//update car
carrouter.put('/cars/:id',(req,res)=>{
    const carId = req.params.id;
    const { model, color, price } = req.body;
    const updatedCar = { id: carId, model, color, price };
    updateCar(carId, updatedCar, (err) => {
        if (err) {
            res.status(500).send('Error updating car');
            return;
        }
        res.json(updatedCar);
    }); 

    
}  )     


app.use('/api',carrouter);
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})


