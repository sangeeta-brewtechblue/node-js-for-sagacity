const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.post('/greet', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  res.json({ message: `Hello, ${name}!` });
});

module.exports = app;
