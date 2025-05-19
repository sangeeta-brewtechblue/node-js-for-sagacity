import mysql from 'mysql2';

const dbconnection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'root',
  database:'dbcars'
});
dbconnection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});
export default dbconnection;
