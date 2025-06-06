// app.js
const express = require('express');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoute');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/cars', carRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
