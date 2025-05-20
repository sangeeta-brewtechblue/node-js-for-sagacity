import express from 'express';

const app = express();
app.use('/api/cars', carRoutes);
const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);

})
