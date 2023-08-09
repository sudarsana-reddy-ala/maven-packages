const mysql = require('mysql2/promise');

// #comments
class MySqlUtil {
    async getUsers(data) {

        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        txtUserId = getRequestString("UserId");
        const query = `SELECT * FROM accounts WHERE username = ${data.username} AND password = ${data.password}`;
        const [rows] = await connection.query(query);
        return rows;
    }
}

module.exports = { MySqlUtil }