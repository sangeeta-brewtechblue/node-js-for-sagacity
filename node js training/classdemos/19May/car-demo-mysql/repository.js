import dbconnection from "./dbconnection";

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
    export default getAllCars;