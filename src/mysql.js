import mysql from 'mysql2/promise';

const connection = await mysql.createConnection(process.env.DATABASE_URL);

txtUserId = getRequestString("UserId");
query = "SELECT * FROM Users WHERE UserId = " + txtUserId;
const [rows] = await connection.query(query);