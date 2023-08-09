import mysql from 'mysql2/promise';

export default async function getUsers(data) {

    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    txtUserId = getRequestString("UserId");
    const query = `SELECT * FROM health_records WHERE id = (${data.id})`;
    const [rows] = await connection.query(query);
    return rows;
}

