import dbconnection from "./dbconnection.js";

const getAllCars = (callback) => {      
    const sql = 'SELECT * FROM cars';
    dbconnection.query(sql, (err, results) => {
        if (err) {
        console.error('Error fetching cars:', err);
        callback(err, null);
        return;
        }
        callback(null, results);
    });
    }
  

const getCarById = (carId, callback) => {
    const sql = 'SELECT * FROM cars WHERE id = ?';
    dbconnection.query(sql, [carId], (err, results) => {
        if (err) {
            console.error('Error fetching car:', err);
            callback(err, null);
            return;
        }
        if (results.length === 0) {
            callback(null, null);
            return;
        }
        callback(null, results[0]);
    });
}

const addCar=(car,callback)=>{
    const { id, model, color, price } = car;
    const sql = 'INSERT INTO cars (id, model, color, price) VALUES (?, ?, ?, ?)';
    dbconnection.query(sql, [id, model, color, price], (err, results) => {
        if (err) {
            console.error('Error adding car:', err);
            callback(err);
            return;
        }
        callback(null, { id, model, color, price });
    });
}

const deleteCar=(carId,callback)=>{     
        const sql = 'DELETE FROM cars WHERE id = ?';    
        dbconnection.query(sql, [carId], (err, results) => {
            if (err) {
                console.error('Error deleting car:', err);
                callback(err);
                return;
            }
            if (results.affectedRows === 0) {
                callback(null, null);
                return;
            }
            callback(null, { id: carId });
        });             
    }        

const updateCar=(carId, car, callback) => {
    const { model, color, price } = car;
    const sql = 'UPDATE cars SET model = ?, color = ?, price = ? WHERE id = ?';
    dbconnection.query(sql, [model, color, price, carId], (err, results) => {
        if (err) {
            console.error('Error updating car:', err);
            callback(err);
            return;
        }
        if (results.affectedRows === 0) {
            callback(null, null);
            return;
        }
        callback(null, { id: carId, model, color, price });
    });
}






export { getAllCars, getCarById,addCar,deleteCar,updateCar};


