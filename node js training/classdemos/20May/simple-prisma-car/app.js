const express = require('express');
const app = express();
const carRoutes = require('./routes/carRoutes');

app.use(express.json());
app.use('/api/cars', carRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// {
//     "name": "Tesla Model 3",
//     "brand": "Tesla",
//     "model": "Model 3",
//     "year": 2023,
//     "color": "White",
//     "price": 55000
// }
