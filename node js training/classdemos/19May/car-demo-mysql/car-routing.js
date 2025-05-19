import express from 'express';
import { Router } from 'express';
import getAllCars from './repository.js';
const app=express();
//const router=app.router();
const port=3000;
const carrouter=Router();
carrouter.get('/cars',(req,res)=>{
    getAllCars((err,results)=>{
        if(err){
            res.status(500).send('Error fetching cars');
            return;
        }
        res.json(results);
    });
})
app.use('/api',carrouter);
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})


