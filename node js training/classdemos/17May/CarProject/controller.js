//const express= require('express');
import express from 'express';
import { getAllCars } from './repository.js';  
const app=express();    
app.use(express.json());
app.get('/',(req,res)=>{

    res.send('hello world');        
})
app.get('/cars',(req,res)=>{
    
    res.send(getAllCars());
})
app.listen(3000,()=>{console.log("server running on port 3000")})


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
