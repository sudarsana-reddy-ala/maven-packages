import mysql from 'mysql2/promise';

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const query = "SELECT * FROM Repository WHERE TAG = 'javascript' AND public = 1";
const [rows] = await connection.query(query);