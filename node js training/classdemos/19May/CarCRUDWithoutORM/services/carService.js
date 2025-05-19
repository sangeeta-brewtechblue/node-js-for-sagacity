// services/carService.js
const db = require('../db');

exports.getAllCars = (callback) => {
  const sql = 'SELECT * FROM cars';
  db.query(sql, callback);
};

exports.getCarById = (id, callback) => {
  const sql = 'SELECT * FROM cars WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

exports.createCar = (car, callback) => {
  const sql = 'INSERT INTO cars SET ?';
  db.query(sql, car, callback);
};

exports.updateCar = (id, car, callback) => {
  const sql = 'UPDATE cars SET ? WHERE id = ?';
  db.query(sql, [car, id], callback);
};

exports.deleteCar = (id, callback) => {
  const sql = 'DELETE FROM cars WHERE id = ?';
  db.query(sql, [id], callback);
};
