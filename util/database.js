const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'new_schema',
    password: 'Vivek@#123'
});

module.exports = pool.promise();